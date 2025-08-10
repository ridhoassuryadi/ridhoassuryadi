const Svg1 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
    <path
      fill="#FF6E1C"
      fillRule="evenodd"
      d="M6.857 0C5.73 0 4.647.448 3.85 1.246L0 5.096v1.761C0 8.102.535 9.222 1.387 10A4.243 4.243 0 0 0 0 13.143v1.762l3.85 3.85a4.254 4.254 0 0 0 6.15-.142 4.254 4.254 0 0 0 6.15.141l3.85-3.85v-1.761A4.243 4.243 0 0 0 18.613 10 4.243 4.243 0 0 0 20 6.857V5.095l-3.85-3.85a4.254 4.254 0 0 0-6.15.142A4.243 4.243 0 0 0 6.857 0Zm6.022 10a4.314 4.314 0 0 1-.14-.135L10 7.127 7.262 9.865A4.264 4.264 0 0 1 7.12 10c.048.044.095.089.14.135L10 12.873l2.738-2.738c.046-.046.094-.091.141-.135Zm-1.768 4.905v.841a2.032 2.032 0 0 0 3.468 1.437l3.199-3.199v-.841a2.032 2.032 0 0 0-3.468-1.437l-3.199 3.199Zm-2.222 0L5.69 11.706a2.032 2.032 0 0 0-3.468 1.437v.841l3.199 3.199a2.032 2.032 0 0 0 3.468-1.437v-.841Zm0-10.651v.841L5.69 8.294a2.032 2.032 0 0 1-3.468-1.437v-.841l3.199-3.199a2.032 2.032 0 0 1 3.468 1.437Zm5.42 4.04-3.198-3.199v-.841a2.032 2.032 0 0 1 3.468-1.437l3.199 3.199v.841a2.032 2.032 0 0 1-3.468 1.437Z"
    />
  </svg>
);

const Svg2 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
    <path
      fill="#17CF97"
      d="M4.998 10a5 5 0 1 0-5-5v5h5Zm10 0a5 5 0 1 0 5 5v-5h-5Z"
    />
    <path
      fill="#0D9F73"
      d="M14.998 0a5 5 0 1 1-5 5V0h5Zm-10 20a5 5 0 1 1 5-5v5h-5Z"
    />
  </svg>
);

export default function SideHustles() {
  const items = [
    {
      title: "TreonStudio",
      link: "#0",
      icon: <Svg1 />,
      description: "A design studio that creates beautiful and functional products.",
    },
    {
      title: "Himajin",
      link: "#0",
      icon: <Svg2 />,
      description:
        "Aquatic pet care brand that provides high-quality products for your aquatic pets.",
    },
    {
      title: "Tempat Teduh",
      link: "#0",
      icon: <Svg1 />,
      description: "A design studio that creates beautiful and functional products.",
    },
    {
      title: "Gea Tourism",
      link: "#0",
      icon: <Svg2 />,
      description:
        "Travel agency that provides high-quality products for your aquatic pets.",
    },
  ];

  return (
    <section className="mt-10">
      <h2 className="font-inter-tight text-lg font-semibold text-gray-800 mb-6">
        Side Hustles
      </h2>
      <div className="grid min-[580px]:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <article
            key={index}
            className={`relative p-5 rounded-xl group ${index === 0 || index === 3 ? 'bg-gradient-to-tr from-gray-100 to-gray-50' : ''}`}
          >
            <div
              className="absolute top-5 right-7 text-gray-400 group-hover:text-gray-600 group-hover:rotate-45 transition"
              aria-hidden="true"
            >
              <svg
                className="fill-current opacity-80"
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
              >
                <path d="M1.018 10 0 8.983l7.572-7.575H1.723L1.736 0H10v8.266H8.577l.013-5.841L1.018 10Z" />
              </svg>
            </div>
            <div className="w-11 h-11 rounded-full flex items-center justify-center bg-white border border-gray-200 shadow-xs mb-4">
              {item.icon}
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-gray-800">
                <a className="before:absolute before:inset-0" href={item.link}>
                  {item.title}
                </a>
              </h3>
              <p className="text-sm text-gray-600">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
