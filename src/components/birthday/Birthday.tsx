'use client';

import Link from 'next/link';
import { Image } from 'antd';
import React, { useRef } from 'react';
import BirthdayProps from './BirthdayProps';
// import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Carousel from 'react-material-ui-carousel'
import { Avatar, AvatarGroup, Box, Divider, Link as LinkMui , Paper, Stack, Typography } from '@mui/material';

export default function Birthday({ usuarios }:BirthdayProps) {
    const autoplay = useRef(Autoplay({ delay: 2000 }));
    // const embla = EmblaCarousel(emblaRoot, { loop: false }, [Autoplay()])
    return (
        <Box component={Paper} elevation={1} p={2}>
            <Stack spacing={2} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Typography variant="body1">Aniversariantes de Hoje</Typography>
                <LinkMui component={Link} color={'primary'} underline="none" href="/friendshpt-solicitations">Ver Todos</LinkMui>
            </Stack>
            <Divider orientation="horizontal" sx={{margin: '10px 0'}}/>
            <Carousel autoPlay animation='slide'>
                <Image height={200} style={{objectFit: 'cover'}} src={`/img/One-Day-You-Will-Meet-HIM-The-One-Who-Will-Show-You-What-TRUE-LOVE-Is-720x405.jpg.webp`}/>
                <Image height={200} style={{objectFit: 'cover'}} src={`/img/romantic-night-loving-first-meeting-hd-love-wallpaper-download-wallpaper-preview.jpg`}/>
                <Image height={200} style={{objectFit: 'cover'}} src={`/img/stock-vector-fantasy-in-a-blossoming-sakura-garden-an-anime-couple-2322897067.jpg`}/>
                <Image height={200} style={{objectFit: 'cover'}} src={`/img/wallpaper2you_343986.jpg`}/>
            </Carousel>
            {/* <Carousel maw={'100%'} mx="auto" withIndicators height={200} plugins={[ autoplay.current ]} onMouseEnter={autoplay.current.stop} onMouseLeave={autoplay.current.reset}>
                <Carousel.Slide>
                    <Image height={'100%'} style={{objectFit: 'cover'}} src={`/img/One-Day-You-Will-Meet-HIM-The-One-Who-Will-Show-You-What-TRUE-LOVE-Is-720x405.jpg.webp`}/>
                </Carousel.Slide>
                <Carousel.Slide>
                    <Image height={'100%'} style={{objectFit: 'cover'}} src={`/img/romantic-night-loving-first-meeting-hd-love-wallpaper-download-wallpaper-preview.jpg`}/>
                </Carousel.Slide>
                <Carousel.Slide>
                    <Image height={'100%'} style={{objectFit: 'cover'}} src={`/img/stock-vector-fantasy-in-a-blossoming-sakura-garden-an-anime-couple-2322897067.jpg`}/>
                </Carousel.Slide>
                <Carousel.Slide>
                    <Image height={'100%'} style={{objectFit: 'cover'}} src={`/img/wallpaper2you_343986.jpg`}/>
                </Carousel.Slide>
            </Carousel> */}
            {/* <FcPlanner fontSize={'200px'} style={{display: 'block', margin: 'auto'}} /> */}
            <Stack spacing={1} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <AvatarGroup max={4} sx={{mt: 1}}>
                    <Avatar src="/img/intro-1565885755.jpg" alt="Capa do Grupo"/>
                    <Avatar src="/img/1200x630wa.png" alt="Capa do Grupo"/>
                    <Avatar src="/img/One-Day-You-Will-Meet-HIM-The-One-Who-Will-Show-You-What-TRUE-LOVE-Is-720x405.jpg.webp" alt="Capa do Grupo"/>
                    <Avatar src="/img/romantic-night-loving-first-meeting-hd-love-wallpaper-download-wallpaper-preview.jpg" alt="Capa do Grupo"/>
                    <Avatar src="/img/stock-vector-fantasy-in-a-blossoming-sakura-garden-an-anime-couple-2322897067.jpg" alt="Capa do Grupo"/>
                    <Avatar src="/img/wallpaper2you_343986.jpg" alt="Capa do Grupo"/>
                </AvatarGroup>
                <Typography variant="body1">Total Aniversariantes</Typography>
            </Stack>
        </Box>
    )
}
