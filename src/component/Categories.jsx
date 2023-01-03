import React from "react"

const Categories = () => {
    return(
    <section className="grid px-5 gap-20 justify-center | md:px-20 md:py-10 md:my-10">
      <div className="text-center">
        <h2 className="urbanist text-lg text-soft-purple">Elevate your skills</h2>
        <h1 className="urbanist text-[32px]">We provide the tools you need to succeed</h1>
      </div>
      <div className="grid gap-y-10">
        <h1 className="urbanist text-[32px]">Top categories</h1>
        <div className="grid gap-10 | sm:grid-cols-2 | md:grid-cols-3 md:gap-5 | xl:grid-cols-4">
          <div className="grid w-full bg-neutral-100 border-l-2 border-purple-600 gap-3 px-10 py-10 content-start cursor-pointer | md:py-5 md:px-5 | xl:py-10 xl:px-10">
            <h1 className="urbanist font-medium text-2xl">Design</h1>
            <p className="inter text-base text-secondary leading-7 font-normal">UI/UX Designers, Illustrators, Graphic Design, Branding Experts, Product & Interface Designers</p>
          </div>
          <div className="grid w-full bg-neutral-100 border-l-2 border-purple-600 gap-3 px-10 py-10 content-start cursor-pointer | md:py-5 md:px-5 | xl:py-10 xl:px-10">
            <h1 className="urbanist font-medium text-2xl">Development</h1>
            <p className="inter text-base text-secondary leading-7 font-normal">Software Experts, Web & Mobile Developers. AI Researchers. Cloud & Infrastructure Engineers</p>
          </div>
          <div className="grid bg-neutral-100 border-l-2 border-purple-600 gap-3 px-10 py-10 content-start cursor-pointer | md:py-5 md:px-5 | xl:py-10 xl:px-10">
            <h1 className="urbanist font-medium text-2xl">Business</h1>
            <p className="inter text-base text-secondary leading-7 font-normal">Project Managers, Scrum Masters, Procurement, Excel, Product Owners, Business Analysts</p>
          </div>
          <div className="grid bg-neutral-100 border-l-2 border-purple-600 gap-3 px-10 py-10 content-start cursor-pointer | md:py-5 md:px-5 | xl:py-10 xl:px-10">
            <h1 className="urbanist font-medium text-2xl">Soft Skills</h1>
            <p className="inter text-base text-secondary leading-7 font-normal">Customer Service , Negotiation, Time Management, Problem Solving, Language, Communication</p>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Categories