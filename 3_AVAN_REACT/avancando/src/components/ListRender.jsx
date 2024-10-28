import { setUsers, useState } from "react";

const ListRender = () => {
  const [list] = useState(["Daniel", "Pedro", "Josias", "Maria"]);

  const [users, setUsers] = useState([
    { id: 1, nome: "Daniel", age: 34 },
    { id: 2, nome: "Izabel", age: 35 },
    { id: 3, nome: "Taise", age: 40 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.nome} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;
