import React from 'react';

const About = () => {
    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 md:h-1/2">
                        <img src="https://images.unsplash.com/photo-1680528891514-a046ebfe35e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="Profile" className="w-50 h-90 mb-6 md:mb-0" />
                    </div>
                    <div className="md:w-1/2 md:pl-8">
                        <p className="text-gray-700 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ligula eget metus elementum efficitur.
                            Integer quis ullamcorper justo, in luctus dui. Nunc vestibulum ante vitae felis sollicitudin dapibus.
                            Nullam rutrum sem sit amet mi efficitur maximus. Fusce tempor lectus a odio dapibus viverra.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Proin lobortis est eu dapibus rutrum. Mauris ultrices auctor ligula, vitae feugiat dolor auctor eu.
                            Suspendisse tincidunt tristique urna, vel faucibus elit sagittis a. Aenean pharetra nisi nec metus
                            facilisis iaculis. Pellentesque ac lorem nec felis rhoncus posuere.
                        </p>
                        <p className="text-gray-700">
                            Curabitur non mauris lectus. Donec non aliquet nibh, vel fringilla lacus. Duis vestibulum eleifend
                            faucibus. Suspendisse potenti. Aliquam vel purus eu massa interdum scelerisque non at dui. Nullam et
                            consectetur neque.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
