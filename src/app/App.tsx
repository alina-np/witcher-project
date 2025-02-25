import { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./styles/index.scss";
import { MainPage } from "pages/MainPage";
import { ApplicationPage } from "pages/ApplicationPage";

function App() {
  return (
    <div className="app">
      <Link to={"/"}>Главная</Link>
      <Link to={"/application"}>Заявка</Link>
      <Suspense fallback={<div>Загрузка</div>}>
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/application"} element={<ApplicationPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
