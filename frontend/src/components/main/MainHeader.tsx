import { Link } from "react-router-dom";

const MainHeader = () => {
    return (
        <header style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem",
            backgroundColor: "#f5f5f5",
            borderBottom: "1px solid #ddd"
        }}>
            <nav>
                <Link to="/" style={{marginRight: "1rem"}}>Logo</Link>
                <Link to="/setting">SettingLogo</Link>
            </nav>
        </header>
    );
};

export default MainHeader;
