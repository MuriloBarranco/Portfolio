import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { contactConfig, meta } from "../../content_option";
import { Container, Row, Col, Alert } from "react-bootstrap";
import * as emailjs from "emailjs-com";
import styled, { keyframes } from "styled-components";

const Form = styled.form`
  .form-control {
    padding: 1.375rem 0.75rem;
    line-height: 1.5;
    color: var(--text-color);
    background-color: var(--bg-color);
    border-radius: 0 !important;
    border: 1px solid var(--secondary-color);
    margin-bottom: 2em;
    height: calc(2.5em + 0.75rem + 2px);
  }

  textarea.form-control {
    height: 150px; 
  }
`;

const LoadingBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 10px;
  z-index: 999999999;
  background: var(--text-color);
  transform: translateX(100%);
  animation: ${keyframes`
    0% {
      transform: translateX(-100%);
    }
    40% {
      transform: translateX(0%);
    }
    60% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(100%);
    }
  `} 1s ease-in-out infinite;
  animation-delay: 0.3s;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
 color: var(--primary-color);
  border: none;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  background-color: var(--secondary-color);
  
  &:hover {
    opacity: 0.8;
  }
 
`;

export const ContactUs = () => {

  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });



  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata({ ...formData, loading: true });

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormdata({
            ...formData,
            loading: false,
            alertmessage: "Mensagem enviada com sucesso!",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          console.log(error.text);
          setFormdata({
            ...formData,
            alertmessage: `Falha ao enviar mensagem: ${error.text}`,
            variant: "danger",
            show: true,
          });
          document.getElementsByClassName("co_alert")[0].scrollIntoView();
        }
      );
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contato</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Entre em Contato</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <Alert
              variant={formData.variant}
              className={`rounded-0 co_alert ${formData.show ? "d-block" : "d-none"}`}
              onClose={() => setFormdata({ ...formData, show: false })}
              dismissible
            >
              <p className="my-0">{formData.alertmessage}</p>
            </Alert>
          </Col>
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Entre em contato</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              {contactConfig.hasOwnProperty("YOUR_FONE") && (
                <p>
                  <strong>Telefone:</strong> {contactConfig.YOUR_FONE}
                </p>
              )}
            </address>
            <p>{contactConfig.description}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <Form onSubmit={handleSubmit} className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Nome"
                    value={formData.name || ""}
                    type="text"
                    required
                    onChange={handleChange}
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={formData.email || ""}
                    required
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Mensagem"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <SubmitButton
                    className="btn ac_btn"
                    type="submit"
                    sending={formData.loading}
                  >
                    {formData.loading ? "Carregando..." : "ENVIAR"}
                  </SubmitButton>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
      <LoadingBar className={formData.loading ? "loading-bar" : "d-none"}></LoadingBar>
    </HelmetProvider>
  );
};
