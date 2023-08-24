import React, { useState } from "react";
import "./CreateUserProfile.css";
import { displayUserProfileAPI } from "../API/userProfileAPI";
import { useNavigate } from "react-router-dom";
import { getImagesForUserAvatars } from "../data/Images";
import SeasonBirthday from "../SeasonBirthday/SeasonBirthday";

const CreateUserProfile = () => {
  let navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");
  const [bioShort, setBioShort] = useState("");
  const [fullProfile, setFullProfile] = useState("");
  const [bestGift, setBestGift] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  const skills = [
    "Mining",
    "Farming",
    "Fishing",
    "Forging",
    "Artisan Goods",
    "Cooking",
    "Crafting",
  ];
  const avatarOptions = [
    "Female_Avatar1.png",
    "Female_Avatar2.png",
    "Female_Avatar3.png",
    "Male_Avatar1.png",
    "Male_Avatar2.png",
    "Male_Avatar3.png",
    "Non-Binary1.png",
    "Non-Binary2.png",
    "Non-Binary3.png",
    "Non-Binary4.png",
    "Non-Binary5.png",
    "Non-Binary6.png",
  ];

  const handleFirstNameChange = (event) => {
    setFirstname(event.target.value);
  };

  const handleGenderChange = (event) => {
    const selectedGender = event.target.value;
    setGender(selectedGender);
    setUserAvatar("");
  };

  const handleBirthdayChange = (event) => {
    setBirthday(event.target.value);
  };

  const handleSkillChange = (event) => {
    setSelectedSkill(event.target.value);
  };
  const handleBioShortChange = (event) => {
    setBioShort(event.target.value);
  };

  const handleFullProfileChange = (event) => {
    setFullProfile(event.target.value);
  };

  const handleBestGiftChange = (event) => {
    setBestGift(event.target.value);
  };
  const handleUserAvatarChange = (event) => {
    const selectedAvatar = event.target.value;

    const avatarUrl = getImagesForUserAvatars({
      gender,
      variant: selectedAvatar.slice(-5, -4),
    });
    setUserAvatar(avatarUrl);
  };

  const filteredAvatarOptions =
    gender === "Non-Binary"
      ? avatarOptions
      : avatarOptions.filter((avatar) => avatar.includes(gender));

  const handleSubmit = async (event) => {
    event.preventDefault();
    let userProfileDetails = {
      firstname: firstname,
      gender: gender,
      birthday: birthday,
      skill: selectedSkill,
      bio_short: bioShort,
      full_profile: fullProfile,
      best_gift: bestGift,
      user_avatar: userAvatar,
    };
    alert("Profile creation was successful!");
    navigate(`/user-profile`);

    try {
      await displayUserProfileAPI(userProfileDetails);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="background">
      <div className="container text">
        <div className="create-user-profile-card">
          <div className="create-user-profile-content">
            <h2> Create Your Profile</h2>
            <form onSubmit={handleSubmit}>
              <label className="form-text">
                Gender:
                <select value={gender} onChange={handleGenderChange}>
                  <option value="">Select Gender</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Non-Binary">Non-Binary</option>
                </select>
              </label>
              <label className="form-text">
                Select Your Avatar:
                <select
                  value={userAvatar}
                  onChange={handleUserAvatarChange}
                  className="avatar-select"
                  disabled={!gender} // Disable until gender is selected
                >
                  <option value="">Select an Avatar</option>
                  {filteredAvatarOptions.map((avatar, index) => (
                    <option key={index} value={avatar}>
                      {avatar}
                    </option>
                  ))}
                </select>
              </label>
              {userAvatar && (
                <div className="avatar-preview">
                  <h4>Avatar Preview:</h4>
                  <img
                    src={userAvatar}
                    alt="Selected Avatar"
                    className="avatar-thumbnail"
                  />
                </div>
              )}
              <label className="form-text">
                Name:
                <input
                  type="text"
                  value={firstname}
                  onChange={handleFirstNameChange}
                />
              </label>
              {SeasonBirthday}
              <SeasonBirthday />

              <label className="form-text">
                Bio (Short):
                <textarea
                  value={bioShort}
                  onChange={handleBioShortChange}
                  rows={4} // You can adjust the number of rows as needed
                  cols={50} // You can adjust the number of columns as needed
                  placeholder="Enter a short bio..."
                />
                <label className="form-text">
                  Full Profile:
                  <textarea
                    value={fullProfile}
                    onChange={handleFullProfileChange}
                    rows={8} // You can adjust the number of rows as needed
                    cols={50} // You can adjust the number of columns as needed
                    placeholder="Enter your full profile..."
                  />
                  
                </label>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
//create a dropdown menu that allows you to hover over the option and display a little item card with picture on select displays picture and name of object next to avatar .. need to build component for item details  to pass into best gift field
export default CreateUserProfile;
