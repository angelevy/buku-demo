import { Request, Response } from "express";
import Buku from "../models/Buku";

const BukuController = {
    index: async (req: Request, res: Response) => {
        try {
            // "https://balblaba.com/bukus?userId=example@example.com";
            const userId = req.query.userId
            const bukus = await Buku.findAll({
                where: {
                    userId: userId
                }
            })

            return res.status(200).json({
                status: 200,
                message: "Bukus sent successfullt.",
                bukus: bukus
            })
        } catch (error: any) {
            return res.status(500).json({
                status: 500,
                message: `Error fetching bukus: ${error.message}`
            })
        }
    },
    show: async (req: Request, res: Response) => {
        try {
            // "https://balblaba.com/bukus/1;
            const bukuId = req.params.id
            const buku = await Buku.findByPk(bukuId)

            if (buku == null) {
                return res.status(404).json({
                    status: 404,
                    message: "Buku not found"
                })
            }

            return res.status(200).json({
                status: 200,
                message: "Buku sent successfully.",
                buku: buku
            })
        } catch (error: any) {
            return res.status(500).json({
                status: 500,
                message: `Error fetching bukus: ${error.message}`
            })
        }
    },
    store: async (req: Request, res: Response) => {
        try {
            if (!req.file) {
                return res.status(400).json({
                    status: 400,
                    message: "Image file is required."
                })
            }

            // "https://balblaba.com/public/images/aslfjskdfjka.jpg";
            const baseUrl = `${req.protocol}://${req.get("host")}`;
            const imageUrl = `${baseUrl}/public/images/${req.file.filename}`;

            const buku = await Buku.create({
                ...req.body,
                imageUrl: imageUrl,
            })

            return res.status(201).json({
                status: 201,
                message: "Buku created successfully.",
                buku: buku
            })
        } catch (error: any) {
            return res.status(500).json({
                status: 500,
                message: `Error fetching bukus: ${error.message}`
            })
        }
    },
    update: async (req: Request, res: Response) => {
        try {
            // "https://balblaba.com/bukus/1";
            const bukuId = req.params.id // 1
            const buku = await Buku.findByPk(bukuId);

            if (buku == null) {
                return res.status(404).json({
                    status: 404,
                    message: "Buku not found."
                })
            }

            if (req.file) {
                // "https://balblaba.com/public/images/aslfjskdfjka.jpg";
                const baseUrl = `${req.protocol}://${req.get("host")}`;
                const imageUrl = `${baseUrl}/public/images/${req.file.filename}`; // Penting untuk disesuaikan dengan direktori yang diinginkan
                req.body.imageUrl = imageUrl;
            }

            await buku.update(req.body)

            return res.status(200).json({
                status: 200,
                message: "Buku updated successfully.",
                buku: buku
            })
        } catch (error: any) {
            return res.status(500).json({
                status: 500,
                message: `Error fetching bukus: ${error.message}`
            })
        }
    },
    destory: async (req: Request, res: Response) => {
        try {
            // "https://balblaba.com/bukus/1";
            const bukuId = req.params.id // 1
            const buku = await Buku.findByPk(bukuId);

            if (buku == null) {
                return res.status(404).json({
                    status: 404,
                    message: "Buku not found."
                })
            }
            await buku.destroy();
            return res.status(200).json({
                status: 200,
                message: "Buku deleted successfully."
            })
        } catch (error: any) {
            return res.status(500).json({
                status: 500,
                message: `Error fetching bukus: ${error.message}`
            })
        }
    }
}

export default BukuController;  