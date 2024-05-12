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
import useDebounce from '@/hooks/useDebounce';
import { CategoryProps, FiltersProps } from '@/utils/filtersOptions';
import { useFilters } from '@/hooks/useFilters';
import { Hero } from '@/components/Hero';
import { Copyright } from '@/components/Copyright';
export default function Home() {
  const { data: categories, isLoading } = useCategories()
  const { filters, setFilters, data, setData } = useFilters()


    useEffect(() => {
      if (!isLoading) {
        const categoryOptions = categories?.map(
          (category: CategoryProps): FiltersProps => ({
            value: category._id,
            label: category.name
          })
        )
        setData({
          ...data,
          categoryOptions
        })
      }
    }, [categories])


  return (
    <S.Container>
      <Navbar />
      <S.ContentContainer>
        <Hero />
        <Filters options={data} filters={filters} setFilters={setFilters} />

        <Card
          filters={{
            ...filters,
            name: useDebounce(filters.name, 500),
            categories: Array.isArray(filters.categories)
              ? filters.categories.join(',')
              : undefined
          }}
        />
      </S.ContentContainer>
        <Footer/>
      <Copyright />
    </S.Container>
  )
}
