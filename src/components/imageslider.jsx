import { useEffect, useState } from "react";

function ImageSlider({slides}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const t = slides.length;
    console.log(currentIndex);
    const x = ()=>{
        currentIndex< t-1 ? setCurrentIndex((y)=>{return y+1}) :setCurrentIndex(()=>{return 0})
    };
    useEffect(()=>{
        setTimeout(x, 3000);
    })
    return ( 
        <div className="h-full" style={{position:'relative'}}>
            <div className="w-full h-full rounded-[10px]" style={{backgroundImage:`url(${slides[currentIndex].url })`, backgroundPosition:'center', backgroundSize:'cover',  transition: 'all 0.5s'}}>
            </div>
            <button onClick={x}>but</button>
        </div>
     );
}

export default ImageSlider;