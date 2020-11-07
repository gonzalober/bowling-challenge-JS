describe("Scorecard", function() {

  let manytimesroll = function(pins, rolls) { 
    for (var i = 0; i < rolls; i++){
    scorecard.roll(pins);
    }
  }
  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it("roll spare ", function() {
    scorecard.roll(4)
    scorecard.roll(6)
    console.log('-----SPARE-----')
    scorecard.roll(4)
    manytimesroll(0,17)
    expect(scorecard.score()).toEqual(18)
  });

  it("roll gutter game", function() {
    manytimesroll(0,20)
    expect(scorecard.score()).toEqual(0)
  });

  it('rolls 1s' , function() {
    manytimesroll(1,20)
    expect(scorecard.score()).toBe(20)
  });

  it('rolls strike game' , function() {
    scorecard.roll(10)
    scorecard.roll(6)
    manytimesroll(0,17)
    expect(scorecard.score()).toBe(22)
  });

  it('rolls perfect game' , function() {
    manytimesroll(10,12)
    expect(scorecard.score()).toBe(300)
  });
  
});
