// pages/posts/[postId].tsx

import { useRouter } from 'next/router';
import { useState } from 'react';
import { GetServerSideProps } from 'next';

type Post = {
  id: number;
  title: string;
  body: string;
};

type Props = {
  post: Post;
};

function Post({ post }: Props) {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props, { postId: string }> = async ({ params }) => {
  const postId = params?.postId;

  if (!postId) {
    return {
      notFound: true
    };
  }

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const post = await res.json();

  if (!post.id) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      post
    },
    fallback:true
  };
};

export default Post;
