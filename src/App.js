import FriendsList from "./Components/FriendList.jsx";
import { initialFriends } from "./utlis/utlis.js";

function App() {
  return (
    <div className="app">
      <div className="sidebar"></div>
      <FriendsList friends={initialFriends} />
    </div>
  );
}

export default App;
