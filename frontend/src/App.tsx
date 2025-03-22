import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './routes/Home'
import SearchRegisteredExchange from './routes/SearchRegisteredExchange'
import SearchUnregisteredExchange from "./routes/SearchUnregisteredExchange";
import ProviderResult from "./routes/ProviderResult";
import Report from "./routes/Report";
import Header from "./components/main/Header";
import Setting from "./routes/Setting";
import Notification from "./routes/Notification";

function App() {
  return (
      <>
          <BrowserRouter>
              <Header />
              <Routes>
                  <Route path='/' element={<Home />}/>
                  <Route path='/setting' element={<Setting />}/>
                  <Route path='/searchregisteredexchange' element={<SearchRegisteredExchange />}/>
                  <Route path='/searchunregisteredexchange' element={<SearchUnregisteredExchange />}/>
                  <Route path='/providerresult/:id' element={<ProviderResult/>}/>
                  <Route path='/report' element={<Report />}/>
                  <Route path='/notification' element={<Notification />}/>
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
