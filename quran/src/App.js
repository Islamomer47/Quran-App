import React, { useState, useEffect } from "react";
// import hooks
import NavBar from "./NavBar";
import Footer from "./Footer";
import SurahCard from "./SurahCard";
import "./App.css";

const initState = {
  suras: [
    {
      id: 1,
      title: "الفاتحة",
      explanation: "تفسير سورة الفاتحة",
      url: "https://example.com/surah1",
    },
    {
      id: 2,
      title: "البقرة",
      explanation: "تفسير سورة البقرة",
      url: "https://example.com/surah2",
    },
    {
      id: 3,
      title: "آل عمران",
      explanation: "تفسير سورة آل عمران",
      url: "https://example.com/surah3",
    },
    {
      id: 4,
      title: "النساء",
      explanation: "تفسير سورة النساء",
      url: "https://example.com/surah4",
    },
    {
      id: 5,
      title: "المائدة",
      explanation: "تفسير سورة المائدة",
      url: "https://example.com/surah5",
    },
    {
      id: 6,
      title: "الأنعام",
      explanation: "تفسير سورة الأنعام",
      url: "https://example.com/surah6",
    },
    {
      id: 7,
      title: "الأعراف",
      explanation: "تفسير سورة الأعراف",
      url: "https://example.com/surah7",
    },
    {
      id: 8,
      title: "الأنفال",
      explanation: "تفسير سورة الأنفال",
      url: "https://example.com/surah8",
    },
    {
      id: 9,
      title: "التوبة",
      explanation: "تفسير سورة التوبة",
      url: "https://example.com/surah9",
    },
    {
      id: 10,
      title: "يونس",
      explanation: "تفسير سورة يونس",
      url: "https://example.com/surah10",
    },
    {
      id: 11,
      title: "هود",
      explanation: "تفسير سورة هود",
      url: "https://example.com/surah11",
    },
    {
      id: 12,
      title: "يوسف",
      explanation: "تفسير سورة يوسف",
      url: "https://example.com/surah12",
    },
    {
      id: 13,
      title: "الرعد",
      explanation: "تفسير سورة الرعد",
      url: "https://example.com/surah13",
    },
    {
      id: 14,
      title: "إبراهيم",
      explanation: "تفسير سورة إبراهيم",
      url: "https://example.com/surah14",
    },
    {
      id: 15,
      title: "الحجر",
      explanation: "تفسير سورة الحجر",
      url: "https://example.com/surah15",
    },
    {
      id: 16,
      title: "النحل",
      explanation: "تفسير سورة النحل",
      url: "https://example.com/surah16",
    },
    {
      id: 17,
      title: "الإسراء",
      explanation: "تفسير سورة الإسراء",
      url: "https://example.com/surah17",
    },
    {
      id: 18,
      title: "الكهف",
      explanation: "تفسير سورة الكهف",
      url: "https://example.com/surah18",
    },
    {
      id: 19,
      title: "مريم",
      explanation: "تفسير سورة مريم",
      url: "https://example.com/surah19",
    },
    {
      id: 20,
      title: "طه",
      explanation: "تفسير سورة طه",
      url: "https://example.com/surah20",
    },
    {
      id: 21,
      title: "الأنبياء",
      explanation: "تفسير سورة الأنبياء",
      url: "https://example.com/surah21",
    },
    {
      id: 22,
      title: "الحج",
      explanation: "تفسير سورة الحج",
      url: "https://example.com/surah22",
    },
  ],
};

const App = () => {
  const [suras, setSuras] = useState(initState.suras);

  useEffect(() => {
    fetch("http://api.alquran.cloud/v1/quran/ar.alafasy")
      .then((response) => response.json())
      .then((data) => {
        const updatedSuras = suras.map((surah) => {
          const surahData = data.data.surahs.find((s) => s.number === surah.id);
          return {
            ...surah,
            audioUrl: surahData ? surahData.ayahs[0].audio : "",
          };
        });
        setSuras(updatedSuras);
      })
      .catch((error) => console.error("Error fetching the suras:", error));
  }, []);

  return (
    <div className="App">
      <NavBar />
      <div className="cards-container">
        {suras.map((surah) => (
          <SurahCard key={surah.id} surah={surah} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
