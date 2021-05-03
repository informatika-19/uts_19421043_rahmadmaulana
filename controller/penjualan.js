const penjualanModel = require('../model/penjualan')
const objectId = require('mongoose').Types.ObjectId

exports.create = (data) =>
new Promise((resolve, reject) => {
    penjualanModel.create(data)
    .then(() => resolve({
        status: true,
        pesan: 'BERHASIL INPUT DATA'
    })).catch(() => reject({
        status: false,
        pesan: 'GAGAL INPUT DATA'
    }))
})

exports.showALLData = () =>
new Promise ((resolve, reject) => {
    penjualanModel.find()
    .then(result => {
        resolve({
            status: true,
            pesan : 'Berhasil menampilkan data',
            data : result
        })
    }).catch((err) => {
        console.log(err)
        reject ({
            status : false,
            pesan: 'gagal menampilkan data',
            data : []
        })
    })

})

exports.showALLDataById = (id) =>
new Promise((resolve, reject) => {
    try  {
        penjualanModel.findOne({
            _id: objectId(id)
        })
            .then(result => {
                resolve({
                    status: true,
                    pesan : 'Berhasil menampilkan data',
                    data : result
                })
        }).catch((err) => {
            console.log(err)
            reject ({
                status : false,
                pesan: 'gagal menampilkan data',
                data : null
            })
        })
    } catch (e) {
        console.log(e)
    }
})

exports.update = (id, data) =>
new Promise ((resolve, reject) => {
    penjualanModel.updateOne({
        _id : objectId(id)
    },data).then(() => resolve({
        status : true,
        pesan : 'Berhasil Mengubah Data'
    })).catch(() => reject ({
        status : false,
        pesan : 'Gagal Mengubah Data'
    }))
})

exports.delete = (id) =>
new Promise ((resolve, reject) => {
    penjualanModel.deleteOne({
        _id: objectId (id)
    }).then(() => resolve({
        status : true,
        pesan : 'Berhasil Menghapus Data'
    })).catch(() => ({
        status : false,
        pesan: 'Gagal Menghapus Data'
    }))
})