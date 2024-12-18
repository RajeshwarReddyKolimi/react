import React from "react";
import {
  atom,
  RecoilRoot,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

export default function Recoil() {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
}

const users = atom({
  key: "users",
  default: ["Raju", "Ramu", "Ravi"],
});

const filteredUsers = selector({
  key: "filteredUsers",
  get: ({ get }) => {
    const thisUsers = get(users);
    return thisUsers.filter((user) => user.endsWith("u"));
  },
});

function Counter() {
  const [usersList, setUsersList] = useRecoilState(users);
  const [filteredUsersList, setFilteredUsersList] =
    useRecoilValue(filteredUsers);
  return <div></div>;
}
