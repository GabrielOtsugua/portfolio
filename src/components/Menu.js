import Link from "next/link";

const Menu = () => {
  const routes = [
    {
      name: "./",
      pt: "Bem Vindo",
    },
    {
      name: "./AboutMe",
      pt: "Sobre Mim",
    },
    {
      name: "./Training",
      pt: "Formação",
    },
    {
      name: "./Experience",
      pt: "Experiência Profissional",
    },
    {
      name: "./Knowledge",
      pt: "Competências",
    },
    {
      name: "./Projects",
      pt: "Alguns Projetos",
    },
    {
      name: "./GetInTouch",
      pt: "Entre em Contato",
    },
  ];

  return (
    <ul className="absolute top-16 right-6 bg-darkbackground bg-opacity-50 rounded p-4 text-primary grid grid-cols-1 gap-3">
      {routes.map((item, i) => (
        <Link href={item.name}>{item.pt}</Link>
      ))}
    </ul>
  );
};

export default Menu;
