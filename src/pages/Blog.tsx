import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/blog-style.css";

interface PostMetadata {
  title: string;
  url: string;
  date: string;
  description?: string;
}

const Blog: FC = () => {
  const [posts, setPosts] = useState<PostMetadata[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const parseMarkdownFile = (text: string) => {
    const frontmatterEnd = text.indexOf('---', 3);
    if (frontmatterEnd === -1) return { metadata: {}, content: '' };
    
    const frontmatter = text.slice(3, frontmatterEnd).trim();
    const content = text.slice(frontmatterEnd + 3).trim();
    
    const metadata = frontmatter.split('\n').reduce((acc, line) => {
      const separatorIndex = line.indexOf(':');
      if (separatorIndex === -1) return acc;
      
      const key = line.slice(0, separatorIndex).trim();
      const value = line.slice(separatorIndex + 1).trim().replace(/^['"]|['"]$/g, '');
      acc[key] = value;
      return acc;
    }, {} as Record<string, string>);

    return { metadata, content };
  };

  useEffect(() => {
    const fetchPostsMetadata = async () => {
      try {
        const postsListResponse = await fetch('/posts/posts-list.json');
        if (!postsListResponse.ok) throw new Error("Failed to load posts list");
        
        const postsList = await postsListResponse.json();
        
        const postsData = await Promise.all(
          postsList.map(async (postFile: string) => {
            try {
              const response = await fetch(`/posts/${postFile}`);
              if (!response.ok) return null;
              
              const markdownText = await response.text();
              const { metadata } = parseMarkdownFile(markdownText);
              
              if (!metadata.title || !metadata.url || !metadata.date) {
                console.warn(`Post com metadados incompletos: ${postFile}`);
                return null;
              }
              
              return {
                title: metadata.title,
                url: metadata.url,
                date: metadata.date,
                description: metadata.description
              };
            } catch (err) {
              console.error(`Error loading post ${postFile}:`, err);
              return null;
            }
          })
        );

        const validPosts = postsData.filter((post): post is PostMetadata => post !== null);
        validPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        
        setPosts(validPosts);
      } catch (err) {
        console.error("Error loading posts:", err);
        setError("Erro ao carregar posts. Por favor, tente novamente.");
      } finally {
        setLoading(false);
      }
    };

    fetchPostsMetadata();
  }, []);

  if (loading) {
    return <div className="loading">Carregando posts...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="blog">
      <div className="posts">
        <h1>Blog Posts</h1>
        {posts.length === 0 ? (
          <p>Nenhum post encontrado.</p>
        ) : (
          <ul className="post-list">
            {posts.map((post, index) => (
              <li key={index} className="post-item">
                <div className="post-header">
                  <a 
                    href={`/blog${post.url}`}
                    className="post-link"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/blog${post.url}`);
                    }}
                  >
                    {post.title}
                  </a>
                  <span className="post-date">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric"
                    })}
                  </span>
                </div>
                {post.description && (
                  <p className="post-description">{post.description}</p>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Blog;
