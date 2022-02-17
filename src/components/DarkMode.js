import React from "react";
import "./DarkMode.css";

const DarkMode = () => {
  let clickedClass = "clicked";
  const body = document.body;
  const s80Theme = "s80";
  const darkTheme = "dark";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === s80Theme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(s80Theme);
  }

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, s80Theme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "s80");
      theme = s80Theme;
    } else {
      body.classList.replace(s80Theme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
    }
  };

  return (
    <div>
      <button
        className={theme === "dark" ? clickedClass : ""}
        id="darkMode"
        onClick={(e) => switchTheme(e)}
      ></button>
    </div>
  );
};

export default DarkMode;
