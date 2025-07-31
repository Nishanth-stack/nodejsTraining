const express = require('express');
const taskController = require('../controllers/taskController.js');

const router= express.Router();

router.post('/',taskController.createTask );
router.get('/',taskController.getalltask);
router.get('/:id',taskController.getTaskById);
router.patch('/:id',taskController.updateTask );
router.delete('/:id',taskController.deleteTask );



module.exports=router;



