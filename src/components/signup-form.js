import StyleoutlinedStateenabled from "./styleoutlined-stateenabled";
import "./signup-form.css";

const SignupForm = () => {
  return (
    <div className="arrow-back-parent2">
      <img className="arrow-back-icon4" alt="" src="/arrow-back.svg" />
      <div className="frame-parent21">
        <div className="signup-parent">
          <div className="signup">{`SIGNUP `}</div>
          <div className="and-start-spending">And start spending wisely</div>
        </div>
        <div className="text-field-container">
          <StyleoutlinedStateenabled
            placeholderText="Name "
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
      </div>
    </div>
  );
};

export default SignupForm;
