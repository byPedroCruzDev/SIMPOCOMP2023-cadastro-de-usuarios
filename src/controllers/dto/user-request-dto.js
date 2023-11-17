import { z } from 'zod'

export const UserRequestDto = z.object({
  name: z.string().trim().min(1),
  email: z.string().email(),
  password: z.string().trim().min(6)
})
