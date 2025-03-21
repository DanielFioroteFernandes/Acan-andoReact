//CSS
import { Link } from "react-router-dom";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o Mini <span>Blog</span>
      </h2>
      <p>
        Este projeto consiste em um blog com React no front-end e firebase no
        beck-end.
      </p>
      <Link to="/posts/create" className="btn">
        Criar post
      </Link>
    </div>
  );
};

export default About;
