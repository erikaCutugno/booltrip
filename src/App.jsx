import { BrowserRouter, Route, Routes } from "react-router";
import DefaultLayout from "./layout/DefaultLayout";
import Homepage from "./pages/Homepage";
import SingleTravel from "./pages/SingleTravel";
import PageNotFound from "./pages/PageNotFound";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/travel/:id" element={<SingleTravel />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
