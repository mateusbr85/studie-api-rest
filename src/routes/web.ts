import { Router, Response, Request } from 'express';
import { CrudController } from '@api/CrudController'

const router = Router();

router.get('/:crud/:id/get', (req:Request, res: Response) => {
    CrudController.get(req, res)
});

router.post("/:crud/insert", (req: Request, res: Response) => {
    CrudController.insert(req, res)
})

export default router;