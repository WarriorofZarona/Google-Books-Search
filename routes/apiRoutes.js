const router = require("express").Router();
const Books = require("../models/Books");

router.post("/api/books", ({ body }, res) => {
    Books.create(body)
        .then(dbBooks => {
            res.json(dbBooks);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/books", (req, res) => {
    Books.find({})
        .then(dbBooks => {
            res.json(dbBooks);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.delete("/api/books/:id", (res, res) => {
    const id = req.params.id;
    Books.findByIdAndRemove(
        id,
        (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.send(data);
            }
        }
    )
})

module.exports = router;
