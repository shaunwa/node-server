const PACKAGE_PREFIX = '../';

const packageNames = [
  'users',
]

const packages = packageNames.map((name) => require(`${PACKAGE_PREFIX}${name}`));

export default packages;
