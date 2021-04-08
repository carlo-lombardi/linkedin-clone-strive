import Post from "./Post";

export default function PostsContainer(props) {
  console.log("postsData", props.postsData);
  function getPosts(from, to) {
    return props.postsData

      .slice(from, to)
      .reverse()
      .map((post, index) => {
        return (
          <Post
            key={index}
            id={post._id}
            username={post.username}
            text={post.text}
            name={post.user.name}
            surname={post.user.surname}
            updatedTime={post.updatedAt}
            image={post.user.image}
            auth={props.auth}
            refreshData={props.refreshData}
            userID={post.user._id}
          />
        );
      });
  }
  return <div className="d-flex flex-column">{getPosts(props.postsData.length - 15, props.postsData.length)}</div>;
}
