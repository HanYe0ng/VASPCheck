import { Link } from "react-router-dom";
import {MdSearch, MdWarning, MdArrowForwardIos} from "react-icons/md";
import { useNotices } from "../components/notification/useNotice";

const asIconComponent = (Icon: any) => Icon as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

const SearchIcon = asIconComponent(MdSearch);
const WarningIcon = asIconComponent(MdWarning);
const RightArrow = asIconComponent(MdArrowForwardIos);

const Home = () => {
    const notices = useNotices();

    return (
        <div className="bg-gray-50 p-4">
            <div className="space-y-4 mb-8">
                <Link to="/searchprovider">
                    <div className="bg-white shadow rounded-xl p-4 flex items-center justify-between">
                        <SearchIcon className="text-2xl text-[#3E87B6] mr-4"/>
                        <div className="flex-1">
                            <p className="font-semibold text-lg">거래소 조회</p>
                            <p className="text-gray-500 text-sm">등록된 거래소인지 확인해보세요</p>
                        </div>
                        <RightArrow className="text-2xl text-gray-400"/>
                    </div>
                </Link>

                <Link to="/report" className="mt-3 block">
                    <div className="bg-white shadow rounded-xl p-4 flex items-center justify-between">
                        <WarningIcon className="text-2xl text-[#3E87B6] mr-3"/>
                        <div className="flex-1">
                            <p className="font-semibold text-lg">신고하기</p>
                            <p className="text-gray-500 text-sm">가짜거래소를 신고해주세요</p>
                        </div>
                        <RightArrow className="text-2xl text-gray-400"/>
                    </div>
                </Link>
            </div>

            <section>
                <Link to="/notification" className="inline-flex items-center mb-3">
                    <h2 className="font-semibold text-base">공지사항</h2>
                    <RightArrow className="text-gray-400 text-base ml-2" />
                </Link>
                <ul className="space-y-2">
                    {notices && notices.length > 0 ? (
                        notices.map((n) => (
                            <li key={n.id} className="flex justify-between text-sm text-gray-700">
                                <span>{n.summary}</span>
                                <span className="text-gray-400">
                                    {new Date(n.createdAt).toLocaleDateString()}
                                </span>
                            </li>
                        ))
                    ) : (
                        <li className="text-sm text-gray-500">공지 없다.</li>
                    )}
                </ul>
            </section>
        </div>
    );
};

export default Home;
