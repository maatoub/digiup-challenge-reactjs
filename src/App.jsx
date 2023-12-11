import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./layout/header";
import HomePage from "./pages/home";
import { ProduitItem } from "./components/produit-item";
import {
  ProduitContext,
  PrixMaximumContext,
  PrixMinimumContext,
  TotalProduitsContext,
  useMaxState,
  useMinState,
  useTotalState,
  useProduitState,
} from "./services/product-context";

function App() {
  return (
    <ProduitContext.Provider value={useProduitState()}>
      <PrixMinimumContext.Provider value={useMinState()}>
        <PrixMaximumContext.Provider value={useMaxState()}>
          <TotalProduitsContext.Provider value={useTotalState()}>
            {" "}
            <BrowserRouter>
              <div className=" text-white">
                <Header />
                <main className="mx-auto w-full ">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<HomePage />} />
                    <Route
                      path="/produit/:productId"
                      element={<ProduitItem />}
                    />
                  </Routes>
                  <Toaster position="bottom-right" />
                </main>
              </div>
            </BrowserRouter>
          </TotalProduitsContext.Provider>
        </PrixMaximumContext.Provider>
      </PrixMinimumContext.Provider>
    </ProduitContext.Provider>
  );
}

export default App;
