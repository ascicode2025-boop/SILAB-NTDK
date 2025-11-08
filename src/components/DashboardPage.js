import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { getUser, logout } from '../services/AuthService'; // <-- Panggil AuthService

function DashboardPage() {
    const history = useHistory();
    // State untuk menyimpan data user yang diambil dari Local Storage
    const [user, setUser] = useState(null);

    useEffect(() => {
        console.log('DashboardPage: Checking user data...');
        // Ambil data user dari Local Storage saat komponen dimuat
        const userData = getUser();
        console.log('DashboardPage: User data from localStorage:', userData);
        if (userData) {
            console.log('DashboardPage: User found, setting user state');
            setUser(userData);
        } else {
            // Jika tidak ada user (misal: token hilang), alihkan ke halaman login
            console.log('DashboardPage: No user data found, redirecting to login');
            history.push('/login');
        }
    }, [history]);

    // Handler untuk tombol logout
    const handleLogout = () => {
        // Panggil fungsi logout dari AuthService (menghapus token)
        logout();
        // Arahkan kembali ke halaman login
        history.push('/login');
    };

    // Tampilkan pesan loading jika data user belum dimuat
    if (!user) {
        return <div className="p-5 text-center">Memuat...</div>;
    }

    // Tampilan utama setelah login berhasil
    return (
        <div className="container mt-5 p-4 border rounded shadow-sm">
            <div className="d-flex justify-content-between align-items-center mb-4">
                {/* Menampilkan nama user */}
                <h1 style={{ color: '#45352F' }}>Halo, {user.name}!</h1> 
                <Button variant="danger" onClick={handleLogout}>
                    Logout
                </Button>
            </div>
            
            <p className="lead">
                Selamat datang di Dashboard. Ini adalah halaman kosong Anda.
            </p>
            <div className="mt-4 p-3 bg-light rounded">
                <p><strong>Status Institusi:</strong> {user.institusi}</p>
                <p><strong>Email Anda:</strong> {user.email}</p>
                <p>
                    <small>Catatan: Anda sudah berhasil login dan sesi tersimpan.</small>
                </p>
            </div>
        </div>
    );
}

export default DashboardPage;