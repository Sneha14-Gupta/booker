"use client"
import React from 'react'
import { useReducer } from 'react'
import { bookReducer } from '@/lib/reducer'
import Header from '@/components/Header'
import AddBook from '@/components/AddBook'
import { List } from 'lucide-react'
import ListBook from '@/components/ListBook'
import { sampleData } from '@/lib/sampleData'


function page() {
  const [books, dispatch] = useReducer(bookReducer, sampleData)
  return (
    <div>
      <Header />
      <AddBook dispatch={dispatch} />
      <ListBook books={books} dispatch={dispatch} />
    </div>
  )
}

export default page