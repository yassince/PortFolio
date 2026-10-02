import Html from "@/svg/technology/Html";
import Js from "@/svg/technology/Js";
import ReactIcon from "@/svg/technology/React";
import Tailwind from "@/svg/technology/Tailwind";
import Astro from "@/svg/technology/Astro";
import Node from "@/svg/technology/Node";
import Ansible from "@/svg/technology/Ansible";
import Java from "@/svg/technology/Java";
import Php from "@/svg/technology/Php";
import { skillGroups } from "@/data/content";

const ICONS = {
  HTML: <Html height="56px" width="56px" />,
  JavaScript: <Js height="56px" width="56px" />,
  React: <ReactIcon height="56px" width="56px" fill="#61DAFB" />,
  "Tailwind CSS": <Tailwind height="56px" width="56px" fill="#38BDF8" />,
  Astro: <Astro height="56px" width="56px" />,
  "Node.js": <Node height="56px" width="56px" />,
  Java: <Java height="56px" width="56px" />,
  PHP: <Php height="56px" width="56px" />,
  Ansible: <Ansible height="56px" width="56px" fill="red" />,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative flex min-h-screen scroll-mt-24 flex-col items-center justify-center gap-12 bg-[url(/Skill.webp)] bg-cover bg-center bg-no-repeat px-6 py-24 text-white"
    >
      <div className="absolute inset-0 bg-[#070b12]/80" />
      <div className="relative w-full max-w-5xl text-center">
        <p className="section-kicker mb-3">02 — Stack</p>
        <h2 className="text-4xl font-bold md:text-6xl">Habilidades y tecnologías</h2>
      </div>
      <div className="relative grid w-full max-w-5xl gap-8 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title} className="rounded-2xl border border-white/10 bg-black/35 p-6">
            <h3 className="mb-5 border-b border-accent/40 pb-2 text-2xl font-bold">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((name) => (
                <div
                  key={name}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium"
                >
                  {ICONS[name]}
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
