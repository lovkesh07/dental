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
  const [Subject, setSubject] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    window.location.href =
      "mailto:lalitkumar7221@chauhandentallaboratory.com?subject=" +
      Query +
      "&body= \n Name:" +
      Name +
      " \n Email:" +
      Emails +
      " \n Phone No.:" +
      Subject +
      "\n Subject :" +
      Phoneno +
      " \n Query:" +
      Query;

    setName("");
    setPhoneno("");
    setSubject("");
    setQuery("");
    setEmails("");
  };
  return (
    <div>
      <section class=" p-4 backdrop-filter  backdrop-blur-xl bg-opacity-20">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-black">
            Contact Us
          </h2>
          <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-500 sm:text-xl">
            Got a issue? Want to send feedback?
            Need details about our Business plan? Let us know.
          </p>
          <form action="#" 
          onSubmit={sendEmail} 
          class="space-y-8">
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
                class="shadow-sm bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-primary-500 block w-full p-2.5 dark:bg-blue-50 dark:border-gray-600 dark:placeholder-blue-300 dark:text-black dark:focus:ring-primary-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Enter Your Name"
                onChange={(e) => {
                                setName(e.target.value);
                              }}
                required
              />
            </div>

            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
              >
                Your Phone No.
              </label>
              <input
                type="Phoneno"
                id="Phoneno"
                class="shadow-sm bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-primary-500 block w-full p-2.5 dark:bg-blue-50 dark:border-gray-600 dark:placeholder-blue-300 dark:text-black dark:focus:ring-primary-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Enter Your Phone No."
                onChange={(e) => {
                                  setPhoneno(e.target.value);
                                }}
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
                class="shadow-sm bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-primary-500 block w-full p-2.5 dark:bg-blue-50 dark:border-gray-600 dark:placeholder-blue-300 dark:text-black dark:focus:ring-primary-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Enter Your Email"
                onChange={(e) => {
                                setEmails(e.target.value);
                              }}
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
                class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-700 focus:border-primary-500 dark:bg-blue-50 dark:border-gray-600 dark:placeholder-blue-300 dark:text-black dark:focus:ring-primary-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you ..."
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
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
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-700 focus:border-primary-500 dark:bg-blue-50 dark:border-gray-600 dark:placeholder-blue-300 dark:text-black dark:focus:ring-primary-500 dark:focus:border-blue-500"
                placeholder="Leave a comment..."
                onChange={(e) => {
                                setQuery(e.target.value);
                              }}
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
