import styles from "@/src/styles/Section.module.scss";

export default function Section({children}:{children:React.ReactNode}){
  return (
    <section className={styles.section}>
      {children}
    </section>
  );
};
