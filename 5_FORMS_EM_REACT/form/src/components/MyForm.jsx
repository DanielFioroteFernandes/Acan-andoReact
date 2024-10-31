import "./MyForm.css";

const MyForm = () => {
  return (
    <div>
      {/*  Criação de Form */}

      <form>
        <div>
          <label htmlFor="name">Nome: </label>
          <input type="text" name="name" placeholder="Digite seu nome" />
        </div>
        {/*  Label envolvendo Imput */}

        <label>
          <span>E-mail: </span>
          <input type="email" name="email" placeholder="Digiti seu e-mail" />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
