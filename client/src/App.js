import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "animate.css/animate.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Loading from "./components/Loading/Loading";
import PageNotFound from "./components/NotFound/PageNotFound";

const ViewHome = React.lazy(() => import("./pages/ViewHome"));
const ViewMaintenance = React.lazy(() =>
  import("./pages/Services/ViewMaintenance")
);
const ViewMachining = React.lazy(() =>
  import("./pages/Services/ViewMachining")
);
const ViewAdvice = React.lazy(() => import("./pages/Services/ViewAdvice"));
const ViewPartners = React.lazy(() => import("./pages/ViewPartners"));
const ViewNews = React.lazy(() => import("./pages/News/ViewNews"));
const ViewNewsDetail = React.lazy(() => import("./pages/News/ViewNewsDetail"));

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<ViewHome />} />
          <Route path="/maintenance" element={<ViewMaintenance />} />
          <Route path="/machining" element={<ViewMachining />} />
          <Route path="/advice" element={<ViewAdvice />} />
          <Route path="/partners" element={<ViewPartners />} />
          <Route path="/news" element={<ViewNews />} />
          <Route path="/news/:slug/detail" element={<ViewNewsDetail />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
