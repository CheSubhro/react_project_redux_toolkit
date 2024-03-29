import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, updateUser } from './usersSlice';

const UserForm = ({ userToEdit }) => {
 const dispatch = useDispatch();
 const [user, setUser] = useState(userToEdit || { name: '', email: '' });

 const handleSubmit = (e) => {
    e.preventDefault();
    if (userToEdit) {
      dispatch(updateUser(user));
    } else {
      dispatch(addUser(user));
    }
    setUser({ name: '', email: '' });
 };

 return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <button type="submit">{userToEdit ? 'Update' : 'Add'} User</button>
    </form>
 );
};

export default UserForm;