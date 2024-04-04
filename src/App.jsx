import { Provider } from "react-redux";
import Body from "./components/Body.jsx";
import store from "./redux/store.jsx";

const App = () => {
  console.log(import.meta.env.VITE_FIREBASE_API_KEY)
  return (
    <Provider store={store}>
      <Body />
    </Provider>
  )
}

export default App