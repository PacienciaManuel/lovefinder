import { Avatar, Box, Button, Divider, Link as LinkMui, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Paper, Stack, Typography } from "@mui/material";
import Link from "next/link";
import FriendshipConfirmProps from "./FriendshipConfirmProps";
import Amizade from "@/interfaces/Amizade";

export default function FriendshipConfirm({ amizades, max }:FriendshipConfirmProps) {
    return (
        <Box component={Paper} elevation={1} p={2}>
            <Stack spacing={2} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Typography variant="body1">Pedidos de Amizade</Typography>
                <LinkMui component={Link} color={'primary'} underline="none" href="/friendshpt-solicitations">Ver Todas</LinkMui>
            </Stack>
            <Divider orientation="horizontal" sx={{marginTop: 1}}/>
            <List disablePadding>
                {
                    amizades.map((amizade:Amizade, index:number)=>(
                        <Box key={index} component={'span'}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemAvatar>
                                        <Avatar src={`/img/${amizade.solicitante.fotoPerfil}`} alt={amizade.solicitante.nome} />
                                    </ListItemAvatar>
                                    <ListItemText 
                                        primary={<Typography variant="body2" sx={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 200}}>{amizade.solicitante.nome}</Typography>} 
                                        secondary={<Typography variant="body2" sx={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 200}}>20 amigos em comum.</Typography>} 
                                    />
                                </ListItemButton>
                            </ListItem>
                            <Stack spacing={2} direction={'row'} mt={1}>
                                <Button variant="outlined" color="primary" size="small" sx={{flex: 1, borderRadius: 4}} disableElevation>Confirmar</Button>
                                <Button variant="outlined" color="error" size="small" sx={{flex: 1, borderRadius: 4}} disableElevation>Excluir</Button>
                            </Stack>
                        </Box>
                    ))
                }
            </List>
        </Box>
    )
}
