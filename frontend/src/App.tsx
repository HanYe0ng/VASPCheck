import React from 'react';
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import Home from './routes/Home'
import ProviderResult from "./routes/ProviderResult";
import Report from "./routes/Report";
import MainHeader from "./components/main/MainHeader";
import SubHeader from "./components/main/SubHeader";
import Setting from "./routes/Setting";
import Notification from "./routes/Notification";
import SearchProvider from "./routes/SearchProvider";
import NoResult from "./routes/NoResult";

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
                <Route path='/providerresult/:id' element={<ProviderResult />} />
                <Route path='/noresult' element={<NoResult />} />
                <Route path='/report' element={<Report />} />
                <Route path='/notification' element={<Notification />} />
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
