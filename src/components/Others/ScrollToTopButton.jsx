

export const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <div className="fixed bottom-8 right-8 ">
      <button
        onClick={scrollToTop}
        className="mb-10  px-1 py-1 bg-blue-500 text-white rounded-full shadow-lg sm:px-2 sm:py-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 15l7-7 7 7"
          />
        </svg>
        
      </button>
      
    </div>
  );
};
