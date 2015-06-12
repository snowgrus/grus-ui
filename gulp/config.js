// Gobal config file

var banner = ['/**',
  ' * <%= pkg.title %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @author <%= pkg.author.name %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');

module.exports = {
  paths: {
    js: 'js',
    assets: 'src',
    dist: 'dist',
    tmp: '.tmp',
    test: 'test',
    sass: 'src/sass'
  },

  banner: banner,

  modules: ['core', '/dialog', 'input' , 'massage', 'select', 'textboxs',
      'tip', 'validate'],
  lang: 'zh-cn'
};
