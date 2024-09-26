import "./App.css";
import DevModeInstruction from "./components/DevModeInstruction";
import Navbar from "./components/Navbar";
import DocumentationSection from "./components/DocumentationSection";
import SecureTokenSection from "./components/SecureTokenSection";
import TabsSection from "./components/Tabs";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <TabsSection />
        <DevModeInstruction />
        <SecureTokenSection />
        <DocumentationSection />
      </main>
    </>
  );
}

export default App;
