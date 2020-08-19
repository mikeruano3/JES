const Router 		        = require('express-promise-router')
const router 		        = new Router()
const dataCtrl	            = require('../../controllers/datamanagement/fiscaliaMgt.controller')

module.exports = router

router.get('/findone/:id',               dataCtrl.findOne)
router.get('/findall',                   dataCtrl.findAll)
router.post('/findmany/:id',             dataCtrl.findMany)
router.post('/insert/',                  dataCtrl.insertOne)
router.put('/update/',                   dataCtrl.update)
router.delete('/delete/',                dataCtrl.deleteRow)

