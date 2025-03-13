import React from "react";
import Box from "../../hoc/Box";
import MButton from "../../components/MButton";

const ForgotPassword = ({ onBack }) => {
  // const [email, setEmail] = useState("");

  return (
    <div>
      <Box>
        <div className="lowMedium">
          Enter the email address associated with your account and we’ll send
          you a link to rest the password.
        </div>
        <div className="inp-field">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
          <img
            src="/icons/crossCircle.svg"
            className="icon-log img2"
            alt="icon"
          />
        </div>
        <MButton
          btnText="Send OTP"
          styles={{ width: "360px", marginTop: "20px" }}
        />
        <div className="have-acc mt-16">
          Do you have an account?<span onClick={onBack}>Sign in</span>
        </div>
      </Box>
    </div>
  );
};

export default ForgotPassword;
