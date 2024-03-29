import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser, deleteUser } from './usersSlice';

const UserList = () => {
 const users = useSelector((state) => state.users);
 const dispatch = useDispatch();

 const [showEditModal, setShowEditModal] = useState(false);
 const [editingUser, setEditingUser] = useState(null);

 const handleEditUser = (user) => {
    setEditingUser(user);
    setShowEditModal(true);
 };

 const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
 };

 const handleUpdateUser = (updatedUser) => {
    dispatch(updateUser(updatedUser));
    setShowEditModal(false);
    setEditingUser(null);
 };

 return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>{user.name}</span>
            <span>{user.email}</span>
            <button onClick={() => handleEditUser(user)}>Edit</button>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {showEditModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit User</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              handleUpdateUser({ ...editingUser, name: e.target.name.value, email: e.target.email.value });
            }}>
              <input
                type="text"
                name="name"
                defaultValue={editingUser?.name}
                placeholder="Name"
              />
              <input
                type="email"
                name="email"
                defaultValue={editingUser?.email}
                placeholder="Email"
              />
              <button type="submit">Update</button>
            </form>
            <button onClick={() => setShowEditModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
 );
};

export default UserList;