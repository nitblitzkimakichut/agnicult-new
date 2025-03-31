'use client'

// Custom scroll animations for mobile and desktop
export const animateOnScroll = () => {
  // Check if the browser supports IntersectionObserver
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    // Select all elements with the 'reveal-on-scroll' class
    const elements = document.querySelectorAll('.reveal-on-scroll');

    // Create a new IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // If the element is in the viewport
        if (entry.isIntersecting) {
          // Add the 'revealed' class
          entry.target.classList.add('revealed');
          // Stop observing the element
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null, // relative to the viewport
      threshold: 0.15, // when 15% of the element is visible
      rootMargin: '0px 0px -50px 0px' // trigger a bit earlier
    });

    // Start observing each element
    elements.forEach((element) => {
      observer.observe(element);
    });

    // Return a cleanup function
    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }
};

// Use this function to add a parallax effect to an element
export const addParallaxEffect = (elementSelector: string, speed: number = 0.2) => {
  if (typeof window !== 'undefined') {
    const element = document.querySelector(elementSelector);
    
    if (element) {
      window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const offset = scrollPosition * speed;
        
        // Apply the parallax effect
        (element as HTMLElement).style.transform = `translateY(${offset}px)`;
      });
    }
  }
};

// Image path helper for dynamic paths
export const getImagePath = (imageName: string) => {
  return `/images/${imageName}`;
};

// Firebase-like animation effect for ember elements
export const addEmberEffect = () => {
  if (typeof window !== 'undefined') {
    const emberElements = document.querySelectorAll('.ember-effect');
    
    emberElements.forEach((element) => {
      // Random flicker timing for each element
      const flickerDuration = 2000 + Math.random() * 3000;
      
      // Set animation properties
      (element as HTMLElement).style.animation = `flicker ${flickerDuration}ms infinite ease-in-out`;
    });
  }
}; 