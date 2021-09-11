import React, { useState, useEffect } from "react";
import axios from "axios";

function HookCounterUseEffect() {
  const [post, setPost] = useState({});
  const [loadingToggle, setLoadingToggle] = useState(true);
  const [postId, setPostId] = useState(1);

  const handleSearchPostById = (id) => {
    setLoadingToggle(false);
    setPostId(id);
  };

  const handleAPI = () => {
    axios
      .get(`https://reqres.in/api/user/${postId}`)
      .then((response) => {
        setLoadingToggle(false);
        setPost(response.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    handleAPI();
  }, [postId]);

  console.log("post", post);

  const { data = {} } = post && post;
  const { id, name, color, year } = data;

  return (
    <div>
      <h2>API</h2>
      <input
        type="text"
        value={postId}
        onChange={(e) => handleSearchPostById(e.target.value)}
      />
      {!postId ? (
        <h3>No data found</h3>
      ) : loadingToggle ? (
        <h3>Fetch is on-going data's are Loading ...</h3>
      ) : (
        <div
          style={{
            backgroundColor: color,
            color: "#000",
            padding: ".5em",
            margin: "1em 0",
          }}
        >
          <p>
            Name: <b>{name}</b>
          </p>
          <p>
            Id: <b>{id}</b>
          </p>
          <p>
            Year: <b>{year}</b>
          </p>
        </div>
      )}
    </div>
  );
}

export default HookCounterUseEffect;
