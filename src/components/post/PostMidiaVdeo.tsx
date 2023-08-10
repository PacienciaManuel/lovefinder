import { Box } from '@mui/material';
import { Image } from 'antd';

interface PostMidiaVdeoProps {
    srcVideo: string,
    srcPlaceholder: string,
}

export default function PostMidiaVdeo({ srcVideo, srcPlaceholder }:PostMidiaVdeoProps) {
    return (
        <>
            <Image width={200}
            preview={{
            imageRender: () => (
                <Box component={'video'} width={{xs: 'calc(100% - 20px)',sm: '560px', md: '860px', lg: '960px'}} controls={true} src={srcVideo} />
            ),
            toolbarRender: () => <Box><h1>FERAMENTAS</h1></Box> ,
            }}
            src={srcPlaceholder}
            />
        </>
    )
}
