interface Book {
    id: string
    title: string
    author: string
    rating: number
}

type Action = {
    type: "add";
    payload: { title: string, author: string }
}
{
    type: "delete"
    payload: { id: string }
}
{
    type: "sort"
}
{
    type: "like"
    payload: { id: string }
}
{
    type: "dislike"
    payload: { id: string }
}


//     {
//         type: "add";
//         payload: { title: string, author: string }
//     }
// {
//     type: "sort"
// }
// {
//     type: "delete"
//     payload: { id: string }
// }
// {
//     type: "like"
//     payload: { id: string }

// }
// {
//     type: "dislike"
//     payload: { id: string }
// }