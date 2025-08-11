import RaizoraLogo from "@/shared/assets/raizora-logo.svg";
import KaosBagoesLogo from "@/shared/assets/kaos-bagoes-logo.png";
import KitabisaLogo from "@/shared/assets/kitabisa-logo.svg";
import RuangguruLogo from "@/shared/assets/ruangguru-logo.png";
import RedAntColonyLogo from "@/shared/assets/red-ant-colony-logo.png";
import NeumediraLogo from "@/shared/assets/neumedira-logo.png";
import StikesHusadaBorneoLogo from "@/shared/assets/stikes-husada-logo.png";

import Image from "next/image";

const Svg1 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
    <path
      fill="#9C76EC"
      d="M7.567 7.6c-1.814-.137-3.56-.885-4.874-2.204A7.662 7.662 0 0 1 .5.5c1.868.136 3.56.884 4.874 2.203A7.662 7.662 0 0 1 7.567 7.6Zm.865 0c1.814-.137 3.56-.885 4.873-2.204C14.62 4.076 15.364 2.322 15.5.5c-1.869.136-3.629.884-4.874 2.203A7.662 7.662 0 0 0 8.432 7.6Zm4.873 3.005c-1.313-1.32-3.06-2.068-4.873-2.204a7.662 7.662 0 0 0 2.193 4.896c1.313 1.32 3.06 2.067 4.874 2.204-.136-1.877-.88-3.645-2.194-4.896ZM7.636 8.4c-1.882.136-3.629.884-4.942 2.204C1.38 11.854.622 13.623.5 15.5c1.868-.123 3.56-.884 4.942-2.204a7.662 7.662 0 0 0 2.193-4.896Z"
    />
  </svg>
);

const Svg2 = () => (
  <svg
    className="fill-gray-700"
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="11"
  >
    <path d="M5.077 0c2.803 0 5.076 2.418 5.076 5.4s-2.273 5.4-5.076 5.4C2.273 10.8 0 8.382 0 5.4S2.273 0 5.077 0Zm8.106.316c1.402 0 2.538 2.276 2.538 5.084 0 2.807-1.136 5.084-2.538 5.084S10.645 8.207 10.645 5.4c0-2.807 1.136-5.084 2.538-5.084ZM18 5.4c0-2.515-.4-4.554-.893-4.554-.492 0-.892 2.04-.892 4.554 0 2.515.4 4.555.892 4.555.494 0 .893-2.04.893-4.555Z" />
  </svg>
);

const Svg3 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="2" height="24">
    <path
      fill="#00ADEF"
      d="M17.995 3.602c-.075 1.725-1.274 4.124-3.674 7.198-2.474 3.15-4.499 4.799-6.223 4.799-1.05 0-1.95-.975-2.7-2.924-.45-1.8-.974-3.524-1.424-5.324-.525-1.95-1.125-2.924-1.725-2.924-.15 0-.6.3-1.424.825L0 4.202c.9-.75 1.8-1.575 2.624-2.325 1.2-1.05 2.1-1.574 2.7-1.65 1.424-.15 2.249.826 2.549 2.85.375 2.175.6 3.6.75 4.124.375 1.8.825 2.774 1.35 2.774.374 0 .974-.6 1.724-1.8.75-1.199 1.125-2.099 1.2-2.698.075-1.05-.3-1.575-1.2-1.575-.45 0-.9.075-1.35.3.9-2.924 2.55-4.274 5.099-4.199 1.8.075 2.624 1.275 2.55 3.599Z"
    />
  </svg>
);

