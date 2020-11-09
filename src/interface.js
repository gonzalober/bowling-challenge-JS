$(document).ready(function () {
  let scorecard = new Scorecard();

  $("#roll").click(function (pins) {
    scorecard.roll(pins);
  });

  $("#1pin").click(function () {
    scorecard.roll(1);
  });

  $("#score").click(function () {
    scorecard.score();
  });
});
