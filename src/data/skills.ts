export interface Tecnologia {
  nombre: string;
  claseIcono: string;
  imagenSrc?: string;
  claseImagen?: string;
}

export const tecnologias: Tecnologia[] = [
  {
    nombre: "React",
    claseIcono: "devicon-react-original colored",
  },
  {
    nombre: "TypeScript",
    claseIcono: "devicon-typescript-plain colored",
  },
  {
    nombre: "Python",
    claseIcono: "",
    imagenSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    nombre: "MySQL",
    claseIcono: "devicon-mysql-original colored",
  },
  {
    nombre: "Docker",
    claseIcono: "devicon-docker-plain colored",
  },
  {
    nombre: "Git",
    claseIcono: "devicon-git-plain colored",
  },
  {
    nombre: "JavaScript",
    claseIcono: "devicon-javascript-plain colored",
  },
  {
    nombre: "Figma",
    claseIcono: "devicon-figma-plain colored",
  },
  {
    nombre: "Astro",
    claseIcono: "",
    imagenSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-plain.svg",
    claseImagen: "icono-naranja",
  },
  {
    nombre: "FastAPI",
    claseIcono: "devicon-fastapi-plain colored",
  },
  {
    nombre: "Render",
    claseIcono: "",
    imagenSrc: "https://cdn.simpleicons.org/render/000000",
    claseImagen: "fondo-blanco-circular",
  },
  {
    nombre: "Django",
    claseIcono: "devicon-django-plain colored",
  },
  {
    nombre: "Github",
    claseIcono: "",
    imagenSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    claseImagen: "icono-blanco",
  },
  {
    nombre: "Vercel",
    claseIcono: "",
    imagenSrc: "https://cdn.simpleicons.org/vercel/000000",
    claseImagen: "fondo-blanco-circular",
  },
  
];
