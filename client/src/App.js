import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Loading from "./components/Loading/Loading";

const ViewHome = React.lazy(() => import("./pages/ViewHome"));

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<ViewHome />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
