const TemplateExpressions = () => {
  const name = "Daniel Fiorote";

  const data = {
    age: 34,
    job: "Programador",
  };

  return (
    <div>
      <h1>Ola {name}, tudo bom </h1>
      <p>Você atua como: {data.job}</p>
    </div>
  );
};

export default TemplateExpressions;
