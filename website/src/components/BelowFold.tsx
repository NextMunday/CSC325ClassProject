import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CancelIcon from '@mui/icons-material/Cancel';

const items = [
    {
        icon: <CancelIcon />,
        title: 'Your non-traditional skills aren\'t recognized or valued.',
    },
    {
        icon: <CancelIcon />,
        title: 'The hiring process is long, frustrating, and algorithm-driven.',
    },
    {
        icon: <CancelIcon />,
        title: 'Resumes and portfolios: hard to perfect, don\'t show full potential.',
    },
    {
        icon: <CancelIcon />,
        title: '"Ghosting" hurts: no feedback, lost confidence, despite qualifications.',
    },
    {
        icon: <CancelIcon />,
        title: 'Companies miss talent due to flawed screening systems.',
    },
    {
        icon: <CancelIcon />,
        title: 'Finding ways to showcase skills is unfairly difficult.',
    },
];

export default function BelowFold() {
    return (
        <Box
            id="belowfold"
            sx={{
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 16 },
                color: 'white',
                bgcolor: 'grey.900',
                borderRadius: '16px',
            }}
        >
            <Container
                sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 3, sm: 6 },
                }}
            >
                <Box
                    sx={{
                        width: { sm: '100%', md: '60%' },
                        textAlign: { sm: 'left', md: 'center' },
                    }}
                >
                    <Typography component="h2" variant="h4" gutterBottom>
                        Are you struggling to show your talent?
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'grey.400' }}>
                        Employers are increasingly using technology to quickly assess talent at scale. Getting noticed is harder than ever...
                    </Typography>
                </Box>
                <Grid container spacing={2}>
                    {items.map((item, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                            <Stack
                                direction="column"
                                component={Card}
                                spacing={1}
                                useFlexGap
                                sx={{
                                    color: 'inherit',
                                    p: 3,
                                    height: '100%',
                                    borderColor: 'hsla(220, 25%, 25%, 0.3)',
                                    backgroundColor: 'grey.800',
                                }}
                            >
                                <div>
                                    <Stack alignItems='center' direction='row' gap={2}>
                                        <Box sx={{ color: 'red' }}>{item.icon}</Box>
                                        <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                                            {item.title}
                                        </Typography>
                                    </Stack>
                                </div>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
                <Box
                    sx={{
                        width: { sm: '100%', md: '60%' },
                        textAlign: { sm: 'left', md: 'center' },
                    }}
                >
                    <Typography component="h2" variant="h4">
                        NextMunday puts control of your story – the whole story – back in your hands to work with the modern technological hiring landscape.
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}