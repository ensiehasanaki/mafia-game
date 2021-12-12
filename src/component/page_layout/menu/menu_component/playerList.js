import Player from "./player";
import Players from "./playerList.json";

export default function PlayerList() {
    return (
        <span>
            {Players.map(({ Name }) => (
                <Player key={Name} />
            ))}
        </span>
    );
    /*  return (
        <div>
            <Player />
        </div>
    );*/
}
