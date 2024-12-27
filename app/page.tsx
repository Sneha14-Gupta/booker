"use client"
import { useReducer } from 'react'
import { bookReducer } from '@/lib/reducer'
import Header from '@/components/Header'
import AddBook from '@/components/AddBook'
import { LampDemo } from '@/components/ui/lamps'
import ListBook from '@/components/ListBook'
import { sampleData } from '@/lib/sampleData'


function Page() {
  const [books, dispatch] = useReducer(bookReducer, sampleData)
  return (
    <div>
      <Header />
      <LampDemo />
      <AddBook dispatch={dispatch} />
      <ListBook books={books} dispatch={dispatch} />
    </div>
  )
}

export default Page