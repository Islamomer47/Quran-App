import React from "react";
import "./SurahCard.css";

const SurahCard = ({ surah }) => {
  return (
    <div className="card">
      <h2>{surah.title}</h2>
      <p>{surah.explanation}</p>
      {surah.audioUrl && (
        <audio controls>
          <source src={surah.audioUrl} type="audio/mp3" />
          المتصفح لا يدعم تشغيل الصوت.
        </audio>
      )}
    </div>
  );
};

export default SurahCard;
