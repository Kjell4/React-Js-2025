import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import SomethingList from "./pages/SomethingList";
import SomethingDetails from "./pages/SomethingDetails";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/items" element={<SomethingList />} />
          <Route path="/items/:id" element={<SomethingDetails />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}

