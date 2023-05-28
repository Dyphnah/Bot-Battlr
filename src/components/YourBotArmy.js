import React, { useState } from 'react';
import BotCard from "./BotCard";

function YourBotArmy(bot) {
  const [inBotArmy, setInBotArmy] = useState([]);

  function enlistBotToArmy(bot) {
    if (!inBotArmy.every((myBot) => myBot.id === bot)) {
      setInBotArmy([...inBotArmy, bot]);
    }
  }

  function removeBotFromArmy(bot) {
    const displayUpdatedBotArmy = inBotArmy.filter((myBot) => myBot.id !== bot.id);
    setInBotArmy(displayUpdatedBotArmy);
  }
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
        <h1>Your Bot Army</h1>
        {inBotArmy.map((bot) => (
         <BotCard
            inBotArmy={inBotArmy}
            key={bot.id}
            bot ={bot}
            enlistBot={enlistBotToArmy}
            dischargeBot= {removeBotFromArmy}           
         />
         ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
