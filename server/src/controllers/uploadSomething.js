function uploadController(req, res, next) {
  let filedata = req.file;
  console.log(filedata);
  
  if (!filedata) {
    res.send('Ошибка при загрузке файла');
  } 

  res.send('Файл загружен');
}

module.exports = uploadController;