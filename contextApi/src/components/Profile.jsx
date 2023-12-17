import React, { useState, useContext } from "react";
import UserContext from "../contexts/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user)
    return <h1 className="text-red-700 text-2xl mt-3">Not logged in</h1>;

  return (
    <div>
      <h1 className="text-3xl p-3 bg-slate-800 text-white mt-3">
        Thank You <span className="text-yellow-400">{user.username}</span> for
        Logging in Your Password is{" "}
        <span className="text-yellow-400">{user.password}</span>
      </h1>
    </div>
  );
}

export default Profile;
