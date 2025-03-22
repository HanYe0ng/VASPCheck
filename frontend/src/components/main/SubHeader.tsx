import { Link, useLocation, useNavigate } from "react-router-dom";

const SubHeader = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const isMainPage = location.pathname === "/";  // 메인인지 확인

    const handleBackToMain = () => {
        navigate("/");
    };

    return (
        <header style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem",
            backgroundColor: "#f5f5f5",
            borderBottom: "1px solid #ddd"
        }}>
            {!isMainPage && (
                <button
                    onClick={handleBackToMain}
                    style={{
                        padding: "0.5rem 1rem",
                        backgroundColor: "white",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        marginRight: "1rem"
                    }}
                >
                    🔙
                </button>
            )}
            <nav>
                <Link to="/" style={{marginRight: "1rem"}}>Home</Link>
            </nav>
            <h1 style={{margin: 0}}>불법 거래소 근절!</h1>
        </header>
    );
};

export default SubHeader;
