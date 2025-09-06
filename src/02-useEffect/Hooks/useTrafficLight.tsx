import { useEffect, useState } from "react";

const colors ={
    red:'bg-red-500 animate-pulse',
    yellow:'bg-yellow-500 animate-pulse',
    green:'bg-green-500 animate-pulse',
};

type TrafficLightColor = 'red' | 'yellow' | 'green';

export const useTrafficLight = () => {
  const [light, setlight] = useState<TrafficLightColor>('red');
    const [countdown, setcountdown] = useState(5);


    useEffect(() => {
    if (countdown===0) return;
    

    const intervalId = setInterval(()=>{
        setcountdown(prev=> prev-1)
    },1000)

  return () =>{
    clearInterval(intervalId);
  };
}, [countdown, light]);


//Change Light with Color Effect
useEffect(() => {
  if(countdown>0) return;
  
  setcountdown(5);

    if(light==='red'){
      setlight('green')
      return;
    }
    if(light==='yellow'){
      setlight('red')
      return;
    }
    if(light==='green'){
      setlight('yellow')
      return;
    }
    return;
}, [countdown]);

    return {
        //Props
        countdown,
        light,
        colors,

        //Computed
        percentage: (countdown / 5) * 100,
        greenLight: light=== 'green' ? colors.green : 'bg-gray-500', 
        redLight: light === 'red' ? colors.red :'bg-gray-500', 
        yellowLight: light === 'yellow' ? colors.yellow :'bg-gray-500', 
        //Methods

    }

}
