import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className="h-[200px]"> 
            <div className="w-full h-20 hidden items-end fixed sm:flex  ">
                <div className="basis-9/12 pb-1 font-[Open Sans] text-[20px]">
                <Link to='/'><button className="bg-black ml-6 hover:bg-white hover:text-black border border-blue-500 hover:border-transparent transition-all text-white font-semibold rounded-r-3xl rounded-l-3xl p-3 pr-5 pl-8 pt-2">Compassion Whiskers Project</button></Link>
                    <Link to='/about'><button className="hover:bg-white hover:text-black border border-black hover:border-transparent transition-all rounded-r-3xl rounded-l-3xl  py-2 px-4 pb-[12px] ml-2">About</button></Link>
                    <Link to='/community'><button className="hover:bg-white hover:text-black border border-black hover:border-transparent transition-all rounded-r-3xl rounded-l-3xl  pt-2 px-4 pb-[12px] ml-2">Our Community</button></Link>
                </div>
                <div className="flex basis-3/12 justify-end pb-1 text-[20px]">
                <Link to='/join'><button className="hover:bg-white hover:text-black border border-black hover:border-transparent transition-all rounded-r-3xl rounded-l-3xl py-2 px-4 pb-[12px] mr-5">Join Us</button></Link>
                </div>
            </div>

            <div className="w-full h-20 fixed sm:hidden flex font-[Open Sans] text-[10px]">
                <div className="">
                    <button className="mt-5 bg-black ml-4 hover:bg-white hover:text-black border border-blue-500 hover:border-transparent transition-all text-white font-semibold rounded-r-3xl rounded-l-3xl p-3 pr-5 pl-8 pt-2">Compassion Whiskers Project</button>
                </div>
            </div>
        </div>
     );
}

export default Header;