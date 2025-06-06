export default function ProjectCard({ title, description, links }) {
  return (
    <div className="flex gap-3 flex-col">
      {/* Title */}
      <h3 className="font-medium">{title}</h3>

      {/* Description */}
      <p className="font-mono text-sm mt-[-7px]">
        {description}
      </p>

      {/* Links */}
      <div className="font-mono text-sm flex gap-4 items-center">
        {links?.wordpress && (
          <a
            href={links.wordpress}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b inline-flex items-center gap-1 border-neutral-800 border-dashed hover:text-red-200 transition-color"
          >
            WordPress Repo
          </a>
        )}
        {links?.github && (
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b inline-flex items-center gap-1 border-neutral-800 border-dashed hover:text-red-200 transition-color"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
