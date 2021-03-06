// Test automatically retrieved. Do not edit manually
const { render, json } = require('server/reply');
const { get, post } = require('server/router');
const { modern } = require('server').utils;
const run = require('server/test/run');
const fs = require('mz/fs');
const path = require('path');

describe('Automatic test from content 6', () => {
  it('works', async () => {
    // START
    const options = {
      views: './templates'
    };
    
    /* test */
    options.views = './test/views';
    const same = ctx => ({ views: ctx.options.views });
    const res = await run(options, same).get('/');
    expect(res.body.views).toBe(process.cwd() + path.sep + 'test/views' + path.sep);
    // END
  });
});
      