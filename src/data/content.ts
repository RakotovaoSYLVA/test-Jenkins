
import orangeLogo from '../assets/img/orange3.jpg';
import accesLogo from '../assets/img/accesbanque.png';
import jumboLogo from '../assets/img/logojumbo.png'
import { AnimatePresence } from 'framer-motion';

export interface Skill {
  category: string;
  icon: string;
  skills: string[];
  progress: number;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string[];
  logo: string;
  expanded?: boolean;
  github: string,
  live: string,
}

export interface Hackathon {
  name: string;
  position: string;
  year: string;
  medal: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const personalInfo = {
  name: "Sylva RAKOTOVAO",
  title: "Frontend Developer",
  email: "rakotovaosylva0@gmail.com",
  phone: "+261 38 43 425 65",
  location: "Madagascar",
  bio: "Développeuse Web passionnée par les interfaces modernes et performantes, je conçois des expériences utilisateurs fluides en React, Angular et Node.js. Curieuse, rigoureuse et toujours prête à apprendre, j’aime relever les défis techniques au sein d’équipes agiles. Mon objectif : transformer des idées ambitieuses en applications web intelligentes et impactantes.  ."
};

export const skills: Skill[] = [
  {
    category: "Développement Front-End",
    icon: "💻",
    skills: ["ReactJS", "Angular", "HTML", "CSS", "JavaScript", "TypeScript", "Tailwind CSS"],
    progress: 85
  },
  {
    category: "Développement Back-End",
    icon: "🛠️",
    skills: ["Node.js", "Java (Quarkus)", "PHP (CodeIgniter)", "Express.js"],
    progress: 75
  },
  {
    category: "Bases de Données",
    icon: "🗄️",
    skills: ["MySQL", "PostgreSQL", "MariaDB", "MongoDB"],
    progress: 80
  },
  {
    category: "DevOps & Outils",
    icon: "⚙️",
    skills: ["Docker", "Docker Compose", "Git", "Bitbucket", "GitHub", "Apache", "Tomcat"],
    progress: 70
  },
  {
    category: "Méthodologies & Autres",
    icon: "📚",
    skills: ["Agile/Scrum", "Jira", "Power BI", "QGIS"],
    progress: 65
  }
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Accès Banque Madagascar",
    position: "Développeuse Front-End (Alternance)",
    period: "Juillet 2024 - Présent",
    description: [
      "Développement et maintenance des interfaces utilisateurs avec React et Angular",
      "Intégration des API RESTful dans les applications bancaires",
      "Mise en place de tests unitaires (+70% de couverture)",
      "Participation aux sprints agiles avec Jira et gestion de versions via Bitbucket"
    ],
    logo: accesLogo,
    github: "https://github.com/RakotovaoSYLVA",
    live: "https://github.com/RakotovaoSYLVA",

  },
  {
    id: "2",
    company: "Origami Tech",
    position: "Stagiaire Développeuse Full Stack",
    period: "Juin 2023 – Octobre 2023",
    description: [
      "Développement de sites web d'entreprise avec React pour le frontend",
      "Conception et intégration du backend avec Node.js",
      "Travail sur deux projets : Origami Tech et E-Harogna",
      "Collaboration dans une équipe de développement agile"
    ],
    logo: "OT",
    github: "https://github.com/RakotovaoSYLVA",
    live: "https://github.com/RakotovaoSYLVA",
  },
  {
    id: "3",
    company: "Orange Madagascar",
    position: "Stagiaire Développeuse Full Stack",
    period: "Juin 2022 – Septembre 2022",
    description: [
      "Développement de l'application Orange Actu (Java Quarkus / Angular)",
      "Ajout de nouvelles fonctionnalités et optimisation des performances",
      "Participation aux revues de code et tests d'intégration",
      "Travail dans un environnement structuré avec méthodologie agile"
    ],
    logo: orangeLogo,
    github: "https://github.com/RakotovaoSYLVA",
    live: "https://github.com/RakotovaoSYLVA",
  },
  {
    id: "4",
    company: "Jumbo Score Madagascar",
    position: "Stagiaire Développeuse Full Stack",
    period: "Juin 2021 – Septembre 2021",
    description: [
      "Développement d'une application de gestion de stock en PHP (CodeIgniter)",
      "Création de la base de données et interface utilisateur",
      "Automatisation du suivi des produits et ventes",
      "Collaboration avec le personnel technique pour les besoins métiers"
    ],
    logo: jumboLogo,
    github: "https://github.com/RakotovaoSYLVA",
    live: "https://github.com/RakotovaoSYLVA",
  }
];

export const personalProjects = [
  {
    id: "p1",
    title: "Gestion de stock (Java Swing)",
    period: "Projet personnel 2023",
    description: [
      "Application desktop Java Swing",
      "CRUD produits, alertes de stock, recherche",
      "Connexion JDBC + interface graphique"
    ],
    logo: "GS"
  },
  {
    id: "p2",
    title: "Gestion d’utilisateurs (Angular + Node.js)",
    period: "Projet personnel 2023",
    description: [
      "Application web full-stack",
      "CRUD utilisateurs, auth simple",
      "API REST + base de données"
    ],
    logo: "GU"
  }
];


export const hackathons: Hackathon[] = [
  {
    name: "DevHub Hackathon 2024",
    position: "1st Place",
    year: "2024",
    medal: "🥇"
  },
  {
    name: "AI Innovation Challenge",
    position: "3rd Place", 
    year: "2023",
    medal: "🥉"
  },
  {
    name: "FinTech Solutions Hackathon",
    position: "2nd Place",
    year: "2023",
    medal: "🥈"
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/jean-aim%C3%A9-raheriniaina-7b1543267/",
    icon: "FaLinkedin"
  },
  {
    name: "GitHub", 
    url: "https://github.com/RakotovaoSYLVA",
    icon: "FaGithub"
  },
  {
    name: "Email",
    url: "mailto:rakotovaosylva0@gmail.com",
    icon: "FaEnvelope"
  }
];