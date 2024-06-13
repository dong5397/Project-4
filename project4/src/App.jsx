import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./page/Home";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Record from "./page/Record";
import RecordDetail from "./page/RecordDetail";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Home />}></Route>

        <Route path="/record" element={<Record />}></Route>
        <Route path="/record/:id" element={<RecordDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
