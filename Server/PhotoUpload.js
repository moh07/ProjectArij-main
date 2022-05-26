// const path = require('path');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require("fs");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // console.log("file=>",file)
        // console.log("cb=>",cb)
        const FolderPath = `../public/image`;
        fs.mkdirSync(FolderPath, { recursive: true })
        cb(null, FolderPath)
    },
    filename: function (req, file, cb) {
        // console.log("req=>",req.query)
        console.log("file=>", file)
        // You could rename the file name
        // cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
        // let nameFile=file.originalname.split('.')
        // You could use the original name
        cb(null, file.originalname)
    }
});

var upload = multer({ storage: storage })

router.post("/photo", upload.single('photo'), (req, res, next) => {
    // console.log("36=>",req.body)
    // return res.json({
    //     image: req.file.path,
    //     studentName:req.query.studentName,
    //     classeName:req.query.classeName
    // });
});


// router.post("/upload",function(req, res, next){
//     console.log(req.query.file);
// });

module.exports = router;