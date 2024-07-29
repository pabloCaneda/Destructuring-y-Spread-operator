const importar = require('./collectibles.js');

const hotToys = importar("hotToys");
const bandai = importar("bandai");
const starWars = importar("starWars");


console.log(starWars);
 const unifiedCollectibles = [
    ...hotToys,
    ...bandai,
    ...starWars
];

const collectibles = {
    figuras: unifiedCollectibles,

    listFigures: function () {
        this.figuras.forEach((figura, index) => {
            console.log(`${index + 1} - ${figura.marca} ${figura.nombre} --> precio: ${figura.precio} --> cantidad: ${figura.stock}`);
        });
    },
    figuresByBrand: function (brand) {
        return this.figuras.filter(({ marca }) => marca.toLowerCase() === brand.toLowerCase());
    }
    
}
collectibles.listFigures()
console.log(collectibles.figuresByBrand("StaR wARs"));