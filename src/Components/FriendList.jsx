import Friend from "./Friend";

function FriendsList({ friends, selectHandler, select }) {
  return (
    <ul>
      {friends.map((el) => (
        <Friend
          friend={el}
          key={el.id}
          selectHandler={selectHandler}
          select={select}
        />
      ))}
    </ul>
  );
}

export default FriendsList;
