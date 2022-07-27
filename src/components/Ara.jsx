import React, { useState } from 'react'
import { nanoid } from 'nanoid'

const Ara = () => {

    const [erste, setErste] = useState([
        {
            id:nanoid(),
            baslik:'araba al',
            tamamlamdi:false
        },   
        {
            id:nanoid(),
            baslik:'araba sat',
            tamamlamdi:false
        }
         
        
    ])

    const [son,setSon] =useState('')

    
    const change =(e)=>{
        e.preventDefault()
        setSon(e.target.value)
        console.log(son)
    }
    const cang =()=>{
        setErste([
            ...erste,
            {
                id:nanoid,
                baslik:son,
                tamamlamdi:false
            }
        ])
    setSon('')
    }
  

  return (
    <div className='contanier'>
        <div className='erste'>
            
            <input
            value={son}
            onChange={change}
            type="text" />
            <button className='but'
            onClick={cang}
            >EKLE</button>
        
            
        </div>
        <div className='erste'>
       
       <ul>
       {
            

           
            erste.map((it, index)=>(

                <div key={index} 

                onClick={()=>{
                    setErste(erste.map(cx => cx.tamamlamdi === it.tamamlamdi 
                        ? {...cx, tamamlamdi:!cx.tamamlamdi} 
                        : cx ))
                }}
                
                className={it.tamamlamdi ? 'yapildi' : ''}>
                   
                    {it.baslik}
                    
                    </div>
            ))
          
        }
        </ul> 

        </div>

        <div className='erste'>
            <button 
            className='tez'
            onClick={()=> setErste( erste.filter(item =>!item.tamamlamdi))}
            >Temizle</button>
        </div>
        
    </div>
  )
}

export default Ara