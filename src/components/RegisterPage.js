import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RegisterPage.css";

function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="login-page d-flex justify-content-center align-items-center">
      <div className="login-container text-center p-4 rounded">
        {/* Logo IPB */}
        <img
          src="/asset/gambarLogo.png"
          alt="IPB University"
          className="login-logo mb-3"
          style={{width: "300px"}}
        />

        <h5 className="login-title fw-normal mb-4" style={{fontSize: "12px"}}>
          Sistem Informasi Laboratorium Nutrisi Ternak Daging dan Kerja
        </h5>

        {/* Form */}
        <Form>
          <Form.Group className="mb-3 text-start">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Masukkan username" />
          </Form.Group>

          <Form.Group className="mb-3 text-start">
            <Form.Label>Email</Form.Label>
            <Form.Control type="Email" placeholder="Masukkan Email" />
          </Form.Group>

          <Form.Group className="mb-3 text-start">
            <Form.Label>Institusi</Form.Label>
            <Form.Control type="text" placeholder="Masukkan Institusi" />
          </Form.Group>

          <Form.Group className="mb-3 text-start">
            <Form.Label>Nomor Telpon</Form.Label>
            <Form.Control type="text" placeholder="Masukkan Nomor Telpon" />
          </Form.Group>


          <Form.Group className="mb-4 text-start">
            <Form.Label>Password</Form.Label>
            <InputGroup>
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan password"
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
                placeholder="Masukkan password"
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
          >
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default RegisterPage;
