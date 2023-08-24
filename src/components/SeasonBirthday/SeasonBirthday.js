import React, { useState } from "react";

const SeasonBirthday = () => {
  const [birthdate, setBirthdate] = useState("");
  const [seasonInfo, setSeasonInfo] = useState("");

  const determineSeason = (month) => {
    if (month >= 3 && month <= 5) return "Spring";
    if (month >= 6 && month <= 8) return "Summer";
    if (month >= 9 && month <= 11) return "Fall";
    return "Winter";
  };

  const handleBirthdateChange = (event) => {
    const inputDate = event.target.value;
    setBirthdate(inputDate);

    const [month, day] = inputDate.split("/").map(Number);
    const season = determineSeason(month);
    setSeasonInfo(`${season} ${day}`);
  };

  return (
    <div>
      <h2>Season Birthday Calculator</h2>
      <label>
        Enter your birthdate (mm/dd):
        <input type="text" value={birthdate} onChange={handleBirthdateChange} />
      </label>
      <div>{seasonInfo}</div>
    </div>
  );
};

export default SeasonBirthday;
