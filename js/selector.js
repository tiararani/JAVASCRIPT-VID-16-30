const hari = 6;
let hasil;

switch (hari) {
    case 1:
        hasil = "minggu";
        break;
        case 2:
            hasil = "senin";
            break;
            case 3:
                hasil = "selasa";
                break;
                case 4:
                    hasil = "rabu";
                    break;
                    case 5:
                        hasil = "kamis";
                        break;
                        case 6:
                            hasil = "jumat";
                            break;
                            case 7:
                                hasil = "sabtu";
                                break;
        
    default:
        hasil = "hari tidak ada";
        break;
}

console.log(hasil);
const bln = "Maret";
let bulan;

switch (bln) {
    case "Januari":
        bulan = 1;
        break;
            case "Februari":
                bulan = 2;
                break;
                    case "Maret":
                        bulan = 3;
                        break;
                            case "April":
        bulan = 4;
        break;
    
    default:
        bulan = "Bulan belum dibuat";
        break;
}

console.log(bulan)