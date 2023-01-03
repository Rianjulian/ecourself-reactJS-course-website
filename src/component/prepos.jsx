import React from "react"

const Prepos = () => {
    return(
        <>
        <section className="divide-y divide-slate-200 grid py-10 px-5 gap-5 | md:px-20 md:py-10">
        <div className="flex flex-wrap justify-center gap-20 py-10">
          <div className="text-center">
            <h2 className="urbanist text-4xl text-soft-purple">100+</h2>
            <h1 className="urbanist text-[32px]">Courses</h1>
          </div>
          <div className="text-center">
            <h2 className="urbanist text-4xl text-soft-purple">50+</h2>
            <h1 className="urbanist text-[32px]">Expertise Mentors</h1>
          </div>
          <div className="text-center">
            <h2 className="urbanist text-4xl text-soft-purple">5.000+</h2>
            <h1 className="urbanist text-[32px]">Students</h1>
          </div>
        </div>
        <div className="grid gap-20 px-5 py-10 | md:grid-cols-2 xl:p-10 md:gap-5">
          <div className="flex flex-col gap-3">
            <h1 className="urbanist font-medium text-2xl">Our Philosophy</h1>
            <p className="inter text-base text-secondary leading-7 font-normal">The best years of your life are the ones in which you decide your problems are your own. Make your the best way to make decision. You realize that you control your own destiny.</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="urbanist font-medium text-2xl">Our Mission</h1>
            <p className="inter text-base text-secondary leading-7 font-normal">Success is not measured by what you accomplish, but by the opposition you have encountered, and the courage with which you have maintained the struggle against overwhelming odds.</p>
          </div>
        </div>
      </section>

      <section className="bg-light-purple grid py-10 px-5 gap-5 justify-around | md:grid-flow-col xl:px-20 xl:py-10">
        <h1 className="urbanist text-3xl font-medium xl:w-60">Stay up-to-date with us</h1>
        <div className="grid grid-flow-col items-center">
          <input type="email" name="" id="" placeholder="Email" className="border-0 rounded-sm py-3 px-5"/>
          <div className="flex justify-center">
            <a href="app.js" className="urbanist bg-soft-purple text-white px-6 py-3">Contact us</a>
          </div>
        </div>
      </section>
        </>
    )
}

export default Prepos