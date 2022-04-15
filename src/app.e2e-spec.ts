import { prisma } from './prisma'
import request from 'supertest'
import { app } from './app'
import crypto from 'node:crypto';

test('[e2e] CreateLesson', async () => {
  const title = `Nova Aula_${crypto.randomUUID()}`

  const response = await request(app)
    .post('/lessons')
    .send({title: title})

  const lessonInDatabase = await prisma.lesson.findFirst({
    where: {
      title: title
    }
  })

  expect(response.status).toBe(201)
  expect(response.body.error).toBeFalsy()
  expect(lessonInDatabase).toBeTruthy()
})