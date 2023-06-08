import { GoogleOAuthProvider } from "@react-oauth/google";
import Messanger from "./components/Messanger";
import AccountProvider from "./context/AccountProvider";

function App() {
  const clientId =
    "242807982966-jn74tfp6spqkreuhlgf1gjt47pvq7dco.apps.googleusercontent.com";
  return (
    <div className="App">
      <GoogleOAuthProvider clientId={clientId}>
        <AccountProvider>
          <Messanger />
        </AccountProvider>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
