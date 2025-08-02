import React from 'react';

export const OddPlayers = ({ first, third, fifth }) => (
  <div>
    <ul>
      <li>First : {first}</li>
      <li>Third : {third}</li>
      <li>Fifth : {fifth}</li>
    </ul>
  </div>
);

export const EvenPlayers = ({ second, fourth, sixth }) => (
  <div>
    <ul>
      <li>Second : {second}</li>
      <li>Fourth : {fourth}</li>
      <li>Sixth : {sixth}</li>
    </ul>
  </div>
);

export const ListofIndianPlayers = ({ IndianPlayers }) => (
  <div>
    <ul>
      {IndianPlayers.map((player, index) => (
        <li key={index}>Mr. {player}</li>
      ))}
    </ul>
  </div>
);

const IndianPlayers = () => {
  const T20Players = ['First Player', 'Second Player', 'Third Player'];
  const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
  const mergedIndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

  const IndianTeam = ['Sachin', 'Dhoni', 'Virat', 'Rohit', 'Yuvraj', 'Raina'];

  return (
    <div>
      <h1>Indian Team</h1>

      <h2>Odd Players</h2>
      <OddPlayers
        first={IndianTeam[0]}
        third={IndianTeam[2]}
        fifth={IndianTeam[4]}
      />

      <hr />

      <h2>Even Players</h2>
      <EvenPlayers
        second={IndianTeam[1]}
        fourth={IndianTeam[3]}
        sixth={IndianTeam[5]}
      />

      <hr />

      <h1>List of Indian Players Merged</h1>
      <ListofIndianPlayers IndianPlayers={mergedIndianPlayers} />
    </div>
  );
};

export default IndianPlayers;
