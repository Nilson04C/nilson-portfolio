(function () {
  const root = document.documentElement;
  const themeButton = document.getElementById('theme-toggle');
  const langButton = document.getElementById('language-toggle');
  const menuButton = document.getElementById('menu-toggle');
  const siteNav = document.querySelector('.site-nav');

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
    if (themeButton) themeButton.textContent = theme === 'dark' ? '☼' : '◐';
  }

  const storedTheme = localStorage.getItem('portfolio-theme');
  applyTheme(storedTheme || 'light');

  themeButton?.addEventListener('click', () => {
    applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });

  const translations = {
    pt: {
      'nav.home': 'Início',
      'nav.about': 'Sobre',
      'nav.projects': 'Projetos',
      'nav.experience': 'Experiência',
      'nav.education': 'Formação',

      'common.seeAll': 'Ver todos os projetos →',
      'common.details': 'Ver mais detalhes',
      'common.readAbout': 'Saber mais sobre mim →',
      'common.skills': 'Competências',
      'common.gradeLabel': 'Nota',

      'hero.eyebrow': 'Licenciado em Engenharia Informática',
      'hero.h1': 'Desenvolvo, aprendo e resolvo problemas com tecnologia.',
      'hero.text': 'Sou o Nilson Cardoso, licenciado em Engenharia Informática, natural de Luanda, Angola, e atualmente a viver em Portugal. Este portefólio complementa o meu CV, com mais detalhe sobre os meus projetos, formação e experiência profissional.',
      'hero.status': 'Aberto a oportunidades',
      'hero.projects': 'Ver projetos',
      'hero.cv': 'Descarregar CV',

      'home.selectedWork': 'Trabalho selecionado',
      'home.projectsBuilt': 'Projetos que desenvolvi',
      'home.aboutMe': 'Sobre mim',
      'home.aboutHeadline': 'O meu percurso.',
      'home.about': 'Cresci em Luanda e mudei-me para Portugal aos 17 anos para estudar. Desde então, tenho conciliado os estudos com diferentes experiências profissionais e projetos desenvolvidos por conta própria.',
      'home.whatIWorkWith': 'Com o que trabalho',
      'home.inProgress': 'Em curso',

      'project.risk.short': 'Aplicação web com machine learning desenvolvida para apoiar a previsão de risco de abandono académico.',
      'project.travel.short': 'Plataforma web de sistemas distribuídos que liga viajantes a pessoas que precisam de enviar bens internacionalmente.',
      'project.cv.short': 'Extensão para o Chrome que explora a substituição virtual do nome de ficheiros durante uploads em páginas web.',

      'skills.programming': 'Programação',
      'skills.web': 'Web & APIs',
      'skills.data': 'Dados & Bases de Dados',
      'skills.tools': 'Ferramentas',
      'skills.note.programming': 'Confortável e com experiência prática',
      'skills.note.web': 'Experiência prática',
      'skills.note.data': 'Experiência variável consoante a ferramenta',
      'skills.note.tools': 'À vontade com a maioria · conhecimentos básicos de Docker',

      'contact.eyebrow': 'Vamos falar',
      'contact.headline': 'Aberto a conversas e oportunidades.',
      'contact.emailMe': 'Enviar email',

      'footer.role': 'Licenciado em Engenharia Informática',

      'about.h1': 'Um bocado sobre mim',
      'about.lead': 'Um olhar mais próximo sobre de onde venho, o que gosto de fazer e o meu percurso até aqui.',
      'about.p1': 'Chamo-me Nilson Cardoso. Cresci em Luanda, Angola, e mudei-me para Portugal aos 17 anos para estudar Engenharia Informática.',
      'about.p2': 'Aos 18 anos comecei a viver sozinho, enquanto continuava os estudos. Foi uma mudança importante e que me obrigou a ganhar autonomia e a adaptar-me a uma realidade diferente.',
      'about.p3': 'Fora da tecnologia, gosto de ir ao ginásio, tenho interesse por fotografia, já pratiquei artes marciais e atualmente estou a aprender piano.',
      'about.whoIAm': 'Quem sou',
      'about.fromLuanda': 'De Luanda para Portugal.',
      'about.timeline': 'Percurso',
      'about.milestones': 'Alguns marcos.',
      'about.tl1Title': 'Mudei-me para Portugal',
      'about.tl1Desc': 'Mudei-me de Luanda para Portugal para continuar os meus estudos.',
      'about.tl2Title': 'Comecei a viver sozinho',
      'about.tl2Desc': 'Comecei a viver sozinho enquanto estudava.',
      'about.tl3Title': 'Comecei a universidade',
      'about.tl3Desc': 'Comecei a licenciatura em Engenharia Informática na Universidade Lusófona do Porto.',
      'about.tl4Title': 'Concluí a licenciatura',
      'about.tl4Desc': 'Concluí a licenciatura em 2025, com o projeto final RiskTrack classificado com 18/20.',
      'about.outsideTech': 'Fora da tecnologia',
      'about.thingsIEnjoy': 'Coisas de que gosto.',
      'about.hobby1Title': 'Fotografia',
      'about.hobby1Desc': 'A fotografia foi um dos meus principais interesses durante alguns anos e continuo a apreciar o seu lado visual e criativo.',
      'about.hobby2Title': 'Treino',
      'about.hobby2Desc': 'O ginásio faz parte da minha rotina e é uma das formas como gosto de me manter ativo.',
      'about.hobby3Title': 'Artes marciais',
      'about.hobby3Desc': 'Pratiquei artes marciais durante algum tempo e gostava especialmente da disciplina e consistência que exigiam.',
      'about.hobby4Title': 'Piano',
      'about.hobby4Desc': 'Atualmente estou a aprender piano e a desenvolver esta capacidade aos poucos.',

      'edu.h1': 'Onde construí a minha base.',
      'edu.lead': 'A minha formação académica combina estudo formal com trabalho prático em projetos e formação técnica complementar.',
      'edu.dateRange': '2022 a 2025',
      'edu.degreeTitle': 'Licenciatura em Engenharia Informática',
      'edu.p1': 'Concluí a licenciatura com grande foco no trabalho prático em projetos, que combinaram desenvolvimento de software, dados, sistemas distribuídos e trabalho em equipa.',
      'edu.p2': 'O percurso incluiu projetos individuais e de grupo. O projeto final, RiskTrack, foi classificado com 18/20.',
      'edu.certsEyebrow': 'Certificações & formação',
      'edu.additionalLearning': 'Formação complementar.',
      'edu.cert1Title': 'Inglês B2.1',
      'edu.cert1Sub': 'Bristol School',
      'edu.cert2Title': 'Formação em COBOL',
      'edu.cert2Sub': 'Sinensia IT Solutions',
      'edu.cert3Title': 'Umbrella Programming Class',
      'edu.cert3Sub': 'DXC Technology · certificado de conclusão',
      'edu.cert4Title': 'Data Analytics Job Simulation',
      'edu.cert4Sub': 'Deloitte Australia',

      'exp.h1': 'Experiências diferentes.',
      'exp.lead': 'A minha experiência profissional abrange tanto trabalho ligado à tecnologia como funções fora da área, cada uma a contribuir com competências e perspetivas distintas.',
      'exp.cobolMeta1': '2025',
      'exp.cobolMeta2': 'Formação em mainframe',
      'exp.cobolTitle': 'Formação em COBOL',
      'exp.cobolDesc': 'Concluí um programa intensivo de desenvolvimento em mainframe, com foco em COBOL, JCL, VSAM e DB2, e prática com z/OS, ISPF, TSO e HOGAN. Trabalhei em exercícios estruturados e pequenos programas para construir uma base sólida em desenvolvimento de aplicações mainframe.',
      'exp.portwayMeta1': 'Sazonal',
      'exp.portwayMeta2': 'Aeroporto do Porto',
      'exp.portwayTitle': 'Assistente de Apoio a Passageiros',
      'exp.portwayDesc': 'Apoiei passageiros com mobilidade reduzida em todo o aeroporto, do check-in e controlo de segurança ao embarque e chegadas. Coordenei-me com as equipas do aeroporto e das companhias aéreas para manter o fluxo de passageiros, geri volumes elevados de pessoas sob pressão de tempo, e mantive uma comunicação clara e calma mesmo nos momentos de maior aperto.',
      'exp.sonaeMeta1': '6 meses no total',
      'exp.sonaeTitle': 'Funções de Armazém',
      'exp.sonaeDesc': 'Operei robôs de paletização e fiz cargas e descargas, tanto manualmente como com recurso a máquinas. Preparei paletes para transporte num armazém de produtos alimentares, seguindo as regras de higiene e qualidade.',
      'exp.mgesMeta1': '1 mês',
      'exp.mgesTitle': 'Assistente de Montagem de Equipamentos',
      'exp.mgesDesc': 'Ajudei a montar mais de dez elevadores automóveis na garagem de um edifício em construção. Tirei medidas, transportei peças e participei na montagem em equipa, com atenção à coordenação e segurança durante cada etapa.',
      'exp.vadecaMeta1': '2 meses',
      'exp.vadecaTitle': 'Assistente de Limpeza',
      'exp.vadecaDesc': 'Preparei produtos e material de limpeza e limpei escritórios e áreas comuns num ambiente de logística de grande escala.',

      'skill.communication': 'Comunicação',
      'skill.responsibility': 'Responsabilidade',
      'skill.teamwork': 'Trabalho em equipa',
      'skill.adaptability': 'Capacidade de adaptação',
      'skill.organisation': 'Organização',
      'skill.reliability': 'Confiabilidade',
      'skill.coordination': 'Coordenação',
      'skill.problemSolving': 'Resolução prática de problemas',
      'skill.attentionToDetail': 'Atenção ao detalhe',
      'skill.discipline': 'Disciplina',
      'skill.consistency': 'Consistência',

      'projects.lead': 'Uma seleção de projetos académicos e pessoais, desde machine learning e sistemas distribuídos até extensões para o browser.',
      'projects.h1': 'Trabalho para além do CV.',
      'projects.comingSoon': 'Brevemente',
      'projects.risktrack.intro': 'Projeto final de curso, individual, focado no uso de machine learning e análise de dados como apoio ao combate ao abandono académico.',
      'projects.risktrack.contextTitle': 'Contexto',
      'projects.risktrack.context': 'A aplicação foi desenvolvida em torno do problema de prever quais os estudantes em risco de abandono, com base em dados académicos históricos.',
      'projects.risktrack.approachTitle': 'Abordagem',
      'projects.risktrack.approach': 'CRISP-DM, análise exploratória de dados, preparação de dados, modelação com árvores de decisão, afinação de hiperparâmetros e avaliação do modelo.',
      'projects.risktrack.stackTitle': 'Stack',
      'projects.risktrack.stack': 'R, Shiny, caret, rpart, tidymodels, PostgreSQL, DBI, RPostgres, pool, DT, pheatmap e RStudio.',
      'projects.risktrack.resultsTitle': 'Resultados',
      'projects.risktrack.results': 'A avaliação final do modelo obteve 0,77 de balanced accuracy, 0,69 de F1-score, 0,68 de recall e 0,86 de especificidade.',
      'projects.risktrack.more1': 'A aplicação permite treinar o modelo, fazer validação cruzada opcional, tratar valores em falta, gerar previsões, exportar para CSV e gerir modelos e previsões guardados. Os modelos ficam guardados como ficheiros RDS, enquanto o PostgreSQL guarda os metadados associados.',
      'projects.risktrack.more2': 'O projeto incluiu também uma arquitetura C4, testes de acessibilidade e uma análise das limitações do modelo. O RF04 (validação de compatibilidade entre dataset e modelo) não chegou a ser concluído, e a validação formal de usabilidade não foi feita por limitações de tempo.',
      'projects.risktrack.more3': 'O modelo treinado vive dentro da própria aplicação, e não como um serviço à parte: é a mesma aplicação que trata do treino, da avaliação e da previsão. A árvore de decisão foi construída com o rpart e afinada por validação cruzada, com particular atenção ao recall na avaliação, já que não detetar um aluno em risco tem um custo maior do que um falso alarme.',
      'projects.travelex.intro': 'Projeto de grupo para a unidade curricular de Programação de Sistemas Distribuídos, pensado para digitalizar a prática informal de enviar bens através de viajantes.',
      'projects.travelex.roleTitle': 'A minha função',
      'projects.travelex.role': 'Backend Developer e gestão de projeto.',
      'projects.travelex.approachTitle': 'Abordagem',
      'projects.travelex.approach': 'Scrum, com seis sprints documentados a cobrir requisitos, ofertas, seleção, pagamentos e confirmação de entrega.',
      'projects.travelex.stackTitle': 'Stack',
      'projects.travelex.stack': 'React, TypeScript, Node.js, Express, Firebase, Firebase Authentication, Stripe Connect, CometChat e APIs externas de voos.',
      'projects.travelex.flowTitle': 'Fluxo principal',
      'projects.travelex.flow': 'O viajante publica uma oferta → o cliente seleciona-a → o pagamento fica retido → a entrega é confirmada → o pagamento é libertado.',
      'projects.travelex.more1': 'A plataforma valida voos através de uma API externa, usa o Firebase para autenticação e armazenamento de dados, e o Stripe Connect para os fluxos de pagamento, pensados em torno da confirmação de entrega. As considerações de segurança incluíram verificação de identidade, avaliações visíveis e dupla confirmação da entrega.',
      'projects.travelex.more2': 'O projeto foi desenvolvido em contexto académico e não chegou a ser validado com utilizadores reais. Trabalho futuro previa testes de usabilidade com utilizadores reais, mecanismos de segurança mais robustos e funcionalidades adicionais de acompanhamento.',
      'projects.travelex.more3': 'Antes de começar o desenvolvimento, explorei protótipos de interface para definir o aspeto da plataforma, com uma estética moderna mas não futurista, e focada em transmitir confiança entre desconhecidos a trocar dinheiro e encomendas.',
      'projects.cv.intro': 'Uma extensão para o Chrome que explora a substituição virtual do nome de ficheiros carregados através de formulários web.',
      'projects.jobResumer.title': 'Job Resumer Extension',
      'projects.jobResumer.intro': 'Uma extensão para o browser focada em ajudar a resumir descrições de vagas durante a procura de emprego.',
      'projects.cargaComigo.intro': 'Um projeto em desenvolvimento em torno de ligar viajantes a pessoas que precisam de enviar bens.'
    },
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.projects': 'Projects',
      'nav.experience': 'Experience',
      'nav.education': 'Education',

      'common.seeAll': 'See all projects →',
      'common.details': 'See more details',
      'common.readAbout': 'Read more about me →',
      'common.skills': 'Skills',
      'common.gradeLabel': 'Grade',

      'hero.eyebrow': 'Computer Science & Engineering Graduate',
      'hero.h1': 'I build, learn and solve problems with technology.',
      'hero.text': 'I’m Nilson Cardoso, a Computer Science and Engineering graduate based in Portugal. Originally from Luanda, Angola, I’m interested in technology, data and building things that solve practical problems.',
      'hero.status': 'Open to opportunities',
      'hero.projects': 'View projects',
      'hero.cv': 'Download CV',

      'home.selectedWork': 'Selected work',
      'home.projectsBuilt': 'Projects I\'ve built',
      'home.aboutMe': 'About me',
      'home.aboutHeadline': 'My journey.',
      'home.about': 'I grew up in Luanda and moved to Portugal at 17 to study. Since then, I\'ve combined university work with different professional experiences, while continuously building projects outside the classroom.',
      'home.whatIWorkWith': 'What I work with',
      'home.inProgress': 'In progress',

      'project.risk.short': 'Machine learning web application designed to support the prediction of academic dropout risk.',
      'project.travel.short': 'Distributed web platform connecting travellers with people who need to send goods internationally.',
      'project.cv.short': 'Chrome extension exploring virtual filename replacement for files uploaded through web forms.',

      'skills.programming': 'Programming',
      'skills.web': 'Web & APIs',
      'skills.data': 'Data & Databases',
      'skills.tools': 'Tools',
      'skills.note.programming': 'Comfortable with / hands-on experience',
      'skills.note.web': 'Hands-on experience',
      'skills.note.data': 'Experience varies by tool',
      'skills.note.tools': 'Comfortable with most · basic knowledge of Docker',

      'contact.eyebrow': 'Let\'s connect',
      'contact.headline': 'Open to conversations and opportunities.',
      'contact.emailMe': 'Email me',

      'footer.role': 'Computer Science and Engineering Graduate',

      'about.h1': 'A little more about me.',
      'about.lead': 'A closer look at where I come from, what I enjoy and the experiences that shaped me.',
      'about.p1': 'My name is Nilson Cardoso. I grew up in Luanda, Angola, and moved to Portugal at 17 to study Computer Science and Engineering.',
      'about.p2': 'At 18, I started living on my own while continuing my studies. It was an important change that pushed me to become more independent and adapt to a different environment.',
      'about.p3': 'Outside technology, I enjoy going to the gym, have an interest in photography, previously practised martial arts and am currently learning to play the piano.',
      'about.whoIAm': 'Who I am',
      'about.fromLuanda': 'From Luanda to Portugal.',
      'about.timeline': 'Timeline',
      'about.milestones': 'A few milestones.',
      'about.tl1Title': 'Moved to Portugal',
      'about.tl1Desc': 'Moved from Luanda to Portugal to continue my studies.',
      'about.tl2Title': 'Started living independently',
      'about.tl2Desc': 'Started living on my own while studying.',
      'about.tl3Title': 'Started university',
      'about.tl3Desc': 'Started studying Computer Science and Engineering at Universidade Lusófona do Porto.',
      'about.tl4Title': 'Graduated',
      'about.tl4Desc': 'Completed my degree and final-year project, RiskTrack, graded 18/20.',
      'about.outsideTech': 'Outside technology',
      'about.thingsIEnjoy': 'Things I enjoy.',
      'about.hobby1Title': 'Photography',
      'about.hobby1Desc': 'Photography was one of my main interests for several years, and I still enjoy its visual and creative side.',
      'about.hobby2Title': 'Training',
      'about.hobby2Desc': 'Going to the gym is part of my routine and one of the ways I like to stay active.',
      'about.hobby3Title': 'Martial arts',
      'about.hobby3Desc': 'I practised martial arts for some time and particularly enjoyed the discipline and consistency they required.',
      'about.hobby4Title': 'Piano',
      'about.hobby4Desc': 'I am currently learning to play piano and gradually building my skills.',

      'edu.h1': 'My education.',
      'edu.lead': 'My academic background combines formal study with practical project work and additional technical training.',
      'edu.dateRange': '2022 to 2025',
      'edu.degreeTitle': 'BSc in Computer Science and Engineering',
      'edu.p1': 'I completed my degree with a strong emphasis on practical project work, combining software development, data, distributed systems and collaborative work.',
      'edu.p2': 'My university work included individual and group projects, with the final-year project RiskTrack receiving a grade of 18/20.',
      'edu.certsEyebrow': 'Certifications & training',
      'edu.additionalLearning': 'Additional learning.',
      'edu.cert1Title': 'English B2.1',
      'edu.cert1Sub': 'Bristol School',
      'edu.cert2Title': 'COBOL Training',
      'edu.cert2Sub': 'Sinensia IT Solutions',
      'edu.cert3Title': 'Umbrella Programming Class',
      'edu.cert3Sub': 'DXC Technology · completion certificate',
      'edu.cert4Title': 'Data Analytics Job Simulation',
      'edu.cert4Sub': 'Deloitte Australia',

      'exp.h1': 'Different experiences.',
      'exp.lead': 'My professional experience has covered both technology-related work and roles outside the field, each contributing different skills and perspectives.',
      'exp.cobolMeta1': '2025',
      'exp.cobolMeta2': 'Mainframe training',
      'exp.cobolTitle': 'COBOL Training',
      'exp.cobolDesc': 'Completed an intensive mainframe development programme covering COBOL, JCL, VSAM and DB2, with hands-on practice in z/OS, ISPF, TSO and HOGAN. Worked through structured exercises and small programs to build a foundation in mainframe application development.',
      'exp.portwayMeta1': 'Seasonal',
      'exp.portwayMeta2': 'Porto Airport',
      'exp.portwayTitle': 'Passenger Assistance Agent',
      'exp.portwayDesc': 'Assisted passengers with reduced mobility throughout the airport, from check-in and security to boarding and arrivals. Coordinated with airport and airline staff to keep passenger flow smooth, managed high passenger volumes under time pressure, and communicated clearly and calmly in high-stress situations.',
      'exp.sonaeMeta1': '6 months total',
      'exp.sonaeTitle': 'Warehouse Roles',
      'exp.sonaeDesc': 'Operated palletising robots and wrapped pallets with stretch film, and handled loading and unloading both manually and with machinery. Prepared pallets for transport in a food-industry warehouse, following strict hygiene and quality standards throughout.',
      'exp.mgesMeta1': '1 month',
      'exp.mgesTitle': 'Equipment Assembly Assistant',
      'exp.mgesDesc': 'Helped assemble more than ten vehicle lift systems in the garage of a building under construction. Took measurements, transported parts and helped with assembly as part of a team, with close attention to coordination and safety throughout each stage.',
      'exp.vadecaMeta1': '2 months',
      'exp.vadecaTitle': 'Cleaning Assistant',
      'exp.vadecaDesc': 'Prepared cleaning products and supplies and cleaned offices and common areas in a large-scale logistics environment.',

      'skill.communication': 'Communication',
      'skill.responsibility': 'Responsibility',
      'skill.teamwork': 'Teamwork',
      'skill.adaptability': 'Adaptability',
      'skill.organisation': 'Organisation',
      'skill.reliability': 'Reliability',
      'skill.coordination': 'Coordination',
      'skill.problemSolving': 'Practical problem-solving',
      'skill.attentionToDetail': 'Attention to detail',
      'skill.discipline': 'Discipline',
      'skill.consistency': 'Consistency',

      'projects.lead': 'A selection of academic and personal projects, from machine learning and distributed systems to browser extensions.',
      'projects.h1': 'Work beyond the CV.',
      'projects.comingSoon': 'Coming soon',
      'projects.risktrack.intro': 'Individual final-year project focused on using machine learning and data analysis to address academic dropout.',
      'projects.risktrack.contextTitle': 'Context',
      'projects.risktrack.context': 'The application was developed around the problem of predicting which students may be at risk of dropping out, using historical academic data.',
      'projects.risktrack.approachTitle': 'Approach',
      'projects.risktrack.approach': 'CRISP-DM, exploratory data analysis, data preparation, decision-tree modelling, hyperparameter tuning and model evaluation.',
      'projects.risktrack.stackTitle': 'Stack',
      'projects.risktrack.stack': 'R, Shiny, caret, rpart, tidymodels, PostgreSQL, DBI, RPostgres, pool, DT, pheatmap and RStudio.',
      'projects.risktrack.resultsTitle': 'Results',
      'projects.risktrack.results': 'Final model evaluation included 0.77 balanced accuracy, 0.69 F1-score, 0.68 recall and 0.86 specificity.',
      'projects.risktrack.more1': 'The application supports model training, optional cross-validation, handling of missing values, prediction, CSV export and management of stored models and predictions. Models are stored as RDS files, while PostgreSQL stores related metadata.',
      'projects.risktrack.more2': 'The project also included a C4 architecture, accessibility testing and analysis of model limitations. RF04 (dataset/model compatibility validation) was not completed, and formal usability validation was not carried out due to time constraints.',
      'projects.risktrack.more3': 'The trained model lives inside the app itself rather than as a separate service: the same application handles training, evaluation and prediction. The decision tree was built with rpart and tuned via cross-validation, with particular weight given to recall during evaluation, since missing an at-risk student is more costly than a false alarm.',
      'projects.travelex.intro': 'Group project for Distributed Systems Programming, designed to formalise the informal practice of sending goods through travellers.',
      'projects.travelex.roleTitle': 'My role',
      'projects.travelex.role': 'Backend Developer and Project Manager.',
      'projects.travelex.approachTitle': 'Approach',
      'projects.travelex.approach': 'Scrum with six documented sprints covering requirements, offers, selection, payments and delivery confirmation.',
      'projects.travelex.stackTitle': 'Stack',
      'projects.travelex.stack': 'React, TypeScript, Node.js, Express, Firebase, Firebase Authentication, Stripe Connect, CometChat and external flight APIs.',
      'projects.travelex.flowTitle': 'Core flow',
      'projects.travelex.flow': 'Traveller posts an offer → customer selects it → payment is held → delivery is completed → payment is released.',
      'projects.travelex.more1': 'The platform validates flights through an external API, uses Firebase for authentication and data storage, and uses Stripe Connect for payment flows designed around delivery confirmation. Security considerations included identity checks, visible ratings and double confirmation of delivery.',
      'projects.travelex.more2': 'The project was developed in an academic setting and was not validated with real users. Future work included real-world usability testing, stronger security mechanisms and additional tracking features.',
      'projects.travelex.more3': 'Before development started, I explored UI mockups to work through the platform\'s look and feel, aiming for something modern but not futuristic, and focused on building trust between strangers exchanging money and packages.',
      'projects.cv.intro': 'A Chrome extension exploring virtual filename replacement for files uploaded through web forms.',
      'projects.jobResumer.title': 'Job Resumer Extension',
      'projects.jobResumer.intro': 'A browser extension focused on helping summarise job descriptions during job-search workflows.',
      'projects.cargaComigo.intro': 'A project in development around connecting travellers with people who need to send goods.'
    }
  };

  let language = localStorage.getItem('portfolio-language') || 'en';

  function applyLanguage(lang) {
    language = lang;
    localStorage.setItem('portfolio-language', lang);
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      const value = translations[lang]?.[key];
      if (value) element.textContent = value;
    });
    if (langButton) langButton.textContent = lang === 'en' ? 'PT' : 'EN';
  }

  applyLanguage(language);
  langButton?.addEventListener('click', () => applyLanguage(language === 'en' ? 'pt' : 'en'));

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav]').forEach((link) => {
    if (link.getAttribute('href') === currentPath) link.classList.add('active');
  });

  document.getElementById('year')?.replaceChildren(String(new Date().getFullYear()));

  menuButton?.addEventListener('click', () => {
    const isOpen = siteNav?.classList.toggle('open');

    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    menuButton.textContent = isOpen ? '×' : '☰';
  });

  siteNav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      menuButton?.setAttribute('aria-expanded', 'false');
      menuButton?.setAttribute('aria-label', 'Open menu');

      if (menuButton) menuButton.textContent = '☰';
    });
  });

})();