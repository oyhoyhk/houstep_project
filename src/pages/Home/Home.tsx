import styled from "@emotion/styled";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigator = useNavigate();

  return (
    <Container>
      <Logo />
      <Button onClick={() => navigator("/order")}>주문하러 가기</Button>
    </Container>
  );
}

const Button = styled.div`
  width: 172px;
  height: 88px;
  background: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-top: 41px;
  cursor: pointer;
`;

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
