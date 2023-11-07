import { useMemo } from "react";
import "./welcome-section.css";

const WelcomeSection = ({ frameDivLineHeight }) => {
  const wELCOMETOWISEContainerStyle = useMemo(() => {
    return {
      lineHeight: frameDivLineHeight,
    };
  }, [frameDivLineHeight]);

  return (
    <div className="arrow-back-container">
      <img className="arrow-back-icon2" alt="" src="/arrow-back.svg" />
      <div className="frame-parent13">
        <div className="frame-wrapper3">
          <div className="welcome-to-wise-parent">
            <div
              className="welcome-to-wise-container"
              style={wELCOMETOWISEContainerStyle}
            >
              <span>{`WELCOME TO `}</span>
              <span className="wise1">WISE</span>
              <span>!</span>
            </div>
            <div className="how-sms-consent">How SMS Consent Works?</div>
          </div>
        </div>
        <div className="frame-parent14">
          <div className="frame-parent15">
            <div className="email-parent">
              <img className="email-icon" alt="" src="/email@2x.png" />
              <div className="track-expenses">Track Expenses</div>
            </div>
            <div className="sms-consent-gives">
              SMS consent gives you quick spending updates, like texts from a
              money-savvy friend.
            </div>
          </div>
          <div className="frame-parent15">
            <div className="email-parent">
              <img className="email-icon" alt="" src="/get-cash@2x.png" />
              <div className="track-expenses">Personal Money Tips</div>
            </div>
            <div className="sms-consent-gives">
              Get tailored money-saving tips for a more fun and rewarding saving
              experience.
            </div>
          </div>
          <div className="frame-parent15">
            <div className="email-parent">
              <img className="email-icon" alt="" src="/cancel@2x.png" />
              <div className="track-expenses">No Manual Tracking</div>
            </div>
            <div className="sms-consent-gives">
              Avoid spending time tracking expenses manually. Let us do it for
              you.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
