import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import { Header } from "widgets/Header";
import { MainPage } from "pages/MainPage";
import { ApplicationPage } from "pages/ApplicationPage";
import { Footer } from "widgets/Footer/ui/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Suspense fallback={<div>Загрузка</div>}>
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/application"} element={<ApplicationPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
