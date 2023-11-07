import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MobileNumberSection from "./mobile-number-section";
import "./login-form.css";

const LoginForm = () => {
  const navigate = useNavigate();

  const onButtonDarkContainerClick = useCallback(() => {
    navigate("/android-large-14");
  }, [navigate]);

  return (
    <div className="arrow-back-parent3">
      <img className="arrow-back-icon5" alt="" src="/arrow-back.svg" />
      <div className="frame-parent22">
        <div className="login-parent">
          <div className="login">LOGIN</div>
          <div className="and-start-spending1">And start spending wisely</div>
        </div>
        <MobileNumberSection
          phoneNumberInput="+91 - 9876543210"
          onButtonDarkContainerClick={onButtonDarkContainerClick}
        />
      </div>
    </div>
  );
};

export default LoginForm;
