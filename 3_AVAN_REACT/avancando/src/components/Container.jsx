const Container = ({ children, myValue }) => {
  return (
    <div>
      <h2>esse é o titulo do container</h2>
      {children}
      <p>O valor é: {myValue}</p>
    </div>
  );
};

export default Container;
