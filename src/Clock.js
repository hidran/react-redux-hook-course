
const Clock = ({ country, timezone }) => {
  const t = Date.now() + 3600 * timezone * 1000;
  const date = new Date(t);
  console.log(date, t, timezone);
  return (
    <h2>
      In {country} is {date.toLocaleDateString() + ' ' + date.toLocaleTimeString()}
    </h2>
  );
};

export default Clock;
