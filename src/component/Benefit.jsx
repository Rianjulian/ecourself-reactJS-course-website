import React from "react"
import checklist from "../assets/check.svg"
import join from "../assets/join-now.png"


const Benefit = () => {
    return(
        <section className="px-5 py-10 my-10 grid gap-5 justify-center | md:px-20 md:py-10 md:my-10 md:gap-20">
      <div className="text-center">
        <h2 className="urbanist text-lg text-soft-purple">Process your progress</h2>
        <h1 className="urbanist text-[32px]">We set the standard for excellence</h1>
      </div>
      <div className="grid grid-template gap-5 | xl:gap-10">
        <img src={join} alt="coding" className="w-full"/>
        <div className="grid content-start gap-8">
          <div>
            <h1 className="urbanist text-[32px]">Support your growth and development</h1>
            <p className="inter text-base text-secondary leading-7 font-normal">Each skill has a set of practice problems for the student to work though until mastery. Students can work through the problems at their own pace.</p>
          </div>
          <div className="grid gap-5 items-center">
            <div className="flex gap-3">
              <img src={checklist} alt="icon"/>
              <p className="inter text-base font-medium">Learn anytime, anywhere</p>
            </div>
            <div className="flex gap-3">
              <img src={checklist} alt="icon"/>
              <p className="inter text-base font-medium">Lifetime Access</p>
            </div>
            <div className="flex gap-3">
              <img src={checklist} alt="icon"/>
              <p className="inter text-base font-medium">Top Notch Courses</p>
            </div>
            <div className="flex gap-3">
              <img src={checklist} alt="icon"/>
              <p className="inter text-base font-medium">World-className Mentors</p>
            </div>
            <div className="flex gap-3">
              <img src={checklist} alt="icon"/>
              <p className="inter text-base font-medium">One-on-One Mentorship</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <a href="app.js" className="urbanist bg-soft-purple text-white px-6 py-3">Join now</a>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Benefit