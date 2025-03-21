import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="App-header">
            <h1>불법 거래소 근절!</h1>
            <nav>
                <Link to="/">Logo</Link> | <Link to="/setting">SettingLogo</Link>
            </nav>
        </header>
    )
}

export default Header;