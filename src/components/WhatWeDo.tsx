import { FC } from "react";
import "../styles/components/whatwedo.scss";
import street1 from "../assets/videos/drone-footage.mp4";
import trio from "../assets/images/trio-1.png";

const WhatWeDoSection: FC = () => {
  return (
    <section className="section what-we-do">
      <h2 className="section-title">O que nós fazemos?</h2>
      <div className="container computer-vision reverse">
        <div className="image computer-vision-video">
          <video className="video-primary" src={street1} controls />
        </div>
        <div className="text computer-vision">
          <h2 className="container-title">
            Como a <strong>Visão Computacional</strong> pode melhorar o seu
            processo?
          </h2>
          <p>
            Na AltSight, usamos visão computacional para transformar imagens e
            vídeos em informações valiosas. Desenvolvemos soluções inteligentes
            para detecção de objetos, automação, segurança e análise visual em
            diversos setores.
          </p>
          <p>
            Nosso foco é entregar tecnologia eficiente, precisa e pronta para
            resolver problemas do mundo real.
          </p>
        </div>
      </div>

      <div className="container doc-analysis">
        <div className="text doc-analysis">
          <h2 className="container-title">
            A <strong>Análise Inteligente de Documentos</strong> pode
            automatizar o seu processo
          </h2>
          <p>
            Nossa solução de análise de documentos inteligente utiliza
            inteligência artificial para ler, entender e estruturar informações
            contidas em documentos como notas fiscais, boletos e formulários.
          </p>
          <p>
            Automatizamos a extração de dados com alta precisão, reduzindo erros
            manuais e agilizando processos que tomam tempo e recursos.
          </p>
          <p>
            Com essa tecnologia, transformamos documentos em dados prontos para
            uso, oferecendo mais eficiência, segurança e inteligência na tomada
            de decisões.
          </p>
        </div>
        <div className="image doc-analysis">
          <img src={trio} alt="Trio de pessoas com laptop e tablet" />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
