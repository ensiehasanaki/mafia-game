import "./player.css";
export default function Player() {
    return (
        <div className="all">
            <div className="property">
                <div className="ax">
                    <p>Ax</p>
                </div>
                <p>Name</p>
                <p>Roule</p>
                <p>Status</p>
                <div>
                    <button className="ban">Ban</button>
                    <button className="kill">kill</button>
                </div>
            </div>
        </div>
    );
}
