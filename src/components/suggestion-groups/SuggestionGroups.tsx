import React from 'react'
import Link from 'next/link'
import { Avatar, AvatarGroup, Box, CardMedia, Divider, Link as LinkMui, Paper, Stack, Typography } from '@mui/material'
import SuggestionGroupsProps from './SuggestionGroupsProps'

export default function SuggestionGroups({ grupos }:SuggestionGroupsProps) {
    return (
        <Box component={Paper} elevation={1} p={2}>
            <Stack spacing={2} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Typography variant="body1">Susgestão de Grupos</Typography>
                <LinkMui component={Link} color={'primary'} underline="none" href="/friendshpt-solicitations">Ver Todas</LinkMui>
            </Stack>
            <Divider orientation="horizontal" sx={{margin: '10px 0'}}/>
            <CardMedia component={'img'} width={'100%'} height={200} src="/img/23-231350_click-on-your-favorite-image-and-wait-when.jpg" alt="Capa do Grupo"/>
            <Stack spacing={1} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <AvatarGroup max={4} sx={{mt: 1}}>
                    <Avatar src="/img/intro-1565885755.jpg" alt="Capa do Grupo"/>
                    <Avatar src="/img/1200x630wa.png" alt="Capa do Grupo"/>
                    <Avatar src="/img/One-Day-You-Will-Meet-HIM-The-One-Who-Will-Show-You-What-TRUE-LOVE-Is-720x405.jpg.webp" alt="Capa do Grupo"/>
                    <Avatar src="/img/romantic-night-loving-first-meeting-hd-love-wallpaper-download-wallpaper-preview.jpg" alt="Capa do Grupo"/>
                    <Avatar src="/img/stock-vector-fantasy-in-a-blossoming-sakura-garden-an-anime-couple-2322897067.jpg" alt="Capa do Grupo"/>
                    <Avatar src="/img/wallpaper2you_343986.jpg" alt="Capa do Grupo"/>
                </AvatarGroup>
                <Typography variant="body1">Total Membros</Typography>
            </Stack>
        </Box>
    )
}
