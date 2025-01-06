import React from "react";
import useAuth from "../Hooks/useAuth";
import { FaGoogle } from "react-icons/fa";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const axiosPublic = useAxiosPublic();
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="text-center my-5">
      <button
        onClick={handleGoogleLogin}
        className="btn btn-neutral btn-outline"
      >
        <FaGoogle></FaGoogle> Google Login
      </button>
    </div>
  );
};

export default SocialLogin;
