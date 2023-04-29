function Join_us() {
    return ( 
        <div className='mb-10'>
            <div className="flex justify-center w-full sm:ml-0 ml-5">
                <div className="sm:text-5xl text-2xl ml-3 sm:w-4/5 w-full leading-normal">
                <p className="rounded-tl-3xl leading-relaxed">
                    <span>Here's your chance to make a difference in your community,</span> 
                    <span className="font-bold text-[#12A467]" style={{backgroundImage: 'linear-gradient(to right,#ebedee,#fdfbfb)'}}> one hungry cat at a time</span>
                </p>
                </div>
            </div>

            <div className='mt-[120px] mx-5 gap-4 grid grid-cols-3'>
                <div className='bg-slate-100 rounded-3xl h-[500px]'>
                    <p className='text-slate-500 text-2xl mt-10 ml-10'>Feed</p>
                    <p className='text-black leading-9 text-3xl mt-20 ml-10'>Make a differnece even with some food scraps</p>
                    <button className='hover:bg-black hover:text-white border text-xl border-black hover:border-transparent transition-all rounded-r-3xl rounded-l-3xl  pt-2 px-4 pb-[12px] ml-10 mt-48' >Learn how</button>
                </div>
                <div className='bg-slate-100 rounded-3xl h-[500px]'>
                    <p className='text-slate-500 text-2xl mt-10 ml-10'>Adopt</p>
                    <p className='text-black leading-9 text-3xl mt-20 ml-10'>Make a difference by adopting a cat</p>
                    <button className='hover:bg-black hover:text-white border text-xl border-black hover:border-transparent transition-all rounded-r-3xl rounded-l-3xl  pt-2 px-4 pb-[12px] ml-10 mt-48' >Learn how</button>
                </div>
                <div className='bg-slate-100 rounded-3xl h-[500px]'>
                    <p className='text-slate-500 text-2xl mt-10 ml-10'>Love</p>
                    <p className='text-black leading-9 text-3xl mt-20 ml-10'>Make a differnece with simple compassion</p>
                    <button className='hover:bg-black hover:text-white border text-xl border-black hover:border-transparent transition-all rounded-r-3xl rounded-l-3xl  pt-2 px-4 pb-[12px] ml-10 mt-48' >Learn how</button>
                </div>
            </div>
        </div>

        
     );
}

export default Join_us;