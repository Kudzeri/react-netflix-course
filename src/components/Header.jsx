import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { SearchInput } from "./ui/SearchInput";

const Header = ({ searchTerm, setSearchTerm }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="px-32 flex items-center justify-between text-white py-4 flex-col gap-2 md:flex-row">
      <Link to={'/'} className="text-4xl text-red-600 font-bold text-shadow-lg">MovieX</Link>
      <SearchInput value={searchTerm} onChange={setSearchTerm} />
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-700 transition-colors"
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </button>
    </div>
  );
};

export default Header;


