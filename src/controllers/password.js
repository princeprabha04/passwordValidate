const mongoose = require('mongoose');

const getPasswords = async (request, response) => {
    try {
        const UserModel = mongoose.model('user');
        const user = await UserModel.find({});
        return response.status(200).send(user);
    } catch (e) {
        console.log(e);
        return response.status(500).send({error: true, message:'Internal server error!'});
    }
};

const postPassword = async (request, response) =>{
    try{
        const UserModel = mongoose.model('user');
        const data = new UserModel(request.body);
        await data.save();
        return response.status(200).send({ message: 'User Sucess!!!'});

    } catch(e){
        console.log(e);
        return response.status(500).send({error:true,message: 'Internal server error!!'});
    }
};

module.exports = {getPasswords, postPassword};
