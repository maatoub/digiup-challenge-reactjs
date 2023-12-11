import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {
  ProduitContext,
  PrixMaximumContext,
  PrixMinimumContext,
  TotalProduitsContext,
} from "../services/product-context";

const Produits = () => {
  const [produits, setProduits] = useContext(ProduitContext);
  const [prixMinimum, setPrixMinimum] = useContext(PrixMinimumContext);
  const [prixMaximum, setPrixMaximum] = useContext(PrixMaximumContext);
  const [totalProduits, setTotalProduits] = useContext(TotalProduitsContext);
  const [chargement, setChargement] = useState(true);
  console.log("prixMinimum->", prixMinimum);
  console.log("prixMinimum->", prixMaximum);
  console.log("setChargement->", chargement);
  console.log("totalProduits->", totalProduits);

  useEffect(() => {
    setChargement(false);
  }, []);

  const handleSorting = (e) => {
    const val = e.target.value;
    switch (val) {
      case "1":
        const produitPrixCroissant = [...produits].sort(
          (x, y) => x.price - y.price
        );
        setProduits(produitPrixCroissant);
        break;
      case "2":
        const produitPrixDécroissant = [...produits].sort(
          (x, y) => y.price - x.price
        );
        setProduits(produitPrixDécroissant);
        break;
      default:
        return null;
    }
  };

  return (
    <div>
      {chargement ? (
        <p className="flex items-center justify-center mt-4 text-black font-extrabold text-2xl ">
          Chargement...
        </p>
      ) : produits.length > 0 ? (
        <>
          <div className="flex justify-end pr-12 pt-6">
            <form>
              <select
                onChange={handleSorting}
                className="px-2 border border-black text-black text-xl"
              >
                <option>Trier par :</option>
                <option value="1">Prix croissant</option>
                <option value="2">Prix décroissant</option>
              </select>
            </form>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-16">
            {produits &&
              produits.map((produit) => (
                <div
                  key={produit?.id}
                  className="flex flex-col space-y-2 bg-gray-50 p-4 drop-shadow-lg shadow-lg rounded-md"
                >
                  <Link to={`/produit/${produit?.id}`}>
                    <div className="text-xl h-32 text-gray-800 text-center font-extrabold">
                      {produit?.title}
                    </div>
                    <img
                      src={produit?.image}
                      className="w-full h-56 object-contain rounded-md mb-4"
                    />
                    <div className="flex items-center justify-between">
                      <div className="text-2xl text-orange-500 font-extrabold">
                        {produit?.price}€
                      </div>
                      <div className="text-md text-blue-800 font-extrabold">
                        avis : {produit?.rating.rate} / 5
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Produits;
