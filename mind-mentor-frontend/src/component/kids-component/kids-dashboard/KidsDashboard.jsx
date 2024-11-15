import { UserCircle, Clipboard, Trophy } from 'lucide-react';
import { useState } from 'react';

const KidsChessDashboard = () => {
  const [userData] = useState({
    name: 'Emma Doe', 
    points: 4500,
    level: 2,
    rank: 7
  });

  const classSchedule = [
    { date: 'May 1', topic: 'Intro to Chess', time: '10am - 12pm' },
    { date: 'May 8', topic: 'Piece Movement', time: '10am - 12pm' },
    { date: 'May 15', topic: 'Tactics Training', time: '10am - 12pm' },
    { date: 'May 22', topic: 'Endgame Strategies', time: '10am - 12pm' }
  ];

  const leaderboard = [
    { rank: 1, name: 'Alice', points: 6200 },
    { rank: 2, name: 'Bob', points: 5700 },
    { rank: 3, name: 'Charlie', points: 5100 },
    { rank: 4, name: 'David', points: 4800 },
    { rank: 5, name: 'Emma', points: 4500 }
  ];

  return (
    <div className="container mx-auto p-6 bg-[rgb(177,21,177)]">
      <h1 className="text-3xl font-bold text-center text-[rgb(177,21,177)] mb-6">Kids Chess Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4">
          <UserCircle size={60} color="[rgb(177,21,177)]" />
          <div>
            <h2 className="text-xl font-semibold">{userData.name}</h2>
            <div className="text-gray-500 mt-2"><span className="text-3xl font-bold">{userData.points}</span> Points</div>
            <div className="mt-1 text-gray-600">Level {userData.level} | Rank {userData.rank}</div>
            <button className="mt-4 bg-[rgb(177,21,177)] text-white py-2 px-4 rounded-full hover:bg-[rgb(194,35,194)] transition duration-300">Manage Profile</button>
          </div>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center space-x-3 text-[rgb(177,21,177)] mb-4">
            <Clipboard size={28} />
            <h2 className="text-xl font-semibold">Class Schedule</h2>
          </div>
          <div className="space-y-4">
            {classSchedule.map((session, i) => (
              <div key={i} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                <div>
                  <div className="font-medium text-lg">{session.topic}</div>
                  <div className="text-gray-500">{session.date} - {session.time}</div>
                </div>
                <button className="bg-[rgb(177,21,177)] text-white py-2 px-4 rounded-md hover:bg-[rgb(194,35,194)] transition duration-300">Join</button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center space-x-3 text-[rgb(177,21,177)] mb-4">
            <Trophy size={28} />
            <h2 className="text-xl font-semibold">Leaderboard</h2>
          </div>
          <div className="space-y-4">
            {leaderboard.map((player, i) => (
              <div key={i} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                <div>
                  <div className="font-medium text-lg">{player.name}</div>
                  <div className="text-gray-500">Rank {player.rank}</div>
                </div>
                <div className="text-2xl font-bold">{player.points}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidsChessDashboard;