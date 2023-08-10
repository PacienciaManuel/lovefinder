import { Box, Button, CardMedia, Divider, Link as LinkMui, Paper, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import SuggestionPagesProps from './SuggestionPagesProps'

export default function SuggestionPages({ paginas }:SuggestionPagesProps) {
    return (
        <Box component={Paper} elevation={1} p={2}>
            <Stack spacing={2} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Typography variant="body1">Susgestão de Páginas</Typography>
                <LinkMui component={Link} color={'primary'} underline="none" href="/friendshpt-solicitations">Ver Todas</LinkMui>
            </Stack>
            <Divider orientation="horizontal" sx={{margin: '10px 0'}}/>
            <Stack spacing={2}>
                <Box>
                    <CardMedia component={'img'} width={'100%'} height={200} src="/img/istockphoto-1076182804-170667a.jpg" alt="Capa do Grupo"/>
                    <Button variant="outlined" color="primary" size="small" sx={{width: '100%', marginTop: 1, borderRadius: 2}}>Gostar</Button>
                </Box>
                <Box>
                    <CardMedia component={'img'} width={'100%'} height={200} src="/img/1000_F_259408931_y5Ee5ILgYChMgzBXj8zWYrxul8kThyJV.jpg" alt="Capa do Grupo"/>
                    <Button variant="outlined" color="primary" size="small" sx={{width: '100%', marginTop: 1, borderRadius: 2}}>Gostar</Button>
                </Box>
            </Stack>
        </Box>
    )
}
