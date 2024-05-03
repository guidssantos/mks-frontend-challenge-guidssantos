'use client'
import { Navbar } from '@/components/Navbar';
import * as Styled from './styles'
import { Card } from '@/components/Card';
import { Sidebar } from '@/components/Sidebar';
import { Footer } from '@/components/Footer';
import useProducts from '@/hooks/useProducts';
import { useSelector } from 'react-redux';
export default function Home() {
  const visible = useSelector((state: any) => state.cart.visible)

  return (
    <Styled.Container>
      <Navbar/>
      <Sidebar visible={visible}/>
      <Card/>
      <Footer/>
    </Styled.Container>
  );
}
