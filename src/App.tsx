import Joke from "./components/Joke.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import type {JokesType} from "./interfaces/JokesType.ts";

const MainJokeDiv=styled.div`
    margin: 10%;
`;

export default function App() {
  const [tasks, setTasks] = useState<JokesType>(Object);

  useEffect(() => {
    async function fetchData() {
      const rawData = await fetch("https://official-joke-api.appspot.com/random_joke");
      const jsonResult = await rawData.json();
      setTasks(jsonResult);
    }

    fetchData()
        .then(() => console.log("YAYY! Data was fetched successfully!"))
        .catch((e: Error) => console.log("Try again :( ERROR: " + e));

  }, []);

  return (
      <>
        <MainJokeDiv>
          <Joke tasks={tasks}/>
        </MainJokeDiv>
      </>
  )
}
