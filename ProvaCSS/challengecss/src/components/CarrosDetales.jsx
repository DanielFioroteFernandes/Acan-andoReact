import styles from "./CarrosDetales.module.css";

const CarrosDetales = ({ brand, color, km }) => {
  return (
    <div>
      <h1 className={styles.titulo_h1}>Detalhes do Carro</h1>

      <ul className={styles.ul_carros_detales}>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor: {color}</li>
      </ul>
    </div>
  );
};

export default CarrosDetales;
