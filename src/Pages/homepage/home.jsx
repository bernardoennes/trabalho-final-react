import styles from "./home.module.css";
import { Navbar } from "../../Components/Navbar/navbar";
import { Footer } from "../../Components/Footer/footer";
import { Grid } from "../../Components/Grid/grid";
import { useParams } from "react-router-dom";

export function HomePage() {
  const { nomeCategoria } = useParams();

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.body}>
        <Grid categoria={nomeCategoria} />
      </div>
      <Footer />
    </div>
  );
}
