import "./App.css";
import Navbar from "./components/Navbar";
import TabsSection from "./components/Tabs";
import { UserAccountDetailService } from "./services/UserAccountDetailService";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <TabsSection />
      </main>
    </>
  );
}

export default App;
