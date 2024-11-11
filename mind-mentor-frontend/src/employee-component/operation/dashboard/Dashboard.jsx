

const Dashboard = () => {
  const stats = [
    {
      title: "Monthly Team's Performance",
      value: 120,
      maxValue: 200,
      type: "progress"
    },
    {
      title: "Monthly Individual Performance",
      value: 0,
      subtitle: "My Enrolments"
    },
    {
      title: "My Today's Interaction",
      value: 0,
      subtitle: "My Interactions"
    }
  ];

  return (
    <div className="w-full space-y-6 p-4">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="w-full bg-white rounded-lg shadow-lg p-6"
        >
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">
              {stat.title}
            </h2>
              
            {stat.type === "progress" ? (
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 rounded-full transition-all duration-300"
                    style={{ 
                      width: `${(stat.value / stat.maxValue) * 100}%` 
                    }}
                  />
                </div>
                <div className="flex justify-center">
                  <span className="text-3xl font-bold text-gray-700">
                    {stat.value}
                  </span>
                </div>
              </div>
            ) : (
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-blue-500">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.subtitle}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;