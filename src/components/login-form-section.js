import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MobileNumberSection from "./mobile-number-section";
import "./login-form-section.css";

const LoginFormSection = () => {
  const navigate = useNavigate();

  const onFrameContainer4Click = useCallback(() => {
    navigate("/android-large-6");
  }, [navigate]);

  return (
    <div className="arrow-back-parent4" onClick={onFrameContainer4Click}>
      <img className="arrow-back-icon6" alt="" src="/arrow-back.svg" />
      <div className="frame-parent23">
        <div className="loginsignup-parent">
          <div className="loginsignup">
            <span>LOGIN/</span>
            <span className="signup1">SIGNUP</span>
          </div>
          <div className="and-start-spending2">And start spending wisely</div>
        </div>
        <MobileNumberSection
          phoneNumberInput="Enter Mobile Number"
          propColor="#adadad"
          propCursor="unset"
          propOpacity="0.3"
        />
      </div>
    </div>
  );
};

export default LoginFormSection;
