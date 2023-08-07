import React from 'react';

const Contact = () => {
  return (
    <div className="container my-24 max-[640]:my-0 mx-auto md:px-24 ">
      <section className="text-center">
        <div className=" md:px-12">
          <div className="container mx-auto xl:px-32">
            <div className="grid items-center lg:grid-cols-2">
              {/* Contact Form */}
              <div className="md:mb-12 lg:mb-0 z-10 ">
                <div className="relative z-1 block bg-black rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 max-[600px]:mx-8 max-[600px]:mb-8  lg:-mr-14">
                  <h2 className="mb-12 text-3xl text-white font-bold">Contact us</h2>
                  <form>
                    {/* Form inputs and labels */}
                    <div className="text-white relative mb-6" data-te-input-wrapper-init>
                      <input
                        type="email"
                        className="text-black rounded bg transparent border-2 p-3 w-full"
                        id="exampleInput90"
                        placeholder="Name"
                      />
                    </div>
                    <div className="text-white relative mb-6" data-te-input-wrapper-init>
                      <input
                        type="email"
                        className="text-black rounded bg transparent border-2 p-3 w-full"
                        placeholder="Email address"
                      />
                    </div>
                    <div className="text-white relative mb-6" data-te-input-wrapper-init>
                      <textarea
                        className="text-black rounded bg-white border-2 p-3 w-full resize h-24"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    <button
                      type="button"
                      data-te-ripple-init
                      data-te-ripple-color="dark"
                      className="bg-black inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
              {/* Google Map */}
              <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                <div className="relative h-[700px]  rounded-lg shadow-lg dark:shadow-black/20 max-[600px]:mx-8 max-[600px]:mb-8 ">
                  <iframe
                    src="https://maps.google.com/maps?q=guwahati&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="absolute left-0 top-0 h-full w-full rounded-lg"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
