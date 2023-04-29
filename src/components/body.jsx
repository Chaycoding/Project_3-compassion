import img from './images/cats/img1.jpg'
import img2 from './images/cats/img2.jpg'
import img3 from './images/cats/img3.jpg'
import img4 from './images/cats/img.jpg'
import img5 from './images/high quality/thatimg.jpg'
import img6 from './images/cats/bg-img.jpg'
import img7 from './images/cats/bg-img2.jpg'
import img8 from './images/cats/bg-img3.jpg'

function Mainbody() {
    return ( 
        <div className="sm:-mt-10 -mt-24">
            <div className="flex justify-center w-full sm:ml-0 ml-5">
                <div className="sm:text-5xl text-2xl ml-3 sm:w-4/5 w-full leading-normal">
                <p className="rounded-tl-3xl" style={{backgroundImage: 'linear-gradient(to right,#ebedee,#fdfbfb)'}}>
                    <span className="font-bold">Welcome to the</span> 
                    <span className="font-bold text-red-600"> Compassion Bowl Project.</span></p>
                <p>Using community compassion to change the lives of hungry street cats. </p> 
                </div>
            </div>

            <div className='w-full'>
                <div className="grid w-full mt-20 sm:grid-cols-2 grid-cols-4 gap-y-10 sm:gap-y-[460px] grid-rows-2 sm:gap-x-5 gap-x-2 h-56 sm:pl-2 pl-6 sm:pr-2">
                    <img className='rounded-xl col-span-2 sm:col-span-1' src={img} alt="" />
                    <img className='rounded-xl col-span-2 sm:col-span-1' src={img2} alt="" />
                    <img className='rounded-xl col-span-2 sm:col-span-1' src={img3} alt="" />
                    <img className='rounded-xl col-span-2 sm:col-span-1' src={img4} alt="" />
                    
                </div>
            </div>

            <div className="flex justify-center w-full sm:mt-[800px] mt-[60px]">
                <div className="sm:text-4xl text-xl ml-3 w-4/5 leading-normal">
                <p>Feel helpless at the sight of hungry street cats? Does your heart feel sad when you see desperation in their eyes? </p> 
                <p className="rounded-tl-3xl mt-6" style={{backgroundImage: 'linear-gradient(to right,#ebedee,#fdfbfb)'}}>
                    <span className="font-bold">Our Compassion Bowl Project offers you a chance to nourish street dogs as part of your daily life </span></p>
                </div>
            </div>

            <div>
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 mt-[100px]">
                    <div className='bg-slate-100 rounded-3xl sm:ml-14 ml-8 sm:h-[600px] h-[300px]'>
                        <p className='text-slate-400 text-lg sm:text-2xl pl-20 pt-10'>Latest project update</p>
                        <p className='mt-10 sm:text-[2rem] text-base sm:leading-[3.0rem] pl-10'>We are currently working with the<br/> Animal SOS of tasmania helping raise<br/> funds to help them facilitate and help <br/> more animals with vaccination.</p>
                        <button className="hover:bg-black hover:text-white sm:text-xl text-[12px] border border-black hover:border-transparent transition-all rounded-r-3xl rounded-l-3xl py-2 px-4 pb-[10px] ml-7 mt-[23px] sm:mt-[180px]">Visit their website</button>
                    </div>
                    <div className='mr-14 sm:ml-0 w-[360px] sm:w-auto ml-8'>
                        <img src={img5} alt=""  className='rounded-3xl sm:h-[600px] h-[300px] w-full'/>
                    </div>
                </div>
            </div>

            <div className='flex justify-center sm:mt-28 mt-10'>
            <p className="rounded-tl-3xl sm:text-[2.5rem] text-3xl " style={{backgroundImage: 'linear-gradient(to right,#eeeff0,#fdfbfb)'}}>Explore this project</p>
            </div>

            <div>
                <div className="grid sm:grid-cols-5 grid-cols-1 gap-6 sm:mt-[100px] mt-10 text-white">
                    <div className='col-span-2 rounded-3xl ml-12 sm:h-[525px] h-[200px] sm:pr-0 pr-3 bg-[#237477]'>
                        <p className='text-slate-300 sm:text-2xl text-lg pl-10 sm:pt-10 pt-8'>About us</p>
                        <p className='sm:mt-10 mt-5 sm:text-[2rem] text-base sm:leading-[3.0rem] pl-10'>Read more about the compassion whiskers project.</p>
                        <button className="hover:bg-black hover:text-white sm:text-xl text-[10px] border border-white hover:border-transparent transition-all rounded-r-3xl rounded-l-3xl py-2 px-4 pb-[12px] ml-7 sm:mt-[215px] mt-[23px]">Visit their website</button>
                    </div>
                    <div className='bg-[#12A467] col-span-2 rounded-3xl sm:w-[480px] ml-12 sm:ml-0 mt- sm:h-[525px] h-[200px]'>
                        <p className='text-slate-300 sm:text-2xl text-lg pl-10 sm:pt-10 pt-8'>Take part</p>
                        <p className='sm:mt-10 mt-5 sm:text-[2rem] text-base sm:leading-[3.0rem] pl-10'>Learn how you too can be a part of this movement.</p>
                        <button className="hover:bg-black hover:text-white sm:text-xl text-[10px] border border-white hover:border-transparent transition-all rounded-r-3xl rounded-l-3xl py-2 px-4 pb-[12px] ml-7 sm:mt-[215px] mt-[23px]">Visit their website</button>
                    </div>
                    <div className='bg-slate-100 rounded-3xl -ml-[50px] w-[250px] h-[525px] sm:flex hidden'>
                    </div>
                    
                </div>
            </div>

            <div className='justify-center mt-28 sm:flex hidden'>
                <p className="rounded-tr-3xl text-[2.5rem]" style={{backgroundImage: 'linear-gradient(to right,#fdfbfb,#eeeff0)'}}>Be a part of our community.</p>
            </div>
            <div className='flex ml-10 justify-center sm:mt-28 mt-10 sm:hidden'>
                <p className="rounded-tr-3xl text-3xl" style={{backgroundImage: 'linear-gradient(to right,#fdfbfb,#eeeff0)'}}>Be a part of our <br/> <span className='ml-5'>community.</span> </p>
            </div>

            <div className='px-12'>
                <div className="grid grid-cols-3 gap-4 mt-[100px]">
                    <div className="rounded-3xl h-[500px]" style={{backgroundImage:`url(${img6})`, backgroundSize:'cover'}}></div>
                    <div className="rounded-3xl border border-[#237477]">
                        <button className="hover:bg-black hover:text-white text-slate-500 text-xl border border-slate-300 hover:border-transparent transition-all rounded-r-3xl rounded-l-3xl py-2 px-4 pb-[12px] ml-7 mt-7">Colombo</button>                
                        <p className='mt-32 text-[2rem] leading-[3.0rem] pl-10'>Bean found a loving home through our project. Now he spends his days in a warm loving house.</p>
                    </div>
                    <div className="rounded-3xl" style={{backgroundImage:`url(${img7})`, backgroundSize:'cover'}}></div>

                    <div className="rounded-3xl h-[500px]" style={{backgroundImage:`url(${img8})`, backgroundSize:'cover'}}></div>
                    <div className="rounded-3xl border border-[#237477]">
                        <button className="hover:bg-black hover:text-white text-slate-500 text-xl border border-slate-300 hover:border-transparent transition-all rounded-r-3xl rounded-l-3xl py-2 px-4 pb-[12px] ml-7 mt-7">Colombo</button>                
                        <p className='mt-32 text-[2rem] leading-[3.0rem] pl-10'>Bean found a loving home through our project. Now he spends his days in a warm loving house.</p>
                    </div>
                    <div className='bg-[#EFC92A] rounded-3xl text-white'>
                        <p className='text-slate-100 text-2xl pl-10 pt-10'>Let's share</p>
                        <p className='mt-10 text-[2rem] leading-[3.0rem] pl-10'>Share your stories and explore our community.</p>
                        <button className="hover:bg-black hover:text-white text-xl border border-white hover:border-transparent transition-all rounded-r-3xl rounded-l-3xl py-2 px-4 pb-[12px] ml-7 mt-[215px]">Enter community</button>
                    </div>
                </div>
            </div>

            <div className='flex justify-center mt-28 pb-20'>
                <p className="rounded-tr-3xl text-[2.0rem] ">Follow us on <span className='text-[#AA336A]'>Instagram</span> & <span className='text-[#237477]'>Facebook</span><br/> <span className='ml-16'> for more project updates</span> </p>
            </div>
        </div>
     );
}

export default Mainbody;