import styles from "./home.module.css";
import { Navbar } from "../../Components/Navbar/navbar";
import { Footer } from "../../Components/Footer/footer";
import { Grid } from "../../Components/Grid/grid";
import { useParams, useLocation } from "react-router-dom";

export function HomePage() {
  const { nomeCategoria } = useParams();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const busca = params.get("q") || "";

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.body}>
        <Grid categoria={nomeCategoria} busca={busca} />
      </div>
      <Footer />
    </div>
  );
}
