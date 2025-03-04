import { BrowserRouter, Route, Routes } from "react-router";
import DefaultLayout from "./layout/DefaultLayout";
import Homepage from "./pages/Homepage";
import SingleTravel from "./pages/SingleTravel";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/travel/:id" element={<SingleTravel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
