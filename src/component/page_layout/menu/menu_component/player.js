import "./player.css";
export default function Player({ Name, Role, status, ban, kill, i }) {
    return (
        <div className="container-player">
            <div className="container-ax">
                <div className="ax">
                    <p>Ax</p>
                </div>
            </div>

            <div className="property">
                <p>{Name}</p>
                <p>{Role}</p>
                <p>{status}</p>
            </div>

            <div>
                <button className="ban" onClick={ban(i)}>
                    Ban
                </button>
                <button className="kill" onClick={kill(i)}>
                    kill
                </button>
            </div>
        </div>
    );
}