export default function Experience() {
  const items = [
    {
      title: "Engineering Manager at Red Ant Colony",
      link: "https://redantcolony.com",
      icon: <Image src={RedAntColonyLogo.src} alt="Raizora Logo" width={20} height={20} />,
      date: "2025 - Today",
      location: "Yogyakarta, Indonesia",
      description:
        "Led cross-functional engineering team delivering web and mobile solutions for diverse project portfolio. Managed full project lifecycle from technical scoping and architecture design to deployment and maintenance. Collaborated directly with stakeholders to translate business requirements into technical specifications, while mentoring junior developers and establishing code standards. Oversaw resource allocation, sprint planning, and quality assurance processes to ensure on-time delivery of scalable solutions using modern frameworks and technologies.",
    },
    {
      title: "Co-Founder at Raizora",
      link: "https://raizora.com",
      icon: <Image src={RaizoraLogo.src} alt="Raizora Logo" width={20} height={20} />,
      date: "2024 - Today",
      location: "Banjarbaru, Indonesia",
      description:
        "Founded and led multi-business portfolio across digital services, retail, property, and automotive sectors, managing operations, strategy, and vision while engaging with partners and clients. Currently operating four business lines: Himajin (hobby products/services), Ketuju Creative (full-service digital agency offering web/app development, design, and marketing), Gea Tourism (Yogyakarta-based car rental and travel services), and Tempat Teduh (quality housing solutions). Drove business development from ideation to execution, focusing on innovation and sustainable growth across all verticals.",
    },
    {
      title: "Senior Frontend Engineer at Ruangguru",
      link: "https://ruangguru.com",
      icon: <Image src={RuangguruLogo.src} alt="Ruangguru Logo" width={24} height={24} />,
      date: "2019 - 2024",
      location: "Jakarta, Indonesia",
      description:
        "Led 6-engineer frontend team managing web, mobile, and CMS platforms using React, React Native, Next.js, and TypeScript. Drove major technical initiatives including mobile app architecture migration and cross-platform design system development. Streamlined frontend hiring processes, mentored team members through 1:1s, and collaborated cross-functionally with stakeholders to prioritize and deliver high-impact features while maintaining technical excellence and team growth.",
    },
    {
      title: "Associate Project Manager at Neumedira",
      link: "https://neumedira.com",
      icon: <Image src={NeumediraLogo.src} alt="Raizora Logo" width={14} height={14} />,
      date: "2024",
      location: "Banjarbaru, Indonesia",
      description:
        "Managed end-to-end development and delivery of two client projects: mini e-commerce platform and cooperative management system. Coordinated development teams while serving as primary liaison between clients and internal stakeholders to define requirements and project scope. Oversaw project timelines, resource allocation, and risk management to ensure successful client deliveries. Facilitated sprint planning, daily standups, and retrospectives while maintaining clear communication channels between technical teams and clients to deliver user-centric.",
    },
    {
      title: "Frontend Engineer at Kitabisa",
      link: "https://kitabisa.com",
      icon: <Image src={KitabisaLogo.src} alt="Raizora Logo" width={12} height={12} />,
      date: "2017 - 2019",
      location: "Jakarta, Indonesia",
      description:
        "Developed frontend solutions for Kitabisa, Indonesia's leading fundraising platform, translating UI designs into responsive web applications using JavaScript, CSS, Sass, and API integration. Collaborated with cross-functional stakeholders (Product, CTO, CPO) to enhance existing products. Led technical modernization initiatives including introducing ReactJS architecture to replace legacy jQuery systems and creating B2B landing page templates that optimized engineering resources by 40%, resulting in more maintainable and scalable codebase.",
    },
    {
      title: "IT Support at STIKES Husada Borneo",
      link: "#0",
      icon: <Image src={StikesHusadaBorneoLogo.src} alt="Raizora Logo" width={20} height={20} />,
      date: "2016 - 2017",
      location: "Banjarbaru, Indonesia",
      description:
        "Managed complete IT infrastructure including wired/wireless network installation and maintenance (LAN, WAN, TCP/IP, routing, subnetting). Provided technical support for software/hardware issues, troubleshot networking equipment and devices (routers, access points, PCs, laptops, printers). Handled procurement of company assets and office supplies while creating graphic design content for monthly events and college graduation materials.",
    },
    {
      title: "Graphic Designer at Kaos Bagoes",
      link: "#0",
      icon: <Image src={KaosBagoesLogo.src} alt="Raizora Logo" width={28} height={28} />,
      date: "2016",
      location: "Banjarbaru, Indonesia",
      description:
        "Assigned to help design posters, design clothes to assist in screen printing clothes in the field.",
    },
  ];

  return (
    <section className="mt-10">
      <h2 className="font-inter-tight text-lg font-semibold text-gray-800 mb-6">
        Experience
      </h2>
      <div className="space-y-1">
        {items.map((item, index) => (
          <article
            key={index}
            className="p-5 rounded-xl odd:bg-linear-to-tr odd:from-gray-100 odd:to-gray-50"
          >
            <div className="sm:flex gap-5">
              <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-200 shadow-xs max-sm:mb-3 sm:mt-5">
                {item.icon}
              </div>
              <div>
                <div className="space-y-1.5 mb-3">
                  <div className="text-[13px] italic text-gray-500/70">
                    {item.date}
                  </div>
                  <h3 className="font-semibold text-gray-800">
                    <a
                      className="hover:underline decoration-2 decoration-gray-300 underline-offset-2"
                      href={item.link}
                    >
                      {item.title}
                    </a>
                  </h3>
                  <div className="text-[13px] font-medium text-gray-600">
                    {item.location}
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
