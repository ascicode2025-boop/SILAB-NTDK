import React, { useState } from "react";
import { Form, Button, InputGroup, Alert } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RegisterPage.css";
import axios from "axios";

// Dapatkan URL API dari .env
// Pastikan file .env.local Anda berisi:
// REACT_APP_API_BASE_URL=http://silab-ntdk.test/api
const API_URL = process.env.REACT_APP_API_BASE_URL;

function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // --- STATE UNTUK FORM DATA ---
  const [formData, setFormData] = useState({
    name: "", 
    email: "",
    institusi: "", 
    nomor_telpon: "",
    password: "",
    password_confirmation: "",
  });

  // --- STATE UNTUK ERROR/SUCCESS ---
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  // --- Handler untuk SEMUA input ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // --- Handler untuk SUBMIT ---
  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah reload
    setLoading(true);
    setError(null);
    setSuccess(null);

    // 1. Cek jika password tidak cocok
    if (formData.password !== formData.password_confirmation) {
      setError("Password dan Konfirmasi Password tidak cocok.");
      setLoading(false);
      return;
    }

    // 2. Cek jika institusi belum dipilih
    if (formData.institusi === "") {
      setError("Silakan pilih tipe institusi Anda.");
      setLoading(false);
      return;
    }

    // 3. Kirim data ke API Laravel
    try {
      // Kita panggil /register yang kita buat di routes/api.php
      const response = await axios.post(`${API_URL}/register`, formData);

      // Jika berhasil
      setLoading(false);
      setSuccess("Registrasi berhasil! Anda akan dialihkan ke halaman Login...");
      console.log(response.data); // Lihat data user & token di console

      // Redirect ke login setelah 2 detik
      setTimeout(() => {
        // Ganti dengan navigasi React Router jika ada (misal: navigate('/login'))
         window.location.href = '/login'; 
      }, 2000);

    } catch (err) {
      // Jika gagal
      setLoading(false);
      console.error("Error response:", err.response); // Log error lengkap ke console

      if (err.response && err.response.data) {
        // Cek jika errornya adalah error validasi
        if (err.response.data.errors) {
          const errors = err.response.data.errors;
          const errorMessages = Object.values(errors).flat().join(" ");
          setError(errorMessages);
        } 
        // Cek jika errornya adalah pesan server
        else if (err.response.data.message) {
          setError(err.response.data.message); // Tampilkan pesan error dari Laravel
        } 
        // Jika tidak ada keduanya, tampilkan error umum
        else {
          setError("Registrasi gagal. Server mengembalikan error yang tidak dikenal.");
        }
      } else {
        // Jika tidak ada respons sama sekali (misal: server mati)
        setError("Registrasi gagal. Tidak bisa terhubung ke server.");
      }
    }
  };

  return (
    <div className="login-page d-flex justify-content-center align-items-center">
      <div className="login-container text-center p-4 rounded">
        <img
          src="/asset/gambarLogo.png"
          alt="IPB University"
          className="login-logo mb-3"
          style={{ width: "300px" }}
        />
        <h5
          className="login-title fw-normal mb-4"
          style={{ fontSize: "12px" }}
        >
          Sistem Informasi Laboratorium Nutrisi Ternak Daging dan Kerja
        </h5>
        <Form onSubmit={handleSubmit}>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}
          <Form.Group className="mb-3 text-start">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukkan username"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3 text-start">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Masukkan Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3 text-start">
            <Form.Label>Institusi</Form.Label>
            <Form.Select
              name="institusi"
              value={formData.institusi}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Pilih tipe...
              </option>
              <option value="umum">Umum</option>
              <option value="mahasiswa">Mahasiswa</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3 text-start">
            <Form.Label>Nomor Telpon</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukkan Nomor Telpon"
              name="nomor_telpon"
              value={formData.nomor_telpon}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-4 text-start">
            <Form.Label>Password</Form.Label>
            <InputGroup>
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <Button
                variant="light"
                onClick={() => setShowPassword(!showPassword)}
                className="border"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </Button>
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-4 text-start">
            <Form.Label>Confirm Password</Form.Label>
            <InputGroup>
              <Form.Control
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Konfirmasi password"
                name="password_confirmation"
                value={formData.password_confirmation}
                onChange={handleChange}
                required
              />
              <Button
                variant="light"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="border"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </Button>
            </InputGroup>
          </Form.Group>
          <Button
            type="submit"
            className="w-100 login-btn fw-semibold"
            disabled={loading}
          >
            {loading ? "Mendaftar..." : "Register"}
          </Button>
        </Form>
        <p className="mt-3">
          Sudah punya akun? <a href="/login">Login di sini</a>
        </p>
      </div>
    </div>
  );
}
export default RegisterPage;