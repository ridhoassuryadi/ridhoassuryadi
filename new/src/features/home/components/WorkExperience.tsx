"use client";
import React from "react";
import { Timeline } from "@/shared/ui/base/timeline";

const workExperienceData = [
  {
    title: "2025 - Today",
    icon: <img src="/shared/images/assets/red-ant-colony-logo.png" alt="Red Ant Colony Logo" className="w-5 h-5 object-contain" />,
    content: (
      <div>
        <h4 className="text-base-900 text-2xl font-bold mb-2">
          Engineering Manager at Red Ant Colony
        </h4>
        <h5 className="text-base-700 text-sm font-medium mb-3">
          Yogyakarta, Indonesia
        </h5>
        <p className="text-base-600 text-sm mb-4">
          Led cross-functional engineering team delivering web and mobile solutions for diverse project portfolio. Managed full project lifecycle from technical scoping and architecture design to deployment and maintenance. Collaborated directly with stakeholders to translate business requirements into technical specifications, while mentoring junior developers and establishing code standards.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Team Leadership</span>
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Architecture Design</span>
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Mentoring</span>
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Quality Assurance</span>
        </div>
      </div>
    ),
  },
  {
    title: "2024 - Today",
    icon: <img src="/shared/images/assets/raizora-logo.svg" alt="Raizora Logo" className="w-5 h-5 object-contain" />,
    content: (
      <div>
        <h4 className="text-base-900 text-2xl font-bold mb-2">
          Co-Founder at Raizora
        </h4>
        <h5 className="text-base-700 text-sm font-medium mb-3">
          Banjarbaru, Indonesia
        </h5>
        <p className="text-base-600 text-sm mb-4">
          Founded and led multi-business portfolio across digital services, retail, property, and automotive sectors. Currently operating four business lines: Himajin (hobby products/services), Ketuju Creative (full-service digital agency), Gea Tourism (car rental and travel services), and Tempat Teduh (quality housing solutions). Drove business development from ideation to execution.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Business Strategy</span>
          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Operations Management</span>
          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Multi-sector Leadership</span>
        </div>
      </div>
    ),
  },
  {
    title: "2019 - 2024",
    icon: <img src="/shared/images/assets/ruangguru-logo.png" alt="Ruangguru Logo" className="w-6 h-6 object-contain" />,
    content: (
      <div>
        <h4 className="text-base-900 text-2xl font-bold mb-2">
          Senior Frontend Engineer at Ruangguru
        </h4>
        <h5 className="text-base-700 text-sm font-medium mb-3">
          Jakarta, Indonesia
        </h5>
        <p className="text-base-600 text-sm mb-4">
          Led 6-engineer frontend team managing web, mobile, and CMS platforms using React, React Native, Next.js, and TypeScript. Drove major technical initiatives including mobile app architecture migration and cross-platform design system development. Streamlined frontend hiring processes, mentored team members through 1:1s, and collaborated cross-functionally with stakeholders.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">React</span>
          <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">React Native</span>
          <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">Next.js</span>
          <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">TypeScript</span>
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    icon: <img src="/shared/images/assets/neumedira-logo.png" alt="Neumedira Logo" className="w-3.5 h-3.5 object-contain" />,
    content: (
      <div>
        <h4 className="text-base-900 text-2xl font-bold mb-2">
          Associate Project Manager at Neumedira
        </h4>
        <h5 className="text-base-700 text-sm font-medium mb-3">
          Banjarbaru, Indonesia
        </h5>
        <p className="text-base-600 text-sm mb-4">
          Managed end-to-end development and delivery of two client projects: mini e-commerce platform and cooperative management system. Coordinated development teams while serving as primary liaison between clients and internal stakeholders to define requirements and project scope. Oversaw project timelines, resource allocation, and risk management.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Project Management</span>
          <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Client Relations</span>
          <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Team Coordination</span>
        </div>
      </div>
    ),
  },
  {
    title: "2017 - 2019",
    icon: <img src="/shared/images/assets/kitabisa-logo.svg" alt="Kitabisa Logo" className="w-3 h-3 object-contain" />,
    content: (
      <div>
        <h4 className="text-base-900 text-2xl font-bold mb-2">
          Frontend Engineer at Kitabisa
        </h4>
        <h5 className="text-base-700 text-sm font-medium mb-3">
          Jakarta, Indonesia
        </h5>
        <p className="text-base-600 text-sm mb-4">
          Developed frontend solutions for Indonesia's leading fundraising platform, translating UI designs into responsive web applications using JavaScript, CSS, Sass, and API integration. Led technical modernization initiatives including introducing ReactJS architecture to replace legacy jQuery systems and creating B2B landing page templates that optimized engineering resources by 40%.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded">JavaScript</span>
          <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded">ReactJS</span>
          <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded">CSS/Sass</span>
          <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded">API Integration</span>
        </div>
      </div>
    ),
  },
  {
    title: "2016 - 2017",
    icon: <img src="/shared/images/assets/stikes-husada-logo.png" alt="STIKES Husada Borneo Logo" className="w-5 h-5 object-contain" />,
    content: (
      <div>
        <h4 className="text-base-900 text-2xl font-bold mb-2">
          IT Support at STIKES Husada Borneo
        </h4>
        <h5 className="text-base-700 text-sm font-medium mb-3">
          Banjarbaru, Indonesia
        </h5>
        <p className="text-base-600 text-sm mb-4">
          Managed complete IT infrastructure including wired/wireless network installation and maintenance (LAN, WAN, TCP/IP, routing, subnetting). Provided technical support for software/hardware issues, troubleshot networking equipment and devices. Handled procurement of company assets and created graphic design content for monthly events.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">Network Administration</span>
          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">IT Support</span>
          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">Graphic Design</span>
        </div>
      </div>
    ),
  },
  {
    title: "2016",
    icon: <img src="/shared/images/assets/kaos-bagoes-logo.png" alt="Kaos Bagoes Logo" className="w-7 h-7 object-contain" />,
    content: (
      <div>
        <h4 className="text-base-900 text-2xl font-bold mb-2">
          Graphic Designer at Kaos Bagoes
        </h4>
        <h5 className="text-base-700 text-sm font-medium mb-3">
          Banjarbaru, Indonesia
        </h5>
        <p className="text-base-600 text-sm mb-4">
          Assigned to help design posters, design clothes to assist in screen printing clothes in the field.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded">Graphic Design</span>
          <span className="text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded">Print Design</span>
          <span className="text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded">Apparel Design</span>
        </div>
      </div>
    ),
  },
];

export const WorkExperience = () => {
  return <Timeline data={workExperienceData} />;
};