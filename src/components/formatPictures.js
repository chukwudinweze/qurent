
// converts Filelist object from multiple input file type to an array
const formatPictures = (pictures) => {
  let fileLists = [];
  for (let i = 0; i < pictures.length; i++) {
    let file = pictures[i];
    fileLists = [...fileLists, file];
  }
  return fileLists;
}

export default formatPictures
