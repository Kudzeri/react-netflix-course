export function SearchInput({ value, onChange }) {
  return (
    <input
      type="search"
      className="bg-white/25 rounded-xl md:w-95 py-1 text-black px-2 shadow-md focus:outline-none focus:ring focus:black focus:bg-white/75"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Введите запрос"
    />
  );
}
