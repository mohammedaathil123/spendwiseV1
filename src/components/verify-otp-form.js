import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./verify-otp-form.css";

const VerifyOtpForm = () => {
  const navigate = useNavigate();

  const onButtonDarkContainerClick = useCallback(() => {
    navigate("/android-large-8");
  }, [navigate]);

  return (
    <div className="arrow-back-parent1">
      <img className="arrow-back-icon3" alt="" src="/arrow-back.svg" />
      <div className="frame-parent18">
        <div className="verify-otp-group">
          <div className="verify-otp1">VERIFY OTP</div>
          <div className="verification-code-sent-container1">
            <span>{`Verification code sent to `}</span>
            <span className="xxxx81921">97xxxx8192</span>
          </div>
        </div>
        <div className="frame-parent19">
          <div className="frame-parent20">
            <div className="vector-parent6">
              <img className="frame-child15" alt="" src="/vector-1.svg" />
              <img className="frame-child15" alt="" src="/vector-1.svg" />
              <img className="frame-child15" alt="" src="/vector-1.svg" />
              <img className="frame-child15" alt="" src="/vector-1.svg" />
              <img className="frame-child15" alt="" src="/vector-1.svg" />
              <img className="frame-child15" alt="" src="/vector-1.svg" />
            </div>
            <div className="time-remaining-0125-parent">
              <div className="time-remaining1">Time Remaining : 01:25</div>
              <div className="resend-otp1">Resend OTP</div>
            </div>
          </div>
          <div className="button-dark5" onClick={onButtonDarkContainerClick}>
            <div className="state-layer7">
              <b className="label-text7">Verify</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtpForm;
