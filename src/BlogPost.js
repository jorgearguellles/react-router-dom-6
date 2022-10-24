import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogdata } from "./blogData";

export const BlogPost = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const postInfo = blogdata.find((post) => post.slug === slug);

  const returnToBlog = () => {
    navigate("/blog");
  };

  return (
    <>
      <h2>title: {postInfo.title}</h2>
      <button onClick={returnToBlog}>Return to Blog</button>
      <h4>Author: {postInfo.author}</h4>
      <p>Content: {postInfo.content}</p>
    </>
  );
};
