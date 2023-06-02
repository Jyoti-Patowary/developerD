import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 mb-4">Let's get in touch! Fill out the form below to send me a message.</p>
            <form>
              <div className="mb-4">
                <label className="block text-gray-800 font-bold mb-2" htmlFor="name">Name</label>
                <input type="text" id="name" className="border border-gray-400 rounded-md py-2 px-4 w-full focus:outline-none focus:border-indigo-500" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 font-bold mb-2" htmlFor="email">Email</label>
                <input type="email" id="email" className="border border-gray-400 rounded-md py-2 px-4 w-full focus:outline-none focus:border-indigo-500" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 font-bold mb-2" htmlFor="message">Message</label>
                <textarea id="message" className="border border-gray-400 rounded-md py-2 px-4 w-full h-40 resize-none focus:outline-none focus:border-indigo-500"></textarea>
              </div>
              <button type="submit" className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md focus:outline-none">Send Message</button>
            </form>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Contact Information</h3>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ligula eget metus elementum efficitur.
              Integer quis ullamcorper justo, in luctus dui. Nunc vestibulum ante vitae felis sollicitudin dapibus.
              Nullam rutrum sem sit amet mi efficitur maximus.
            </p>
            <p className="text-gray-700 mb-4">
              Phone: +123456789<br />
              Email: contact@example.com<br />
              Address: 123 Main Street, City, Country
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
