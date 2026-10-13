import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./frontend/routes/AppRoutes";

//App principal, componente raiz. não faz nada, só chama o BrowserRouter e o AppRoutes, que é onde estão todas as rotas da aplicação.
//contem o CSS do App, que é o basico apenas.
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
