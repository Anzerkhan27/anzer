import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 sm:px-12 md:px-24 lg:px-32 py-24"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* 👤 LEFT: TEXT STORY */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
            Hey, I’m <span className="font-semibold text-black dark:text-white">Anzer Khan</span> — a full-stack engineer and machine learning specialist passionate about building inclusive, scalable, and AI-powered systems.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
            I hold an <strong>MSc in Artificial Intelligence</strong> (Distinction) and a <strong>BSc in Software Engineering</strong> (First Class Honours with Placement Year) from the University of Huddersfield.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
            Over the last year, I’ve led products that ship real-world impact — from a startup-funded accessibility audit platform to mission-critical rover software.
          </p>

          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
            <li>
              <strong>Auditsu</strong> — AI-based mobile accessibility testing tool with dynamic Appium flows and computer vision models.
            </li>
            <li>
              <strong>Team Ray</strong> — Led software development for our Mars rover prototype (QR vision module + full-stack site).
            </li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I build with <strong>React, Django, Laravel</strong> on the backend and deploy using <strong>Cloudflare, Railway, Docker</strong>. Right now, I’m looking to join teams focused on AI, accessibility, or space-tech — anything that needs bold engineering.
          </p>
        </motion.div>

        {/* 🧠 RIGHT: VISUAL STATS / HIGHLIGHTS */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8"
        >
          {/* 🏆 Achievements */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Achievements
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow">
                <p className="text-xl font-semibold text-blue-600 dark:text-blue-400">AI + Accessibility</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Building ML tools that improve usability.</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow">
                <p className="text-xl font-semibold text-green-600 dark:text-green-400">Startup Grant</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">£3,000 awarded for Auditsu MVP at MSc level.</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow">
                <p className="text-xl font-semibold text-purple-600 dark:text-purple-400">Team Lead</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Software lead for Team Ray | Olympus Trials.</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow">
                <p className="text-xl font-semibold text-yellow-600 dark:text-yellow-400">MSc (Distinction)</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Artificial Intelligence, 2025</p>
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
