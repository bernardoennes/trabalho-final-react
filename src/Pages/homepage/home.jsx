import styles from "./home.module.css";

import { Navbar } from "../../Components/Navbar/navbar";
import { Footer } from "../../Components/Footer/footer";

export function HomePage() {
  return (
    <div className={styles.bodyContainer}>
      <Navbar />
      <Footer />
    </div>
  );
}
