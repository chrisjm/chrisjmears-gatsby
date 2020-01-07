import React from 'react';
import OutsideLink from './outside-link';

function ProjectCard({ project }) {
  const { title, description, tags, imageUrl, imageAlt, linkUrl } = project;

  return (
    <div className="max-w-xl lg:max-w-xs rounded overflow-hidden shadow-lg hover:shadow-md mx-4 my-3">
      <OutsideLink to={linkUrl}>
        <img className="w-full h-48 object-cover" src={imageUrl} alt={imageAlt} />
      </OutsideLink>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base mb-2">{description}</p>
        <p className="font-bold text-base">
          <OutsideLink to={linkUrl}>Link</OutsideLink>
        </p>
      </div>
      <div className="px-6 py-4">
        {tags.map(tag => (
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}

// TODO: PropTypes

export default ProjectCard;
