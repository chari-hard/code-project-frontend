import './style.css'
import Alert from '@mui/material/Alert';
import Snackbar from "@mui/material/Snackbar";
import Backdrop from "@mui/material/Backdrop";
import { Link } from "react-router-dom";
import { useState } from "react";

import LogoCodeBranco from "../../assets/images/logoCodeBranco.svg.svg"
import BotaoDeVoltar from "../../assets/images/botao-de-voltar.svg"

export const PageLogin = () => {

    const [open, setOpen] = useState(false);

    const mostrarAlertDeErro = (e) => {
        e.preventDefault();
        setOpen(true);
    };

    return (
        <section className="section-login">

            <div className="card-login">

                <Link to="../" className='botao-de-voltar'>
                    <img src={BotaoDeVoltar} alt="botâo de retornar" />
                </Link>

                <div>
                    <div className="box-login">
                        <Link to="/" className="logo-code">
                            <img src={LogoCodeBranco} alt="logo Code branco" />
                        </Link>

                        <div className="login-form">
                            <h2>FAÇA SEU LOGIN</h2>
                            <form>
                                <div class="box-email">
                                    <input type="text" placeholder="E-MAIL :" />
                                </div>

                                <div className="box-senha">
                                    <input type="password" placeholder="SENHA :" />
                                    <button className="esqueci-minha-senha" onClick={mostrarAlertDeErro}>Esqueci minha senha</button>
                                </div>


                                <button type="submit" className="btn-secondary" onClick={mostrarAlertDeErro}>ENTRAR</button>

                                <Backdrop
                                    open={open}
                                    sx={{
                                        color: '#fff',
                                        zIndex: 1300,
                                        backgroundColor: "rgba(0,0,0,0.7)"
                                    }}
                                />

                                <Snackbar
                                    open={open}
                                    autoHideDuration={3000}
                                    onClose={() => setOpen(false)}
                                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                                >
                                    <Alert variant="filled" severity="error">Você nem tem conta seu mentiroso</Alert>
                                </Snackbar>
                            </form>
                        </div>


                        <div className="cadastre-se-box">
                            <p>Não possui uma conta? Cadastre-se agora: </p>
                            <Link to="/cadastro" className="btn-secondary">CADASTRE-SE</Link>
                        </div>

                        <p>© 2025 CODE. Todos os direitos reservados.</p>
                    </div>

                </div>
            </div>

        </section>
    )
}