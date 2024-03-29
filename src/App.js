import './App.css';
import CmsForm from './features/cms/CmsForm';
import CmsList from './features/cms/CmsList'
import UserForm from './features/users/UserForm';
import UserList from './features/users/UserList';

function App() {
	return (
		<>
			<div>
				<h2>User Management</h2>
				<CmsForm/>
				<CmsList/>
				{/* <UserForm/>
				<UserList/> */}
			</div>
		</>
	);
}

export default App;
