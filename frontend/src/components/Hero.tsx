import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6"
    >
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Anzer Khan
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-6">
          <Typewriter
            words={[
              'Full-Stack Engineer',
              'AI & Accessibility Innovator',
              'Space Software Dev',
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>

        <p className="text-md md:text-lg text-gray-400 mb-8">
          I build accessible, performant systems — from AI-driven accessibility platforms
          to mission software for autonomous rovers.
        </p>

        {/* 👇 Contact Icons Bar */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://linkedin.com/in/anzer-khan-31a14a209"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <FaLinkedin className="text-xl" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href="https://github.com/Anzerkhan27"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-300 transition"
          >
            <FaGithub className="text-xl" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="mailto:anzerkhan27@gmail.com"
            className="flex items-center gap-2 hover:text-red-400 transition"
          >
            <FaEnvelope className="text-xl" />
            <span className="hidden sm:inline">Email</span>
          </a>
        </div>

        {/* 👇 Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition"
          >
            View My Work
          </a>
          <a
            href="/CV_Anzer.pdf" // Replace with actual path or drive link
            className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition"
          >
            Download CV
          </a>
        </div>

        {/* 👇 Achievement Stats */}
        <div className="flex justify-center gap-8 text-gray-400 text-sm sm:text-base">
          <div>
            <span className="block text-white text-xl font-bold">3+</span>
            Years Experience
          </div>
          <div>
            <span className="block text-white text-xl font-bold">8+</span>
            Projects
          </div>
          <div>
            <span className="block text-white text-xl font-bold">4</span>
            Published Tools
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
