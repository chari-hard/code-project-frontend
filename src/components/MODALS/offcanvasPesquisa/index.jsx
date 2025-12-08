import  './style.css'

import Drawer from "@mui/material/Drawer";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import fecharcanvas from "../../../assets/images/x-carrinho.svg"


import ImagemCamisa from "../../../assets/images/camisa-outdated.svg";
import ImagemCamisa2 from "../../../assets/images/camisa-pain.svg";

const DrawerContent = styled("div")({
    padding: 16,
    width: 400,
});

const produtosDoSite = [
    { imagemRoupa: ImagemCamisa, nomeRoupa: "CAMISA OUTDATED" },
    { imagemRoupa: ImagemCamisa2, nomeRoupa: "CAMISETA PAIN" },
];

export default function OffCanvasPesquisa({ open, onClose }) {
    return (

        <Drawer anchor="left" open={open} onClose={onClose} className="container-canvas-pesquisa">
            <DrawerContent className="container-canvas-pesquisa">

                <header className="header-canvas-pesquisa">

                    <img className='fechar-canvas' src={fecharcanvas} alt="" onClick={() => onClose()} />
                </header>

                <Autocomplete
                    freeSolo
                    options={produtosDoSite}
                    getOptionLabel={(option) => option.nomeRoupa}
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
                        <ListItem className='container-foto-nome-pesquisa' {...props} key={option.nomeRoupa}>
                            <ListItemAvatar>
                                <Avatar
                                    src={option.imagemRoupa}
                                    variant="square"
                                    sx={{ width: 70, height: 70 }}
                                />
                            </ListItemAvatar>
                            <ListItemText primary={option.nomeRoupa} />
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