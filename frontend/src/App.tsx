import React from 'react';
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import Home from './routes/Home'
import ProviderResult from "./routes/ProviderResult";
import MainHeader from "./components/common/MainHeader";
import SubHeader from "./components/common/SubHeader";
import Setting from "./routes/Setting";
import Notification from "./routes/Notification";
import SearchProvider from "./routes/SearchProvider";
import NoResult from "./routes/NoResult";
import NoticeResult from './routes/NoticeResult';

const AppRoutes = () => {
    const location = useLocation();
    const isMainPage = location.pathname === "/";

    return (
        <>
            {isMainPage ? <MainHeader /> : <SubHeader />}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/setting' element={<Setting />} />
                <Route path='/searchprovider' element={<SearchProvider />} />
                <Route path='/providerresult/:serviceName' element={<ProviderResult />} />
                <Route path='/noresult' element={<NoResult />} />
                <Route path='/notification' element={<Notification />} />
                <Route path='/noticeresult/:noticeId' element={<NoticeResult />} />
            </Routes>
        </>
    );
};

function App() {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
}

export default App;
