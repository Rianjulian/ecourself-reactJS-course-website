import React from "react"
import { User } from "../constant/index"

const Testimonials = () => {
    return (
        <section className="grid py-10 my-10 | md:px-0 md:py-10 md:my-20">
            <div className="text-center">
                <h2 className="urbanist text-lg text-soft-purple">Nice to meet you</h2>
                <h1 className="urbanist text-[32px]">Get to know us better</h1>
            </div>
            <div className="bg-light-purple grid py-10 px-6 mt-10 gap-5 | md:px-20 md:py-10 md:mt-20">
                <h1 className="urbanist text-[32px]">Our students say</h1>
                <div className="grid gap-8 | md:grid-cols-2 | xl:grid-cols-3">
                    {
                        User.map((users, index) => (
                            <div className="bg-white grid gap-3 px-8 py-10">
                                <h1 className="urbanist text-lg text-soft-purple">{users.title}</h1>
                                <p className="inter text-base text-secondary leading-7 font-normal">{users.comment}</p>
                                <div className="flex gap-3">
                                    <img src={users.img} className="w-10" alt="user"/>
                                        <div>
                                            <h1 className="inter text-base">{users.name}</h1>
                                            <h2 className="inter text-xs text-secondary">{users.job}</h2>
                                        </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Testimonials