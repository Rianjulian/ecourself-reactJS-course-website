import React from "react"
import { Courses } from "../constant"
import "../icon/all.css"

const Course = () => {
    return (
        <section className="px-5 py-5 my-10 grid gap-20 justify-center | md:px-20 md:py-10 md:my-10">
            <div className="grid gap-y-10">
                <h1 className="urbanist text-[32px]">Top courses</h1>
                <div className="grid gap-10 | md:grid-cols-3">
                    {Courses.slice(0,3).map((course,index) => (
                        <div className="grid gap-3 content-start">
                            <img src={course.img} key={index} alt="Course" className="w-full"/>
                            <div className="grid px-3 gap-2">
                                <a href="app.js" className="inter no-underline text-base | md:text-sm | xl:text-base">{course.title}</a>
                                <div className="inter flex justify-between">
                                    <p>{course.rating} <i className="fa fa-star text-amber-400"></i> (438)</p>
                                    <h1 className="text-soft-purple">{course.price}</h1>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Course