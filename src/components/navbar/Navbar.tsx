'use client';

import Link from 'next/link';
import Image from 'next/image';
import Sidebar from '../sidebar/Sidebar';
import Message from '../message-menu/Message';
import { useAppSelector } from '@/redux/hooks';
import React, { useId, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { FcHome, FcMusic } from 'react-icons/fc';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/Message';
import { selectUsuario } from '@/redux/usuarioSlicer';
import ProfileMenu from '../profile-menu/ProfileMenu';
import Notification from '../notification-menu/Notification';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { AppBar, Avatar, Badge, Box, IconButton, InputBase, Menu, Stack, SwipeableDrawer, Toolbar, Tooltip, Typography, alpha, colors, styled } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    color: colors.pink[400],
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    maxWidth: 340,
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        flex: 1,
        [theme.breakpoints.up('xs')]: {
            width: '20ch',
        },
    },
}))

export default function Navbar() {
    const notificantionMenuId = useId();
    const btnNotificantionId = useId();
    const messageMenuId = useId();
    const btnMessageId = useId();
    const profileMenuId = useId();
    const btnProfileId = useId();
    const usuario = useAppSelector(selectUsuario);
    const [anchorElNotifincation, setAnchorElNotifincation] = useState<null | HTMLElement>(null);
    const [anchorElMessage, setAnchorElMessage] = useState<null | HTMLElement>(null);
    const [anchorElProfile, setAnchorElProfile] = useState<null | HTMLElement>(null);
    const openNotifincation = Boolean(anchorElNotifincation);
    const openMessage = Boolean(anchorElMessage);
    const openProfile = Boolean(anchorElProfile);
    const [openSidebar, setOpenSidebar] = useState<boolean>(false);

    const toggleDrawer = (open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event && event.type === 'keydown' &&((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }
        setOpenSidebar(open);
    };
    
    function handleOpenNotifincation(event: React.MouseEvent<HTMLButtonElement>){
        setAnchorElNotifincation(event.currentTarget);
    };

    function  handleCloseNotifincation(){
        setAnchorElNotifincation(null);
    };
    
    function handleOpenMessage(event: React.MouseEvent<HTMLButtonElement>){
        setAnchorElMessage(event.currentTarget);
    };

    function  handleCloseMessage(){
        setAnchorElMessage(null);
    };

    function handleOpenProfile(event: React.MouseEvent<HTMLButtonElement>){
        setAnchorElProfile(event.currentTarget);
    };

    function  handleCloseProfile(){
        setAnchorElProfile(null);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar elevation={1} component="nav" color='inherit' sx={{zIndex: '1000 !important'}}>
                <Toolbar sx={{paddingLeft: '0 !important', paddingRight: '0 !important'}}>
                    <Toolbar sx={{flexShrink: 0, padding: '0 !important', width: 64, justifyContent: 'center', bgcolor: colors.pink[400]}}>
                        <IconButton sx={{margin: 0, color: 'white'}} aria-label="open drawer" edge="start" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>

                    <Stack spacing={2} direction={'row'} justifyContent={'space-between'} alignItems={'center'} width={'100%'} ml={1}>
                        <Stack flex={1} flexShrink={0} spacing={1} direction={'row'}>
                            <Stack component={Link} href={'/feed'} spacing={1} direction={'row'} alignItems={'center'} sx={{textDecoration: 'none'}}>
                                <Typography variant='h6'>
                                    <Typography component={'span'} variant='inherit' color={'secondary.main'}>LOVE</Typography>FINDER
                                </Typography>
                                <Image src={'/svg/icons8_Heart_With_Arrow.svg'} width={32} height={32} alt='Logo' />
                            </Stack>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase placeholder="Pesquise usuários, encontros, e mais..." inputProps={{ 'aria-label': 'search' }}/>
                            </Search>
                        </Stack>
                        <Stack display={{xs: 'none', lg: 'flex'}} flex={1} spacing={2} direction={'row'}>
                            <Tooltip title={'Feed'} placement='bottom' arrow>
                                <IconButton LinkComponent={Link} href={'/feed'}>
                                    <Badge badgeContent={7} color='secondary'>
                                        <FcHome />
                                    </Badge>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title={'Perfil'} placement='bottom' arrow>
                                <IconButton LinkComponent={Link} href={'/profile'} sx={{color: colors.pink[400]}}>
                                    <PersonIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title={'Grupos'} placement='bottom' arrow>
                                <IconButton LinkComponent={Link} href={'/groups'} sx={{color: colors.orange[400]}}>
                                    <GroupIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title={'Fotos'} placement='bottom' arrow>
                                <IconButton LinkComponent={Link} href={'/photos'} sx={{color: colors.lightBlue[400]}}>
                                    <PhotoLibraryIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title={'Vídeos'} placement='bottom' arrow>
                                <IconButton LinkComponent={Link} href={'/videos'} sx={{color: colors.red[400]}}>
                                    <VideoLibraryIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title={'Músicas'} placement='bottom' arrow>
                                <IconButton LinkComponent={Link} href={'/musics'}>
                                    <FcMusic />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title={'Contactos'} placement='bottom' arrow>
                                <IconButton LinkComponent={Link} href={'/contacs'} sx={{color: colors.cyan[400]}}>
                                    <ContactPageIcon />
                                </IconButton>
                            </Tooltip>
                        </Stack>
                        <Stack display={{xs: 'none', sm: 'flex'}} flexShrink={0} spacing={2} direction={'row'} justifyContent={'flex-end'} alignItems={'center'} pr={3}>
                            <Tooltip title={'Notificações'} placement='bottom' arrow>
                                <IconButton id={btnNotificantionId} aria-controls={openNotifincation ? notificantionMenuId : undefined} aria-haspopup="true" aria-expanded={openNotifincation ? 'true' : undefined} onClick={handleOpenNotifincation} sx={{color: colors.pink[500]}}>
                                    <Badge badgeContent={37} color='secondary'>
                                        <NotificationsIcon color='primary'/>
                                    </Badge>
                                </IconButton>
                            </Tooltip>
                            
                            <Menu id={notificantionMenuId} anchorEl={anchorElNotifincation} open={openNotifincation} onClose={handleCloseNotifincation} MenuListProps={{'aria-labelledby': btnNotificantionId}} anchorOrigin={{vertical: 'bottom', horizontal: 'right'}} transformOrigin={{vertical: 'top', horizontal: 'center'}}>
                                <Notification/>
                            </Menu>

                            <Tooltip title={'Mensagens'} placement='bottom' arrow>
                                <IconButton id={btnMessageId} aria-controls={openMessage ? messageMenuId : undefined} aria-haspopup="true" aria-expanded={openMessage ? 'true' : undefined} onClick={handleOpenMessage}>
                                    <Badge badgeContent={50} color='secondary'>
                                        <MessageIcon sx={{color: colors.lightBlue[400]}}/>
                                    </Badge>
                                </IconButton>
                            </Tooltip>
                                                        
                            <Menu id={messageMenuId} anchorEl={anchorElMessage} open={openMessage} onClose={handleCloseMessage} MenuListProps={{'aria-labelledby': btnMessageId}} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}} transformOrigin={{vertical: 'top', horizontal: 'center'}}>
                                <Message />
                            </Menu>
                            <Tooltip title={usuario.nome} placement='bottom' arrow>
                                <Typography color='secondary' sx={{maxWidth: 150, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{usuario.nome}</Typography>
                            </Tooltip>
                        </Stack>
                    </Stack>

                    <Toolbar sx={{flexShrink: 0, padding: '0 !important', width: 64, justifyContent: 'center', bgcolor: colors.pink[400]}}>
                        <IconButton id={btnProfileId} aria-controls={openProfile ? profileMenuId : undefined} aria-haspopup="true" aria-expanded={openProfile ? 'true' : undefined} onClick={handleOpenProfile}>
                            <Tooltip title={usuario.nome} placement='bottom' arrow>
                                <Avatar src={`/img/${usuario.fotoPerfil}`} alt={usuario.nome} />
                            </Tooltip>
                        </IconButton>
                        <Menu id={profileMenuId} anchorEl={anchorElProfile} open={openProfile} onClose={handleCloseProfile} MenuListProps={{'aria-labelledby': btnProfileId}}>
                            <ProfileMenu handleCloseProfile={handleCloseProfile} />
                        </Menu>
                    </Toolbar>
                </Toolbar>
            </AppBar>
            <Toolbar/>
            <React.Fragment>
                <SwipeableDrawer anchor={'left'} open={openSidebar} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)} className='scrollbar'>
                    <Sidebar toggleDrawer={toggleDrawer} />
                </SwipeableDrawer>
            </React.Fragment>
        </Box>
    );
}