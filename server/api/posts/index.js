const { Router } = require('express');
const allPosts = require('../../_mocks/posts.json');

const router = new Router();

router.get('/', async (req, res) => {
  console.log('in GET /api/posts/');
  res.status(200).send(allPosts);
});

router.get('/:id', async (req, res) => {
  console.log(`in GET /api/posts/${req.params.id}`);
  const post = allPosts.find(p => p.id == req.params.id);
  res.status(post ? 200 : 404).send(post || 'NOT FOUND');
});

module.exports = router;
