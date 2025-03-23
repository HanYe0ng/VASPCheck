import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";

const asIconComponent = (Icon: any) => Icon as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
const LeftArrow = asIconComponent(MdArrowBackIosNew);

const SubHeader = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const isMainPage = location.pathname === "/";

    const handleBackToMain = () => {
        if (location.pathname.startsWith("/providerresult")){
            navigate("/searchprovider");
        }else{
            navigate("/");
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 flex items-center h-[60px] px-2 py-4 bg-gray-100 border-b border-gray-300">
            {!isMainPage && (
                <button
                    onClick={handleBackToMain}
                    className="bg-gray-100 text-gray-700 p-1 transition"
                >
                    <LeftArrow className="text-2xl text-gray-400" />
                </button>
            )}

            <div className="flex items-center ml-5">
                <Link
                    to="/"
                    className="font-bold text-lg text-gray-800"
                >
                    불법 거래소 근절!
                </Link>
            </div>
        </header>
    );
};

export default SubHeader;
