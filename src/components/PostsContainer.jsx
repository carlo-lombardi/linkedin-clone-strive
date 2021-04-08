import Post from "./Post";

export default function PostsContainer(props) {
  function getPosts(limit) {
    return props.postsData.slice(0, limit).map((post, index) => {
      return (
        <Post
          key={index}
          id={post._id}
          username={post.username}
          text={post.text}
          name={post.user.name}
          surname={post.user.surname}
          updatedTime={post.updatedAt}
        />
      );
    });
  }
  return <div className="d-flex flex-column">{getPosts(10)}</div>;
}
