
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import usePostStore from '../../utils/usePostStore';

function UserPosts() {
  const { userName } = useParams();
  const [userPosts, setUserPosts] = useState([]);
  const posts = usePostStore((state) => state.posts);
  const getPosts = usePostStore((state) => state.getPosts);
  const deletePost = usePostStore((state) => state.deletePost);
  const updatePost = usePostStore((state) => state.updatePost);
  const [editPostId, setEditPostId] = useState(null);
  const [editData, setEditData] = useState({ caption: '', imageUrl: '' });
  const navigate = useNavigate();

  useEffect(() => {
    getPosts(); 
  }, [getPosts]);

  useEffect(() => {
    if (posts) {
      setUserPosts(posts.filter((post) => post.user === userName));
    }
  }, [posts, userName]);

  const handleEditClick = (post) => {
    setEditPostId(post._id);
    setEditData({ caption: post.caption, imageUrl: post.imageUrl });
  };

  const handleSaveClick = async () => {
    await updatePost(editPostId, editData);
    setEditPostId(null); // Exit edit mode
  };

  const handleDeleteClick = async (postId) => {
    await deletePost(postId);
  };

  return (
    <div className="p-4 w-full ">
      <button className='bg-rose-400 text-white px-3 py-2 rounded-md' onClick={() => navigate(-1)}>Back</button>
      <div className='flex flex-wrap mt-10 items-start gap-10 justify-center'>
        {userPosts.length > 0 ? (
          userPosts.map((post) => (
            <div key={post._id} className='border shadow w-[40%] h-auto p-4'>
              {editPostId === post._id ? (
                <div>
                  <input
                    type="text"
                    value={editData.caption}
                    onChange={(e) => setEditData({ ...editData, caption: e.target.value })}
                    className="border p-2 w-full mb-2"
                  />
                  <input
                    type="text"
                    value={editData.imageUrl}
                    onChange={(e) => setEditData({ ...editData, imageUrl: e.target.value })}
                    className="border p-2 w-full mb-2"
                  />
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                    onClick={handleSaveClick}
                  >
                    Save
                  </button>
                  <button
                    className="bg-gray-400 text-white px-3 py-1 rounded"
                    onClick={() => setEditPostId(null)}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div>
                  <p className='my-4'>{post.caption}</p>
                  <img src={post.imageUrl} alt="Post" className="mb-4" />
                  <p>Posted {new Date(post.date).toLocaleDateString()} </p>
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                    onClick={() => handleEditClick(post)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={() => handleDeleteClick(post._id)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No posts available for this user.</p>
        )}
      </div>
    </div>
  );
}

export default UserPosts;
