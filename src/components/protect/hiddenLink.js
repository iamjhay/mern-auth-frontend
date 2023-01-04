const { useSelector } = require("react-redux");
const {
  selectIsLoggedIn,
  selectUser,
} = require("../../redux/features/auth/authSlice");

export const ShowOnLogin = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(isLoggedIn);
  const { isSuccess } = useSelector((state) => state.auth);

  if (isLoggedIn && isSuccess) {
    return <>{children}</>;
  }
  return null;
};

export const ShowOnLogout = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  if (user === null) {
    return <>{children}</>;
  }
  return null;
};

export const AdminAuthorLink = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  if (isLoggedIn && (user?.role === "admin" || user?.role === "author")) {
    return <>{children}</>;
  }
  return null;
};
