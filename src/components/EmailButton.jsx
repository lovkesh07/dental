import React from 'react';

const EmailButton = () => {
  const email = 'example@example.com'; // Replace with your email address
  const subject = 'Inquiry from the Website'; // Customize your subject
  const body = 'Hello, I have a question regarding...'; // Customize your email body

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <a
      href={mailtoLink}
      className="fixed bottom-4 right-20 flex items-center justify-center bg-blue-500 text-white  w-16 h-16 rounded-2xl shadow-lg hover:bg-blue-600 transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-8 h-8"
      >
        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-1.4 2L12 10.6 5.4 6h13.2zM4 18V8l8 5 8-5v10H4z" />
      </svg>
    </a>
  );
};

export default EmailButton;
