import { Link } from "react-router-dom";

// Hooks
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

// Componenents
import Settings from "./Settings";

export default function Navbar({ toggleDarkMode, darkMode }) {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  return (
    <nav
      aria-label="Top"
      className="flex items-center justify-between w-full py-6 "
    >
      <div className="flex items-center">
        <Link to="/">
          <span className="sr-only">Workflow</span>
          <img
            className="w-auto h-10 "
            src="https://tailwindui.com/img/logos/workflow-mark.svg?"
            alt=""
          />
        </Link>
      </div>
      {!user && (
        <div className="ml-10 space-x-4">
          <Link to="login" className="btn-light">
            Log in
          </Link>
          <Link to="signup" className="btn-dark">
            Sign up
          </Link>
        </div>
      )}
      {user && (
        <div className="flex items-center ml-10 space-x-4">
          <p>Hello, {user.displayName}</p>
          <Settings
            logout={logout}
            user={user}
            toggleDarkMode={toggleDarkMode}
            darkMode={darkMode}
          />
        </div>
      )}
    </nav>
  );
}
