import { useImmer } from "use-immer";
import Player from "./player";
import Players from "./playerList.json";

export default function PlayerLis() {
    const [player, setPlayer] = useImmer(Players);
    const kill = (i) => () => {
        setPlayer((state) => {
            state[i].status = "killed";
        });
    };
    const ban = (i) => () => {
        setPlayer((state) => {
            delete state[i];
        });
    };

    return (
        <div>
            {player.map((Item, i) => (
                <Player key={Item.Name} {...Item} ban={ban} kill={kill} i={i} />
            ))}
        </div>
    );
}
