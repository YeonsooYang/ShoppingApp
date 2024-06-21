import { Route, Routes } from "react-router-dom";
import {HomePage,ProductCreatePage,ProductPage} from "./pages";

const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />}/>
      <Route path="create" element={<ProductCreatePage />} />
      <Route path="/:productId" element={<ProductPage />} />
    </Routes>
  )
}

export default App;
