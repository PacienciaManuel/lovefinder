'use client';

import Link from 'next/link';
import { Avatar, Button, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText, Menu, Paper, Stack, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FaGlobe } from 'react-icons/fa';
import { useId, useState } from 'react';
import usuarios from '@/json/usuarios.json';
import PostMediaImage from './PostMediaImage';
// import PostMidiaVdeo from './PostMidiaVdeo';

interface PostProps {
    usuario:any,
    index: number,
    src?: string,
}

export default function Post({usuario, index, src}:PostProps) {
    const usersReactionsMenuId = useId();
    const usersReactionsCountId = useId();
    const [anchorElUsersReactions, setAnchorElUsersReactions] = useState<null | HTMLElement>(null);
    const openUsersReactions = Boolean(anchorElUsersReactions);
    
    function handleOpenUsersReactions(event: React.MouseEvent<HTMLElement>){
        setAnchorElUsersReactions(event.currentTarget);
    };

    function  handleCloseUsersReactions(event: React.MouseEvent<HTMLElement>){
        setAnchorElUsersReactions(null);
    };

    return (
        <Stack spacing={1} component={Paper} p={2}>
            <Stack spacing={2} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <List disablePadding>
                    <ListItem disablePadding>
                        <ListItemAvatar>
                        {/* Meeting-You-Xia-Rui.jpg */}
                            <Avatar src={`/img/${usuario.fotoPerfil}`} alt='Ana Maria' draggable={false}/>
                        </ListItemAvatar>
                        <ListItemText
                            primary={<Typography component={Link} href={"/#"} variant="body1" color={'inherit'} sx={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 200, textDecoration: 'none', fontWeight: '600'}}>{usuario.nome} </Typography>} 
                            secondary={<Typography variant="body2" sx={{display: 'flex', gap: 1, alignItems: 'center', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 200, color: 'gray'}}><span>Há 5 horas</span> &#9679; <FaGlobe /></Typography>} 
                        />
                    </ListItem>
                </List>
                <Stack spacing={2} direction={'row'}>
                    <IconButton>
                        <MoreHorizIcon />
                    </IconButton>
                    <IconButton>
                        <CloseIcon />
                    </IconButton>
                </Stack>
            </Stack>

            <Typography paragraph>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis odio sequi aperiam natus. Hic nesciunt ab corrupti, cupiditate magni minus a quam, adipisci aut incidunt expedita eos quae saepe odit.
            </Typography>
            {
                src && <PostMediaImage src={src} items={index == 0 ? ['/img/1000_F_259408931_y5Ee5ILgYChMgzBXj8zWYrxul8kThyJV.jpg', '/img/LIB_S4_Unit_10129R.webp', '/img/Meeting-You-Xia-Rui.jpg', '/img/intro-1565885755.jpg'] : [`/img/${src}`]} />
            }

            {
                // src && index === 2 && <PostMidiaVdeo srcVideo='/video/ILLENIUM - Luv Me A Little (feat. Nina Nesbitt) [Official Lyric Video].mp4' srcPlaceholder='/img/pexels-natali-railean-2232180.jpg' />
            }

            <Stack spacing={2} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Stack direction={'row'}>
                    <ThumbUpIcon color='primary' fontSize='small'/>
                    <FavoriteIcon color='error' fontSize='small'/>
                    <Typography variant='body2' color={'primary.main'} sx={{ml: 1, cursor: 'pointer'}} id={usersReactionsCountId} aria-controls={openUsersReactions ? usersReactionsMenuId : undefined} aria-haspopup="true" aria-expanded={openUsersReactions ? 'true' : undefined} onClick={handleOpenUsersReactions}>53</Typography>
                    <Menu id={usersReactionsMenuId} anchorEl={anchorElUsersReactions} open={openUsersReactions} onClose={handleCloseUsersReactions} MenuListProps={{'aria-labelledby': usersReactionsCountId}} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}} transformOrigin={{vertical: 'top', horizontal: 'center'}} sx={{'& > div':{backgroundColor: 'transparent'},'& > div > *':{backgroundColor: 'rgba(0,0,0,0.7)'}}}>
                        <Stack px={2}>
                            {
                                usuarios.slice(0,10).map((usuario:any,index:number)=>(
                                    <Typography key={index} variant='body2' color='white'>{usuario.nome} </Typography>
                                ))
                            }
                            <Typography component={Link} variant='body2' href='#' sx={{color: 'white', alignSelf: 'center'}} >Ver Mais...</Typography>
                        </Stack>
                    </Menu>
                </Stack>

                <Stack spacing={1} direction={'row'} divider={<span>&#9679;</span>}>
                    <Typography variant='body2'>9 comentários</Typography>
                    <Typography variant='body2'>3 partilhas</Typography>
                </Stack>
            </Stack>

            <Divider flexItem orientation='horizontal' />
            <Stack spacing={2} direction={'row'} justifyContent={'space-between'}>
                <Button variant='text' color='inherit' size='small' startIcon={<ThumbUpAltOutlinedIcon />}>Gosto</Button>
                <Button variant='text' color='inherit' size='small' startIcon={<ModeCommentOutlinedIcon />}>Comentar</Button>
                <Button variant='text' color='inherit' size='small' startIcon={<ReplyOutlinedIcon />} sx={{display: {xs: 'none',sm: 'flex'}}}>Partilhar</Button>
            </Stack>
        </Stack>
    )
}