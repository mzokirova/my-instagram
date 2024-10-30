import Navbar from "../../components/Navbar"
import  { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserStore from "../../utils/useUserStore";
const Users = () => {
    const users = useUserStore((state) => state.users);
  const getUsers = useUserStore((state) => state.getUsers);
  const navigate = useNavigate();
  useEffect(() => {
    getUsers(); 
  }, [getUsers]);
  return (
    <div className="container mx-auto">
        <Navbar/>
      <div className="p-4 ">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <div className="space-y-4">
        {users.map((user) => (
          <div key={user._id} className="border p-4 rounded shadow">
            <p className="font-bold">{user.name}</p>
            <p className="text-gray-500">{user.email}</p>
            <button
              onClick={() => navigate(`/users/${user.name}/posts`)}
              className="mt-2 text-indigo-600 hover:underline"
            >
              View Posts
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Users
