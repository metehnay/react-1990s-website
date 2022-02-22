import { useState } from "react";

import { useAuth } from "../../../firebase-config";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";

export default function ProfileLog() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();
  const navigate = useNavigate();

  return (
    <div id="main">
      {!currentUser && navigate("/login")}

      {currentUser && (
        <>
          <Profile />
        </>
      )}
    </div>
  );
}
