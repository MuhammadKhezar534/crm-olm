import React from "react";
import LoginHoc from "../../hoc/LoginHoc";
import RSelect from "../../components/RSelect";
import Box from "../../hoc/Box";
import MButton from "../../components/MButton";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

const SignUp = () => {
  let navigate = useNavigate();

  return (
    <div className="signup-ctn">
      <LoginHoc>
        <div className="inner-ctn">
          <Box>
            <div className="head">Sign up</div>
            <div className="lowMedium">
              Please fill your detail to create your account.
            </div>
            <div className="inp-field">
              <label>Region</label>
              <RSelect showImg={true} />
            </div>
            <div className="up-img-ctn">
              <label>Employee Code</label>
            </div>
            <div className="img-input">
              <input type="text" placeholder="Employee Code" />
              <img src="/icons/employee.svg" className="in-img" alt="icon" />
            </div>
            <div className="up-img-ctn mt-16">
              <label>E-mail</label>
            </div>
            <div className="img-input">
              <input type="text" placeholder="Your Email" />
              <img src="/icons/mail.svg" className="in-img" alt="icon" />
            </div>
            <div className="up-img-ctn mt-16">
              <label>Password</label>
            </div>
            <div className="img-input">
              <input type="password" placeholder="Your Password" />
              <img src="/icons/lock.svg" className="in-img" alt="icon" />
              <img
                src="/icons/cross-eyeSlash.svg"
                className="in-img2"
                alt="icon"
              />
            </div>
            <div className="sing-by">
              By signing up you agree to our
              <span> Terms & Condition</span> and
              <span> Privacy Policy.*</span>
            </div>
            <MButton
              btnText="Register"
              styles={{ width: "330px", marginTop: "10px" }}
            />
            <div className="have-acc mt-16">
              Do you have an account?
              <span onClick={() => navigate("/login")}>Sign in</span>
            </div>
          </Box>
        </div>
      </LoginHoc>
    </div>
  );
};

export default SignUp;
