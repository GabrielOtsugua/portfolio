import LeftArrow from "@/components/LeftArrow";

const GetInTouch = () => {
  return (
    <div className="text-center">
      <h1 className="text-title text-xl md:text-3xl font-bold mb-4">
        Entre em Contato
      </h1>

      <p className="mb-4 text-center">
        Estou aberto a novas oportunidades e confiante em relação as minhas
        habilidades e experiência. Se interessado, sinta-se à vontade para
        entrar em contato comigo.
      </p>

      <a href="https://www.linkedin.com/in/gabriel-augusto-5aab41236/">
        <button className="border border-primary rounded p-2 md:p-4 text-primary">
          Fale comigo
        </button>
      </a>

      <LeftArrow href="./Projects" />
    </div>
  );
};

export default GetInTouch;
