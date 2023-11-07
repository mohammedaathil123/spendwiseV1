import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./android-large13.css";

const AndroidLarge13 = () => {
  const navigate = useNavigate();

  const onFrameContainer6Click = useCallback(() => {
    navigate("/android-large-5");
  }, [navigate]);

  return (
    <div className="android-large-13">
      <div className="bg-parent5">
        <div className="bg8" />
        <div className="vector-parent5">
          <img className="vector-icon8" alt="" src="/vector.svg" />
          <img className="union-icon8" alt="" src="/union.svg" />
          <div className="rectangle8" />
        </div>
      </div>
      <div className="frame-parent">
        <div className="frame-wrapper1">
          <div className="spendwise-parent">
            <div className="spendwise">
              <span>SPEND</span>
              <span className="span1">/</span>
              <span className="wise">WISE</span>
            </div>
            <div className="spends-tracking-financial">
              Spends tracking, financial planning and much more
            </div>
          </div>
        </div>
        <div className="frame-group">
          <div className="frame-parent1">
            <div className="frame-child" />
            <div className="frame-item" />
            <div className="frame-child" />
          </div>
          <div className="frame-parent2">
            <div className="frame-child1" />
            <div className="frame-child2" />
            <div className="frame-child1" />
          </div>
        </div>
        <div className="button-dark-frame" onClick={onFrameContainer6Click}>
          <div className="button-dark3">
            <div className="state-layer5">
              <b className="label-text5">Get Started</b>
            </div>
          </div>
        </div>
      </div>
      <img
        className="android-status-bar-dark8"
        alt=""
        src="/android-status-bar--dark.svg"
      />
      <div className="by-continuing-you-container1">
        <p className="by-continuing-you-agree-to-ou1">
          <span className="by-continuing-you1">{`By continuing, you agree to our `}</span>
          <span className="terms1">Terms</span>
          <span>. See how we use</span>
        </p>
        <p className="by-continuing-you-agree-to-ou1">
          <span>{`your data in our `}</span>
          <span className="terms1">Privacy Policy</span>
          <span className="by-continuing-you1">.</span>
        </p>
      </div>
    </div>
  );
};

export default AndroidLarge13;
