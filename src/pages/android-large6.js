import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/login-form";
import "./android-large6.css";

const AndroidLarge6 = () => {
  const navigate = useNavigate();

  const onButtonDarkContainerClick = useCallback(() => {
    navigate("/android-large-14");
  }, [navigate]);

  return (
    <div className="android-large-6">
      <div className="bg-parent3">
        <div className="bg6" />
        <div className="vector-parent3">
          <img className="vector-icon6" alt="" src="/vector.svg" />
          <img className="union-icon6" alt="" src="/union.svg" />
          <div className="rectangle6" />
        </div>
      </div>
      <LoginForm />
      <img
        className="android-status-bar-dark6"
        alt=""
        src="/android-status-bar--dark.svg"
      />
    </div>
  );
};

export default AndroidLarge6;
