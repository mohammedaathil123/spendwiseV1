import { useMemo } from "react";
import "./stylestandard-stateenabled.css";

const StylestandardStateenabled = ({
  icon,
  stylestandardStateenabledOpacity,
}) => {
  const stylestandardStateenabledStyle = useMemo(() => {
    return {
      opacity: stylestandardStateenabledOpacity,
    };
  }, [stylestandardStateenabledOpacity]);

  return (
    <div
      className="stylestandard-stateenabled"
      style={stylestandardStateenabledStyle}
    >
      <div className="container">
        <div className="state-layer">
          <img className="icon" alt="" src={icon} />
        </div>
      </div>
    </div>
  );
};

export default StylestandardStateenabled;
