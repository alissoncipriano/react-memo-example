import { memo } from 'react';

const PostItem = ({ post }) => {
  return (
    <li>
      <strong>{post.title}</strong>
      <p>{post.body}</p>
    </li>
  );
};

// descomente para testar
// export default PostItem;

// comente para testar
export default memo(PostItem);
