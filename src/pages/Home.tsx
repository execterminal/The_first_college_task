const Sidebar = [
  { t: "Главная", c: "bg-red-600" },
  { t: "Доставка", c: "bg-green-700" },
  { t: "Оплата", c: "bg-blue-400" },
  { t: "Акции", c: "bg-purple-400" },
  { t: "Статьи", c: "bg-yellow-400" },
  { t: "Контакты", c: "bg-orange-500" },
];

const Services = [
  { t: "Ваша услуга 1" },
  { t: "Ваша услуга 2" },
  { t: "Ваша услуга 3" },
  { t: "Ваша услуга 4" },
  { t: "Ваша услуга 5" },
  { t: "Ваша услуга 6" },
];

const Home: React.FC = () => {
  return (
    <div className="h-450 w-300 bg-gray-500 text-white">
      <nav className="flex">
        {Sidebar.map((item) => (
          <div key={item.t} className={`w-60 h-15 ${item.c} flex-center`}>
            {item.t}
          </div>
        ))}
      </nav>

      <nav className="flex">
        {Services.map((item) => (
          <div key={item.t} className={`w-60 h-15 bg-red-600 flex-center`}>
            {item.t}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Home;
