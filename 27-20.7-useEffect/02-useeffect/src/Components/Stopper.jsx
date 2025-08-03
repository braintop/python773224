import { useState, useEffect } from 'react';

function Stopper() {
    const [time, setTime] = useState(4);

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setTime(prev => prev - 1);
    //     }, 1000);

    //     return () => clearInterval(timer);
    // }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prev) => {
                if (prev === 1) {
                    clearInterval(timer)
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);


    return (
        <div>
            <h2>stopper:</h2>
            <h1>{time}</h1>
        </div>
    );
}

export default Stopper;
