import { z } from 'zod'

export const UserRequestUpdateDto = z.object({
  name: z.string().trim().min(1).optional(),
  email: z.string().email().optional()
})
