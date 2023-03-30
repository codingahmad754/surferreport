
var env = get_env();
var node_env = process.env.NODE_ENV || 'development';

console.log('environment: ' + env + ', NODE_ENV: ' + node_env);

module.exports = {
  key: env,
  is_development: node_env === 'development',
  is_production:  node_env === 'production'
}

function get_env() {
  if (process.env.ENV) return process.env.ENV;

  var target = process.argv[1];
  // 开发数据 必须要在 dev 环境跑
  if (target && target.indexOf('/backend/bin/dev_data/') > 0) return 'development';

  // mocha测试 必须要在 test 环境跑
  if (/mocha$/.test(target)) return 'test';

  var m = /(_qa|_production|_preview)($|\/)/.exec(process.cwd());
  switch (m && m[1]) {
    case '_qa':
      return 'qa';
    case '_preview':
      return 'preview';
    case '_production':
      return 'production';
    default:
      return 'development';
  }
}
