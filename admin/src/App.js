import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Loading from "./components/Loading/Loading";
import PageNotFound from "./components/NotFound/PageNotFound";

const ViewHome = React.lazy(() => import("./pages/ViewHome"));
const ViewPartner = React.lazy(() => import("./pages/Partner/ViewPartner"));
const ViewAddPartner = React.lazy(() =>
  import("./pages/Partner/ViewAddPartner")
);
const ViewEditPartner = React.lazy(() =>
  import("./pages/Partner/ViewEditPartner")
);

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<ViewHome />} />
          <Route path="/partner" element={<ViewPartner />} />
          <Route path="/partner/add" element={<ViewAddPartner />} />
          <Route path="/partner/:slug" element={<ViewEditPartner />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
