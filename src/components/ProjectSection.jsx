import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    id: "timed-visibility-block",
    title: "Timed Visibility Block",
    description:
      "A WordPress block that hides/shows content on scheduled date/time.",
    links: {
      wordpress: "https://wordpress.org/plugins/timed-visibility-block/",
      github: "https://github.com/hackkzy/timed-visibility-block",
    },
  },
  {
    id: "super-powered-acf",
    title: "Super Powered ACF",
    description: "AI-powered ACF field generator for Advanced Custom Fields",
    links: {
      github: "https://github.com/hackkzy/super-powered-acf",
    },
  },
  {
    id: "bento-box",
    title: "Bento Box",
    description: "A customizable block to create Bento Layout in Block Editor.",
    links: {
      wordpress: "https://wordpress.org/plugins/bento-box/",
      github: "https://github.com/hackkzy/bento-box",
    },
  },
];

export default function ProjectSection() {
  return (
    <>
      <div className="flex items-center gap-3 my-4">
        <hr className="opacity-10 w-[2%] ml-auto" />
        <p className="w-fit text-center font-mono">Projects</p>
        <hr className="opacity-10 flex-1" />
      </div>
      <div className="overflow-hidden">
        <div className="leading-loose flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map(({ id, title, description, links }) => (
              <ProjectCard
                key={id}
                title={title}
                description={description}
                links={links}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
