import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ligula eget metus elementum efficitur.',
      image: 'https://images.unsplash.com/file-1661973760703-91f50df21c28image?dpr=2&auto=format&fit=crop&w=416&q=60',
    },
    {
      title: 'Project 2',
      description: 'Proin lobortis est eu dapibus rutrum. Mauris ultrices auctor ligula, vitae feugiat dolor auctor eu.',
      image: 'https://images.unsplash.com/photo-1684395882887-24078f443b6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Project 3',
      description: 'Curabitur non mauris lectus. Donec non aliquet nibh, vel fringilla lacus. Duis vestibulum eleifend faucibus.',
      image: 'https://plus.unsplash.com/premium_photo-1683725241362-12b7560f9321?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="rounded-lg shadow-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
