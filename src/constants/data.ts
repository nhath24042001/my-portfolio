import { FaCode } from 'react-icons/fa'
import { GoDatabase } from 'react-icons/go'
import { IoHardwareChipOutline } from 'react-icons/io5'

export const techStack = [
  {
    name: 'Frontend',
    icon: FaCode,
    tech: [
      {
        name: 'React JS',
        image:
          'https://images.viblo.asia/1d949589-afdd-4a1e-b77f-c53fdaf8af13.png',
      },
      {
        name: 'Next JS',
        image:
          'https://static-00.iconduck.com/assets.00/nextjs-icon-1024x1024-5et230l7.png',
      },
      {
        name: 'Angular',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6pXQTat5xa_jxh8xM2p-AKDEXFPYgRqOI2Q&s',
      },
      {
        name: 'Vue',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW1AvoJXu1NMIvNfwIWMLEX0xp7ZyQ11RjoQ&s',
      },
    ],
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
    tech: [
      {
        name: 'NestJS',
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg',
      },
    ],
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
