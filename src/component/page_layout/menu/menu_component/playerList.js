import { useImmer } from "use-immer";
import Player from "./player";
import Players from "./playerList.json";
import "./playersList.css";
import { useEffect } from "react";

export default function PlayerLis() {
    const [player, setPlayer] = useImmer(Players);
    const kill = (i) => () => {
        setPlayer((state) => {
            state[i].status = "killed";
        });
    };
    useEffect(() => {
        const timer = setTimeout(() => alert("hi!"), 1000);
        return () => clearTimeout(timer);
    }, []);

    const ban = (i) => () => {
        setPlayer((state) => {
            delete state[i];
        });
    };

    return (
        <div className="players">
            {player.map((Item, i) => (
                <Player key={Item.Name} {...Item} ban={ban} kill={kill} i={i} />
            ))}
        </div>
    );
}
