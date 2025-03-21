import { useState } from "react";

interface SearchProps {
    onSearch: (term: string) => void;
}

const Search = ({ onSearch }: SearchProps) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <div>
            {!isFocused}
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => { if (searchTerm === "") setIsFocused(false); }}
                placeholder="검색어를 입력하세요"
            />
        </div>
    );
};

export default Search;
