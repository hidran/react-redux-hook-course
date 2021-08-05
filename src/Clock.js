import { useState, useEffect } from 'react';

const Clock = ({ country, timezone }) => {
  const t = Date.now() + 3600 * timezone * 1000;
  const dateIni = new Date(t);

  const [date, setDate] = useState(dateIni);
  const [nation, setNation] = useState(country);

  useEffect(() => {
    const nations = ['CHINA', 'JAPAN', 'KOREA'];
    const idx = Math.floor(Math.random() * 3);
    setNation(nations[idx]);
    const interval = setInterval(() => {
      const time = date.getTime() + 1000;
      setDate(new Date(time));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [date]);

  return (
    <h2>
      In {nation} is {date.toLocaleDateString() + ' ' + date.toLocaleTimeString()}
    </h2>
  );
};

export default Clock;
