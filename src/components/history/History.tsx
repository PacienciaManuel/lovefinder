import React, { useRef } from 'react'
import HistoryItem from './HistoryItem'
import usuarios from '@/json/usuarios.json';
import { Box, IconButton, Stack } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'


export default function History() {
    const speed = 170;
    const scrollRef = useRef<HTMLDivElement>(null);
    
    function handleScrollLeft(evt:React.MouseEvent<HTMLButtonElement>) {
        evt.preventDefault();
        scrollRef.current!.scrollBy({behavior: 'smooth', left: -speed});
    }

    function handleScrollRigth(evt:React.MouseEvent<HTMLButtonElement>) {
        evt.preventDefault();
        scrollRef.current!.scrollBy({behavior: 'smooth', left: speed});
    }

    return (
        <Box position={'relative'} height={{xs: 180, sm: 240}}>
            <IconButton onClick={handleScrollLeft} size='small' sx={{display: {xs: 'none', sm: 'flex'}, position: 'absolute', zIndex: 2, top: '50%', left: 0, boxShadow: '0 0 10px 2px rgba(0,0,0,0.2)', transformOrigin: 'center', transform: 'translate(-50%, -50%)',  bgcolor: 'white', color: 'primary.main', '&:hover':{bgcolor: 'primary.main', color: 'white'}}}>
                <ArrowBackIosIcon fontSize='large'/>
            </IconButton>
            <Stack component={'div'} ref={scrollRef} spacing={2} direction={'row'} position={'absolute'} width={'100%'} height={'100%'} sx={{overflowX: 'auto', '&::-webkit-scrollbar': {height: 0}}}>
                <HistoryItem index={0} />
                {
                    usuarios.slice(7,15).map((usuario:any,index:number)=>(
                        <HistoryItem  index={index + 1} historia={{nome: usuario.nome, avatar: usuario.fotoPerfil, capa: usuarios[10 + index + 3].fotoPerfil}} />
                    ))
                }
            </Stack>
            <IconButton onClick={handleScrollRigth} size='small' sx={{display: {xs: 'none', sm: 'flex'}, position: 'absolute', zIndex: 2, top: '50%', right: 0, boxShadow: '0 0 10px 2px rgba(0,0,0,0.2)', transformOrigin: 'center', transform: 'translate(50%, -50%)',  bgcolor: 'white', color: 'primary.main', '&:hover':{bgcolor: 'primary.main', color: 'white'}}}>
                <ArrowForwardIosIcon fontSize='large'/>
            </IconButton>
        </Box>
    )
}
