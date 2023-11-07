import { useCallback } from "react";
import WelcomeSection from "../components/welcome-section";
import { useNavigate } from "react-router-dom";
import "./android-large9.css";

const AndroidLarge9 = () => {
  const navigate = useNavigate();

  const onFrameContainer12Click = useCallback(() => {
    navigate("/android-large-10");
  }, [navigate]);

  return (
    <div className="android-large-9">
      <div className="bg-container">
        <div className="bg2" />
        <div className="vector-container">
          <img className="vector-icon2" alt="" src="/vector.svg" />
          <img className="union-icon2" alt="" src="/union.svg" />
          <div className="rectangle2" />
        </div>
      </div>
      <WelcomeSection />
      <img
        className="android-status-bar-dark2"
        alt=""
        src="/android-status-bar--dark.svg"
      />
      <div className="button-dark-wrapper" onClick={onFrameContainer12Click}>
        <div className="button-dark">
          <div className="state-layer2">
            <b className="label-text2">Agree, Grant Permission</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AndroidLarge9;
