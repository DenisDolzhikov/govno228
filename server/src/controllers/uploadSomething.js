const uploadController = (req, res) => {
  let filedata = req.file;
  console.log(filedata);
  
  if (!filedata) {
    console.log('ошибка');
  } 

  console.log('Файл загружен');
}

export default uploadController;