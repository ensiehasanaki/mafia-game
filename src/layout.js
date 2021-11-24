import "./layout.css";
import Footer from "./footer";

export default function Layout() {
    return (
        <div className="layout">
            <nav className="menu">top menu</nav>
            <section className="section">main page wrapper</section>
            <side className="side">extra information wrapper</side>
            <footer className="footer">
                <Footer />
            </footer>
        </div>
    );
}
