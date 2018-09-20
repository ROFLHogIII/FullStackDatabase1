import { Router } from 'express'
import Table from '../table'

let router = Router()
let blogs = new Table('Blogs')

router.get('/', (req, res) => {
    blogs.getAll()
        .then(response => {
            res.send(response);
        })
});

router.get('/:id', (req, res) => {
    blogs.getOne(res.params.id)
        .then(response => {
            res.send(response)
        })
})

export default router;