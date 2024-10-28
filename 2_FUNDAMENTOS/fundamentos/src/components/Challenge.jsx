const Challenge = () => {
  const a = 6;
  const b = 25;

  return (
    <div>
      <div>
        <p>A: {a}</p>
        <p>B: {b}</p>
        <button onClick={() => console.log(a + b)}>
          Clique para ver a soma
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Challenge;
