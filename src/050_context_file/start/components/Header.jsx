import { useTheme } from "../context/ThemeContext";


const Header = () => {
  const THEMES = ["light", "dark", "red"];
  const [theme, setTheme] = useTheme();
  const changeTheme = (e) => setTheme(e.target.value);
  return (
    <header className={`content-${theme}`}>
      {THEMES.map((_theme) => {
        return (
          <label htmlFor="">
            <input type="radio" key={_theme} value={_theme} checked={theme === _theme} onChange={changeTheme} />
            {_theme}
          </label>
        );
      })}
    </header>
  );
};

export default Header;
