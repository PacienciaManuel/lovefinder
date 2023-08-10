"use client";

import { Avatar, Box, Button, Divider, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
import { useAppSelector } from '@/redux/hooks';
import { selectUsuario } from '@/redux/usuarioSlicer';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined'
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined'
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined'

export default function FormPost() {
    const usuario = useAppSelector(selectUsuario);

    return (
        <>
            <Stack component={Paper} elevation={1} p={2}>
                <Stack spacing={1} direction={'row'} alignItems={'center'}>
                    <IconButton color='primary'>
                        <EditOutlinedIcon />
                    </IconButton>
                    <Typography variant='body2' color={'primary.main'}>Criar Publicação</Typography>
                </Stack>
                <Box position={'relative'}>
                    <TextField variant='outlined' name="texto"  label='Escreva o que está pensando...' color='secondary' placeholder='O que voçê esta pensando?' inputProps={{style: {paddingRight: 40, color: 'bl'}}} multiline minRows={5} maxRows={5} fullWidth required />
                    <Avatar src={`/img/${usuario.fotoPerfil}`} alt={usuario.nome} sx={{position: 'absolute', top: 10, right: 10}}/>
                </Box>
                <Stack spacing={2} direction={'row'} flexWrap={'wrap'} justifyContent={{xs:'center', sm: 'center', md: 'space-between'}} alignItems={'center'}>
                    <Stack spacing={2} direction={'row'} flexWrap={'wrap'} justifyContent={{xs:'center', md: 'flex-start'}}>
                        <Button variant='text' color='error' size='small' startIcon={<VideocamOutlinedIcon />}>Live Video</Button>
                        <Button variant='text' color='success' size='small' startIcon={<PhotoOutlinedIcon />}>Foto/Vídeo</Button>
                        <Button variant='text' color='warning' size='small' startIcon={<PhotoCameraOutlinedIcon />}>Sentimento/Actividade</Button>
                    </Stack>
                    <IconButton>
                        <MoreHorizIcon />
                    </IconButton>
                </Stack>
            </Stack>
        </>
    )
}
