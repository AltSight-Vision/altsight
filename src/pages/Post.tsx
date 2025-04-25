import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "../styles/post-style.css";

interface PostData {
  title: string;
  date: string;
  content: string;
}

const Post: FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<PostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        // Busca o arquivo Markdown como texto puro
        const response = await fetch(`/posts/${slug}.md`);
        
        if (!response.ok) {
          throw new Error("Post não encontrado");
        }
        
        const markdownText = await response.text();
        
        // Extrai frontmatter manualmente
        const frontmatterEnd = markdownText.indexOf('---', 3);
        if (frontmatterEnd === -1) {
          throw new Error("Formato de Markdown inválido");
        }
        
        const frontmatter = markdownText.slice(3, frontmatterEnd).trim();
        const content = markdownText.slice(frontmatterEnd + 3).trim();
        
        // Parseia o frontmatter
        const metadata = frontmatter.split('\n').reduce((acc, line) => {
          const separatorIndex = line.indexOf(':');
          if (separatorIndex === -1) return acc;
          
          const key = line.slice(0, separatorIndex).trim();
          const value = line.slice(separatorIndex + 1).trim().replace(/^['"]|['"]$/g, '');
          acc[key] = value;
          return acc;
        }, {} as Record<string, string>);
        
        setPost({
          title: metadata.title || "Sem título",
          date: metadata.date || new Date().toISOString(),
          content: content
        });
      } catch (err) {
        setError("Erro ao carregar o post");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMarkdown();
  }, [slug]);

  if (loading) {
    return <div className="post-loading">Carregando...</div>;
  }

  if (error || !post) {
    return (
      <div className="post-not-found">
        <h1>Post não encontrado</h1>
        <p>O post que você está procurando não existe ou foi removido.</p>
      </div>
    );
  }

  return (
    <div className="post-container">
      <article className="post-content">
        <header className="post-header">
          <h1 className="post-title">{post.title}</h1>
          <div className="post-meta">
            <time dateTime={post.date} className="post-date">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </header>

        <div className="post-body">
          {/* Usa ReactMarkdown para renderizar o conteúdo */}
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
};

export default Post;