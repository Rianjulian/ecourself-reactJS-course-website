import React from "react"
import { Courses } from "../constant"
import "../icon/all.css"

const allCourse = () => {
    return (
        <section className="px-5 py-5 my-10 grid gap-20 justify-center | md:px-20 md:py-10 md:my-10">
            <div className="grid gap-y-10">
                <h1 className="urbanist text-[32px]">All courses</h1>
                <div className="my-10 grid gap-20 justify-center | grid-course md:my-0">
                    <form action="" className="gap-10 hidden content-start sm:grid sm:grid-flow-col md:grid md:grid-flow-row xl:grid-flow-row">
                        <div className="grid gap-3 content-center">
                            <h1 className="urbanist text-2xl uppercase">Sort</h1>
                            <div>
                                <label>
                                    <input type="checkbox" name="name" className="mr-2"/>
                                    Latest course
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input type="checkbox" name="name" className="mr-2"/>
                                    Top rating
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input type="checkbox" name="name" className="mr-2"/>
                                    High Student
                                </label>
                            </div>
                        </div>
                        <div className="grid gap-3 content-center">
                            <h1 className="urbanist text-2xl uppercase">Level</h1>
                            <div>
                                <label>
                                    <input type="checkbox" name="name" className="mr-2"/>
                                    Beginner
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input type="checkbox" name="name" className="mr-2"/>
                                    Intermediate
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input type="checkbox" name="name" className="mr-2"/>
                                    All levels
                                </label>
                            </div>
                        </div>
                        <div className="grid gap-3 content-center">
                            <h1 className="urbanist text-2xl uppercase">Type</h1>
                            <div>
                                <label>
                                    <input type="checkbox" name="name" className="mr-2"/>
                                    Free
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input type="checkbox" name="name" className="mr-2"/>
                                    Low price
                                </label>
                            </div>
                        </div>
                    </form>
                    <div className="grid gap-10 | md:grid-cols-3">
                        {Courses.map((course, index) => (
                            <div className="grid gap-3 content-start">
                                <img src={course.img} key={index} alt="Course" className="w-full" />
                                <div className="grid px-3 gap-2">
                                    <a href="app.js" className="inter no-underline text-base | md:text-sm | xl:text-base">{course.title}</a>
                                    <div className="inter flex justify-between">
                                        <p className="text-sm">{course.rating} <i className="fa fa-star text-amber-400"></i> (438)</p>
                                        <h1 className="text-soft-purple text-sm">{course.price}</h1>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default allCourse