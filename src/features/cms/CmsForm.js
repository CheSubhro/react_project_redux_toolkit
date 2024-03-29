import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCms,updateCms,deleteCms } from './cmsSlice';

const CmsForm = ({ itemToEdit }) => {
 const dispatch = useDispatch();
 const [item, setItem] = useState(itemToEdit || { page: '', slug: '' });

 const handleSubmit = (e) => {
    e.preventDefault();
    if (itemToEdit) {
      dispatch(updateCms(item));
    } else {
      dispatch(addCms(item));
    }
    setItem({ page: '', slug: '' });
 };

 return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Page"
        value={item.page}
        onChange={(e) => setItem({ ...item, page: e.target.value })}
      />
      <input
        type="text"
        placeholder="Slug"
        value={item.slug}
        onChange={(e) => setItem({ ...item, slug: e.target.value })}
      />
      <button type="submit">{itemToEdit ? 'Update' : 'Add'} Cms</button>
    </form>
 );
};

export default CmsForm;