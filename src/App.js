import React, { Suspense, lazy, useState } from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import MyProducts from "./Dashboard/components/MyProducts/MyProducts";
import Images from "./Dashboard/components/Images/Images";
import Manuals from "./Dashboard/components/Manuals/Manuals";
import CadFiles from "./Dashboard/components/CadFiles/CadFiles";
import Catalogues from "./Dashboard/components/Catalogues/Catalogues";
import Contact from "./Dashboard/components/Contact/Contact";
import Videos from "./Dashboard/components/Videos/Videos";
import Setting from "./Dashboard/components/Setting/Setting";
import Members from "./Dashboard/components/Members/Members";
const Login = lazy(() => import("./Pages/Login/Login"));
const Signup = lazy(() => import("./Pages/Signup/Signup"));
function App() {
  const [provideEmail, setProvideEmail] = useState(false);
  return (
    <>
      <Router>
        <Suspense
          fallback={
            <div className="h-screen flex justify-center items-center">
              <img
                src={require("./Assets/images/icon/spinner.gif")}
                className="h-40"
              />
            </div>
          }
        >
          <Routes>
            <Route
              path="/"
              element={<Login setProvideEmail={setProvideEmail} />}
            />
            <Route
              path="GetStarted/Signup"
              element={<Signup provideEmail={provideEmail} />}
            />
            <Route path="Signup" element={<Signup />} />
            <Route path="dashboard" element={<Dashboard />}>
              <Route index element={<MyProducts />} />
              <Route path="products" element={<MyProducts />} />
              <Route path="images" element={<Images />} />
              <Route path="manuals" element={<Manuals />} />
              <Route path="cadFiles" element={<CadFiles />} />
              <Route path="catalogues" element={<Catalogues />} />
              <Route path="contact" element={<Contact />} />
              <Route path="videos" element={<Videos />} />
              <Route path="members" element={<Members />} />
              <Route path="setting" element={<Setting />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
