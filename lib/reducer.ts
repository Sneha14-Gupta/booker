export const bookReducer = (state: Book[], action: Action) => {
    switch (action.type) {
        case "add":
            const book = {
                id: crypto.randomUUID(),
                title: action.payload.title,
                author: action.payload.author,
                rating: 0
            }
            return [...state, book]
        case "sort":
            return [...state].sort((a, b) => b.rating - a.rating)
        case "delete":
            return state.filter((book) => book.id !== action.payload.id)
        case "like":
            return state.map((book) =>
                book.id === action.payload.id ? { ...book, rating: book.rating + 1 } : book
            )
        case "dislike":
            return state.map((book) =>
                book.id === action.payload.id ? { ...book, rating: book.rating - 1 } : book
            )
        default:
            return state

    }
}