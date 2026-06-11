// Bölüm 1 — Planlama (Başlangıç Hesapları): modül içeriği.
// Senaryo ve quiz motoru (assets/js/app.js) bu veriyi okur.
// Senaryolar dizi/film sahnelerine dayanır ve SPOILER içerir.

window.MODULE_DATA = {
  chapter: 1,
  title: "Planlama",
  quote: "Savaşmadan önce tapınakta çok hesap yapan kazanır, az hesap yapan kaybeder. Çok hesap zafer getirir, az hesap yenilgi — ya hiç hesap yapmayan?",
  quoteAuthor: "Sun Tzu, Savaş Sanatı, Bölüm 1 — Başlangıç Hesapları",

  principles: [
    {
      rank: "道", cls: "best",
      title: "Yol — halk ile lider aynı amaçta mı?",
      body: "Ahlaki birlik: insanlar lideriyle aynı şeye inanıyorsa onunla yaşar, onunla ölür ve tehlikeden yılmaz. Ekrandan örnek: Kuzey, Ned Stark'a unvanı için değil adaleti için bağlıydı — Robb'un ordusu bu yüzden maaşla değil inançla savaştı. Karşıtı: Joffrey'nin korkuyla ayakta duran ve ilk sarsıntıda çözülen otoritesi."
    },
    {
      rank: "天", cls: "",
      title: "Gökyüzü — mevsim, hava, zamanlama",
      body: "Gece-gündüz, soğuk-sıcak, mevsimler ve an: kontrol edemediğin ama hesaba katmak zorunda olduğun her şey. Ekrandan örnek: Stannis'in Kışyarı seferi — ordusu düşmanla değil, hesaba katmadığı kar fırtınasıyla eridi. 'Kış geliyor' bir slogan değil, bir planlama parametresidir."
    },
    {
      rank: "地", cls: "",
      title: "Arazi — mesafe, açıklık, darlık, ölüm zemini",
      body: "Savaşın geçeceği zemini rakibinden iyi bilen, zemini silaha çevirir. Ekrandan örnek: Miğfer Dibi'nde (Helm's Deep) Rohan, açık ovada ezilecekken dar geçitli kaleyle sayı farkını anlamsızlaştırdı; Karasu'da Tyrion dar körfezi Stannis'in donanmasına mezar yaptı."
    },
    {
      rank: "將", cls: "",
      title: "Komutan — bilgelik, dürüstlük, cesaret, disiplin, insancıllık",
      body: "Plan ancak onu taşıyacak liderin kalitesi kadar iyidir. Sun Tzu beş erdem sayar: bilgelik, güvenilirlik, insancıllık, cesaret ve sertlik. Ekrandan örnek: Vito Corleone'nin soğukkanlı hesabı ile Sonny'nin öfkeyle pusuya sürüklenişi — aynı ailede iki komutan profili, iki kader."
    },
    {
      rank: "法", cls: "",
      title: "Yöntem — örgütlenme, lojistik, kural ve disiplin",
      body: "Birlik yapısı, rütbe düzeni, ikmal yolları, maliyet kontrolü: zaferin görünmeyen iskeleti. Ekrandan örnek: Gus Fring'in imparatorluğu bir laboratuvar değil, kusursuz bir lojistik sistemiydi — dağıtım ağı, temiz cephe, tek tip prosedür. Yöntem çöktüğünde imparatorluk da çöktü."
    }
  ],

  scenarios: [
    {
      domain: "Game of Thrones",
      title: "Karasu'da Donanma Görünüyor",
      setup: "Tyrion Lannister'sın. Stannis Baratheon, Westeros'un en büyük donanmasıyla Kralın Şehri'ne yaklaşıyor. Askerin az, kralın (Joffrey) işe yaramaz, halk aç ve öfkeli. Ne yaparsın?",
      choices: [
        {
          text: "Ordumu surların dışına çıkarır, Stannis'i kıyıda karşılarım; cesaret kazanır.",
          grade: "poor",
          verdict: "Hesapsız cesaret, hızlı yenilgidir.",
          feedback: "Beş etkenin hiçbirinde üstün değilsin: sayı onda, komuta onda, halkın morali yerde. Sun Tzu'nun tapınak hesabını yapsaydın çıkardın: açık alanda bu savaş matematiksel olarak kayıp. Cesaret bir erdemdir; ama hesabın yerine geçtiği anda kusura dönüşür."
        },
        {
          text: "Kapıları kapatır, surların ardında klasik bir kuşatma savunması yaparım.",
          grade: "mid",
          verdict: "Hesap yarım: araziyi gördün, zamanı görmedin.",
          feedback: "Surlar bir avantaj, fakat pasif savunma sadece yenilgiyi erteler: Stannis'in sayısı kuşatmayı sürdürmeye yeter, halkın açlığı ise senin aleyhine işler. Beş etkenden yalnızca birini (arazi) kullandın; zamanlama, aldatma ve yöntem masada kaldı."
        },
        {
          text: "Savaştan haftalar önce hesap yaparım: donanmanın geçeceği dar körfezi belirler, çıldırateşini gizlice tek gemiye yükler, zinciri hazırlatır ve düşman boğaza girdiği anda tek hamlede yakarım.",
          grade: "best",
          verdict: "Savaş başlamadan tapınakta kazanıldı.",
          feedback: "Karasu'nun gerçek anatomisi: Tyrion arazi (dar körfez), yöntem (çıldırateşi üretimi, zincir lojistiği), zamanlama (donanma boğaza tam girdiğinde) ve aldatmayı (boş görünen tek gemi) tek planda birleştirdi. Savaşın sonucu, ilk ok atılmadan haftalar önce yapılan hesapta belliydi. 'Çok hesap zafer getirir.'"
        }
      ],
      note: "\"Zafer kazanan ordu önce kazanır, sonra savaşa girer; yenilen ordu önce savaşa girer, sonra zafer aramaya başlar.\""
    },
    {
      domain: "The Godfather",
      title: "Restorandaki Buluşma",
      setup: "Michael Corleone'sin. Babanı vuran Sollozzo ve onu koruyan rüşvetçi polis şefi McCluskey seninle 'barış görüşmesi' yapmak istiyor. Aile konseyi kararsız. Ne yaparsın?",
      choices: [
        {
          text: "Görüşmeye gitmem; sokakta ilk fırsatta ikisini de vurdururum.",
          grade: "poor",
          verdict: "Plansız şiddet, savaşı büyütür.",
          feedback: "Bir polis şefini sokak ortasında öldürmek, beş etkenden 'Yol'u (kamuoyu ve ailenin meşruiyeti) tamamen kaybettirir: tüm polis teşkilatı ve aileler birleşip üstüne gelir. Hedefi vurmak yetmez; vurduktan sonraki dünyayı da planlamamışsan kaybettin."
        },
        {
          text: "Görüşmeye giderim ama sadece dinlerim; aile güçlenene kadar zaman kazanırım.",
          grade: "mid",
          verdict: "Zaman kazandın ama inisiyatif hâlâ onlarda.",
          feedback: "Babanın hastanedeki ikinci suikast girişimi gösterdi: Sollozzo, Vito ölene kadar durmayacak. Bekleyiş, planı olmayanın stratejisidir. Sun Tzu'nun yedi karşılaştırmasını yap: zaman geçtikçe hangi taraf güçleniyor? Cevap sen değilsen, beklemek kayıptır."
        },
        {
          text: "Buluşmayı kabul ederim — ama her ayrıntıyı önceden kurarım: mekânı öğrenir, silahı tuvalete önceden yerleştirtir, kaçış arabasını ve sonrasının basın anlatısını ('rüşvetçi polis') hazırlatırım.",
          grade: "best",
          verdict: "Savaş, restorana girmeden önce kazanıldı.",
          feedback: "Sahnenin dehşeti silahta değil, hazırlıktaki soğukkanlılıktadır: mekân keşfi (arazi), silahın yerleştirilmesi (yöntem), 'zararsız genç kardeş' imajı (aldatma — güçlüyken güçsüz görün), kaçış ve Sicilya planı (sonrası), gazetelere servis edilen rüşvet dosyası (Yol — kamuoyu). Michael masaya oturduğunda sonuç çoktan hesaplanmıştı."
        }
      ],
      note: "\"Savaş, aldatma yoludur: yapabilecekken yapamaz görün, yakındayken uzakta görün.\""
    },
    {
      domain: "Prison Break",
      title: "İçeri Girmeden Önce",
      setup: "Michael Scofield'sın. Kardeşin işlemediği bir suçtan idam mahkûmu ve Fox River hapishanesinde. Onu kurtarmak istiyorsun. Ne yaparsın?",
      choices: [
        {
          text: "İçerideki gardiyanlara rüşvet verir, ilk fırsatta ani bir firar denerim.",
          grade: "poor",
          verdict: "Tek etkene (para) dayanan plan, plan değildir.",
          feedback: "Rüşvet tek bir insanın sadakatine bağlıdır; o insan çözülürse her şey çöker. Araziyi (binayı), zamanlamayı (sayım düzenini), yöntemi (prosedürleri) bilmiyorsun. Sun Tzu'nun diliyle: hesabı az olan kaybeder — hele hesabı tek kalemden ibaret olan."
        },
        {
          text: "Dışarıda kalır, temyiz ve hukuk sürecini sonuna kadar zorlarım.",
          grade: "mid",
          verdict: "Meşru yol — ama saat senin aleyhine.",
          feedback: "Hukuk yolu doğru ilk hamledir; fakat dizinin ilk bölümü tam da bunu kapatır: dava düzmece, kurum ele geçirilmiş, idam tarihi yaklaşıyor. Sun Tzu'nun yedi karşılaştırması burada da geçerli: zaman kimin lehine işliyor? Sistemin kendisi düşmansa, sistemin takvimine teslim olmak plan değildir."
        },
        {
          text: "Aylarca hazırlanırım: hapishanenin mimari planlarını çalışır, personeli ve sayım düzenini öğrenir, planı vücuduma dövme olarak işler ve içeri kendi şartlarımla, kendi seçtiğim anda girerim.",
          grade: "best",
          verdict: "Tapınak hesabının ekrandaki en saf hali.",
          feedback: "Scofield beş etkenin beşini de masaya koydu: arazi (binanın her borusu), yöntem (rutinler, prosedürler, malzemeler), zamanlama (idam takvimine göre geri sayım), komutan (kendi mühendislik aklı) ve Yol (içeride kazanılacak müttefikler). Firar gecesi sadece infazdı; savaş, dövme iğnesi tene değmeden önce kazanılmıştı."
        }
      ],
      note: "\"Kazanan strateji, savaştan önce kazanılmış savaşın yalnızca uygulanmasıdır.\""
    },
    {
      domain: "Yüzüklerin Efendisi",
      title: "Saruman'ın Ordusu Yolda",
      setup: "Rohan Kralı Théoden'sin. Saruman'ın on bin kişilik Uruk-hai ordusu köyleri yakarak ilerliyor. Ordun küçük, halkın savunmasız. Gandalf 'beşinci günün şafağında doğuya bakın' deyip gitti. Ne yaparsın?",
      choices: [
        {
          text: "Atlılarımın gururu için orduyu açık ovada Uruk-hai'ın üstüne süririm.",
          grade: "poor",
          verdict: "Araziyi rakibe hediye ettin.",
          feedback: "Açık ova, sayıca üstün ve yorulmak bilmeyen bir piyade ordusunun en sevdiği zemindir. Beş etkenden 'arazi'yi hesaba katmadan onur için savaşa girmek, Sun Tzu'nun 'önce savaşa girip sonra zafer arayan' yenik ordusunun tarifidir."
        },
        {
          text: "Edoras'ta kalır, başkentimi sonuna kadar savunurum.",
          grade: "mid",
          verdict: "Yanlış kaleyi seçtin.",
          feedback: "Savunma içgüdüsü doğru, arazi seçimi yanlış: Edoras açık tepede, surları sıradan, sivilleri savaşın ortasında. Aynı savunma kararının doğru zemini Miğfer Dibi'ydi. Arazi etkeni sadece 'savunmaya geç' demek değildir; 'nerede savunacağını bil' demektir."
        },
        {
          text: "Halkı ve orduyu Miğfer Dibi'ne çekerim: dar geçit sayı üstünlüğünü siler — ve Gandalf'ın 'beşinci şafak' sözünü planın ikinci yarısı olarak hesaba katarım.",
          grade: "best",
          verdict: "Arazi + zamanlama: iki etken tek planda.",
          feedback: "Miğfer Dibi'nin dar geçidi, on bin kişilik ordunun aynı anda yalnızca birkaç yüzünü savaştırabilmesi demek — arazi, sayıyı siler (地). Gandalf'ın şafak vakti Eomer'le dönüşü ise planın zamanlama ayağıdır (天): savunma, yardım gelene kadar 'yenilmez kalma' göreviydi, kahramanlık gösterisi değil. İki etkeni birleştiren plan, umutsuz görünen savaşı kazandı."
        }
      ],
      note: "\"Önce yenilmez ol, sonra düşmanın yenilebilir olacağı anı bekle — o an geldiğinde tereddüt etme.\""
    }
  ],

  quiz: [
    {
      q: "Sun Tzu'ya göre savaştan önce tartılması gereken beş temel etken hangileridir?",
      choices: [
        "Ordu, silah, para, müttefik, casus",
        "Yol, gökyüzü, arazi, komutan, yöntem",
        "Saldırı, savunma, kuşatma, manevra, geri çekilme",
        "Cesaret, öfke, gurur, sabır, şans"
      ],
      answer: 1,
      explain: "Beş etken: Yol (halk-lider birliği), Gökyüzü (mevsim ve zamanlama), Arazi (zemin), Komutan (liderin erdemleri) ve Yöntem (örgütlenme ve disiplin). Tapınak hesabı bu beşinin karşılaştırılmasıdır."
    },
    {
      q: "'Savaş, aldatma yoludur' ilkesinin doğru okuması hangisidir?",
      choices: [
        "Her zaman yalan söyle, kimseye güvenme",
        "Yapabilecekken yapamaz görün, yakındayken uzak görün — rakibin hesabını yanlış veriye dayandır",
        "Müttefiklerini de aldat ki sır sızmasın",
        "Savaşı hileyle uzat, rakip yorulsun"
      ],
      answer: 1,
      explain: "Aldatmanın hedefi rakibin karar mekanizmasıdır: ona yanlış veri ver ki tapınak hesabını yanlış yapsın. Michael Corleone'nin 'zararsız genç kardeş' görüntüsü tam olarak budur."
    },
    {
      q: "Tyrion'ın Karasu zaferi hangi etkenlerin birleşimiydi?",
      choices: [
        "Sayı üstünlüğü ve cesaret",
        "Müttefik ordusu ve rüşvet",
        "Arazi (dar körfez), yöntem (çıldırateşi lojistiği), zamanlama ve aldatma",
        "Kuşatma kuleleri ve açlık"
      ],
      answer: 2,
      explain: "Tyrion sayıca ve komuta gücünde zayıftı; kazandıran şey haftalar önce yapılmış hesaptı: dar körfez seçildi, çıldırateşi üretildi, zincir hazırlandı ve boş görünen tek gemi tam zamanında boğazdaydı."
    },
    {
      q: "'Tapınak hesabı' metaforu neyi anlatır?",
      choices: [
        "Savaştan önce tanrılara kurban sunmayı",
        "Zaferin, daha savaş başlamadan yapılan karşılaştırmalı planlamada belirlendiğini",
        "Orduya moral konuşması yapmayı",
        "Savaş ganimetinin paylaşımını"
      ],
      answer: 1,
      explain: "Antik Çin'de sefer kararı tapınakta hesap çubuklarıyla tartılırdı. Sun Tzu'nun iddiası radikaldir: savaşın sonucu sahada değil, bu masada belli olur. Scofield'ın dövmesi bu masanın modern karşılığıdır."
    },
    {
      q: "Stannis Baratheon'un Kışyarı seferi beş etkenden hangisini ihmal etti?",
      choices: [
        "Gökyüzü — mevsimi ve hava koşullarını",
        "Komutan — kendi cesaretini",
        "Yol — askerlerinin bağlılığını",
        "Arazi — Kışyarı'nın surlarını"
      ],
      answer: 0,
      explain: "Stannis kararlı bir komutandı ve ordusu disiplinliydi; ama kış bastırdığında ikmal çöktü, atlar öldü, paralı askerler kaçtı. Kontrol edemediğin etkeni hesaba katmamak, ona yenilmektir. (Yol'daki çatlaklar da — kızının kurban edilmesi — orduyu ayrıca çözdü.)"
    },
    {
      q: "Michael Corleone'nin restoran buluşmasını kabul etmeden önce yaptığı hazırlık neyin örneğidir?",
      choices: [
        "Şansa güvenmenin",
        "Savaşın, ilk hamleden önce kazanılmasının: mekân keşfi, silahın yerleştirilmesi, kaçış ve sonrasının anlatısı",
        "Müzakere sanatının",
        "Korkunun insanı yaratıcı yapmasının"
      ],
      answer: 1,
      explain: "Buluşma bir 'görüşme' değil, önceden kazanılmış bir savaşın infazıydı: arazi çalışıldı, yöntem kuruldu, aldatma (zararsız görünme) işledi ve sonrası (basın anlatısı, Sicilya) planlandı."
    }
  ],

  practice: [
    {
      title: "Karasu'yu beş etkenle izle",
      desc: "Game of Thrones S2E9 'Blackwater' bölümünü aç. Tyrion'ın her hazırlığını beş etkenden birine yerleştir: Yol (halkın morali), Gökyüzü (gece ve rüzgâr), Arazi (körfez), Komutan, Yöntem (çıldırateşi lojistiği). Hangi etken Stannis tarafında eksikti?"
    },
    {
      title: "Bir soygun/firar planını söküp incele",
      desc: "Prison Break'in ilk bölümünü ya da Ocean's Eleven'ı izle. Planın her adımını 'hangi etken?' sorusuyla etiketle. Plan bir yerde kıl payı kurtarıyorsa, o an hangi etkenin eksik hesaplandığını bul."
    },
    {
      title: "Bir yenilgiyi otopsi masasına yatır",
      desc: "Stannis'in Kışyarı seferi, Robb Stark'ın düşüşü ya da kendi seçeceğin bir ekran yenilgisini al. Beş etkeni tek tek puanla: hangileri güçlüydü, hangisi ihmal edildi? Yenilgiyi tek cümlede 'ihmal edilen etken' üzerinden özetle."
    }
  ]
};
