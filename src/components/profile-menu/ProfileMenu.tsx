import Link from 'next/link';
import { Avatar, Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Switch, Typography, styled } from '@mui/material'
import PersonOutline from '@mui/icons-material/PersonOutline';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NightlightRoundRounded from '@mui/icons-material/NightlightRoundRounded'
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectUsuario } from '@/redux/usuarioSlicer';
import { selectDark, setDark } from '@/redux/themeSlicer';

interface ProfileMenuProps {
    handleCloseProfile: (evt:React.MouseEvent<HTMLElement>) => void;
}

const LinkProfile = styled(Link)(({ theme }) => ({
    width: '100%',
    textDecoration: 'none',
    color: theme.palette.text.primary,
}));

export default function ProfileMenu({handleCloseProfile}:ProfileMenuProps) {
    const dispatch = useAppDispatch();
    const dark = useAppSelector(selectDark);
    const usuario = useAppSelector(selectUsuario);

    function  handleChangeThomeMode(evt: React.ChangeEvent<HTMLInputElement>){
        dispatch(setDark(evt.target.checked));
    };

    return (
        <Box width={{xs: 250, sm: 300}} padding='10px 20px' >
            <Stack spacing={2} direction='row' alignItems='center'>
                <Avatar src={`/img/${usuario.fotoPerfil}`} alt={usuario.nome} sx={{color: 'white', bgcolor: usuario.id! % 2 === 0 ? ( usuario.id! % 3 === 0 ? 'primary.light' : 'warning.light' ) : ( usuario.id! % 3 === 0 ? 'info.light' : 'success.light' )}}/>
                <Stack overflow='hidden' pb='5px'>
                    <Typography variant='h6' component='div' color={'secondary'} overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap' > {usuario.nome}</Typography>
                    <Typography variant='body2' component='div' overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap' >{usuario.email}</Typography>
                </Stack>
            </Stack>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <LinkProfile href='/profile' onClick={handleCloseProfile}>
                        <ListItemButton>
                            <ListItemIcon>
                                <PersonOutline />
                            </ListItemIcon>
                            <ListItemText  primary='Meu Perfil' />
                        </ListItemButton>
                    </LinkProfile>
                </ListItem>
                <ListItem disablePadding>
                    <LinkProfile href='/settings' onClick={handleCloseProfile}>
                        <ListItemButton>
                            <ListItemIcon>
                                <SettingsOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText  primary='Configurações' />
                        </ListItemButton>
                    </LinkProfile>
                </ListItem>
                <ListItem disablePadding secondaryAction={<Switch color='secondary' checked={dark} onChange={handleChangeThomeMode} />} >
                    <ListItemButton disableRipple disableTouchRipple >
                        <ListItemIcon>
                            <NightlightRoundRounded sx={{transform: 'rotate(-45deg)'}} />
                        </ListItemIcon>
                        <ListItemText  primary='Modo Escuro' />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <LinkProfile href='/login'>
                        <ListItemButton>
                            <ListItemIcon>
                                <LogoutOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText  primary='Logout' />
                        </ListItemButton>
                    </LinkProfile>
                </ListItem>
            </List>
        </Box>
    )
}
