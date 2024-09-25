import "./App.css";
import DevModeInstruction from "./components/DevModeInstruction";
import Navbar from "./components/Navbar";
import TabMenu from "./components/TabMenu";
import DocumentationSection from "./components/DocumentationSection";
import HelloTokenSection from "./components/HelloTokenSection";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <TabMenu/>
        <DevModeInstruction />
        <HelloTokenSection />
        <DocumentationSection />
      </main>
    </>
  );
}

export default App;
