import React, { useState, useEffect } from 'react';
import { addDays, differenceInSeconds } from 'date-fns';

const UnderConstruction = () => {
    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        const targetDate = addDays(new Date(), 2);

        const interval = setInterval(() => {
            const remainingSeconds = differenceInSeconds(targetDate, new Date());

            const days = Math.floor(remainingSeconds / (3600 * 24));
            const hours = Math.floor((remainingSeconds % (3600 * 24)) / 3600);
            const minutes = Math.floor((remainingSeconds % 3600) / 60);
            const seconds = remainingSeconds % 60;

            setTimeLeft(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center mt-40">
            <h1 className="text-3xl font-bold mb-4">Site Under Construction</h1>
            <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Under Construction" className="mb-4" />
            <p className="text-lg text-gray-600 mb-2">We're working hard to bring you something amazing!</p>
            <div className="text-xl text-gray-700 font-semibold">Estimated Time Remaining:</div>
            <div className="text-2xl text-blue-500 font-bold">{timeLeft}</div>
        </div>
    );
};

export default UnderConstruction;
