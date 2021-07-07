const Register = require('../model/register')
const Status = require('http-status')

exports.register_create = (request, response, next) => {
  const name = request.body.name
  const email = request.body.email
  const cell_phone = request.body.cell_phone
  const address = request.body.address

  Register.create({
      name,
      email,
      cell_phone,
      address
  }).then(() => {
      response.status(Status.CREATED).send()
  }).catch((error) => next(error))
}

exports.find_user = (request, response, next) => {
  const id = request.params.id

  Register.findById(id).then((register) => {
      if (register) {
          response.send(register)
      } else {
          response.status(Status.NOT_FOUND).send()
      }
  }).catch((error) => next(error))
}

exports.list_users = (request, response, next) => {
  let limit = parseInt(request.query.limit || 0)
  let page = parseInt(request.query.page || 0)

  if (!Number.isInteger(limit) || !Number.isInteger(page)) {
      response.status(Status.BAD_REQUEST).send()
  }

  const ITEMS_PER_PAGE = 10

  limit = limit > ITEMS_PER_PAGE || limit <= 0 ? ITEMS_PER_PAGE : limit
  page = page <= 0 ? 0 : page * limit

  Register.findAll({ limit: limit, offset: page }).then((registers) => {
      if (registers && registers.length) {
          response.send(registers)
      } else {
          response.status(Status.NOT_FOUND).send()
      }
  }).catch((error) => next(error))
}

exports.update_user = (request, response, next) => {
  const id = request.params.id

  const name = request.body.name
  const email = request.body.email
  const cell_phone = request.body.cell_phone
  const address = request.body.address

  Register.findById(id).then((register) => {
      if (register) {
          Register.update({
            name,
            email,
            cell_phone,
            address
          }, { where: { id } }).then(() => {
              response.send()
          }).catch((error) => next(error))
      } else {
          response.status(Status.NOT_FOUND).send()
      }
  }).catch((error) => next(error))
}

exports.excluir = (request, response, next) => {
  const id = request.params.id

  Register.findById(id).then((register) => {
      if (register) {
          Register.destroy({
              where: { id }
          }).then(() => {
              response.send()
          }).catch((error) => next(error))
      } else {
          response.status(Status.NOT_FOUND).send()
      }
  }).catch((error) => next(error))
}