import styles from "./style.module.css";
const DocsIdPage = ({ params }: { params: { id: string } }) => {
  return <div className={`${styles.title} ${styles.another}`}>Docs</div>;
};

export default DocsIdPage;
