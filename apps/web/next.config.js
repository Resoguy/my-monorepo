const withTM = require('next-transpile-modules')(['@my-monorepo/ui']);

module.exports = withTM({
	reactStrictMode: true,
});
