import React from 'react';
import ProjectCard from './project-card';
import Section from './section';
import Heading2 from './heading2';

const projects = [
  {
    title: 'Open Brewery DB',
    description:
      'Open Brewery DB is a free API for public information on breweries, cideries, brewpubs, and bottleshops. Currently it is focused to the United States, but future plans are to import world-wide data.',
    tags: ['api', 'ruby-on-rails', 'postgresql', 'aws', 'heroku', 'cloudflare'],
    imageUrl:
      'https://res.cloudinary.com/wanderingleafstudios/image/upload/v1572317242/openbrewerydb/OpenBreweryDBLogo.png',
    imageAlt: 'Open Brewery DB Logo',
    linkUrl: 'https://www.openbrewerydb.org',
  },
  {
    title: 'Website Therapist',
    description:
      'A passion project to help non-technical solopreneurs and small business owners feel more comfortable with their technology so they can focus on their real business goals and passion.',
    tags: ['customer-success', 'consulting', 'squarespace'],
    imageUrl:
      'https://images.squarespace-cdn.com/content/v1/5cb8d535e8ba44f36ae56baa/1555983091204-F94YQTDAGZ9SQ4X76IBC/ke17ZwdGBToddI8pDm48kIUn3NNSoNR7UgtxyXSfIfp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0hx0TKp4jCW7sB_BGURRbuW2-d_MTffR-bSzQ7fk-I35SpC23Zv5D0i2JpZaoBOfKQ/monkey-shouting-cave-asa-rodger-unsplash.jpg',
    imageAlt: 'Frustrated monkey in a zoo',
    linkUrl: 'https://website-therapist.com',
  },
  {
    title: 'Tea Quiz',
    description: 'A small project to demonstrate a simple web-based ReactJS quiz app.',
    tags: ['javascript', 'reactjs', 'netlify', 'material-ui'],
    imageUrl:
      'https://res.cloudinary.com/wanderingleafstudios/image/upload/v1576648921/chrisjmears.com/christine-wehrmeier-l4MCijLHc0Q-unsplash.jpg',
    imageAlt: 'Tea field',
    linkUrl: 'https://tea-quiz.wanderingleafstudios.com/',
  },
];

function Projects() {
  return (
    <Section>
      <Heading2 title="Projects" />
      <div className="flex md:flex-column flex-wrap md:flex-nowrap justify-center">
        {projects.map(project => (
          <ProjectCard project={project} />
        ))}
      </div>
    </Section>
  );
}

export default Projects;
