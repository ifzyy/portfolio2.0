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
    id: 1,
    title: 'Joseph Gbadamosi',
    description:
      'A portfolio site for one of Nigeria’s leading copywriters, refreshed to win more local and international clients.',
    technologies: ['React', 'Tailwind CSS', 'JavaScript'],
    image: '/joseph-gbadamosi.png',
    liveUrl: 'https://josephgbadamosi.com/',
    sourceUrl: 'https://github.com/ifzyy/jg',
    featured: true,
  },
  {
    id: 9,
    title: 'Clear-Link',
    description:
      'A crisp marketing site for a video-conferencing product, focused on clarity and conversion.',
    technologies: ['React', 'Tailwind CSS', 'Swiper.js'],
    image: '/clearlink.png',
    liveUrl: 'https://calm-froyo-3de41b.netlify.app/',
    sourceUrl: 'https://github.com/ifzyy/clear-link',
    featured: true,
  },
  {
    id: 3,
    title: 'Poco',
    description: 'A responsive e-commerce storefront with a fast, tactile shopping flow.',
    technologies: ['React', 'Tailwind CSS', 'Swiper.js'],
    image: '/poco.png',
    liveUrl: 'https://johnsn-poco.netlify.app/',
    sourceUrl: 'https://github.com/ifzyy/restaurant',
    featured: true,
  },
  {
    id: 8,
    title: 'Chocolux',
    description: 'A polished, fully responsive landing page for a premium chocolate brand.',
    technologies: ['HTML', 'Sass', 'JavaScript', 'jQuery'],
    image: '/chocolux.png',
    liveUrl: 'https://ifzyy.github.io/chocolux/',
    sourceUrl: 'https://github.com/ifzyy/chocolux',
    featured: true,
  },
  {
    id: 2,
    title: 'TechTime',
    description: 'A responsive landing page for a modern tech brand, built for speed.',
    technologies: ['React', 'Bootstrap', 'Swiper.js'],
    image: '/techtime.png',
    liveUrl: 'https://tiny-bunny-51b27b.netlify.app/',
    sourceUrl: 'https://github.com/ifzyy/techtime',
    featured: true,
  },
];
