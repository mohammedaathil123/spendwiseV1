import { useMemo } from "react";
import StyleoutlinedStateenabled from "./styleoutlined-stateenabled";
import "./mobile-number-section.css";

const MobileNumberSection = ({
  phoneNumberInput,
  propColor,
  propCursor,
  propOpacity,
  onButtonDarkContainerClick,
}) => {
  const placeholderTextStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const buttonDarkStyle = useMemo(() => {
    return {
      cursor: propCursor,
      opacity: propOpacity,
    };
  }, [propCursor, propOpacity]);

  return (
    <div className="text-field-parent">
      <StyleoutlinedStateenabled
        placeholderText="+91 - 9876543210"
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
      <div
        className="button-dark6"
        onClick={onButtonDarkContainerClick}
        style={buttonDarkStyle}
      >
        <div className="state-layer8">
          <b className="label-text8">Get Started</b>
        </div>
      </div>
    </div>
  );
};

export default MobileNumberSection;
