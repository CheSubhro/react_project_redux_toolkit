import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCms,deleteCms } from './cmsSlice';

const CmsList = () => {
 const cms = useSelector((state) => state.cms);
 const dispatch = useDispatch();

 const [showEditModal, setShowEditModal] = useState(false);
 const [editingCms, setEditingCms] = useState(null);

 const handleEditCms = (user) => {
    setEditingCms(user);
    setShowEditModal(true);
 };

 const handleDeleteCms = (id) => {
    dispatch(deleteCms(id));
 };

 const handleUpdateCms = (updatedUser) => {
    dispatch(updateCms(updatedUser));
    setShowEditModal(false);
    setEditingCms(null);
 };

 return (
    <div>
      <ul>
        {cms.map((item) => (
          <li key={item.id}>
            <span>{item.page}</span>
            <span>{item.slug}</span>
            <button onClick={() => handleEditCms(item)}>Edit</button>
            <button onClick={() => handleDeleteCms(item.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {showEditModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit User</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              handleUpdateCms({ ...editingCms, page: e.target.page.value, slug: e.target.slug.value });
            }}>
              <input
                type="text"
                name="page"
                defaultValue={editingCms?.page}
                placeholder="Page"
              />
              <input
                type="text"
                name="slug"
                defaultValue={editingCms?.slug}
                placeholder="Slug"
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

export default CmsList;