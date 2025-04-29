import agroBrasilLogo from "../../assets/partners/2k-logo.png";
import fazendaFuturoLogo from "../../assets/partners/2k-logo.png";
import terraNovaLogo from "../../assets/partners/2k-logo.png";
import agroTopLogo from "../../assets/partners/2k-logo.png";

export interface Partner {
  name: string;
  logo: string;
}

export const partners: Partner[] = [
  { name: "AgroBrasil", logo: agroBrasilLogo },
  { name: "Fazenda Futuro", logo: fazendaFuturoLogo },
  { name: "TerraNova", logo: terraNovaLogo },
  { name: "Grupo AgroTop", logo: agroTopLogo },
];
