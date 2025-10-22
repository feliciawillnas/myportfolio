import { useEffect, useState } from "react";
import styled from "styled-components";

const CurrentDate = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const day = currentTime.toLocaleDateString(undefined, { weekday: "long" });
  const time = currentTime.toLocaleTimeString();

  return (
    <Main>
      <p>
        {day} {time}
      </p>
    </Main>
  );
};

const Main = styled.div`
  text-transform: uppercase;
`;

export default CurrentDate;
