import React from 'react';
import Image from 'next/image';

const About = () => {
    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl text-center font-bold text-gray-800 mb-8">About Me</h2>
                <div className="flex flex-col md:flex-row px-20">
                    <div className="md:w-1/2 md:h-1/2">
                        <Image src="/" alt="Profile" height={440} width={550} className="w-50 h-90 mb-6 md:mb-0 border-solid border-2 border-indigo-600 " />
                    </div>
                    <div className="md:w-1/2 md:pl-8 italic text-justify">
                        <p className="text-gray-700 mb-4">
                            A self-taught full-stack developer based in Guwahati, Assam. I have a passion for building innovative and efficient web applications that provide meaningful solutions to real-world problems.

                            My journey into the world of programming started several years ago when I developed a curiosity for technology and its potential to make a positive impact. Since then, I've been on a constant learning journey, honing my skills and expanding my knowledge in various areas of web development.
                        </p>
                        <p className="text-gray-700 mb-4">
                            As a full-stack developer, I have experience working with both front-end and back-end technologies. On the front-end, I'm proficient in HTML, CSS, JavaScript, and modern frameworks like React.js. I have a keen eye for design and strive to create intuitive and user-friendly interfaces.

                            On the back-end, I specialize in building robust and scalable server-side applications using technologies like Node.js and Express.js. I have experience with databases such as MongoDB and MySQL, and I'm familiar with RESTful API development.
                        </p>
                        <p className="text-gray-700">
                            I believe in the power of collaboration and enjoy working in a team environment to bring ideas to life. I'm always eager to learn new technologies and stay up-to-date with the latest industry trends.

                            If you have a project in mind or just want to connect, feel free to reach out. I'm excited to be a part of the ever-evolving world of web development and contribute to its growth.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;