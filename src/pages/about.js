import React from "react"
import aboutImg from "../assets/about-image.png"

const About = () => {
  return (
    <>
      <section className="px-5 py-5 | md:px-20 md:py-20">
        <div className="text-left mb-10">
          <h2 className="urbanist text-lg text-soft-purple">About us</h2>
          <h1 className="urbanist text-[32px]">Kickstart learning journey with us.</h1>
        </div>
        <img src={aboutImg} alt="about-us" />
        <div className="text-left my-20">
          <h1 className="urbanist text-[32px]">ecourself</h1>
          <p className="urbanist text-lg text-secondary w-full text-justify | md:w-3/4">As an online course we're spending a lot of time on preparing proposals. There are a few things we reuse, like the description of different phases but it's still a very time consuming process. It gets worse when it comes to the estimation. For complex projects we simply can't give an estimate.</p>
        </div>
        <div className="grid my-20 gap-10 | sm:grid-cols-2 | md:grid-cols-3 md:gap-0 | xl:grid-cols-3 xl:gap-0">
          <div className="grid w-full bg-neutral-100 border-l-2 border-purple-600 gap-3 px-10 py-10 content-start | md:py-10 md:px-5 | xl:py-12 xl:px-10">
            <h1 className="urbanist font-medium text-2xl">5+ Years Experience</h1>
            <p className="inter text-sm text-secondary font-normal | md:text-base">We currently offer 45 professional courses.</p>
          </div>
          <div className="grid w-full bg-neutral-100 border-l-2 border-purple-600 gap-3 px-10 py-10 content-start | md:py-10 md:px-5 | xl:py-12 xl:px-10">
            <h1 className="urbanist font-medium text-2xl">12 Source Files</h1>
            <p className="inter text-sm text-secondary font-normal | md:text-base">We have 10 Source files assets learning.</p>
          </div>
          <div className="grid w-full bg-neutral-100 border-l-2 border-purple-600 gap-3 px-10 py-10 content-start | md:py-10 md:px-5 | xl:py-12 xl:px-10">
            <h1 className="urbanist font-medium text-2xl">22 Events Meetup</h1>
            <p className="inter text-sm text-secondary font-normal | md:text-base">Currently 22 exciting upcoming events!</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="grid grid-flow-row gap-10">
            <div className="text-left mb-2">
              <h2 className="urbanist text-lg text-soft-purple">We're all ears!</h2>
              <h1 className="urbanist text-[32px]">Feel free to contact us</h1>
            </div>
            <div className="bg-light-purple px-8 py-8">
              <h2 className="urbanist text-lg text-soft-purple">Call us</h2>
              <h1 className="inter text-2xl">+62 823134050144</h1>
            </div>
            <div className="bg-light-purple px-8 py-8">
              <h2 className="urbanist text-lg text-soft-purple">Email</h2>
              <h1 className="inter text-2xl">ecourself@info.com</h1>
            </div>
          </div>
          <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3380413278624!2d106.79991934789824!3d-6.21907671457688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f14d30079f01%3A0x2e74f2341fff266d!2sStadion%20Utama%20Gelora%20Bung%20Karno!5e0!3m2!1sid!2sid!4v1672594053456!5m2!1sid!2sid" width={500} height={550}></iframe>
        </div>
      </section>
    </>
  )
};

export default About;