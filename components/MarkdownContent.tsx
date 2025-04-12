import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import Image from 'next/image';

interface MarkdownContentProps {
  content: string;
  className?: string;
}

type ComponentPropsWithSrc = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  node?: any;
  src?: string;
  alt?: string;
};

type CodeBlockProps = {
  node?: any;
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
};

// Componente que renderiza conteúdo Markdown com estilos personalizados
const MarkdownContent: React.FC<MarkdownContentProps> = ({ content, className = '' }) => {
  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]} // Suporte a tabelas, listas de tarefas, etc.
        rehypePlugins={[rehypeRaw, rehypeSanitize]} // Permite HTML no Markdown, mas sanitizado
        components={{
          // Componentes personalizados para elementos específicos
          h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-800" {...props} />,
          h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mt-10 mb-4 text-primary" {...props} />,
          h3: ({ node, ...props }) => <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800" {...props} />,
          p: ({ node, ...props }) => <p className="mb-6 text-gray-700" {...props} />,
          ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-6 space-y-2" {...props} />,
          ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-6 space-y-2" {...props} />,
          li: ({ node, ...props }) => <li className="text-gray-700" {...props} />,
          a: ({ node, href, ...props }) => (
            <a 
              href={href} 
              className="text-primary hover:underline" 
              target={href?.startsWith('http') ? '_blank' : undefined}
              rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
              {...props} 
            />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote className="border-l-4 border-primary pl-4 italic text-gray-600 my-6" {...props} />
          ),
          img: ({ node, src, alt, ...props }: ComponentPropsWithSrc) => {
            if (!src) return null;
            
            return (
              <div className="relative w-full h-80 my-8 rounded-lg overflow-hidden">
                <Image
                  src={src}
                  alt={alt || ''}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  className="object-cover"
                />
              </div>
            );
          },
          code: ({ node, inline, className, children, ...props }: CodeBlockProps) => {
            const match = /language-(\w+)/.exec(className || '');
            if (inline) {
              return <code className="bg-gray-100 text-primary px-1 py-0.5 rounded text-sm" {...props}>{children}</code>;
            }
            return (
              <div className="relative my-6">
                {match && (
                  <div className="absolute top-0 right-0 bg-gray-700 text-white text-xs px-2 py-1 rounded-bl">
                    {match[1]}
                  </div>
                )}
                <pre className="bg-gray-800 text-gray-100 rounded-lg p-4 overflow-x-auto">
                  <code className={className} {...props}>{children}</code>
                </pre>
              </div>
            );
          },
          table: ({ node, ...props }) => (
            <div className="overflow-x-auto my-8">
              <table className="min-w-full border rounded-lg overflow-hidden" {...props} />
            </div>
          ),
          th: ({ node, ...props }) => (
            <th className="bg-gray-100 text-gray-700 font-semibold p-3 border-b" {...props} />
          ),
          td: ({ node, ...props }) => (
            <td className="p-3 border-b border-gray-200" {...props} />
          ),
          hr: ({ node, ...props }) => (
            <hr className="my-8 border-gray-200" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownContent;