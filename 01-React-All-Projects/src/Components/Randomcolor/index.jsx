import React, { use, useState } from "react";
function Randomcolor(){
    const [color,setcolor]=useState("#000000");
    const [choise,setchoise]=useState("HEX");

    function randomHEXcolor(){
        const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
        let newcolor="#"
        const len=hex.length;
        for(let i=0;i<6;i++){
            const random=Math.floor(Math.random()*len)
           newcolor+=hex[random] 
           console.log(newcolor)
        }
        setcolor(newcolor);
    }
    function randomRGBcolor(){
        let n1=Math.floor(Math.random()*255);
        let n2=Math.floor(Math.random()*255);
        let n3=Math.floor(Math.random()*255);
        let RBG=`rgb(${n1},${n2},${n3})`;
        setcolor(RBG);     
    }
    return(
        <div style={{
            width:"100vw",
            height:"100vh",
            background:color,
        }} className="flex gap-7">
            <button className="bg-red-500 h-20 w-40" onClick={()=>{setchoise('HEX')}}>Generate HEX</button>
            <button className="bg-red-500  h-20 w-40" onClick={()=>{setchoise('RGB')}}>Generate RGB</button>
            <button className="bg-red-500  h-20 w-40" onClick={choise==="HEX"? randomHEXcolor:randomRGBcolor}>Generate Random</button>

            <h1 className="pt-60 text-2xl font-bold">{color}</h1>
        </div>
        
    )
}
export default Randomcolor