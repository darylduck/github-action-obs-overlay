import express, { Request, Response } from 'express';
import { object, string, ValidationError } from 'joi';

import { webSockets } from '../web-sockets';

const router = express.Router();
const schema = object({
    data: object({
        conclusion: string().required()            
    }).required()
});

router.post('/', (req: Request, res: Response) => {
    const validationError = validateBuildSubmission(req);

    if (validationError) {
        res.status(400).send({
            errorMessage: validationError.details[0].message
        });

        return;
    }

    const buildResult = { success: req.body.data.conclusion === 'success' };
    
    webSockets.forEach(ws => {
        ws.send(JSON.stringify(buildResult));
    });

    res.status(200).end();
});

const validateBuildSubmission = (req: Request): ValidationError | undefined => {
    const result = schema.validate(req.body, { allowUnknown: true });
    return result.error;
}

export default router;