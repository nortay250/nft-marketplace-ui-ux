import React, { useState } from "react";
import "../styles/market.css";
import CommonSection from "../components/ui/CommonSection/CommonSection";
import NftCard from "../components/ui/NftCard/NftCard";
import { Container, Row, Col } from "reactstrap";
import { NFT__DATA } from "../assets/data/data";

const Market = () => {
  const [data, setData] = useState(NFT__DATA);

  /* Sorting Data by High, Mid and Low */

  const handleSort = (e) => {
    const filterValue = e.target.value;

    if (filterValue === "high") {
      const filterData = NFT__DATA.filter((item) => item.currentBid >= 6);
      setData(filterData);
    }
    if (filterValue === "mid") {
      const filterData = NFT__DATA.filter(
        (item) => item.currentBid >= 5.5 && item.currentBid <= 6
      );
      setData(filterData);
    }
    if (filterValue === "low") {
      const filterData = NFT__DATA.filter(
        (item) => item.currentBid >= 4.89 && item.currentBid < 5.5
      );
      setData(filterData);
    }
  };

  return (
    <div>
      <CommonSection title={"MarketPlace"} />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <div className="market__product__filter d-flex align-items-center justify-content-between">
                <div className="filter__right">
                  <select onChange={handleSort}>
                    <option>Sort By</option>
                    <option value="high">High</option>
                    <option value="mid">Mid</option>
                    <option value="low">Low</option>
                  </select>
                </div>
              </div>
            </Col>

            {data.map((item) => (
              <Col lg="3" md="4" sm="6" className="mb-4" key={item.id}>
                <NftCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Market;
