import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Results } from "./components/Results";
import { Detail } from "./components/Detail";
import { Layout } from "./components/Layout";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Results />} />
        <Route path="/items/:id" element={<Detail />} />
      </Routes>
    </Layout>
  );
}

export default App;
