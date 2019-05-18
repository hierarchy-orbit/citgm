#!/usr/bin/env node

if (require('supports-esm')) {
  import('../lib/bin/citgm-all.js').catch((error) => {
    console.error(error);
    process.exit(1);
  });
} else {
  require('../lib-cjs/bin/citgm-all.js');
}
