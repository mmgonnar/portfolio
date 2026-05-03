export const enTranslations = {
  data: {
    name: 'Mariela Gonzalez',
    profesion: '<Fullstack Web Developer />',
  },
  navigation: {
    aboutMe: 'about me',
    projects: 'projects',
    curriculum: 'resume',
    contact: 'contact',
  },
  button: {
    switchDesign: 'switch design',
    contact: 'contact me ;)',
    knowMeBetter: 'Know me better',
    submit: 'submit',
    sending: 'sending...',
    beginTheBrief: 'Begin the brief >',
    continue: 'Continue >',
    back: 'Back',
    next: 'Next',
  },
  language: {
    changeLanguage: 'change language',
    en: 'inglés',
    es: 'español',
  },
  bannerText: {
    helloWorld: 'Hello world! I am',
    description:
      'Fullstack Web Developer Jr. with 2 years of experience in web development (MERN Stack, Next.js, React, Node.js,MongoDB, Express) and 5 years in web design and UX/UI, blending technical and creative skills to deliver scalable, user-centric digital solutions. ',
    findMe: 'Find me in:',
  },
  aboutMe: {
    title: 'About me',
    description:
      'After years as an educator and digital consultant constantly optimizing processes, I discovered my true calling in tech. Web development became the perfect intersection where my problem-solving curiosity meets the balance between creative vision and technical logic.',
  },
  skills: {
    title: 'Skills',
    text: 'Technical expertise focused on building scalable digital products, with a strong emphasis on user experience and software architecture.',
    uiDesign: 'ui/design',
    front: 'frontend',
    back: 'backend',
    other: 'tools',
    design:
      'Created user-centric visual interfaces, with experience in graphic design and digital prototyping',
    frontend:
      'Development of dynamic and responsive interfaces, optimized for accessibility and performance.',
    backend: 'Building scalable APIs and managing databases for robust applications.',
    tools: 'Version control, API testing, and content management for complete projects.',
  },
  projects: {
    title: 'Featured Projects',
    description:
      'A curated selection of digital solutions built with a full-stack mindset. From robust server-side architecture to intuitive user interfaces, always prioritizing scalability, performance, and an exceptional user experience.',
    projectDescription: {
      classaid:
        'Educational platform to optimize class management, attendance tracking, and teacher workflow efficiency.',
      around:
        'Interactive social network for sharing locations through a dynamic content management system.',
      highschool:
        'Modern institutional website for High School No. 4, optimizing academic communication and information delivery.',
      portfolio:
        'A high-performance distributed system combining a Next.js 15 frontend with a Python-based FastAPI backend and Supabase cloud storage.',
    },
    checkSite: 'Check Site',
    projectTitle: {
      classAid: 'ClassAid',
      around: 'Web Project Around Us',
      highschool: "'Pablo Neruda' Highschool No. 4",
      portfolio: 'Portfolio UI',
    },
    features: {
      classaid: {
        f1: 'Next.js 14 and MongoDB Atlas architecture for scalable data management.',
        f2: 'Responsive Tailwind CSS interface with advanced loading states and modular logic.',
      },
      around: {
        f1: 'React 19 and Node.js stack featuring secure JWT token-based authentication.',
        f2: 'Optimized Vite frontend with protected routes and integrated data validation.',
      },
      highschool: {
        f1: 'Feature-based architecture using Next.js 15, React 19, and robust TypeScript integration.',
        f2: 'Modular interface with Shadcn UI, reusable components, and mobile-first responsive design.',
      },
      portfolio: {
        f1: 'Distributed architecture: Next.js 15 frontend integrated with a Python (FastAPI) backend.',
        f2: 'Scalable ecosystem featuring multi-language i18n, strict TypeScript typing, and Supabase persistence.',
      },
    },
  },

  contact: {
    title: 'Contact',
    description:
      'Have an idea? Let’s bring it to life. Technical collaboration focused on transforming complex concepts into scalable digital products, clean architectures, and seamless user experiences.',
  },
  form: {
    heading: '// Send a message',
    name: 'name',
    namePlaceholder: 'Your name',
    email: 'email',
    emailPlaceholder: 'your@email.com',
    message: 'message',
    messagePlaceholder: 'Tell me about your project...',
    footerCopy: 'I usually reply faster than npm i',
    errors: {
      error_name_short: 'Name is too short',
      error_email_invalid: 'Introduce a valid email',
      error_message_short: 'The message needs to be at least 10 characteres',
      error_project: 'Project type is required',
      error_goals: 'Please be a bit more descriptive about your goals',
    },
  },
  toast: {
    sending: 'Sending message...',
    success_msg: "Message sent! I'll get back to you soon",
    error_msg: 'Something went wrong. Please try again.',
  },
  brief: {
    tag: '< Web Design Brief />',
    title: 'A quiet conversation about your ',
    titleAccent: 'project',
    description:
      "I listen carefully before I propose. Take eight unhurried minutes to share more details about your project. I'll respond with a tailored approach.",
    minutes: '~8 MINUTES',
    confidential: 'CONFIDENTIAL',
    step: 'Step',
    of: 'of',
    introCards: [
      {
        one: { title: 'You', desc: 'Contact info' },
        two: { title: 'Project', desc: 'Type & goals' },
        three: { title: 'Scope', desc: 'Features' },
        four: { title: 'Investment', desc: 'Budget & timeline' },
        five: { title: 'Confirm', desc: 'Review & submit' },
      },
    ],
    steps: {
      step1: {
        name: 'What´s your Name?',
        namePlaceholder: 'Enter your full name',
        email: 'How can I reach you?',
        emailPlaceholder: 'Enter your email address',
        project: 'And your company or brand?',
        projectPlaceholder: 'Enter your company or project name (Optional)',
      },
      step2: {
        title: 'What type of project are you looking for?',
        description: 'Select the option that best describes your needs',
        options: {
          website: { title: 'Website', desc: 'Corporate, portfolio or informational site' },
          web_app: { title: 'Web Application', desc: 'Complex functionality & user interactions' },
          wordpress: {
            title: 'Wordpress Website',
            desc: 'Self-managed site with Wordpress',
          },
          landing: { title: 'Landing Page', desc: 'Single-page conversion focused' },
          redesign: { title: 'Redesign', desc: 'Refresh an existing digital product' },
          other: { title: 'Other', desc: 'Something unique in mind' },
        },
      },
      step3: {
        title: 'Which features do you need?',
        description:
          "Select all that apply. If you're unsure what a term means or need something different, feel free to contact me",
        selectedLabel: 'Selected',
        options: {
          cms: { title: 'Content Management', desc: 'Edit content yourself' },
          auth: { title: 'User Authentication', desc: 'Login & accounts' },
          payments: { title: 'Payment Processing', desc: 'Accept online payments' },
          analytics: { title: 'Analytics & Tracking', desc: 'Monitor performance' },
          seo: { title: 'SEO Optimization', desc: 'Search engine visibility' },
          multi_language: { title: 'Multi-language', desc: 'Multiple language support' },
          integrations: {
            title: 'Third-party Integrations',
            desc: 'Connect with external services',
          },
          mobile: { title: 'Mobile-first Design', desc: 'Optimized for all devices' },
        },
      },
      step4: {
        title: 'Tell me about your vision.',
        description: 'Describe your project, goals, and any specific requirements',
        placeholder: 'My project is about...',
        counter: 'minimum characters',
      },
      step5: {
        title: 'Any websites or designs that inspire you?',
        description: "Share URLs or describe the aesthetic you're aiming for",
        placeholder: 'https://example.com - I love the clean layout...',
        counter: 'minimum characters',
      },
      step6: {
        title: "What's your budget range? (uds)",
        description: 'This helps us tailor the right solution for you',
        ranges: {
          r1: '$1K - $3K',
          r2: '$3K - $5K',
          r3: '$5K - $10K',
          r4: '$10K - $25K',
          r5: '$25K+',
        },
      },
      step7: {
        title: 'When do you need this completed?',
        description: 'Select your ideal timeline',
        options: {
          asap: { title: 'ASAP', desc: 'As soon as possible' },
          one_month: { title: '1 Month', desc: 'Within 4 weeks' },
          two_three_months: { title: '2-3 Months', desc: 'Standar timeline' },
          flexible: { title: 'Flexible', desc: 'No strict timeline' },
        },
      },
      step8: {
        title: 'Have any files to share?',
        description: 'Upload logos, brand guidelines, wireframes, or reference images',
        dropzone: {
          title: 'Drag & Drop',
          subtitle: 'or click to browse',
          info: 'Images, PDFs, Documents (Max 10MB each)',
        },
      },
      step9: {},
      step10: {},
      step11: {},
    },
  },
};

