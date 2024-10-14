import React from "react"
import Section from "./section"
import { Link } from "gatsby"

function Hero() {
  return (
    <Section sectionClasses="bg-blue-700 text-white hero">
      <div className="flex flex-col md:flex-row items-center">
        <div className="mb-5 md:mb-0 md:mr-10">
          <img
            className="w-48 h-48 rounded-full shadow-lg mb-0"
            src="https://res.cloudinary.com/wanderingleafstudios/image/upload/c_scale,w_512/v1543031975/chrisjmears.com/chris-mears-profile-2018.jpg"
            alt="Chris J Mears"
          />
        </div>
        <div className="flex-1 antialiased">
          <h1 className="text-5xl font-bold mb-2">Hi! My name is Chris.</h1>
          <h2 className="text-2xl font-bold text-blue-200 mb-6">
            I'm a{" "}
            <strong className="text-white">
              Senior-level Software Engineer and Data Engineer
            </strong>{" "}
            with experience in{" "}
            <strong className="text-white">
              Python, SQL, JavaScript/TypeScript, Data Analysis, Machine
              Learning, and AI
            </strong>
            .
          </h2>
          <Link
            to="/contact"
            className="js-event-track bg-blue-900 border-2 border-white hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow-md hover:shadow-none inline-block no-underline text-xl"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </Section>
  )
}

export default Hero
