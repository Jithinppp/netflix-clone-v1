import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProfilePlanBox.style.css";

function ProfilePlanBox({
  plan: { name, price, resolution },
  currentUserPlan,
}) {
  const navigate = useNavigate();

  return (
    <div className="profile__planBox">
      <h5>
        {name} {resolution}{" "}
        {price && <span style={{ fontWeight: 700 }}>{price + ".0₹"}</span>}
      </h5>
      {currentUserPlan === name ? (
        <button style={{ backgroundColor: "gray", cursor: "default" }}>
          Subscribed
        </button>
      ) : (
        <button
          onClick={() => {
            navigate("/payment");
          }}
        >
          Subscribe
        </button>
      )}
    </div>
  );
}

export default ProfilePlanBox;
