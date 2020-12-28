const express = require('express')
const app = express()
app.use(express.json())

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
    response.send('<h1>Hello Phonebook!</h1><a href="http://localhost:6001/info">INFO PAGE</a>')
  })
  
  app.get('/api/persons', (request, response) => {
    response.json(persons)
  })


  app.get('/info', (request, response) => {
    response.send(`<p>Phonebook has info for ${persons.length} people</p><p>${new Date()}</p><a href="http://localhost:6001/">HOME PAGE</a>`)
  })

  app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
  })

  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
  })

  const generateRandomId = () => {
    const randomId = persons.length > 0
    ? Math.floor(Math.random() * 10000000)
    : 1
    return randomId
  }
  app.post('/api/persons', (request, response) => {
    const body = request.body
    console.log(body)
    if (!body.name){
      return response.status(400).json(
        {
          error: "name is missing"
        }
      )
    }
    let person = {
        name: body.name,
        number: body.number,
        date: new Date(),
        id: generateRandomId(),
      }
  
      person = persons.concat(person)
    
      response.json(person)

})

const PORT = 6001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)