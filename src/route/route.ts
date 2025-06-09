// @ts-nocheck
import express from 'express';
import BukuController from '../controller/buku_controller';
import upload from '../middleware/upload';

const router = express.Router();

router.get("/bukus", BukuController.index);
router.get("/buku/:id", BukuController.show)
router.post("/buku", upload.single("image"), BukuController.store);
router.put("/buku/:id", upload.single("image"), BukuController.update);
router.delete("/buku/:id", BukuController.destory);

export default router;