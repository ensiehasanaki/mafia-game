import Player from "./player";
import Players from "./playerList.json";

export default function PlayerList() {
    return (
        <div>
            <div>
                {Players.map(({ Name }) => (
                    <Player key={Name} />
                ))}
            </div>
        </div>
    );
}
