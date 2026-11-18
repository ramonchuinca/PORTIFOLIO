export const links = [
  { to: "/#home", label: "Home" },
  { to: "/#sobre", label: "Sobre" },
  { to: "/#projetos", label: "Projetos" },
  { to: "/#contato", label: "Fale comigo" },
];

export const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "PHP",
  "Laravel",
  "Vue.js",
  "React.js",
  "Node.js",
  "Bootstrap",
  "Tailwind CSS",
  "MySQL",
  "Docker",
  "Inteligência Artificial",
];

// Para adicionar um projeto, inclua um objeto nesta lista.
// - image: screenshot em public/img/projetos/ (ex.: '/img/projetos/nome.jpg', proporção 16:9). Sem imagem, o card usa um fundo colorido (grad).
// - category: usada nos filtros da seção. Categorias novas aparecem sozinhas.
// - repo: opcional, mostra o link "Código" no card.
export const projects = [
  {
    title: "Tema Natureza",
    category: "Site",
    grad: "from-emerald-500/50 to-green-950",
    image: "/img/projetos/natureza.jpg",
    desc: "Site sobre fauna, plantas e rios da Amazônia, com animações de rolagem e partículas.",
    tags: ["Vue.js", "Tailwind", "GSAP"],
    url: "https://naturezatema.netlify.app/",
    repo: "https://github.com/ramonchuinca/Tema-Natureza",
  },
  {
    title: "Sistema de gestão",
    category: "Aplicação web",
    grad: "from-violet-500/50 to-indigo-950",
    image: "/img/projetos/gestao.jpg",
    desc: "Cadastro de grupos, unidades e colaboradores, com validação de CPF e CNPJ e exportação para Excel.",
    tags: ["Vue.js", "Node.js"],
    url: "https://gestaodeprogetos.netlify.app/",
  },
  {
    title: "Quiz de programação",
    category: "Aplicação web",
    grad: "from-fuchsia-500/50 to-purple-950",
    image: "/img/projetos/quiz.jpg",
    desc: "Quiz interativo com perguntas sobre programação.",
    tags: ["React", "JavaScript"],
    url: "https://quiz-react-htm-css-javascript.netlify.app/",
  },
  {
    title: "Conversor de moedas",
    category: "Aplicação web",
    grad: "from-sky-500/50 to-blue-950",
    image: "/img/projetos/conversor.jpg",
    desc: "Converte valores entre USD, BRL, EUR, GBP e outras moedas.",
    tags: ["React Native"],
    url: "https://conversordemo.netlify.app/",
  },
  {
    title: "Vitalis Clínica",
    category: "Aplicação web",
    grad: "from-teal-500/50 to-cyan-950",
    image: "/img/projetos/clinica.jpg",
    desc: "Agendamento de consultas: o paciente escolhe serviço, médico e horário, e a recepção confirma e conversa por chat.",
    tags: ["React", "TypeScript", "Node.js", "MongoDB"],
    url: "https://aagendamentoclinica.netlify.app/",
    repo: "https://github.com/ramonchuinca/trabalho_faculdade_land_page-",
  },
];

export const socials = [
  { name: "WhatsApp", url: "https://wa.me/69993702152", cls: "bg-green-600" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ramon-chuinca/",
    cls: "bg-blue-600",
  },
  {
    name: "GitHub",
    url: "https://github.com/ramonchuinca",
    cls: "bg-slate-700",
  },
];
