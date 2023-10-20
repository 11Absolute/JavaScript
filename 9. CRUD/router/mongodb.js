const express = require("express")
const router = express.Router()

const modelController = require("../controllers/mongodb.js");
const userController = require("../controllers/userdb.js");
const middleware = require("../middleware/middleware.js")


router.get('/', (req, res) => {
    res.send('Data Base')
})

router.get('/models', modelController.getModels)

router.get('/models/:id', modelController.getModel)

router.post('/models', middleware.checkAuthorization, modelController.postModel)

router.put('/models/:id', middleware.checkAuthorization, modelController.putModel)

router.delete('/models/:id', middleware.checkAuthorization, modelController.deleteModel)

router.post('/users', userController.postUser)

router.delete('/user/:id', userController.deleteUser)

router.use(middleware.error)

module.exports = router;