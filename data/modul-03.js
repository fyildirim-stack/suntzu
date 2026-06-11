// Bölüm 3 — Savaşmadan Kazanmak: modül içeriği.
// Senaryo ve quiz motoru (assets/js/app.js) bu veriyi okur;
// yeni bir modül eklemek için aynı şemada yeni bir data/modul-XX.js yazmak yeterlidir.

window.MODULE_DATA = {
  chapter: 3,
  title: "Savaşmadan Kazanmak",
  quote: "Yüz savaşta yüz zafer kazanmak hünerlerin en üstünü değildir. Hünerlerin en üstünü, düşmanı savaşmadan teslim almaktır.",
  quoteAuthor: "Sun Tzu, Savaş Sanatı, Bölüm 3 — Strateji ile Saldırı",

  principles: [
    {
      rank: "1", cls: "best",
      title: "En üstünü: Düşmanın planını boz",
      body: "Rakibin stratejisi daha kuruluş aşamasındayken etkisiz hale getirilir. Çatışma hiç başlamaz; maliyet sıfıra yakındır. Bunun ön koşulu istihbarat ve öngörüdür: planı görmeden bozamazsın."
    },
    {
      rank: "2", cls: "",
      title: "Sonra: İttifaklarını dağıt",
      body: "Rakibi yalnızlaştır. Müttefiklerinden, destekçilerinden, kaynaklarından koparılan rakip, savaşma iradesini büyük ölçüde yitirir. Diplomasi burada ordudan daha keskin bir silahtır."
    },
    {
      rank: "3", cls: "",
      title: "Sonra: Ordusuyla sahada yüzleş",
      body: "Ancak ilk iki yol kapandıysa açık çatışmaya girilir. Bu noktada bile amaç imha değil, düşmanın direncini en az kayıpla kırmaktır: 'Bütün olarak ele geçirilen ülke, yakılıp yıkılan ülkeden değerlidir.'"
    },
    {
      rank: "4", cls: "worst",
      title: "En kötüsü: Surlarla çevrili şehri kuşat",
      body: "Kuşatma; zaman, kaynak ve insan kaybının en yüksek olduğu yoldur. Sun Tzu'ya göre kuşatma yalnızca başka hiçbir seçenek kalmadığında, çaresizlikten yapılır. Modern karşılığı: en pahalı, en yıpratıcı cepheye kendini kilitlemek."
    }
  ],

  scenarios: [
    {
      domain: "İş ve Strateji",
      title: "Fiyat Savaşı Tuzağı",
      setup: "Sektörünüze agresif bir rakip girdi ve fiyatları %30 kırarak pazar payı kapmaya başladı. Yatırımcılarınız 'biz de fiyat kıralım' baskısı yapıyor. Kasanız rakibinkinden küçük. Ne yaparsınız?",
      choices: [
        {
          text: "Fiyatları rakipten daha fazla kırarım; pazar payımı korumak her şeyden önemli.",
          grade: "poor",
          verdict: "Kuşatmaya girdin.",
          feedback: "Rakibin seçtiği zeminde, rakibin güçlü olduğu silahla (kasa derinliği) savaşmayı kabul ettin. Fiyat savaşı tam olarak Sun Tzu'nun 'surlu şehri kuşatmak' dediği şeydir: en uzun, en pahalı, en yıpratıcı yol — ve küçük kasa burada önce tükenir."
        },
        {
          text: "Fiyata hiç dokunmam; mevcut müşterilerime uzun vadeli sözleşme ve sadakat avantajları sunarak onları kilitlerim.",
          grade: "mid",
          verdict: "Savunma sağlam, ama plan hâlâ rakipte.",
          feedback: "Müşteriyi kilitlemek 'önce yenilmez ol' ilkesine uyar ve fiyat savaşına girmemen doğru. Ancak hâlâ tepki veriyorsun; rakibin planını bozmuyorsun, sadece etkisini geciktiriyorsun."
        },
        {
          text: "Savaş alanını değiştiririm: rakibin ucuza veremeyeceği bir değer (entegrasyon, hizmet, niş segment) etrafında konumlanır, dağıtım kanallarıyla münhasır ortaklıklar kurarım.",
          grade: "best",
          verdict: "Savaşmadan kazandın.",
          feedback: "Rakibin planını (fiyatla kıyaslanmak) geçersiz kıldın ve ittifakları (kanallar) ondan önce kapattın. Fiyat avantajı, fiyatın kıyaslanamadığı bir pazarda silah olmaktan çıkar. Bu, 'düşmanın planını bozmak + ittifaklarını dağıtmak' basamaklarının birebir uygulamasıdır."
        }
      ],
      note: "\"Muharebede zafer kazananlar yalnızca 'iyi savaşanlardır'; üstün olan, zaferi savaş gerekmeden elde edendir.\""
    },
    {
      domain: "Kişisel Gelişim",
      title: "Tartışmaya Davet",
      setup: "Aile toplantısında bir yakınınız, kalabalığın önünde sizi kışkırtan ve geçmiş bir hatanızı diline dolayan imalı sözler söylüyor. Herkes sizin tepkinizi bekliyor. Ne yaparsınız?",
      choices: [
        {
          text: "Anında ve sert şekilde cevap verir, haklılığımı herkese kanıtlarım.",
          grade: "poor",
          verdict: "Rakibin seçtiği savaşa girdin.",
          feedback: "Kışkırtan kişi zemini, zamanı ve seyirciyi kendisi seçti — sen sadece onun planındaki rolünü oynadın. Sun Tzu: 'Öfkelendirilmeye gelen komutan yenilgiye gelir.' Kazansan bile kalabalığın gözünde 'olay çıkaran' sensin."
        },
        {
          text: "Hiç cevap vermem, içime atar ve toplantı boyunca sessiz kalırım.",
          grade: "mid",
          verdict: "Çatışmadan kaçındın ama zemini terk ettin.",
          feedback: "Savaşa girmemek doğru içgüdü; fakat tam sessizlik bazen sahayı rakibe bırakır ve içeride biriken öfke başka bir gün kontrolsüz patlar. Savaşmadan kazanmak pasiflik değil, inisiyatifi geri almaktır."
        },
        {
          text: "Sakin bir espri ya da kısa, soğukkanlı bir cümleyle konuyu etkisizleştirir; gerekiyorsa konuyu daha sonra, baş başa ve kendi seçtiğim zamanda konuşurum.",
          grade: "best",
          verdict: "Savaşmadan kazandın.",
          feedback: "Kışkırtmanın amacı seni o an, o seyirci önünde savaşa çekmekti — planı bozdun. Asıl konuşmayı kendi seçtiğin zemine (baş başa, sakin an) taşıyarak araziyi sen belirledin. Seyirci önünde itibarını koruyan taraf da sen oldun."
        }
      ],
      note: "\"Üstün komutan, savaşacağı yeri ve zamanı kendisi seçer; düşmanını oraya getirtir, kendisi düşmanın ayağına gitmez.\""
    },
    {
      domain: "Siber Güvenlik (Savunma)",
      title: "Saldırganı Caydırmak",
      setup: "Orta ölçekli bir şirketin güvenlik mimarisinden sorumlusunuz. Tehdit istihbaratı, sektörünüzü hedefleyen bir fidye yazılımı grubunun fırsatçı (en kolay hedefi seçen) taramalar yaptığını söylüyor. Bütçeniz sınırlı. Önceliğiniz ne olur?",
      choices: [
        {
          text: "Bütçeyi olay müdahale (incident response) ekibini büyütmeye ayırırım; saldırı geldiğinde en hızlı şekilde savaşırız.",
          grade: "mid",
          verdict: "İyi savaşmaya hazırlanıyorsun; oysa hedef hiç savaşmamaktı.",
          feedback: "Müdahale kabiliyeti şart, ama bu strateji savaşı baştan kabul eder. Sun Tzu'nun sıralamasında 'orduyla sahada yüzleşmek' üçüncü sıradadır — ilk tercih değil. Fırsatçı saldırganı hiç kapıya getirmemek daha ucuzdur."
        },
        {
          text: "Saldırı yüzeyini küçültür ve saldırganın keşif aşamasını pahalılaştırırım: dışa açık servisleri azaltır, MFA'yı her yerde zorunlu kılar, yamaları otomatikleştiririm. Fırsatçı tarayıcı için 'kolay hedef' görüntüsünü ortadan kaldırırım.",
          grade: "best",
          verdict: "Savaşmadan kazandın.",
          feedback: "Fırsatçı saldırganın planı 'en ucuz hedefi bul' üzerine kuruludur. Keşif aşamasında maliyeti yükselterek bu planı bozdun: saldırgan daha kolay bir hedefe yönelir ve çatışma hiç yaşanmaz. Bu, savunmada 'düşmanın planını bozmak' ilkesinin birebir karşılığıdır."
        },
        {
          text: "Bütçeyi siber sigortaya ayırırım; saldırı olursa zarar karşılanır.",
          grade: "poor",
          verdict: "Yenilgiyi baştan fiyatladın.",
          feedback: "Sigorta zarar transferidir, strateji değil. Sun Tzu'nun diliyle: şehri kuşattırmayı kabul edip yıkım faturasını başkasına ödetmeyi planlıyorsun. Veri kaybı, kesinti ve itibar zararı poliçeyle geri gelmez; saldırgan için de 'kolay hedef' olmaya devam edersin."
        }
      ],
      note: "\"Önce kendini yenilmez kıl, sonra düşmanın yenilebilir olmasını bekle. Yenilmezlik kendi elindedir.\""
    },
    {
      domain: "Tarihsel Komuta",
      title: "Surların Önünde",
      setup: "MÖ 4. yüzyıl. Ordunuz, erzakı bol ve surları sağlam bir şehrin önünde. Şehrin müttefiki olan komşu devletin ordusu üç hafta uzaklıkta. Kendi erzakınız iki aylık. Kuşatma kuleleriniz hazır. Ne emredersiniz?",
      choices: [
        {
          text: "Derhal genel taarruz: kuleler hazırken surlara yüklenir, şehri kanla da olsa alırım.",
          grade: "poor",
          verdict: "Sun Tzu'nun 'en kötü yol' dediği tam olarak bu.",
          feedback: "Sur taarruzu askerin üçte birini duvar dibinde eritir ve şehir düşse bile elinize yıkıntı geçer. 'Bütün olarak ele geçirilen şehir, yakılıp yıkılandan değerlidir.' Üstelik üç hafta sonra yorgun ordunuz, gelen müttefik ordusuyla da savaşmak zorunda kalır."
        },
        {
          text: "Kuşatmayı sürdürür, şehri açlıkla teslim olmaya zorlarım.",
          grade: "mid",
          verdict: "Kan dökmüyorsun ama zaman senin aleyhine.",
          feedback: "Şehrin erzakı bol, seninki iki aylık; müttefik ordu üç hafta uzakta. Bekleyen taraf güçlenmiyor, zayıflıyorsun. Sun Tzu uzayan seferi en büyük tehlike sayar: 'Hiçbir ülke uzun süren savaştan fayda görmemiştir.'"
        },
        {
          text: "Elçi gönderip müttefik devlete tarafsız kalması için tavizler öneririm; aynı anda şehre 'müttefikiniz gelmeyecek, onurlu teslim şartları sunuyoruz' haberini ulaştırırım.",
          grade: "best",
          verdict: "Savaşmadan kazandın.",
          feedback: "Önce ittifakı dağıttın (müttefik tarafsızlaştı), sonra düşmanın planını (kurtarılma umudunu) çökerttin. Umudunu yitiren şehir, onurlu teslim şartlarıyla bütün olarak teslim olur: asker, erzak ve şehir sana sağlam geçer. Üç basamağın — plan, ittifak, ordu — ders kitabı uygulaması."
        }
      ],
      note: "\"Usta komutan, düşman birliklerini savaşmadan teslim alır; şehirleri kuşatmadan düşürür; devleti uzun seferlere sürüklemeden yıkar.\""
    }
  ],

  quiz: [
    {
      q: "Sun Tzu'ya göre stratejik tercihlerin doğru öncelik sırası hangisidir?",
      choices: [
        "Orduya saldır → planı boz → ittifakları dağıt → şehri kuşat",
        "Planı boz → ittifakları dağıt → orduya saldır → şehri kuşat",
        "İttifakları dağıt → şehri kuşat → planı boz → orduya saldır",
        "Şehri kuşat → orduya saldır → ittifakları dağıt → planı boz"
      ],
      answer: 1,
      explain: "Sıralama maliyete göredir: en ucuzu rakibin planını daha doğmadan bozmak, en pahalısı kuşatmadır. Her basamak bir öncekinin başarısız olduğu durumda devreye girer."
    },
    {
      q: "'Savaşmadan kazanmak' ilkesinin özü nedir?",
      choices: [
        "Çatışmadan her koşulda kaçınmak, gerekirse geri çekilmek",
        "Rakibi şaşırtmak için her zaman ilk saldıran olmak",
        "Rakibin savaşma iradesini ve planını, çatışma maliyeti ödemeden çökertmek",
        "Savaşı uzatarak rakibi yormak"
      ],
      answer: 2,
      explain: "Savaşmadan kazanmak pasiflik ya da kaçış değildir; inisiyatifi alıp rakibin planını, ittifaklarını ve iradesini hedefleyerek sonucu çatışma olmadan belirlemektir."
    },
    {
      q: "Rakip firmanın başlattığı fiyat savaşına aynı silahla (daha derin indirim) karşılık vermek Sun Tzu'nun hangi hatasına karşılık gelir?",
      choices: [
        "Casus kullanmamak",
        "Araziyi okumamak",
        "Rakibin seçtiği zeminde, en pahalı yöntemle savaşmak (kuşatma)",
        "Orduyu ikiye bölmek"
      ],
      answer: 2,
      explain: "Fiyat savaşı, rakibin seçtiği zemin ve silahtır; oraya girmek 'surlu şehri kuşatmak' gibi en yıpratıcı yola kendini kilitlemektir. Üstün strateji zemini değiştirir."
    },
    {
      q: "Savunma güvenliğinde 'saldırganın keşif maliyetini yükseltmek' hangi Sun Tzu basamağının uygulamasıdır?",
      choices: [
        "Düşmanın planını bozmak",
        "Şehri kuşatmak",
        "Orduyla sahada yüzleşmek",
        "Ateşle saldırı"
      ],
      answer: 0,
      explain: "Fırsatçı saldırganın planı 'en kolay hedefi seç' üzerine kuruludur. Kolay hedef görüntüsünü ortadan kaldırmak bu planı daha keşif aşamasında bozar; çatışma hiç başlamaz."
    },
    {
      q: "Sun Tzu kuşatmayı neden 'en kötü yol' sayar?",
      choices: [
        "Onursuz bir savaş biçimi olduğu için",
        "Zaman, kaynak ve insan maliyeti en yüksek yol olduğu ve ele geçirileni de tahrip ettiği için",
        "Surların hiçbir zaman aşılamayacağına inandığı için",
        "Kuşatma sırasında casusluk yapılamadığı için"
      ],
      answer: 1,
      explain: "Kuşatma aylar sürer, orduyu eritir ve şehir düşse bile geriye yıkıntı kalır. Sun Tzu için değerli olan, hedefi 'bütün olarak' ele geçirmektir."
    },
    {
      q: "Kalabalık önünde kışkırtılan kişinin 'asıl konuşmayı baş başa, kendi seçtiği zamana taşıması' hangi ilkenin uygulamasıdır?",
      choices: [
        "Ateşle saldırı: güçlü aracı kontrollü kullanmak",
        "Dokuz durum: ölüm zemininde savaşmak",
        "Savaşın yeri ve zamanını rakibe değil kendine seçtirmek",
        "Casusların kullanımı: bilgiyi gizlemek"
      ],
      answer: 2,
      explain: "Kışkırtan taraf zemin, zaman ve seyirciyi seçmiştir. Yanıtı erteleyip kendi zeminine taşıyan kişi inisiyatifi geri alır — 'düşmanını kendi ayağına getirt, onun ayağına gitme.'"
    }
  ],

  practice: [
    {
      title: "Bir 'fiyat savaşı'nı teşhis et",
      desc: "Bu hafta hayatında, rakibin/karşı tarafın seçtiği zeminde savaşmayı kabul ettiğin bir durum bul (tartışma, rekabet, pazarlık). Zemini nasıl değiştirebileceğini bir paragraf yaz."
    },
    {
      title: "Bir planı doğmadan boz",
      desc: "Önümüzdeki günlerde gelecek bir çatışmayı (zor toplantı, itiraz, müzakere) önceden tahmin et ve daha gerçekleşmeden etkisizleştirecek tek bir hamle planla (önden bilgi paylaş, beklentiyi yönet, müttefik kazan)."
    },
    {
      title: "Kuşatmalarını listele",
      desc: "Aylardır sürdürdüğün, kaynak tüketen ama ilerlemeyen bir 'kuşatmanı' (proje, alışkanlık mücadelesi, anlaşmazlık) belirle. Sun Tzu'nun ilk iki basamağıyla (planı boz / ittifakları değiştir) yeniden çerçevele ya da bilinçli olarak terk et."
    }
  ]
};
