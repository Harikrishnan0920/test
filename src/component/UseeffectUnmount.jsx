import React, { useState, useEffect } from 'react';

function UseeffectUnmount() {
    const [size, setSize] = useState(window.innerWidth);

    const handleResize = () => {
        setSize(window.innerWidth);
    };

    useEffect(() => {
        console.log('Component mounted');

        window.addEventListener('resize', handleResize);

        // Cleanup function to remove event listener when component is unmounted
        return () => {
            console.log('Component unmounted');
            window.removeEventListener('resize', handleResize);
        };
    }, [size]); // Empty dependency array ensures the effect runs only once after initial render

    return (
        <div className='usestate'>
            <h1>Window Size: {size}</h1>
            <button onClick={()=>setSize((prev)=>prev+1)}>click here</button>
        </div>
    );
}

export default UseeffectUnmount;
