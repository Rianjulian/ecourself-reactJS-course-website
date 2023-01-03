import React from "react";
import Image from "../assets/login-image.png"
import Regis from "../component/Register"

const Register = () => {
  return (
    <>
    <section className="grid px-5 py-10 gap-y-5 | xl:grid-cols-2 xl:px-20 xl:py-10">
      <img src={Image} alt="" className="w-full"/>
        <Regis />
    </section>
    </>
  )
};

export default Register;