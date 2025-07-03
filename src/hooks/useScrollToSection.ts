import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to section if there's a hash in the URL
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        // Small delay to ensure the page has rendered
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start',
            inline: 'nearest'
          });
        }, 100);
      }
    } else {
      // Scroll to top when navigating to a new page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);
};

export default useScrollToSection;
