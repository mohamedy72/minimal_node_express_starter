import { Request, Response } from 'express'

export async function getAllUsers(req: Request, res: Response) {

    res.send("All users are served")
}

