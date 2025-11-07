import React, { useEffect, useState } from "react";
import { Container, Nav, Button, Image } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

import "@fontsource/poppins";

function NavbarLandingPage() {
  const navigate = useNavigate();
  const location = useLocation(); // untuk cek path URL
  const [activeSection, setActiveSection] = useState("beranda");

  // Cek halaman saat ini saat komponen pertama kali dimuat
    useEffect(() => {
      // Hanya jalankan redirect sekali saat pertama render
      if (window.location.pathname !== "/LandingPage") {
        navigate("/LandingPage", { replace: true });
      }
    }, []); 

  // Update garis Navbar
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", marginTop: "10px" }}>
      {/* Bagian atas navbar */}
      <div style={{ padding: "8px 0" }}>
        <Container className="d-flex flex-wrap justify-content-between align-items-center">
          {/* Logo + teks */}
          <div className="d-flex flex-column align-items-start">
            <Image
              src="/asset/gambarLogo.png"
              alt="IPB Logo"
              className="logo mb-1"
            />
            <div className="text-muted description">
              Sistem Informasi Laboratorium Nutrisi Ternak Daging dan Kerja (SILAB NTDK)
            </div>
          </div>

          {/* Tombol Login */}
          <Button
            variant="light"
            className="btn-login mt-2 mt-sm-0"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </Container>
      </div>

      {/* Bagian navigasi */}
      <div
        style={{
          backgroundColor: "white",
          borderBottom: "1px solid #ddd",
        }}
      >
        <Container>
          <Nav className="d-flex flex-wrap justify-content-center fw-medium py-2 mt-2" style={{ gap: "5px" }}>
            <Nav.Link
              onClick={() => {
                setActiveSection("beranda");
                navigate("/LandingPage");
              }}
              className={`nav-item-link text-dark ${
                activeSection === "beranda" ? "active-link" : ""
              }`}
              style={{ padding: "4px 6px" }}
            >
              Beranda
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setActiveSection("galeriHeader");
                navigate("/LandingPage");
              }}
              href="#galeriHeader"
              className={`nav-item-link text-dark ${
                activeSection === "galeriHeader" ? "active-link" : ""
              }`}
              style={{ padding: "4px 6px" }}
            >
              Galeri
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setActiveSection("profil");
                navigate("/profile");
              }}
              className={`nav-item-link text-dark ${
                activeSection === "profil" ? "active-link" : ""
              }`}
              style={{ padding: "4px 6px" }}
            >
              Profil
            </Nav.Link>
            <Nav.Link
              href="#harga"
              className={`nav-item-link text-dark ${
                activeSection === "harga" ? "active-link" : ""
              }`}
              style={{ padding: "4px 6px" }}
            >
              Daftar Harga Analisis
            </Nav.Link>
            <Nav.Link
              href="#kontak"
              className={`nav-item-link text-dark ${
                activeSection === "kontak" ? "active-link" : ""
              }`}
              style={{ padding: "4px 6px" }}
            >
              Contacts
            </Nav.Link>
          </Nav>
        </Container>
      </div>

      {/* CSS Responsif */}
      <style>{`
        .logo {
          width: 230px;
          height: auto;
        }

        .description {
          font-size: 0.7rem;
          color: #8D6E63;
        }

        .btn-login {
          background-color: #D9D9D9 !important;
          color: black !important;
          border-radius: 8px;
          padding: 6px 20px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .nav-item-link {
          font-size: 1rem;
          margin: 0 5px;
          transition: color 0.3s ease, border-bottom 0.3s ease;
          border-bottom: 2px solid transparent;
          padding-bottom: 4px;
        }

        .nav-item-link:hover {
          color: #8B6B61 !important;
        }

        .active-link {
          border-bottom: 2px solid #8D6E63;
          font-weight: 600;
          color: #8B6B61 !important;
        }

        @media (max-width: 768px) {
          .logo {
            width: 160px;
          }

          .nav-item-link {
            font-size: 0.85rem;
            margin: 0 6px;
          }

          .btn-login {
            font-size: 0.7rem;
            padding: 5px 15px;
          }
        }
      `}</style>
    </div>
  );
}

export default NavbarLandingPage;
