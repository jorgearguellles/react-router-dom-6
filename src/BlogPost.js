import React from "react";
import { useParams } from "react-router-dom";
import { blogdata } from "./blogData";

export const BlogPost = () => {
  const { slug } = useParams();
  const postInfo = blogdata.find((post) => post.slug === slug);
  console.log(postInfo);
  return (
    <>
      <h2>title: {postInfo.title}</h2>
      <h4>Author: {postInfo.author}</h4>
      <p>Content: {postInfo.content}</p>
    </>
  );
};
