import Cart from "./components/Cart/Cart/cart";
import FoodButtons from "./components/FoodButtons/FoodButtons";
import Header from "./components/Header/Header";
import Provider from "./contexts/Provider";
import { StyledBack } from "./App.styles";
import Recommended from "./components/Recomended/Recommended";

function App() {
  return (
    <StyledBack>
      <Provider>
        <Header />
        <FoodButtons />
        <Recommended />
        <Cart />
      </Provider>
    </StyledBack>
  )
}

export default App;

