import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { books } from './books'
import Book from './book'
import { hasFormSubmit } from '@testing-library/user-event/dist/utils'
//function Greeting(){
// return React.createElement('h2',{},"hello world")

//}

const names = ['john', 'peter', 'susan']
const newnammws = names.map((name) => {
  return <h1>{name}</h1>
})
console.log(newnammws)

const Booklist = () => {
  return (
    <>
      <h1>ohh bsdk ye kya kr rhe ho </h1>

      <section className="booklist">
        {books.map((book, index) => {
          const { img, title, author } = book
          return <Book {...book} key={book.id} number={index} />
        })}
      </section>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Booklist />)
