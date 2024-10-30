import { useNavigate } from "react-router-dom"

function CreatePost() {
    const navigate=useNavigate();
    const handleNavigation=()=>{
        navigate('/create');
        console.log("navigated")
    }
  return (
    <div className="w-[60%] h-[400px] flex items-center mx-auto border-4 border-dashed mt-10 ">
        <div className="flex p-4 hover:bg-slate-100 flex-col mx-auto rounded-2xl items-center justify-center border w-[200px] h-[100px] cursor-pointer" onClick={handleNavigation}>

      <div className="text-2xl">+</div>
      <div className="text-2xl">Create a post</div>
        </div>
    </div>
  )
}

export default CreatePost
