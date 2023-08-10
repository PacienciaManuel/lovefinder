'use client';

import SidebarProps from './SidebarProps';
import usuariosJSON from '@/json/usuarios.json';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import TourOutlinedIcon from '@mui/icons-material/TourOutlined';
import EventIcon from '@mui/icons-material/Event';
import { FcHome, FcMusic, FcBusiness, FcCalendar } from 'react-icons/fc';
import { Box, Button, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Typography, colors } from '@mui/material'
import Link from 'next/link';
import { Usuario } from '@/interfaces/Usuario';
import { Avatar } from 'antd';

const usuarios:Usuario[] = usuariosJSON as Usuario[];

export default function Sidebar({toggleDrawer}:SidebarProps) {
    return (
        <Box width={{xs: 250, sm: 300}} role="presentation" className='scrollbar' height={'100vh'} sx={{overflowX: 'auto'}} onClick={()=> toggleDrawer(false)} onKeyDown={()=>toggleDrawer(false)}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton LinkComponent={Link} href='/feed'>
                        <ListItemIcon>
                            <FcHome />
                        </ListItemIcon>
                        <ListItemText primary={'Feed'} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton LinkComponent={Link} href='/profile'>
                        <ListItemIcon>
                            <PersonIcon sx={{color: colors.pink[400]}}/>
                        </ListItemIcon>
                        <ListItemText primary={'Perfil'} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton LinkComponent={Link} href='/message'>
                        <ListItemIcon>
                            <MessageIcon sx={{color: colors.lightBlue[400]}}/>
                        </ListItemIcon>
                        <ListItemText primary={'Mensagem'} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton LinkComponent={Link} href='/groups'>
                        <ListItemIcon>
                            <GroupIcon sx={{color: colors.orange[400]}}/>
                        </ListItemIcon>
                        <ListItemText primary={'grupos'} />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton LinkComponent={Link} href='/videos'>
                        <ListItemIcon>
                            <VideoLibraryIcon sx={{color: colors.red[400]}}/>
                        </ListItemIcon>
                        <ListItemText primary={'Vídeos'} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton LinkComponent={Link} href='/photos'>
                        <ListItemIcon>
                            <PhotoLibraryIcon sx={{color: colors.lightBlue[400]}}/>
                        </ListItemIcon>
                        <ListItemText primary={'Fotos'} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton LinkComponent={Link} href='/musics'>
                        <ListItemIcon>
                            <FcMusic/>
                        </ListItemIcon>
                        <ListItemText primary={'Músicas'} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton LinkComponent={Link} href='/contacts'>
                        <ListItemIcon>
                            <ContactPageIcon sx={{color: colors.cyan[400]}}/>
                        </ListItemIcon>
                        <ListItemText primary={'Contactos'} />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton LinkComponent={Link} href='/business'>
                        <ListItemIcon>
                            <FcBusiness/>
                        </ListItemIcon>
                        <ListItemText primary={'Negócios'} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton LinkComponent={Link} href='/calendar'>
                        <ListItemIcon>
                            <FcCalendar/>
                        </ListItemIcon>
                        <ListItemText primary={'Calendário'} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton LinkComponent={Link} href='/notifications'>
                        <ListItemIcon>
                            <NotificationsIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'Notificações'}/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton LinkComponent={Link} href='/events'>
                        <ListItemIcon>
                            <EventIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'Eventos'}/>
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                {usuarios.slice(1, 6).map((usuario, index) => (
                <ListItem key={index} disablePadding>
                    <ListItemButton LinkComponent={Link} href={`/profile/#`}>
                        <ListItemAvatar>
                            <Avatar src={`/img/${usuario.fotoPerfil}`} alt={usuario.nome}/>
                        </ListItemAvatar>
                        <ListItemText primary={usuario.nome} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
            <Box px={2}>
                <Button LinkComponent={Link} variant='text' sx={{width: '100%'}}>Ver Todos</Button>
            </Box>
            <Divider />
            <List disablePadding>
                <ListItem disablePadding>
                    <ListItemButton LinkComponent={Link} href='/settings'>
                        <ListItemIcon>
                            <SettingsOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'Configurações'}/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton LinkComponent={Link} href='/tour'>
                        <ListItemIcon>
                            <TourOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'Tour'}/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton LinkComponent={Link} href='/help'>
                        <ListItemIcon>
                            <HelpOutlineIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'Ajuda'}/>
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <Box p={2}>
                <Typography paragraph>Procuramos inovar de modo que a sociedade consiga sentir-se mais conectada ao mundo.</Typography>
                <Typography paragraph>Caso queira um detalhamento dos procedimento de use e claro do processo de desenvolvimento deste sistema favor contactar-nos strave do corréio eletrónico: <Typography component={'address'} variant='caption'>manuelisaacialberto@gmail.com</Typography> </Typography>
            </Box>
        </Box>
    )
}
