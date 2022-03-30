export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' })
}

export async function handler2(req, res) {
  res.status(200).json({ text: 'World' })
}