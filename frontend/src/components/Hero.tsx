
const Hero = () => {
  return (
    <section  id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Anzer Khan
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-6">
          Full-Stack Engineer | AI & Accessibility Innovator
        </p>
        <p className="text-md md:text-lg text-gray-400 mb-10">
          I build accessible, performant systems — from AI-driven accessibility platforms to mission software for autonomous rovers.
        </p>
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
