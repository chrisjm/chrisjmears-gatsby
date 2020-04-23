import React from "react"
import Layout from "../components/layout"
import Section from "../components/section"
import SEO from "../components/seo"
import resume from "../utils/resume"
import OutsideLink from "../components/outside-link"
import { Link } from "gatsby"

function Resume() {
  return (
    <Layout>
      <SEO title="Chris J Mears's Resume" />
      <Section sectionClasses="container mx-auto max-w-4xl">
        <h1 className="text-5xl text-center">{resume.personal.name}</h1>
        <div className="mt-10 border-2 rounded p-10 mt-10 border-blue-100 p-10 bg-blue-500 text-white">
          <h2 className="text-2xl">{resume.personal.objective}</h2>
          <div className="text-center mt-5">
            <Link
              to="/contact"
              className="js-event-track bg-blue-900 border-2 border-white hover:bg-blue-500 text-white font-semibold py-2 px-3 rounded shadow-md hover:shadow-none inline-block no-underline text-xl"
            >
              Let's Chat!
            </Link>
          </div>
        </div>
        <div className="personal-experience mt-10">
          <h2 className="text-2xl mb-4">Experience</h2>
          {resume.experience.map((experience) => (
            <div className="experience">
              <h3 className="text-xl font-bold">
                {experience.position}, {experience.company}
              </h3>
              <div className="location-date mb-3">
                {experience.location} ‒ {experience.startDate} to{" "}
                {experience.endDate}
              </div>
              <ul className="accomplishments-list list-disc pl-6 mb-6">
                {experience.accomplishments.map((accomplishment) => (
                  <li className="accomplishment mb-1">{accomplishment}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="education mb-6">
          <h2 className="text-2xl mb-4">Education</h2>
          <ul className="education-list">
            {resume.education.map((education) => (
              <li className="education-item mb-3">
                <div>
                  {education.school}, {education.location}
                </div>
                <div className="degree">{education.degree}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="skills mb-6">
          <h2 className="text-2xl mb-6">Technical Skills</h2>
          <div className="programming-languages mb-6">
            <h3 className="text-xl mb-6">Programming Languages</h3>
            <div className="mb-3">
              {resume.skills.programmingLanguages.join(", ")}
            </div>
          </div>
          <div className="tools mb-6">
            <h3 className="text-xl mb-6">Tools &amp; Services</h3>
            <ul className="list-disc pl-6 mb-3">
              <li className="mb-1">
                <em>Database &amp; Caching</em> ‒{" "}
                {resume.skills.tools.database.join(", ")}
              </li>
              <li className="mb-1">
                <em>eCommerce</em> ‒ {resume.skills.tools.ecommerce.join(", ")}
              </li>
              <li className="mb-1">
                <em>Services</em> ‒ {resume.skills.tools.services.join(", ")}
              </li>
              <li className="mb-1">
                <em>Project Management</em> ‒{" "}
                {resume.skills.tools.projectManagement.join(", ")}
              </li>
              <li className="mb-1">
                <em>Frameworks</em> ‒{" "}
                {resume.skills.frameworks.javascript.join(", ")},{" "}
                {resume.skills.frameworks.ruby.join(", ")},{" "}
                {resume.skills.frameworks.php.join(", ")}
              </li>
            </ul>
          </div>
        </div>
        <div className="certification mb-6">
          <h2 className="text-2xl mb-3">Certifications</h2>
          <ul className="certificaton-list">
            {resume.supplemental.certifications.map((certification) => (
              <li className="certification-item mb-3">
                <OutsideLink to={certification.details}>
                  {certification.name}
                </OutsideLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="publication mb-6">
          <h2 className="text-2xl mb-3">Publications</h2>
          <ul className="certificaton-list">
            {resume.supplemental.publications.map((publication) => (
              <li className="publication-item mb-3">
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
        <div className="projects mb-6">
          <h2 className="text-2xl mb-3">Projects</h2>
          <ul className="projects-list">
            {resume.supplemental.projects.map((project) => (
              <li className="project-item mb-3">
                <h3 className="font-bold mb-1">
                  <OutsideLink to={project.url}>{project.name}</OutsideLink>
                </h3>
                <p className="mb-3">{project.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="interests mb-6">
          <h2 className="text-2xl mb-3">Interests</h2>
          <ul className="interests-list">
            {resume.personal.interests.map((interest) => (
              <li className="interest-item mb-0">{interest}</li>
            ))}
          </ul>
        </div>
      </Section>
    </Layout>
  )
}

export default Resume
