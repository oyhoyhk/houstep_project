import styled from "@emotion/styled";
import Header from "../../components/Header";
import ProductList from "../../components/ProductsList";
import Cart from "../../components/Cart";

export default function Order() {
  return (
    <Container>
      <Header />
      <ProductList />
      <Cart />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  max-width: 480px;
  height: 100vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
`;
