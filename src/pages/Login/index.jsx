import React, { useState } from "react";
import LoginHoc from "../../hoc/LoginHoc";
import Box from "../../hoc/Box";
import MButton from "../../components/MButton";
import ForgotPassword from "./ForgotPassword";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

const Login = () => {
  const [isForgot, setForgot] = useState(false);
  const [remMe, setMe] = useState(false);
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const onChange = () => {
    setFields({ email: "aa", password: "assa" });
  };

  const forgot = () => {
    setForgot((prev) => !prev);
  };

  const onSubmit = (data) => {
    localStorage.setItem("AuTH", true);
    navigate("/");
  };

  return (
    <div className="login-ctn">
      <LoginHoc>
        <div className="inner-ctn">
          {!isForgot && (
            <Box>
              <div className="head">LOGIN</div>
              <div className="lowMedium">
                Please fill your detail to access your account.
              </div>
              <div className="inp-field">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  onChange={onChange}
                />
                <img
                  src="/icons/crossCircle.svg"
                  className="icon-log img2"
                  alt="icon"
                  value={fields?.password}
                />
              </div>
              <div className="inp-field field2">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" />
                <img
                  src="/icons/cross-eyeSlash.svg"
                  className="icon-log"
                  alt="icon"
                />
              </div>

              <div className="flex rem-me-forgot">
                <span className="flex gap-z">
                  <input
                    type="checkbox"
                    checked={remMe}
                    onClick={() => setMe(!remMe)}
                  />
                  <span className="rem-me" onClick={() => setMe(!remMe)}>
                    Remember me
                  </span>
                </span>
                <span className="forgot" onClick={forgot}>
                  Forgot Password?
                </span>
              </div>
              <MButton
                btnText="Sign In"
                onClick={onSubmit}
                styles={{ width: "360px", marginTop: "20px" }}
              />
              <div className="have-acc mt-16">
                Don’t have an account?
                <span onClick={() => navigate("/sign-up")}>Signup</span>
              </div>
            </Box>
          )}
          {isForgot && <ForgotPassword onBack={forgot} />}
        </div>
      </LoginHoc>
    </div>
  );
};

export default Login;
