import { z } from 'zod'

export const ParamIdDto = z.object({
  id: z.string().uuid()
})
