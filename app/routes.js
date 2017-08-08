var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Type route

router.get('/short', function (req, res) {

  var type = req.session.data['type']

  if (type === 'Short') {
    res.redirect('short.html')
  } else if (type === 'Long') {
    res.redirect('standard.html')
  } else if (type === 'Business') {
    res.redirect('business.html')
  } else if (type === 'Mars') {
    res.redirect('mars.html')
  }

})

module.exports = router
