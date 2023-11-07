import { useMemo } from "react";
import "./form-container1.css";

const FormContainer1 = ({ platformName, eventTime, productPrice, propTop }) => {
  const frameDivStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className="line-group" style={frameDivStyle}>
      <div className="frame-child5" />
      <div className="myntra">{platformName}</div>
      <div className="today-700pm">{eventTime}</div>
      <div className="div1">{productPrice}</div>
      <div className="frame-child6" />
      <div className="frame-child7" />
      <img className="down-arrow-1-icon1" alt="" src="/downarrow-1@2x.png" />
      <div className="shopping">{`Shopping `}</div>
      <img className="mask-group-icon1" alt="" src="/mask-group@2x.png" />
    </div>
  );
};

export default FormContainer1;
