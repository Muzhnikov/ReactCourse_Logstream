import './App.css';
import React, {useState, useEffect} from 'react';
import User from './components/user/User';
import PostsList from './components/postsList/PostsList';

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  const userPosts = selectedUserId ? posts.filter(post => post.userId === selectedUserId) : [];

  return (
    <div className="App">
      <h2>Пользователи</h2>
      <div className="users-list">
        {users.length > 0 ? (users.map(user => (
          <User key={user.id} user={user} selectUser={setSelectedUserId} selectedUserId={selectedUserId} />
        ))) : (
          <p>Ожидайте, пользователи загружаются</p>
        )}
      </div>
      <div>
        <h3>Посты пользователя</h3>
        {selectedUserId ? (
            <PostsList posts={userPosts} />
        ) : (
          <p>Выберите пользователя для просмотра постов</p>
        )}
      </div>
    </div>
  );
}

export default App;
