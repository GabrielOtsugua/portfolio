import RightArrow from "@/components/RightArrow";
import Link from "next/link";

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
        "Seja bem-vindo à Burger Kenzie, onde oferecemos os melhores lanches e bebidas.",
      link: "https://react-entrega-hamburgueria-da-kenzie-gabrielotsugua.vercel.app/",
    },
  ];

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-title text-xl font-bold w-[260px]">
          Alguns Projetos
        </h1>
      </div>

      {projects.map((item, i) => (
        <div key={i} className="border border-primary rounded p-6 mx-12 mb-3">
          <a href={item.link}>
            <div className="flex justify-between items-center mb-3">
              <p className="text-title">{item.name}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-primary"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                />
              </svg>
            </div>

            <p className="text-sm">{item.description}</p>
          </a>
        </div>
      ))}

      <p className="text-xs pt-3 text-center">
        Para visualizar os projetos, basta clicar sobre as respectivas opções.
      </p>

      <RightArrow href="./GetInTouch" />
    </div>
  );
};

export default Projects;
