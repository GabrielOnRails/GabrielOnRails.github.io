export const translations = {
  'pt-BR': {
    nav: {
      home: 'Início',
      about: 'Sobre',
      skills: 'Habilidades',
      experience: 'Experiência',
      projects: 'Projetos',
      contact: 'Contato',
    },
    hero: {
      greeting: 'Olá, eu sou',
      cta: 'Entre em Contato',
    },
    about: {
      title: 'Sobre',
      titleHighlight: 'Mim',
    },
    skills: {
      title: 'Habilidades &',
      titleHighlight: 'Tecnologias',
    },
    experience: {
      title: 'Experiência',
      titleHighlight: 'Profissional',
    },
    projects: {
      title: 'Projetos em',
      titleHighlight: 'Destaque',
    },
    contact: {
      title: 'Entre em',
      titleHighlight: 'Contato',
      subtitle: 'Vamos Conectar',
      description:
        'Estou sempre aberto para discutir novos projetos, ideias criativas ou oportunidades de fazer parte da sua visão.',
      email: 'E-mail',
      location: 'Localização',
      locationText: 'Disponível para oportunidades remotas',
      form: {
        name: 'Nome',
        namePlaceholder: 'Seu nome',
        email: 'E-mail',
        emailPlaceholder: 'seu.email@exemplo.com',
        message: 'Mensagem',
        messagePlaceholder: 'Sua mensagem...',
        send: 'Enviar Mensagem',
      },
    },
    footer: {
      rights: 'Todos os direitos reservados.',
    },
  },
  'en-US': {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      cta: 'Get In Touch',
    },
    about: {
      title: 'About',
      titleHighlight: 'Me',
    },
    skills: {
      title: 'Skills &',
      titleHighlight: 'Technologies',
    },
    experience: {
      title: 'Work',
      titleHighlight: 'Experience',
    },
    projects: {
      title: 'Featured',
      titleHighlight: 'Projects',
    },
    contact: {
      title: 'Get In',
      titleHighlight: 'Touch',
      subtitle: "Let's Connect",
      description:
        "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
      email: 'Email',
      location: 'Location',
      locationText: 'Available for remote opportunities',
      form: {
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'your.email@example.com',
        message: 'Message',
        messagePlaceholder: 'Your message...',
        send: 'Send Message',
      },
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
};

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations['en-US'];
