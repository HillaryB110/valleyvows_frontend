import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserProfileAPI } from "../API/userProfileAPI";
import CreateUserProfile from "../CreateUserProfile/CreateUserProfile";


const UserProfilePage = () => {
  const [userProfile, setUserProfile] = useState(null);

let {id} = useParams();

  useEffect(() => {
    async function fetchUserProfile() {
      try {
        const response = await getUserProfileAPI(id);
        setUserProfile(response.data); 
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    }
    fetchUserProfile();
  }, []);

  if (!userProfile) {
    return <p>Loading...</p>;
  }
console.log(userProfile)
  return (
    <div>
      <h2>User Profile</h2>
      <img scr={userProfile.user_avatar} alt="User Avatar"/>
      <p>Name: {userProfile.firstname}</p>
      <p>Gender: {userProfile.gender}</p>
      <p>Birthday: {userProfile.birthday}</p>
      <p>Skill: {userProfile.skill}</p>
      <p>Bio : {userProfile.full_profile}</p>
      <p>Best Gift : {userProfile.best_gift}</p>
    </div>
  );
};

export default UserProfilePage;
