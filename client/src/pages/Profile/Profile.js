import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";

// components and css
import "./Profile.style.css";
import Navigation from "../../components/Navigation/Navigation";
import avatar from "../../assets/images/user-avatar.png";
import { FiMail } from "react-icons/fi";
import ProfilePlanBox from "../../components/ProfiePlanBox/ProfilePlanBox";

const plans = [
  {
    name: "Basic",
    resolution: "720p",
    price: null,
  },
  {
    name: "Standard",
    resolution: "1080p",
    price: 399,
  },
  {
    name: "Premium",
    resolution: "4K",
    price: 699,
  },
];

function Profile() {
  const user = useSelector(selectUser);
  return (
    <div className="profile__container">
      <Navigation profilePage={true} />
      <div className="profile__section">
        <h1 className="profile__sectionTitle">Edit Profile</h1>
        <div className="profile__card">
          {/* avatar */}
          <div className="profile__avatarContainer">
            <img src={avatar} alt="avatar" />
          </div>
          {/* subsection */}
          <div className="profile__subsection">
            <h4 className="profile__email">
              <FiMail />
              {user.email}
            </h4>
            <h4 className="profile__currentPlan">
              Plans (current plan: <span>{user?.plan}</span>)
            </h4>
            <p className="profile__renewalDate">renewal date 14-5-23</p>
            {plans.map((plan) => (
              <ProfilePlanBox
                key={plan.name}
                plan={plan}
                currentUserPlan={user.plan}
              />
            ))}
            <button
              className="profile__signOutButton"
              onClick={() => signOut(auth)}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
