import express, { response } from 'express'
import { PrismaLessonsRepository } from './repositories/prisma/PrismaLessonsRepository'
import { CreateLesson } from './services/CreateLesson'

export const app = express()

app.use(express.json())

app.post('/lessons', async (request, response) => {
  const { title, description } = request.body

  const primaLessonsRepository = new PrismaLessonsRepository()
  const createLesson = new CreateLesson(primaLessonsRepository)

  try {
    await createLesson.execute({ title, description })

    return response.status(201).send()
  } catch(err: any) {
    return response.status(400).json({
      error: err.message
    })
  }

  return response.status(201).send()
})