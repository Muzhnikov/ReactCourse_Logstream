import './Post.css'

const Post = ({title, body}) => {
    return (
      <div className="post">
        <h4>{title}</h4>
        <p>{body}</p>
      </div>
    );
  };
  
export default Post;