import { useState } from "react";
import {Provider} from "./useProviderDetail";

interface SearchProps {
    onSearch: (term: string) => void;
    providers: Provider[];
}

const Search = ({ onSearch, providers }: SearchProps) => {
    const [searchTerm, setSearchTerm] = useState("");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_isFocused, setIsFocused] = useState(false);

    const suggestions = providers.filter((p) =>
        p.serviceName.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        onSearch(searchTerm);
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch();  // Enter 누르면 검색 실행
        }
    };

    const handleSuggestionClick = (name: string) => {
        setSearchTerm(name);
        onSearch(name);
    };

    return (
        <div style={{ position: "relative", width: "400px" }}>
            <div style={{ display: "flex" }}>
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
                    style={{
                        flex: 1,
                        padding: "0.5rem",
                        boxSizing: "border-box"
                    }}
                />
                <button onClick={handleSearch} style={{ padding: "0.5rem 1rem" }}>
                    검색
                </button>
            </div>

            {searchTerm && suggestions.length > 0 && (
                <ul style={{
                    position: "absolute",
                    top: "100%", // input 아래
                    left: 0,
                    right: 0,
                    background: "#fff",
                    border: "1px solid #ccc",
                    listStyle: "none",
                    margin: 0,
                    padding: "0.5rem 0",
                    zIndex: 10,
                }}>
                    {suggestions.map((sugg) => (
                        <li key={sugg.id}
                            onMouseDown={() => handleSuggestionClick(sugg.serviceName)}
                            style={{
                                padding: "0.5rem 1rem",
                                cursor: "pointer",
                                borderBottom: "1px solid #eee"
                            }}>
                            {sugg.serviceName}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Search;
