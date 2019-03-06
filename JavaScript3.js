var hari = '30 '
var bulan = '10'
var tahun = '2201'

if (hari > 0 &&  hari < 32 && bulan > 0 && bulan < 13 && tahun > 1989 && tahun < 2201){
	switch (bulan) {
	case '1' :
	console.log(hari + 'Januari ' + tahun)
	break
	case '2' :
	console.log(hari + 'Februari ' + tahun)
	break
	case '3' :
	console.log(hari + 'Maret ' + tahun)
	break
	case '4' :
	console.log(hari + 'April ' + tahun)
	break
	case '5' :
	console.log(hari + 'Mei ' + tahun)
	break
	case '6' :
	console.log(hari + 'Juni ' + tahun)
	break
	case '7' :
	console.log(hari + 'Juli ' + tahun)
	break
	case '8' :
	console.log(hari + 'Agustus ' + tahun)
	break
	case '9' :
	console.log(hari + 'Septempber ' + tahun)
	break
	case '10' :
	console.log(hari + 'Oktober ' + tahun)
	break
	case '11' :
	console.log(hari + 'November ' + tahun)
	break
	case '12' :
	console.log(hari + 'Desember ' + tahun)
	break
}
} else{
	console.log('Tanggal tidak tersedia!')
}

/*
	*/
