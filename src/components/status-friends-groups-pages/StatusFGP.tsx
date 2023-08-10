import React from 'react';
import Link from 'next/link';
import StatusFGPProps from './StatusFGPProps';
import { Avatar, Badge, Box, Button, Chip, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemSecondaryAction, ListItemText, Paper, Typography } from '@mui/material'

export default function StatusFGP({ usuarios, grupos, paginas }:StatusFGPProps) {
    return (
        <Box component={Paper} elevation={1} p={2} className="scrollbar" minWidth={{sm: 260, md: 300}} overflow={'auto'}>
            <Typography variant="body1" gutterBottom>Meus Amigos</Typography>
            <Divider orientation="horizontal" />
            <List disablePadding>
                {
                    usuarios.map((usuario, index)=>(
                        <ListItem key={index} disablePadding>
                            <ListItemButton LinkComponent={Link} href="#">
                                <ListItemAvatar>
                                    <Badge variant='dot' color='success' overlap='circular' anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}>
                                        <Avatar src={`/img/${usuario.fotoPerfil}`} alt={usuario.nome} />
                                    </Badge>
                                </ListItemAvatar>
                                <ListItemText primary={<Typography variant="body2" sx={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 'calc(100% - 30px)'}}>{usuario.nome}</Typography>} />
                                <ListItemSecondaryAction>
                                    <Chip label={index + 2} variant={index % 2 === 0 ? 'outlined' : 'filled'} color={index % 2 == 0 ? (index % 3 == 0 ? 'secondary' : 'warning') : (index % 3 == 0 ? 'success' : 'info') } size="small"/>
                                </ListItemSecondaryAction>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>

            <Button LinkComponent={Link} variant="text" color="secondary" size="small" sx={{width: '100%'}} disableElevation>Ver todos</Button>
            
            <Typography variant="body1" gutterBottom>Meus Grupos</Typography>
            <Divider orientation="horizontal" />
            <List disablePadding>
                {
                    grupos.slice(0,3).map((grupo:any, index:number)=>(
                        <ListItem disablePadding>
                            <ListItemButton LinkComponent={Link} href="#">
                                <ListItemAvatar>
                                    <Avatar src={`/img/${grupo.avatar}`} alt={grupo.descricao} />
                                </ListItemAvatar>
                                <ListItemText primary={<Typography variant="body2" sx={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 100}}>{grupo.descricao}</Typography>} />
                                <ListItemSecondaryAction>
                                    <Chip label={index + 2} variant={index % 2 === 0 ? 'outlined' : 'filled'} color={index % 2 == 0 ? (index % 3 == 0 ? 'secondary' : 'warning') : (index % 3 == 0 ? 'success' : 'info') } size="small"/>
                                </ListItemSecondaryAction>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
            <Button LinkComponent={Link} variant="text" color="secondary" size="small" sx={{width: '100%'}} disableElevation>Ver todos</Button>
            
            <Typography variant="body1" gutterBottom>Minhas Páginas</Typography>
            <Divider orientation="horizontal" />
            <List disablePadding>
                {
                    paginas.slice(0,3).map((pagina:any, index:number)=>(
                        <ListItem disablePadding>
                            <ListItemButton LinkComponent={Link} href="#">
                                <ListItemAvatar>
                                    <Avatar src={`/img/${pagina.avatar}`} alt={pagina.descricao} />
                                </ListItemAvatar>
                                <ListItemText primary={<Typography variant="body2" sx={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 100}}>{pagina.descricao}</Typography>} />
                                <ListItemSecondaryAction>
                                    <Chip label={index + 2} variant={index % 2 === 0 ? 'outlined' : 'filled'} color={index % 2 == 0 ? (index % 3 == 0 ? 'secondary' : 'warning') : (index % 3 == 0 ? 'success' : 'info') } size="small"/>
                                </ListItemSecondaryAction>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
            <Button LinkComponent={Link} variant="text" color="secondary" size="small" sx={{width: '100%'}} disableElevation>Ver todos</Button>

        </Box>
    )
}
