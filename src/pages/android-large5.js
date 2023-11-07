import LoginFormSection from "../components/login-form-section";
import "./android-large5.css";

const AndroidLarge5 = () => {
  return (
    <div className="android-large-5">
      <div className="bg-parent4">
        <div className="bg7" />
        <div className="vector-parent4">
          <img className="vector-icon7" alt="" src="/vector.svg" />
          <img className="union-icon7" alt="" src="/union.svg" />
          <div className="rectangle7" />
        </div>
      </div>
      <LoginFormSection />
      <img
        className="android-status-bar-dark7"
        alt=""
        src="/android-status-bar--dark.svg"
      />
      <div className="by-continuing-you-container">
        <p className="by-continuing-you-agree-to-ou">
          <span className="by-continuing-you">{`By continuing, you agree to our `}</span>
          <span className="terms">Terms</span>
          <span>. See how we use</span>
        </p>
        <p className="by-continuing-you-agree-to-ou">
          <span>{`your data in our `}</span>
          <span className="terms">Privacy Policy</span>
          <span className="by-continuing-you">.</span>
        </p>
      </div>
    </div>
  );
};

export default AndroidLarge5;
