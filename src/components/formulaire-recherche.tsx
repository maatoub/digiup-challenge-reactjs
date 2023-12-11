
import { FormEvent } from 'react';
import { ChangeEvent, useState } from 'react';
  const FormulaireRecherche = () => {
    const [totalProduits, setTotalProduits] = useState(0);
  const [prixMinimum, setPrixMinimum] = useState(0);
  const [prixMaximum, setPrixMaximum] = useState(100);

  const handleSubmit=(e : FormEvent<HTMLFormElement>)=>{
   e.preventDefault();
   console.log('Formulaire soumis avec totalProduits:', totalProduits);
  }

  const handleTotalProduits=(e: ChangeEvent<HTMLInputElement>)=>{
    const valProduits = e.target.valueAsNumber;
    if(valProduits>=0){
      setTotalProduits(valProduits);
    }
  }
 console.log('prixMaximum', prixMaximum)
 console.log('prixMinimum', prixMinimum)
  const handlePrixMinimum=(e: ChangeEvent<HTMLInputElement>)=>{
   const valMinimum= e.target.valueAsNumber;
   if(valMinimum > 0 ){
    setPrixMinimum(valMinimum);
   
   }
  }
  return (
    <div className="flex items-center bg-gray-100 text-gray-900 p-4">
      <form onSubmit={handleSubmit} className="flex space-x-24 items-center justify-center flex-1">
        <div className="flex space-x-4 items-center">
          <label className="font-lg font-bold" htmlFor="totalProduits">
            Nombre de produits :{' '}
          </label>
          <input
            type='number'
            value={totalProduits}
            onChange={handleTotalProduits}
            id="totalProduits"
            className="h-8 rounded-md w-24 text-black text-xl font-semibold text-center"
            name="totalProduits"
          />
        </div>
        <div className="flex space-x-20">
          <div className="flex space-x-1 items-center">
            <label className="font-lg font-bold" htmlFor="prixMinimum">
              Prix minimum
            </label>
            <button
              className="w-8 h-8 bg-orange-400 text-xl rounded-md font-extrabold"
              type="button"
              onClick={() => setPrixMinimum(prixMinimum>0?prixMinimum - 10 :0)}
            >
              -
            </button>
            <input
              id="prixMinimum"
              type='number'
              onChange={handlePrixMinimum}
              value={prixMinimum}
              className="h-8 rounded-md bg-white w-24 p-2 text-xl text-center"
              name="prixMinimum"
            />
            <button
              className="w-8 h-8 bg-orange-500 text-xl rounded-md font-extrabold"
              type="button"
              onClick={() => setPrixMinimum(prixMinimum + 10)}
            >
              +
            </button>
          </div>
          <div className="flex space-x-1 items-center">
            <label className="font-lg font-bold" htmlFor="prixMaximum">
              Prix Maximum
            </label>
            <button
              className="w-8 h-8 bg-orange-400 text-2xl rounded-md font-extrabold"
              type="button"
              onClick={() => setPrixMaximum(prixMaximum>0?prixMaximum - 10 :0)}
            >
              -
            </button>
            <input
            type='number'
              id="prixMaximum"
              value={prixMaximum}
              onChange={(e)=>setPrixMaximum(e.target.valueAsNumber)}
              className="h-8 bg-white rounded-md w-24 p-2 text-xl text-center "
              name="prixMaximum"
            />
            <button
              className="w-8 h-8 bg-orange-500 text-2xl rounded-md font-extrabold"
              type="button"
              onClick={() => setPrixMaximum(prixMaximum + 10>=prixMinimum?prixMaximum + 10:prixMinimum)}
            >
              +
            </button>
          </div>
        </div>

        <input
          className="px-4 cursor-pointer font-bold py-1 text-white text-xl bg-green-600 rounded-lg"
          value="Rechercher"
          type="submit"
        />
      </form>
    </div>
  );
};

export default FormulaireRecherche;
