import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 sm:px-12 md:px-24 lg:px-32 py-28"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* 👤 LEFT: TEXT STORY */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>

          <p className="text-lg leading-8 text-gray-700 dark:text-gray-300 mb-5">
            I'm <span className="font-semibold text-black dark:text-white">Anzer Khan</span>, a Python developer specializing in backend web systems and machine learning solutions.
          </p>

          <p className="text-lg leading-8 text-gray-700 dark:text-gray-300 mb-5">
            I graduated with a <strong>Distinction in MSc Artificial Intelligence</strong> and previously earned a <strong>First-Class BSc in Software Engineering</strong> with a placement year at the University of Huddersfield.
          </p>

          <p className="text-lg leading-8 text-gray-700 dark:text-gray-300 mb-5">
            Over the last year, I’ve led products that ship real-world impact — from a startup-funded accessibility audit platform to mission-critical rover software.
          </p>

          <div className="text-lg leading-8 text-gray-700 dark:text-gray-300 space-y-6 mb-6">
            <p>
              <strong>Auditsu</strong> is an AI-powered mobile accessibility auditing startup for which I developed the initial MVP as part of my MSc project. The MVP secured early-stage funding from the <strong>Huddersfield Health Innovation Partnership</strong>, followed by backing from the <strong>Royal Academy of Engineering</strong>. I then led the end-to-end development of the actual platform, driving its transition from prototype to production. Auditsu was recently nominated as an <strong>AI Startup of the Year</strong> finalist.
            </p>

            <p>
              As a founding committee member of <strong>Team Ray</strong>, the University of Huddersfield’s first aerospace society, I currently lead the software development for our Mars rover prototype, selected for the <strong>Olympus Rover Trials 2025</strong>. My focus spans rover navigation, wireless communication, and onboard image processing systems.
            </p>
          </div>

          <p className="text-lg leading-8 text-gray-700 dark:text-gray-300">
            I specialize in building robust backend systems and machine learning pipelines using <strong>Python</strong>, with frameworks like <strong>Django</strong> and <strong>FastAPI</strong>. On the frontend, I work with <strong>React</strong> to develop responsive interfaces. I also apply skills in <strong>cloud deployment, containerization, and CI/CD pipelines</strong> to deliver scalable, production-ready solutions.
          </p>
        </motion.div>

        {/* 🧠 RIGHT: VISUAL STATS / HIGHLIGHTS */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-12"
        >
          {/* 🏆 Achievements */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Achievements
            </h3>
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow">
                <p className="text-lg font-semibold text-green-600 dark:text-green-400">Startup MVP → Funded</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Built Auditsu MVP that secured grants from two UK institutions.
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow">
                <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">AI Startup Finalist</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Auditsu nominated as an <strong>AI Startup of the Year</strong>.
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow">
                <p className="text-lg font-semibold text-purple-600 dark:text-purple-400">Olympus Trials 2025</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Team Ray selected to compete in UKSEDS Mars rover challenge.
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow">
                <p className="text-lg font-semibold text-yellow-600 dark:text-yellow-400">Academic Excellence</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  MSc AI (Distinction) & BSc Software Eng (First Class).
                </p>
              </div>
            </div>
          </div>

          {/* 🧩 Skills */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                'Web Development',
                'Machine Learning',
                'Computer Vision',
                'Cloud Infrastructure',
                'Linux Environments',
                'CI/CD & DevOps',
                'Backend APIs',
                'App Automation',
                'UI Engineering',
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-3 py-1 text-sm rounded-full shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
