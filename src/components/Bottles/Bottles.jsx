import { useState } from "react";
import {useEffect} from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css';
const Bottles = () => {
   const [bottles, setBottles] = useState([])
 
   useEffect(() =>{
     fetch('bottles.json')
     .then(res => res.json())
     .then(data => setBottles(data));
   }, [])

   const handleAddToCart = bottle =>{
     console.log('bottle going to be added');
   }

    return (
        <div>
            <h2>Bottles Here: {bottles.length}</h2>
            <div className="bottle-container">
            {
              bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle}
                handleAddToCart={handleAddToCart}
              ></Bottle> )
            }
            </div>
        </div>
    );
};

export default Bottles;