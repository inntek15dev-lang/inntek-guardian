const express = require('express');
const router = express.Router();
const { Document, Control, Audit, NonConformity } = require('../models');
const createController = require('../controllers/crudController');
const { checkPermission } = require('../middleware/auth');

const documentController = createController(Document);
const controlController = createController(Control);
const auditController = createController(Audit);
const ncController = createController(NonConformity);

/**
 * @swagger
 * /api/documents:
 *   get:
 *     summary: Get all documents
 *     tags: [Documents]
 */
router.get('/documents', checkPermission('documents', 'read'), documentController.getAll);
router.post('/documents', checkPermission('documents', 'write'), documentController.create);
router.put('/documents/:id', checkPermission('documents', 'write'), documentController.update);
router.delete('/documents/:id', checkPermission('documents', 'delete'), documentController.delete);

/**
 * @swagger
 * /api/controls:
 *   get:
 *     summary: Get all controls
 *     tags: [Controls]
 */
router.get('/controls', checkPermission('controls', 'read'), controlController.getAll);
router.post('/controls', checkPermission('controls', 'write'), controlController.create);
router.put('/controls/:id', checkPermission('controls', 'write'), controlController.update);

/**
 * @swagger
 * /api/audits:
 *   get:
 *     summary: Get all audits
 *     tags: [Audits]
 */
router.get('/audits', checkPermission('audits', 'read'), auditController.getAll);
router.post('/audits', checkPermission('audits', 'write'), auditController.create);
router.put('/audits/:id', checkPermission('audits', 'write'), auditController.update);

/**
 * @swagger
 * /api/nonconformities:
 *   get:
 *     summary: Get all non-conformities
 *     tags: [NonConformities]
 */
router.get('/nonconformities', checkPermission('nc', 'read'), ncController.getAll);
router.post('/nonconformities', checkPermission('nc', 'write'), ncController.create);
router.put('/nonconformities/:id', checkPermission('nc', 'write'), ncController.update);
router.delete('/nonconformities/:id', checkPermission('nc', 'delete'), ncController.delete);

module.exports = router;
