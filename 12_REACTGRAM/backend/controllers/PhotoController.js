const Photo = require("../models/Photo");
const User = require("../models/User");

const mongoose = require("mongoose");

// Insira uma foto com usuario relacionado a ela

const insertPhoto = async (req, res) => {
  const { title } = req.body;
  const image = req.file.filename;

  const reqUser = req.user;
  const user = await User.findById(reqUser._id);
  //createfoto
  const newPhoto = await Photo.create({
    image,
    title,
    userId: user._id,
    userName: user.name,
  });

  //Verificar se foto foi criado com sucesso, return data
  if (!newPhoto) {
    res
      .status(422)
      .json({ errors: ["Houve um problema, por favor tente mais tarde "] });

    return;
  }

  res.status(201).json(newPhoto);
};

//remove Photo from db

const deletePhoto = async (req, res) => {
  const { id } = req.params;

  const reqUser = req.user;

  try {
    const { ObjectId } = mongoose.Types;
    const photo = await Photo.findById(id);
    // const photo = await Photo.findById(mongoose.Types.ObjectId(id));
    //checar se a foto existe

    if (!photo) {
      res.status(404).json({ errors: ["Foto não existe."] });
      return;
    }

    //checar se a foto pertence ao usuário
    if (!photo.userId.equals(reqUser._id)) {
      res.status(422).json({ errors: ["Ocorreu um erro tente novamente "] });
    }
    await Photo.findByIdAndDelete(photo._id);

    res
      .status(200)
      .json({ id: photo._id, message: "Foto Excluida com Sucesso " });
  } catch (error) {
    res.status(404).json({ errors: ["Foto não encontrada."] });
    return;
  }
};

// Pegar todas as fotos do sistema

const getAllPhotos = async (req, res) => {
  const photos = await Photo.find({})
    .sort([["createdAt", -1]])
    .exec();

  return res.status(200).json(photos);
};

// pegar minhas fotos

const getUserPhotos = async (req, res) => {
  const { id } = req.params;

  const photos = await Photo.find({ userId: id })
    .sort([["createdAt", -1]])
    .exec();

  return res.status(200).json(photos);
};

//Get photo by id

const getPhotoById = async (req, res) => {
  const { id } = req.params;

  const { ObjectId } = mongoose.Types;
  const photo = await Photo.findById(id);

  //checar se foto existe

  if (!photo) {
    res.status(404).json({ errors: ["Foto não encontrada"] });
    return;
  }

  res.status(200).json(photo);
};

// update photo

const updatePhoto = async (req, res) => {
  const { id } = req.params;

  const { title } = req.body;

  const reqUser = req.user;

  const photo = await Photo.findById(id);

  //checar se foto existe
  if (!photo) {
    res.status(404).json({ errors: ["Foto não encontrada"] });
    return;
  }
  //checar se foto pertence ao usuario
  if (!photo.userId.equals(reqUser._id)) {
    res.status(422).json({
      errors: ["Ocorreu um erro por favor tente novamente mais tarde"],
    });
    return;
  }

  if (title) {
    photo.title = title;
  }

  await photo.save();

  res.status(200).json({ photo, message: " Foto atualizada com sucesso" });
};

// função likes

const likePhoto = async (req, res) => {
  const { id } = req.params;

  const reqUser = req.user;

  const photo = await Photo.findById(id);
  //checar se foto existe
  if (!photo) {
    res.status(404).json({ errors: ["Foto não encontrada"] });
    return;
  }

  // se ele ja deu like

  if (photo.likes.includes(reqUser._id)) {
    res.status(422).json({ errors: ["Você ja curtiu a foto"] });
    return;
  }

  // Colocar Id do usuario no array

  photo.likes.push(reqUser._id);

  photo.save();

  res
    .status(200)
    .json({ photoId: id, userId: reqUser._id, message: "A foto foi curtida" });
};

// cunção comentarios na foto

const commentPhoto = async (req, res) => {
  const { id } = req.params;

  const { comment } = req.body;

  const reqUser = req.user;

  const user = await User.findById(reqUser._id);

  const photo = await Photo.findById(id);

  if (!photo) {
    res.status(404).json({ errors: ["Foto não encontrada"] });
    return;
  }

  //put comment in the array coments

  const userComment = {
    comment,
    userName: user.name,
    userImage: user.profileImage,
    userId: user._id,
  };

  photo.comments.push(userComment);

  await photo.save();

  res.status(200).json({
    comment: userComment,
    message: "O comentario foi adicionado com sucesso",
  });
};

//search photo by title

const searchPhotos = async (req, res) => {
  const { q } = req.query;

  const photos = await Photo.find({ title: new RegExp(q, "i") }).exec();

  res.status(200).json(photos);
};

module.exports = {
  insertPhoto,
  deletePhoto,
  getAllPhotos,
  getUserPhotos,
  getPhotoById,
  updatePhoto,
  likePhoto,
  commentPhoto,
  searchPhotos,
};
