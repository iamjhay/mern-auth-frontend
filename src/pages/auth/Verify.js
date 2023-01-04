import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import { RESET, verifyUser } from "../../redux/features/auth/authSlice";

const Verify = () => {
  const dispatch = useDispatch();
  const { verificationToken } = useParams();
  const navigate = useNavigate();
  const { isLoading, user } = useSelector((state) => state.auth);

  console.log(user);
  const verifyAccount = async () => {
    await dispatch(verifyUser(verificationToken));
    await dispatch(RESET());
    navigate("/profile");
  };

  return (
    <section>
      {isLoading && <Loader />}
      <div className="--center-all">
        <h2>Account Verification</h2>
        <p>To verify your account, click the button below...</p>
        <br />
        {user === null || user.isVerified === false ? (
          <button onClick={verifyAccount} className="--btn --btn-primary">
            Verify Account
          </button>
        ) : (
          <button disabled className="--btn --btn-disabled">
            user account is verified
          </button>
        )}
      </div>
    </section>
  );
};

export default Verify;
