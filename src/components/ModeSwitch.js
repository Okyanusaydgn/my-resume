import React, { useState, useEffect } from "react";

export default function ModeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("tr");

  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode") === "true";
    setIsDarkMode(isDarkMode);

    const savedLanguage = localStorage.getItem("currentLanguage") || "tr";
    setCurrentLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("isDarkMode", isDarkMode);

    localStorage.setItem("currentLanguage", currentLanguage);
  }, [isDarkMode, currentLanguage]);

  const toggleMode = () => setIsDarkMode(!isDarkMode);

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === "tr" ? "en" : "tr");
  };

  return (
    <div className="flex gap-2 justify-end ">
      <div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onClick={() => toggleMode()}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-500">
            {isDarkMode ? "Dark" : "Light"}
          </span>
        </label>
      </div>
      <div>
        <button onClick={toggleLanguage} className="text-indigo-800">
          {currentLanguage === "tr" ? "ENG" : "TR"}
        </button>
        <span>'YE GEÇ</span>
      </div>
    </div>
  );
}

// `${x}'ye geç
