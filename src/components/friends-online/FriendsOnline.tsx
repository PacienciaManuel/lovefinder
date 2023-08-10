import Link from 'next/link'
import FriendsOnlineProps from './FriendsOnlineProps';
import { Avatar, Badge, Box, IconButton, Paper, Stack, Tooltip } from '@mui/material';

export default function FriendsOnline({ usuarios }:FriendsOnlineProps) {
    return (
        <Box component={Paper} elevation={1} flexShrink={0} width={64} className='scrollbar' display={{xs: 'none', md: 'block'}} sx={{overflowY: 'auto', overflowX: 'hidden'}} height={'calc(100vh - 64px)'} position={'sticky'} top={'64px'}>
            <Stack alignItems={'center'}>
                {
                    usuarios.slice(1, 16).map((usuario:any, index:number)=>(
                        <Tooltip title={usuario.nome} placement='left' arrow key={index}>
                            <IconButton LinkComponent={Link} href='#' sx={{flexShrink: 0}}>
                                <Badge variant='dot' color='success' overlap='circular' anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}>
                                    <Avatar src={`/img/${usuario.fotoPerfil}`} alt={usuario.nome} sx={{bgcolor: 'secondary'}}/>
                                </Badge>
                            </IconButton>
                        </Tooltip>
                    ))
                }
            </Stack>
        </Box>
    )
}
