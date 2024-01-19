import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Item from "./Item";
import { ItemDto } from "../api/interface";
import { useRecoilValue } from "recoil";
import { cartState } from "../api/atom";

export default function ItemList() {
  const [items, setItems] = useState<ItemDto[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const cartInfo = useRecoilValue(cartState);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const response = await fetch("http://localhost:3001/items");
      const data = await response.json();
      console.log(data);
      setItems(data);
      setLoading(false);
    }

    getData();
  }, []);

  if (loading) {
    return (
      <Loading>
        목록을
        <br />
        불러오고 있습니다.
      </Loading>
    );
  }
  return (
    <Container>
      {items.map((info) => (
        <Item key={info.id} info={info} count={cartInfo.get(info.id) || 0} />
      ))}
    </Container>
  );
}

const Loading = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Container = styled.div`
  width: 100%;
  flex: 1;
  background: white;
  overflow: auto;
`;
