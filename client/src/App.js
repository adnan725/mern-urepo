import Landing from "./components/Landing/Landing";
import AllQuotesPage from "./pages/AllQuotesPage";
import { Routes, Route } from "react-router-dom";
import SingleQuotePage from "./pages/SingleQuotePage";
import QouteForm from "./components/QouteForm/QouteForm";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/quotes" element={<AllQuotesPage />} />
        <Route path="/addQuote" element={<QouteForm />} />
        <Route path="quotes/:id" element={<SingleQuotePage />} />
      </Routes>
    </div>
  );
}

export default App;
