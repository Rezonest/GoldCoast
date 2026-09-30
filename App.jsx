import { useEffect, useState } from "react";

import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import AboutPage from "./pages/AboutPage";
import CapabilitiesPage from "./pages/CapabilitiesPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import NetworkPage from "./pages/NetworkPage";
import "./styles/styles.css";

const PAGE_COMPONENTS = {
  Home: HomePage,
  About: AboutPage,
  Capabilities: CapabilitiesPage,
  Network: NetworkPage,
  Contact: ContactPage,
};

export default function App() {
  const [page, setPage] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const Page = PAGE_COMPONENTS[page] ?? HomePage;

  const navigateTo = (nextPage) => {
    setPage(nextPage);
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    document.title = "Gold Coast Engineering & Projects Ltd.";
  }, []);

  return (
    <>
      <SiteHeader
        activePage={page}
        menuOpen={menuOpen}
        onNavigate={navigateTo}
        onToggleMenu={() => setMenuOpen((isOpen) => !isOpen)}
      />
      <Page onNavigate={navigateTo} />
      <SiteFooter onNavigate={navigateTo} />
    </>
  );
}