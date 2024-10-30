import { Link } from "react-router-dom"
import logo from "/src/assets/download.png"
import { useForm } from "react-hook-form";
import useLoginStore from "../../utils/useLoginStore";
import { Bounce, toast } from "react-toastify";
function SignupForm() {
    const {register,handleSubmit,formState: { errors }}=useForm();
    const registerUser=useLoginStore((state)=>state.registerUser);
    const onsubmit=(data)=>{
        registerUser(data)
        toast('You registered succesfully!', {
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
        console.log(data)
    }
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        alt="Your Company"
        src={logo}
        className="mx-auto h-10 w-auto"
      />
      <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
       Sign up
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={handleSubmit(onsubmit)} className="space-y-6">
      <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
            Name
          </label>
      <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="name"
                  {...register('name', { required: 'Name is required' })}
                  autoComplete="name"
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
                {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
              </div>
        <div>
          <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              {...register('email', { required: 'Name is required' })}
              autoComplete="email"
              className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
             {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
              Password
            </label>
       
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              {...register('password', { required: 'Password is required' })}
              autoComplete="current-password"
              className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />

                 {errors.password && <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>}
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign up
          </button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm/6 text-gray-500">
       Already have an account? {' '}
        <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
        Log in
        </Link>
      </p>
    </div>
  </div>
  )
}

export default SignupForm
