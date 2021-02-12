const assert = require('chai').assert;
const app = require('../app');

describe('App', function(){
    it('App Running', function(){
        assert.equal(app(), 'hello');
    });
});

// u can add anything or u can fix the problem