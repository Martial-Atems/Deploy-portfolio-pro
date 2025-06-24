import React from 'react';
import { ExternalLink, Github, Code, Gamepad2, Globe } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Application Web E-commerce",
      description: "Plateforme e-commerce complète avec panier, paiement et gestion des commandes",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "JavaScript"],
      demoLink: "#",
      githubLink: "#",
      category: "web",
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: "Jeu 3D Adventure",
      description: "Jeu d'aventure 3D développé avec Unreal Engine 5, incluant des mécaniques de combat et d'exploration",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Unreal Engine 5", "C++", "BluePrint", "Blender"],
      demoLink: "#",
      githubLink: "#",
      category: "game",
      icon: <Gamepad2 className="w-5 h-5" />
    },
    {
      title: "Gestionnaire de Tâches",
      description: "Application desktop pour la gestion de projets et tâches avec interface intuitive",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Java", "JavaFX", "SQLite"],
      demoLink: "#",
      githubLink: "#",
      category: "desktop",
      icon: <Code className="w-5 h-5" />
    },
    {
      title: "Portfolio Interactif",
      description: "Site portfolio responsive avec animations et design moderne",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      demoLink: "#",
      githubLink: "#",
      category: "web",
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: "Jeu Mobile Puzzle",
      description: "Jeu de puzzle mobile avec plus de 100 niveaux et système de progression",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Unity", "C#", "Android SDK"],
      demoLink: "#",
      githubLink: "#",
      category: "game",
      icon: <Gamepad2 className="w-5 h-5" />
    },
    {
      title: "API REST Node.js",
      description: "API robuste pour application mobile avec authentification JWT et base de données MongoDB",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT"],
      demoLink: "#",
      githubLink: "#",
      category: "web",
      icon: <Code className="w-5 h-5" />
    }
  ];

  const [filter, setFilter] = React.useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const filterButtons = [
    { key: 'all', label: 'Tous', count: projects.length },
    { key: 'web', label: 'Web', count: projects.filter(p => p.category === 'web').length },
    { key: 'game', label: 'Jeux', count: projects.filter(p => p.category === 'game').length },
    { key: 'desktop', label: 'Desktop', count: projects.filter(p => p.category === 'desktop').length }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Mes Projets
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez une sélection de mes réalisations dans le développement web, logiciel et de jeux vidéo
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterButtons.map((button) => (
            <button
              key={button.key}
              onClick={() => setFilter(button.key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                filter === button.key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {button.label} ({button.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full">
                  {project.icon}
                  <span className="text-sm font-medium capitalize">{project.category}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-blue-500 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    <ExternalLink size={16} />
                    Démo
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center gap-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-500 px-4 py-2 rounded-lg font-medium transition-all duration-200"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;