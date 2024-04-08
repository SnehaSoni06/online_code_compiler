import React from 'react';
import Select from 'react-select';
import '../Navbar.css';

const Navbar = ({ userLang, setUserLang, userTheme,
  setUserTheme, fontSize, setFontSize }) => {
  const languages = [
    { value: "c", label: "C" },
    { value: "cpp", label: "C++" },
    { value: "javascript", label: "JavaScript" },
    // { value: "dart", label: "Dart" },
  ];
  const themes = [
    { value: "vs-dark", label: "Dark" },
    { value: "light", label: "Light" },
  ];


  


  return (
    <div className="navbar">
    <h1 className="title">Fullstack AAT Online Code Compiler</h1>
    <div className="dropdowns">
      <Select
        className="select"
        options={languages}
        value={userLang}
        onChange={(e) => setUserLang(e.value)}
        placeholder={userLang}
      />
      <Select
        className="select"
        options={themes}
        value={userTheme}
        onChange={(e) => setUserTheme(e.value)}
        placeholder={userTheme}
      />
    </div>
    <div className="font-size-container">
      <label className="font_size">Font Size</label>
      <input
        type="range"
        min="18"
        max="40"
        value={fontSize}
        step="2"
        onChange={(e) => setFontSize(Number(e.target.value))}
      />
    </div>
  </div>
);
}

export default Navbar;