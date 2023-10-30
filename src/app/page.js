import Link from "next/link";

const Home = () => {
  return (
    <div>
      <p className="text-primary text-xl tracking-widest mb-3">
        Oi, meu nome é
      </p>
      <h1 className="text-title text-4xl font-bold mb-3">Gabriel Augusto.</h1>

      <h2 className="text-3xl font-semibold mb-6">
        Sou um criador de softwares.
      </h2>

      <p className="mb-9 leading-7">
        Sou um
        <span className="text-title">
          {" "}
          especialista em desenvolvimento de software Front-End
        </span>
        , com ênfase em experiências de usuário e designs de alta qualidade.
        Estou avançando em minha carreira e estou seguro que minha
        <span className="text-title"> experiência e habilidades</span> podem
        impulsionar o sucesso da empresa.
      </p>

      <Link href="./AboutMe">
        <button className="border border-primary rounded px-6 py-3 text-primary">
          Saiba mais
        </button>
      </Link>
    </div>
  );
};

export default Home;
