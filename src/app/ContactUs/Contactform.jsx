"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import ContacUsGif from "@assets/contactus.gif";

const Contactform = () => {
  const [Name, setName] = useState("");
  const [Emails, setEmails] = useState("");
  const [Phoneno, setPhoneno] = useState("");
  const [Query, setQuery] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    window.location.href =
      "mailto:info@dotclu.com?subject=" +
      Query +
      "&body= \n Name:" +
      Name +
      " \n Email:" +
      Emails +
      " \n Phone No.:" +
      Phoneno +
      " \n Query:" +
      Query;

    setName("");
    setPhoneno("");
    setQuery("");
    setEmails("");
  };
  return (
    <div>
      {/* 
// <div className="w-[100%] p-4  flex justify-center items-center ">
    //   <div className=" w-[100%]   rounded-md flex flex-col sm:flex-row">
       
    //     <div className=" w-full h-fit   sm:min-h-[100%] flex flex-col items-center justify-center  rounded-md">
    //       <form
    //         onSubmit={sendEmail}
    //         className=" w-full h-full py-8  flex flex-col gap-10 items-center justify-center"
    //       >

    //         <div className="relative w-3/4">
    //           <input
    //             type="text"
    //             required
    //             name="Fullname"
    //             value={Name}
    //             onChange={(e) => {
    //               setName(e.target.value);
    //             }}
    //             className=" text-black w-full bg-transparent outline-none border-b-[1px] border-black"
    //           />
    //           <label className=" absolute top-[-24px] left-[5px] text-gray-500 text-sm">
    //             Full Name<span className="text-red-500"> *</span>
    //           </label>
    //         </div>

    //         <div className="relative w-3/4">
    //           <input
    //             type="text"
    //             required
    //             name="Email"
    //             value={Emails}
    //             onChange={(e) => {
    //               setEmails(e.target.value);
    //             }}
    //             className=" text-black w-full bg-transparent outline-none border-b-[1px] border-black"
    //           />
    //           <label className=" absolute top-[-24px] left-[5px] text-gray-500 text-sm">
    //             Email Address<span className="text-red-500"> *</span>
    //           </label>
    //         </div>

    //         <div className="w-3/4 flex flex-row gap-2">
    //           <div className="relative w-1/4">
    //             <input
    //               type="text"
    //               required
    //               className=" text-black w-full bg-transparent outline-none border-b-[1px] border-black"
    //             />
    //             <label className=" text-gray-500 absolute top-[-24px] left-[5px] text-sm">
    //               Code<span className="text-red-500"> *</span>
    //             </label>
    //           </div>

    //           <div className="relative w-3/4">
    //             <input
    //               type="number"
    //               required
    //               name="Phoneno"
    //               value={Phoneno}
    //               onChange={(e) => {
    //                 setPhoneno(e.target.value);
    //               }}
    //               className=" text-black w-full bg-transparent outline-none border-b-[1px] border-black"
    //             />
    //             <label className=" absolute top-[-24px] left-[5px] text-gray-500 text-sm">
    //               Mobile Number<span className="text-red-500"> *</span>
    //             </label>
    //           </div>
    //         </div>

    //         <div className="relative w-3/4">
    //           <textarea
    //             name="Query"
    //             value={Query}
    //             onChange={(e) => {
    //               setQuery(e.target.value);
    //             }}
    //             className=" text-black bg-transparent border-b-[1px] border-black w-full text-xs px-4 py-2 outline-none"
    //           ></textarea>
    //           <label className=" absolute top-[-24px] left-[5px] text-gray-500 text-sm ">
    //             Message<span className="text-red-500"> *</span>
    //           </label>
    //         </div>

    //         <div className=" flex flex-col gap-5 px-5">
    //           <div className=" flex flex-row items-center gap-1">
    //             <div>
    //               <input type="checkbox" required />
    //             </div>
    //             <span className=" text-black text-xs">
    //               {" "}
    //               By clicking here, I state that I have read and understood the{" "}
    //               <b className=" text-blue-400">
    //                 <Link href="/term&condition">Terms and conditions</Link>
    //               </b>{" "}
    //               &{" "}
    //               <b className=" text-blue-400">
    //                 <Link href="/privacy&policy">
    //                   Privacy policies of the company
    //                 </Link>
    //               </b>
    //               <b className=" text-red-500"> *</b>
    //             </span>
    //           </div>
    //           <button className="bg-blue-500 w-fit py-3 px-3 mx-auto rounded-lg hover:bg-blue-600  transition-all duration-100 ease-in">
    //             Submit
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div> */}

      <section class="  backdrop-filter  backdrop-blur-xl bg-opacity-20">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-black">
            Contact Us
          </h2>
          <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-500 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form action="#" class="space-y-8">
            <div>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
              >
                Your Full Name
              </label>
              <input
                type="name"
                id="name"
                class="shadow-sm bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-primary-500 block w-full p-2.5 dark:bg-blue-50 dark:border-gray-600 dark:placeholder-blue-700 dark:text-black dark:focus:ring-primary-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Enter Your Name"
                required
              />
            </div>

            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-primary-500 block w-full p-2.5 dark:bg-blue-50 dark:border-gray-600 dark:placeholder-blue-700 dark:text-black dark:focus:ring-primary-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div>
              <label
                for="subject"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-700 focus:border-primary-500 dark:bg-blue-50 dark:border-gray-600 dark:placeholder-blue-700 dark:text-black dark:focus:ring-primary-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you ..."
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-700 focus:border-primary-500 dark:bg-blue-50 dark:border-gray-600 dark:placeholder-blue-700 dark:text-black dark:focus:ring-primary-500 dark:focus:border-blue-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              class="my-6 px-12 w-[100%] border-blue-400 border-2 bg-blue-300 hover:bg-white text-blue-600 p-4 rounded-md"
            >
              Contact Us
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contactform;
