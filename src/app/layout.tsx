import './globals.css'
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'LoveFinder',
    description: 'Rede social de encontros!!!',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="pt_AO">
            <body>{children}</body>
        </html>
    )
}
