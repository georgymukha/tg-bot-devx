// текстовые команды
const CMD_TEXT = {
  weaterI: "🌏 Make a mark",
  weatherNotI: "🏕 Погода в другом месте",
  menu: "✅ В меню",
};

// эжкспортированныые константы проекта свободного доступа
module.exports = {
  URL_API_WEATHER: "https://api.open-meteo.com/v1/forecast",
  URL_API_GEOCODER: "https://nominatim.openstreetmap.org/search",
  KGUSTA_START: {
    latitude: 42.84317921413545,
    longitude: 74.59679424776398,
  },
  KGUSTA_FINISH: {
    latitude: 42.83784523058127,
    longitude: 74.60390067028027,
  },
  CMD_TEXT,
};
