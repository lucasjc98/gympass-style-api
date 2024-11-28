import { beforeEach, describe, expect, it } from 'vitest'
import { FetchNearbyGymsUseCase } from './fetch-nearby-gyms-use-case'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'

let gymsRepository: InMemoryGymsRepository
let sut: FetchNearbyGymsUseCase

describe('Fetch Nearby Gyms Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new FetchNearbyGymsUseCase(gymsRepository)
  })

  it('should be able to fetch nearby gyms', async () => {
    await gymsRepository.create({
      title: 'Near Gym',
      description: 'Description of Near Gym',
      phone: '1812334567',
      latitude: -21.9964158,
      longitude: -51.2422428,
    })

    await gymsRepository.create({
      title: 'Far Gym',
      description: 'Description of Far Gym',
      phone: '1812334567',
      latitude: -22.1760964,
      longitude: -51.2451516,
    })

    const { gyms } = await sut.execute({
      userLatitude: -21.9964158,
      userLongitude: -51.2422428,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'Near Gym' })])
  })
})
