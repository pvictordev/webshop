import React from "react";
import "../styles/newsletter.scss";

export default function Newsletter() {
  return (
    <div className="Newsletter">
      <div className="Newsletter__content">
        <h1>Newsletter</h1>
        <p>Subscribe for updated and get 20% discount</p>
        <div className="Newsletter__field">
          <input type="text" placeholder="your@email.com" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}
