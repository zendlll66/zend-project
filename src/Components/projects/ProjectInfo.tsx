'use client';  // ทำให้เป็น Client Component

import React, { useState } from 'react';  // นำเข้า useState จาก React
import Link from 'next/link';
import CardPro from './CardPro';
import Image from 'next/image';

interface Project {
  id: number;
  image: string;
  title: string;
  links: {
    demo: string;
    github: string;
  };
  description: string;
  techStack: string[];
  role: string;
}

const ProjectInfo = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);  // ใช้ type สำหรับ selectedProject
  const [showAll, setShowAll] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      image: '/Assets/Images/research_nu.png',
      title: 'Researcher hub',
      links: {
        demo: 'https://research-nu-nine.vercel.app/',
        github: 'https://github.com/zendlll66/research-nu'
      },
      description: 'A platform for researchers to share their work and collaborate with others.',
      techStack: ['React', 'Tailwind CSS', 'MySQL', 'Node.js', 'Vercel'],
      role: 'Front-end Developer - UX/UI Design',
    },
    {
      id: 2,
      image: '/Assets/Images/AgeCal.png',
      title: 'Age Calculator',
      links: {
        demo: 'https://age-calculator-kappa-opal.vercel.app/',
        github: 'https://github.com/zendlll66/age-calculator'
      },
      description: 'A simple age calculator that helps you calculate your age in years, months, and days.',
      techStack: ['Next.js', 'Tailwind CSS', 'Vercel'],
      role: 'Front-end Developer - UX/UI Design',
    },
    {
      id: 3,
      image: '/Assets/Images/ExtensionManage.png',
      title: 'Extension Manager',
      links: {
        demo: 'https://extensions-manager-sigma.vercel.app/',
        github: 'https://github.com/zendlll66/extensions-manager'
      },
      description: 'A Chrome extension that helps you manage your extensions and keep them updated.',
      techStack: ['Next.js', 'Tailwind CSS', 'Vercel'],
      role: 'Front-end Developer - UX/UI Design',
    },
    {
      id: 4,
      image: '/Assets/Images/BentoGrid.png',
      title: 'Bento Grid',
      links: {
        demo: 'https://bento-grid-kappa-seven.vercel.app/',
        github: 'https://github.com/zendlll66/bento-grid'
      },
      description: 'A grid system that helps you create responsive layouts easily.',
      techStack: ['Next.js', 'Tailwind CSS', 'Vercel'],
      role: 'Front-end Developer - UX/UI Design',
    },
    {
      id: 5,
      image: '/Assets/Images/ecommerce.png',
      title: 'ecommerce simple page',
      links: {
        demo: 'https://ecommerce-product-zeta.vercel.app/',
        github: 'https://github.com/zendlll66/ecommerce-product'
      },
      description: 'A fully responsive e-commerce product detail page inspired by product-focused landing pages.',
      techStack: ['Next.js', 'Tailwind CSS', 'Vercel'],
      role: 'Front-end Developer - UX/UI Design',
    },
    {
      id: 6,
      image: '/Assets/Images/SaaS-landing-page.png',
      title: 'landing-page',
      links: {
        demo: 'https://zend-saas-landing-page.vercel.app/',
        github: 'https://github.com/zendlll66/saas-landing-page'
      },
      description: 'A sleek, responsive landing page for a fictional productivity SaaS product. Built with modern design practices and polished UI animations to showcase product features, pricing, and testimonials.',
      techStack: ['Next.js', 'Tailwind CSS', 'Vercel'],
      role: 'Front-end Developer',
    },
    {
      id: 7,
      image: '/Assets/Images/bus-tracking.png',
      title: 'Bus Tracking NU-Rework',
      links: {
        demo: 'https://nu-bus-tracking.vercel.app/',
        github: 'https://github.com/zendlll66/bus-tracking'
      },
      description: 'A live tracking system for the buses at Naresuan University, designed to improve real-time vehicle tracking and user accessibility.',
      techStack: ['Next.js', 'Tailwind CSS', 'Vercel', 'leaflet.js'],
      role: 'Front-end Developer',
    },
    {
      id: 8,
      image: '/Assets/Images/landing-page-clone0.png',
      title: 'Landing Page Clone ',
      links: {
        demo: 'https://zend-clone-page.vercel.app/',
        github: 'https://github.com/zendlll66/simple-portfolio'
      },
      description: 'A pixel-perfect landing page cloned from a Figma Community design, focusing on clean UI layout, responsive design, and smooth transitions.',
      techStack: ['React', 'Tailwind CSS', 'Vercel',],
      role: 'Front-end Developer',
    },
    {
      id: 9,
      image: '/Assets/Images/Food-slider.png',
      title: 'Food Slider',
      links: {
        demo: 'https://zend-food-slider.vercel.app/',
        github: 'https://github.com/zendlll66/food-slider'
      },
      description: 'A sleek, interactive food slider that showcases various food items in a stylish layout, perfect for restaurant menus or food-related projects.',
      techStack: ['React', 'Tailwind CSS', 'Vercel',],
      role: 'Front-end Developer',
    },
    {
      id: 10,
      image: '/Assets/Images/3D-site.png',
      title: '3D-site Present Page',
      links: {
        demo: 'https://zend-sim-3d.vercel.app/',
        github: 'https://github.com/zendlll66/sim-3d'
      },
      description: 'A creative product showcase simulating 3D movement using Tailwind CSS and custom animations. The interactive layout lets users navigate through different product variants with smooth transitions, all built without using WebGL or external 3D tools.',
      techStack: ['React', 'Tailwind CSS', 'Vercel',],
      role: 'Front-end Developer',
    },
  ];

  function closeModal(): void {
    setSelectedProject(null);
  }

  function openModal(project: Project): void {
    setSelectedProject(project);
  }

  return (
    <div className=" rounded-[20px] flex justify-center items-center flex-col mb-[100px] px-4 sm:px-8 md:px-16  text-[#D9D9D9] font-mono ">
      <h1 data-aos="fade-up" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center  mb-5">
        My Project and Experience.
      </h1>

      <div data-aos="fade-up" className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center mt-8">
        {(showAll ? projects : projects.slice(0, 6)).map((project) => (
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
      <button
        onClick={() => setShowAll(!showAll)}
        className="text-white mt-20 bg-gray-800 px-6 py-2 rounded-full w-fit hover:bg-gray-700 transition-all"
      >
        {showAll ? 'See Less' : 'See More'}
      </button>
      {/* Modal */}
      {selectedProject && (
        <div className="absolute inset-0 z-30 bg-black/80 backdrop-blur-sm flex justify-center items-center p-4 animate-fadeIn">
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
              <div className="relative overflow-hidden rounded-lg mb-5  border border-gray-700/50">

                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={500}
                  height={500}
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
