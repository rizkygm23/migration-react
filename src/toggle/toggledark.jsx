import React, { useState, useEffect } from 'react';

const ToggledarkXl = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check and apply the saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  return (
    <label
      htmlFor="AcceptConditions"
      className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 dark:bg-gray-800 transition [-webkit-tap-highlight-color:_transparent] peer-checked:bg-green-500"
    >
      <input
        type="checkbox"
        id="AcceptConditions"
        className="peer sr-only [&:checked_+_span_img[data-checked-icon]]:block [&:checked_+_span_img[data-unchecked-icon]]:hidden"
        checked={isDarkMode}
        onChange={handleToggle}
      />

      <span
        className="absolute inset-y-0 start-0 z-10 m-1 inline-flex size-6 items-center justify-center rounded-full bg-slate-50 dark:bg-slate-400 text-gray-400 transition-all peer-checked:start-6 peer-checked:text-green-600"
      >
        <img
          data-unchecked-icon
          src="/assets/images/brightness.png"
          alt="Light Mode Icon"
          className="h-4 w-4"
        />

        <img
          data-checked-icon
          src="/assets/images/night-mode.png"
          alt="Dark Mode Icon"
          className="hidden h-4 w-4"
        />
      </span>
    </label>
  );
};

export default ToggledarkXl;
