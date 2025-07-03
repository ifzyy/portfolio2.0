export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'professional';
}

export const skills: Skill[] = [
  // Frontend
  { name: 'JavaScript', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'Redux', category: 'frontend' },
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  
  // Backend
  { name: 'Ruby', category: 'backend' },
  { name: 'Ruby on Rails', category: 'backend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Express.js', category: 'backend' },
  
  // Database
  { name: 'MySQL', category: 'database' },
  { name: 'PostgreSQL', category: 'database' },
  {name: 'MongoDB', category: 'database' },
  
  // Tools & Methods
  { name: 'Git', category: 'tools' },
  { name: 'GitHub', category: 'tools' },
  { name: 'Chrome Dev Tools', category: 'tools' },
  { name: 'Docker', category: 'tools' },
  { name: 'Azure', category: 'tools' },
  { name: 'CI/CD', category: 'tools' },
  
  // Professional
  { name: 'Remote Pair-Programming', category: 'professional' },
  { name: 'Teamwork', category: 'professional' },
  { name: 'Mentoring', category: 'professional' },
  { name: 'Code Reviews', category: 'professional' },
  { name: 'Team Leadership', category: 'professional' }
];

export const skillCategories = {
  frontend: 'Frontend',
  backend: 'Backend', 
  database: 'Database',
  tools: 'Tools & DevOps',
  professional: 'Professional'
};