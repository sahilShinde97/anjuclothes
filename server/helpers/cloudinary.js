const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: "dwtyq6hcz",
  api_key: "316166468217273",
  api_secret: "Qj_cWcM_tl-R9xXh1BlZr2IOJKs",
});

const storage = multer.memoryStorage();

const upload = multer({ storage });

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

module.exports = { upload, imageUploadUtil };