import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Provider from "./contexts/Provider";

function App() {
  return (
    <Provider>
      <Header />
      <Products />
    </Provider>
  )
}

export default App;

