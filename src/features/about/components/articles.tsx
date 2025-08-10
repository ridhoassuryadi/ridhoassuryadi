export default function Articles() {
  const items = [
    {
      title: "Eps 57 - Belajar Koding Hari Gini",
      link: "https://podcasts.apple.com/us/podcast/057-belajar-koding-hari-gini-dengan-muhammad-ridho/id1306937374?i=1000416359501",
      source: "Ceritanya Developer Podcast",
      description:
        "Menceritakan pengalaman Muhammad Ridho yang ikut Bootcamp online & offline setelah lulus SMK. Saat ini bekerja sebagai frontend developer di KitaBisa.com dan freelance desainer. Semuanya tidak menyurutkan niatnya untuk kuliah dan dia masih punya cita-cita besar dari ilmu yang akan dia dapatkan dari kuliahnya itu. Lihat https://devmuslim.id/episode57 untuk catatan dan link yang dibahas di episode ini.",
    },
    {
      title: "JogjaJS Meetup 11 -  Jump Start to ReactJS",
      link: "https://www.linkedin.com/in/m-ridho/details/experience/1524698334958/single-media-viewer/?profileId=ACoAACBcl9kB4RydG136NO2SxyGAoqAtGZUu57E",
      source: "JogjaJS Meetup",
      description:
        "There was a wizard engineer (we'll call him “Josh”) who worked for me a few years ago. His code was good. His PRs were quick.",
    },
    {
      title: "Kukode Sharing - Meetup",
      link: "#0",
      source: "Kukode",
      description:
        "Since the world is 3D, it's no surprise that video games, mobile robotics challenges, and architectural design tools often require 3D variants.",
    },
  ];

  return (
    <section className="mt-10">
      <h2 className="font-inter-tight text-lg font-semibold text-gray-800 mb-6">
        Featured
      </h2>
      <div className="space-y-1">
        {items.map((item, index) => (
          <article
            key={index}
            className="relative p-5 rounded-xl odd:bg-linear-to-tr odd:from-gray-100 odd:to-gray-50 group"
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
            <div className="space-y-1.5 mb-2">
              <div className="text-[13px] font-medium text-gray-600">
                {item.source}
              </div>
              <h3 className="font-semibold text-gray-800">
                <a className="before:absolute before:inset-0" href={item.link}>
                  {item.title}
                </a>
              </h3>
            </div>
            <p className="text-sm text-gray-600">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
