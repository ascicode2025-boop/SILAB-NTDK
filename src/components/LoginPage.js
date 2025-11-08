import React, { useState, useEffect } from "react";
import { Form, Button, InputGroup, Alert } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LoginPage.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios"; 
import { setSession } from '../services/AuthService'; 

// Dapatkan URL API dari .env
const API_URL = process.env.REACT_APP_API_BASE_URL;

function LoginPage() {
    const history = useHistory();
    const [showPassword, setShowPassword] = useState(false);

    
    const [formData, setFormData] = useState({
        email: "", 
        password: "",
    });

   
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [loginSuccess, setLoginSuccess] = useState(false);

    
    useEffect(() => {
        if (loginSuccess) {
            console.log('useEffect: loginSuccess is true, navigating to dashboard');
            
            history.push('/dashboard');
        }
    }, [loginSuccess, history]);

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

   
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        
        if (!formData.email.trim()) {
            setLoading(false);
            setError("Username tidak boleh kosong.");
            return;
        }

        try {
            console.log('Attempting login with data:', formData);
            console.log('API URL:', `${API_URL}/login`);

            // Panggil API /login yang dibuat di Laravel
            const response = await axios.post(`${API_URL}/login`, formData);
            console.log('API Response:', response);

            // Jika berhasil:
            const { token, user } = response.data;
            console.log('Token:', token);
            console.log('User:', user);

            // 1. Simpan token dan data user di Local Storage
            setSession(token, user);

            // 2. Set success state untuk trigger navigate
            setLoading(false);
            setLoginSuccess(true);
            console.log('Login successful, setting success state');

        } catch (err) {
            setLoading(false);
            console.error('Login error:', err);
            console.error('Error response:', err.response);
            console.error('Error response data:', err.response?.data);
            console.error('Error response status:', err.response?.status);

            // Tangani error jika kredensial salah atau validasi gagal
            if (err.response) {
                if (err.response.status === 401) {
                    setError("Username atau password salah.");
                } else if (err.response.status === 422) {
                    const validationErrors = err.response.data.errors;
                    let errorMessage = "Data tidak valid. ";
                    if (validationErrors) {
                        // Tampilkan error spesifik dari Laravel
                        const errorFields = Object.keys(validationErrors);
                        errorMessage += errorFields.map(field => `${field}: ${validationErrors[field].join(', ')}`).join('; ');
                    } else {
                        errorMessage += err.response.data.message || "Periksa input Anda.";
                    }
                    setError(errorMessage);
                } else {
                    setError(`Error ${err.response.status}: ${err.response.data.message || "Terjadi kesalahan di server."}`);
                }
            } else if (err.request) {
                setError("Tidak dapat terhubung ke server. Periksa koneksi internet atau URL API.");
            } else {
                setError("Terjadi kesalahan tak terduga.");
            }
        }
    };

    return (
        <div className="login-page d-flex justify-content-center align-items-center">
            <div className="login-container text-center p-4 rounded">
                {/* Logo IPB */}
                <img
                    src="/asset/gambarLogo.png"
                    alt="IPB University"
                    className="login-logo mb-3"
                    style={{ width: "300px" }}
                />

                <h5 className="login-title fw-normal mb-4" style={{ fontSize: "12px" }}>
                    Sistem Informasi Laboratorium Nutrisi Ternak Daging dan Kerja
                </h5>

                {/* Form di-wrap dengan onSubmit */}
                <Form onSubmit={handleSubmit}> 
                    {/* Tampilkan pesan Error */}
                    {error && <Alert variant="danger">{error}</Alert>}

                    {/* Input Username (Menggantikan Email di tampilan) */}
                    <Form.Group className="mb-3 text-start">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Masukkan Username"
                            name="email" // Key untuk backend, kirim sebagai 'email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    {/* Input Password */}
                    <Form.Group className="mb-4 text-start">
                        <Form.Label>Password</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type={showPassword ? "text" : "password"}
                                placeholder="Masukkan password"
                                name="password" // Key untuk backend
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

                    <Button
                        type="submit"
                        className="w-100 login-btn fw-semibold"
                        disabled={loading}
                    >
                        {loading ? "Memuat..." : "Login"}
                    </Button>
                </Form>

                <p className="mt-3 mb-0" style={{ fontSize: "0.85rem" }}>
                    Don’t have an account?{" "}
                    <Link to="/register" className="text-link">
                        Register Here!
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;