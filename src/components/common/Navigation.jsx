import React from "react";

const Navigation = (props) => {
  console.log(props);
  return (
    <div>
      <div>
        <h4>Logo</h4>
      </div>

      <div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <div>{props.user.name}</div>
    </div>
  );
};

export default Navigation;
