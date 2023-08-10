import { Box, Stack } from '@mui/material';
import { Image } from 'antd';

interface PostMediaImageProps {
    src: string,
    items: string[]
}

export default function PostMediaImage({ src, items }:PostMediaImageProps) {
    return (
        <>
            {/* istockphoto-1076182804-170667a.jpg */}
            {/* { src && index != 0 && <Image width={'100%'} src={`/img/${src}`}  alt='Foto Postagem'/>} */}
            {
                <Image.PreviewGroup preview={{onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),}}>
                    <Stack direction={'row'} height={500} bgcolor={'green'}>
                        <Stack flex={0.6} bgcolor={'red'} height={'100%'}>
                            <Image src={`/img/${src}`} width={'100%'} height={'100%'} style={{objectFit: 'cover'}}/>
                        </Stack>
                        <Stack flex={0.4} flexShrink={0}>
                            <Stack flex={1}>
                                <Image height={'100%'} style={{objectFit: 'cover'}} src={`/img/1000_F_259408931_y5Ee5ILgYChMgzBXj8zWYrxul8kThyJV.jpg`}/>
                            </Stack>
                            <Stack flex={1}>
                                <Image height={'100%'} style={{objectFit: 'cover'}} src={`/img/d70e6fe3537e96b11d0319b4f1cff61161db5cbe5521af5184875e340a0c6ee7._RI_TTW_.jpg`}/>
                            </Stack>
                            <Stack flex={1}>
                                <Image height={'100%'} style={{objectFit: 'cover'}} src={`/img/Meeting-You-Xia-Rui.jpg`}/>
                            </Stack>
                        </Stack>
                    </Stack>
                </Image.PreviewGroup>
            }
            {/* { src && <CardMedia component={'img'} width={'100%'} src={`/img/${src}`} alt='Foto Postagem' draggable={false}/> } */}
            {/* <CardMedia component={'video'} width={'100%'} src='/video/ILLENIUM - Luv Me A Little (feat. Nina Nesbitt) [Official Lyric Video].mp4' controls preload='false'/> */}
            {
                // <Image.PreviewGroup items={items} preview={{onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),}}>
                //     <Image width={'100%'} src={`/img/${src}`} />
                // </Image.PreviewGroup>
            }
        </>
    )
}
