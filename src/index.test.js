const stack = require('./index').stack;
const assert = require('assert');

describe('sample class test',function(){
  it('should return true', function(){
    const sample = new stack();
    assert.notStrictEqual(sample, null);
  });

  describe('isEmpty', function(){
    const sample = new stack();
    context('when stack is empty', function(){
      it('should return true', function(){
        assert.strictEqual(sample.isEmpty(), true);
      });
    });
    context('when stack is not empty', function(){
      it('should return false', function(){
        sample.push('test');
        assert.strictEqual(sample.isEmpty(), false);
      })
    });
  });

  describe('push',function(){
    const sample = new stack();
    context('when stack is empty', function(){
      it('should return true', function(){
        assert.strictEqual(sample.isEmpty(), true);
      });
      it('should return false', function(){
        sample.push("test1");
        assert.strictEqual(sample.isEmpty(), false);
      });
    });
 
  });

  describe('size', function(){
    const sample = new stack();
    context('when stack is empty', function(){
      it('should return 0', function(){
        assert.strictEqual(sample.size(), 0);
      });
      it('should return 1', function(){
        sample.push("test1");
        assert.strictEqual(sample.size(), 1);
      });
      it('should return 2', function(){
        sample.push("test2");
        assert.strictEqual(sample.size(), 2);
      });
    });
  });

  describe('top', function(){
    const sample = new stack();
    context('when stack is empty', function(){
      it('should return Error', function(){
        assert.throws(function(){
          sample.top();
        }, /EmptyStackException/);
      });
    });

    context('when top after push', function(){
      it('should return 1', function(){
        sample.push(1);
        assert.strictEqual(sample.top(), 1);
      });
    });

    context('when top after push push pop', function(){
      it('should return 1', function(){
        sample.push(1);
        sample.push(2);
        sample.pop();
        assert.strictEqual(sample.top(), 1);
      });
    });

  });

  describe('pop', function(){
    const sample = new stack();
    context('when stack is empty', function(){
      it('should return error', function(){
        assert.throws(function(){
          sample.pop();
        }, /EmptyStackException/);
      })
    });
  });

});
