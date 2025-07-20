import { useState, useEffect } from 'react';

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <h2>השעה כעת:</h2>
            <h1>{time.toLocaleTimeString()}</h1>
        </div>
    );
}

export default Clock;
