import '@fastify/jwt'

declare module '@fastify/jwt' {
  interface FastifyJWT {
    user: {
      sub: number
    } // user type is return type of `request.user` object
  }
}
