export const links = [
  { to: '/#home', label: 'Home' },
  { to: '/#sobre', label: 'Sobre' },
  { to: '/#projetos', label: 'Projetos' },
  { to: '/#contato', label: 'Fale comigo' },
]

export const skills = [
  'HTML5', 'CSS3', 'JavaScript', 'PHP', 'Laravel', 'Vue.js', 'React.js', 'Node.js',
  'Bootstrap', 'Tailwind CSS', 'MySQL', 'Docker', 'Inteligência Artificial',
]

// Para usar a capa de um projeto, coloque a imagem em public/img/ e informe em "image" (ex.: '/img/2.jpeg').
export const projects = [
  { title: 'Landing page de clínica', icon: '🩺', grad: 'from-teal-600/40 to-cyan-900/40', image: null,
    desc: 'Landing page voltada ao agendamento de consultas de uma clínica.',
    tags: ['HTML', 'CSS', 'JavaScript'], url: 'https://ramonchuinca.github.io/trabalho_faculdade_land_page-/' },
  { title: 'Tema Natureza', icon: '🌿', grad: 'from-green-600/40 to-emerald-900/40', image: null,
    desc: 'Projeto de interface com tema voltado à natureza.',
    tags: ['HTML', 'CSS'], url: 'https://ramonchuinca.github.io/Tema-Natureza/' },
  { title: 'Quiz de programação', icon: '🧠', grad: 'from-sky-600/40 to-blue-900/40', image: null,
    desc: 'Quiz interativo sobre programação feito com React.',
    tags: ['React', 'JavaScript'], url: 'https://quiz-react-htm-css-javascript.netlify.app/' },
  { title: 'Sistema de gestão', icon: '📋', grad: 'from-violet-600/40 to-indigo-900/40', image: null,
    desc: 'Sistema para gerenciamento e criação de projetos.',
    tags: ['Vue.js', 'Node.js'], url: 'https://gestaodeprogetos.netlify.app/' },
  { title: 'Conversor de moedas', icon: '💱', grad: 'from-amber-600/40 to-orange-900/40', image: null,
    desc: 'Converta valores entre diferentes moedas.',
    tags: ['React Native'], url: 'https://conversordemo.netlify.app/' },
]

export const socials = [
  { name: 'WhatsApp', url: 'https://wa.me/69993702152', cls: 'bg-green-600' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ramon-chuinca/', cls: 'bg-blue-600' },
  { name: 'GitHub', url: 'https://github.com/ramonchuinca', cls: 'bg-slate-700' },
]
