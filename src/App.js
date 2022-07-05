import MainPage from "./pages/mainPage/MainPage";
import SecondPage from "./pages/secondPage/SecondPage";
import ThirdPage from "./pages/thirdPage/ThirdPage";
import {BrowserRouter , Routes , Route} from "react-router-dom";
import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
function App() {
  return (
      <BrowserRouter>
          <Header/> it is Header
           <Routes>
            =======================================
            <Route index element={<MainPage/>} />
            =======================================
            =======================================
            <Route path='/SecondPage' element={<SecondPage/>} />
            =======================================
            ======================================
            <Route path='/ThirdPage' element={<ThirdPage/>} />
            =======================================
          </Routes>
          <Footer/> When this Footer
       </BrowserRouter>
  );
}

export default App;
