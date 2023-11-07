import { useCallback } from "react";
import WelcomeSection from "../components/welcome-section";
import { useNavigate } from "react-router-dom";
import "./android-large10.css";

const AndroidLarge10 = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="android-large-10">
      <div className="group-div">
        <div className="bg3" />
        <div className="frame-div">
          <img className="vector-icon3" alt="" src="/vector.svg" />
          <img className="union-icon3" alt="" src="/union.svg" />
          <div className="rectangle3" />
        </div>
      </div>
      <WelcomeSection frameDivLineHeight="unset" />
      <img
        className="android-status-bar-dark3"
        alt=""
        src="/android-status-bar--dark.svg"
      />
      <div className="button-dark-container">
        <div className="button-dark1">
          <div className="state-layer3">
            <b className="label-text3">Agree, Grant Permission</b>
          </div>
        </div>
      </div>
      <div className="android-large-10-child" />
      <div className="image-4-parent" onClick={onGroupContainer1Click}>
        <img className="image-4-icon" alt="" src="/image-4@2x.png" />
        <div className="allow-spendwise-to">
          Allow SpendWise to send and view SMS messages?
        </div>
      </div>
    </div>
  );
};

export default AndroidLarge10;
