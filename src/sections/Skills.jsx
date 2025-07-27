import Html from "@/svg/technology/Html";
import Js from "@/svg/technology/Js";
import React from "@/svg/technology/React";
import Tailwind from "@/svg/technology/Tailwind";
import Astro from "@/svg/technology/Astro";
import Node from "@/svg/technology/Node";
import Ansible from "@/svg/technology/Ansible";
import Java from "@/svg/technology/Java";
import Php from "@/svg/technology/Php";

const SKILLS = {
    "Frontend": [
        { name: "HTML", icon: <Html height={'75px'} width={'75px'} /> },
        { name: "JavaScript", icon: <Js height={'75px'} width={'75px'} /> },
        { name: "React", icon: <React height={'75px'} width={'75px'} fill={'#61DAFB'} /> },
        { name: "TailwindCSS", icon: <Tailwind height={'75px'} width={'75px'} fill={'#38BDF8'} /> },
        { name: "Astro", icon: <Astro height={'75px'} width={'75px'} /> },
    ],
    "Backend": [
        { name: "Node.js", icon: <Node height={'75px'} width={'75px'} /> },
        { name: "Java", icon: <Java height={'75px'} width={'75px'} /> },
        { name: "PHP", icon: <Php height={'75px'} width={'75px'} /> },
    ],
    "DevOps": [
        { name: "Ansible", icon: <Ansible height={'75px'} width={'75px'} fill={'red'} /> },
    ]
};

const SkillCategory = ({ title, skills }) => (
    <div className="w-full">
        <h3 className="text-3xl font-bold text-center mb-6 border-b-2 border-fourth-purple pb-2">{title}</h3>
        <div className="flex flex-wrap gap-8 justify-center">
            {skills.map(skill => (
                <div key={skill.name} className="flex flex-col items-center gap-2 transition-transform hover:scale-110">
                    {skill.icon}
                    <span className="font-semibold">{skill.name}</span>
                </div>
            ))}
        </div>
    </div>
);

export default function Skills() {
    return (
        <section id="skills" className="min-h-screen p-6 m-6 flex flex-col items-center justify-center gap-12">
            <h2 className="text-6xl font-bold text-center">Habilidades y Tecnologías</h2>
            <div className="w-full max-w-5xl flex flex-col items-center gap-12">
                <SkillCategory title="Frontend" skills={SKILLS.Frontend} />
                <SkillCategory title="Backend" skills={SKILLS.Backend} />
                <SkillCategory title="DevOps" skills={SKILLS.DevOps} />
            </div>
        </section>
    );
}