import { useState } from "react";

interface SearchProps {
    onSearch: (term: string) => void;
}

const Search = ({ onSearch }: SearchProps) => {
    const [searchTerm, setSearchTerm] = useState("");

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

    return (
        <div className="relative w-[80%] ml-0 mt-8 mb-4">
            <div className="flex">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
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
        </div>
    );
};

export default Search;
