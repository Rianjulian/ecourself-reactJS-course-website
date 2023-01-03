import React from "react"
import promoImg from "../assets/promotion.png"

const Promotion = () => {
    return(
        <section className="bg-light-purple grid-promotion py-10 px-6 | md:grid-flow-col md:px-20 md:py-10 md:my-20">
        <img className="w-full" src={promoImg} alt="promotion"/>
        <div className="bg-white px-5 py-5 grid content-center gap-5 | md:py-5">
          <h1 className="urbanist text-lg text-center | md:text-[32px] md:leading-10">Special offer only $5 for soft skills categories. Become better in 2023</h1>
          <div className="flex justify-center">
            <a href="app.js" className="urbanist bg-soft-purple text-white px-6 py-3">Join now</a>
          </div>
        </div>
      </section>
    )
}

export default Promotion