import React from "react"
import ProjectCard from "./project-card"
import Section from "./section"
import Heading2 from "./heading2"

const projects = [
  {
    id: "obdb",
    title: "Open Brewery DB",
    description:
      "Open Brewery DB is a free API for public information on breweries, cideries, brewpubs, and bottleshops.",
    tags: ["data", "api", "ruby-on-rails", "postgresql", "aws", "heroku"],
    imageUrl:
      "https://res.cloudinary.com/wanderingleafstudios/image/upload/v1572317242/openbrewerydb/OpenBreweryDBLogo.jpg",
    imageAlt: "Open Brewery DB Logo",
    linkUrl: "https://www.openbrewerydb.org",
  },
  {
    id: "data-nerd-newsletter",
    title: "Data Nerd Newsletter",
    description:
      "The archives for my weekly newsletter where I breakdown data and machine learning topics.",
    tags: ["data-science", "machine-learning", "newsletter"],
    imageUrl:
      "https://res.cloudinary.com/wanderingleafstudios/image/upload/v1587682706/chrisjmears.com/data-nerd-newsletter-og.jpg",
    imageAlt: "Data Nerd Newsletter",
    ctaText: "View Archives",
    linkUrl: "/data-nerd-newsletter",
  },
  {
    id: "springboard-london-boroughs",
    title: "Data Analysis - London Boroughs",
    description:
      "Exploratory Data Analysis (EDA) to determine the most expensive London borough based on the housing prices of the last two decades",
    tags: ["python", "pandas", "jupyter notebook", "data cleaning"],
    imageUrl:
      "https://res.cloudinary.com/wanderingleafstudios/image/upload/v1589346010/chrisjmears.com/most-expensive-london-boroughs.png",
    imageAlt: "Most expensive London boroughs graph",
    ctaText: "View Notebook",
    linkUrl: "https://github.com/chrisjm/chrisjmears-gatsby/blob/master/content/notebooks/london-borough-housing-prices-eda.ipynb",
  },
  {
    id: "tea-quiz",
    title: "Tea Quiz",
    description:
      "A small project to demonstrate a simple web-based ReactJS quiz app to collect data.",
    tags: ["javascript", "reactjs", "netlify", "material-ui"],
    imageUrl:
      "https://res.cloudinary.com/wanderingleafstudios/image/upload/v1576648921/chrisjmears.com/christine-wehrmeier-l4MCijLHc0Q-unsplash.jpg",
    imageAlt: "Tea field",
    linkUrl: "https://tea-quiz.wanderingleafstudios.com/",
  },
]

function Projects() {
  return (
    <Section>
      <Heading2 title="Projects" />
      <div className="flex md:flex-column flex-wrap md:flex-nowrap justify-between">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </Section>
  )
}

export default Projects
