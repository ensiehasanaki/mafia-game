import "./player.css";
export default function Player() {
    return (
        <div className="all">
            <div className="ax">
                <p>Ax</p>
            </div>

            <div className="property">
                <p>Name</p>
                <p>Roule</p>
                <p>Status</p>
                <div className>
                    <button className="ban">Ban</button>
                    <button className="kill">kill</button>
                </div>
            </div>
        </div>
    );
}
