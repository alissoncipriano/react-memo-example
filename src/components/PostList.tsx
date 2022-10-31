import { useEffect, useState } from 'react';
import PostItem from './PostItem';

export const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
      response.json().then((data) => setPosts(data));
    });
  }, []);

  return (
    <>
      <input onChange={(e) => setNewPost(e.target.value)} value={newPost} />

      <ul>
        {posts.map((post) => (
          <PostItem post={post} />
        ))}
      </ul>
    </>
  );
};
