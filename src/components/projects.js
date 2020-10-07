import React from "react"
import ProjectCard from "./project-card"
import Section from "./section"
import Heading2 from "./heading2"

const projects = [
  {
    id: "data-nerd-newsletter",
    title: "Data Nerd Newsletter",
    description:
      "The archives for my weekly newsletter where I breakdown data and machine learning topics.",
    tags: ["newsletter", "data-science", "machine-learning", "artificial-intelligence", "deep-learning"],
    imageUrl:
      "https://res.cloudinary.com/wanderingleafstudios/image/upload/v1587682706/chrisjmears.com/data-nerd-newsletter-og.jpg",
    imageAlt: "Data Nerd Newsletter",
    ctaText: "View Archives",
    linkUrl: "/data-nerd-newsletter",
  },
  {
    id: "credit-card-fraud-analysis",
    title: "Credit Card Fraud Analysis and Detection",
    description:
      "A project that analyzes and fits various classification models to a highly imbalanced credit card fraud dataset.",
    tags: ["python", "scikit-learn", "machine-learning", "modeling"],
    imageUrl:
      "https://res.cloudinary.com/wanderingleafstudios/image/upload/v1602041852/chrisjmears.com/model-evaluation-prauc.png",
    imageAlt: "Precision Recall AUC model evaluation plot",
    ctaText: "View Report",
    linkUrl: "https://github.com/chrisjm/Credit-Card-Fraud-Analysis/blob/master/README.md",
  },
  {
    id: "springboard-london-boroughs",
    title: "London Boroughs Data Analysis",
    description:
      "A simple exploratory data analysis (EDA) to determine the most expensive London borough based on the housing prices of the last two decades.",
    tags: ["python", "notebook", "data-analysis"],
    imageUrl:
      "https://res.cloudinary.com/wanderingleafstudios/image/upload/v1589346010/chrisjmears.com/most-expensive-london-boroughs.png",
    imageAlt: "Most expensive London boroughs graph",
    ctaText: "View Notebook",
    linkUrl: "https://github.com/chrisjm/chrisjmears-gatsby/blob/master/content/notebooks/london-borough-housing-prices-eda.ipynb",
  },
  {
    id: "obdb",
    title: "Open Brewery DB",
    description:
      "Open Brewery DB is a free dataset and API with public information on breweries, cideries, brewpubs, and bottleshops.",
    tags: ["open-source", "public-api"],
    imageUrl:
      "https://res.cloudinary.com/wanderingleafstudios/image/upload/v1572317242/openbrewerydb/OpenBreweryDBLogo.jpg",
    imageAlt: "Open Brewery DB Logo",
    linkUrl: "https://www.openbrewerydb.org",
  },
  {
    id: "tea-quiz",
    title: "Tea Quiz",
    description:
      "A small project to demonstrate a simple web-based ReactJS quiz app to collect data.",
    tags: ["reactjs", "material-ui", "localstorage"],
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
