import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="text-center text-2xl p-3 bg-slate-800 text-white">
      User: {userid}
    </div>
  );
}

export default User;
