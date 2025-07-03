export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  sourceUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 2,
    title: "TechTime",
    description: "  A fully responsive landing page",
    technologies: ["React js", "Css", "Swiper js", "bootstrap"],
    image: "../images/techtime.png",
    liveUrl: "https://tiny-bunny-51b27b.netlify.app/",
    sourceUrl: "https://github.com/ifzyy/techtime",
    featured: true
  },
  {
    id: 3,
    title: "Poco web app",
    description: " A fully responsive e-commerce landing page",
    technologies: ["CSS", "React js", "swiper js", "tailwind css"],
    image: "../images/poco.png",
    liveUrl: "https://johnsn-poco.netlify.app/",
    sourceUrl: "https://github.com/ifzyy/restaurant",
    featured: true
  },

  {
    id: 5,
    title: "Spa",
    description: "A beautiful Spa template website to Book an appointment for a session",
    technologies: ["Html", "css", "Javascript"],
    image: "../images/spa.png",
    liveUrl: "https://ifzyy.github.io/spa/",
    sourceUrl: "https://github.com/ifzyy/Spa",
    featured: true
  },


  {
    id: 8,
    title: "Chocolux",
    description: "A beautiful fully responsive e-commerce landing page",
    technologies: ["Html", "css", "Javascript", "jquery", "sass"],
    image: "../images/chocolux.png",
    liveUrl: "https://ifzyy.github.io/chocolux/",
    sourceUrl: "https://github.com/ifzyy/chocolux",
    featured: true
  },
  {
    id: 9,
    title: "clear-link",
    description: "A fully responsive landing page that shows a product for better video conferencing",
    technologies: ["Reactjs", "Tailwind CSS", "swiperjs"],
    image: "../images/clearlink.png",
    liveUrl: "https://calm-froyo-3de41b.netlify.app/",
    sourceUrl: "https://github.com/ifzyy/clear-link",
    featured: true
  }
];