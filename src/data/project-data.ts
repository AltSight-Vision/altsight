// project-data.ts

import radareImage1 from "../assets/projects/interface-completa.png";
import aiicpImage1 from "../assets/projects/comparison.png";
import aiicpImage2 from "../assets/projects/aiicp1.png";

export interface Project {
  id: number;
  name: string;
  images: string[];
  description: string[];
  technologies: string[];
}

export const projectList: Project[] = [
  {
    id: 1,
    name: "RADARE - Reconciliation and Data Analysis in a Responsive Environment",
    images: [radareImage1],
    description: [
      "Developed scalable applications using **Python**, **TypeScript**, **FastAPI**, **PostgreSQL**, **Redis**, **Docker**, and **Kubernetes**, creating **RESTful APIs** and responsive interfaces with a focus on UX and performance.",
      "Implemented an industrial data reconciliation system, ensuring data integrity and accuracy, with interactive APIs and interfaces for seamless system integration.",
      "Optimized data processes, generating monthly savings of **R$10,000** and increasing operational reliability and efficiency.",
      "Designed a highly scalable architecture capable of handling thousands of reconciliations per minute, using parallel processing and distributed computing techniques for low latency and high reliability.",
      "Integrated the system with multiple data sources, including IoT devices, SCADA systems, cloud databases, and ERP platforms, ensuring compatibility with both modern and legacy infrastructures.",
    ],
    technologies: [
      "Python",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    id: 2,
    name: "AIICP - Artificial Intelligence Image Correction and Augmentation Pipeline",
    images: [aiicpImage1, aiicpImage2],
    description: [
      "Developed an AI-powered pipeline using **Python**, **TensorFlow**, **OpenCV**, and **PyTorch** to correct and enhance AI-generated pixel art, focusing on noise reduction, color adjustment, and detail reconstruction.",
      "Implemented deep learning-driven upscaling and anti-aliasing techniques to enhance image resolution while preserving artistic integrity, ideal for game development and digital art.",
      "Designed a flexible and scalable system with customizable processing parameters, supporting batch processing and real-time workflows for high-quality image enhancement.",
      "Integrated advanced image processing techniques with deep learning models to refine textures, patterns, and edges, ensuring consistent and high-fidelity results.",
    ],
    technologies: [
      "Python",
      "Flask",
      "TensorFlow",
      "OpenCV",
      "PIL",
      "NumPy",
      "FastAPI",
      "PyTorch",
    ],
  },
  {
    id: 3,
    name: "Lensegmentation Platform",
    images: [],
    description: [
      "Developed an AI-driven platform using **Python**, **OpenCV**, **TensorFlow**, and **Deep Learning** to provide personalized eyewear recommendations based on facial structure analysis.",
      "Implemented advanced facial recognition and 3D mapping techniques to evaluate facial symmetry, eye positioning, and geometry, ensuring optimal frame fit and aesthetic harmony.",
      "Built a deep learning engine trained on diverse datasets to refine recommendations over time, incorporating user feedback and emerging fashion trends for improved accuracy.",
      "Designed the platform to minimize poor-fit purchases by analyzing factors like nose bridge width, temple length, and frame curvature, enhancing both comfort and style.",
    ],
    technologies: [
      "Python",
      "OpenCV",
      "TensorFlow",
      "Deep Learning",
      "Dlib",
      "Flask",
      "FastAPI",
    ],
  },
];