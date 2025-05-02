export interface Feature {
  title: string;
  text: string;
  icon: string;
  link: string;
}

export const features: Feature[] = [
  {
    title: "Automação Inteligente",
    text: "Robôs de software que aprendem com seus dados e otimizam processos automaticamente.",
    icon: "🤖",
    link: "#automacao-inteligente"
  },
  {
    title: "Visão Computacional",
    text: "Análise de imagens de drones e satélites para identificar pragas, doenças e déficit nutricional.",
    icon: "👁️",
    link: "#visao-computacional"
  },
  {
    title: "Análise de Crescimento",
    text: "Time-lapse automatizado de plantações para avaliar taxas de crescimento e vigor.",
    icon: "📈",
    link: "#analise-de-crescimento"
  },
  {
    title: "Integração com Máquinas",
    text: "Conexão e controle remoto de tratores e pulverizadores inteligentes via API.",
    icon: "🚜",
    link: "#integracao-com-maquinas"
  },
  {
    title: "Mapeamento de Solo",
    text: "Geração de mapas de composição do solo e nutrientes com sensoriamento remoto.",
    icon: "🗺️",
    link: "#mapeamento-de-solo"
  },
  {
    title: "Alertas em Tempo Real",
    text: "Notificações instantâneas via app e SMS sobre eventos críticos na plantação.",
    icon: "📲",
    link: "#alertas-em-tempo-real"
  },
  {
    title: "Dashboard Personalizado",
    text: "Interface intuitiva com gráficos e relatórios customizáveis para tomada de decisão.",
    icon: "📊",
    link: "#dashboard-personalizado"
  },
];
