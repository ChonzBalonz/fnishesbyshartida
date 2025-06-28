import React, { useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Define your routes in the order you want to swipe through them
const ROUTES = ["/", "/about", "/gallery", "/contact"];

const isMobile = () => window.innerWidth <= 800;

const SwipeNavigator: React.FC = () => {
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isMobile()) return;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.changedTouches[0].screenX;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX.current = e.changedTouches[0].screenX;
      handleSwipe();
    };
    const handleSwipe = () => {
      if (touchStartX.current === null || touchEndX.current === null) return;
      const diff = touchStartX.current - touchEndX.current;
      if (Math.abs(diff) < 60) return; // Minimum swipe distance
      const currentIndex = ROUTES.indexOf(location.pathname);
      if (diff > 0 && currentIndex < ROUTES.length - 1) {
        // Swipe left: next page
        navigate(ROUTES[currentIndex + 1]);
      } else if (diff < 0 && currentIndex > 0) {
        // Swipe right: previous page
        navigate(ROUTES[currentIndex - 1]);
      }
    };
    document.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    document.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [location.pathname, navigate]);

  return null; // This component does not render anything
};

export default SwipeNavigator;
