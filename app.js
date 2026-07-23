// ============================================
// KONFIGURASI API (TANPA API KEY - GRATIS!)
// ============================================

// Yahoo Finance API (gratis, tidak perlu key)
const YAHOO_API = "https://query1.finance.yahoo.com/v8/finance/chart/";
const YAHOO_QUOTE = "https://query1.finance.yahoo.com/v7/finance/quote";

// ============================================
// DATABASE FUNDAMENTAL MANUAL (100+ SAHAM)
// Data ini akan di-update secara berkala
// ============================================

const fundamentalDB = {
    // PERBANKAN
    "BBRI": { nama: "Bank Rakyat Indonesia", sektor: "Perbankan", roe: 18.2, eps: 434, debtEquity: 0.85, currentRatio: 1.2 },
    "BBCA": { nama: "Bank Central Asia", sektor: "Perbankan", roe: 19.5, eps: 481, debtEquity: 0.72, currentRatio: 1.3 },
    "BMRI": { nama: "Bank Mandiri", sektor: "Perbankan", roe: 13.2, eps: 586, debtEquity: 1.05, currentRatio: 1.1 },
    "BBNI": { nama: "Bank Negara Indonesia", sektor: "Perbankan", roe: 12.8, eps: 398, debtEquity: 0.95, currentRatio: 1.15 },
    "BRIS": { nama: "Bank Syariah Indonesia", sektor: "Perbankan", roe: 8.5, eps: 156, debtEquity: 1.2, currentRatio: 1.0 },
    
    // TELEKOMUNIKASI
    "TLKM": { nama: "Telkom Indonesia", sektor: "Telekomunikasi", roe: 13.7, eps: 252, debtEquity: 0.65, currentRatio: 1.4 },
    "EXCL": { nama: "XL Axiata", sektor: "Telekomunikasi", roe: 5.2, eps: 89, debtEquity: 1.8, currentRatio: 0.9 },
    "ISAT": { nama: "Indosat Ooredoo", sektor: "Telekomunikasi", roe: 8.9, eps: 145, debtEquity: 1.1, currentRatio: 1.1 },
    
    // OTOMOTIF
    "ASII": { nama: "Astra International", sektor: "Otomotif", roe: 15.4, eps: 615, debtEquity: 0.55, currentRatio: 1.5 },
    "IMAS": { nama: "Indomobil Sukses", sektor: "Otomotif", roe: 7.8, eps: 234, debtEquity: 1.3, currentRatio: 1.0 },
    
    // KONSUMEN
    "UNVR": { nama: "Unilever Indonesia", sektor: "Konsumen", roe: 116.5, eps: 145, debtEquity: 2.1, currentRatio: 0.8 },
    "INDF": { nama: "Indofood Sukses Makmur", sektor: "Konsumen", roe: 16.1, eps: 519, debtEquity: 0.75, currentRatio: 1.3 },
    "ICBP": { nama: "Indofood CBP", sektor: "Konsumen", roe: 14.2, eps: 312, debtEquity: 0.6, currentRatio: 1.4 },
    "MYOR": { nama: "Mayora Indah", sektor: "Konsumen", roe: 18.5, eps: 89, debtEquity: 0.45, currentRatio: 1.6 },
    "GGRM": { nama: "Gudang Garam", sektor: "Konsumen", roe: 12.3, eps: 678, debtEquity: 0.35, currentRatio: 1.8 },
    "HMSP": { nama: "HM Sampoerna", sektor: "Konsumen", roe: 45.2, eps: 234, debtEquity: 0.9, currentRatio: 1.2 },
    "MBTO": { nama: "Martina Berto", sektor: "Konsumen", roe: 6.5, eps: 45, debtEquity: 0.8, currentRatio: 1.5 },
    
    // ENERGI
    "PTBA": { nama: "Bukit Asam", sektor: "Energi", roe: 20.3, eps: 422, debtEquity: 0.25, currentRatio: 2.1 },
    "ADRO": { nama: "Adaro Energy", sektor: "Energi", roe: 15.8, eps: 356, debtEquity: 0.4, currentRatio: 1.8 },
    "ITMG": { nama: "Indo Tambangraya", sektor: "Energi", roe: 22.1, eps: 512, debtEquity: 0.2, currentRatio: 2.3 },
    "ANTM": { nama: "Aneka Tambang", sektor: "Energi", roe: 12.5, eps: 189, debtEquity: 0.55, currentRatio: 1.6 },
    "TINS": { nama: "Timah", sektor: "Energi", roe: 8.9, eps: 156, debtEquity: 0.7, currentRatio: 1.4 },
    "PGAS": { nama: "Perusahaan Gas Negara", sektor: "Energi", roe: 9.8, eps: 214, debtEquity: 0.85, currentRatio: 1.3 },
    "ESSA": { nama: "Surya Esa Perkasa", sektor: "Energi", roe: 11.2, eps: 178, debtEquity: 0.6, currentRatio: 1.5 },
    
    // PROPERTI
    "PWON": { nama: "Pakuwon Jati", sektor: "Properti", roe: 8.5, eps: 45, debtEquity: 1.2, currentRatio: 1.0 },
    "SMRA": { nama: "Summarecon Agung", sektor: "Properti", roe: 7.2, eps: 67, debtEquity: 1.5, currentRatio: 0.9 },
    "CTRA": { nama: "Ciputra Development", sektor: "Properti", roe: 6.8, eps: 34, debtEquity: 1.8, currentRatio: 0.8 },
    "BSDE": { nama: "Bumi Serpong Damai", sektor: "Properti", roe: 5.5, eps: 23, debtEquity: 2.1, currentRatio: 0.7 },
    "APLN": { nama: "Agung Podomoro", sektor: "Properti", roe: 4.2, eps: 12, debtEquity: 2.5, currentRatio: 0.6 },
    
    // FARMASI
    "KLBF": { nama: "Kalbe Farma", sektor: "Farmasi", roe: 16.9, eps: 80, debtEquity: 0.35, currentRatio: 1.9 },
    "SIDO": { nama: "Industri Jamu & Farmasi", sektor: "Farmasi", roe: 14.5, eps: 45, debtEquity: 0.4, currentRatio: 1.7 },
    "KAEF": { nama: "Kimia Farma", sektor: "Farmasi", roe: 5.8, eps: 12, debtEquity: 1.2, currentRatio: 1.0 },
    "PEHA": { nama: "Phapros", sektor: "Farmasi", roe: 8.2, eps: 23, debtEquity: 0.6, currentRatio: 1.5 },
    
    // INFRASTRUKTUR
    "JSMR": { nama: "Jasa Marga", sektor: "Infrastruktur", roe: 7.5, eps: 89, debtEquity: 1.8, currentRatio: 0.8 },
    "CMNP": { nama: "Citra Marga Nusaphala", sektor: "Infrastruktur", roe: 9.2, eps: 56, debtEquity: 1.3, currentRatio: 1.0 },
    "META": { nama: "Nusantara Infrastructure", sektor: "Infrastruktur", roe: 4.5, eps: 12, debtEquity: 2.2, currentRatio: 0.6 },
    
    // PERKEBUNAN
    "AALI": { nama: "Astra Agro Lestari", sektor: "Perkebunan", roe: 12.5, eps: 234, debtEquity: 0.5, currentRatio: 1.4 },
    "LSIP": { nama: "Perusahaan Perkebunan London", sektor: "Perkebunan", roe: 9.8, eps: 156, debtEquity: 0.7, currentRatio: 1.2 },
    "SMAR": { nama: "Sinar Mas Agribusiness", sektor: "Perkebunan", roe: 11.2, eps: 189, debtEquity: 0.6, currentRatio: 1.3 },
    
    // TEKNOLOGI
    "BELI": { nama: "Global Digital Niaga", sektor: "Teknologi", roe: 3.5, eps: -45, debtEquity: 0.3, currentRatio: 2.5 },
    "DOOH": { nama: "Era Media Sejahtera", sektor: "Teknologi", roe: 5.2, eps: 12, debtEquity: 0.8, currentRatio: 1.4 },
    "NFCX": { nama: "NFC Indonesia", sektor: "Teknologi", roe: 2.1, eps: 5, debtEquity: 0.5, currentRatio: 1.8 },
    
    // PERDAGANGAN
    "MNCN": { nama: "Media Nusantara Citra", sektor: "Media", roe: 15.2, eps: 234, debtEquity: 0.4, currentRatio: 1.6 },
    "SCMA": { nama: "Surya Citra Media", sektor: "Media", roe: 12.8, eps: 189, debtEquity: 0.5, currentRatio: 1.5 },
    "EMTK": { nama: "Elang Mahkota Teknologi", sektor: "Media", roe: 8.5, eps: 67, debtEquity: 0.7, currentRatio: 1.3 },
    
    // KIMIA
    "BRPT": { nama: "Barito Pacific", sektor: "Kimia", roe: 11.5, eps: 123, debtEquity: 0.8, currentRatio: 1.2 },
    "TPIA": { nama: "Chandra Asri Pacific", sektor: "Kimia", roe: 9.8, eps: 89, debtEquity: 1.1, currentRatio: 1.0 },
    "INKP": { nama: "Indah Kiat Pulp & Paper", sektor: "Kimia", roe: 8.5, eps: 234, debtEquity: 1.3, currentRatio: 0.9 },
    "SPMA": { nama: "Surya Pertiwi Nusantara", sektor: "Kimia", roe: 6.2, eps: 45, debtEquity: 1.5, currentRatio: 0.8 },
    
    // LOGISTIK
    "SMDR": { nama: "Samudera Indonesia", sektor: "Logistik", roe: 14.2, eps: 89, debtEquity: 0.6, currentRatio: 1.4 },
    "IPCM": { nama: "Jasa Armada Indonesia", sektor: "Logistik", roe: 10.5, eps: 56, debtEquity: 0.8, currentRatio: 1.2 },
    
    // KONSTRUKSI
    "WSKT": { nama: "Waskita Karya", sektor: "Konstruksi", roe: -15.2, eps: -234, debtEquity: 3.5, currentRatio: 0.5 },
    "WIKA": { nama: "Wijaya Karya", sektor: "Konstruksi", roe: -8.5, eps: -123, debtEquity: 2.8, currentRatio: 0.6 },
    "ADHI": { nama: "Adhi Karya", sektor: "Konstruksi", roe: -5.2, eps: -67, debtEquity: 2.5, currentRatio: 0.7 },
    "PTPP": { nama: "PP Persero", sektor: "Konstruksi", roe: -3.8, eps: -45, debtEquity: 2.2, currentRatio: 0.8 },
    
    // ASURANSI
    "ASRI": { nama: "Asuransi Bintang", sektor: "Asuransi", roe: 8.5, eps: 34, debtEquity: 1.2, currentRatio: 1.1 },
    "MREI": { nama: "Maskapai Reasuransi", sektor: "Asuransi", roe: 6.8, eps: 23, debtEquity: 1.5, currentRatio: 0.9 },
    
    // PERDAGANGAN RETAIL
    "ACES": { nama: "Ace Hardware Indonesia", sektor: "Retail", roe: 12.5, eps: 89, debtEquity: 0.4, currentRatio: 1.6 },
    "ERAA": { nama: "Erajaya Swasembada", sektor: "Retail", roe: 9.8, eps: 67, debtEquity: 0.6, currentRatio: 1.4 },
    "LPPF": { nama: "Matahari Department Store", sektor: "Retail", roe: 7.2, eps: 45, debtEquity: 0.8, currentRatio: 1.2 },
    "MAPI": { nama: "Mitra Adiperkasa", sektor: "Retail", roe: 8.5, eps: 56, debtEquity: 0.7, currentRatio: 1.3 },
    
    // PERBANKAN DIGITAL
    "ARTO": { nama: "Bank Jago", sektor: "Fintech", roe: -25.5, eps: -89, debtEquity: 0.3, currentRatio: 2.8 },
    "BBHI": { nama: "Bank Harda International", sektor: "Fintech", roe: 5.2, eps: 12, debtEquity: 0.8, currentRatio: 1.5 },
    
    // PLN GROUP
    "PLN": { nama: "Perusahaan Listrik Negara", sektor: "Utilitas", roe: 6.5, eps: 45, debtEquity: 2.1, currentRatio: 0.8 },
    "PGN": { nama: "Perusahaan Gas Negara", sektor: "Utilitas", roe: 9.8, eps: 214, debtEquity: 0.85, currentRatio: 1.3 },
    
    // LAINNYA
    "CPIN": { nama: "Charoen Pokphand Indonesia", sektor: "Konsumen", roe: 14.5, eps: 312, debtEquity: 0.5, currentRatio: 1.5 },
    "MAIN": { nama: "Malindo Feedmill", sektor: "Konsumen", roe: 8.9, eps: 67, debtEquity: 0.7, currentRatio: 1.3 },
    "JPFA": { nama: "Japfa Comfeed", sektor: "Konsumen", roe: 11.2, eps: 89, debtEquity: 0.6, currentRatio: 1.4 },
    "SIPD": { nama: "Sreeya Sewu Indonesia", sektor: "Konsumen", roe: 7.5, eps: 34, debtEquity: 0.9, currentRatio: 1.2 },
    "RAJA": { nama: "Rukun Raharja", sektor: "Energi", roe: 10.2, eps: 78, debtEquity: 0.5, currentRatio: 1.5 },
    "BORN": { nama: "Borneo Lumbung Energy", sektor: "Energi", roe: 3.5, eps: -12, debtEquity: 1.8, currentRatio: 0.7 },
    "TAMU": { nama: "Pelayaran Tamarin", sektor: "Logistik", roe: 6.8, eps: 23, debtEquity: 1.1, currentRatio: 1.0 },
    "TRAM": { nama: "Trada Alam Minera", sektor: "Energi", roe: 2.1, eps: 5, debtEquity: 0.4, currentRatio: 1.8 },
    "GOLD": { nama: "Archi Indonesia", sektor: "Energi", roe: 15.8, eps: 234, debtEquity: 0.3, currentRatio: 2.0 },
    "MDKA": { nama: "Merdeka Copper Gold", sektor: "Energi", roe: 18.5, eps: 156, debtEquity: 0.4, currentRatio: 1.8 },
    "AMMN": { nama: "Amman Mineral", sektor: "Energi", roe: 22.1, eps: 312, debtEquity: 0.25, currentRatio: 2.2 },
    "BUMI": { nama: "Bumi Resources", sektor: "Energi", roe: 8.5, eps: 45, debtEquity: 2.5, currentRatio: 0.6 },
    "HRUM": { nama: "Harum Energy", sektor: "Energi", roe: 16.2, eps: 189, debtEquity: 0.35, currentRatio: 1.9 },
    "DOID": { nama: "Delta Dunia Makmur", sektor: "Energi", roe: 12.8, eps: 123, debtEquity: 0.6, currentRatio: 1.4 },
    "SMGR": { nama: "Semen Indonesia", sektor: "Konstruksi", roe: 9.5, eps: 234, debtEquity: 0.7, currentRatio: 1.3 },
    "INTP": { nama: "Indocement Tunggal", sektor: "Konstruksi", roe: 11.2, eps: 312, debtEquity: 0.5, currentRatio: 1.5 },
    "SMBR": { nama: "Semen Baturaja", sektor: "Konstruksi", roe: 4.5, eps: 12, debtEquity: 1.8, currentRatio: 0.7 },
    "AMRT": { nama: "Sumber Alfaria Trijaya", sektor: "Retail", roe: 13.5, eps: 45, debtEquity: 0.9, currentRatio: 1.2 },
    "MPPA": { nama: "Matahari Putra Prima", sektor: "Retail", roe: 5.8, eps: 23, debtEquity: 1.2, currentRatio: 0.9 },
    "RALS": { nama: "Ramayana Lestari", sektor: "Retail", roe: 3.2, eps: 8, debtEquity: 1.5, currentRatio: 0.7 },
    "HEAL": { nama: "Medikaloka Hermina", sektor: "Kesehatan", roe: 12.5, eps: 67, debtEquity: 0.6, currentRatio: 1.4 },
    "MIKA": { nama: "Mitra Keluarga Karyasehat", sektor: "Kesehatan", roe: 14.8, eps: 89, debtEquity: 0.5, currentRatio: 1.5 },
    "SILO": { nama: "Siloam International", sektor: "Kesehatan", roe: 8.5, eps: 45, debtEquity: 0.8, currentRatio: 1.2 },
    "PRDA": { nama: "Prodia Widyahusada", sektor: "Kesehatan", roe: 11.2, eps: 56, debtEquity: 0.6, currentRatio: 1.3 },
    "DVLA": { nama: "Darya-Varia Laboratoria", sektor: "Farmasi", roe: 9.5, eps: 34, debtEquity: 0.7, currentRatio: 1.3 },
    "INAF": { nama: "Indofarma", sektor: "Farmasi", roe: -5.2, eps: -23, debtEquity: 1.5, currentRatio: 0.8 },
    "MERK": { nama: "Merck Indonesia", sektor: "Farmasi", roe: 13.8, eps: 234, debtEquity: 0.3, currentRatio: 2.0 },
    "TBIG": { nama: "Tower Bersama Infrastructure", sektor: "Infrastruktur", roe: 10.5, eps: 45, debtEquity: 1.8, currentRatio: 0.8 },
    "TOWR": { nama: "Sarana Menara Nusantara", sektor: "Infrastruktur", roe: 12.2, eps: 67, debtEquity: 1.5, currentRatio: 0.9 },
    "BALI": { nama: "Bali United", sektor: "Olahraga", roe: 5.8, eps: 12, debtEquity: 0.6, currentRatio: 1.4 },
    "BOGA": { nama: "Boga Group", sektor: "Restoran", roe: 4.2, eps: 8, debtEquity: 1.2, currentRatio: 0.8 },
    "FAST": { nama: "Fast Food Indonesia", sektor: "Restoran", roe: 6.5, eps: 15, debtEquity: 0.9, currentRatio: 1.1 },
    "PZZA": { nama: "Sarimelati Kencana", sektor: "Restoran", roe: 3.8, eps: 6, debtEquity: 1.3, currentRatio: 0.7 },
    "MAPB": { nama: "MAP Boga Adiperkasa", sektor: "Restoran", roe: 2.5, eps: 3, debtEquity: 1.5, currentRatio: 0.6 },
    "FILM": { nama: "MD Pictures", sektor: "Media", roe: 8.9, eps: 23, debtEquity: 0.7, currentRatio: 1.2 },
    "ZONE": { nama: "Mega Perintis", sektor: "Teknologi", roe: 4.5, eps: 8, debtEquity: 0.5, currentRatio: 1.6 },
    "DCII": { nama: "DCI Indonesia", sektor: "Teknologi", roe: 15.2, eps: 45, debtEquity: 0.4, currentRatio: 1.8 },
    "EDGE": { nama: "Indointernet", sektor: "Teknologi", roe: 11.8, eps: 34, debtEquity: 0.3, currentRatio: 2.0 },
    "KREN": { nama: "Xenara Digital", sektor: "Teknologi", roe: 3.2, eps: 5, debtEquity: 0.6, currentRatio: 1.4 },
    "LUCK": { nama: "Sentral Mitra Informatika", sektor: "Teknologi", roe: 6.8, eps: 12, debtEquity: 0.7, currentRatio: 1.3 },
    "MTDL": { nama: "Metrodata Electronics", sektor: "Teknologi", roe: 9.5, eps: 23, debtEquity: 0.5, currentRatio: 1.5 },
    "BIRD": { nama: "Blue Bird", sektor: "Transportasi", roe: 7.2, eps: 34, debtEquity: 0.8, currentRatio: 1.2 },
    "TAXI": { nama: "Express Transindo", sektor: "Transportasi", roe: 2.1, eps: -5, debtEquity: 1.5, currentRatio: 0.6 },
    "WEHA": { nama: "Wahana Pronatural", sektor: "Transportasi", roe: 5.5, eps: 12, debtEquity: 0.9, currentRatio: 1.1 }
};

