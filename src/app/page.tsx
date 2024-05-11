'use client'
import { Navbar } from '@/components/Navbar';
import * as S from './styles'
import { Card } from '@/components/Card';
import { Sidebar } from '@/components/Sidebar';
import { Footer } from '@/components/Footer';
import useProducts from '@/hooks/useProducts';
import { useSelector } from 'react-redux';
import { Filters } from '@/components/Filters';
import { useEffect, useState } from 'react';
import { dataInitialValue, initialFiltersOptions } from './constant';
import useCategories from '@/hooks/useCategories';
export default function Home() {
  const visible = useSelector((state: any) => state.cart.visible)

    const [filters, setFilters] = useState(initialFiltersOptions)
    const [data, setData] = useState(dataInitialValue)

  return (
    <S.Container>
      <Navbar/>
      <Sidebar visible={visible}/>
      <Filters options={data} filters={filters} setFilters={setFilters}  />

      <Card filters={filters}/>
      <Footer/>
    </S.Container>
  );
}
