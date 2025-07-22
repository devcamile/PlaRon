const mongoose = require('mongoose');

const conectDB =  async () => {
    try{
        await mongoose.conect(ProcessingInstruction.env.MONGO_URI);
        console.log('✅ MongoDB conectado');
    }
    catch (error) {
        console.error('Error ao conectar ao MongoDB', error);
    process.exit(1);
    }
};
module.exports = conectDB;