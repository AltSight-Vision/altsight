// about-data.ts

export interface About {
  title: string;
  description: string;
  links: string[];
  influences: Array<{
    title: string;
    url: string;
  }>;
}

export const aboutData: About = {
  title: "About Me",
  description:
    "I am a developer passionate about technology and innovation, with experience in backend development and building efficient APIs. Always seeking new challenges to expand my knowledge and contribute to impactful projects. This website was developed using TypeScript, React, and pure CSS, without relying on external UI frameworks beyond React's default capabilities. The design and responsiveness were implemented manually to ensure full customization. The project is hosted on Firebase, utilizing its cloud hosting services for scalability and seamless deployment.",
  links: [
    "https://github.com/notNilton",
    "https://www.linkedin.com/in/notnilton/",
  ],
  influences: [
    {
      title: "Our Moloch",
      url: "https://www.nybooks.com/online/2012/12/15/our-moloch/",
    },
    {
      title: "1500 Archers on a 28.8",
      url: "https://zoo.cs.yale.edu/classes/cs538/readings/papers/terrano_1500arch.pdf",
    },
    {
      title: "Hammock Driven Development",
      url: "https://www.youtube.com/watch?v=f84n5oFoZBc",
    },
    {
      title: "Simple Made Easy",
      url: "https://www.youtube.com/watch?v=SxdOUGdseq4",
    },
    {
      title: "Surely You're Joking, Mr. Feynman!",
      url: "https://www.amazon.com/Surely-Feynman-Adventures-Curious-Character/dp/0393316041",
    },
    {
      title: "Litany for Money: A Deeper Economy",
      url: "https://www.franpratt.com/litanies/2016/6/2/wt2sqjl1atsj0xsikxxv24uah9fmvl",
    },
    {
      title: "I Will Fucking Dropkick You If You Use That Spreadsheet",
      url: "https://ludic.mataroa.blog/blog/i-will-fucking-dropkick-you-if-you-use-that-spreadsheet/",
    },
    {
      title: "I Will Fucking Piledrive You If You Mention AI Again",
      url: "https://ludic.mataroa.blog/blog/i-will-fucking-piledrive-you-if-you-mention-ai-again/",
    },
    {
      title: "Simulacra and Simulation",
      url: "https://www.amazon.com.br/Simulacra-Simulation-Jean-Baudrillard/dp/0472065211",
    },
    {
      title: "Napoleon's Buttons",
      url: "https://www.amazon.com/Napoleons-Buttons-Molecules-Changed-History/dp/1585423319",
    },
    {
      title: "Too big to care - enshittification is a choice.",
      url: "https://doctorow.medium.com/https-pluralistic-net-2024-04-04-teach-me-how-to-shruggie-kagi-caaa88c221f2",
    },
    {
      title: "This is what happens when you take Ayn Rand seriously",
      url: "https://www.pbs.org/newshour/economy/column-this-is-what-happens-when-you-take-ayn-rand-seriously",
    },
    {
      title: "Vulgar Display of Power",
      url: "https://tante.cc/2025/03/28/vulgar-display-of-power/",
    },
  ],
};
