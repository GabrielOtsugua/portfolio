import LeftArrow from "@/components/LeftArrow";
import RightArrow from "@/components/RightArrow";
import { IoOpenOutline } from "react-icons/io";

const Projects = () => {
  const projects = [
    {
      name: "Kenzie Hub",
      description:
        "Kenzie Hub, para manter-se informado acerca do status de suas atividades.",
      link: "https://react-entrega-kenzie-hub-gabrielotsugua.vercel.app/",
    },
    {
      name: "Nu Kenzie",
      description:
        "Nu Kenzie, uma aplicação para registrar e avaliar seu progresso em tarefas.",
      link: "https://react-entrega-s1-nu-kenzie-gabrielotsugua.vercel.app/",
    },
    {
      name: "Burger Kenzie",
      description:
        "Burger Kenzie oferece os melhores lanches e bebidas para você saborear.",
      link: "https://react-entrega-hamburgueria-da-kenzie-gabrielotsugua.vercel.app/",
    },
  ];

  return (
    <div className="w-full lg:pt-16">
      <h1 className="text-title text-xl md:text-3xl font-bold mb-4">
        Alguns Projetos
      </h1>

      <div className="grid gap-4">
        {projects.map((item, i) => (
          <details className="collapse collapse-arrow border border-primary rounded">
            <summary className="collapse-title text-primary">
              {item.name}
            </summary>
            <div className="collapse-content">
              <a
                href={item.link}
                className="link link-info hover:text-opacity-70"
              >
                {item.description}
              </a>
            </div>
          </details>
        ))}
      </div>

      <LeftArrow href="./Knowledge" />
      <RightArrow href="./GetInTouch" />
    </div>
  );
};

export default Projects;
