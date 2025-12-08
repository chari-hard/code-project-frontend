import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Header } from "./components/layout/header";
import { Footer } from "./components/layout/footer";
import { PageComprar } from "./pages/PageComprar";
import { PageLogin } from "./pages/PageLogin";
import { Cadastro } from "./pages/PageCadastro";
import { Page404 } from "./pages/page404";
import { PageMenuBermudas } from "./pages/PageMenuBermudas";
import { PageMenuMoletons } from "./pages/PageMenuMoletons";
import { PageMenuCamisetas } from "./pages/PageMenuCamisetas";
import { PageMenuCalcas } from "./pages/PageMenuCalcas";
import ScrollToTop from "./components/scrolltop/ScrollToTop";
import { PageAdmin } from "./pages/PageAdmin";



function App() {
  return (
    <BrowserRouter>
    
      <ScrollToTop/>

      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Home />
            <Footer />
          </>
        }
        />

        <Route path="/comprar" element={
          <>
            <Header />
            <PageComprar />
            <Footer />
          </>
        }
        />

        <Route path="/cadastro" element={
          <>
            <Header />
            <Cadastro />
            <Footer />
          </>
        }
        />

        <Route path="/bermudas" element={
          <>
            <Header />
            <PageMenuBermudas />
            <Footer />
          </>
        }
        />
        <Route path="/camisetas" element={
          <>
            <Header />
            <PageMenuCamisetas />
            <Footer />
          </>
        }
        />
        <Route path="/moletons" element={
          <>
            <Header />
            <PageMenuMoletons />
            <Footer />
          </>
        }
        />
        <Route path="/admin" element={
          <>
            <Header />
            <PageAdmin />
            <Footer />
          </>
        }
        />
        <Route path="/calcas" element={
          <>
            <Header />
            <PageMenuCalcas />
            <Footer />
          </>
        }
        />


        <Route path="/login" element={
          <PageLogin />
        }
        />

        <Route path="/*" element={
            <Page404 />
        }
        />
        {/* Página que NÃO terá Header nem Footer */}
      </Routes>
    </BrowserRouter>


  );
}

export default App;