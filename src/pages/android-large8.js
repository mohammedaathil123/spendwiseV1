import VerifyOtpForm1 from "../components/verify-otp-form1";
import "./android-large8.css";

const AndroidLarge8 = () => {
  return (
    <div className="android-large-8">
      <div className="bg-group">
        <div className="bg1" />
        <div className="vector-group">
          <img className="vector-icon1" alt="" src="/vector.svg" />
          <img className="union-icon1" alt="" src="/union.svg" />
          <div className="rectangle1" />
        </div>
      </div>
      <VerifyOtpForm1 />
      <img
        className="android-status-bar-dark1"
        alt=""
        src="/android-status-bar--dark.svg"
      />
    </div>
  );
};

export default AndroidLarge8;
