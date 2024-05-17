const express = require('express')
const {v4} = require('uuid')
const cors = require('cors')


const port = 3001
const app = express()
app.use(express.json())
app.use(cors())

const users = []

const check = (request, response, next) => {
    const { id } = request.params
    const index = users.findIndex(user => user.id === id)

    if (index < 0) {
        return response.status(404).json({ message: "User not found" })
    }

    request.userIndex = index
    request.userId = id

    next()
}

// app.use(check)

app.get('/users', (request, response) => {
    return response.json(users)
})

app.post('/users', (request, response) => {
    const { name, age } = request.body
    const newUsers = { id:v4(), name, age }

    users.push(newUsers)

    return response.status(201).json(newUsers)
})

app.put('/users/:id', check, (request, response) => {
    const { name, age } = request.body
    const index = request.userIndex
    const id = request.userId
    const updateUser = { id, name, age }

    users[index] = updateUser
    return response.json(updateUser)
})

app.delete('/users/:id', check, (request, response) => {
    const index = request.userIndex

    users.splice(index, 1)

    return response.status(204).json()
})




app.listen(port, () => {
    console.log(`🚀 Serve started on port ${port}`)
})