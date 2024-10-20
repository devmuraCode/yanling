import { Card } from "../../Card/Card";
import Container from "../../Container";
import styled from "./RecommendedProducts.module.scss";
const RecommendedProducts = () => {
  return (
    <div className={styled.wrapper}>
      <Container>
        <div>
          <h1>Tavsiya etilgan mahsulotlar</h1>
          <hr />
          <div className={styled.card_group}>
            <Card label="Lorem epson" description="asdasdasdasdasdasdasd" />
            <Card label="Lorem epson" description="asdasdasdasdasdasdasd" />
            <Card label="Lorem epson" description="asdasdasdasdasdasdasd" />
            <Card label="Lorem epson" description="asdasdasdasdasdasdasd" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RecommendedProducts;
