import { FaCode } from 'react-icons/fa'
import { GoDatabase } from 'react-icons/go'
import { IoHardwareChipOutline } from 'react-icons/io5'

export const techStack = [
  {
    name: 'Frontend',
    icon: FaCode,
    text: `
// React Component with Typewriter Effect 
import{ useState } from 'react'
import TypeIt from 'typeit'

const MyComponent = () => {
  new TypeIt("#formElement", {
  strings: "Alex MacArthur",
  waitUntilVisible: true,
}).go();

return (
    <div className='App'>
    <span>{text}</span>
    </div>
)
}
`,
  },
  {
    name: 'Backend',
    icon: GoDatabase,
    text: `
 // Node.js API with Express
import express from 'express'

const app = express()

app.get('/api', (req, res) => {
    res.json({ message: 'Hello World' })
}

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000')
}
        `,
  },
  {
    name: 'Devops',
    icon: IoHardwareChipOutline,
    text: `
# Dockerfile Compose Configuration
version: '3.8'

services:
    web:
    image: my-web-app
    build: .
    ports:
        - "3000:3000"
    db:
    image: postgres
    environment:
        POSTGRES_USER: user
        POSTGRES_PASSWORD: password
        POSTGRES_DB: mydb
    volumes:
        - db_data:/var/lib/postgresql/data

    backend: 
    image: my-backend-app
    build: .
    ports:
        - "5000:5000"
        `,
  },
]
