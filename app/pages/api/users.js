export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json([
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Doe" },
    ]);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
