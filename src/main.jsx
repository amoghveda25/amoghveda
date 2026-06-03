import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const ingredients = ["आंवला","रीठा","शिकाकाई","कलौंजी","मेथी","गुड़हल पुष्प","एलोविरा","भृंगराज","बेल पत्र","नीम पत्ता","करी पत्ता","हरसिंगार पत्ता","मेहंदी","जामुन पत्ता","Natural Fragrance","Other Natural Ingredients"];
const benefits = ["Helps reduce dandruff","Nourishes scalp & hair","Supports strong roots","Nature-powered care"];

function App(){
  return <main>
    <header className="nav">
      <div className="brand"><div className="brandIcon">अV</div><div><h1>AmoghVeda</h1><p>Nature Powered Hair & Skin Care</p></div></div>
      <a href="mailto:care@amoghveda.com" className="navBtn">Contact</a>
    </header>

    <section className="hero">
      <div className="heroText">
        <p className="eyebrow">Herbal Hair & Skin Care</p>
        <h2>Nature Powered Care for Naturally Healthy Hair</h2>
        <p className="sub">AmoghVeda is built around traditional herbal ingredients and a clean, premium approach to everyday hair and skin care.</p>
        <div className="heroButtons"><a className="primary" href="#products">View Product</a><a className="secondary" href="#contact">Contact Us</a></div>
      </div>
      <div className="logoCard">
        <div className="circle"><div className="lotus">✦</div><div className="mono">अV</div><div className="leaf">🌿</div></div>
        <h3>AMOGH<span>VEDA</span></h3><p>Nature Powered</p>
      </div>
    </section>

    <section id="products" className="product">
      <div><p className="eyebrow">First Product</p><h2>Herbal Hair Mask</h2><p>Inspired by traditional ingredients like Amla, Reetha, Shikakai, Bhringraj, Neem and more.</p>
      <div className="badges"><span>Sulphate Free</span><span>Paraben Free</span><span>Silicone Free</span><span>Cruelty Free</span></div></div>
      <div className="productMock"><p>180 ml</p><h3>Herbal<br/>Hair Mask</h3><small>For Strong Roots<br/>Naturally Healthy Hair</small></div>
    </section>

    <section className="benefits"><p className="eyebrow center">Key Benefits</p><h2>Gentle, Herbal, Premium</h2><div className="grid4">{benefits.map(b=><div className="tile" key={b}>{b}</div>)}</div></section>

    <section className="ingredients"><p className="eyebrow center">Ingredients</p><h2>Traditional Herbal Blend</h2><div className="ingredientGrid">{ingredients.map(i=><div key={i}>{i}</div>)}</div></section>

    <section className="about"><div><p className="eyebrow">About AmoghVeda</p><h2>Rooted in Nature. Built as a Modern Herbal Brand.</h2></div><p>AmoghVeda is a growing herbal care brand focused on trusted ingredients, clean presentation, and products made with care. We are currently working on our first product range and will launch soon.</p></section>

    <section id="contact" className="contact"><h2>Contact Us</h2><p>For product queries, bulk orders or business enquiries:</p><a href="mailto:care@amoghveda.com">care@amoghveda.com</a><small>Website: www.amoghveda.com</small></section>
    <footer>© 2026 AmoghVeda. All rights reserved.</footer>
  </main>
}

createRoot(document.getElementById("root")).render(<App/>);
