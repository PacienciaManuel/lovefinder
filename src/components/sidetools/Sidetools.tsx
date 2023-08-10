import Link from 'next/link';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { FcHome, FcMusic, FcBusiness, FcCalendar } from 'react-icons/fc';
import { Box, IconButton, Paper, Stack, Tooltip, colors } from '@mui/material';

export default function Sidetools() {
    return (
        <Box component={Paper} elevation={1} flexShrink={0} width={64} className='scrollbar' display={{xs: 'none', md: 'block'}} overflow={'auto'} height={'calc(100vh - 64px)'} position={'sticky'} top={'64px'}>
            <Stack spacing={2} alignItems={'center'} py={1}>
                <Tooltip title='Feed' placement='left' arrow>
                    <IconButton LinkComponent={Link} href='/feed' sx={{flexShrink: 0}}>
                        <FcHome/>
                    </IconButton>
                </Tooltip>
                <Tooltip title='Perfil' placement='left' arrow>
                    <IconButton LinkComponent={Link} href='/profile'>
                        <PersonIcon sx={{color: colors.pink[400]}}/>
                    </IconButton>
                </Tooltip>
                <Tooltip title='Mensagens' placement='left' arrow>
                    <IconButton LinkComponent={Link} href='/message'>
                        <MessageIcon sx={{color: colors.lightBlue[400]}}/>
                    </IconButton>
                </Tooltip>
                <Tooltip title='Grupos' placement='left' arrow>
                    <IconButton LinkComponent={Link} href='/groups'>
                        <GroupIcon sx={{color: colors.orange[400]}}/>
                    </IconButton>
                </Tooltip>
                <Tooltip title='Vídeos' placement='left' arrow>
                    <IconButton LinkComponent={Link} href='/videos'>
                        <VideoLibraryIcon sx={{color: colors.red[400]}}/>
                    </IconButton>
                </Tooltip>
                <Tooltip title='Fotos' placement='left' arrow>
                    <IconButton LinkComponent={Link} href='/photos'>
                        <PhotoLibraryIcon sx={{color: colors.lightBlue[400]}}/>
                    </IconButton>
                </Tooltip>
                <Tooltip title='Notificações' placement='left' arrow>
                    <IconButton LinkComponent={Link} href='/notifications'>
                        <FcMusic/>
                    </IconButton>
                </Tooltip>
                <Tooltip title='Contactos' placement='left' arrow>
                    <IconButton LinkComponent={Link} href='/contacts'>
                        <ContactPageIcon sx={{color: colors.cyan[400]}}/>
                    </IconButton>
                </Tooltip>
                <Tooltip title='Negócios' placement='left' arrow>
                    <IconButton LinkComponent={Link} href='/business'>
                        <FcBusiness/>
                    </IconButton>
                </Tooltip>
                <Tooltip title='Calendário' placement='left' arrow>
                    <IconButton LinkComponent={Link} href='/calendar'>
                        <FcCalendar/>
                    </IconButton>
                </Tooltip>
            </Stack>
        </Box>
    )
}
