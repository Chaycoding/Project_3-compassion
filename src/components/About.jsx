import img from './images/cats/hero-bg.jpg'
import img2 from './images/cats/about_sec.jpg'
import img3 from './images/cats/about_sec2.jpg'
import img4 from './images/cats/about_sec3.jpg'
import img5 from './images/cats/about_sec4.jpg'

function About_section() {
    return ( 
        <div className='mb-6'>
            <div className="flex justify-center w-full sm:ml-0 ml-5">
                <div className="sm:text-5xl text-2xl ml-3 sm:w-4/5 w-full leading-normal">
                <p className="rounded-tl-3xl leading-relaxed">
                    <span>The Compassion Bowl Project is a not-for-profit group dedicated to</span> 
                    <span className="font-bold text-[#237477]"> raising awareness </span>
                <span className="font-bold">for the plight and hunger of street cats in Sri Lanka</span> </p>
                </div>
            </div>

            <div className="flex justify-center w-full mt-[180px]">
                <div className="w-[1200px] flex justify-center items-center h-[700px] rounded-3xl" style={{backgroundImage:`url(${img})`, backgroundSize:'cover'}}>
                    <h1 className='text-5xl text-white -mt-60'>Small gestures make a big difference</h1>
                </div>
            </div>

            <div className="flex justify-center mt-[120px] w-full sm:ml-0 ml-5">
                <div className="sm:text-5xl text-center text-2xl ml-3 sm:w-4/5 w-full ">
                <p className="rounded-tl-3xl">
                    <span className="text-red-600"> We are not after donations.</span></p>
                <p className='leading-normal mt-6'>Our purpose is to act as the voice of street dogs, by encouraging kind-hearted people to: </p> 
                </div>
            </div>

            <div className='mt-[120px] mx-5 gap-4 grid grid-cols-3'>
                <div></div>
                <div className='bg-black h-[550px] rounded-3xl' style={{backgroundImage:`url(${img2})`, backgroundSize:'cover'}}></div>
                <div className='bg-slate-100 rounded-3xl'>
                    <p className='text-slate-500 text-2xl mt-16 ml-28'>Love</p>
                    <p className='text-black leading-9 text-3xl mt-48 ml-10'>Recognise that street cats are beautiful and just need love, food and water to flourish</p>
                </div>
                
                <div className='bg-black h-[550px] rounded-3xl' style={{backgroundImage:`url(${img3})`, backgroundSize:'cover'}}></div>
                <div className='bg-slate-100 rounded-3xl'>
                    <p className='text-slate-500 text-2xl mt-16 ml-28'>Feed</p>
                    <p className='text-black leading-9 text-3xl mt-48 ml-10'>Feed local street cats by placing leftover food remains and a bowl of fresh water each day outside your home or business</p>
                </div>
                <div></div>

                <div></div>
                <div className='bg-black h-[550px] rounded-3xl' style={{backgroundImage:`url(${img4})`, backgroundSize:'cover'}}></div>
                <div className='bg-slate-100 rounded-3xl'>
                    <p className='text-slate-500 text-2xl mt-16 ml-28'>Adopt</p>
                    <p className='text-black leading-9 text-3xl mt-48 ml-10'>Adopt a homeless dog by welcoming it into your home</p>
                </div>

                <div className='bg-black h-[550px] rounded-3xl' style={{backgroundImage:`url(${img5})`, backgroundSize:'cover'}}></div>
                <div className='bg-slate-100 rounded-3xl'>
                    <p className='text-slate-500 text-2xl mt-16 ml-28'>Question</p>
                    <p className='text-black leading-9 text-3xl mt-48 ml-10'>Ask questions to educate yourself on how to care properly for dogs</p>
                </div>
                <div></div>

            </div>

            <div className='flex justify-center sm:mt-28 mt-10'>
            <p className="rounded-tl-3xl sm:text-[2.5rem] text-4xl font-medium">Let's join hands</p>
            </div>

            <div className='flex justify-center mt-28 pb-20'>
                <p className="rounded-tr-3xl text-[2.0rem] ">Follow us on <span className='text-[#AA336A]'>Instagram</span> & <span className='text-[#237477]'>Facebook</span><br/> <span className='ml-16'> for more project updates</span> </p>
            </div>

        </div>
     );
}

export default About_section;