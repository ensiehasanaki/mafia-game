import { useImmer } from "use-immer";
import Player from "./player";
import Players from "./playerList.json";
import "./playersList.css";
import { useEffect } from "react";

export default function PlayerLis() {
    const [time, setTime] = useImmer("day");
    const [player, setPlayer] = useImmer(Players);
    const kill = (i) => () => {
        setPlayer((state) => {
            state[i].status = "killed";
        });
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            if (time === "day") {
                setTime("night");
            } else {
                setTime("day");
            }
        }, 10000);
        return () => clearTimeout(timer);
    });

    const ban = (i) => () => {
        setPlayer((state) => {
            delete state[i];
        });
    };

    return (
        <div className={time}>
            {player.map((Item, i) => (
                <Player key={Item.Name} {...Item} ban={ban} kill={kill} i={i} />
            ))}
        </div>
    );
}
