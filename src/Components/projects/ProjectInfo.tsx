'use client';  // เพื่อให้เป็น Client Component

import React, { useState } from 'react';  // นำเข้า useState จาก React
import Link from 'next/link';
import CardPro from './CardPro';

const ProjectInfo = () => {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);  // ใช้ useState จาก React
  const projects = [
    {
      id: 1,
      image: 'Assets/Images/research_nu.png',
      title: 'Researcher hub',
      links: {
        demo: 'https://researcher-hub.vercel.app',
        github: 'https://github.com/yourusername/researcher-hub'
      },
      description: 'A platform for researchers to share their work and collaborate with others.',
      techStack: ['Next.js', 'Tailwind CSS', 'MySQL', 'Node.js', 'Vercel'],
      role: 'Front-end Developer - UX/UI Design',
    },
    {
      id: 2,
      image: 'Assets/Images/AgeCal.png',
      title: 'Age Calculator',
      links: {
        demo: 'https://researcher-hub.vercel.app',
        github: 'https://github.com/yourusername/researcher-hub'
      },
      description: 'A simple age calculator that helps you calculate your age in years, months, and days.',
      techStack: ['Next.js', 'Tailwind CSS', 'Vercel'],
      role: 'Front-end Developer - UX/UI Design,'
    },
    {
      id: 3,
      image: 'Assets/Images/ExtensionManage.png',
      title: 'Extension Manager',
      links: {
        demo: 'https://researcher-hub.vercel.app',
        github: 'https://github.com/yourusername/researcher-hub'
      },
      description: 'A Chrome extension that helps you manage your extensions and keep them updated.',
      techStack: ['Next.js', 'Tailwind CSS', 'Vercel'],
      role: 'Front-end Developer - UX/UI Design,'
    },
    {
      id: 4,
      image: 'Assets/Images/BentoGrid.png',
      title: 'Bento Grid',
      links: {
        demo: 'https://researcher-hub.vercel.app',
        github: 'https://github.com/yourusername/researcher-hub'
      },
      description: 'A grid system that helps you create responsive layouts easily.',
      techStack: ['Next.js', 'Tailwind CSS', 'Vercel'],
      role: 'Front-end Developer - UX/UI Design,'
    },
  ];

  function closeModal(): void {
    setSelectedProject(null);
  }

  function openModal(project: { id: number; image: string; title: string; links: { demo: string; github: string; }; description: string; techStack: string[]; role: string; }): void {
    setSelectedProject(project);
  }

  return (
    <div className="w-full max-w-[1260px] bg-[#090b0f]/40 backdrop-blur-xl border border-[#221B20] rounded-[20px] flex flex-col mb-[100px] px-4 sm:px-8 md:px-16 py-12 text-[#D9D9D9] font-mono">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mt-5 mb-5">
        My Project and Experience.
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center mt-8">
        {projects.map((project) => (
          <CardPro
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            role={project.role}
            links={project.links}
            onClick={() => openModal(project)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4 animate-fadeIn">
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] text-white p-6 rounded-xl max-w-2xl w-full border border-gray-700/50 shadow-2xl relative overflow-hidden group">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-300 hover:text-white text-xl font-bold z-10 transition-all duration-200 hover:scale-110"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Content */}
            <div className="relative z-0">
              {/* Project Title */}
              <h2 className="text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#FF3035] to-[#FF8A8A]">
                {selectedProject.title}
              </h2>

              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-5 h-64 border border-gray-700/50">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
              </div>

              {/* Project Description */}
              <p className="text-gray-300 mb-5 leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Project Role */}
              <div className="mb-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">My Role</span>
                <p className="text-gray-300 mt-1">{selectedProject.role}</p>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-2">Tech Stack</span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="bg-gray-800/80 text-white text-xs py-1.5 px-3 rounded-full border border-gray-700 hover:bg-gray-700 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Link
                  href={selectedProject.links.demo}
                  className="flex-1 text-center bg-gradient-to-r from-[#FF3035] to-[#FF6060] text-white py-2.5 px-6 rounded-lg hover:from-[#FF4045] hover:to-[#FF7070] transition-all duration-300 shadow-lg hover:shadow-red-500/20 flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="10 8 16 12 10 16 10 8"></polygon>
                  </svg>
                  Live Demo
                </Link>
                <Link
                  href={selectedProject.links.github}
                  className="flex-1 text-center bg-gray-800/80 text-white py-2.5 px-6 rounded-lg hover:bg-gray-700/80 transition-all duration-300 border border-gray-700 hover:border-gray-600 flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectInfo;
