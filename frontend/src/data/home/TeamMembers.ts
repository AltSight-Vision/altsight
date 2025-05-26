import anaImg from "../../assets/images/aboutus/template-image1.png";
import brunoImg from "../../assets/images/aboutus/template-image2.png";
import carlaImg from "../../assets/images/aboutus/template-image3.png";
import diegoImg from "../../assets/images/aboutus/template-image4.png";

export interface TeamMember {
  name: string;
  img: string;
  bio: string;
}

export const team: TeamMember[] = [
  {
    name: "Ana Souza",
    img: anaImg,
    bio: "CEO & Desenvolvedora Sênior • Especialista em visão computacional com 10+ anos de experiência. Liderou projetos de reconhecimento facial em tempo real e sistemas de análise de imagem médica. Apaixonada por inovação e liderança técnica, já desenvolveu algoritmos para processamento de imagens satelitais em larga escala.",
  },
  {
    name: "Bruno Lima",
    img: brunoImg,
    bio: "CTO & Engenheiro de Software • Mestre em visão computacional pelo MIT, com especialização em deep learning aplicado a imagens. Desenvolveu frameworks para detecção de objetos em vídeo em tempo real e sistemas de calibração de câmeras industriais. Especialista em otimização de algoritmos para GPUs.",
  },
  {
    name: "Carla Mendes",
    img: carlaImg,
    bio: "Design Lead & Desenvolvedora Front-end • Combina design de interface com expertise em OpenCV para criar aplicações visuais intuitivas. Desenvolveu sistemas de análise postural usando visão computacional e interfaces para diagnóstico médico assistido por IA. Focada em experiências digitais inclusivas e acessibilidade visual.",
  },
  {
    name: "Diego Ramos",
    img: diegoImg,
    bio: "Data Scientist & Pesquisador em IA • Doutor em processamento de imagens médicas, criou modelos para detecção precoce de câncer em exames de raio-X. Especialista em redes neurais convolucionais e aumento de dados para visão computacional. Desenvolveu algoritmos premiados para análise de movimento em esportes de alto rendimento.",
  },
];