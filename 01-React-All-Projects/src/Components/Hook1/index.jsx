import React, { useState } from "react";
import data from "./data";
 
function Hook1() {
    const [answerdata , setanswerdata]=useState(null)
    const [multidiv,setmultidiv]=useState(false);
    const [multiple,setmultiple]=useState([]);
    function handlediv(ansid){
        setanswerdata(ansid === answerdata? null:ansid  );
    }
    function handlemultidiv(ansid) {
    const copymultiple = [...multiple];
    const findIndex = copymultiple.indexOf(ansid);

    if(findIndex === -1){
        copymultiple.push(ansid);
    } 
    else{
        copymultiple.splice(findIndex, 1);
    }

    setmultiple(copymultiple);
 
}

  return (
    <div className=" h-96 w-[500px] ml-96 mt-20 object-cover">
        <button onClick={()=>{setmultidiv(!multidiv)}} className="flex justify-center ml-40 border-2 p-2 bg-amber-900 text-xl text-white hover:bg-amber-950">Enable multidiv</button>
        {data && data.length> 0 ? 
        data.map((item)=> {
        return <div onClick={()=>{multidiv ? handlemultidiv(item.id) : handlediv(item.id);}}  key={item.id} className="bg-emerald-600 w-[96%] m-3 p-2">
            <h2 className="flex justify-between items-center">
                <span>{item.question}</span>
                <span className="text-white">+</span>
            </h2>            
            { 
            multidiv ?
            multiple.indexOf(item.id) !==-1 && (<p>{item.answer}</p>):
            answerdata === item.id && (<p>{item.answer}</p>) 
            } 
            

           </div>})
        : <div>data not found</div>}
    </div>
    
  )
}
export default Hook1
