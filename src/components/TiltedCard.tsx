import {FC, useState} from 'react';

interface ITiltedCard{
    foreground: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}

const TiltedCard : FC<ITiltedCard>  = ({foreground, children, className}) =>{
    
    const [isHoverOn, setIsHoverOn] = useState<boolean>(false);
    
    return(
        <div className={`Card ${className}`}
        onMouseEnter={()=>{setIsHoverOn(true)}}
        onMouseLeave={()=>{setIsHoverOn(false)}}
        >
            <span>{isHoverOn ? children : foreground}</span>
        </div>
    );
};

export default TiltedCard;