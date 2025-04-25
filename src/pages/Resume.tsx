import { FC } from "react";
import { curriculumData } from "../data/resume-data";
import "../styles/resume-style.css";

const Resume: FC = () => {
  const sortedData = [...curriculumData].sort((a, b) => a.id - b.id);

  // Função para dividir os itens em colunas
  const splitIntoColumns = (items: string[], maxColumns = 3) => {
    const columnCount = Math.min(
      Math.ceil(items.length / 4), // Pelo menos 4 itens por coluna
      maxColumns
    );
    const itemsPerColumn = Math.ceil(items.length / columnCount);

    const columns = [];
    for (let i = 0; i < columnCount; i++) {
      columns.push(items.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn));
    }
    return columns;
  };

  return (
    <section className="resume">
      {sortedData.map((item) => {
        const columns = splitIntoColumns(item.description);

        return (
          <div key={item.id} className="resume-item">
            <div className="resume-header">
              <h1 className="title">{item.title}</h1>
              <div className="info">
                <span className="type">
                  {item.type === "education" && "Education"}
                  {item.type === "work" && "Work"}
                  {item.type === "projects" && "Projects"}
                </span>
                <span className="date">{item.date}</span>
              </div>
            </div>

            <div className="resume-details">
              <div className="description-grid">
                {columns.map((column, colIndex) => (
                  <ul className="description-column">
                    {column.map((point, i) => (
                      <li key={i}>
                        {point
                          .split("**")
                          .map((segment, idx) =>
                            idx % 2 === 1 ? (
                              <strong key={idx}>{segment}</strong>
                            ) : (
                              segment
                            )
                          )}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Resume;
