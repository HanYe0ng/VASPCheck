import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './routes/Home'
import SearchRegisteredExchange from './routes/SearchRegisteredExchange'
import SearchUnregisteredExchange from "./routes/SearchUnregisteredExchange";
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
                  <Route path='/SearchRegisteredExchange' element={<SearchRegisteredExchange />}/>
                  <Route path='/SearchUnregisteredExchange' element={<SearchUnregisteredExchange />}/>
                  <Route path='/report' element={<Report />}/>
                  <Route path='/notification' element={<Notification />}/>
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
