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
    "Goland",
    "Kotlin",
    "GCP",
    "Swift",
  ],

  // Work Experience
  experiences: {
    'pt-BR': [
      {
        position: "Engineering Lead",
        company: "Frota162",
        dates: "ABR 2025 - ATUALMENTE",
        description: [
          "Lidero 2 times de desenvolvimento de software, focando em desenvolvimento web e implementações utilizando Inteligência Artificial",
          "Responsável por contribuições de Chapters de Tecnologia, Backend e Frontend",
          "Responsável pela manutenabilidade das aplicações, sendo guardião da Qualidade de Software e das boas práticas",
          "Responsável pelo desenvolvimento de ponta a ponta, desde refinamentos com o Time de Produto, até o monitoramento pós deploy em Produção",
        ],
      },
      {
        position: "Principal Software Engineer",
        company: "Banco Confidencial",
        dates: "JUL 2024 - ABR 2025",
        description: [
          "Liderei e desenvolvi integrações estratégicas com o Banco Central via SPI,STA, DICT e SPB, utilizando o padrão ISO 20022",
          "Atuei como referência técnica para as equipes, disseminando as melhores práticas de desenvolvimento em GoLang e Kotlin",
          "Liderei a definição da arquitetura de software para canais internos do banco, projetando soluções robustas, escaláveis e seguras",
          "Implementei o motor de fluxos de trabalho Temporal para a orquestração de processos distribuídos e o Open Policy Agent (OPA) para gestão de políticas de segurança em microsserviços",
        ],
      },
      {
        position: "Software Engineering Manager",
        company: "Orbia",
        dates: "JAN 2024 - JUL 2024",
        description: [
          "Liderei uma equipe no desenvolvimento de um marketplace global para o agronegócio, com suporte para 3 idiomas e foco na internacionalização",
          "Desenvolvi e arquitetei soluções baseadas em microsserviços e microfront-ends para garantir a escalabilidade e manutenibilidade da plataforma",
          "Implementei a camada de Backend for Frontend (BFF) para otimizar a comunicação entre o front-end e os microsserviços",
        ],
      },
      {
        position: "Software Emgineering Manager",
        company: "FIOCRUZ - Fundação Oswaldo Cruz",
        dates: "JAN 2023 - DEZ 2023",
        description: [
          "Gerenciei e mentorei uma equipe técnica de 87 profissionais, liderando os projetos dos aplicativos e-SUS e Meu SUS Digital",
          "Liderei a implementação de um barramento de dados no Ministério da Saúde para unificar os processos digitais do SUS em todo o Brasil",
          "Arquitetei soluções resilientes e elásticas em nuvem (AWS) e desenvolvi sistemas embarcados com Visão Computacional e GenAI",
        ],
      },
      {
        position: "Tech Manager",
        company: "ZAMP",
        dates: "JAN 2022 - JAN 2023",
        description: [
          "Liderei a squad de desenvolvimento mobile (Android e iOS), sendo responsável pelo planejamento, entrega de features e gestão de prazos",
          "Conduzi Planos de Desenvolvimento Individual (PDI) e cerimônias 1:1, promovendo o crescimento técnico da equipe",
          "Coordenei o desenvolvimento e a manutenção de aplicativos nativos e híbridos para as marcas Burger King e Popeyes",
        ],
      },
      {
        position: "Mobile Software Engineer",
        company: "Consorciei",
        dates: "AGO 2020 - JAN 2022",
        description: [
          "Liderei o desenvolvimento do aplicativo iOS nativo, implementando arquiteturas escaláveis como MVVM e Clean Architecture",
          "Garanti a qualidade do código e a estabilidade do app através da implementação de testes unitários e de interface com XCTest, atingindo alta cobertura",
        ],
      },
      {
        position: "Software Engineer",
        company: "UpGestão",
        dates: "JUN 2018 - AGO 2020",
        description: [
          "Conduzi a migração completa de um sistema legado em Delphi para uma aplicação web moderna em Angular 9, melhorando a performance e a manutenibilidade",
          "Projetei arquiteturas baseadas em microsserviços e realizei a diagramação de bancos de dados para garantir a escalabilidade das soluções",
        ],
      },
      {
        position: "Software Engineer",
        company: "All Comunicação",
        dates: "JAN 2016 - JUN 2018",
        description: [
          "Conduzi um projeto de modernização, migrando um sistema legado em Delphi para uma nova plataforma em Angular 9",
          "Desenvolvi e mantive aplicações web full-stack, além de aplicativos móveis multiplataforma com React Native e Ionic",
        ],
      },
    ],
    'en-US': [
      {
        position: "Engineering Lead",
        company: "Frota162",
        dates: "APR 2025 - CURRENT",
        description: [
          "I led two software development teams, focusing on web development and implementations using Artificial Intelligence",
          "Responsible for contributions from Technology, Backend, and Frontend Chapters",
          "I'm also responsible for application maintainability, ensuring Software Quality and best practices",
          "Responsible for end-to-end development, from refinements with the Product Team to post-deployment monitoring in Production",
        ],
      },
      {
        position: "Principal Software Engineer",
        company: "Banco Confidencial",
        dates: "JUL 2024 - APR 2025",
        description: [
          "I led and developed strategic integrations with the Central Bank via SPI, STA, DICT, and SPB, using the ISO 20022 standard",
          "I served as a technical reference for the teams, disseminating best development practices in GoLang and Kotlin",
          "I led the definition of the software architecture for the bank's internal channels, designing robust, scalable, and secure solutions",
          "I implemented the Temporal workflow engine for orchestrating distributed processes and the Open Policy Agent (OPA) for managing security policies in microservices",
        ],
      },
      {
        position: "Software Engineering Manager",
        company: "Orbia",
        dates: "JAN 2024 - JUL 2024",
        description: [
          "I led a team in developing a global marketplace for agribusiness, with support for three languages ​​and a focus on internationalization",
          "I developed and architected solutions based on microservices and microfrontends to ensure the platform's scalability and maintainability",
          "I implemented the Backend for Frontend (BFF) layer to optimize communication between the frontend and microservices",
        ],
      },
      {
        position: "Software Engineering Manager",
        company: "FIOCRUZ - Fundação Oswaldo Cruz",
        dates: "JAN 2023 - DEC 2023",
        description: [
          "I managed and mentored a technical team of 87 professionals, leading the e-SUS and Meu SUS Digital application projects",
          "I led the implementation of a data bus at the Ministry of Health to unify SUS digital processes throughout Brazil",
          "I designed resilient and elastic cloud solutions (AWS) and developed embedded systems with Computer Vision and GenAI",
        ],
      },
       {
        position: "Tech Manager",
        company: "ZAMP",
        dates: "JAN 2022 - JAN 2023",
        description: [
          "I led the mobile development squad (Android and iOS), responsible for planning, feature delivery, and deadline management",
          "I conducted Individual Development Plans (IDPs) and 1:1 ceremonies, fostering the team's technical growth",
          "I coordinated the development and maintenance of native and hybrid apps for the Burger King and Popeyes brands",
        ],
      },
       {
        position: "Mobile Software Engineer",
        company: "Consorciei",
        dates: "AUG 2020 - JAN 2022",
        description: [
          "I led the development of the native iOS app, implementing scalable architectures such as MVVM and Clean Architecture",
          "I ensured code quality and app stability by implementing unit and interface tests with XCTest, achieving high coverage",
        ],
      },
       {
        position: "Software Engineer",
        company: "UpGestão",
        dates: "JUN 2018 - AUG 2020",
        description: [
          "I led the complete migration of a legacy Delphi system to a modern web application in Angular 9, improving performance and maintainability",
          "I designed microservices-based architectures and performed database layouts to ensure solution scalability",
        ],
      },
       {
        position: "Software Engineering Manager",
        company: "All Comunicação",
        dates: "JAN 2016 - JUN 2018",
        description: [
          "I led a modernization project, migrating a legacy Delphi system to a new Angular 9 platform",
          "I developed and maintained full-stack web applications, as well as cross-platform mobile applications with React Native and Ionic",
        ],
      },
    ],
  },

  // Projects
  // projects: {
  //   'pt-BR': [
  //     {
  //       name: "Plataforma de E-Commerce",
  //       image: "https://via.placeholder.com/600x400",
  //       description:
  //         "Uma plataforma de e-commerce completa com gerenciamento de carrinho, integração de pagamento e painel administrativo. Construída com Next.js, Stripe e MongoDB.",
  //       technologies: ["Next.js", "TypeScript", "MongoDB", "Stripe"],
  //       repoLink: "https://github.com/GabrielOnRails/ecommerce-platform",
  //       demoLink: "https://demo-ecommerce.example.com",
  //     },
  //     {
  //       name: "Sistema de Gerenciamento de Tarefas",
  //       image: "https://via.placeholder.com/600x400",
  //       description:
  //         "Uma aplicação colaborativa de gerenciamento de tarefas com atualizações em tempo real, recursos de colaboração em equipe e painel de análises.",
  //       technologies: ["React", "Firebase", "Tailwind CSS"],
  //       repoLink: "https://github.com/GabrielOnRails/task-manager",
  //       demoLink: "https://task-manager.example.com",
  //     },
  //     {
  //       name: "Gerador de Conteúdo com IA",
  //       image: "https://via.placeholder.com/600x400",
  //       description:
  //         "Uma ferramenta de geração de conteúdo com IA usando a API GPT da OpenAI. Recursos incluem geração de texto, resumo e tradução.",
  //       technologies: ["React", "Node.js", "OpenAI API", "PostgreSQL"],
  //       repoLink: "https://github.com/GabrielOnRails/ai-content-gen",
  //       demoLink: "https://ai-content.example.com",
  //     },
  //     {
  //       name: "Aplicação de Chat em Tempo Real",
  //       image: "https://via.placeholder.com/600x400",
  //       description:
  //         "Uma aplicação de chat em tempo real com mensagens privadas, chats em grupo e compartilhamento de arquivos.",
  //       technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
  //       repoLink: "https://github.com/GabrielOnRails/chat-app",
  //       demoLink: "https://chat.example.com",
  //     },
  //     {
  //       name: "Painel DevOps",
  //       image: "https://via.placeholder.com/600x400",
  //       description:
  //         "Um painel de monitoramento DevOps completo que agrega métricas de várias fontes incluindo AWS, GitHub e Kubernetes.",
  //       technologies: ["React", "Docker", "Kubernetes", "AWS"],
  //       repoLink: "https://github.com/GabrielOnRails/devops-dashboard",
  //       demoLink: "https://devops-dash.example.com",
  //     },
  //     {
  //       name: "Gerador de Portfólio",
  //       image: "https://via.placeholder.com/600x400",
  //       description:
  //         "Uma ferramenta para gerar sites de portfólio bonitos a partir de um arquivo de configuração simples. Apresenta vários temas e fácil personalização.",
  //       technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  //       repoLink: "https://github.com/GabrielOnRails/portfolio-generator",
  //       demoLink: "https://portfolio-gen.example.com",
  //     },
  //   ],
  //   'en-US': [
  //     {
  //       name: "E-Commerce Platform",
  //       image: "https://via.placeholder.com/600x400",
  //       description:
  //         "A full-featured e-commerce platform with cart management, payment integration, and admin dashboard. Built with Next.js, Stripe, and MongoDB.",
  //       technologies: ["Next.js", "TypeScript", "MongoDB", "Stripe"],
  //       repoLink: "https://github.com/GabrielOnRails/ecommerce-platform",
  //       demoLink: "https://demo-ecommerce.example.com",
  //     },
  //     {
  //       name: "Task Management System",
  //       image: "https://via.placeholder.com/600x400",
  //       description:
  //         "A collaborative task management application with real-time updates, team collaboration features, and analytics dashboard.",
  //       technologies: ["React", "Firebase", "Tailwind CSS"],
  //       repoLink: "https://github.com/GabrielOnRails/task-manager",
  //       demoLink: "https://task-manager.example.com",
  //     },
  //     {
  //       name: "AI Content Generator",
  //       image: "https://via.placeholder.com/600x400",
  //       description:
  //         "An AI-powered content generation tool using OpenAI's GPT API. Features include text generation, summarization, and translation.",
  //       technologies: ["React", "Node.js", "OpenAI API", "PostgreSQL"],
  //       repoLink: "https://github.com/GabrielOnRails/ai-content-gen",
  //       demoLink: "https://ai-content.example.com",
  //     },
  //     {
  //       name: "Real-Time Chat Application",
  //       image: "https://via.placeholder.com/600x400",
  //       description:
  //         "A real-time chat application with private messaging, group chats, and file sharing capabilities.",
  //       technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
  //       repoLink: "https://github.com/GabrielOnRails/chat-app",
  //       demoLink: "https://chat.example.com",
  //     },
  //     {
  //       name: "DevOps Dashboard",
  //       image: "https://via.placeholder.com/600x400",
  //       description:
  //         "A comprehensive DevOps monitoring dashboard that aggregates metrics from various sources including AWS, GitHub, and Kubernetes.",
  //       technologies: ["React", "Docker", "Kubernetes", "AWS"],
  //       repoLink: "https://github.com/GabrielOnRails/devops-dashboard",
  //       demoLink: "https://devops-dash.example.com",
  //     },
  //     {
  //       name: "Portfolio Generator",
  //       image: "https://via.placeholder.com/600x400",
  //       description:
  //         "A tool to generate beautiful portfolio websites from a simple configuration file. Features multiple themes and easy customization.",
  //       technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  //       repoLink: "https://github.com/GabrielOnRails/portfolio-generator",
  //       demoLink: "https://portfolio-gen.example.com",
  //     },
  //   ],
  // },

  // Footer
  currentYear: new Date().getFullYear(),
};

// Helper function to get data based on language
export const getLocalizedData = <T,>(data: { 'pt-BR': T; 'en-US': T }, language: Language): T => {
  return data[language];
};
