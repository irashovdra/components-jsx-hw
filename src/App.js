import React from "react";
import { Profile } from "./components/Profile";
import { Statistics } from "./components/Statistics/Statistics";
import { FriendList } from "./components/Friends/FriendsList";
import { TransactionHistory } from "./components/TransactionHistory";
import user from "./data/user.json";
import data from "./data/data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";
import "./components/Statistics/Statistics.css";
import "./components/Friends/Friends.css";

const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
