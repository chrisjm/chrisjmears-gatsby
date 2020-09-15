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
            className="w-64 h-64 rounded-full shadow-lg inline"
            src="https://res.cloudinary.com/wanderingleafstudios/image/upload/c_scale,w_512/v1543031462/chrisjmears.com/Cooper_and_I_in_Julian.jpg"
            alt="Me and Cooper, the tiny black dog."
          />
        </div>
        <div className="flex-1 mb-5 md:mr-5">
          <div>
            <ul className="text-lg mb-8">
              <li className="mb-4 leading-tight">
                I'm a Data Scientist with experience in Machine Learning, Deep Learning, Python, SQL, JavaScript and Tableau.
              </li>
              <li className="mb-4 leading-tight">
                I currently own and operate a{" "}
                <OutsideLink to="https://www.wanderingleafstudios.com">
                  data analytics consulting business
                </OutsideLink>{" "}
                and have previously worked for companies large and small in
                different sectors including Fortune 500, startups, and
                non-profits.
              </li>
              <li className="mb-4 leading-tight">
                Iʼm an{" "}
                <OutsideLink to="https://www.openbrewerydb.org/">
                  open-source project maintainer
                </OutsideLink>
                , and rescue dog owner.
              </li>
              <li className="mb-4 leading-tight">
                I'm currently seeking full-time opportunities at companies with
                a healthy remote team philosophy.
                <div>
                  <Link
                    to="/contact"
                    className="js-event-track bg-green-700 border-2 border-blue-100 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded shadow-lg hover:shadow-md inline-block no-underline text-xl mt-4"
                  >
                    <span className="text-white">Contact Me</span>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default AboutMe
