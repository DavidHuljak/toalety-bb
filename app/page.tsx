"use client";

import QRCode from "react-qr-code";
import { useState, useEffect } from "react";

export default function Home() {
  const [now, setNow] = useState<Date | null>(null);
  const [showLongFormat, setShowLongFormat] = useState(false);

  useEffect(() => {
    setNow(new Date());

    const timeInterval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    const toggleInterval = setInterval(() => {
      setShowLongFormat((prev) => !prev);
    }, 3000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(toggleInterval);
    };
  }, []);

  if (!now) return null;

  const pragueDateString = now.toLocaleString("en-US", {
    timeZone: "Europe/Prague",
  });
  const date = new Date(pragueDateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  let qrCodeValue;
  let textLabel;

  if (showLongFormat) {
    qrCodeValue = year + month + day + hours + minutes;
    textLabel = "Dlouhý kód - " + day + month + hours + minutes;
  } else {
    qrCodeValue = year + month + day;
    textLabel = "Krátký kód - " + day + month;
  }

  return (
    <main className="mainContainer">
      <div className="contentWrapper">
        <div className="headerBox">
          <h1 className="headerText">TOALETY BB</h1>
        </div>

        <p className="introText">
          ODEMKNĚTE SI
          <br />
          TOALETY!
        </p>

        <div className="qrSection">
          <div className="qrWrapper">
            <QRCode
              value={qrCodeValue}
              size={180}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              viewBox="0 0 256 256"
              fgColor="#222222"
              bgColor="#ffffff"
            />
          </div>
          <p className="qrText">{textLabel}</p>
        </div>
      </div>

      <footer className="footer">
        <a
          href="https://david.huljak.cz"
          target="_blank"
          rel="noopener noreferrer"
          className="footerLink"
        >
          Made by Dávid Huljak
        </a>
      </footer>
    </main>
  );
}
