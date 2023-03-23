import multer from "multer"

const uploadImage = multer({
  storage: multer.memoryStorage()
}).single("image")

export default uploadImage