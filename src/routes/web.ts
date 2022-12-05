import { Router, Response, Request } from 'express';
import { CrudController } from '@api/CrudController';


const router = Router();

router.get('/:crud/:id/get', (req:Request, res: Response) => {
    CrudController.get(req, res)
});

router.get('/:crud/list', (req:Request, res: Response) => {
    CrudController.list(req, res)
})

router.post("/:crud/insert", (req: Request, res: Response) => {
    CrudController.insert(req, res)
})

router.post("/:crud/update", (req: Request, res: Response) => {
    CrudController.update(req, res)
})

router.delete("/:crud/:id/delete", (req: Request, res: Response) => {
    CrudController.delete(req, res)
})

export default router;