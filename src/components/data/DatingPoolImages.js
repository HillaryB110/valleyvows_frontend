function getImagesForDatingPool(firstname) {
  let baseUrl = process.env.PUBLIC_URL;
  let urlPNG = `${baseUrl}/Valleyvows-character-assets/${firstname}_neutral.png`;

  if (urlPNG) {
    console.log(urlPNG);
    return urlPNG;
  }
}

export { getImagesForDatingPool };
