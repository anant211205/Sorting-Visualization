import React, { useState } from 'react'
import '../CSS/sortingVisual.css'
import { bubbleSort } from './SortingAlgos';

const SortingVisual = () => {

    const getRandomArray = () => {
        const array = [] ;
        for (let i = 0; i < 8; i++) {
            array.push(Math.floor(Math.random() * 100) + 15); 
        }
        return array; 
    } ;

    

    const [array, setArray] = useState(getRandomArray()) ;

    const handleBubbleSort = () => {

        const animations = bubbleSort([...array])
    
        for (let i = 0; i < animations.length; i++) {
    
            const [index1 , index2 , isSwap] = animations[i] ;
            const bar = document.getElementsByClassName('bars'); 
    
            //bars are compared 
    
            const color = isSwap ? '#6356c3' : '#459e52' ;
            setTimeout(() => {
                bar[index1].style.backgroundColor = color ;
                bar[index2].style.backgroundColor = color ;
            },i * 500)
    
            if (isSwap) {
                // Swap heights of bars
                setTimeout(() => {
                    const tempHeight = bar[index1].style.height;
                    bar[index1].style.height = bar[index2].style.height;
                    bar[index2].style.height = tempHeight;

                    const tempInnerText = bar[index1].innerText;
                    bar[index1].innerText = bar[index2].innerText;
                    bar[index2].innerText = tempInnerText;
                },(i + 1 )* 500);
            }
    
            // Reset bar colors
            setTimeout(() => {
                bar[index1].style.backgroundColor = '#3498db';
                bar[index2].style.backgroundColor = '#3498db';
            }, (i + 2) * 500);
        }
    }

  return (
    <>
        <div className="sorting-visualizer">
            <span style={{color:"white" , fontSize:"40px"}}>SORTING VISUALIZER</span>
            <div className="bars-container">
            {
                array.map((value , index) => (
                    <div 
                    className="bars" 
                    key={index}
                    style={{height: `${value}px`}}>
                        {value}
                    </div>
                ))
            }
            </div>
            <button onClick={handleBubbleSort} style={{marginTop:'50px', padding:"5px"}}>Bubble Sort</button>
        </div>
    </>
  )
}

export default SortingVisual
