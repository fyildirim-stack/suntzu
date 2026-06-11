// Bölüm 3 — Savaşmadan Kazanmak: modül içeriği.
// Senaryo ve quiz motoru (assets/js/app.js) bu veriyi okur;
// yeni bir modül eklemek için aynı şemada yeni bir data/modul-XX.js yazmak yeterlidir.
// Senaryolar dizi/film sahnelerine dayanır ve SPOILER içerir.

window.MODULE_DATA = {
  chapter: 3,
  title: "Savaşmadan Kazanmak",
  quote: "Yüz savaşta yüz zafer kazanmak hünerlerin en üstünü değildir. Hünerlerin en üstünü, düşmanı savaşmadan teslim almaktır.",
  quoteAuthor: "Sun Tzu, Savaş Sanatı, Bölüm 3 — Strateji ile Saldırı",

  principles: [
    {
      rank: "1", cls: "best",
      title: "En üstünü: Düşmanın planını boz",
      body: "Rakibin stratejisi daha kuruluş aşamasındayken etkisiz hale getirilir. Çatışma hiç başlamaz; maliyet sıfıra yakındır. Bunun ön koşulu istihbarat ve öngörüdür: planı görmeden bozamazsın. Ekrandan örnek: Gandalf'ın asıl planı Sauron'un ordusunu yenmek değil, gücünün kaynağını (Yüzük) yok etmektir."
    },
    {
      rank: "2", cls: "",
      title: "Sonra: İttifaklarını dağıt",
      body: "Rakibi yalnızlaştır. Müttefiklerinden, destekçilerinden, kaynaklarından koparılan rakip, savaşma iradesini büyük ölçüde yitirir. Ekrandan örnek: Tywin Lannister, sahada yenemediği Robb Stark'ı müttefiklerini (Frey ve Bolton) kopararak çökertti."
    },
    {
      rank: "3", cls: "",
      title: "Sonra: Ordusuyla sahada yüzleş",
      body: "Ancak ilk iki yol kapandıysa açık çatışmaya girilir. Bu noktada bile amaç imha değil, düşmanın direncini en az kayıpla kırmaktır: 'Bütün olarak ele geçirilen ülke, yakılıp yıkılan ülkeden değerlidir.' Ekrandan örnek: Piçlerin Savaşı'nda Jon Snow'un öfkeyle açık savaşa sürüklenişi, bu basamağın bile nasıl tuzağa dönüşebildiğini gösterir."
    },
    {
      rank: "4", cls: "worst",
      title: "En kötüsü: Surlarla çevrili şehri kuşat",
      body: "Kuşatma; zaman, kaynak ve insan kaybının en yüksek olduğu yoldur. Sun Tzu'ya göre kuşatma yalnızca başka hiçbir seçenek kalmadığında, çaresizlikten yapılır. Ekrandan örnek: Stannis Baratheon'un Karasu'da Kralın Şehri'ne doğrudan yüklenmesi — ordusunu surların (ve çıldırateşinin) önünde eritti."
    }
  ],

  scenarios: [
    {
      domain: "Game of Thrones",
      title: "Genç Kurt Sahada Yenilmiyor",
      setup: "Tywin Lannister'sın. Robb Stark girdiği her meydan savaşını kazandı; ordusu kararlı, komutanlığı parlak. Westeros'un en zengin hanesi sensin ama sahada onu yenemiyorsun. Ne yaparsın?",
      choices: [
        {
          text: "Bütün Lannister gücünü toplar, Genç Kurt'la son bir büyük meydan savaşına girerim.",
          grade: "poor",
          verdict: "Rakibin en güçlü olduğu zeminde savaşmayı seçtin.",
          feedback: "Robb'un tek üstün olduğu alan meydan savaşı — onu tam orada karşılamak, üçüncü basamağa (orduyla yüzleşme) üstelik rakibin şartlarında inmektir. Dizide bu yolu seçen Stannis'in Karasu'da başına geleni hatırla: cesaret, yanlış zeminde sadece kayıpları büyütür."
        },
        {
          text: "Nehirova'yı kuşatır, Tully topraklarını aç bırakarak Kuzey ordusunu eritirim.",
          grade: "mid",
          verdict: "Kuşatmaya girdin — en pahalı yol.",
          feedback: "Kan dökmüyorsun ama Sun Tzu'nun 'en kötü seçenek' dediği basamaktasın: aylar sürer, hazineni tüketir ve bu sırada Stannis gibi diğer düşmanların serbest kalır. Tywin'in dehası, savaşı kazanmanın ordularla ilgili olmadığını görmesiydi."
        },
        {
          text: "Robb'un ittifakını içeriden çözerim: evlilik sözü bozularak küstürülen Freyler ve hırslı Boltonlarla gizlice anlaşırım.",
          grade: "best",
          verdict: "Savaşmadan kazandın — Kızıl Düğün'ün stratejik anatomisi bu.",
          feedback: "Sahada yenilmeyen ordu, ittifakları dağıtılınca tek gecede çöktü. Robb kendi eliyle açık vermişti: Frey'lere verdiği evlilik sözünü bozarak müttefikini küstürdü. Tywin bu çatlağı gördü ve ikinci basamağı ('ittifakları dağıt') acımasız bir kusursuzlukla uyguladı. Ahlaken karanlık, stratejik olarak ders kitabı — Tywin'in kendi sözüyle: 'Akşam yemeğinde bir düzine adam öldürmek neden savaşta on bin adam öldürmekten daha az soylu, açıkla bana.'"
        }
      ],
      note: "\"Üstün strateji önce düşmanın planına, sonra ittifaklarına, en son ordusuna saldırır.\""
    },
    {
      domain: "The Godfather",
      title: "Beş Aile Savaşı",
      setup: "Vito Corleone'sin. Büyük oğlun Sonny pusuya düşürülüp öldürüldü, sen suikasttan yeni çıktın, Michael sürgünde. Ailelerin savaşı iki tarafı da kanatıyor. Konsey senden intikam bekliyor. Ne yaparsın?",
      choices: [
        {
          text: "Sonny'nin intikamı için Tattaglia ailesine topyekûn savaş açarım.",
          grade: "poor",
          verdict: "Öfkeyle savaşa gelen, yenilgiye gelir.",
          feedback: "İntikam savaşı tam olarak rakiplerinin istediği şey: aile kan kaybetmeye devam eder, polis ve siyaset desteğini yitirirsin ve Michael asla eve dönemez. Sun Tzu: 'Öfke yeniden sevince dönebilir; ama yok olan devlet bir daha kurulamaz.'"
        },
        {
          text: "Savunmaya çekilir, aileyi korur ve fırtınanın geçmesini beklerim.",
          grade: "mid",
          verdict: "Yenilmezsin ama zafer planın yok.",
          feedback: "Savunma seni yenilgiden korur — Sun Tzu'nun 'önce yenilmez ol' ilkesi. Ama tek başına bekleyiş zafer getirmez: Michael sürgünde kalır, rakipler güçlenir, inisiyatif onlarda. Savaşmadan kazanmak pasiflik değil, inisiyatifi geri almaktır."
        },
        {
          text: "Beş Aile toplantısını ben çağırır, barışı ben ilan ederim: 'Bu savaşı ben bitiriyorum.'",
          grade: "best",
          verdict: "Savaşmadan kazandın.",
          feedback: "Vito'nun yaptığı tam olarak bu: masayı kendisi kurdu, barışın şartlarını kendisi belirledi ve Michael'ın güvenli dönüşünü güvence altına aldı. Üstelik o masada asıl düşmanın Tattaglia değil Barzini olduğunu gördü — barış toplantısı aynı zamanda istihbarat zaferiydi. Savaşın yerini, zamanını ve bitişini rakibine değil kendine seçtirdin."
        }
      ],
      note: "\"Usta komutan, düşman birliklerini savaşmadan teslim alır; savaşın nerede biteceğine de kendisi karar verir.\""
    },
    {
      domain: "Breaking Bad",
      title: "Kartelin Gölgesinde",
      setup: "Gus Fring'sin. Kartel senden boyun eğmeni istiyor; yıllar önce ortağını gözünün önünde öldürdüler ve güçleri hâlâ seninkinden büyük. Şimdi yeniden kapına dayandılar. Ne yaparsın?",
      choices: [
        {
          text: "Adamlarımla anında misilleme yapar, kartele açık savaş ilan ederim.",
          grade: "poor",
          verdict: "Gücün yetmeyen savaşa girdin.",
          feedback: "Sun Tzu net: 'Sayıca eşit değilsen düşmandan kaçınmayı bil.' Kartel hâlâ daha güçlü; açık savaş seni Los Pollos imparatorluğunla birlikte yok eder. Öfke duyduğun anda savaşmak, intikamı değil yıkımı garantiler."
        },
        {
          text: "Şimdilik şartlarını kabul eder, haraç öder ve zaman kazanırım.",
          grade: "mid",
          verdict: "Zaman kazandın ama plan hâlâ onlarda.",
          feedback: "Geri çekilmek bazen araçtır, ama tek başına strateji değildir. Sadece ödersen 'kolay kaynak' olursun ve istekleri büyür. Gus'ın farkı: boyun eğer GİBİ yaparken aslında yenilmez bir cephe (meşru iş, kusursuz operasyon) inşa edip kendi saatini beklemesiydi."
        },
        {
          text: "Yıllarca sabreder, yenilmez bir meşru cephe kurarım; sonra 'teslimiyet' görüntüsüyle düşmanın ayağına gider ve liderliği tek hamlede, kendi zafer kutlamasının ortasında çökertirim.",
          grade: "best",
          verdict: "Savaşmadan kazandın — 'Salud' sahnesinin anatomisi.",
          feedback: "Gus önce kendini yenilmez kıldı (Sun Tzu, Bölüm 4'ün ön sezisi), sonra düşmanın planını — seni teslim almış olma rahatlığını — silaha çevirdi. Kartelin tüm liderliği tek bir kadehte düştü; tek bir kurşun sıkılmış bir 'savaş' yaşanmadı. Düşmanını kendi ayağına değil, kendi kibrine yakalattın."
        }
      ],
      note: "\"Önce kendini yenilmez kıl, sonra düşmanın yenilebilir olmasını bekle. Yenilmezlik kendi elindedir; düşmanın açığı onun elindedir.\""
    },
    {
      domain: "Yüzüklerin Efendisi",
      title: "Mordor'a Karşı",
      setup: "Batı'nın baş stratejisti Gandalf'sın. Sauron'un orduları sayıca ezici, gücü her gün artıyor ve hiçbir ordu Mordor'u savaş meydanında yenemez. Elrond Konseyi senden bir yol bekliyor. Ne önerirsin?",
      choices: [
        {
          text: "İnsanların ve elflerin bütün ordularını toplayıp Mordor'a topyekûn taarruz öneririm.",
          grade: "poor",
          verdict: "Düşmanın gücünün kaynağına değil, gölgesine saldırdın.",
          feedback: "Sayıca ezici bir düşmana karşı topyekûn taarruz, ordunu yok eder ve Sauron'un asıl gücüne — Yüzük'e — hiç dokunmaz. Son İttifak bunu bir kez denedi; zafer bile kalıcı olmadı çünkü gücün kaynağı ayakta kaldı. Orduyu yenmek, planı yenmek değildir."
        },
        {
          text: "Minas Tirith'i güçlendirip sonsuz savunmaya geçmeyi öneririm; surlar arkasında bekleriz.",
          grade: "mid",
          verdict: "Yenilgiyi geciktirdin, zaferi planlamadın.",
          feedback: "Savunma seni bugün ayakta tutar — ama Sauron her gün güçlenirken zaman senin aleyhine işliyor. Sun Tzu: savunma yenilgiyi önler, zaferi getirmez. Kuşatılan taraf olmayı kabul etmek, kuşatma yapmak kadar pahalı bir bekleyiştir."
        },
        {
          text: "Yüzük'ü gizlice Hüküm Dağı'na gönderirim; Kara Kapı önüne çıkardığımız ordu yalnızca Sauron'un Göz'ünü başka yöne çeken bir aldatmacadır.",
          grade: "best",
          verdict: "Savaşmadan kazandın — planın kaynağını yok ettin.",
          feedback: "Birinci basamağın en saf hali: düşmanın ordusu değil, gücünün ve planının kaynağı (Yüzük) hedef alındı. Kara Kapı'daki 'umutsuz saldırı' bile asıl plana hizmet eden bir aldatmacaydı — Sun Tzu'nun 'savaş, aldatma yoludur' ilkesiyle birinci basamağın kusursuz birleşimi. Yüzük eridiğinde milyonluk ordu tek kılıç darbesi gerekmeden çöktü."
        }
      ],
      note: "\"Üstün komutan zaferi, kalabalık orduda değil, düşmanın dayandığı şeyi görmekte arar.\""
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
      q: "Robb Stark sahada hiç yenilmemişken Tywin Lannister zaferi hangi basamakla kazandı?",
      choices: [
        "Daha büyük bir orduyla meydan savaşında",
        "Nehirova'yı kuşatarak",
        "Robb'un ittifakını (Frey ve Bolton) içeriden çözerek",
        "Kışyarı'nı ele geçirerek"
      ],
      answer: 2,
      explain: "Kızıl Düğün, 'ittifakları dağıt' basamağının ekrandaki en çarpıcı örneğidir: meydanda yenilmeyen ordu, müttefikleri koparılınca tek gecede çöktü. Robb'un Frey'lere verdiği sözü bozması, Tywin'in kullandığı çatlağı bizzat açmıştı."
    },
    {
      q: "Yüzüklerin Efendisi'nde Yüzük'ü yok etme planı Sun Tzu'nun hangi ilkesinin örneğidir?",
      choices: [
        "Düşmanın planını ve gücünün kaynağını bozmak",
        "Şehri kuşatmak",
        "Orduyla sahada yüzleşmek",
        "Uzun savaşla düşmanı yormak"
      ],
      answer: 0,
      explain: "Sauron'un ordusu değil, gücünün kaynağı (Yüzük) hedef alındı — birinci basamağın en saf hali. Kara Kapı'daki saldırı bile asıl plana hizmet eden bir aldatmacaydı."
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
      explain: "Kuşatma aylar sürer, orduyu eritir ve şehir düşse bile geriye yıkıntı kalır. Stannis'in Karasu'da surlara doğrudan yüklenmesi bu maliyetin ekrandaki özetidir."
    },
    {
      q: "Vito Corleone'nin Beş Aile toplantısını bizzat çağırıp barışı kendisinin ilan etmesi hangi ilkenin uygulamasıdır?",
      choices: [
        "Ateşle saldırı: güçlü aracı kontrollü kullanmak",
        "Dokuz durum: ölüm zemininde savaşmak",
        "Savaşın yerini, zamanını ve bitişini rakibe değil kendine seçtirmek",
        "Casusların kullanımı: bilgiyi gizlemek"
      ],
      answer: 2,
      explain: "Vito masayı kendisi kurdu, şartları kendisi belirledi ve Michael'ın dönüşünü güvence altına aldı — üstelik o masada asıl düşmanın Barzini olduğunu da gördü. İnisiyatif baştan sona ondaydı."
    }
  ],

  practice: [
    {
      title: "Kızıl Düğün'ü stratejist gözüyle yeniden izle",
      desc: "Game of Thrones S3 'The Rains of Castamere' bölümünü aç ve dört basamaklı merdiveni sahneye uygula: Tywin hangi basamağı kullandı? Robb hangi hatayla (Frey ittifakını kendi eliyle kırarak) bu kapıyı araladı?"
    },
    {
      title: "İzlediğin bir dizide 'kuşatma' bul",
      desc: "Şu an izlediğin herhangi bir dizide aylardır süren, iki tarafı da tüketen ve ilerlemeyen bir çatışma bul (rekabet, dava, aile kavgası...). Karakterlerin yerinde olsan hangi üst basamak (planı boz / ittifakı dağıt) mümkündü? Bir paragraf yaz."
    },
    {
      title: "Bir bölümü Sun Tzu gözüyle izle",
      desc: "Favori stratejistini seç — Tyrion, Gus Fring, Michael Corleone, Varys... Bir bölüm boyunca verdiği her kararı 'planı boz / ittifakı dağıt / orduyla yüzleş / kuşat' şemasına yerleştir. Hangi basamakta en çok vakit geçiriyor?"
    }
  ]
};
