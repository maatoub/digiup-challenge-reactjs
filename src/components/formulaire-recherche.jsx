import React from "react";
import { useState, useContext, useEffect } from "react";
import { toast } from "react-hot-toast";
import { GetProductSize } from "../services/api";
import {
  PrixMaximumContext,
  PrixMinimumContext,
  TotalProduitsContext,
  ProduitContext,
} from "../services/product-context";
import { ButtonIncDec } from "./button-inc-dec";

const FormulaireRecherche = () => {
  const [totalProduits, setTotalProduits] = useContext(TotalProduitsContext);
  const [tempTotalProduits, setTempTotalProduits] = useState(totalProduits);
  const [prixMinimum, setPrixMinimum] = useContext(PrixMinimumContext); //useState(0);
  const [prixMaximum, setPrixMaximum] = useContext(PrixMaximumContext);
  const [produits, setProduits] = useContext(ProduitContext);
  const [produitsFiltres, setProduitsFiltres] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setTotalProduits(tempTotalProduits);
    if (prixMinimum > prixMaximum) {
      toast.error("le prix maximum ne doit pas être supérieur au prix minimum");
    } else if (prixMaximum < 0 || prixMinimum < 0) {
      toast.error("le prix ne doit pas être inférieure a 0");
    } else if (tempTotalProduits < 0) {
      toast.error("le nombre de produits doit être supérieur à 0");
    } else {
      fetchProduits();
    }
  };

  const fetchProduits = async () => {
    await GetProductSize(tempTotalProduits)
      .then((res) => {
        const newProduits = res.data.filter(
          (produit) =>
            produit.price >= prixMinimum && produit.price <= prixMaximum
        );
        setProduits(newProduits);
        setProduitsFiltres(newProduits);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchProduits();
  }, [totalProduits]);

  
  return (
    <div className="flex items-center bg-gray-100 text-gray-900 p-4">
      <form
        onSubmit={handleSubmit}
        className="flex space-x-24 items-center justify-center flex-1"
      >
        <div className="flex space-x-4 items-center">
          <label className="font-lg font-bold" htmlFor="totalProduits">
            Nombre de produits :{" "}
          </label>
          <input
            type="number"
            value={tempTotalProduits}
            onChange={(e) => setTempTotalProduits(e.target.valueAsNumber)}
            id="totalProduits"
            className="h-8 rounded-md w-24 text-black text-xl font-semibold text-center"
            name="totalProduits"
          />
        </div>
        <div className="flex space-x-20">
          <ButtonIncDec
            imitateur={setPrixMinimum}
            value={prixMinimum}
            text={"Prix Minimum"}
          />
          <ButtonIncDec
            imitateur={setPrixMaximum}
            value={prixMaximum}
            text={"Prix Maximum"}
          />
        </div>
        <input
          className="px-4 cursor-pointer font-bold py-1 text-white text-xl bg-green-600 rounded-lg"
          value="Rechercher"
          id="submit"
          type="submit"
        />
      </form>
    </div>
  );
};
export default FormulaireRecherche;
