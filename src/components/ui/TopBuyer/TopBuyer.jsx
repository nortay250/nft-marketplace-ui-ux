import React from "react";
import "./topbuyer.css";
import { Container, Row, Col } from "reactstrap";
import ava01 from "../../../assets/images/ava-01.png";
import { SELLER__DATA } from "../../../assets/data/data";

const TopBuyer = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="buyer__section-title">
              <h3>Top Buyers</h3>
            </div>
          </Col>

          {SELLER__DATA.map((item) => (
            <Col lg="2" md="3" sm="4" xs="6" key={item.id} className="mb-4">
              <div className="single__buyer-card d-flex align-items-center gap-3">
                <div className="buyer__img">
                  <img src={item.sellerImg} alt="" className="w-100" />
                </div>

                <div className="buyer__content">
                  <h6>{item.sellerName}</h6>
                  <h6>{item.currentBid} ETH</h6>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TopBuyer;
