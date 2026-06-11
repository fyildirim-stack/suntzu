# 孫子 Savaş Sanatı — İnteraktif Öğrenme Platformu

Sun Tzu'nun *Savaş Sanatı* tekniklerini **dizi ve filmlerden sahnelerle** öğreten,
Türkçe, tamamen statik bir web sitesi. Her teknik, ekranın en büyük stratejistleri
üzerinden işlenir: **Game of Thrones, The Godfather, Breaking Bad, Yüzüklerin Efendisi...**
Senaryolarda karar koltuğuna sen oturursun (⚠ spoiler içerir).

## İçerik

Her modül şu akışı izler:

1. **Animasyonlu giriş** — alıntı kelime kelime belirir, arka planda hareketli strateji haritası (SVG/CSS)
2. **Tarihsel bağlam** — orijinal metin pasajı + tarihten örnek
3. **Tekniğin anatomisi** — SVG diyagram + interaktif prensip kartları
4. **4 dizi/film, 4 senaryo** — Tywin, Vito Corleone, Gus Fring, Gandalf'ın yerinde "karar ver" tipi interaktif senaryolar, anında Sun Tzu perspektifli geri bildirim
5. **Quiz** — açıklamalı geri bildirim ve puanlama
6. **"Bu Hafta İzle ve Analiz Et"** — sahne analizi görevleri (ilerleme tarayıcıda saklanır)
7. **Slayt destesi** — reveal.js sunumu (yazdırılabilir/PDF)

### Mevcut modüller

| Bölüm | Modül | Durum |
|---|---|---|
| 1 | [Planlama](modul/01-planlama/index.html) | ✅ |
| 3 | [Savaşmadan Kazanmak](modul/03-savasmadan-kazanmak/index.html) | ✅ Pilot |
| 2, 4–13 | Diğer 11 bölüm | 🔜 Yol haritasında |

## Yerel Çalıştırma

Build adımı yok; herhangi bir statik sunucu yeterli:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Slaytları PDF'e Çevirme

Slayt destesini `?print-pdf` parametresiyle açıp tarayıcıdan yazdır:

```
modul/03-savasmadan-kazanmak/slides.html?print-pdf
```

## Yeni Modül Eklemek

1. `data/modul-XX.js` dosyasını `data/modul-03.js` ile aynı şemada oluştur
   (alıntı, prensipler, 4 senaryo, quiz, pratik listesi).
2. `modul/XX-modul-adi/index.html` ve `slides.html` sayfalarını pilot modülden kopyalayıp
   metinleri ve veri dosyası yolunu güncelle.
3. `index.html` içindeki `chapters` dizisinde ilgili bölüme `open: true` ve `href` ekle.

Senaryo/quiz/pratik motoru (`assets/js/app.js`) veri-güdümlüdür; modül başına kod yazmak gerekmez.

## Yayınlama

GitHub Pages ile tek adım: depo ayarlarından **Settings → Pages → Deploy from branch**
seçip ana branch'i yayınlamak yeterlidir (site kökü `index.html`).
