function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map((el) => (
        <Friend friend={el} key={el.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li key={friend.id}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 ? (
        <p className="red">You own {friend.balance}$</p>
      ) : (
        <p className="green">
          {friend.name} own you {friend.balance}$
        </p>
      )}
    </li>
  );
}

export default FriendsList;
