import React from "react"
import Logo from '../assets/ecourself.svg'

const Footer = () => {
    return (
        <footer className="py-12 px-10 grid justify-start gap-10 | md:grid-cols-4 md:px-20 md:py-32 md:justify-between md:items-start">
            <img src={Logo} alt="logo"/>
                <div className="grid gap-5">
                    <h1 className="urbanist font-medium text-2xl">Pages</h1>
                    <a href="app.js" className="inter no-underline font-light text-base">Course</a>
                    <a href="app.js" className="inter no-underline font-light text-base">Resource</a>
                    <a href="app.js" className="inter no-underline font-light text-base">About us</a>
                </div>
                <div className="grid gap-5">
                    <h1 className="urbanist font-medium text-2xl">Useful links</h1>
                    <a href="app.js" className="inter no-underline font-light text-base">Privacy Policy</a>
                    <a href="app.js" className="inter no-underline font-light text-base">Terms & Conditions</a>
                    <a href="app.js" className="inter no-underline font-light text-base">Lisences</a>
                </div>
                <div className="grid gap-5">
                    <h1 className="urbanist font-medium text-2xl">Contact</h1>
                    <a href="app.js" className="inter no-underline font-light text-base">14440, Penjaringan, DKI Jakarta, Indonesia.</a>
                    <a href="app.js" className="inter no-underline font-light text-base">+62217763827</a>
                </div>
        </footer>
    )
}

export default Footer