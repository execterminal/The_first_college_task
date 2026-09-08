import { HiMiniBold } from "react-icons/hi2";
import { FaOdnoklassniki } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";

import { MdCopyright } from "react-icons/md";

const Navbar = [
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
    <div className="h-screen w-480 bg-gray-500 text-white pl-60 pr-60 pt-10">
      <nav className="flex gap-1">
        {Navbar.map((item) => (
          <div
            key={item.t}
            className={`w-60 h-15 ${item.c} flex items-center justify-center`}
          >
            {item.t}
          </div>
        ))}
      </nav>
      <div className="flex">
        <div className="flex pt-5 gap-3 flex-col">
          {Services.map((item) => (
            <div
              key={item.t}
              className={`w-80 h-20 bg-red-600 flex items-center justify-center`}
            >
              {item.t}
            </div>
          ))}
        </div>

        <div className="flex flex-col w-full">
          <img
            className="p-5 pr-0 w-full h-80"
            src="/public/img.jpeg"
            alt="main image"
          ></img>
          <div className="flex flex-row pl-5 gap-5">
            <div className="bg-yellow-400 w-full h-30 flex items-center text-center">
              Веб-студаи VfsterWeb.PRO Представляет html-шаблон "Метро-сайт
              v1.0"
            </div>
            <div className="bg-blue-500 w-full h-30 flex items-center text-center">
              Шаблон разработан на основе все известного Vttro стиля для Windows
              8, адаптация произведена с помощью bootstrap v3.2
            </div>
          </div>

          <h1 className="text-3xl  p-5 flex items-center justify-center">
            Выбирая наш шаблон вы получаете
          </h1>

          <div className="flex flex-row pl-5 gap-5">
            <div className="bg-black w-full h-30 flex items-center text-center">
              100% исходные файлы всего шаблонаю Ссылка для загрузки будет
              доступна только Вам
            </div>
            <div className="bg-purple-500 w-full h-30 flex items-center text-center">
              Благодаря bootstrap, вы получаете гибкий дизайн, который легко и
              быстро "натягивается" на CMS
            </div>
            <div className="bg-cyan-500 w-full h-30 flex items-center text-center">
              1 месяц технической поддержки по любым вопросам касающимся шаблона
              или bootstrap
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-0 absolute bg-gray-800 w-360 h-40 flex">
        <div className="flex p-10 flex-row items-center justify-between w-full">
          <div className="flex text-3xl items-center">
            <HiMiniBold />
            <FaOdnoklassniki />
            <FaFacebookF />
            <FaTwitter />
            <FaGooglePlusG className="pl-1 pr-1  text-5xl" />
            <FaPlusCircle className="pl-1" />
          </div>
          <div>Разработано студией - MasterWeb.PRO</div>
          <div className="flex items-center gap-1">
            <MdCopyright />
            Все права защищены, 2014
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
