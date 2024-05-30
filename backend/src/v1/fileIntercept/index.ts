import path from "node:path"
import fs from "fs"
import { setGPSMetadata } from "../routes/sync/imageMetaDataSetter";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export  function saveBase64File(base64String:string, fileName:string, latitude: number|undefined, longitude: number|undefined) {
    // Remove the header from the base64 string
    const base64Data = base64String.replace(/^data:\w+\/\w+;base64,/, '');


    // Convert base64 string to binary buffer
    const buffer = Buffer.from(base64Data, 'base64');

    // Construct the file path
    const filePath = path.join(__dirname, "..", "..", "..", "savedImages", fileName)
    // const filePath = __dirname+'/'+folderPath + '/' + fileName;

    // Write buffer to file
    fs.writeFile(filePath, buffer, async (err) => {
        if (err) {
            console.error('Error saving file:', err);
        } else {
            console.log('File saved successfully:', filePath);
            // const data = await prisma.data.findFirst() 
            await setGPSMetadata(filePath, latitude, longitude);
        }
    });
}
