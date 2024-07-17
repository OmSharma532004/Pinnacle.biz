const cloudinary = require('cloudinary').v2;
const fs = require('fs');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            throw new Error("File path is required");
        }

        const result = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto'
        });

        if (!result) {
            throw new Error("Upload failed");
        }

        console.log(result.secure_url);
        fs.unlinkSync(localFilePath);

        return result;

    } catch (error) {
        if (localFilePath) fs.unlinkSync(localFilePath);
        console.error("Upload failed:", error);
        throw new Error("Upload failed");
    }
}

module.exports = uploadOnCloudinary;