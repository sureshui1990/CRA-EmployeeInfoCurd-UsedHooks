import React, { useContext } from "react";
import { UserContext, BusinessContext } from "../App";

export default function ContextApiTwo() {
  const user = useContext(UserContext);
  const business = useContext(BusinessContext);

  console.log("user && business", user, business);

  return (
    <div>
      <h4>ContextApiTwo</h4>
      <h5>Welcome {user.name}</h5>
      <h6>Age: {user.age}</h6>
      <div>
        <p>{business.profit}</p>
      </div>
    </div>
  );
}
