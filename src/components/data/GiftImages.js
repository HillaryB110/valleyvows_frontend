function getImagesForGifts(id) {
  

  let baseUrl = process.env.PUBLIC_URL;
  let urlPNG = `${baseUrl}/bestgifts_assets/${id}.png`;

  if (urlPNG) {
    console.log(urlPNG);
    return urlPNG;
  }
}

export { getImagesForGifts };
