import styles from "./CssModule.module.css";

function CssModule() {
  return (
    <div className={styles.container}>
      <h1>CSS Module Example</h1>
      <p>This is styled using a CSS module.</p>
    </div>
  );
}

export default CssModule;
