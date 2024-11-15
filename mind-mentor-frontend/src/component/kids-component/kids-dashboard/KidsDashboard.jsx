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
    <div className="bg-[#F0F0F0] px-4 py-10 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#5B2C6F]">Kids Chess Dashboard</h1>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <section className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-6">
            <UserCircle size={60} color="#5B2C6F" />
            <div>
              <h2 className="text-2xl font-semibold">{userData.name}</h2>
              <p className="text-gray-500 mt-3"><span className="text-4xl font-bold">{userData.points}</span> Points</p>
              <p className="mt-2 text-gray-700">Level {userData.level} | Rank {userData.rank}</p>
              <button className="mt-6 bg-[#5B2C6F] text-white py-3 px-5 rounded-full hover:bg-[#7D3E95] transition duration-300">Manage Profile</button>
            </div>
          </section>

          <section className="bg-white shadow-lg rounded-lg p-6">
            <header className="flex items-center space-x-4 text-[#5B2C6F] mb-6">
              <Clipboard size={32} />
              <h2 className="text-2xl font-semibold">Class Schedule</h2>
            </header>
            <div className="space-y-6">
              {classSchedule.map((session, i) => (
                <div key={i} className="flex justify-between items-center p-5 bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                  <div>
                    <h3 className="font-medium text-xl">{session.topic}</h3>
                    <p className="text-gray-600 mt-1">{session.date} - {session.time}</p>
                  </div>
                  <button className="bg-[#5B2C6F] text-white py-3 px-5 rounded-md hover:bg-[#7D3E95] transition duration-300">Join</button>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white shadow-lg rounded-lg p-6">
            <header className="flex items-center space-x-4 text-[#5B2C6F] mb-6">
              <Trophy size={32} />
              <h2 className="text-2xl font-semibold">Leaderboard</h2>
            </header>
            <div className="space-y-6">
              {leaderboard.map((player, i) => (
                <div key={i} className="flex justify-between items-center p-5 bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                  <div>
                    <h3 className="font-medium text-xl">{player.name}</h3>
                    <p className="text-gray-600 mt-1">Rank {player.rank}</p>
                  </div>
                  <div className="text-3xl font-bold">{player.points}</div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default KidsChessDashboard;