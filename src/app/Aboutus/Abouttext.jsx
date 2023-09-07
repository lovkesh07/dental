import React from "react";

const Abouttext = () => {
  return (
    <div id="diagnoos">
      <div className="bg-gradient-to-t from-white from-10% via-white via-10% to-[#64CCC5] to-90% pb-10">
        <div className="pt-22 overflow-hidden sm:mt-0 sm:pt-20">
          <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
              <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                <h2 className="text-3xl lg:text-6xl tracking-tight text-[#053B50] sm:text-4xl  font-extrabold" data-aos="fade-up">
                 About  <span className="text-5xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-400">Chauhan dental</span> 
                </h2>
                <p className="mt-6 text-xl leading-8 text-gray-600" data-aos="fade-up">
                  Our platform is designed to help healthcare providers optimize
                  their operations, improve patient outcomes, and reduce costs.
                  We believe that the key to successful healthcare delivery is
                  collaboration and partnership between healthcare providers,
                  patients, and technology companies like ours.
                </p>
                <p className="mt-6 text-base leading-7 text-gray-600" data-aos="fade-up">
                  we are not just building technology—we are building
                  relationships. 
                </p>
              </div>
              <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                  <img
                    src="https://smb.ibsrv.net/imageresizer/image/blog_images/1200x1200/6007/453920/0170678001639425089.jpg"
                    alt=""
                    
                    className="rounded-2xl lg:h-[80vh]"
                    data-aos="fade-up"
                  />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abouttext;
