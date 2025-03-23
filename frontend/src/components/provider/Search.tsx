import { useState } from "react";
import { ProviderDetail } from "./useProviderDetail";

interface SearchProps {
    onSearch: (term: string) => void;
    providerDetail: ProviderDetail[];
}

const Search = ({ onSearch, providerDetail }: SearchProps) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const suggestions = providerDetail.filter((p) =>
        p.serviceName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    const handleSuggestionClick = (name: string) => {
        setSearchTerm(name);
        onSearch(name);
    };

    return (
        <div className="relative w-[80%] ml-0 mt-8 mb-4">
            <div className="flex">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => {
                        if (searchTerm === "") setIsFocused(false);
                    }}
                    placeholder="검색어를 입력하세요"
                    className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    onClick={handleSearch}
                    className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition"
                >
                    검색
                </button>
            </div>

            {searchTerm && suggestions.length > 0 && (
                <ul className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md mt-1 z-10 max-h-60 overflow-y-auto shadow-lg">
                    {suggestions.map((sugg) => (
                        <li
                            key={sugg.code}
                            onMouseDown={() => handleSuggestionClick(sugg.serviceName)}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100 border-b last:border-b-0"
                        >
                            {sugg.serviceName}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Search;