//! Spanish Translation starts here

export const esTranslations = {
  data: {
    name: 'Mariela González',
    profesion: '<Desarrolladora Web Fullstack />',
  },
  navigation: {
    aboutMe: 'sobre mi',
    projects: 'proyectos',
    curriculum: 'currículum',
    contact: 'contacto',
  },
  button: {
    switchDesign: 'rediseñar web',
    contact: 'contáctame ;)',
    knowMeBetter: 'Conóceme mejor',
    submit: 'enviar',
    sending: 'enviando...',
    beginTheBrief: 'Iniciar el brief >',
    continue: 'Continuar >',
    back: 'Atrás',
    next: 'Siguiente',
  },
  language: {
    changeLanguage: 'cambiar idioma',
    en: 'english',
    es: 'spanish',
  },
  bannerText: {
    helloWorld: '¡Hola mundo! Soy',
    description:
      'Desarrolladora Web Fullstack Jr. con 2 años de experiencia en desarrollo web y 5 años en diseño web y UX/UI, combinando lo técnico con lo creativo para entregar soluciones digitales escalables y centradas en el usuario.',
    findMe: 'Encuéntrame en:',
  },
  aboutMe: {
    title: 'Acerca de mi',
    description:
      'Decidí entrar al mundo tech después de varios años como docente y consultora digital, donde siempre buscaba herramientas para simplificar procesos. Mi curiosidad por resolver problemas me llevó al desarrollo web, donde encontré el equilibrio entre creatividad y lógica.',
  },
  skills: {
    title: 'Habilidades',
    text: 'Especialización técnica enfocada en la creación de productos digitales escalables, con un fuerte énfasis en la experiencia de usuario y arquitectura de software.',
    uiDesign: 'ui/diseño',
    front: 'frontend',
    back: 'backend',
    other: 'herramientas',
    design:
      'Creación de interfaces visuales centradas en el usuario, con experiencia en diseño gráfico y prototipado digital.',
    frontend:
      'Desarrollo de interfaces dinámicas y responsivas, optimizadas para accesibilidad y rendimiento.',
    backend:
      'Construcción de APIs escalables y manejo de bases de datos para aplicaciones robustas.',
    tools: 'Control de versiones, pruebas de APIs y gestión de contenido para proyectos completos.',
  },
  projects: {
    title: 'Proyectos Destacados',
    description:
      'Una selección de soluciones digitales desarrolladas con un enfoque integral. Desde la arquitectura del lado del servidor hasta interfaces de usuario intuitivas, priorizando siempre la escalabilidad, el rendimiento y una experiencia de usuario excepcional.',
    projectDescription: {
      classaid:
        'Plataforma educativa para optimizar la gestión de clases, asistencia y seguimiento del progreso docente.',
      around:
        'Red social interactiva para compartir locaciones mediante un sistema de contenido dinámico.',
      highschool:
        'Sitio institucional moderno para la Preparatoria No. 4, optimizando la comunicación y difusión académica.',
      portfolio:
        'Sistema distribuido de alto rendimiento que combina un frontend en Next.js 15 con un backend en Python (FastAPI) y almacenamiento en Supabase.',
    },
    checkSite: 'Visitar Sitio',
    projectTitle: {
      classAid: 'ClassAid',
      around: 'Proyecto Web Around Us',
      highschool: "Preparatoria No.4 'Pablo Neruda'",
      portfolio: 'Portafolio UI',
    },
    features: {
      classaid: {
        f1: 'Arquitectura Fullstack con Next.js 14 y MongoDB Atlas para una gestión de datos escalable.',
        f2: 'Interfaz responsiva en Tailwind CSS con estados de carga optimizados y lógica modular.',
      },
      around: {
        f1: 'Stack React 19 y Node.js con autenticación segura mediante tokens JWT.',
        f2: 'Frontend optimizado con Vite, rutas protegidas y validación de datos integrada.',
      },
      highschool: {
        f1: 'Arquitectura basada en features utilizando Next.js 15, React 19 y TypeScript.',
        f2: 'Interfaz modular con Shadcn UI, componentes reutilizables y diseño mobile-first responsivo.',
      },
      portfolio: {
        f1: 'Arquitectura distribuida: Frontend en Next.js 15 integrado con un backend en Python (FastAPI).',
        f2: 'Ecosistema escalable con soporte multiidioma i18n, tipado estricto con TypeScript y persistencia en Supabase.',
      },
    },
  },
  contact: {
    title: 'Contacto',
    description:
      '¿Tienes una idea? Démosle vida. Colaboración técnica centrada en transformar conceptos complejos en productos digitales escalables, arquitecturas limpias y experiencias de usuario fluidas.',
  },
  form: {
    heading: '// Envía un mensaje',
    name: 'nombre',
    namePlaceholder: '¿Cómo te llamas?',
    email: 'correo',
    emailPlaceholder: 'tu@correo.com',
    message: 'Mensaje',
    messagePlaceholder: 'Cuéntame sobre tu proyecto...',
    footerCopy: 'Respondo más rápido que un npm i',
    errors: {
      error_name_short: 'El nombre es demasiado corto',
      error_email_invalid: 'Introduce un correo válido',
      error_message_short: 'El mensaje debe tener al menos 10 caracteres',
    },
  },
  toast: {
    sending: 'Enviando mensaje...',
    success_msg: '¡Mensaje enviado! Te contactaré pronto.',
    error_msg: 'Algo salió mal. Inténtalo de nuevo.',
  },
  brief: {
    tag: '< Brief Diseño Web />',
    title: 'Conversemos un poco  sobre tu ',
    titleAccent: 'proyecto',
    description:
      'Te leo cuidadosamente antes de proponer. Tómate unos minutos para compartir más detalles sobre tu proyecto. Responderé con un enfoque a medida.',
    minutes: '~8 MINUTOS',
    confidential: 'CONFIDENCIAL',
    step: 'Paso',
    of: 'de',
    introCards: [
      {
        one: { title: 'Tú', desc: 'Información de contacto' },
        two: { title: 'Proyecto', desc: 'Tipo y objetivos' },
        three: { title: 'Alcance', desc: 'Funcionalidades' },
        four: { title: 'Inversión', desc: 'Presupuesto y tiempo' },
        five: { title: 'Confirmar', desc: 'Revisar y enviar' },
      },
    ],
    steps: {
      step1: {
        name: '¿Cúal es tu nombre?',
        namePlaceholder: 'Ingresa tu nombre completo',
        email: '¿Cómo te puedo contactar?',
        emailPlaceholder: 'Ingresa tu correo',
        project: '¿Cómo se llama tu negocio o proyecto?',
        projectPlaceholder: 'Ingresa el nombre de tu negocio o proyecto (Opcional)',
      },
      step2: {
        title: '¿Qué tipo de proyecto buscas?',
        description: 'Selecciona la opción que mejor describa tus necesidades',
        options: {
          website: { title: 'Website', desc: 'Sitio corporativo, portafolio o informativo' },
          web_app: {
            title: 'Web Application',
            desc: 'Funcionalidad compleja e interacción de usuario',
          },
          wordpress: {
            title: 'Sitio en Wordpress',
            desc: 'Sitio autogestionable en Wordpress',
          },
          landing: { title: 'Landing Page', desc: 'Una sola página enfocado en conversión' },
          redesign: { title: 'Redesign', desc: 'Refrescar un producto digital existente' },
          other: { title: 'Other', desc: 'Algo único en mente' },
        },
      },
      step3: {
        title: '¿Qué funcionalidades necesitas?',
        description:
          'Selecciona todas las que apliquen. Si no estás seguro de qué significa algún término o necesitas algo diferente, no dudes en escribirme.',
        selectedLabel: 'Selected',
        options: {
          cms: { title: 'Gestión de Contenidos', desc: 'Edita el contenido tú mismo' },
          auth: { title: 'Autenticación de Usuario', desc: 'Login y cuentas de usuario' },
          payments: { title: 'Pasarela de Pagos', desc: 'Acepta pagos en línea' },
          analytics: { title: 'Analytics & Tracking', desc: 'Monitorea el rendimiento' },
          seo: { title: 'Optimización SEO', desc: 'Visibilidad en buscadores' },
          multi_language: { title: 'Multi-lenguaje', desc: 'Soporte para múltiples idiomas' },
          integrations: {
            title: 'Integraciones de terceros',
            desc: 'Conexión con servicios externos',
          },
          mobile: { title: 'Diseño Mobile-first', desc: 'Optimizado para todos los dispositivos' },
        },
      },
      step4: {
        title: 'Cuéntame tu visión',
        description:
          'Describe tu proyecto, objetivos y cualquier requerimiento específico que tengas en mente.',
        placeholder: 'Mi proyecto trata sobre...',
        counter: 'caracteres mínimos',
      },
      step5: {
        title: '¿Hay sitios web o diseños que te inspiren?',
        description: 'Comparte las URL o describe el estilo que buscas.',
        placeholder: 'https://example.com - Me gusta la estructura...',
        counter: 'caracteres mínimos',
      },
      step6: {
        title: '¿Cuál es tu rango de presupuesto (MXN)?',
        description:
          'Esto me ayuda a proponer la solución tecnológica y de diseño más adecuada para ti.',
        ranges: {
          r1: '$10K - $15K',
          r2: '$15K - $20K',
          r3: '$20K - $25K',
          r4: '$25K - $30K',
          r5: '$30K+',
        },
      },
      step7: {
        title: '¿Para cuándo lo necesitas?',
        description: 'Selecciona tu cronograma ideal',
        options: {
          asap: { title: 'ASAP', desc: 'Lo más pronto posible' },
          one_month: { title: '1 Mes', desc: 'En las próximas 4 semanas' },
          two_three_months: { title: '2-3 Meses', desc: 'Tiempo estándar' },
          flexible: { title: 'Flexible', desc: 'Sin fecha límite estricta' },
        },
      },
      step8: {
        title: '¿Tienes archivos para compartir?',
        description: 'Sube logos, manuales de marca, wireframes o imágenes de referencia.',
        dropzone: {
          title: 'Arrastra y suelta archivos',
          subtitle: 'o haz clic para buscar',
          info: 'Imágenes, PDFs, Documentos (Max 10MB cada uno)',
        },
      },
      step9: {},
      step10: {},
      step11: {},
    },
  },
};
