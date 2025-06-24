import React from 'react';
import { Code, Database, Gamepad2, Palette, User, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      category: "Développement Web",
      icon: <Code className="w-6 h-6" />,
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "Node.js", "Express.js", "Laravel", "Bootstrap", "jQuery"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Développement Desktop",
      icon: <Database className="w-6 h-6" />,
      technologies: ["Java", "VB.NET"],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Développement de Jeux",
      icon: <Gamepad2 className="w-6 h-6" />,
      technologies: ["Unreal Engine 5", "Unity", "C#", "C++", "BluePrint"],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Modélisation & Design",
      icon: <Palette className="w-6 h-6" />,
      technologies: ["Blender", "MERISE", "UML"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            À propos de moi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Personal Info */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Profil</h3>
                  <p className="text-gray-600 dark:text-gray-300">Développeur Junior passionné, 20 ans</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Formation</h3>
                  <p className="text-gray-600 dark:text-gray-300">Étudiant en Génie Logiciel à l'IUC</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Ma passion</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Passionné par l'univers du développement depuis mon plus jeune âge, je me spécialise dans la création 
                d'applications web modernes, de logiciels desktop et de jeux vidéo. Mon objectif est de créer des 
                expériences numériques innovantes qui allient performance, esthétique et fonctionnalité.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${skill.color} mb-4`}>
                  <div className="text-white">
                    {skill.icon}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold mb-3 text-gray-800 dark:text-white">
                  {skill.category}
                </h3>
                
                <div className="space-y-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm mr-2 mb-2 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;