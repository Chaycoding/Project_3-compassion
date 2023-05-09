import React from 'react';
import img from './images/cats/hero-bg.jpg'


function Create_posts() {
    const [name, setName] = React.useState()
    const [content, setContent] = React.useState()
    const [location, setLocation] = React.useState()

    const submit = ()=> {
        fetch('https://project-compassion-backend.onrender.com/api/v1/posts', {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify({name: name, content: content, location: location })
        })
    }

    return ( 
        <div >
            <form action="/" method="POST" id="form" onSubmit={()=> submit()} className='text-5xl px-6 grid gap-y-7 grid-cols-2'>
                <label for='name'>What's your name?</label>
                <input className='border border-[#237477]  rounded-3xl pl-5' type="text" name="name" onChange={(e)=>setName(e.target.value)}/>
                <label for='location'>Where are you from?</label>
                <input className='border border-[#237477] rounded-3xl pl-5' type="text" name="location" onChange={(e)=>setLocation(e.target.value)}/>
                <label for='content'>What's your story?</label>
                <input className='border border-[#237477] rounded-3xl pl-5' type="text" name="content" onChange={(e)=>setContent(e.target.value)}/>
                    
                    <button className="hover:bg-black hover:text-white text-4xl col-span-2 border border-white hover:border-transparent transition-all rounded-r-3xl rounded-l-3xl py-2 px-4 pb-[12px]">Submit</button>
            </form>
        </div>
     );
}

export default Create_posts;