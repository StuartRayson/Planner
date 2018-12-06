const robohydra = require('robohydra'),
  heads = robohydra.heads,
  RoboHydraHead = heads.RoboHydraHead,
  RoboHydraHeadFilesystem = heads.RoboHydraHeadFilesystem,
  RoboHydraHeadProxy = heads.RoboHydraHeadProxy,
  fs = require('fs');

exports.getBodyParts = function (config) {

  return {
    heads: [
      new RoboHydraHead({
        name: '500 Internal server error',
        path: '/.*',
        handler: function (req, res) {
          res.statusCode = 500;
          res.send("500 - (Synthetic) Internal Server Error");
        },
        detached: true
      }),

      new RoboHydraHead({
        name: 'Slow network (2s delay)',
        path: '/.*',
        handler: function (req, res, next) {
          setTimeout(() => {
            next(req, res);
          }, 2000);
        },
        detached: true
      }),

      new RoboHydraHeadProxy({
        name: 'dev proxy -> jsonplaceholder.typicode.com',
        mountPath: '/articles',
        proxyTo: 'https://jsonplaceholder.typicode.com/posts',
        detached: true
      }),

      new RoboHydraHead({
        name: 'Article list',
        path: '/articles',
        handler: function (req, res) {
          const content = fs.readFileSync(__dirname + '/../../responses/articles.json', 'utf8');
          res.send(content);
        }
      }),

      new RoboHydraHead({
        path: '/articles/:id',
        name: 'Article by id',
        handler: function (req, res, next) {
          if (!req.url.match(/.\.json$/)) {
            req.url = req.url.replace(/\/$/, "") + '.json';
          }
          next(req, res);
        }
      }),

      new RoboHydraHeadFilesystem({
        name: 'Static json from robohydra/responses',
        mountPath: '/',
        documentRoot: 'robohydra/responses'
      })
    ]
  };
};
