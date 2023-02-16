import React from "react";
import "../styles/App.css";
const arr = JSON.parse(
  window.localStorage.getItem("props") || `["hello","world"]`
); // do not change

const users = ["hello", "newton", "school"];

const Join = (props) => {
  return (
    <div id="join">
      {/* Access prop 'words' and print it using .join like words.join(',')*/}
      {users.join(",")}
    </div>
  );
};
const App = () => {
  return (
    <div id="main">
      <Join {...users} />
    </div>
  );
};

export default App;
