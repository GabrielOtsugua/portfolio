"use client";

import Link from "next/link";

const Home = () => {
  return (
    <div className="">
      <p className="text-primary text-xl md:text-3xl mb-4">Oi, meu nome é</p>

      <h1 className="text-title text-4xl md:text-6xl font-bold mb-4">
        Gabriel Augusto.
      </h1>

      <h2 className="text-2xl md:text-4xl font-semibold mb-4">
        Sou um desenvolvedor de softwares.
      </h2>

      <p className="mb-4">
        Ênfase em experiências de usuário e designs de alta qualidade. Estou
        seguro que minha experiência e habilidades podem impulsionar o sucesso
        da empresa.
      </p>

      <Link href="./AboutMe">
        <button className="lg:hidden border border-primary rounded font-medium p-2 md:p-4 md:text-xl text-primary">
          Saiba mais
        </button>
      </Link>
    </div>
  );
};

export default Home;
