import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/poppins";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

function Profile() {
  return (
    <section id="profil" style={{ fontFamily: "Poppins, sans-serif", padding: "50px 0" }}>
      <Container>
        {/* VISI */}
        <Row className="mb-5">
          <Col md={12}>
            <h2 className="fw-bold" style={{ color: "#3a3a3a" }}>
              VISI
            </h2>
            <p
              className="text-muted mt-3"
              style={{ textAlign: "justify", lineHeight: "1.8" }}
            >
              Menjadi Bagian Unggulan dan Terkemuka dibidang Industri Ternak
            </p>
          </Col>
        </Row>

        {/* MISI */}
        <Row>
          <Col md={12}>
            <h2 className="fw-bold" style={{ color: "#3a3a3a" }}>
              MISI
            </h2>
            <ol
              className="text-muted mt-3"
              style={{ textAlign: "justify", lineHeight: "1.8", paddingLeft: "20px" }}
            >
              <li>
                Mengimplementasikan Pendidikan Tinggi Modern Untuk Menghasilkan Berkualitas dan Terampil 
                Dalam Memanfaatkan Sumberdaya Pakan Lokal dan Dalam Mengembangkan Industri Ternak Daging dan Kerja Serta Mempunyai Jiwa Kewirausahaan sehingga dapat Bersaing di Pasar Global
              </li>
              <li>
                Mengembangkan dan mengaplikasikan Ilmu Pengetahuan dibidang Nutrisi Ternak Daging dan Kerja 
                Melalui Proses Pendidikan dan Penyelesaian Masalah yang berhubungan dengan Bidang Nutrisi Ternak Daging dan Kerja
              </li>
              <li>
                Meningkatkan Tanggung Jawab dalam Pengabdian pada Masyarakat dengan mengembangkan keahlian dan Program Profesional
                 yang berhubungan dengan Bidang Nutrisi dan Ternak Kerja
              </li>
            </ol>
          </Col>
        </Row>
      </Container>

    {/* =======================
          Struktur 
      ======================= */}
             <h4
            className="text-center mb-5 gallery-title"
            style={{ marginTop: "5rem", fontFamily: "Poppins, sans-serif" , fontWeight: "bold"}}
            >
            Struktur Departemen Ilmu Nutrisi Dan Teknologi Pakan Fakultas Perternakan
            </h4>

            <Container>
            <Row className="g-4 justify-content-center">
                <Col xs={12} sm={6} md={4} lg={3}>
                <Card className="profile-card text-center" style={{width: "230px"}}>
                    <div className="image-container">
                    <Card.Img variant="top" src={"#"}/>
                    </div>
                    <Card.Body>
                    <Card.Title className="profile-Nama" style={{fontWeight: "200", fontSize: "13px"}}>Prof. Dr. sc. ETH. Anuraga Jayanegara, S.Pt., M.Sc.</Card.Title>
                    <Card.Text className="profile-Jabatan" style={{fontSize: "10px"}}>Ketua Departemen</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            </Container>

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
            
                    <div>
                       <p className="fw-semibold mb-1" style={{fontSize: "30px"}}>Contacts</p>
                    {/* Ikon sosial */}
                    <div className="d-flex align-items-center gap-3">
                      <a href="#" style={{ color: "#45352F" }}><FaFacebookF size={18} /></a>
                      <a href="#" style={{ color: "#45352F" }}><FaLinkedinIn size={18} /></a>
                      <a href="#" style={{ color: "#45352F" }}><FaYoutube size={18} /></a>
                      <a href="#" style={{ color: "#45352F" }}><FaInstagram size={18} /></a>
                    </div>
                    </div>
            
                  {/* Konten bawah */}
                  <div className="d-flex justify-content-end align-items-end flex-wrap">
                    <div>
                      <div style={{ maxWidth: "550px", fontSize: "0.9rem" }}>
                        <p className="mb-1">
                          Sekretariat Departemen INTP Fapet IPB Gedung Fakultas Peternakan Wing 8 Level 3
                        </p>
                        <p className="mb-1">
                          Jl. Agatis Kampus IPB Darmaga Bogor, 16680 &nbsp; Jawa Barat – Indonesia
                        </p>
                        <p className="mb-1">Phone: +62251-8626213, 8622842</p>
                        <p className="mb-1">Fax: +62251-8626213, 8622842</p>
                        <p className="mb-0">Email: sekretariatintp@gmail.com</p>
                      </div>
                    </div>
            
                  </div>
                </footer>
        </section>
  );
}

export default Profile;
