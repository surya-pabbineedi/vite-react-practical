import { useState, useEffect } from "react";

interface SearchProps {
  onSearch: (searchString: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      onSearch(searchString);
    }, 500);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [searchString, onSearch]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
  };

  return (
    <input
      key={"search"}
      type="text"
      value={searchString}
      onChange={handleInputChange}
      placeholder="Search users..."
    />
  );
};

export default Search;
