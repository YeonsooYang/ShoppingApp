import { Route, Routes } from "react-router-dom";
import {HomePage,ProductCreatePage,ProductPage} from "./pages";
import Layout from "./components/shared/Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<HomePage />}/>
        <Route path="create" element={<ProductCreatePage />} />
        <Route path="product/:productId" element={<ProductPage />} />
      </Routes>
    </Layout>
  )
}

export default App;
