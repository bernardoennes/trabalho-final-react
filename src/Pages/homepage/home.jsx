import styles from "./home.module.css";

import { Navbar } from "../../Components/Navbar/navbar";
import { Footer } from "../../Components/Footer/footer";
import { Grid } from "../../Components/Grid/grid";

export function HomePage() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.body}>
        <Grid />
      </div>
      <Footer />
    </div>
  );
}
