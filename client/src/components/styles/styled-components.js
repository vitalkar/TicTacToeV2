import styled from 'styled-components'

/**
 * app 
 */
export const AppFooter = styled.div`
    border: 1px solid black;

`;

export const AppHeader = styled.div`
    border: 1px solid black;

`;

export const AppLayout = styled.div`
    height: 100vh;
    width: 100%;
`;

export const Wrapper = styled.div`
    height: 50vh;
    width: 50%;
    border: 1px solid blue;
    margin: auto;
`;
/**
 * entry 
 */
export const EnterForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    height: 90%;
`;

export const Warning = styled.div`
    text-align: center;
    color: red;
`;

/**
 * lobby 
 */
export const LobbyLayout = styled.div`
    display: flex;
    justify-content: space-around;
    height: 100%;
    width: 100%;
    margin: auto;
    border: 1px solid black;
`;

export const RoomsList = styled.ul`
    border: 1px solid black;
    list-style-type: none;
    flex-basis: 90%;
    scroll-y: auto;
    padding: 0 3%;
`;

export const RoomItem = styled.li`
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    cursor: pointer;
    margin: 1% 0;
`;

export const RoomForm = styled.div`
    flex-basis: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
`;

export const PlayerDetails = styled.div`
    flex-basis: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
`;

/**
 * game 
 */
export const GameLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    height: 85%;
`;

export const GameBoard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 80%;
    width: 80%;
    margin: 5%;
`;

export const CellLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 30%;
    max-width: 30%;
    max-height: 30%;
    border: 1px solid black;
    cursor: pointer;
    margin: 1.5%;
    border-radius: 20%;
`;

export const GameHeader = styled.div`
    display: flex;
    justify-content: space-around;
    border: 1px solid black;
    height: 15%;
`;

export const PlayerInfo = styled.div`    
    justify-content: space-around;
    border: 1px solid black;
`;

export const EndOfGameWindow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    height: 100%;
    width: 100%;
    
`;


/**
 * leader board
 */

export const LeaderBoardLayout = styled.div`
    display: flex;
    flex-direction: column;

    border: 1px solid black;
    height: 100%;
`;

export const LeadersList = styled.ul`
    border: 1px solid black;
    list-style-type: none;
    scroll-y: auto;
    height: inherit;
    padding: 5%;
    `;








/**
 * 
 */




