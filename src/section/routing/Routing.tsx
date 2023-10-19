import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Dashboard from "./Dashboard";
import Home from "./Home";

export default function Routing() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>
          <br />
          <Link to="/about/4343434">About</Link>
          <br />
          <Link to="/dashboard">Dashboard</Link>
          <br />
        </div>

        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/:id" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
