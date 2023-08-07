import React from 'react';

function Experience() {
  const workExperience = [
    {
      title: "Full Stack Developer",
      company: "Ratepersqft",
      date: "February 2023 - Present",
      description: [
        "Developed and maintained full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js).",
        "Implemented server-side rendering and optimized application performance using Next.js framework.",
        "Collaborated with cross-functional teams to define and implement new features and functionality.",
        "Integrated third-party APIs and services to enhance application capabilities.",
        "Implemented user authentication and authorization features using JWT (JSON Web Tokens) and OAuth."
      ]
    },
    {
      title: "Full Stack Developer Intern",
      company: "TechVariable",
      date: "July 2022 - January 2023",
      description: [
        "Worked as a Full Stack Developer Intern, primarily focusing on the MERN stack (MongoDB, Express.js, React.js, and Node.js).",
        "Assisted in the development and maintenance of web applications using the MERN stack, contributing to both front-end and back-end tasks.",
        "Collaborated with the development team to implement new features and functionality based on project requirements.",
        "Assisted in the optimization of application performance and user experience through code refactoring and performance testing.",
        "Gained hands-on experience in designing and implementing RESTful APIs, database models, and user authentication systems."
      ]
    }
  ];

  return (

    <div className="bg-gray-100 flex flex-col justify-center items-center py-20">
    <div className="container mx-auto px-4 bg-wave-pattern bg-cover bg-no-repeat bg-bottom">
      <h2 className="text-3xl font-bold pl-9">Work Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
        {workExperience.map((experience, index) => (
          <div className="bg-white rounded-lg shadow p-6 md:p-10 transition-transform hover:scale-105" key={index}>
            <h3 className="text-xl text-start font-bold mb-2">{experience.title}</h3>
            <h3 className="text-xl text-start font-bold mb-2">{experience.company}</h3>
            <h3 className="text-xl text-start mb-4 italic">{experience.date}</h3>
            <ul className="text-start">
              {experience.description.map((item, index) => (
                <li className="flex items-start mb-5" key={index}>
                  <span className="inline-block w-4 h-4 bg-indigo-500 rounded-full mr-2 mt-1"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
);
}

export default Experience;
