import { BrowserRouter,Routes,Route,Link } from "react-router-dom";

import Navbar from "./assets/components/geral/NavBar/Navbar";
import Footer from "./assets/components/geral/Footer/Footer";

import Details from "./assets/components/pages/Details";

import gameBox from "./assets/imgs/geral/gamebox_inclinado.jpg"; // Imagem do jogo 
import gameBoxNormal from "./assets/imgs/geral/gamebox_normal.jpg"; // Imagem do jogo com aspect normal


function App() {
  return (
<BrowserRouter>
<Navbar/>

<main>

<Routes>
<Route exact path="/" element={<Details img={gameBox} aspect="inclinado" name={"Super Smash Bros. Ultimate - Nintendo Switch - Mídia Digital"} marca={"Nintendo"} price={129.99} idioma={"inglês"} formato={"Digital SWITCH (VIP ORIGINAL 1)"}

descricao={"Personagens icônicos se enfrentam na luta definitiva, que você poderá jogar a qualquer hora, em qualquer lugar! Derrote seus rivais com os novos personagens Simon Belmont e King K. Rool, que juntam-se a Inkling, Ridley e todos os outros lutadores na história da série Super Smash Bros. Aproveite a velocidade e o combate melhorados e lute em novos cenários baseados na série Castlevania, Super Mario Odyssey e muito mais!"} />}>
{/* "inlcinado" é o aspect da maioria das imagens, e o "normal" é para as que não são inclinadas*/} 


</Route>

</Routes>
</main>

<Footer/>
</BrowserRouter>  






);
}

export default App;
