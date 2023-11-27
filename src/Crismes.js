import React, { useState } from 'react'
import './Crismes.css'

const Crismes = () => {

    const [data,setData]= useState(['1','0','-','1','0'])

    const bottom =()=>{
     let bossDizi =[]
    let tümDizi = []
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 8; j++) {
                const deger= Math.floor(Math.random()*data.length)
                
                
                bossDizi.push(data[deger])
                
            }
            
            tümDizi.push(<div className='c3'>{bossDizi}</div>)
            bossDizi =[]
        }
     return  tümDizi
    }

let sayi =0
    sayi=+5
    console.log(sayi);
    const renk = (renk)=>{

if ( renk==='1') {
     return 'c1'
}
else if (renk==='0'){

    return 'c0'
}
else{
    return 'c-'
}


    }

const app  = ()=>{
    let DiziEleman = []
    const DiziAll = []
    
    
    for (let i = 0; i < 80 ;i+=2) {
        i+=1
        for (let j = 0; j < i; j++) {
            const deger= Math.floor(Math.random()*data.length)
            DiziEleman.push(<span className={renk(data[deger])} >{data[deger]}</span>)
            
            
        }
        DiziAll.push(<div>{DiziEleman}</div>)
        DiziEleman =[]
  }

  
 return DiziAll
}    



   
 
    return (
    <div className='main'>

{app()}

{bottom()}




        
    </div>
  )
}

export default Crismes