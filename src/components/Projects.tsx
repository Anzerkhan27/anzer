import React from 'react';

type Project = {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: 'AUDITSU – Automated Accessibility Auditing',
    description:
      'AI-powered platform that dynamically audits Android apps for accessibility compliance using Appium, machine learning, and cloud infrastructure. Secured industry funding and AI Startup of the Year nomination.',
    techStack: ['Python', 'FastAPI', 'Appium', 'OCR', 'LLM', 'DigitalOcean'],
    link: 'https://github.com/Anzerkhan27/auditsu',
  },
  {
    title: 'MedSeg – MRI Tumour Detection Pipeline',
    description:
      'Production-style ML pipeline to classify and segment brain tumours from MRI scans using CNN and ResUNet. Designed for reproducibility and orchestration using Prefect.',
    techStack: ['TensorFlow', 'Prefect', 'CNN', 'ResUNet', 'Python'],
    link: 'https://github.com/Anzerkhan27/medseg-ml-pipeline',
  },
  {
    title: 'Team Ray Rover Systems',
    description:
      'Built real-time telemetry systems and computer vision pipelines for QR code detection and rover navigation in the UKSEDS Olympus Rover Trials 2025.',
    techStack: ['Python', 'OpenCV', 'Streamlit', 'Docker'],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gray-100 dark:bg-gray-800 py-20 px-6 sm:px-12 md:px-24 lg:px-32"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10">
          Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  View Code →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
