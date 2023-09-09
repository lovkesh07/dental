import React from "react";

const Abouttext = () => {
  return (
    <div id="diagnoos">
      <div className="bg-gradient-to-t from-white from-10% via-white via-10% to-[#64CCC5] to-90% pb-10">
        <div className="pt-22 overflow-hidden sm:mt-0 sm:pt-20">
          <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
              <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                <h2
                  className="text-3xl lg:text-6xl tracking-tight text-[#053B50] sm:text-4xl  font-extrabold"
                  data-aos="fade-up"
                >
                  About{" "}
                  <span className="text-5xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-400">
                    Chauhan dental
                  </span>
                </h2>

                <p
                  className="mt-6 text-xl leading-8 text-gray-600"
                  data-aos="fade-up"
                >
                  Chauhan dental laboratory was founded as a small laboratory in
                  1992 by Mr. Lalit Kumar in New Delhi and has remained a family
                  business ever since. CDL has experienced incredible growth
                  consistently throughout the decades and we attribute this to
                  our ability to constantly stay aware of any new techniques
                  that came onto the market.
                </p>

                <p
                  className="mt-6 text-xl leading-8 text-gray-600"
                  data-aos="fade-up"
                >
                  Our Directors have traveled extensively; attending
                  international seminars and dental exhibitions and passing on
                  the knowledge they gain throughout our entire business.
                </p>
                

                {/* <p
                  className="mt-6 text-xl leading-8 text-gray-600"
                  data-aos="fade-up"
                >

                  
                </p>

                <p
                  className="mt-6 text-xl leading-8 text-gray-600"
                  data-aos="fade-up"
                >

                  
                </p> */}

                {/* 
                <p
                  className="mt-6 text-base leading-7 text-gray-600"
                  data-aos="fade-up"
                >
                  we are not just building technology—we are building
                  relationships.
                </p> */}
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

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <p
                  className="mt-6 text-xl leading-8 text-gray-600"
                  data-aos="fade-up"
                >
                  To this day this is the strategy we employ, and this is what
                  gives CDL an edge over our competitors.

                  This has propelled the laboratory to where it is today, with
                  over 100 employees and creating partnerships worldwide.
                </p>

                

                <p
                  className="mt-24 text-xl leading-8 text-gray-600 font-bold"
                  data-aos="fade-up"
                >
                  CDL is more than just a dental lab. Why is this?
                </p>

                <p
                  className="mt-6 text-xl leading-8 text-gray-600"
                  data-aos="fade-up"
                >
                  Firstly, we place great importance on sharing the unrivaled
                  knowledge of our Directors and Master Technicians with
                  customers. We do this through regular customer seminars and
                  educational workshops on our products and developments in
                  digital dentistry.
                </p>

                <p
                  className="mt-6 text-xl leading-8 text-gray-600"
                  data-aos="fade-up"
                >
                  Secondly, we pride ourselves on providing industry-leading
                  adoption of new technology, materials and techniques; whilst
                  also providing our customers with the support necessary to
                  understand new developments in the industry. In this way, we
                  help customers to grow their practice and support their
                  transition to a digital workflow.
                </p>

                <p
                  className="mt-6 text-xl leading-8 text-gray-600"
                  data-aos="fade-up"
                >
                  With more than 30 years of industry experience, spanning four
                  generations, the CDL team boasts an unsurpassed record of
                  excellence and performance in the realm of dental technology.
                </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abouttext;
