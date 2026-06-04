
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const WHATSAPP_NUMBER = "918861064303";

const products = {
  mask: {
    title: "AmoghVeda Hair Mask",
    shortTitle: "Hair Mask",
    image: "/images/mask.png",
    badge: "BESTSELLER",
    description: "Deep nourishment that repairs, revitalizes and transforms your hair.",
    benefits: [
      "Reduces Hair Fall",
      "Controls Frizz",
      "Repairs Damaged Hair",
      "Anti Dandruff",
      "Anti Fungal",
      "Deep Nourishment",
      "Makes Hair Look Darker & Healthier",
      "Suitable for All Hair Types"
    ],
    howTo: [
      "Apply on clean, damp hair.",
      "Massage gently into scalp and hair.",
      "Leave for 20–30 minutes.",
      "Rinse thoroughly with water.",
      "Wash off using AmoghVeda Herbal Shampoo."
    ],
    pairing: "Hair Mask is the hero treatment product. Use shampoo after the mask for best results."
  },
  shampoo: {
    title: "AmoghVeda Herbal Shampoo",
    shortTitle: "Herbal Shampoo",
    image: "/images/shampoo.png",
    badge: "RECOMMENDED AFTER HAIR MASK",
    description: "A gentle Ayurvedic shampoo designed to cleanse and nourish your hair after the AmoghVeda Hair Mask treatment.",
    benefits: [
      "Gentle Cleansing",
      "Improves Shine",
      "Strengthens Roots",
      "Nourishes Scalp",
      "Adds Natural Shine",
      "Maintains Natural pH",
      "Sulphate Free",
      "Suitable for All Hair Types"
    ],
    howTo: [
      "Wet hair thoroughly.",
      "Use after rinsing AmoghVeda Hair Mask.",
      "Massage scalp gently.",
      "Rinse thoroughly with water.",
      "Repeat if required."
    ],
    pairing: "Shampoo is the companion product, designed to gently wash off the Hair Mask."
  }
};

const ingredients = [
  ["Amla", "Strengthens hair and reduces fall", "🟢"],
  ["Reetha", "Gently cleanses and nourishes", "🟤"],
  ["Shikakai", "Improves hair texture", "🌰"],
  ["Aloe Vera", "Soothes scalp and hydrates", "🌱"],
  ["Bhringraj", "Promotes healthy hair growth", "🌼"],
  ["Hibiscus", "Adds shine and reduces breakage", "🌺"],
  ["Neem", "Purifies scalp and fights dandruff", "🌿"],
  ["Fenugreek", "Strengthens and conditions hair", "🟡"]
];

const ritualSteps = [
  ["Apply Hair Mask", "Apply AmoghVeda Hair Mask on clean, damp hair.", "👩‍🦱"],
  ["Wait 20–30 Minutes", "Let the natural herbs nourish deeply.", "⏱️"],
  ["Rinse Thoroughly", "Rinse with water.", "💧"],
  ["Use Herbal Shampoo", "Gently cleanse your hair and scalp.", "🧴"],
  ["Healthy, Strong Hair", "Enjoy naturally nourished hair from root to tip.", "✨"]
];

