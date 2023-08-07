import React from 'react';
import { DiReact, DiNodejs, DiDatabase, DiJavascript1 } from 'react-icons/di';
import { SiMongodb, SiExpress, SiHtml5, SiCss3, SiMui, SiGraphql, SiNextdotjs, SiTailwindcss, SiFigma } from 'react-icons/si';

function Skills() {
  return (
    <div className="bg-gray-100 min-h-screen ">
      <h2 className="text-3xl text-center font-bold mb-10">Technologies and Tools I Used Most</h2>

      <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-6 md:p-10 hover:bg-blue-200 transition-colors duration-300">
            <div className="flex items-center justify-center">
              <DiReact className="text-6xl" />
            </div>
            <h3 className="text-xl text-center font-bold mt-2">React Js</h3>
          </div>
          <div className="bg-white rounded-lg p-6 md:p-10 hover:bg-blue-200 transition-colors duration-300">
            <div className="flex items-center justify-center">
              <SiNextdotjs className="text-6xl" />
            </div>
            <h3 className="text-xl text-center font-bold mt-2">Next Js</h3>
          </div>
          <div className="bg-white rounded-lg p-6 md:p-10 hover:bg-blue-200 transition-colors duration-300">
            <div className="flex items-center justify-center">
              <SiMongodb className="text-6xl" />
            </div>
            <h3 className="text-xl text-center font-bold mt-2">MongoDB</h3>
          </div>
          <div className="bg-white rounded-lg p-6 md:p-10 hover:bg-blue-200 transition-colors duration-300">
            <div className="flex items-center justify-center">
              <SiExpress className="text-6xl" />
            </div>
            <h3 className="text-xl text-center font-bold mt-2">Express Js</h3>
          </div>
          <div className="bg-white rounded-lg p-6 md:p-10 hover:bg-blue-200 transition-colors duration-300">
            <div className="flex items-center justify-center">
              <DiJavascript1 className="text-6xl" />
            </div>
            <h3 className="text-xl text-center font-bold mt-2">JavaScript</h3>
          </div>
          <div className="bg-white rounded-lg p-6 md:p-10 hover:bg-blue-200 transition-colors duration-300">
            <div className="flex items-center justify-center">
              <SiHtml5 className="text-6xl" />
            </div>
            <h3 className="text-xl text-center font-bold mt-2">HTML5</h3>
          </div>
          <div className="bg-white rounded-lg p-6 md:p-10 hover:bg-blue-200 transition-colors duration-300">
            <div className="flex items-center justify-center">
              <SiCss3 className="text-6xl" />
            </div>
            <h3 className="text-xl text-center font-bold mt-2">CSS3</h3>
          </div>
          <div className="bg-white rounded-lg p-6 md:p-10 hover:bg-blue-200 transition-colors duration-300">
            <div className="flex items-center justify-center">
              <SiMui className="text-6xl" />
            </div>
            <h3 className="text-xl text-center font-bold mt-2">Material UI</h3>
          </div>
          <div className="bg-white rounded-lg p-6 md:p-10 hover:bg-blue-200 transition-colors duration-300">
            <div className="flex items-center justify-center">
              <SiTailwindcss className="text-6xl" />
            </div>
            <h3 className="text-xl text-center font-bold mt-2">Tailwind CSS</h3>
          </div>
          {/* <div className="bg-white rounded-lg p-6 md:p-10 hover:bg-blue-200 transition-colors duration-300">
            <div className="flex items-center justify-center">
              <SiGraphql className="text-6xl" />
            </div>
            <h3 className="text-xl text-center font-bold mt-2">GraphQL</h3>
          </div> */}
          <div className="bg-white rounded-lg p-6 md:p-10 hover:bg-blue-200 transition-colors duration-300">
            <div className="flex items-center justify-center">
              <SiFigma className="text-6xl" />
            </div>
            <h3 className="text-xl text-center font-bold mt-2">Figma</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
