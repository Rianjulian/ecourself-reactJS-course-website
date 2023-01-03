import React from "react"
import { Sources } from "../constant"
import "../icon/all.css"

const Source = () => {
    return (
        <section className="px-5 py-5 my-10 grid gap-20 justify-center | md:px-20 md:py-10 md:my-10">
            <div className="grid gap-y-10">
                <h1 className="urbanist text-[32px]">Source Files</h1>
                <div className="grid gap-10 | md:grid-cols-2 | xl:grid-cols-3">
                    {Sources.map((source,index) => (
                        <div className="grid gap-3 content-start">
                            <img src={source.img} key={index} alt="Course" className="w-full"/>
                            <div className="grid px-3 gap-2">
                                <a href="app.js" className="inter no-underline text-base | md:text-sm | xl:text-base">{source.title}</a>
                                <div className="inter flex justify-between">
                                    <p><i className="fa fa-arrow-down border-b-4 border-neutral-400 text-neutral-400 mr-2"></i>{source.rating}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Source