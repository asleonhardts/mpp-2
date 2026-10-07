import styled from "styled-components";
import type {JokesType} from "../interfaces/JokesType.ts";

const AllJokesDiv=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 60vh;
    width: 80vw;
    background-color: #FF0054;
    border: 20px double #4C2C72;
    border-radius: 30px;
    font-family: "Lucida Sans Unicode", "Lucida Grande", Arial, sans-serif;
    font-size: calc(2px + 1vw);
`;

const KindOfJoke=styled.h1`
    font-family: "Arial Black", Arial, sans-serif;
    font-variant: small-caps;
    color: #F4FDD9;
    background-color: #48284A;
    padding: 15px;
    border-radius: 30px;
    margin-bottom: 2%;
`;

const NewJoke=styled.button`
    padding: 1%;
    margin-top: 2%;
    font-weight: bold;
    background-color: #519872;
    font-size: calc(2px + 1vw);
`;

export default function Joke({tasks}: {tasks: JokesType}) {
    return (
        <AllJokesDiv>
            <KindOfJoke>Type: {tasks.type}</KindOfJoke>
            <h2>{tasks.setup}</h2>
            <h2>- {tasks.punchline}</h2>
            <br/>
            <p>{tasks.id}</p>
            <NewJoke onClick={() => window.location.reload()}>Give me a new joke!</NewJoke>
                {/* used window.location.reload to refresh the page to fetch a new joke */}
        </AllJokesDiv>
    )
}



