const express = require('express')
const app = express()
app.use(express.static(__dirname + '/public')); //__dir and not _dir

let persons = [
    {
        date: "2020-11-03T20:30:33.033Z",
        id: 1,
        name: "Michael Bluth",
        "number": "(689) 838-8380"
      },
      {
        date: "2020-11-03T11:19:25.905Z",
        id: 2,
        name: "George Bluth Sr.",
        number: "(987) 654-4328"
      },
      {
        date: "2020-11-02T05:34:32.492Z",
        id: 3,
        name: "Bob Loblaw",
        number: "(737) 666-1743"
      },
      {
        date: "2020-11-02T05:37:47.508Z",
        id: 4,
        name: "Gob Bluth",
        number: "(879) 873-8765"
      },
      {
        date: "2020-11-02T05:42:37.430Z",
        id: 5,
        name: "Tobias Fünke",
        number: "(587) 327-3482"
      },
      {
        date: "2020-11-03T11:19:42.288Z",
        id: 6,
        name: "Lindsay Bluth Fünke",
        number: "(748) 372-8290"
      },
      {
        date: "2020-11-02T05:44:37.729Z",
        id: 7,
        name: "George-Michael Bluth",
        number: "(578) 909-8382"
      },
      {
        date: "2020-11-02T05:45:19.952Z",
        id: 8,
        name: "Barry Zuckerkorn",
        number: "(839) 290-9837"
      },
      {
        date: "2020-11-05T17:19:25.908Z",
        id: 9,
        name: "Lucille Bluth",
        number: "(876) 362-8989"
      }
]

app.get('/', (request, response) => {
    response.send('<h1>Hello Phonebook!</h1>')
  })
  
  app.get('/api/persons', (request, response) => {
    response.json(persons)
  })


  app.get('/info', (request, response) => {
    response.send(`<p>Phonebook has info for ${persons.length} people</p><p>${new Date()}</p>`)
  })

const PORT = 6001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)