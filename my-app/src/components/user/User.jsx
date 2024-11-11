import './User.css';

const User = ({user, selectUser, selectedUserId}) => {
    const isSelected = user.id === selectedUserId;
    return(
        <div className={`user ${isSelected ? 'selected' : ''}`} onClick={() => selectUser(user.id)}>
            <h3>Пользователь: {user.name}</h3>
            <p>Ник: {user.username}</p>
        </div>
    )
}

export default User;