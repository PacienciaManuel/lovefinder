'use client';

import Link from 'next/link';
import { Button, colors, styled } from '@mui/material';
import ButtonLinkProps from './button-link/ButtonLinkProps';

const StyledButton = styled(Button)({
    color: 'white',
    textAlign: 'center',
    backgroundColor: colors.pink[400],
    backgroundImage: `linear-gradient(160deg, ${colors.pink[400]} 0%, ${colors.purple[400]} 100%)`,
    '&:hover': {
        color: 'white',
        backgroundColor: colors.purple[400],
        backgroundImage: `linear-gradient(160deg, ${colors.purple[400]} 0%, ${colors.pink[400]} 100%)`,
    }
});

export default function ButtonLink({ href, label }:ButtonLinkProps) {
    return (
        <StyledButton variant='contained' LinkComponent={Link} href={href} disableElevation>{ label }</StyledButton>
    )
}
