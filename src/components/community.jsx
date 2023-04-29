import React from "react";
import { Link } from "react-router-dom";
import img6 from './images/cats/bg-img.jpg'
import img7 from './images/cats/bg-img2.jpg'
import img8 from './images/cats/bg-img3.jpg'

function Community() {
  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:5000/api/v1/posts")
      .then((res) => res.json())
      .then((json) => setData(json["posts"]))
      .catch((error) => console.log(error));
  }, []);

  React.useEffect(() => {
    if (data.length !== 0) {
      setLoading(false);
    }
  }, [data]);

  const content = isLoading ? (
    <div>
        <h1 className="text-8xl text-center">Loading...</h1>
    </div>
  ) : (
    data.map((x) => {
      return (

        <div className="rounded-3xl border border-[#237477]">
            <button className="hover:bg-black hover:text-white text-slate-500 text-xl border border-slate-300 hover:border-transparent transition-all rounded-r-3xl rounded-l-3xl py-2 px-4 pb-[12px] ml-7 mt-7">{x.location}</button>                
            <p className='mt-32 text-[2rem] leading-[3.0rem] pl-10'>{x.content}</p>
            <p className='mt-10 text-end leading-[3.0rem] mr-10'>By {x.name}</p>
        </div>
      );
    })
  );
  return (
    <div className="mb-[50rem] ">
      <div className="grid grid-cols-3 gap-4 -mt-20 px-2">
            <div className="rounded-3xl h-[500px]" style={{backgroundImage:`url(${img6})`, backgroundSize:'cover'}}></div>
           
            <div className="rounded-3xl border border-[#237477]">
                <button className="hover:bg-black hover:text-white text-slate-500 text-xl border border-slate-300 hover:border-transparent transition-all rounded-r-3xl rounded-l-3xl py-2 px-4 pb-[12px] ml-7 mt-7">Colombo</button>                
                <p className='mt-32 text-[2rem] leading-[3.0rem] pl-10'>Bean found a loving home through our project. Now he spends his days in a warm loving house.</p>
                <p className='mt-10 text-end leading-[3.0rem] mr-10'>By Rachel</p>
            </div>

            <div className="rounded-3xl" style={{backgroundImage:`url(${img7})`, backgroundSize:'cover'}}></div>

            <div className="rounded-3xl h-[500px]" style={{backgroundImage:`url(${img8})`, backgroundSize:'cover'}}></div>

            {content}

            <Link to="/your-story"><div className="rounded-3xl h-[500px] border hover:bg-[#12A467] hover:cursor-pointer hover:text-white transition-all border-[#237477] text-center">
                <p className='mt-32 text-5xl leading-[3.0rem] '>Tell us your story!</p>
                <p className="w-26 text-[10rem] ">+</p>                
                
            </div></Link>

        </div>

    </div>
  );
}

export default Community;
