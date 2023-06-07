const SeleksiNilai =(nilaiAwal, nilaiAkhir, dataArray,callback) => {
    try{
        if(typeof nilaiAwal != "number" || typeof nilaiAkhir != "number") throw "tipe data harus number"
        if(nilaiAkhir < nilaiAwal) throw "Nilai akhir harus lebih besar dari nilai awal"
        if(dataArray.length < 5) throw "Jumlah angka dalam dataArray harus lebih dari 5"
        let filtering = dataArray.filter((a) => a >= nilaiAwal && a <= nilaiAkhir)
        let result = filtering.sort((a, b) => a - b)
        if(result.length < 1)throw 'Nilai tidak ditemukan'
        callback(result)
    }catch(error){
        console.log(error)
    }
    
}


const callback = (callback) => { 
    console.log(callback)
}
SeleksiNilai("sa","saa", ['sasa'],callback)
SeleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8],callback)
SeleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8],callback)
SeleksiNilai(5, 17 , [2, 25, 4],callback)
SeleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18],callback)
