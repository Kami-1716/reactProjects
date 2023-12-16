import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/kami-1716")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);

  const data = useLoaderData();

  return (
    <div className="p-4 text-center bg-slate-700 text-white text-3xl">
      <p className="mb-3">Github Followers: {data.followers}</p>
      <div className="flex justify-center">
        <img
          src={data.avatar_url}
          alt=""
          width={200}
          className="border rounded-full"
        />
      </div>
    </div>
  );
}

export default Github;


export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/kami-1716"); 
  return response.json();
}

