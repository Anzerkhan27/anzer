import { useEffect, useState } from 'react';

type Project = {
  id: number;
  title: string;
  description: string;
  tech_stack: string;
  image?: string;
  github_link?: string;
  live_link?: string;
  techStack?: string[];
};

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/projects/')
      .then((res) => res.json())
      .then((data) => {
        const enriched = data.map((project: Project) => ({
          ...project,
          techStack: project.tech_stack
            ? project.tech_stack.split(',').map((s) => s.trim())
            : [],
        }));
        setProjects(enriched);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching projects:', err);
        setLoading(false);
      });
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

        {loading ? (
          <div className="text-center text-gray-500 dark:text-gray-400">
            Loading projects...
          </div>
        ) : (
          <div className="grid gap-10 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-2xl hover:-translate-y-1 transform transition duration-300 p-6"
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg border border-gray-300 dark:border-gray-700 mb-4"
                  />
                )}

                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {project.techStack && project.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-2 py-1 rounded shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-4 space-x-4">
                  {project.github_link && (
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline"
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
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
