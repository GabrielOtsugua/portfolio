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
    <ul className="lg:hidden absolute top-16 right-4 md:top-32 md:right-8 bg-darkbackground bg-opacity-50 rounded p-4 md:p-8 text-primary md:text-xl grid grid-cols-1 gap-3 md:gap-6">
      {routes.map((item, i) => (
        <Link href={item.name}>{item.pt}</Link>
      ))}
    </ul>
  );
};

export default Menu;
