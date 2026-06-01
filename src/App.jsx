import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import IDPTraining from "./pages/IDPTraining";
import GenerationalCommunication from "./pages/GenerationalCommunication";
import EuroBridgeTrainingSystem from "./pages/EuroBridgeTrainingSystem";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/idp-training" element={<IDPTraining />} />
	<Route path="/projects/generational-communication" 
	element={<GenerationalCommunication />} />
	<Route path="/projects/eurobridge-training-system"
	element={<EuroBridgeTrainingSystem />} />
      </Routes>
    </BrowserRouter>
  );
}