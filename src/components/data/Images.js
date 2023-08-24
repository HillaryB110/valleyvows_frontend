function getImagesForUserAvatars(user){
let gender = user.gender
let variant = user.variant


let baseUrl =process.env.PUBLIC_URL;
let urlPNG = `${baseUrl}userprofile_Avatar/${gender}_Avatar${variant}.png`;

if (urlPNG) {
    console.log(urlPNG)
    return urlPNG;
}
}

export {getImagesForUserAvatars}
 
 