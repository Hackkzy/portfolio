import ProjectSection from "@/components/ProjectSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen max-w-2xl mx-auto p-4 font-sans">
      {/* Logo & Name section */}
      <div className="flex items-center gap-3 mt-12 mb-6">
        <Image
          className="rounded-full"
          loading="lazy"
          src={"/profile.jpg"}
          width={100}
          height={100}
          alt="Jay"
        />
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-medium ">Jay Patel</h1>
          <p className="mb-1 font-mono">Gujarat, India</p>
          <a href="/resume.pdf" target="_blank">
            <button className="flex gap-2 border hover:border-neutral-500 transition-all hover:scale-105 px-3 py-1 border-neutral-600 rounded-full text-xs items-center">
              <p>Download Resume</p>
            </button>
          </a>
        </div>
      </div>

      {/* Profile Description */}
      <div className="flex flex-col text-justify my-4 text-sm leading-loose tracking-wide gap-3">
        <p className=" text-sm mb-1 font-mono">
          I&apos;m a <span className="">WordPress Developer</span> focused on
          building custom plugins and Gutenberg blocks that extend functionality
          and improve the WordPress experience. I work with PHP, JavaScript, and
          React to build secure, reliable solutions for modern WordPress
          projects.
        </p>
        <p className="text-sm mb-6 font-mono">
          {"Find me on "}
          <a
            className="border-b inline-flex items-center gap-1 border-neutral-800 border-dashed hover:text-red-200 transition-all"
            href="https://linkedin.com/in/hackkzy/"
            target="_blank"
          >
            Linkedin
          </a>
          {", "}
          <a
            className="border-b inline-flex items-center gap-1 border-neutral-800 border-dashed hover:text-red-200 transition-all"
            href="https://github.com/hackkzy/"
            target="_blank"
          >
            GitHub
          </a>
          {", "}
          <a
            className="border-b inline-flex items-center gap-1 border-neutral-800 border-dashed hover:text-red-200 transition-all"
            href="https://profiles.wordpress.org/hackkzy404/"
            target="_blank"
          >
            WordPress.org
          </a>
        </p>
      </div>
      {/* Projects */}
      <ProjectSection />
    </div>
  );
}
