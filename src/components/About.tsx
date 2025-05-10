import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="bg-white dark:bg-gray-900 py-20 px-6 sm:px-12 md:px-24 lg:px-32"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          About Me
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-8">
          I’m <strong>Anzer Khan</strong>, a Software Engineer with a passion for building AI-powered systems that solve real-world problems. 
          I hold an MSc in Artificial Intelligence (Distinction) and have led end-to-end development of <strong>AUDITSU</strong>, an automated 
          accessibility auditing platform that earned industry funding and a nomination for <em>AI Startup of the Year</em>.
        </p>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-8">
          I also serve as the Software Lead for <strong>Team Ray</strong>, the University of Huddersfield’s first aerospace society, 
          where I develop autonomous navigation systems and real-time telemetry for our Mars rover competing at UKSEDS Olympus Rover Trials 2025.
        </p>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-8">
          My work spans backend APIs, machine learning pipelines, and full-stack systems — with a strong emphasis on performance, clarity, and impact. 
          I’m currently seeking opportunities to build robust, scalable software with teams that care about quality and purpose.
        </p>
      </div>
    </section>
  );
};

export default About;
