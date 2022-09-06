//1.Get all the file names present in the Downloads floder in your computer.
//2.Loop over the files and check the extension.
//3.Copy the file to new location

const fs = require('fs');

let base_dir = "C:/Users/sharm/Downloads/"
let doc_path = base_dir + "docs/";
let img_path = base_dir + "images/";
let media_path = base_dir + "media/";
let misc_path = base_dir + "misc/";

if(!fs.existsSync(doc_path)){
    fs.mkdir(doc_path,(err)=>{});
}
if(!fs.existsSync(img_path)){
    fs.mkdir(img_path,(err)=>{});
}
if(!fs.existsSync(media_path)){
    fs.mkdir(media_path,(err)=>{});
}
if(!fs.existsSync(misc_path)){
    fs.mkdir(misc_path,(err)=>{});
}

let doc_exts = ["pdf", "docx", "doc", "ppt", "xls", "ccv"];
let media_exts = ["mp3", "mp4", "mov", "mkv"];
let img_exts = ["jpg", "png", "gif"];

fs.readdir(base_dir, (err, files) => {
    if (err) {
        console.log(err);
    }
    else {
        for (const file of files) {
            let extension = file.split('.').pop();
            if(doc_exts.includes(extension)){
                fs.copyFile(base_dir + file,doc_path  + file,()=>{console.log("Doc file copied");})
            }
            else if (media_exts.includes(extension)){
                fs.copyFile(base_dir + file,media_path+ file,()=>{console.log("Doc file copied");})
            }
            else if (img_exts.includes(extension)){
                fs.copyFile(base_dir + file,img_path + file,()=>{console.log("Doc file copied");})
            }
            else{
                fs.copyFile(base_dir+ file,misc_path+ file,()=>{console.log("Doc file copied");})
            }
        }
    }
})