import "./App.css";
import DevModeInstruction from "./components/DevModeInstruction";
import Navbar from "./components/Navbar";
import DocumentationSection from "./components/DocumentationSection";
import SecureTokenSection from "./components/SecureTokenSection";
import AuthSection from "./components/AuthSection";
import TabsSection from "./components/Tabs";
import { UserAccountDetailService } from "./services/UserAccountDetailService";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <TabsSection />
        <DevModeInstruction />
        <AuthSection />
        <SecureTokenSection />
        <DocumentationSection />
        <UserAccountDetailService />
      </main>
    </>
  );
}

export default App;
