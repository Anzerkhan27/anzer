import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Project = {
  id: number;
  title: string;
  description: string;
  tech_stack: string;
  image?: string;
  github_link?: string;
  live_link?: string;
  techStack: string[];
};

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [query, setQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [allTags, setAllTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/projects.json')
      .then((res) => res.json())
      .then((data) => {
        const enriched: Project[] = data.map((project: any) => ({
          ...project,
          techStack: project.tech_stack
            ? project.tech_stack.split(',').map((s: string) => s.trim())
            : [],
        }));
        setProjects(enriched);
        setFilteredProjects(enriched);
        setLoading(false);

        const tags = new Set<string>();
        enriched.forEach((p: Project) =>
          p.techStack.forEach((t: string) => tags.add(t))
        );
        setAllTags(['All', ...Array.from(tags).sort()]);
      })
      .catch((err) => {
        console.error('Error loading static projects.json:', err);
        setLoading(false);
      });
  }, []);


  useEffect(() => {
    const q = query.toLowerCase();

    const filtered = projects.filter((project) => {
      const matchesQuery = [project.title, project.description, ...project.techStack].some((field) =>
        field.toLowerCase().includes(q)
      );

      const matchesTag =
        selectedTag === 'All' || project.techStack.includes(selectedTag);

      return matchesQuery && matchesTag;
    });

    setFilteredProjects(filtered);
  }, [query, selectedTag, projects]);

  return (
    <section
      id="projects"
      className="bg-gray-100 dark:bg-gray-800 py-20 px-4 sm:px-8 md:px-12 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Projects
        </motion.h2>

        {/* Search */}
        <div className="sticky top-4 z-10 bg-gray-100 dark:bg-gray-800 mb-6 py-2">
          <input
            type="text"
            placeholder="🔍 Search by title, description, or tech..."
            className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-1 text-sm rounded-full border ${
                selectedTag === tag
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600'
              } transition`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects */}
        {loading ? (
          <div className="text-center text-gray-500 dark:text-gray-400">
            Loading projects...
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center text-gray-500 dark:text-gray-400">
            No projects found.
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md p-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true, amount: 0.2 }}
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

                {project.techStack.length > 0 && (
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
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
