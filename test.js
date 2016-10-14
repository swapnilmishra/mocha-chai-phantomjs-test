var expect = chai.expect; // Note that should has to be executed

var myLib = {
  insertElement: function(id,text){
    $parent = $("body");
    $element = $("<div>").attr("id",id).text(text);
    $parent.append($element);
  }
};

describe('MyLib', function() {
  describe('#insertElement()', function() {
    
    it('Testing element injection', function() {
      var text = "Hello I am Testing Mocha, Chai, PhantomJS";
          id = "mochaTest";
      myLib.insertElement(id,text);
      expect($("#"+id).text()).to.equal(text)
      expect($("#"+id).text()).to.not.equal('')
      // $("#"+id).text().should.equal(text);
    })
  })
});