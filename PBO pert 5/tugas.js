class Kapal {
  constructor(nama, jenis, panjang, lebar) {
    this.nama = nama;
    this.jenis = jenis;
    this.panjang = panjang;
    this.lebar = lebar;
  }

  infoKapal() {
    return `Kapal ${this.nama} merupakan jenis ${this.jenis} yang berukuran ${this.panjang}m x ${this.lebar}m.`;
  }
}

class KapalAngkut extends Kapal {
  constructor(nama, jenis, panjang, lebar, kapasitasAngkut) {
    super(nama, jenis, panjang, lebar);
    this.kapasitasAngkut = kapasitasAngkut;
  }

  infoKapal() {
    return `${super.infoKapal()} Kapal ini memiliki kapasitas angkut sebesar ${
      this.kapasitasAngkut
    } ton.`;
  }
}

class KapalKargo extends KapalAngkut {
  constructor(nama, panjang, lebar, kapasitasAngkut) {
    super(nama, "Kargo", panjang, lebar, kapasitasAngkut);
  }
}

class KapalTanker extends KapalAngkut {
  constructor(nama, panjang, lebar, kapasitasAngkut) {
    super(nama, "Tanker", panjang, lebar, kapasitasAngkut);
  }
}

class KapalCepat extends Kapal {
  constructor(nama, jenis, panjang, lebar, kecepatanMaksimal) {
    super(nama, jenis, panjang, lebar);
    this.kecepatanMaksimal = kecepatanMaksimal;
  }

  infoKapal() {
    return `${super.infoKapal()} Kapal ini memiliki kecepatan maksimal ${
      this.kecepatanMaksimal
    } knot.`;
  }
}

class KapalPatroli extends KapalCepat {
  constructor(nama, panjang, lebar, kecepatanMaksimal) {
    super(nama, "Patroli", panjang, lebar, kecepatanMaksimal);
  }
}

class KapalPenumpangCepat extends KapalCepat {
  constructor(nama, panjang, lebar, kecepatanMaksimal) {
    super(nama, "Penumpang Cepat", panjang, lebar, kecepatanMaksimal);
  }
}

class KapalSelam extends Kapal {
  constructor(nama, jenis, panjang, lebar, kedalamanMaksimal) {
    super(nama, jenis, panjang, lebar);
    this.kedalamanMaksimal = kedalamanMaksimal;
  }

  infoKapal() {
    return `${super.infoKapal()} Kapal ini dapat menyelam hingga kedalaman ${
      this.kedalamanMaksimal
    } meter.`;
  }
}

class KapalSelamMiliter extends KapalSelam {
  constructor(nama, panjang, lebar, kedalamanMaksimal) {
    super(nama, "Selam Militer", panjang, lebar, kedalamanMaksimal);
  }
}

class KapalSelamEksplorasi extends KapalSelam {
  constructor(nama, panjang, lebar, kedalamanMaksimal) {
    super(nama, "Selam Eksplorasi", panjang, lebar, kedalamanMaksimal);
  }
}

class KapalPenumpang extends Kapal {
  constructor(nama, panjang, lebar, kapasitasPenumpang) {
    super(nama, "Penumpang", panjang, lebar);
    this.kapasitasPenumpang = kapasitasPenumpang;
  }

  infoKapal() {
    return `${super.infoKapal()} Kapal ini dapat membawa ${
      this.kapasitasPenumpang
    } penumpang.`;
  }
}

class KapalFerry extends KapalPenumpang {
  constructor(nama, panjang, lebar, kapasitasPenumpang) {
    super(nama, panjang, lebar, kapasitasPenumpang);
  }
}

class KapalPesiar extends KapalPenumpang {
  constructor(nama, panjang, lebar, kapasitasPenumpang) {
    super(nama, panjang, lebar, kapasitasPenumpang);
  }
}

function cetakInfoKapal(kapal) {
  console.log(kapal.infoKapal());
}

const kapalKargo = new KapalKargo("Laju Nusantara", 300, 80, 1500);
const kapalTanker = new KapalTanker("Oil Master", 400, 60, 200000);
const kapalPatroli = new KapalPatroli("Sea Hawk", 50, 15, 60);
const kapalPenumpangCepat = new KapalPenumpangCepat("Fast Ferry", 100, 20, 45);
const kapalSelamMiliter = new KapalSelamMiliter("Poseidon", 150, 30, 500);
const kapalSelamEksplorasi = new KapalSelamEksplorasi("Explorer", 100, 20, 300);
const kapalFerry = new KapalFerry("Budiyono Siregar", 200, 100, 600);
const kapalPesiar = new KapalPesiar("Royal Caribbean", 350, 120, 3000);

cetakInfoKapal(kapalKargo);
cetakInfoKapal(kapalTanker);
cetakInfoKapal(kapalPatroli);
cetakInfoKapal(kapalPenumpangCepat);
cetakInfoKapal(kapalSelamMiliter);
cetakInfoKapal(kapalSelamEksplorasi);
cetakInfoKapal(kapalFerry);
cetakInfoKapal(kapalPesiar);
