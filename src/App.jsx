import Cart from "./components/Cart/Cart/cart";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Provider from "./contexts/Provider";

function App() {
  return (
    <Provider>
      <Header />
      <Products />
      <Cart />
    </Provider>
  )
}

export default App;

