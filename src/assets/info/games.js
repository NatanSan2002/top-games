let games = [
{
name: "Sonic Frontiers - Nintendo Switch - Midia Digital",
price: 9.99,
image:"gamebox_inclinado3.jpg",
parcelas:2,
},
{
    name: "Super Smash Bros. Ultimate - Nintendo Switch - Mídia Digital",
    price: 129.99,
    image:"gamebox_inclinado.jpg",
    parcelas:12,
    },

    {name: "Dark Souls 3 - Xbox One - Midia Digital",
    price: 79.99,
    image:"gamebox_inclinado2.jpg",
    parcelas:5,
    }
]

let i;


for(i=0;i<4;++i){
games.push(games[0]);
games.push(games[1]);
games.push(games[2]);
}        // While pra adicionar Itens pro código ficar mais limpo XP


export default games;



