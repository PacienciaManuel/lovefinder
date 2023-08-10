import React from 'react'
import Link from 'next/link';
import FriendshipCancelProps from './FriendshipCancelProps'
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import { Avatar, Box, Divider, IconButton, Link as LinkMui, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Paper, Stack, Typography } from '@mui/material'

export default function FriendshipCancel({ amizades }:FriendshipCancelProps) {
    return (
        <Box component={Paper} elevation={1} p={2}>
            <Stack spacing={2} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Typography variant="body1">Confirmações de Pedidos</Typography>
                <LinkMui component={Link} color={'primary'} underline="none" href="/friendshpt-solicitations">Ver Todas</LinkMui>
            </Stack>
            <Divider orientation="horizontal" sx={{marginTop: 1}}/>
            <List disablePadding>
                {
                    amizades.slice(0, 3).map((amizade, index)=>(
                        <Box key={index} component={'span'}>
                            <ListItem disablePadding secondaryAction={<IconButton color="error"><DeleteIcon/></IconButton>}>
                                <ListItemButton>
                                    <ListItemAvatar>
                                        <Avatar src={`/img/${amizade.solicitado.fotoPerfil}`} alt={amizade.solicitado.nome} />
                                    </ListItemAvatar>
                                    <ListItemText 
                                        primary={<Typography variant="body2" sx={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 200}}>{amizade.solicitado.nome}</Typography>} 
                                        secondary={<Typography variant="body2" sx={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 200}}>20 amigos em comum.</Typography>} 
                                    />
                                </ListItemButton>
                            </ListItem>
                        </Box>
                    ))
                }
            </List>            
        </Box>
    )
}
