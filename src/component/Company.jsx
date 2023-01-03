import React from "react"
import Brandfetch from "../assets/Brandfetch.svg"
import PointStar from "../assets/PointStar.svg"
import Vidio from "../assets/Vidio.svg"
import Gojek from "../assets/Gojek.svg"

const Company = () => {
    return(
        <section className="bg-light-purple grid py-10 px-6 my-20 justify-between gap-10 text-center | md:grid-flow-col md:px-20 md:py-10 md:items-center | xl:grid-flow-col">
        <h1 className="urbanist text-3xl md:w-60 font-medium">Trusted by 100+ big companies</h1>
        <div className="flex flex-wrap justify-center items-center gap-10 | md:gap-16 md:justify-start | xl:gap-20">
          <img src={Brandfetch} alt="company" className="w-20"/>
          <img src={PointStar} alt="company" className="w-20"/>
          <img src={Gojek} alt="company" className="w-20"/>
          <img src={Vidio} alt="company" className="w-20"/>
        </div>
      </section>
    )
}

export default Company