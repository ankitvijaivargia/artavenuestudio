/**
 * Art Avenue — demo page switcher
 * ------------------------------------------------------------------
 * Wires the four pages together with the same `onNavigate(route, arg)`
 * contract the original prototype used — no router needed. In a real
 * Lovable app, replace this with react-router routes; each page is a
 * self-contained default export.
 *
 *   onNavigate("home")
 *   onNavigate("collection", "Rugs")
 *   onNavigate("product", "Marwar Lounge Chair")
 *   onNavigate("trade")
 */
import React, { useState, useEffect } from "react";
import ArtAvenueHomepage from "./ArtAvenueHomepage";
import CollectionPage from "./CollectionPage";
import ProductPage from "./ProductPage";
import TradePage from "./TradePage";

export default function App() {
  const [page, setPage] = useState({ route: "home", arg: null });

  const onNavigate = (route, arg = null) => {
    setPage({ route, arg });
    window.scrollTo({ top: 0 });
  };

  // keep "custom"/"library"/unknown routes graceful
  const route = ["home", "collection", "product", "trade"].includes(page.route) ? page.route : "collection";

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [page]);

  switch (route) {
    case "collection":
      return <CollectionPage onNavigate={onNavigate} title={page.arg} />;
    case "product":
      return <ProductPage onNavigate={onNavigate} name={page.arg} />;
    case "trade":
      return <TradePage onNavigate={onNavigate} />;
    default:
      return <ArtAvenueHomepage onNavigate={onNavigate} />;
  }
}
