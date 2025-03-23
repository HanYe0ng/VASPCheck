import { Link } from "react-router-dom";
import { MdOutlineSettings } from "react-icons/md";

const SettingsIcon = MdOutlineSettings as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

const MainHeader = () => {
    return (
        <header className="flex justify-between items-center h-[60px] px-5 py-3 bg-gray-100 border-b border-gray-300">
            <nav>
                <Link to="/" className="font-bold text-lg text-gray-800">
                    불법 거래소 근절!
                </Link>
            </nav>

            <div className="pr-4">
                <Link to="/setting" className="text-2xl text-gray-600 transition">
                    <SettingsIcon />
                </Link>
            </div>
        </header>
    );
};

export default MainHeader;
