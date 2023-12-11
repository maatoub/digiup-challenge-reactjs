import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetProduct } from "../services/api.js";

export const ProduitItem = () => {
  const [produit, setProduit] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    GetProduct(productId)
      .then((res) => {
        setProduit(res.data);
        console.log(res.status);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productId]);


  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid items-center justify-items-center p-4 sm:p-8 lg:p-16">
        <div className="flex flex-col w-full space-y-2 bg-gray-50 p-4 sm:p-8 lg:p-12 drop-shadow-2xl shadow-2xl rounded-md h-auto">
          <div className="text-lg sm:text-xl lg:text-2xl text-gray-800 text-center font-extrabold">
            {produit?.title}
          </div>
          <img
            src={produit?.image}
            className="w-full h-48 sm:h-56 lg:h-72 object-contain rounded-md mb-4"
          />
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="text-lg sm:text-xl lg:text-3xl text-orange-500 font-extrabold">
              {produit?.price}€
            </div>
            <div className="text-sm sm:text-md lg:text-lg text-blue-800 font-extrabold">
              avis : {produit?.rating.rate} / 5
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
