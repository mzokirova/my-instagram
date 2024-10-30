import { useForm } from 'react-hook-form';
import useLoginStore from '../../utils/useLoginStore';
import usePostStore from '../../utils/usePostStore';
import { useNavigate } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';

function CreateForm() {
  const { register, handleSubmit, reset } = useForm();
  const user = useLoginStore((state) => state.user);
  const addPost = usePostStore((state) => state.addPost);
const navigate=useNavigate()
  const onSubmit = async (data) => {
    if (!user) {
        console.error("User is not logged in.");
        toast.error('🦄 Wow so easy!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
        return;
      }
    const formData = {
        caption: data.caption,
        imageUrl: data.imageUrl,
        user: user.name,
        date: new Date().toISOString(),  
      };
    await addPost(formData);

    reset(); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Caption</label>
        <input
          {...register('caption', { required: 'Caption is required' })}
          type="text"
          placeholder='Write something...'
          className="mt-1 top-0 text-start h-[300px] border break-before-auto w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Image URL</label>
        <input
          type="text"
          {...register('imageUrl', { required: true })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          placeholder="Enter image URL"
        />
      </div>

      <button
        type="submit"
        className="mt-4 w-full flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Create Post
      </button>
      <button className='bg-blue-300 p-2 rounded-xl' onClick={()=>navigate('/')}>Back Home</button>
    </form>
  );
}

export default CreateForm;

