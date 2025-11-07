import React, { useState } from "react";
import { Carousel, Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LandingPage.css";
import "@fontsource/poppins"; 

function LandingPage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const images = [
    "/asset/galeri1.jpg",
    "/asset/galeri2.jpg",
    "/asset/galeri3.jpg",
    "/asset/galeri4.jpg",
    "/asset/galeri5.jpg",
    "/asset/galeri6.jpg",
  ];

  return (
    <>
      {/* =======================
          BAGIAN SLIDER / CAROUSEL
      ======================= */}
      <section id="beranda" style={{ textAlign: "center",  maxHeight: "1000vh" }}>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          fade
          interval={2000}
          indicators={false}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/asset/Slider1.jpg"
              alt="Slide 1"
              style={{ maxHeight: "100vh", objectFit: "cover" }}
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/asset/Slider2.jpg"
              alt="Slide 2"
              style={{ maxHeight: "100vh", objectFit: "cover",  }}
            />
          </Carousel.Item>
        </Carousel>

        <div className="carousel-custom-indicators">
          {[0, 1].map((i) => (
            <span
              key={i}
              className={`indicator-dot ${index === i ? "active" : ""}`}
              onClick={() => setIndex(i)}
            ></span>
          ))}
        </div>

      {/* =======================
          BAGIAN GALERI FOTO
      ======================= */}

         <h4 id="galeriHeader" className="text-center mb-5 gallery-title" style={{marginTop : "4rem", fontFamily: "Poppins, sans-serif"}}>
          Galeri Departemen INTP
      </h4>
      <section id="galeri" className="gallery-section shadow-sm" style={{backgroundColor: "#7a6259ff", paddingBottom: "30px"}}>
        <Container>
          <Row className="g-4">
            {images.map((src, index) => (
              <Col
                key={index}
                md={4}
                sm={6}
                xs={12}
                className="d-flex justify-content-center"
              >
                <div className="gallery-image-wrapper">
                  <Image
                    src={src}
                    alt={`Galeri ${index + 1}`}
                    className="gallery-image"
                    fluid
                    style={{marginTop: "3rem", borderRadius : "20px"}}
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
        </section>

         {/* =======================
          BAGIAN Daftar Harga
      ======================= */}
      <h4 className="text-center mb-5 gallery-title" style={{marginTop : "9rem", fontFamily: "Poppins, sans-serif"}}>
          Daftar Jenis dan Biaya
      </h4>
      <div class="d-flex justify-content-center align-items-center fw-medium py-2 gap-4">
      <Card className="analysis-card " >
        <div className="image-container">
          <Card.Img variant="top" src={"/asset/DaftarHarga.png"} />
        </div>
        <Card.Body className="text-center">
          <Card.Title className="analysis-title">Nama Analisis</Card.Title>
          <Card.Text className="analysis-price">Rp. 50.000</Card.Text>
        </Card.Body>
      </Card>

       <Card className="analysis-card">
        <div className="image-container">
          <Card.Img variant="top" src={"/asset/DaftarHarga.png"} />
        </div>
        <Card.Body className="text-center">
          <Card.Title className="analysis-title">Nama Analisis</Card.Title>
          <Card.Text className="analysis-price">Rp. 50.000</Card.Text>
        </Card.Body>
      </Card>

       <Card className="analysis-card">
        <div className="image-container">
          <Card.Img variant="top" src={"/asset/DaftarHarga.png"} />
        </div>
        <Card.Body className="text-center">
          <Card.Title className="analysis-title">Nama Analisis</Card.Title>
          <Card.Text className="analysis-price">Rp. 50.000</Card.Text>
        </Card.Body>
      </Card>

        <Card className="analysis-card">
        <div className="image-container">
          <Card.Img variant="top" src={"/asset/DaftarHarga.png"} />
        </div>
        <Card.Body className="text-center">
          <Card.Title className="analysis-title">Nama Analisis</Card.Title>
          <Card.Text className="analysis-price">Rp. 50.000</Card.Text>
        </Card.Body>
      </Card>
      </div>

       <div className="d-flex justify-content-end">
            <Button
              variant="light"
              className="px-4"
              style={{
                backgroundColor: "#45352F",
                color: "#F2F2F2",
                borderRadius: "5px",
                fontSize: "0.75rem",
                fontWeight: "500",
                margin: "30px"
              }}
            >
              Lihat Lebih Banyak
            </Button>
        </div>

      <footer style={{ backgroundColor: "#FFFFFF", color: "#45352F", padding: "40px 80px" }}>
      {/* Baris atas */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-semibold m-0">SOP Analisis Lab</h5>
        <Button
          variant="light"
          style={{
            backgroundColor: "#45352F",
            color: "#F2F2F2",
            borderRadius: "6px",
            fontSize: "0.8rem",
            fontWeight: "500",
            padding: "6px 16px"
          }}
        >
          Analisis Lab
        </Button>
      </div>

      <hr style={{ borderTop: "3px solid #45352F" }} />

      <div className="d-flex justify-content-between align-items-start flex-wrap" style={{ gap: "20px" }}>
      {/* Kolom kiri: Judul dan ikon sosial */}
      <div>
        <p className="fw-semibold" style={{ fontSize: "30px", textAlign: "left" }}>Contacts</p>

        {/* Ikon sosial */}
        <div className="d-flex align-items-center gap-3">
          <a href="#" style={{ color: "#45352F" }}><FaFacebookF size={18} /></a>
          <a href="#" style={{ color: "#45352F" }}><FaLinkedinIn size={18} /></a>
          <a href="#" style={{ color: "#45352F" }}><FaYoutube size={18} /></a>
          <a href="#" style={{ color: "#45352F" }}><FaInstagram size={18} /></a>
        </div>
      </div>

      {/* Kolom kanan: Alamat sekretariat */}
      <div style={{ maxWidth: "550px", fontSize: "0.9rem", textAlign: "left" }}>
        <p className="mb-1">
          Sekretariat Departemen INTP Fapet IPB Gedung Fakultas Peternakan Wing 8 Level 3
        </p>
        <p className="mb-1">
          Jl. Agatis Kampus IPB Darmaga Bogor, 16680 Jawa Barat - Indonesia
        </p>
        <p className="mb-1">Phone: +62251-8626213, 8622842</p>
        <p className="mb-1">Fax: +62251-8626213, 8622842</p>
        <p className="mb-0">Email: sekretariatintp@gmail.com</p>
      </div>
    </div>


    </footer>
      </section>

  
    </>
  );
}

export default LandingPage;
