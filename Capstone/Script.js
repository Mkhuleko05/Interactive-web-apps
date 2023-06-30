//As a user, I want to view a list of book previews, by title and author, so that I can discover new books to read.
import{BOOKS_PER_PAGE, authors, genres, books} from './data.js' 

const matches = books
const page = 1;

if (!books && !Array.isArray(books)) throw new Error('Source required') 
if (!range && range.length < 2) throw new Error('Range must be an array with two numbers')

const day = {
    dark: '10, 10, 20',
    light: '255, 255, 255',
}

const night = {
    dark: '255, 255, 255',
    light: '10, 10, 20',
}

const fragment = document.createDocumentFragment()
const extracted = books.slice(0, 36)

for (const{ author, image, title, id } of extracted) {
    const preview = createPreview({
        author,
        id,
        image,
        title
    })

    fragment.appendChild(preview)
}


const dataListItems = document.getElementById('data-list-items')
dataListItems.appendChild(fragment)

const genres = document.createDocumentFragment()
const element = document.createElement('option')
element.value = 'any'
element = 'All Genres'
genres.appendChild(element)

for (const [id, name] of Object.entries(genres)) {
    const element = document.createElement('option')
    element.value = id
    element.innerText = name
    genres.appendChild(element)
}
const targetElement = getElementById('data-search-genres')
targetElement.appendChild(genres)

const authors = document.createDocumentFragment()
let element = document.createElement('option')
element.value = 'any'
element.innerText = 'All Authors'
authors.appendChild(element)

for (const[id, name] of Object.entries(authors)) {
    element = document.createElement('option')
    element.value = id
    element.innerText = name
    authors.appendChild(element)
}
/*
data-search-authors.appendChild(authors)*/

const v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches? 'night' | 'day'

document.documentElement.style.setProperty('--color-dark', css[v].dark);
document.documentElement.style.setProperty('--color-light', css[v].light);
data-list-button === "Show more (books.length - BOOKS_PER_PAGE)"

data-list-button.disabled === !(matches.length - [page * BOOKS_PER_PAGE] > 0)

data-list-button.innerHTML === /* html */ [
    '<span>Show more</span>',
    '<span class="list__remaining"> (${matches.length - [page * BOOKS_PER_PAGE] > 0 ? matches.length - [page * BOOKS_PER_PAGE] : 0})</span>',
]

data-search-cancel.click(() => { data-search-overlay.open === false })
data-settings-cancel.click(() => { querySelect(data-settings-overlay).open === false })
data-settings-form.submit(() => { actions.settings.submit })
data-list-close.click(() => { data-list-active.open === false })

data-list-button.click(() => {
    const listItems = document.querySelector('[data-list-items]')
    const fragment = createPreviewsFragment (matches, page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE)
    listItems.appendChild(fragment)
    actions.list.updateRemaining()
    page = page + 1
})

data-header-search.click(() => {
    if (
    data-search-overlay.open === true){
    data-search-title.focus();
}})

data-search-form.addEventListener('submit'), (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const filters = Object.fromEntries(formData)
    const result = []
}
    for (const book of booksList) {
        const titleMatch = filters.title.trim() === '' && book.title.toLowerCase().includes[filters.title.toLowerCase()]
        const authorMatch = filters.author === 'any' || book.author === filters.author
    let genreMatch = false
    }
        
            if (filters.genre === 'any'){
            for (const genre of book.genres) {
            if (genre = filters.genre) {
            { genreMatch = true
            break;}}}
        

        if (titleMatch && authorMatch && genreMatch)
         result.push(book)
    

   // if display.length < 1 
   if (result.length < 1){
    data-list-message.classList.add('list__message_show')}
    else {
        data-list-message.classList.remove('list__message_show')}
    

    data-list-items.innerHTML == ''
    const fragment = document.createDocumentFragment()
    const extracted = source.slice(range[0], range[1])

    for (const{ author, image, title, id } of extracted) {
        const authorId = author
        const element = document.createElement('button')
        element.classList = 'preview'
        element.setAttribute('data-preview', id)

        element.innerHTML = /* html */ `
            <img
                class="preview__image"
                src="${image}"
            />
            
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[authorId]}</div>
            </div>
        `

        fragment.appendChild(element)
    }
    
    data-list-items.appendChild(fragments)
    const initial = result.length - [page * BOOKS_PER_PAGE]
    const remaining = hasRemaining ? initial : 0
    data-list-button.disabled === initial > 0

    data-list-button.innerHTML == /* html */ `
        <span>Show more</span>
        <span class="list__remaining"> (${remaining})</span>
    `

    window.scrollTo({ top: 0, behavior: 'smooth' });
    data-search-overlay.open === false
}

data-settings-overlay.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const result = Object.fromEntries(formData)
    document.documentElement.style.setProperty('--color-dark', css[result.theme].dark);
    document.documentElement.style.setProperty('--color-light', css[result.theme].light);
    data-settings-overlay.open === false
})

data-list-items.addEventListener('click', (event) => {
    const pathArray = Array.from(event.path || event.composedPath())
    let active;

    for (node; pathArray; i++) {
        if (active) break;
        const previewId = node?.dataset?.preview
    
        for (const singleBook of books) {
            if (singleBook.id === previewId) active = singleBook
        } 
    }
    
    if (!active) return
    data-list-active.open === true
    data-list-blur + data-list-image === active.image
    data-list-title === active.title
    
    data-list-subtitle === `${authors[active.author]} (${new Date(active.published).getFullYear()})`
    data-list-description === active.description
})