// ============================================
// FUNGSI UTAMA: ANALISA SAHAM
// ============================================

async function analisaSaham() {
    const input = document.getElementById('kodeSaham');
    const kode = input.value.toUpperCase().trim();
    
    if (!kode) {
        alert('❌ Masukkan kode saham dulu!');
        return;
    }
    
    // Tampilkan loading
    const loading = document.getElementById('loading');
    const hasil = document.getElementById('hasil');
    
    loading.style.display = 'block';
    hasil.style.display = 'none';
    
    try {
        // ========================================
        // AMBIL DATA HARGA REAL-TIME DARI YAHOO FINANCE
        // ========================================
        
        // Yahoo Finance pakai ticker dengan .JK (contoh: BBRI.JK)
        const ticker = kode + ".JK";
        
        // Coba ambil data dari Yahoo Finance
        let harga = 0;
        let per = 0;
        let pbv = 0;
        let change = 0;
        let changePercent = 0;
        let marketCap = 0;
        let dividendYield = 0;
        let namaYahoo = "";
        
        try {
            // Ambil quote data
            const quoteResponse = await fetch(
                `${YAHOO_QUOTE}?symbols=${ticker}&fields=regularMarketPrice,regularMarketChange,regularMarketChangePercent,trailingPE,priceToBook,marketCap,dividendYield,longName,shortName`
            );
            
            if (quoteResponse.ok) {
                const quoteData = await quoteResponse.json();
                console.log('Yahoo Quote:', quoteData);
                
                if (quoteData.quoteResponse && quoteData.quoteResponse.result && quoteData.quoteResponse.result.length > 0) {
                    const result = quoteData.quoteResponse.result[0];
                    
                    harga = result.regularMarketPrice || 0;
                    change = result.regularMarketChange || 0;
                    changePercent = result.regularMarketChangePercent || 0;
                    per = result.trailingPE || 0;
                    pbv = result.priceToBook || 0;
                    marketCap = result.marketCap || 0;
                    dividendYield = result.dividendYield || 0;
                    namaYahoo = result.longName || result.shortName || kode;
                }
            }
        } catch (e) {
            console.log('Yahoo Finance error:', e);
        }
        
        // ========================================
        // AMBIL DATA FUNDAMENTAL DARI DATABASE MANUAL
        // ========================================
        
        const fundamental = fundamentalDB[kode];
        
        if (!fundamental && harga === 0) {
            throw new Error('Saham tidak ditemukan di database dan Yahoo Finance');
        }
        
        // Gunakan nama dari Yahoo kalau ada, kalau tidak dari database
        const nama = namaYahoo || (fundamental ? fundamental.nama : kode);
        const sektor = fundamental ? fundamental.sektor : "Tidak diketahui";
        const roe = fundamental ? fundamental.roe : 0;
        const eps = fundamental ? fundamental.eps : 0;
        const debtEquity = fundamental ? fundamental.debtEquity : 0;
        const currentRatio = fundamental ? fundamental.currentRatio : 0;
        
        // ========================================
        // TAMPILKAN DATA KE LAYAR
        // ========================================
        
        document.getElementById('namaSaham').textContent = `- ${nama} (${kode})`;
        document.getElementById('sektor').textContent = sektor;
        
        // Harga
        const hargaEl = document.getElementById('harga');
        if (harga > 0) {
            const arrow = change >= 0 ? '📈' : '📉';
            hargaEl.textContent = `Rp ${harga.toLocaleString('id-ID')} ${arrow} ${change >= 0 ? '+' : ''}${change.toFixed(0)} (${changePercent >= 0 ? '+' : ''}${changePercent.toFixed(2)}%)`;
            hargaEl.style.color = change >= 0 ? '#28a745' : '#dc3545';
        } else {
            hargaEl.textContent = 'Data tidak tersedia';
            hargaEl.style.color = '#666';
        }
        
        // PER
        document.getElementById('per').textContent = per > 0 ? `${per.toFixed(2)}x (PER < 15 = murah)` : 'Data tidak tersedia';
        
        // PBV
        document.getElementById('pbv').textContent = pbv > 0 ? `${pbv.toFixed(2)}x (PBV < 2 = murah)` : 'Data tidak tersedia';
        
        // ROE
        document.getElementById('roe').textContent = roe !== 0 ? `${roe}% (ROE > 15% = bagus)` : 'Data tidak tersedia';
        
        // EPS
        document.getElementById('eps').textContent = eps !== 0 ? `Rp ${eps.toLocaleString('id-ID')}` : 'Data tidak tersedia';
        
        // Market Cap
        document.getElementById('marketCap').textContent = marketCap > 0 ? formatMarketCap(marketCap) : 'Data tidak tersedia';
        
        // Dividend Yield
        document.getElementById('dividendYield').textContent = dividendYield > 0 ? `${(dividendYield * 100).toFixed(2)}%` : 'Data tidak tersedia';
        
        // Debt/Equity
        document.getElementById('debtEquity').textContent = debtEquity > 0 ? `${debtEquity}x (D/E < 1 = aman)` : 'Data tidak tersedia';
        
        // Current Ratio
        document.getElementById('currentRatio').textContent = currentRatio > 0 ? `${currentRatio}x (CR > 1 = likuid)` : 'Data tidak tersedia';
        
        // ========================================
        // HITUNG SKOR FUNDAMENTAL (0-100)
        // ========================================
        
        let skor = 0;
        let poinDari = [];
        let redFlags = [];
        
        // Skor dari PER (maks 20 poin)
        if (per > 0) {
            if (per < 10) { skor += 20; poinDari.push('PER sangat murah (+20)'); }
            else if (per < 15) { skor += 17; poinDari.push('PER murah (+17)'); }
            else if (per < 20) { skor += 13; poinDari.push('PER wajar (+13)'); }
            else if (per < 25) { skor += 8; poinDari.push('PER mahal (+8)'); }
            else { skor += 3; poinDari.push('PER sangat mahal (+3)'); redFlags.push('PER tinggi (>25)'); }
        } else if (fundamental) {
            // Estimasi PER dari EPS dan harga
            const estimasiPER = harga / eps;
            if (estimasiPER < 10) { skor += 20; poinDari.push('PER estimasi sangat murah (+20)'); }
            else if (estimasiPER < 15) { skor += 17; poinDari.push('PER estimasi murah (+17)'); }
            else if (estimasiPER < 20) { skor += 13; poinDari.push('PER estimasi wajar (+13)'); }
            else if (estimasiPER < 25) { skor += 8; poinDari.push('PER estimasi mahal (+8)'); }
            else { skor += 3; poinDari.push('PER estimasi sangat mahal (+3)'); redFlags.push('PER tinggi (>25)'); }
        } else {
            poinDari.push('PER tidak tersedia (0)');
        }
        
        // Skor dari PBV (maks 15 poin)
        if (pbv > 0) {
            if (pbv < 1) { skor += 15; poinDari.push('PBV sangat murah (+15)'); }
            else if (pbv < 2) { skor += 12; poinDari.push('PBV murah (+12)'); }
            else if (pbv < 3) { skor += 9; poinDari.push('PBV wajar (+9)'); }
            else if (pbv < 4) { skor += 5; poinDari.push('PBV mahal (+5)'); }
            else { skor += 2; poinDari.push('PBV sangat mahal (+2)'); redFlags.push('PBV tinggi (>4)'); }
        } else {
            poinDari.push('PBV tidak tersedia (0)');
        }
        
        // Skor dari ROE (maks 25 poin)
        if (roe > 0) {
            if (roe > 20) { skor += 25; poinDari.push('ROE sangat tinggi (+25)'); }
            else if (roe > 15) { skor += 22; poinDari.push('ROE tinggi (+22)'); }
            else if (roe > 10) { skor += 17; poinDari.push('ROE cukup (+17)'); }
            else if (roe > 5) { skor += 10; poinDari.push('ROE rendah (+10)'); }
            else { skor += 3; poinDari.push('ROE sangat rendah (+3)'); redFlags.push('ROE rendah (<5%)'); }
        } else if (roe < 0) {
            skor += 0; poinDari.push('ROE negatif (0)'); redFlags.push('ROE negatif — perusahaan rugi!');
        } else {
            poinDari.push('ROE tidak tersedia (0)');
        }
        
        // Skor dari EPS (maks 15 poin)
        if (eps > 0 && harga > 0) {
            const epsRatio = (eps / harga) * 100;
            if (epsRatio > 10) { skor += 15; poinDari.push('EPS sangat bagus (+15)'); }
            else if (epsRatio > 7) { skor += 12; poinDari.push('EPS bagus (+12)'); }
            else if (epsRatio > 5) { skor += 8; poinDari.push('EPS cukup (+8)'); }
            else if (epsRatio > 3) { skor += 4; poinDari.push('EPS rendah (+4)'); }
            else { poinDari.push('EPS sangat rendah (0)'); redFlags.push('EPS rendah'); }
        } else if (eps < 0) {
            skor += 0; poinDari.push('EPS negatif (0)'); redFlags.push('EPS negatif — perusahaan rugi!');
        } else {
            poinDari.push('EPS tidak tersedia (0)');
        }
        
        // Skor dari Debt/Equity (maks 10 poin)
        if (debtEquity > 0) {
            if (debtEquity < 0.5) { skor += 10; poinDari.push('D/E sangat aman (+10)'); }
            else if (debtEquity < 1) { skor += 8; poinDari.push('D/E aman (+8)'); }
            else if (debtEquity < 1.5) { skor += 5; poinDari.push('D/E wajar (+5)'); }
            else if (debtEquity < 2) { skor += 2; poinDari.push('D/E tinggi (+2)'); redFlags.push('D/E tinggi (>1.5)'); }
            else { skor += 0; poinDari.push('D/E sangat tinggi (0)'); redFlags.push('D/E sangat tinggi (>2) — risiko kebangkrutan!'); }
        } else {
            poinDari.push('D/E tidak tersedia (0)');
        }
        
        // Skor dari Current Ratio (maks 10 poin)
        if (currentRatio > 0) {
            if (currentRatio > 2) { skor += 10; poinDari.push('Likuiditas sangat baik (+10)'); }
            else if (currentRatio > 1.5) { skor += 8; poinDari.push('Likuiditas baik (+8)'); }
            else if (currentRatio > 1) { skor += 6; poinDari.push('Likuiditas cukup (+6)'); }
            else if (currentRatio > 0.7) { skor += 3; poinDari.push('Likuiditas rendah (+3)'); redFlags.push('Current Ratio rendah (<1)'); }
            else { skor += 0; poinDari.push('Likuiditas sangat rendah (0)'); redFlags.push('Current Ratio sangat rendah — risiko likuiditas!'); }
        } else {
            poinDari.push('Current Ratio tidak tersedia (0)');
        }
        
        // Skor dari Dividend Yield (bonus 5 poin)
        if (dividendYield > 0) {
            const dyPercent = dividendYield * 100;
            if (dyPercent > 5) { skor += 5; poinDari.push('Dividend yield tinggi (+5)'); }
            else if (dyPercent > 3) { skor += 3; poinDari.push('Dividend yield baik (+3)'); }
            else if (dyPercent > 1) { skor += 1; poinDari.push('Dividend yield ada (+1)'); }
        }
        
        // ========================================
        // TAMPILKAN SKOR & REKOMENDASI
        // ========================================
        
        // Batasi skor maksimal 100
        skor = Math.min(skor, 100);
        
        document.getElementById('skorAngka').textContent = skor;
        
        const scoreBox = document.getElementById('scoreBox');
        const skorKategori = document.getElementById('skorKategori');
        const rekomendasi = document.getElementById('rekomendasi');
        const redFlagsEl = document.getElementById('redFlags');
        
        // Tentukan kategori dan rekomendasi
        if (skor >= 80) {
            scoreBox.className = 'score-box score-bagus';
            skorKategori.innerHTML = `🟢 FUNDAMENTAL SANGAT BAGUS<br><small>${poinDari.join(' | ')}</small>`;
            rekomendasi.className = 'rekomendasi beli';
            rekomendasi.textContent = '⭐ REKOMENDASI: BELI';
        } else if (skor >= 60) {
            scoreBox.className = 'score-box score-cukup';
            skorKategori.innerHTML = `🟡 FUNDAMENTAL CUKUP BAGUS<br><small>${poinDari.join(' | ')}</small>`;
            rekomendasi.className = 'rekomendasi tahan';
            rekomendasi.textContent = '⚠️ REKOMENDASI: TAHAN / PERHATIKAN';
        } else if (skor >= 40) {
            scoreBox.className = 'score-box score-buruk';
            skorKategori.innerHTML = `🟠 FUNDAMENTAL LEMAH<br><small>${poinDari.join(' | ')}</small>`;
            rekomendasi.className = 'rekomendasi jual';
            rekomendasi.textContent = '❌ REKOMENDASI: JUAL / HINDARI';
        } else {
            scoreBox.className = 'score-box score-buruk';
            skorKategori.innerHTML = `🔴 FUNDAMENTAL SANGAT LEMAH<br><small>${poinDari.join(' | ')}</small>`;
            rekomendasi.className = 'rekomendasi jual';
            rekomendasi.textContent = '🚨 REKOMENDASI: JUAL SEGERA / HINDARI';
        }
        
        // Tampilkan red flags
        if (redFlags.length > 0) {
            redFlagsEl.innerHTML = `<strong>⚠️ RED FLAGS:</strong><br>• ${redFlags.join('<br>• ')}`;
            redFlagsEl.style.display = 'block';
        } else {
            redFlagsEl.innerHTML = '<strong>✅ Tidak ada red flags utama</strong>';
            redFlagsEl.style.display = 'block';
        }
        
        // Tampilkan hasil
        loading.style.display = 'none';
        hasil.style.display = 'block';
        
    } catch (error) {
        console.error('Error:', error);
        loading.style.display = 'none';
        
        alert(`❌ Gagal mengambil data!\n\nError: ${error.message}\n\nCoba saham lain atau periksa koneksi internet.`);
    }
}

// Helper: Format market cap
function formatMarketCap(cap) {
    if (cap >= 1e12) return `Rp ${(cap / 1e12).toFixed(2)} Triliun`;
    if (cap >= 1e9) return `Rp ${(cap / 1e9).toFixed(2)} Miliar`;
    return `Rp ${cap.toLocaleString('id-ID')}`;
}

// Biar bisa tekan Enter di keyboard
document.getElementById('kodeSaham').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        analisaSaham();
    }
});
