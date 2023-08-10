import Link from 'next/link';
import { Alert, Avatar, Box, Button, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography, useTheme } from '@mui/material'

export default function Message() {
    const theme = useTheme();
    return (
        <Box width={{xs: 260, sm: 400}}>
            <Typography variant='h6' color={'white'} bgcolor={theme.palette.secondary.main} mt={-1.2} padding={1} textAlign={'center'} textTransform={'uppercase'}>Mensagens</Typography>
            <Divider orientation='horizontal' sx={{marginTop: '10px'}} />
            <Alert severity="warning">This is a warning alert — check it out!</Alert>
            <List  className='scrollbar' sx={{maxHeight: 300, overflow: 'auto'}} disablePadding>
                {
                    [0,0,0,0,0,0,0,0,0,0,0,0,].map((value:number, index:number)=>(
                        <ListItem key={index} disablePadding>
                            <ListItemButton>
                                <ListItemAvatar>
                                    <Avatar src={'/img/istockphoto-1309328823-612x612.jpg'} alt={'Manuel Isaac'} />
                                </ListItemAvatar>
                                <ListItemText 
                                    primary={<Typography sx={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>Manuel Isaac</Typography>} 
                                    secondary={<Typography sx={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>Because you need strengt</Typography>}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
            <Divider orientation='horizontal' sx={{marginBottom: '10px'}} />
            <Box padding={'0 10px'}>
                <Button LinkComponent={Link} href='/notifications' variant='text' color='primary' sx={{width: 'calc(100% - 20px)', textTransform: 'uppercase', margin: '0 10px'}}>Ver Mais</Button>
            </Box>
        </Box>
    )
}
