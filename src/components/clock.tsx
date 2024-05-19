import React, { useState, useEffect } from 'react';
import s from '../stylesForClock/s.module.css';

const Clock = () => {
    const [time, setTime] = useState({ hour: '', minute: '', second: '' });

    useEffect(() => {
        const interval = setInterval(() => {
            const dateObject = new Date();
            const hour = dateObject.getHours().toString().padStart(2, '0');
            const minute = dateObject.getMinutes().toString().padStart(2, '0');
            const second = dateObject.getSeconds().toString().padStart(2, '0');

            setTime({ hour, minute, second });
        }, 1000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className={s.clockContainer}>
            <div className={s.timeBox}>{time.hour}</div>
            <div className={s.timeBox}>{time.minute}</div>
            <div className={s.timeBox}>{time.second}</div>
        </div>
    );
};

export default Clock;
