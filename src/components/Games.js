import React from "react";

const Games = ({games, loading}) => {
    if(loading) {
        return <h2>Loading...</h2>
    }

    return <ul className="list-group mb-4">
        {games.map(game => {
            return <li key={game.id} className="list-group-item ">
                {game.title}
            </li>
        })}
    </ul>
}

export default Games