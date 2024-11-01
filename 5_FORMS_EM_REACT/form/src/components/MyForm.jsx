import { useState } from "react";
import "./MyForm.css";

const MyForm = ({ user }) => {
  // 6 - controlando imputs

  // 3- Gerenciamento de dados

  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const [bio, setBio] = useState(user ? user.bio : "");

  const [role, setRole] = useState(user ? user.role : "");

  const handleName = (e) => {
    setName(e.target.value);
  };

  //console.log(name);
  //console.log(email);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando o formulario");
    console.log(name, email, bio, role);

    // limpar formulario
    setName("");
    setEmail("");
    setBio("");
  };

  return (
    <div>
      {/* 5 -  Envio de Form */}

      {/*  Criação de Form */}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            onChange={handleName}
            value={name}
          />
        </div>
        {/*  Label envolvendo Imput */}

        <label>
          <span>E-mail: </span>
          {/*  Simplificação de manupulação do state */}

          <input
            type="email"
            name="email"
            placeholder="Digiti seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        {/* Text Area */}

        <label>
          <span>Bio</span>
          <textarea
            name="bio"
            placeholder="Descrição"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>

        {/* 9 - Select */}
        <label>
          <span>Função do sistema</span>
          <select
            name="role"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            <option value="user">Usuario</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
