import styled from "@emotion/styled";

export default function Order() {
  return <Container>Order</Container>;
}

const Container = styled.div`
  width: 100vw;
  max-width: 480px;
  height: 100vh;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
`;
