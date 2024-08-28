import Link from "next/link";
import styles from "@/src/styles/Header.module.css";
import { Dark, GitHub, Light } from "@/public/images/svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">블로그</Link>
        <Link href="/about">About</Link>
      </nav>
      <Link href="/" target="_blank" aria-label="Github">
        <GitHub/>
      </Link>
      <button className={styles.theme_button}>
        <Light />
        <Dark/>
      </button>

    </header>
  );
};

export default Header;