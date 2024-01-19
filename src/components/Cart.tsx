import styled from "@emotion/styled";

export default function Cart() {
  return (
    <Container>
      <div className="info">총 수량 : 0개</div>
      <div className="info">총 가격 : 0원</div>
      <Button isActive={false}>주문하기</Button>
    </Container>
  );
}

const Button = styled.button<{ isActive: boolean }>`
  outline: none;
  border: none;
  width: 80%;
  height: 48px;
  background: ${({ isActive }) => (isActive ? "black" : "#c1c1c1")};
  color: white;
  margin-top: 15px;
`;
const Container = styled.div`
  width: 100%;
  height: 170px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background: #fff;
  box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > .info {
    width: 80%;
    text-align: right;
    font-size: 18px;
    color: black;
    font-family: Inter;
    font-weight: 400;
  }
`;
