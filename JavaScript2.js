var nama = ''
var peran = ''

  if (nama === ''){
  	console.log('Nama harus diisi!')
}
  else if (nama === 'Mikael'){
	console.log('Halo Mikael, Pilih Peranmu untuk memulai game!')
} else if(nama === 'Nina'){
	console.log('Selamat datang di Dunia Proxytia, Nina')
	peran = 'Ksatria'
	console.log('Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!')
} else if(nama === 'Danu'){
	console.log('Selamat datang di Dunia Proxytia, Danu')
	peran = 'Tabib'
	console.log('Halo Tabib Danu, kamu akan membantu temanmu yang terluka.')
} else if(nama === 'Zero'){
	console.log('Selamat datang di Dunia Proxytia, Zero')
	peran = 'Penyihir'
	console.log('Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!')
}

