import AddIcon from '@mui/icons-material/Add'
import { Avatar, Box, CardMedia, IconButton, Stack, Typography } from '@mui/material';

interface Historia {
    nome: string,
    avatar: string,
    capa: string
}

interface HistoryItemProps {
    index: number,
    historia?: Historia
}

export default function HistoryItem({index, historia}:HistoryItemProps) {
    return (
        <Box flex={1} minWidth={130} maxWidth={250} height={'100%'} bgcolor={"#353941"} borderRadius={6} position={'relative'}>
            { historia && <CardMedia component={'img'} src={`/img/${historia.capa}`} width={'100%'} height={'100%'} sx={{borderRadius: 'inherit'}}/> }
            <Stack spacing={1} alignItems={'center'} position={'absolute'} bottom={0} p={2} left={0} width={'100%'} sx={{backgroundImage: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7))',borderRadius: 'inherit'}}>
                {
                    historia ? (
                        <Avatar src={`/img/${historia.avatar}`} alt={historia.nome} sx={{width: 45, height: 45}} />
                    ) : (
                        <IconButton size='small' sx={{bgcolor: 'white', color: 'primary.main', '&:hover':{bgcolor: 'primary.main', color: 'white'}}}>
                            <AddIcon fontSize='large'/>
                        </IconButton>
                    )
                }
                <Typography variant='body2' color={'white'} textAlign={'center'}>{ historia ? historia.nome : 'Adicionar Historia'}</Typography>
            </Stack>
        </Box>
    )
}
