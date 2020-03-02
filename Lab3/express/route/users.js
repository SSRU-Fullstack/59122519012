
var express = require('express')
var router = express.Router()
const users = require('./../db/users.json')
router.get('/', (req, res) => {
    res.json(users)
    storeData(users,"db/users.json")
  })
  
  router.post('/', (req, res) => {
      users.push(req.body)
      res.status(201).json(users)
  });
  
  router.get('/:id', (req, res) => {
      res.json(users.find(user => user.id === req.params.id))
    })
  
  router.put('/:id', (req, res) => {
      const updateIndex = users.findIndex(user => user.id === req.params.id)
      res.json(Object.assign(users[updateIndex], req.body))
  });
  router.delete('/:id', (req, res) => {
      const deletedIndex = users.findIndex(user => user.id === req.params.id)
      users.splice(deletedIndex, 1)
      res.status(204).json(users)
      
   })
  
  
   const fs = require('fs')
  
  const storeData = (data, path) => {
    try {
      fs.writeFileSync(path, JSON.stringify(data))
    } catch (err) {
      console.error(err)
    }
  }
  module.exports = router
  