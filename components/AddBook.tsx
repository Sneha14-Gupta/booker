import React, { FormEvent } from 'react'
import { useRef } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ArrowDown10, Cross } from 'lucide-react'


interface AddBookProps {
    dispatch: React.Dispatch<Action>
}

function AddBook({ dispatch }: AddBookProps) {
    const bookRef = useRef<HTMLInputElement>(null)
    const authorRef = useRef<HTMLInputElement>(null)


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        const bookValue = bookRef.current?.value.trim();
        const authorValue = authorRef.current?.value.trim()

        if (!bookValue || !authorValue) return

        console.log(bookValue, authorValue)

        dispatch({ type: "add", payload: { title: bookValue, author: authorValue } })

        if (bookRef.current?.value && authorRef.current?.value) {
            bookRef.current.value = ''
            authorRef.current.value = ''
        }

    }
    const handleSort = () => {
        dispatch({ type: "sort" });
    }


    return (
        <form className='max-w-96 flex flex-col gap-2 mx-auto mb-10' onSubmit={handleSubmit}>
            <Input placeholder=' Author Name' type='text' required ref={bookRef} />
            <Input placeholder='book title' type='text' required ref={authorRef} />

            <div className='flex gap-2'>

                <Button type="submit">Add <Cross /></Button>
                <Button type="button" variant="outline" onClick={handleSort}>Sort <ArrowDown10 /></Button>
            </div>
        </form>
    )
}

export default AddBook