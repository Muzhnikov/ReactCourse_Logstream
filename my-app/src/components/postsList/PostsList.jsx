import Post from '../post/Post';
import './PostsList.css'

const PostsList = ({posts}) => {
    return (
      <div className='posts'>
        {posts.length > 0 ? (
          posts.map(post => (
            <Post key={post.id} title={post.title} body={post.body} />
          ))
        ) : (
          <p>У пользователя нет постов.</p>
        )}
      </div>
    );
}

export default PostsList;