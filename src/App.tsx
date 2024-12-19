import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import TermsAndConditions from "./pages/TermsAndCondition";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Unsubscribe from "./pages/Unsubscribe";
function App() {
  const location = useLocation();
  useEffect(
    function () {
      window.scrollTo(0, 0);
    },
    [location]
  );
  return (
    <>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/unsubscribe" element={<Unsubscribe />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
