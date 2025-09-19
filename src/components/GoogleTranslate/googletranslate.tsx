"use client";

import { useEffect } from "react";

export default function GoogleTranslate() {
  useEffect(() => {
    // Prevent multiple script loads
    if (document.getElementById("google-translate-script")) return;

    const addScript = document.createElement("script");
    addScript.id = "google-translate-script";
    addScript.src =
      "https://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate";
    addScript.async = true;
    document.body.appendChild(addScript);

    (window as any).loadGoogleTranslate = () => {
      if (!(window as any).google?.translate) return;

      // Prevent initializing twice
      if (document.getElementById("google_element")?.childElementCount === 0) {
        new (window as any).google.translate.TranslateElement(
          { pageLanguage: "en" },
          "google_element"
        );
      }
    };
  }, []);

  return (
    <div
      id="google_element"
      className="fixed bottom-4 left-4 z-50 bg-white shadow-md p-2 rounded-lg"
    ></div>
  );
}
