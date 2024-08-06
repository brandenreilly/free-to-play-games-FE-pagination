import './App.css';
import React, { useEffect, useState } from 'react';
import Games from '../src/components/Games.js'
import Pagination from '../src/components/Pagination.js'


export default function App() {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [gamesPerPage] = useState(10)
  
  useEffect(()=>{
    const fetchGames = async () => {
      setLoading(true);
      const res = await fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
        method: 'GET',
        headers: {
              'x-rapidapi-key': '0be2c6ee08msh09f5b606ef00be5p12323cjsn62bad5bcc967',
              'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
      })
      const data = await res.json()
      setGames(data)
      console.log(games)
      setLoading(false);
    }

    fetchGames();
  }, []);

  const indexOfLastGame = currentPage * gamesPerPage
  const indexOfFirstGame = indexOfLastGame - gamesPerPage
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame)
  
  //ChangePage
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="App">
      <h1 className='text-primary mb-3'>List of Games</h1>
      <Games games={currentGames} loading={loading} />
      <Pagination gamesPerPage={gamesPerPage} paginate={paginate} totalGames={games.length}/>
    </div>
  );
}

