import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/User/UserCard";

const users = [...Array(10).key()].map((val) => {
  return {
    id: val,
    name: `adachi${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "123456@example.com",
    phone: "090-1111-2222",
    company: {
      name: "test-company"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>User一覧</h2>
      <SearchInput />
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </SContainer>
  );
};
const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
