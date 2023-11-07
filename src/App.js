import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AndroidLarge12 from "./pages/android-large12";
import AndroidLarge8 from "./pages/android-large8";
import AndroidLarge9 from "./pages/android-large9";
import AndroidLarge10 from "./pages/android-large10";
import AndroidLarge7 from "./pages/android-large7";
import AndroidLarge14 from "./pages/android-large14";
import AndroidLarge6 from "./pages/android-large6";
import AndroidLarge5 from "./pages/android-large5";
import AndroidLarge13 from "./pages/android-large13";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/android-large-8":
        title = "";
        metaDescription = "";
        break;
      case "/android-large-9":
        title = "";
        metaDescription = "";
        break;
      case "/android-large-10":
        title = "";
        metaDescription = "";
        break;
      case "/android-large-7":
        title = "";
        metaDescription = "";
        break;
      case "/android-large-14":
        title = "";
        metaDescription = "";
        break;
      case "/android-large-6":
        title = "";
        metaDescription = "";
        break;
      case "/android-large-5":
        title = "";
        metaDescription = "";
        break;
      case "/android-large-13":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<AndroidLarge12 />} />
      <Route path="/android-large-8" element={<AndroidLarge8 />} />
      <Route path="/android-large-9" element={<AndroidLarge9 />} />
      <Route path="/android-large-10" element={<AndroidLarge10 />} />
      <Route path="/android-large-7" element={<AndroidLarge7 />} />
      <Route path="/android-large-14" element={<AndroidLarge14 />} />
      <Route path="/android-large-6" element={<AndroidLarge6 />} />
      <Route path="/android-large-5" element={<AndroidLarge5 />} />
      <Route path="/android-large-13" element={<AndroidLarge13 />} />
    </Routes>
  );
}
export default App;
