import styled from "@emotion/styled";
import { CartDto, ItemDto } from "../api/interface";
import { useSetRecoilState } from "recoil";
import { cartState, priceState } from "../api/atom";

export default function Item({
  info,
  count,
}: {
  info: ItemDto;
  count: number;
}) {
  const setCartInfo = useSetRecoilState(cartState);
  const setPrice = useSetRecoilState(priceState);

  const onIncrease = () => {
    setCartInfo((prev: CartDto) => {
      if (prev.get(info.id) === 999) return prev;
      setPrice((prev) => prev + info.price);
      const count = prev.get(info.id) || 0;
      return new Map(prev.set(info.id, count + 1));
    });
  };

  const onDecrease = () => {
    setCartInfo((prev: CartDto) => {
      const count = prev.get(info.id) || 0;
      if (count === 0) return prev;
      setPrice((prev) => prev - info.price);
      return new Map(prev.set(info.id, count - 1));
    });
  };
  return (
    <Container className={count > 0 ? "active" : ""}>
      <Img />
      <Contents>
        <Upper>
          <div>{info.name}</div>
          {info.event === 1 && <Event>이벤트</Event>}
        </Upper>
        <Lower>
          <Counter>
            <div onClick={onDecrease}>-</div>
            <div>{count}</div>
            <div onClick={onIncrease}>+</div>
          </Counter>
          <div>{info.price.toLocaleString()}원</div>
        </Lower>
      </Contents>
    </Container>
  );
}

const Upper = styled.div`
  display: flex;
  align-items: center;
`;

const Event = styled.div`
  margin-left: 10px;
  color: #fff;

  width: 53px;
  height: 23px;

  border-radius: 10px;
  background: #f75a2f;
  font-family: Roboto;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Lower = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Counter = styled.div`
  display: flex;
  & > div:nth-of-type(2) {
    margin: 0 10px;
  }
  & > div:nth-of-type(1),
  & > div:nth-of-type(3) {
    cursor: pointer;
  }
`;

const Contents = styled.div`
  flex: 1;
  height: 100%;
  margin-left: 15px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Img = styled.div`
  width: 62px;
  height: 62px;
  background: #d9d9d9;
`;

const Container = styled.div`
  width: 80%;
  height: 80px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  margin: 15px auto;
  padding: 10px;
  &.active {
    background: rgba(247, 90, 47, 0.1);
  }
`;
