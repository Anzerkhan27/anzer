import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

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
          Full-Stack Engineer | AI & Accessibility Innovator
        </p>
        <p className="text-md md:text-lg text-gray-400 mb-8">
          I build accessible, performant systems — from AI-driven accessibility platforms to mission software for autonomous rovers.
        </p>

        {/* 👇 Contact Icons Bar */}
        <div className="flex justify-center gap-6 mb-10">
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
            href="https://github.com/anzerkhan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-300 transition"
          >
            <FaGithub className="text-xl" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="mailto:anzer@example.com"
            className="flex items-center gap-2 hover:text-red-400 transition"
          >
            <FaEnvelope className="text-xl" />
            <span className="hidden sm:inline">Email</span>
          </a>
        </div>

        <a
          href="#projects"
          className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
