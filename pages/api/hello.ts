import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: 'Hello' })
}

export const handler2 = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: 'World' })
}