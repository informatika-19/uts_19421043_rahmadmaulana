const mongoose = require('mongoose')
const Schema = mongoose.Schema

const penjualanSchema = new Schema({
    Merk: {
        type: String
    },
    Ukuran: {
        type: String
    },
    Warna: {
        type: String
    },
    Harga: {
        type: String
    },
    Status: {
        type: String
    }
    
}) 

module.exports = mongoose.model('penjualan', penjualanSchema)