const express = require('express')
const controller = require('../controller/register.js')

const router = express.Router()

router.get('/registers/:id', controller.find_user)

router.get('/registers', controller.list_users)

router.post('/registers', controller.register_create)

router.put('/registers/:id', controller.atualizar)

router.delete('/registers/:id', controller.excluir)

module.exports = router
