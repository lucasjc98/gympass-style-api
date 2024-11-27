import { beforeEach, describe, expect, it } from 'vitest'
import { CreateGymUseCase } from './create-gym-use-case'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'

let gymsRepository: InMemoryGymsRepository
let sut: CreateGymUseCase

describe('Create Gym Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new CreateGymUseCase(gymsRepository)
  })

  it('should be able to create gym', async () => {
    const { gym } = await sut.execute({
      title: 'JavaScript Gym',
      description: 'Description of Javascript Gym',
      phone: '1812334567',
      latitude: -21.9964158,
      longitude: -51.2422428,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
