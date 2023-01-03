import React from "react"
import heroImage from "../assets/hero-image.png"
import userImage from "../assets/user.svg"

const Hero = () => {
    return(

    <section className="grid items-center px-5 py-3 gap-20 | md:grid-cols-2 md:px-20 md:py-10 md:my-5 md:gap-16">
      <div className="grid gap-10">
        <div className="grid gap-1">
          <h2 className="urbanist text-lg text-soft-purple">Expand your horizons anytime</h2>
          <h1 className="urbanist text-[40px]">Unleash control of your own learning with ecourself.</h1>
          <p className="inter text-base text-secondary leading-7 font-normal">Take control of your own learning journey with our self-guided course, Our expert-led lessons and resources will help you master new skills at your own pace.</p>
        </div>
        <div className="flex items-center gap-5">
          <a href="app.js" className="urbanist bg-soft-purple text-white p-3">Take the course</a>
          <a href="app.js" className="urbanist text-soft-purple p-3">Explore course</a>
        </div>
      </div>
      <div className="relative">
        <img src={heroImage} alt="coding"/>
        <div className="absolute top-4 left-[-20px] shadow-lg shadow-gray-500 rounded-md flex pl-2 pr-8 py-2 bg-white gap-3">
          <img src={userImage} className="w-10" alt="user"/>
          <div>
            <h1 className="inter text-base text-soft-purple">Siradh Singh</h1>
            <h2 className="inter text-xs text-secondary">UI/UX Designer</h2>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Hero