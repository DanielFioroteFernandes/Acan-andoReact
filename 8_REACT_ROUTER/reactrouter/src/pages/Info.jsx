import { useParams } from "react-router-dom";

{
  useParams;
}

const Info = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>mais informações sobre o produto: {id}</h1>
    </div>
  );
};

export default Info;
