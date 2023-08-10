import React from 'react'
import Link from 'next/link'
import { Avatar, Box, Divider, Link as LinkMui, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Paper, Stack, Typography } from '@mui/material'
import SuggestionEventsProps from './SuggestionEventsProps'

export default function SuggestionEvents({ eventos }:SuggestionEventsProps) {
    return (
        <Box component={Paper} elevation={1} p={2}>
            <Stack spacing={2} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Typography variant="body1">Eventos</Typography>
                <LinkMui component={Link} color={'primary'} underline="none" href="/friendshpt-solicitations">Ver Todos</LinkMui>
            </Stack>
            <Divider orientation="horizontal" sx={{margin: '10px 0'}}/>
            <List disablePadding>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemAvatar>
                            <Avatar variant="square" src='/img/istockphoto-1309328823-612x612.jpg' alt={'Manuel Isaac'} />
                        </ListItemAvatar>
                        <ListItemText 
                            primary={<Typography variant="body1" sx={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 200}}>Encontros entre Clientes</Typography>} 
                            secondary={<Typography variant="body2" sx={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 200}}>Todos os encontros estarão agendados para uma data a anunciar.</Typography>} 
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemAvatar>
                            <Avatar variant="square" src='/img/istockphoto-1309328823-612x612.jpg' alt={'Manuel Isaac'} />
                        </ListItemAvatar>
                        <ListItemText 
                            primary={<Typography variant="body1" sx={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 200}}>Encontros entre Clientes</Typography>} 
                            secondary={<Typography variant="body2" sx={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 200}}>Todos os encontros estarão agendados para uma data a anunciar.</Typography>} 
                        />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}
