import React from "react"
import Layout from "../components/layout"
import Section from "../components/section"
import SEO from "../components/seo"
import resume from "../utils/resume"
import OutsideLink from "../components/outside-link"
import NewsletterSignup from "../components/newsletter-signup"
import { Link } from "gatsby"

function Resume() {
  return (
    <Layout>
      <SEO title="Chris J Mears's Resume" />
      <Section sectionClasses="container mx-auto max-w-4xl">
        <h1 className="text-5xl text-center">{resume.personal.name}</h1>

        <div className="text-center mt-10 border-8 rounded p-8 mt-10 border-blue-500 bg-blue-700 text-white border-radius rounded-lg">
          <div className="flex justify-center">
            <div>
              <img
                className="w-48 h-48 rounded-full shadow-lg border-4 border-white"
                src="https://res.cloudinary.com/wanderingleafstudios/image/upload/c_scale,w_512/v1543031975/chrisjmears.com/chris-mears-profile-2018.jpg"
                alt="Chris J Mears"
              />
            </div>
          </div>
          <h2 className="text-2xl">{resume.personal.objective}</h2>
          <div className="text-center mt-6">
            <Link
              to="/contact"
              className="js-event-track bg-blue-900 border-2 border-white hover:bg-blue-500 text-white font-semibold py-2 px-3 rounded shadow-md hover:shadow-none inline-block no-underline text-xl"
            >
              Let's Chat!
            </Link>
          </div>
        </div>

        <div className="education mt-10">
          <h2 className="text-2xl">Education</h2>
          <ul className="education-list">
            {resume.education.map(education => (
              <li className="education-item mt-3">
                <div className="degree font-bold">{education.degree}</div>
                <div>
                  {education.school}, {education.location}
                </div>
                <div className="description text-sm pl-6 mt-1">
                  {education.description}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="skills mt-6">
          <h2 className="text-2xl">Technical Skills</h2>
          <div className="tools mt-3">
            <ul className="list-disc pl-6">
              {resume.skills.map(skill => (
                <li className="mb-1">
                  <em>{skill.title}</em> ‒ {skill.list.join(", ")}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="personal-experience mt-6">
          <h2 className="text-2xl">Experience</h2>
          {resume.experience.map(experience => (
            <div className="experience mt-4">
              <h3 className="text-xl font-bold">{experience.position}</h3>
              <div className="location-date mt-1">
                {experience.company} ‒ {experience.location} (
                {experience.startDate} to {experience.endDate})
              </div>
              <ul className="accomplishments-list list-disc pl-6 mt-1">
                {experience.accomplishments.map(accomplishment => (
                  <li className="accomplishment mb-1">{accomplishment}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="certification mt-6">
          <h2 className="text-2xl">Certifications</h2>
          <ul className="certificaton-list mt-3">
            {resume.supplemental.certifications.map(certification => (
              <li className="certification-item mb-1">
                <OutsideLink to={certification.details}>
                  {certification.name}
                </OutsideLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="publication mt-6">
          <h2 className="text-2xl">Publications</h2>
          <ul className="certificaton-list mt-3">
            {resume.supplemental.publications.map(publication => (
              <li className="publication-item mb-1">
                <OutsideLink
                  to={`https://duckduckgo.com/?q=isbn+${publication.isbn}`}
                >
                  {publication.title}
                </OutsideLink>{" "}
                ({publication.publisher}; {publication.date}; ISBN: ISBN:{" "}
                <OutsideLink
                  to={`https://duckduckgo.com/?q=isbn+${publication.isbn}`}
                >
                  {publication.isbn}
                </OutsideLink>
                )
              </li>
            ))}
          </ul>
        </div>
        <div className="projects mt-6">
          <h2 className="text-2xl">Projects</h2>
          <ul className="projects-list">
            {resume.supplemental.projects.map(project => (
              <li className="project-item mt-3">
                <h3 className="font-bold mb-1">
                  <OutsideLink to={project.url}>{project.name}</OutsideLink>
                </h3>
                <p className="mt-3">{project.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="interests mt-6">
          <h2 className="text-2xl">Interests</h2>
          <ul className="interests-list mt-3">
            {resume.personal.interests.map(interest => (
              <li className="interest-item mb-1">{interest}</li>
            ))}
          </ul>
        </div>
      </Section>
      <NewsletterSignup />
    </Layout>
  )
}

export default Resume
