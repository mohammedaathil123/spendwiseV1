import { useMemo } from "react";
import StylestandardStateenabled from "./stylestandard-stateenabled";
import "./styleoutlined-stateenabled.css";

const StyleoutlinedStateenabled = ({
  placeholderText = "Placeholder",
  labelText = "Label",
  icon,
  supportingText = "Supporting text",
  showSupportingText = true,
  textFieldBorderRadius,
  textFieldBorder,
  placeholderTextFontFamily,
  placeholderTextColor,
  labelTextOpacity,
  trailingIconOpacity,
  supportingTextOpacity,
}) => {
  const textFieldStyle = useMemo(() => {
    return {
      borderRadius: textFieldBorderRadius,
      border: textFieldBorder,
    };
  }, [textFieldBorderRadius, textFieldBorder]);

  const placeholderTextStyle = useMemo(() => {
    return {
      fontFamily: placeholderTextFontFamily,
      color: placeholderTextColor,
    };
  }, [placeholderTextFontFamily, placeholderTextColor]);

  const labelTextStyle = useMemo(() => {
    return {
      opacity: labelTextOpacity,
    };
  }, [labelTextOpacity]);

  const stylestandardStateenabledStyle = useMemo(() => {
    return {
      opacity: trailingIconOpacity,
    };
  }, [trailingIconOpacity]);

  const supportingTextStyle = useMemo(() => {
    return {
      opacity: supportingTextOpacity,
    };
  }, [supportingTextOpacity]);

  return (
    <div className="styleoutlined-stateenabled">
      <div className="text-field" style={textFieldStyle}>
        <div className="state-layer1">
          <div className="content">
            <div className="placeholder-text">
              <div className="placeholder-text1" style={placeholderTextStyle}>
                {placeholderText}
              </div>
            </div>
            <div className="label-text" style={labelTextStyle}>
              <div className="label-text1">{labelText}</div>
            </div>
          </div>
          <StylestandardStateenabled
            icon="/icon1.svg"
            stylestandardStateenabledOpacity="unset"
          />
        </div>
      </div>
      {showSupportingText && (
        <div className="supporting-text" style={supportingTextStyle}>
          <div className="supporting-text1">{supportingText}</div>
        </div>
      )}
    </div>
  );
};

export default StyleoutlinedStateenabled;
