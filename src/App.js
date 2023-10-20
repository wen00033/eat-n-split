import FriendsList from "./Components/FriendList.jsx";
import FormAddFriend from "./Components/FormAddFriend.jsx";
import FormSplitField from "./Components/FormSplitField.jsx";
import Button from "./Components/Btn.jsx";
import { initialFriends } from "./utlis/utlis.js";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const [friend, setFriend] = useState(initialFriends);
  const [select, setSelect] = useState(null);

  function ShowHandler() {
    setShow((el) => !el);
  }

  function addFriendHandler(newfriend) {
    setFriend((el) => [...el, newfriend]);
    ShowHandler();
  }

  function selectHandler(friend) {
    // cause el.id not always show up as is it, use simple js to resolve it
    setSelect((el) => (el?.id === friend.id ? null : friend));
    setShow(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          selectHandler={selectHandler}
          friends={friend}
          select={select}
        />
        {show === false ? (
          ""
        ) : (
          <FormAddFriend addFriendHandler={addFriendHandler} />
        )}
        <Button onClick={ShowHandler}>{show ? "close" : "add friend"}</Button>
      </div>
      {select && <FormSplitField selection={select} />}
    </div>
  );
}

export default App;
