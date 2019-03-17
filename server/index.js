const express = require('express');
const next = require('next');
const api = require('./api');
const allPosts = require('./_mocks/posts.json');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    console.log(`env="${process.env.NODE_ENV}"`);
    const server = express();

    server.use('/api', api);

    // server.get('/post/:id', (req, res) => {
    //   console.log(`in GET /post/${req.params.id}`);
    //   const actualPage = '/post';
    //   const queryParams = { id: req.params.id };
    //   app.render(req, res, actualPage, queryParams);
    // });

    server.get('*', (req, res) => {
      console.log(`in GET ${req.url}`);

      // find if req.url match any permalink
      const url = req.url.split('?')[0];
      const post = allPosts.find(p => url === p.permalink);
      if (post) {
        const actualPage = '/post';
        const queryParams = { id: post.id };
        return app.render(req, res, actualPage, queryParams);
      }

      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
