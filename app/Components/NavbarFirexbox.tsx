
export default function NavbarFirebox() {
    return (
        <div className="h-[100vh] text-white bg-white">
            <nav className="flex font-bold font-serif justify-between items-center bg-blue-900 w-full h-15">
                <p className="mx-4">Muhammad Talha Khan</p>
                <div className="flex">
                    <p className="p-2">Home </p>
                    <p className="p-2">About</p>
                    <p className="p-2">Contact Us</p>
                </div>
            </nav>
            <div className="flex font-extrabold">
                <p className="bg-red-400 m-2 rounded-3xl flex justify-center items-center w-1/3 h-72">Image 01 <br/> Details</p>
                <p className="bg-red-600 m-2 rounded-3xl flex justify-center items-center w-1/3 ">Image 02 <br/> Details</p>
                <p className="bg-red-800 m-2 rounded-3xl flex justify-center items-center w-1/3 ">Image 03 <br/> Details</p></div>
        
                <div className="flex font-extrabold justify-center">
                <p className="bg-blue-400 m-3 rounded-3xl  flex justify-center items-center w-1/3 h-72">Image 04 <br/> Details</p>
                <p className="bg-purple-500 m-3 flex justify-center items-center rounded-3xl w-1/3">Image 05 <br/> Details</p>
            </div>
        </div>
    )}