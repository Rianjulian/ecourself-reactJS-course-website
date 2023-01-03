import React from "react";
import AllCourse from "../component/AllCourse";
import Course from '../component/Course';

const Courses = () => {
  return (
    <>
      <div className="text-left px-5 pt-5 | md:px-20 md:pt-20">
        <h2 className="urbanist text-lg text-soft-purple">Start Journey</h2>
        <h1 className="urbanist text-[32px]">No more excuses, action now</h1>
      </div>
      <Course/>
      <AllCourse/>
    </>
  )
};

export default Courses;