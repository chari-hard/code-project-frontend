import './style.css'

import Drawer from "@mui/material/Drawer";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import fecharcanvas from "../../../assets/images/x-carrinho.svg"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const DrawerContent = styled("div")({
    padding: 16,
    width: 400,
});

export default function OffCanvasPesquisa({ open, onClose }) {
        const navigate = useNavigate();
    const [produtos, setProdutos] = useState([])
    const abrirPageComprar = () => {
        navigate("/comprar")
    }

    useEffect(() => {
        axios.get('https://code-project-backend.onrender.com')
            .then((res) => {
                console.log(res.data)
                setProdutos(res.data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (


        <Drawer anchor="left" open={open} onClose={onClose} className="container-canvas-pesquisa">
            <DrawerContent className="container-canvas-pesquisa">

                <header className="header-canvas-pesquisa">

                    <img className='fechar-canvas' src={fecharcanvas} alt="" onClick={() => onClose()} />
                </header>

                <Autocomplete
                    freeSolo
                    options={produtos}
                    getOptionLabel={(option) => option.nome}
                    componentsProps={{
                        clearIndicator: {
                            sx: {
                                color: 'black',
                                cursor: 'pointer',
                                '&:hover': {
                                    color: 'darkgray',
                                },
                            },
                        },
                    }}


                    renderOption={(props, option) => (
                        <ListItem className='container-foto-nome-pesquisa' {...props} key={option.nome}>
                            <ListItemAvatar>
                                <Avatar
                                    src={option.imagem} onClick={() => {abrirPageComprar();onClose();}}
                                    variant="square"
                                    sx={{ width: 70, height: 70 }}
                                />
                            </ListItemAvatar>
                            <ListItemText primary={option.nome} />
                        </ListItem>
                    )}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="O que você procura?"
                            InputProps={{
                                ...params.InputProps,
                                type: "search",
                            }}
                            sx={{
                                '& input[type=search]::-webkit-search-cancel-button': {
                                    WebkitAppearance: 'none',
                                    appearance: 'none',
                                },
                            }}
                        />
                    )}
                />
            </DrawerContent>
        </Drawer>
    );
}