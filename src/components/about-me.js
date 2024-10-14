import React from "react"
import Section from "./section"
import Heading2 from "./heading2"
import OutsideLink from "./outside-link"

function AboutMe() {
  return (
    <Section>
      <Heading2 title="About Me" />
      <div className="flex flex-col lg:flex-row">
        <div className="mb-5 md:mr-5 text-center">
          <img
            className="w-48 h-48 rounded-full shadow-lg inline"
            src="https://res.cloudinary.com/wanderingleafstudios/image/upload/c_scale,w_512/v1543031462/chrisjmears.com/Cooper_and_I_in_Julian.jpg"
            alt="Me and Cooper, the tiny black dog."
          />
        </div>
        <div className="flex-1 mb-5 md:mr-5">
          <div>
            <ul className="text-lg mb-8">
              <li className="mb-4 leading-tight">
                As an accomplished Senior Software Engineer transitioning into Data Engineering, I bring a strong foundation in JavaScript and Python, complemented by my expertise in data analysis and statistics. My passion for machine learning and artificial intelligence fuels my commitment to harnessing data to drive actionable insights and innovative solutions.
              </li>
              <li className="mb-4 leading-tight">
                I own and operate a{" "}
                <OutsideLink to="https://www.wanderingleafstudios.com">
                  data analytics consulting business
                </OutsideLink>{" "}
                and have previously worked for companies large and small in
                different sectors including Fortune 500, startups, and
                non-profits.
              </li>
              <li className="mb-4 leading-tight">
                Finally, Iʼm an open-source project maintainer,{" "}
                <OutsideLink to="https://www.openbrewerydb.org/">
                  Open Brewery DB
                </OutsideLink>
                , and proud rescue dog owner.
              </li>
              <li className="mb-4 leading-tight"></li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default AboutMe
