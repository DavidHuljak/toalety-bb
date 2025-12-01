import QRCode from "react-qr-code";
import styles from "./page.module.css";

export default function Home() {
  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const qrCodeValue = year + month + day;
  const textCodeValue = day + month;

  return (
    <main className={styles.mainContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.headerBox}>
          <h1 className={styles.headerText}>TOALETY BB</h1>
        </div>

        <p className={styles.introText}>
          ODEMKNĚTE SI
          <br />
          TOALETY!
        </p>

        <div className={styles.qrSection}>
          <div className={styles.qrWrapper}>
            <QRCode
              value={qrCodeValue}
              size={180}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              viewBox={`0 0 256 256`}
              fgColor="#222222"
              bgColor="#ffffff"
            />
          </div>
          <p className={styles.qrText}>Dnešní kód - {textCodeValue}</p>
        </div>
      </div>

      <footer className={styles.footer}>
        <a
          href="https://david.huljak.cz"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          Made by Dávid Huljak
        </a>
      </footer>
    </main>
  );
}
