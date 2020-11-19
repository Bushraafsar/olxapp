import React, {useEffect, useState} from 'react';
import ADItem from './AdItem';
import phoneapp from '../ui/phoneapp.png'

function HomePage(){

    const[list, setList]= useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        if(loading){
            let _list = [];
            for(let i =0; i<12; i++){
                _list.push(<ADItem placeholder={true} />);
         
            }
            setList(_list);
        }
    },list);
    
    
    return(
        
        <div className="home-page ">
            <div className="ad-item flex">
            {list}
            </div>
            <button className="load-more fontb anims c333 ">Load More</button>
        </div>
        
       



        
    )

}

export default HomePage;