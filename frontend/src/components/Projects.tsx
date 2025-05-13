import { useEffect, useState } from 'react';

type Project = {
  id: number;
  title: string;
  description: string;
  github_link?: string;
  live_link?: string;
  techStack?: string[]; // Optional for future backend inclusion
};

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/projects/')
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error('Error fetching projects:', err));
  }, []);

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
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                {project.description}
              </p>

              {/* Tech stack can be added when backend supports it */}
              {project.techStack && (
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
              )}

              {project.github_link && (
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline mr-4"
                >
                  View Code →
                </a>
              )}

              {project.live_link && (
                <a
                  href={project.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-green-600 dark:text-green-400 font-medium hover:underline"
                >
                  Live Demo →
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
