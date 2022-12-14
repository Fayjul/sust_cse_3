import React from 'react';
import Post from '../Post/Post';
import useStyles from './styles';
import { useSelector } from 'react-redux';

export default function Posts() {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);

  return (
    <div>
      <h2>Posts</h2>
      <Post></Post>
      <Post></Post>
      <Post></Post>
    </div>
  );
}
