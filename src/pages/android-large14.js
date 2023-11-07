import { useCallback } from "react";
import SignupForm from "../components/signup-form";
import StyleoutlinedStateenabled from "../components/styleoutlined-stateenabled";
import { useNavigate } from "react-router-dom";
import "./android-large14.css";

const AndroidLarge14 = () => {
  const navigate = useNavigate();

  const onStateLayerContainer4Click = useCallback(() => {
    navigate("/android-large-7");
  }, [navigate]);

  return (
    <div className="android-large-14">
      <div className="bg-parent2">
        <div className="bg5" />
        <div className="vector-parent2">
          <img className="vector-icon5" alt="" src="/vector.svg" />
          <img className="union-icon5" alt="" src="/union.svg" />
          <div className="rectangle5" />
        </div>
      </div>
      <SignupForm />
      <div className="text-field-wrapper">
        <StyleoutlinedStateenabled
          placeholderText="Password "
          labelText="Name"
          icon="/icon2.svg"
          supportingText="Supporting text"
          showSupportingText={false}
          textFieldBorderRadius="8px"
          textFieldBorder="1px solid #adadad"
          placeholderTextFontFamily="Urbanist"
          placeholderTextColor="#fff"
          labelTextOpacity="0"
          trailingIconOpacity="0"
          supportingTextOpacity="0"
        />
      </div>
      <div className="button-dark2">
        <div className="state-layer4" onClick={onStateLayerContainer4Click}>
          <b className="label-text4">Get Started</b>
        </div>
      </div>
      <img
        className="android-status-bar-dark5"
        alt=""
        src="/android-status-bar--dark.svg"
      />
    </div>
  );
};

export default AndroidLarge14;
