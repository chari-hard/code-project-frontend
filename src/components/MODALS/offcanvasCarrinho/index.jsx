import './style.css'

import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Tooltip, IconButton } from "@mui/material";
import { Container } from '@mui/material';
// import { LuMinus, LuPlus } from "react-icons/lu"
import Alert from '@mui/material/Alert';
import Snackbar from "@mui/material/Snackbar";
import Backdrop from "@mui/material/Backdrop";
import { useState } from 'react';
import { Link } from 'react-router-dom';

import bolapretahehe from "../../../assets/images/bola preta com numero 1.svg"
import fecharcanvas from "../../../assets/images/x-carrinho.svg"
import ImagemCamisa101010 from '../../../assets/images/camisa-good-vibes.svg'
import lixeiraCarrinho from '../../../assets/images/lixeira.svg'
import sinalMenos from '../../../assets/images/sinal-menos.svg'
import sinalMais from '../../../assets/images/sinal-mais.svg'

const DrawerContent = styled("div")(({ theme }) => ({
    width: 420,
    padding: theme.spacing(2),
    height: "100%",
    backgroundColor: theme.palette.background.default,
}));


export default function OffCanvasCarrinho({ open, onClose, items = [] }) {
    const [openAlert, setOpenAlert] = useState(false);

    const mostrarAlertDeErro = (e) => {
        e.preventDefault();
        setOpenAlert(true);
    };

    const [contador, setContador] = useState(1)
    const aumentarContador = () => {
        setContador(contador + 1)
    }
    const diminuirContador = () => {
        if (contador > 1) {
            setContador(contador - 1)
        } else {
            setOpenAlert(true)
        }

    }
    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <DrawerContent className='container-canvas'>

                <div className="header-canvas">

                    <div className='carrinho-com-bola'>
                        <h2>Carrinho</h2>
                        <img src={bolapretahehe} alt="" />
                    </div>

                    <img className='fechar-canvas' src={fecharcanvas} alt="" onClick={() => onClose()} />
                </div>

                <div className='container-conteudo-sacola'>

                    <img src={ImagemCamisa101010} alt="" />

                    <div className='info-produtos'>

                        <h5>CAMISETA OVERSIZED ROSES GOOD VIBES</h5>

                        <div className='info-cor-e-tamanho'>
                            <h5 className='cor'>VERMELHO</h5>
                            <h5 className='tamanho'>GG</h5>

                            <div className='qtd-e-lixeira'>
                                <button onClick={diminuirContador} > <img src={sinalMenos} alt="" style={{ width: 12, height: 12 }} /> </button>
                                <p className=''>{contador} </p>
                                <button onClick={aumentarContador} > <img src={sinalMais} alt="" style={{ width: 12, height: 12 }} /> </button>

                                <Tooltip title="Remover">
                                    <IconButton>
                                        <img src={lixeiraCarrinho} alt="" style={{ width: 16, height: 16 }} />
                                    </IconButton>
                                </Tooltip>
                            </div>



                        </div>


                        <h3 className='prize'>R$ 99,99</h3>
                    </div>

                    <div className='footer-canvas'>

                        <div className='valor-total'>
                            <h2 className='subtotal'>SUBTOTAL</h2>
                            <h2 className='h2-valor-total'>R$99,99</h2>
                        </div>

                        <Link to= "/login" className='btn-primary' >FINALIZAR COMPRA</Link>

                    </div>

                </div>

                <Backdrop
                    open={openAlert}
                    sx={{
                        color: '#fff',
                        zIndex: 1300,
                        backgroundColor: "rgba(0,0,0,0.7)"
                    }}
                />

                <Snackbar
                    open={openAlert}
                    autoHideDuration={3000}
                    onClose={() => setOpenAlert(false)}
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                >
                    <Alert variant="filled" severity="error">Não é possível diminuir!</Alert>
                </Snackbar>

            </DrawerContent>
        </Drawer>
    );
}