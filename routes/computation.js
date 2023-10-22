var express = require("express");
var router = express.Router();

/* GET computation page. */
router.get("/", function (req, res, next) {
  let x = req.query.x;
  let randVal = Math.random().toFixed(2);
  let imul = Math.imul(randVal).toFixed(2);
  let log = Math.log(randVal).toFixed(2);
  let log10 = Math.log10(randVal).toFixed(2);
  if (x == undefined) {
    x = randVal;
  }
  res.render("computation", {
    imul: `Math.imul() applied to  ${x} is ${imul}`,
    log: `Math.log() applied to  ${x} is ${log}`,
    log10: `Math.log10() applied to  ${x} is ${log10}`,
  });
});

module.exports = router;