'use client'
import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Hero from '@/components/Hero';
import LogoCollection from '@/components/LogoCollection';
import Features from '@/components/Features';
import { Divider } from '@mui/material';
import Testimonials from '@/components/Testimonials';
import Highlights from '@/components/Highlights';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import type {} from '@mui/material/themeCssVarsAugmentation';
import BelowFold from '@/components/BelowFold';

export default function Home() {
  return (
    <Container maxWidth="lg">
        <Hero />
        <div>
          <BelowFold />
          <Features />
        </div>
    </Container>
  );
}
