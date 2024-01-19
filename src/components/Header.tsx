import styled from "@emotion/styled";
import { ReactComponent as Logo } from "../assets/Logo.svg";

export default function Header() {
  return (
    <Container>
      <Logo />
    </Container>
  );
}

const Container = styled.header`
  width: 100%;
  height: 57px;
  background: black;
  padding-left: 12px;
  display: flex;
  align-items: center;

  & > svg {
    width: 94px;
  }
`;
