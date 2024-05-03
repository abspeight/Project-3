export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const response = await fetch('http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=5');
            const data = await response.json();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch numbers' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}