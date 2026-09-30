import { LOGO, PAGES } from "../data/siteData";

export default function SiteHeader({ activePage, menuOpen, onNavigate, onToggleMenu }) {
  return (
    <header>
      <div className="wrap nav">
        <img src={LOGO} alt="Gold Coast Engineering & Projects Ltd." onClick={() => onNavigate("Home")} />
        <button className="menu" onClick={onToggleMenu}>
          Menu
        </button>
        <nav className={"links" + (menuOpen ? " open" : "")}>
          {PAGES.map((item) => (
            <button key={item} className={activePage === item ? "on" : ""} onClick={() => onNavigate(item)}>
              {item}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}