import Button from "./Btn";

function Friend({ friend, selectHandler, select }) {
  const isSelected = select?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""} key={friend.id}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">You own {Math.abs(friend.balance)}$</p>
        // turn nagative to postive
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} own {friend.balance}$
        </p>
      )}
      {friend.balance === 0 && <p>{friend.name} and you are even</p>}

      <Button onClick={() => selectHandler(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

export default Friend;
