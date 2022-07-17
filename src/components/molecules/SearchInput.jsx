import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";
import styled from "styled-components";

export const SearchInput = () => {
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" maxLength="10" />
      <SButtonWrapper>
        <PrimaryButton children={"検索"} />
      </SButtonWrapper>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
