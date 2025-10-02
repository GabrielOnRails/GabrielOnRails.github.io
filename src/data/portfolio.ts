// Portfolio Data Configuration
// Edit this file to customize your portfolio

import { Language } from '../i18n/translations';

interface BilingualText {
  'pt-BR': string;
  'en-US': string;
}

export const portfolioData = {
  // Personal Information
  name: "Gabriel Dias",

  title: {
    'pt-BR': "Gerente de Engenharia de Software",
    'en-US': "Software Engineering Manager",
  } as BilingualText,

  bio: {
    'pt-BR': "Construindo soluções escaláveis e liderando equipes de engenharia de alto desempenho.",
    'en-US': "Building scalable solutions and leading high-performance engineering teams.",
  } as BilingualText,

  email: "gabrielspaulinod@gmail.com",
  githubUrl: "https://github.com/GabrielOnRails",
  linkedinUrl: "https://www.linkedin.com/in/gabriel-tech/",
  profileImage: "/images/profile.jpeg",

  // About Section
  about: {
    'pt-BR': `Sou um Gerente de Engenharia de Software apaixonado com mais de 10 anos de experiência na construção e liderança de equipes de engenharia. Minha jornada na tecnologia tem sido impulsionada pelo amor em resolver problemas complexos e criar soluções inovadoras que causam um impacto real.

Sou especializado em desenvolvimento full-stack, arquitetura em nuvem e metodologias ágeis. Quando não estou programando ou gerenciando equipes, você me encontrará contribuindo para projetos open-source, mentorando desenvolvedores júnior ou explorando as últimas tecnologias no cenário tecnológico em constante evolução.`,
    'en-US': `I'm a passionate Software Engineering Manager with over 10 years of experience in building and leading engineering teams. My journey in technology has been driven by a love for solving complex problems and creating innovative solutions that make a real impact.

I specialize in full-stack development, cloud architecture, and agile methodologies. When I'm not coding or managing teams, you'll find me contributing to open-source projects, mentoring junior developers, or exploring the latest technologies in the ever-evolving tech landscape.`,
  } as BilingualText,

  // Skills
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Next.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Kubernetes",
    "AWS",
    "Git",
  ],

  // Work Experience
  experiences: {
    'pt-BR': [
      {
        position: "Gerente de Engenharia de Software",
        company: "Tech Innovations Inc.",
        dates: "JAN 2022 - PRESENTE",
        description: [
          "Liderei uma equipe de 12 engenheiros para entregar recursos essenciais para uma plataforma SaaS servindo mais de 100 mil usuários",
          "Implementei práticas ágeis que aumentaram a velocidade da equipe em 40% e reduziram bugs em 60%",
          "Arquitetei e lancei uma infraestrutura de microserviços usando Kubernetes e Docker",
          "Mentorei engenheiros sênior e júnior, realizando reuniões 1-on-1 regulares e avaliações de desempenho",
        ],
      },
      {
        position: "Desenvolvedor Full Stack Sênior",
        company: "Digital Solutions Ltd.",
        dates: "MAR 2019 - DEZ 2021",
        description: [
          "Desenvolvi e mantive aplicações full-stack usando React, Node.js e PostgreSQL",
          "Reduzi o tempo de carregamento da aplicação em 50% através de otimização de desempenho e refatoração de código",
          "Colaborei com gerentes de produto e designers em um ambiente ágil",
          "Implementei pipelines CI/CD usando GitHub Actions e AWS CodePipeline",
        ],
      },
      {
        position: "Desenvolvedor Full Stack",
        company: "StartupHub",
        dates: "JUN 2017 - FEV 2019",
        description: [
          "Construí aplicações web responsivas para vários clientes usando frameworks JavaScript modernos",
          "Integrei APIs de terceiros e gateways de pagamento (Stripe, PayPal)",
          "Participei de revisões de código e sessões de programação em pares",
          "Contribuí para o desenvolvimento de ferramentas e bibliotecas internas",
        ],
      },
    ],
    'en-US': [
      {
        position: "Software Engineering Manager",
        company: "Tech Innovations Inc.",
        dates: "JAN 2022 - PRESENT",
        description: [
          "Led a team of 12 engineers to deliver mission-critical features for a SaaS platform serving 100K+ users",
          "Implemented agile practices that increased team velocity by 40% and reduced bug count by 60%",
          "Architected and launched a microservices infrastructure using Kubernetes and Docker",
          "Mentored senior and junior engineers, conducting regular 1-on-1s and performance reviews",
        ],
      },
      {
        position: "Senior Full Stack Developer",
        company: "Digital Solutions Ltd.",
        dates: "MAR 2019 - DEC 2021",
        description: [
          "Developed and maintained full-stack applications using React, Node.js, and PostgreSQL",
          "Reduced application load time by 50% through performance optimization and code refactoring",
          "Collaborated with product managers and designers in an agile environment",
          "Implemented CI/CD pipelines using GitHub Actions and AWS CodePipeline",
        ],
      },
      {
        position: "Full Stack Developer",
        company: "StartupHub",
        dates: "JUN 2017 - FEB 2019",
        description: [
          "Built responsive web applications for various clients using modern JavaScript frameworks",
          "Integrated third-party APIs and payment gateways (Stripe, PayPal)",
          "Participated in code reviews and pair programming sessions",
          "Contributed to the development of internal tools and libraries",
        ],
      },
    ],
  },

  // Projects
  projects: {
    'pt-BR': [
      {
        name: "Plataforma de E-Commerce",
        image: "https://via.placeholder.com/600x400",
        description:
          "Uma plataforma de e-commerce completa com gerenciamento de carrinho, integração de pagamento e painel administrativo. Construída com Next.js, Stripe e MongoDB.",
        technologies: ["Next.js", "TypeScript", "MongoDB", "Stripe"],
        repoLink: "https://github.com/GabrielOnRails/ecommerce-platform",
        demoLink: "https://demo-ecommerce.example.com",
      },
      {
        name: "Sistema de Gerenciamento de Tarefas",
        image: "https://via.placeholder.com/600x400",
        description:
          "Uma aplicação colaborativa de gerenciamento de tarefas com atualizações em tempo real, recursos de colaboração em equipe e painel de análises.",
        technologies: ["React", "Firebase", "Tailwind CSS"],
        repoLink: "https://github.com/GabrielOnRails/task-manager",
        demoLink: "https://task-manager.example.com",
      },
      {
        name: "Gerador de Conteúdo com IA",
        image: "https://via.placeholder.com/600x400",
        description:
          "Uma ferramenta de geração de conteúdo com IA usando a API GPT da OpenAI. Recursos incluem geração de texto, resumo e tradução.",
        technologies: ["React", "Node.js", "OpenAI API", "PostgreSQL"],
        repoLink: "https://github.com/GabrielOnRails/ai-content-gen",
        demoLink: "https://ai-content.example.com",
      },
      {
        name: "Aplicação de Chat em Tempo Real",
        image: "https://via.placeholder.com/600x400",
        description:
          "Uma aplicação de chat em tempo real com mensagens privadas, chats em grupo e compartilhamento de arquivos.",
        technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
        repoLink: "https://github.com/GabrielOnRails/chat-app",
        demoLink: "https://chat.example.com",
      },
      {
        name: "Painel DevOps",
        image: "https://via.placeholder.com/600x400",
        description:
          "Um painel de monitoramento DevOps completo que agrega métricas de várias fontes incluindo AWS, GitHub e Kubernetes.",
        technologies: ["React", "Docker", "Kubernetes", "AWS"],
        repoLink: "https://github.com/GabrielOnRails/devops-dashboard",
        demoLink: "https://devops-dash.example.com",
      },
      {
        name: "Gerador de Portfólio",
        image: "https://via.placeholder.com/600x400",
        description:
          "Uma ferramenta para gerar sites de portfólio bonitos a partir de um arquivo de configuração simples. Apresenta vários temas e fácil personalização.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
        repoLink: "https://github.com/GabrielOnRails/portfolio-generator",
        demoLink: "https://portfolio-gen.example.com",
      },
    ],
    'en-US': [
      {
        name: "E-Commerce Platform",
        image: "https://via.placeholder.com/600x400",
        description:
          "A full-featured e-commerce platform with cart management, payment integration, and admin dashboard. Built with Next.js, Stripe, and MongoDB.",
        technologies: ["Next.js", "TypeScript", "MongoDB", "Stripe"],
        repoLink: "https://github.com/GabrielOnRails/ecommerce-platform",
        demoLink: "https://demo-ecommerce.example.com",
      },
      {
        name: "Task Management System",
        image: "https://via.placeholder.com/600x400",
        description:
          "A collaborative task management application with real-time updates, team collaboration features, and analytics dashboard.",
        technologies: ["React", "Firebase", "Tailwind CSS"],
        repoLink: "https://github.com/GabrielOnRails/task-manager",
        demoLink: "https://task-manager.example.com",
      },
      {
        name: "AI Content Generator",
        image: "https://via.placeholder.com/600x400",
        description:
          "An AI-powered content generation tool using OpenAI's GPT API. Features include text generation, summarization, and translation.",
        technologies: ["React", "Node.js", "OpenAI API", "PostgreSQL"],
        repoLink: "https://github.com/GabrielOnRails/ai-content-gen",
        demoLink: "https://ai-content.example.com",
      },
      {
        name: "Real-Time Chat Application",
        image: "https://via.placeholder.com/600x400",
        description:
          "A real-time chat application with private messaging, group chats, and file sharing capabilities.",
        technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
        repoLink: "https://github.com/GabrielOnRails/chat-app",
        demoLink: "https://chat.example.com",
      },
      {
        name: "DevOps Dashboard",
        image: "https://via.placeholder.com/600x400",
        description:
          "A comprehensive DevOps monitoring dashboard that aggregates metrics from various sources including AWS, GitHub, and Kubernetes.",
        technologies: ["React", "Docker", "Kubernetes", "AWS"],
        repoLink: "https://github.com/GabrielOnRails/devops-dashboard",
        demoLink: "https://devops-dash.example.com",
      },
      {
        name: "Portfolio Generator",
        image: "https://via.placeholder.com/600x400",
        description:
          "A tool to generate beautiful portfolio websites from a simple configuration file. Features multiple themes and easy customization.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
        repoLink: "https://github.com/GabrielOnRails/portfolio-generator",
        demoLink: "https://portfolio-gen.example.com",
      },
    ],
  },

  // Footer
  currentYear: new Date().getFullYear(),
};

// Helper function to get data based on language
export const getLocalizedData = <T,>(data: { 'pt-BR': T; 'en-US': T }, language: Language): T => {
  return data[language];
};
