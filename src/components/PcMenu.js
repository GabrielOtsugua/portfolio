import Link from "next/link";
import { useEffect } from "react";

const PcMenu = () => {
  return (
    <nav onChange={() => changeColor()} className="hidden lg:flex text-text">
      <Link id="home" href="./" className="focus:text-primary">
        Home
      </Link>
      <Link id="aboutme" href="./AboutMe" className="ml-8 focus:text-primary">
        Sobre
      </Link>
      <Link id="training" href="./Training" className="ml-8 focus:text-primary">
        Formação
      </Link>
      <Link
        id="experience"
        href="./Experience"
        className="ml-8 focus:text-primary"
      >
        Experiência
      </Link>
      <Link
        id="knowledge"
        href="./Knowledge"
        className="ml-8 focus:text-primary"
      >
        Competências
      </Link>
      <Link id="projects" href="./Projects" className="ml-8 focus:text-primary">
        Projetos
      </Link>
      <Link
        id="getintouch"
        href="./GetInTouch"
        className="ml-8 focus:text-primary"
      >
        Contato
      </Link>
    </nav>
  );
};

export default PcMenu;
