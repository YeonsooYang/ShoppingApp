import { Route, Routes } from "react-router-dom";
//import HomePage from "./pages/HomePage";
import {HomePage,ProductPage} from "./pages";

const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />}/>
      <Route path="/:productId" element={<ProductPage />} />
    </Routes>
  )
}

export default App;
