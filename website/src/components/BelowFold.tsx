import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import CancelIcon from '@mui/icons-material/Cancel';

const items = [
    {
        icon: <CancelIcon />,
        title: 'Adaptable performance',
        description:
            'Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.',
    },
    {
        icon: <CancelIcon />,
        title: 'Built to last',
        description:
            'Experience unmatched durability that goes above and beyond with lasting investment.',
    },
    {
        icon: <CancelIcon />,
        title: 'Great user experience',
        description:
            'Integrate our product into your routine with an intuitive and easy-to-use interface.',
    },
    {
        icon: <CancelIcon />,
        title: 'Innovative functionality',
        description:
            'Stay ahead with features that set new standards, addressing your evolving needs better than the rest.',
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
                        You're more than paper. Stop letting outdated systems hold you back.
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'grey.400' }}>
                        You've invested heavily in learning, only to find traditional degrees and certifications don't adequately reflect your true skills or help you stand out. The process is long, frustrating, and often results in a credential that employers see as just a checklist item. Isn't it time learning and validation caught up with the modern world, giving you control and real recognition?
                    </Typography>
                </Box>
                <Grid container spacing={2}>
                    {items.map((item, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
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
                                    <Typography variant="body2" sx={{ color: 'grey.400' }}>
                                        {item.description}
                                    </Typography>
                                </div>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}