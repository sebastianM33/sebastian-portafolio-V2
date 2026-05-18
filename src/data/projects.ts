import type { ImageMetadata } from 'astro';
import dragImage from '../assets/image.png';
import imageWeather from '../assets/weather.png';

export interface Proyecto {
  titulo: string;
  descripcion: string;
  tecnologiasUtilizadas: string[];
  enlaceGithub: string;
  enlaceDemo: string;
  imagenIlustrativa: string | ImageMetadata;
}

export const proyectos: Proyecto[] = [
  {
    titulo: "Drag and Drop Builder",
    descripcion: "Constructor visual interactivo desarrollado con html y javascript que permite la gestión dinámica de elementos mediante una interfaz intuitiva de arrastrar y soltar.",
    tecnologiasUtilizadas: ["JavaScript", "HTML", "Tailwind CSS"],
    enlaceGithub: "https://github.com/sebastianM33/Drag_and_Drop",
    enlaceDemo: "https://drag-and-drop-eosin-sigma.vercel.app/",
    imagenIlustrativa: dragImage
  },
  {
    titulo: "Task Manager",
    descripcion: "Aplicación de gestión de tareas con autenticación, colaboración en tiempo real.",
    tecnologiasUtilizadas: ["JavaScript", "API REST", "CSS"],
    enlaceGithub: "https://github.com/tuusuario/task-manager",
    enlaceDemo: "https://task-manager.vercel.app",
    imagenIlustrativa: "img/task-manager.jpg",
  },
  {
    titulo: "Weather Dashboard",
    descripcion: "Dashboard meteorológico interactivo para consultar el clima global en tiempo real, equipado con mapas dinámicos, gráficos de pronóstico y un diseño moderno estilo Glassmorphism.",
    tecnologiasUtilizadas: ["Python", "FastAPI", "Tailwind CSS", "React", "Vite", "recharts"],
    enlaceGithub: "https://github.com/sebastianM33/Weather_Dashboard",
    enlaceDemo: "https://weather-dashboard-eight-topaz.vercel.app/",
    imagenIlustrativa: imageWeather,
  },
];
