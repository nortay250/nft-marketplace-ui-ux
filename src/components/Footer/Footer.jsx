import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const MY__ACCOUNT = [
  {
    display: "Author Profile",
    url: "/seller-profile",
  },
  {
    display: "Create Item",
    url: "/create",
  },
  {
    display: "Collection",
    url: "/market",
  },
  {
    display: "Edit Profile",
    url: "/edit-profile",
  },
];

const RESOURCES = [
  {
    display: "Help Center",
    url: "#",
  },
  {
    display: "Partner",
    url: "#",
  },
  {
    display: "Community",
    url: "#",
  },
  {
    display: "Activity",
    url: "#",
  },
];

const COMPANY = [
  {
    display: "About",
    url: "#",
  },
  {
    display: "Career",
    url: "#",
  },
  {
    display: "Ranking",
    url: "#",
  },
  {
    display: "Contact Us",
    url: "/contact",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-content">
          <div className="logo">
            <h2 className="d-flex gap-2 align-items-center">
              <span>
                <i class="ri-fire-fill"></i>
              </span>
              NFTs
            </h2>
          </div>
          <div className="footer-links">
            <h5 className="mr">
              {" "}
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                Home
              </Link>
            </h5>
            <h5 className="mr">
              <Link
                to="/market"
                style={{ color: "white", textDecoration: "none" }}
              >
                Market
              </Link>
            </h5>
            <h5>
              <Link
                to="/create"
                style={{ color: "white", textDecoration: "none" }}
              >
                Create
              </Link>
            </h5>
          </div>
          <div className="social__links d-flex gap-3 align-items-center">
            <span>
              <Link to="#">
                <i class="ri-instagram-line" style={{ fontSize: "22px" }}></i>
              </Link>
            </span>
            <span>
              <Link to="#">
                <i class="ri-twitter-line" style={{ fontSize: "22px" }}></i>
              </Link>
            </span>
            <span>
              <Link to="#">
                <i class="ri-discord-line" style={{ fontSize: "22px" }}></i>
              </Link>
            </span>
          </div>
        </div>
        <Col lg="12" className="mt-4 text-center">
          <p className="copyright">
            {" "}
            Copyright 2022, NorApps All Rights Reserved.{" "}
          </p>
        </Col>
      </Container>
    </footer>
  );
};

export default Footer;
