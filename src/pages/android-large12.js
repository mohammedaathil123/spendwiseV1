import FormContainer from "../components/form-container";
import FormContainer1 from "../components/form-container1";
import "./android-large12.css";

const AndroidLarge12 = () => {
  return (
    <div className="android-large-12">
      <div className="bg-parent">
        <div className="bg" />
        <div className="vector-parent">
          <img className="vector-icon" alt="" src="/vector.svg" />
          <img className="union-icon" alt="" src="/union.svg" />
          <div className="rectangle" />
        </div>
      </div>
      <div className="arrow-back-parent">
        <img className="arrow-back-icon" alt="" src="/arrow-back.svg" />
        <div className="frame-wrapper">
          <div className="frame-container">
            <div className="money-profile-parent">
              <div className="money-profile">MONEY PROFILE</div>
              <div className="checking-your-cash">
                Checking your Cash Character...
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="android-status-bar-dark"
        alt=""
        src="/android-status-bar--dark.svg"
      />
      <FormContainer />
      <FormContainer1
        platformName="Myntra "
        eventTime="Today, 7:00pm"
        productPrice="2550"
      />
      <FormContainer1
        platformName="Amazon "
        eventTime="Today, 8:00pm"
        productPrice="550"
        propTop="466px"
      />
      <FormContainer1
        platformName="Amazon "
        eventTime="Today, 8:00pm"
        productPrice="550"
        propTop="589px"
      />
      <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
    </div>
  );
};

export default AndroidLarge12;
