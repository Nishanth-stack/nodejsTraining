const express = require('express');

const projectController=require('../controllers/projectController');

const router=express.Router();

router.post('/',projectController.addProject);
router.get('/',projectController.getAllProject);
router.get('/:id',projectController.getProjectById);
router.patch('/:id',projectController.updateProjectById);
router.delete('/:id',projectController.deleteProjectById);


module.exports=router;