function App() {
  const [active, setActive] = useState(null);

  const openWhatsApp = (product = "AmoghVeda Hair Mask and Herbal Shampoo") => {
    const msg = encodeURIComponent(`Hi AmoghVeda, I want to know more about ${product}.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <>
      <TopBar />
      <Header openWhatsApp={openWhatsApp} />
      <main>
        <Hero openWhatsApp={openWhatsApp} />
        <Products setActive={setActive} />
        <Combo openWhatsApp={openWhatsApp} />
        <Ingredients />
        <Ritual />
        <TrustStrip />
      </main>
      <Footer openWhatsApp={openWhatsApp} />
      <button className="floatingWhatsApp" onClick={() => openWhatsApp()}>☘</button>
      {active && <Modal product={products[active]} close={() => setActive(null)} openWhatsApp={openWhatsApp} />}
    </>
  );
}

function TopBar() {
  return <div className="topBar"><span>❧ 100% Natural</span><span>❧ No Harmful Chemicals</span><span>❧ Made with Love in India</span></div>;
}

function Header({ openWhatsApp }) {
  return (
    <header className="header">
      <a className="logo" href="#home"><span className="brandName">Amogh<span>Veda</span><i>leaf</i></span><small>Nature. Ayurveda. You.</small></a>
      <nav>
        <a className="active" href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#ingredients">Ingredients</a>
        <a href="#how-to-use">How to Use</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="contactBtn" onClick={() => openWhatsApp()}>Contact Us ☘</button>
    </header>
  );
}

function Hero({ openWhatsApp }) {
  return (
    <section id="home" className="hero">
      <div className="leafShadow leafShadowLeft"></div>
      <div className="leafShadow leafShadowRight"></div>
      <div className="heroCopy">
        <p className="eyebrow">Nature Powered<br/>Skin and Hair Care</p>
        <h1>Transform Your<br/>Hair Naturally</h1>
        <h2>Deep Nourishment with<br/>AmoghVeda Hair Mask</h2>
        <p className="heroPara">Repair damaged hair, reduce hair fall, control frizz and restore natural strength with the power of Ayurveda.</p>
        <div className="heroButtons">
          <button className="primaryBtn" onClick={() => openWhatsApp("AmoghVeda Hair Mask")}>☘ Shop Hair Mask</button>
          <a className="secondaryBtn" href="#products">Learn More 🍃</a>
        </div>
        <div className="heroBadges">
          <TrustItem icon="♧" title="Ayurvedic" text="Goodness" />
          <TrustItem icon="❦" title="Treats Roots," text="Not Just Hair" />
          <TrustItem icon="♡" title="Safe for All" text="Hair Types" />
          <TrustItem icon="✾" title="Made with" text="Love in India" />
        </div>
      </div>
      <div className="heroProductArea">
        <img className="heroComboImage" src="/images/hero-combo.png" alt="AmoghVeda Hair Mask and Herbal Shampoo" />
      </div>
    </section>
  );
}

function TrustItem({ icon, title, text }) {
  return <div className="trustMini"><strong>{icon}</strong><span>{title}<br/>{text}</span></div>;
}

function Products({ setActive }) {
  return (
    <section id="products" className="section products">
      <h2><span>❧</span> Our Products <span>❧</span></h2>
      <p className="sectionSub">Ayurvedic care, crafted for beautiful hair</p>
      <div className="productGrid">
        <ProductCard type="mask" setActive={setActive} />
        <ProductCard type="shampoo" setActive={setActive} />
      </div>
    </section>
  );
}

function ProductCard({ type, setActive }) {
  const product = products[type];
  return (
    <article className={`productCard ${type === "mask" ? "bestCard" : ""}`}>
      <div className="badge">{product.badge}</div>
      <div className="productImageWrap">
        <img src={product.image} alt={product.title} />
        <span className="cardLeaf leafOne"></span>
        <span className="cardLeaf leafTwo"></span>
      </div>
      <div className="productText">
        <h3><small>AmoghVeda</small>{product.shortTitle}</h3>
        <p>{product.description}</p>
        <ul>{product.benefits.map(b => <li key={b}>{b}</li>)}</ul>
        <button className="primaryBtn viewBtn" onClick={() => setActive(type)}>View Details →</button>
      </div>
    </article>
  );
}

function Combo({ openWhatsApp }) {
  return (
    <section className="combo">
      <div className="comboImageGroup"><img src="/images/mask.png" alt="Hair Mask" /><b>+</b><img src="/images/shampoo.png" alt="Shampoo" /></div>
      <div className="comboCopy">
        <h2>Complete Hair Care Combo</h2><h3>Hair Mask + Herbal Shampoo</h3>
        <div className="comboPoints"><span>Deep Nourishment</span><span>Strong Roots</span><span>Reduces Hair Fall</span><span>Healthy Scalp</span><span>Natural Shine</span></div>
        <p>❧ Better together for best results ❧</p>
      </div>
      <button className="comboBtn" onClick={() => openWhatsApp("Hair Mask + Herbal Shampoo Combo")}>☘ Buy Combo on WhatsApp</button>
    </section>
  );
}

function Ingredients() {
  return (
    <section id="ingredients" className="section ingredients">
      <h2><span>❧</span> Powered by Nature, Backed by Ayurveda <span>❧</span></h2>
      <div className="ingredientGrid">
        {ingredients.map(([name, text, icon]) => <div className="ingredient" key={name}><div className="ingredientPic"><span>{icon}</span></div><h4>{name}</h4><p>{text}</p></div>)}
      </div>
    </section>
  );
}

function Ritual() {
  return (
    <section id="how-to-use" className="section ritual">
      <h2><span>❧</span> The Perfect Hair Care Ritual <span>❧</span></h2>
      <p className="sectionSub">Hair Mask first, then Shampoo for best results</p>
      <div className="steps">
        {ritualSteps.map(([title, desc, icon], i) => (
          <div className="step" key={title}>
            <div className="stepCircle"><span>{icon}</span></div>
            <strong>STEP {i + 1}</strong>
            <h4>{title}</h4>
            <p>{desc}</p>
            {i < ritualSteps.length - 1 && <span className="arrow">→</span>}
          </div>
        ))}
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section id="about" className="trustStrip">
      <div>♧<br/><b>100% Natural</b><br/>Herbal Actives</div>
      <div>⊘<br/><b>No Harmful</b><br/>Chemicals</div>
      <div>✾<br/><b>Safe for All</b><br/>Hair Types</div>
      <div>❧<br/><b>Ayurvedic</b><br/>Formulations</div>
      <div>♡<br/><b>Cruelty</b><br/>Free</div>
      <div>☼<br/><b>Made with Love</b><br/>in India</div>
    </section>
  );
}

function Footer({ openWhatsApp }) {
  return (
    <footer id="contact" className="footer">
      <div className="footerBrand"><h3>Amogh<span>Veda</span></h3><p>Nature. Ayurveda. You.</p><p>Inspired by Ayurveda. Crafted with care.<br/>For healthy hair & a better you.</p><div className="socialIcons">◎ f ☘</div></div>
      <div><h4>Quick Links</h4><a href="#home">Home</a><a href="#products">Products</a><a href="#ingredients">Ingredients</a><a href="#how-to-use">How to Use</a><a href="#contact">Contact</a></div>
      <div><h4>Our Products</h4><a href="#products">Hair Mask</a><a href="#products">Herbal Shampoo</a><a href="#products">Combo Pack</a></div>
      <div><h4>Contact Us</h4><p>✉ care@amoghveda.com</p><p>☏ +91 88610 64303</p><p>🌐 www.amoghveda.com</p><button className="footerBtn" onClick={() => openWhatsApp()}>Order on WhatsApp</button></div>
    </footer>
  );
}

function Modal({ product, close, openWhatsApp }) {
  return (
    <div className="modalBackdrop" onClick={close}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={close}>×</button>
        <div className="modalGrid">
          <div className="modalImage"><img src={product.image} alt={product.title} /></div>
          <div>
            <p className="modalTag">{product.badge}</p>
            <h2>{product.title}</h2><p>{product.description}</p>
            <h4>Key Benefits</h4><div className="pills">{product.benefits.map(b => <span key={b}>{b}</span>)}</div>
            <h4>Ingredients</h4><p className="listText">Aloe Vera • Amla • Reetha • Shikakai • Bhringraj • Hibiscus • Neem • Fenugreek • Natural Fragrance • Other Natural Ingredients</p>
            <h4>How To Use</h4><ol>{product.howTo.map(x => <li key={x}>{x}</li>)}</ol>
            <div className="pairing">{product.pairing}</div>
            <button className="primaryBtn" onClick={() => openWhatsApp(product.title)}>Order on WhatsApp</button>
          </div>
        </div>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
