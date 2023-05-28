import React, { useState, useEffect } from 'react';
import BotCard from "./BotCard";

function BotCollection() {
  const [bots, setBots] = useState([]);
  
  
  useEffect(() => {
    fetch('http://localhost:8002/bots')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.log(error));
  }, []);
  
  return (
    <div className="ui four column grid">
      <h2>Collection of all bots</h2>
      <div className="row">
      {bots.map(bot => (
        <BotCard
        key={bot.id}
        bot={bot}
        avatarUrl ={bot.avatar_url} 
        name= {bot.name}
        catchphrase= {bot.catchphrase}
        health= {bot.health} 
        damage= {bot.damage} 
        armor= {bot.armor} 
      />
      ))}
     </div>
    </div>
  );
}

export default BotCollection;


