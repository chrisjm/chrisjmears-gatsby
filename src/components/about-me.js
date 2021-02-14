import React from "react"
import Section from "./section"
import Heading2 from "./heading2"
import OutsideLink from "./outside-link"
import { Link } from "gatsby"

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
                I'm Data Visualization Engineer and Data Scientist with
                JavaScript and Python skills, a love for data analysis, and a
                passion for machine learning.
              </li>
              <li className="mb-4 leading-tight">
                I'm currently employed as a Senior Engineer with{" "}
                <OutsideLink to="https://www.carevoyance.com">
                  Carevoyance
                </OutsideLink>
                , a healthcare business intelligence and sales platform.
              </li>
              <li className="mb-4 leading-tight">
                I also own and operate a{" "}
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
                , and rescue dog owner.
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
