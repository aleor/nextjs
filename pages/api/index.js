import nc from 'next-connect';

const handler = nc()
  .get((req, res) => {
    res.json({ message: 'ok for get' });
  })
  .post(async (req, res) => {
    res.json({ message: 'ok for post' });
  });

export default handler;
