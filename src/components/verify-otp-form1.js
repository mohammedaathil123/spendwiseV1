import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./verify-otp-form1.css";

const VerifyOtpForm1 = () => {
  const navigate = useNavigate();

  const onButtonDarkContainerClick = useCallback(() => {
    navigate("/android-large-9");
  }, [navigate]);

  return (
    <div className="arrow-back-group">
      <img className="arrow-back-icon1" alt="" src="/arrow-back.svg" />
      <div className="frame-parent3">
        <div className="verify-otp-parent">
          <div className="verify-otp">VERIFY OTP</div>
          <div className="verification-code-sent-container">
            <span>{`Verification code sent to `}</span>
            <span className="xxxx8192">97xxxx8192</span>
          </div>
        </div>
        <div className="frame-parent4">
          <div className="frame-parent5">
            <div className="frame-parent6">
              <div className="frame-parent7">
                <div className="wrapper">
                  <div className="div2">9</div>
                </div>
                <img className="frame-child8" alt="" src="/vector-1.svg" />
              </div>
              <div className="frame-parent7">
                <div className="wrapper">
                  <div className="div2">8</div>
                </div>
                <img className="frame-child8" alt="" src="/vector-1.svg" />
              </div>
              <div className="frame-parent7">
                <div className="wrapper">
                  <div className="div2">6</div>
                </div>
                <img className="frame-child8" alt="" src="/vector-1.svg" />
              </div>
              <div className="frame-parent7">
                <div className="wrapper">
                  <div className="div2">4</div>
                </div>
                <img className="frame-child8" alt="" src="/vector-1.svg" />
              </div>
              <div className="frame-parent7">
                <div className="wrapper">
                  <div className="div2">5</div>
                </div>
                <img className="frame-child8" alt="" src="/vector-1.svg" />
              </div>
              <div className="frame-parent7">
                <div className="wrapper">
                  <div className="parent">
                    <div className="div2">8</div>
                    <div className="frame-child13" />
                  </div>
                </div>
                <img className="frame-child8" alt="" src="/vector-11.svg" />
              </div>
            </div>
            <div className="time-remaining-0025-parent">
              <div className="time-remaining">Time Remaining : 00:25</div>
              <div className="resend-otp">Resend OTP</div>
            </div>
          </div>
          <div className="button-dark4" onClick={onButtonDarkContainerClick}>
            <div className="state-layer6">
              <b className="label-text6">Verify</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtpForm1;
