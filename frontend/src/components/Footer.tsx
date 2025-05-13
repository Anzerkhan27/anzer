const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-2 md:mb-0 text-center md:text-left">
          © {new Date().getFullYear()} Anzer Khan. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://linkedin.com/in/anzer-khan-31a14a209"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="/CV_Anzer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Download CV
          </a>
          <a
            href="mailto:anzerkhan27@gmail.com"
            className="hover:text-white transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
