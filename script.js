var tanya = true;
while (tanya) {
    // menentukan pilihan player
    var player = prompt('Pilih salah satu :\nGajah, Semut, Orang');
    // menentukan pilihan comp
    var comp = Math.random();
    var hasil = '';
    if (comp < 0.34) {
        comp = 'orang';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'semut';
    } else {
        comp = 'gajah';
    }
    // menentukan rules
    if (comp == player) {
        hasil = 'SERI!';
    } else if (player == 'gajah') {
        hasil = (comp == 'orang') ? 'MENANG' : 'KALAH';
    } else if (player == 'orang') {
        hasil = (comp == 'semut') ? 'MENANG' : 'KALAH';
    } else if (player == 'semut') {
        hasil = (comp == 'gajah') ? 'MENANG' : 'KALAH';
    } else {
        hasil = 'MOHON MASUKKAN JAWABAN YANG BENAR';
    }
    alert('Kamu memilih : ' + player + ' dan Computer memilih : ' + comp + ' Maka hasilnya kamu ' + hasil);
    tanya = confirm('Coba lagi?');
}
alert('Terimakasih sudah bermain...');