'use client'
import { Navbar } from '@/components/Navbar';
import * as Styled from './styles'
import { Card } from '@/components/Card';
import { Sidebar } from '@/components/Sidebar';
import { Footer } from '@/components/Footer';
export default function Home() {
  return (
    <Styled.Container>
      <Navbar/>
      <Sidebar/>
      <Card/>
      <Footer/>
    </Styled.Container>
  );
}
