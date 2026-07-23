// ============================================
// DATA SAHAM INDONESIA (CONTOH - 10 SAHAM POPULER)
// Nanti kita akan ganti dengan data API nyata
// ============================================

const dataSaham = {
    "BBRI": {
        nama: "Bank Rakyat Indonesia",
        harga: 5420,
        per: 12.5,
        pbv: 1.8,
        roe: 18.2,
        eps: 434,
        sector: "Perbankan"
    },
    "TLKM": {
        nama: "Telkom Indonesia",
        harga: 3850,
        per: 15.3,
        pbv: 2.1,
        roe: 13.7,
        eps: 252,
        sector: "Telekomunikasi"
    },
    "ASII": {
        nama: "Astra International",
        harga: 6025,
        per: 9.8,
        pbv: 1.5,
        roe: 15.4,
        eps: 615,
        sector: "Otomotif"
    },
    "BBCA": {
        nama: "Bank Central Asia",
        harga: 8750,
        per: 18.2,
        pbv: 3.2,
        roe: 19.5,
        eps: 481,
        sector: "Perbankan"
    },
    "UNVR": {
        nama: "Unilever Indonesia",
        harga: 3200,
        per: 22.1,
        pbv: 25.8,
        roe: 116.5, // tinggi karena ekuitas kecil
        eps: 145,
        sector: "Konsumen"
    },
    "BMRI": {
        nama: "Bank Mandiri",
        harga: 6150,
        per: 10.5,
        pbv: 1.4,
        roe: 13.2,
        eps: 586,
        sector: "Perbankan"
    },
    "PGAS": {
        nama: "Perusahaan Gas Negara",
        harga: 1325,
        per: 6.2,
        pbv: 0.6,
        roe: 9.8,
        eps: 214,
        sector: "Energi"
    },
    "INDF": {
        nama: "Indofood",
        harga: 6125,
        per: 11.8,
        pbv: 1.9,
        roe: 16.1,
        eps: 519,
        sector: "Konsumen"
    },
    "KLBF": {
        nama: "Kalbe Farma",
        harga: 1320,
        per: 16.5,
        pbv: 2.8,
        roe: 16.9,
        eps: 80,
        sector: "Farmasi"
    },
    "PTBA": {
        nama: "Bukit Asam",
        harga: 2280,
        per: 5.4,
        pbv: 1.1,
        roe: 20.3,
        eps: 422,
        sector: "Energi"
    }
};

// ============================================
// FUNGSI UTAMA: ANALISA SAHAM
// ============================================

function analisaSaham() {
    // 1. Ambil kode saham dari input
    const input = document.getElementById('kodeSaham');
    const kode = input.value.toUpperCase().trim();
    
    // 2. Tampilkan loading
    const loading = document.getElementById('loading');
    const hasil = document.getElementById('hasil');
    
    loading.style.display = 'block';
    hasil.style.display = 'none';
    
    // 3. Simulasi "loading" selama 1 detik (seperti sedang ambil data)
    setTimeout(() => {
        loading.style.display = 'none';
        
        // 4. Cek apakah saham ada di database kita
        if (!dataSaham[kode]) {
            alert('❌ Kode saham tidak ditemukan!\n\nCoba salah satu ini:\nBBRI, TLKM, ASII, BBCA, UNVR, BMRI, PGAS, INDF, KLBF, PTBA');
            return;
        }
        
        // 5. Ambil data saham
        const saham = dataSaham[kode];
        
        // 6. Tampilkan data ke layar
        document.getElementById('namaSaham').textContent = `- ${saham.nama} (${kode})`;
        document.getElementById('harga').textContent = `Rp ${saham.harga.toLocaleString('id-ID')}`;
        document.getElementById('per').textContent = `${saham.per}x (PER < 15 = murah)`;
        document.getElementById('pbv').textContent = `${saham.pbv}x (PBV < 2 = murah)`;
        document.getElementById('roe').textContent = `${saham.roe}% (ROE > 15% = bagus)`;
        document.getElementById('eps').textContent = `Rp ${saham.eps}`;
        
        // 7. HITUNG SKOR FUNDAMENTAL (0-100)
        let skor = 0;
        
        // Skor dari PER (maks 25 poin)
        // PER < 10 = 25 poin, PER 10-15 = 20 poin, PER 15-20 = 15 poin, PER 20-25 = 10 poin, PER > 25 = 5 poin
        if (saham.per < 10) skor += 25;
        else if (saham.per < 15) skor += 20;
        else if (saham.per < 20) skor += 15;
        else if (saham.per < 25) skor += 10;
        else skor += 5;
        
        // Skor dari PBV (maks 25 poin)
        if (saham.pbv < 1) skor += 25;
        else if (saham.pbv < 2) skor += 20;
        else if (saham.pbv < 3) skor += 15;
        else if (saham.pbv < 4) skor += 10;
        else skor += 5;
        
        // Skor dari ROE (maks 30 poin)
        if (saham.roe > 20) skor += 30;
        else if (saham.roe > 15) skor += 25;
        else if (saham.roe > 10) skor += 20;
        else if (saham.roe > 5) skor += 10;
        else skor += 5;
        
        // Skor dari EPS (maks 20 poin - dibanding harga)
        const epsRatio = saham.eps / saham.harga * 100; // EPS / Harga
        if (epsRatio > 10) skor += 20;
        else if (epsRatio > 7) skor += 15;
        else if (epsRatio > 5) skor += 10;
        else if (epsRatio > 3) skor += 5;
        else skor += 0;
        
        // 8. Tampilkan skor
        document.getElementById('skorAngka').textContent = skor;
        
        const scoreBox = document.getElementById('scoreBox');
        const skorKategori = document.getElementById('skorKategori');
        const rekomendasi = document.getElementById('rekomendasi');
        
        // Tentukan kategori dan rekomendasi
        if (skor >= 80) {
            scoreBox.className = 'score-box score-bagus';
            skorKategori.textContent = '🟢 FUNDAMENTAL SANGAT BAGUS';
            rekomendasi.className = 'rekomendasi beli';
            rekomendasi.textContent = '⭐ REKOMENDASI: BELI';
        } else if (skor >= 60) {
            scoreBox.className = 'score-box score-cukup';
            skorKategori.textContent = '🟡 FUNDAMENTAL CUKUP BAGUS';
            rekomendasi.className = 'rekomendasi tahan';
            rekomendasi.textContent = '⚠️ REKOMENDASI: TAHAN / PERHATIKAN';
        } else {
            scoreBox.className = 'score-box score-buruk';
            skorKategori.textContent = '🔴 FUNDAMENTAL LEMAH';
            rekomendasi.className = 'rekomendasi jual';
            rekomendasi.textContent = '❌ REKOMENDASI: JUAL / HINDARI';
        }
        
        // 9. Tampilkan hasil
        hasil.style.display = 'block';
        
    }, 1000); // 1 detik delay
}

// Biar bisa tekan Enter di keyboard
document.getElementById('kodeSaham').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        analisaSaham();
    }
});