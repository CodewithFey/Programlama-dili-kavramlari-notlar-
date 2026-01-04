(function() {
    const data = [{
            "term": "Paradigma",
            "def": "Bir dili/programı düşünme ve yazma yaklaşımıdır (yapısal, OOP, fonksiyonel, mantıksal…). Sınavda: C prosedürel; C++ çok-paradigmalı.",
            "tag": "Temel"
        },
        {
            "term": "Readability (Okunabilirlik)",
            "def": "Kodun insan tarafından anlaşılma kolaylığı. İyi isimlendirme, basit ifade, tutarlı kurallar artırır.",
            "tag": "Değerlendirme"
        },
        {
            "term": "Writability (Yazılabilirlik)",
            "def": "Kod yazma kolaylığı. Güçlü soyutlama ve kısa sözdizimi artırır.",
            "tag": "Değerlendirme"
        },
        {
            "term": "Reliability (Güvenilirlik)",
            "def": "Programın doğru çalışmaya devam etmesi. Tip güvenliği, hata yakalama ve bellek güvenliği etkiler.",
            "tag": "Değerlendirme"
        },
        {
            "term": "Trade-off",
            "def": "Bir özelliği artırırken diğerinden ödün verme (örn. güvenlik ↑, performans ↓).",
            "tag": "Değerlendirme"
        },
        {
            "term": "Syntax (Sözdizimi)",
            "def": "Bir dilde geçerli ifadelerin nasıl yazılacağını belirleyen kurallar.",
            "tag": "Syntax/Semantics"
        },
        {
            "term": "Semantics (Anlambilim)",
            "def": "Sözdizimi doğru bir yapının ‘ne anlama geldiği’ ve nasıl çalıştığı.",
            "tag": "Syntax/Semantics"
        },
        {
            "term": "Lexical Scope (Statik kapsam)",
            "def": "Değişkenin görünürlüğü kodun yazıldığı yere göre belirlenir. C/C++/Java statiktir.",
            "tag": "Scope"
        },
        {
            "term": "Dynamic Scope (Dinamik kapsam)",
            "def": "Değişkenin görünürlüğü çağrı zincirine göre belirlenir. (C’de yok, bazı eski dillerde)",
            "tag": "Scope"
        },
        {
            "term": "Binding (Bağlama)",
            "def": "Bir ismin bir varlığa bağlanması: isim→adres, isim→tip, çağrı→metot gibi.",
            "tag": "Tip/Binding"
        },
        {
            "term": "Static Binding",
            "def": "Bağlamanın derleme zamanında belirlenmesi (C’de çoğu şey).",
            "tag": "Tip/Binding"
        },
        {
            "term": "Dynamic Binding",
            "def": "Bağlamanın çalışma zamanında belirlenmesi (OOP’de sanal çağrı).",
            "tag": "Tip/Binding"
        },
        {
            "term": "Lifetime (Ömür)",
            "def": "Bir değişkenin bellekte yaşadığı süre (stack frame, heap nesnesi, static alan).",
            "tag": "Bellek"
        },
        {
            "term": "Stack (Yığın)",
            "def": "Fonksiyon çağrıları/yerel değişkenler için otomatik yönetilen bellek bölgesi.",
            "tag": "Bellek"
        },
        {
            "term": "Heap (Öbek)",
            "def": "Dinamik tahsis edilen (malloc/new) verilerin tutulduğu bellek bölgesi.",
            "tag": "Bellek"
        },
        {
            "term": "Primitive Type (İlkel tip)",
            "def": "Tek bir değer taşıyan temel tipler (int, char, float…).",
            "tag": "Tipler"
        },
        {
            "term": "Composite Type (Birleşik tip)",
            "def": "Birden fazla bileşenden oluşan tipler (array, struct, class…).",
            "tag": "Tipler"
        },
        {
            "term": "Value Type",
            "def": "Değerin kendisi kopyalanır (C’de temel tip atamaları).",
            "tag": "Tipler"
        },
        {
            "term": "Reference Type",
            "def": "Değer yerine adres/referans kopyalanır (pointer/referans/nesne referansı).",
            "tag": "Tipler"
        },
        {
            "term": "Pointer",
            "def": "Bellek adresi tutan değişken. C’de temel araç; yanlış kullanım UB doğurur.",
            "tag": "Pointer"
        },
        {
            "term": "Reference (C++)",
            "def": "Bir değişkene takma ad. Parametre iletiminde call-by-reference benzeri davranış.",
            "tag": "C++"
        },
        {
            "term": "Call by Value",
            "def": "Argümanın kopyası gönderilir; fonksiyon dışı değişmez (C’nin temel iletimi).",
            "tag": "Parametre"
        },
        {
            "term": "Call by Reference",
            "def": "Argümanın kendisine erişim verilir; dışarıdaki değer değişebilir (C++ referans).",
            "tag": "Parametre"
        },
        {
            "term": "Call by Address",
            "def": "Adres gönderilerek değiştirilebilirlik sağlanır (C’de pointer parametresi).",
            "tag": "Parametre"
        },
        {
            "term": "Overloading",
            "def": "Aynı isimle farklı parametre listeleri tanımlamak (C++/C#).",
            "tag": "OOP"
        },
        {
            "term": "Overriding",
            "def": "Alt sınıfın üst sınıf metodunu yeniden tanımlaması (virtual/override).",
            "tag": "OOP"
        },
        {
            "term": "Encapsulation",
            "def": "Veriyi ve ilgili fonksiyonları bir arada tutma + erişimi kontrol etme.",
            "tag": "OOP"
        },
        {
            "term": "Inheritance",
            "def": "Alt sınıfın üst sınıfın özelliklerini devralması.",
            "tag": "OOP"
        },
        {
            "term": "Polymorphism",
            "def": "Aynı arayüzle farklı davranış (virtual dispatch).",
            "tag": "OOP"
        },
        {
            "term": "Abstract Class",
            "def": "Tamamlanmamış sınıf; hem gövdeli hem gövdesiz metot içerebilir.",
            "tag": "OOP"
        },
        {
            "term": "Interface",
            "def": "Sadece ‘ne yapılacağını’ tarif eden sözleşme (C# / Java).",
            "tag": "OOP"
        },
        {
            "term": "Exception",
            "def": "Beklenmedik durum/hata olayı. Diller try/catch ile yakalayabilir.",
            "tag": "Exception"
        },
        {
            "term": "try/catch",
            "def": "Hata oluşabilecek kodu dene; oluşursa yakala ve yönet.",
            "tag": "Exception"
        },
        {
            "term": "finally",
            "def": "Hata olsun olmasın çalışacak temizlik bölümü (C#/Java/Python).",
            "tag": "Exception"
        },
        {
            "term": "errno (C)",
            "def": "C’de kütüphane çağrılarının hata kodunu tuttuğu global değişken yaklaşımı.",
            "tag": "Exception"
        },
        {
            "term": "setjmp/longjmp",
            "def": "C’de istisnaya benzer kontrol sıçraması. Dikkat: kaynak temizliği zor.",
            "tag": "Exception"
        },
        {
            "term": "Separate Compilation (Ayrı derleme)",
            "def": "Kaynak dosyalar ayrı derlenir, sonra linker ile birleştirilir (C/C++).",
            "tag": "Derleme"
        },
        {
            "term": "Independent Compilation",
            "def": "Modül bağımsız derlenebilir ama çapraz tip denetimi zayıf olabilir.",
            "tag": "Derleme"
        },
        {
            "term": "Dependent Compilation",
            "def": "Bölümler birbirine çok bağımlı; değişiklikte toplu derleme gerekir.",
            "tag": "Derleme"
        },
        {
            "term": "Linking (Bağlama)",
            "def": "Derlenmiş nesne dosyalarını birleştirip çalıştırılabilir üretme.",
            "tag": "Derleme"
        },
        {
            "term": "Static Library",
            "def": "Program içine gömülen kütüphane (.a). Boyut artar, dağıtım kolay.",
            "tag": "Derleme"
        },
        {
            "term": "Dynamic Library",
            "def": "Çalışma anında yüklenen/paylaşılan kütüphane (.so/.dll).",
            "tag": "Derleme"
        },
        {
            "term": "Header Guard",
            "def": "Aynı header’ın birden çok include edilmesini önler (#ifndef/#define).",
            "tag": "C"
        },
        {
            "term": "Undefined Behavior (UB)",
            "def": "C/C++’ta standardın sonucu tanımlamadığı durum (ör. geçersiz pointer).",
            "tag": "C"
        },
        {
            "term": "Sequence Point / Evaluation Order",
            "def": "İfade içinde yan etkilerin sırası. C’de bazı durumlar belirsiz/UB olabilir.",
            "tag": "C"
        },
        {
            "term": "Token",
            "def": "Lexical analizde en küçük anlamlı birim (identifier, keyword, literal).",
            "tag": "Syntax/Semantics"
        },
        {
            "term": "Parser",
            "def": "Token’lardan parse tree/AST oluşturan analiz aşaması.",
            "tag": "Syntax/Semantics"
        },
        {
            "term": "AST",
            "def": "Abstract Syntax Tree: derleyicinin ara gösterimi.",
            "tag": "Syntax/Semantics"
        },
        {
            "term": "Type Checking",
            "def": "Değerlerin tür uyumunu denetleme (static/dynamic).",
            "tag": "Tipler"
        },
        {
            "term": "Static Typing",
            "def": "Türler derleme zamanında bilinir (C, C++).",
            "tag": "Tipler"
        },
        {
            "term": "Dynamic Typing",
            "def": "Türler çalışma zamanında belirlenir (Python).",
            "tag": "Tipler"
        },
        {
            "term": "Type Inference",
            "def": "Türün otomatik çıkarılması (C++ auto, bazı diller).",
            "tag": "Tipler"
        },
        {
            "term": "Garbage Collection",
            "def": "Kullanılmayan heap nesnelerini otomatik temizleme (Java, Python).",
            "tag": "Bellek"
        },
        {
            "term": "Manual Memory Management",
            "def": "malloc/free veya new/delete ile manuel yönetim (C/C++).",
            "tag": "Bellek"
        },
        {
            "term": "Dangling Pointer",
            "def": "Serbest bırakılmış belleğe işaret eden pointer.",
            "tag": "Pointer"
        },
        {
            "term": "Memory Leak",
            "def": "Serbest bırakılmayan heap belleği.",
            "tag": "Bellek"
        },
        {
            "term": "Recursion",
            "def": "Fonksiyonun kendini çağırması.",
            "tag": "Alt Programlar"
        },
        {
            "term": "Activation Record",
            "def": "Fonksiyon çağrısının stack’te tuttuğu çerçeve (parametreler, locals).",
            "tag": "Alt Programlar"
        },
        {
            "term": "Pass-by-Result",
            "def": "Parametre çıkışta kopyalanır (bazı diller).",
            "tag": "Parametre"
        },
        {
            "term": "Pass-by-Value-Result",
            "def": "Girişte kopyala, çıkışta geri kopyala.",
            "tag": "Parametre"
        },
        {
            "term": "First-class Function",
            "def": "Fonksiyonların değer gibi taşınabilmesi (lambda, parametre).",
            "tag": "Fonksiyonel"
        },
        {
            "term": "Higher-order Function",
            "def": "Fonksiyon alan/dönen fonksiyon.",
            "tag": "Fonksiyonel"
        },
        {
            "term": "Pure Function",
            "def": "Yan etkisi olmayan, aynı girdi→aynı çıktı.",
            "tag": "Fonksiyonel"
        },
        {
            "term": "Immutability",
            "def": "Değerlerin değiştirilemez olması (fonksiyonelde önemli).",
            "tag": "Fonksiyonel"
        },
        {
            "term": "Closure",
            "def": "Fonksiyonun dış scope değişkenlerini ‘kapatıp’ taşıması.",
            "tag": "Fonksiyonel"
        },
        {
            "term": "Tail Recursion",
            "def": "Son işlem recursion; optimize edilebilir.",
            "tag": "Fonksiyonel"
        },
        {
            "term": "Unification",
            "def": "Prolog’da terimleri eşleştirme süreci.",
            "tag": "Prolog"
        },
        {
            "term": "Backtracking",
            "def": "Prolog’da başarısız yoldan geri dönüp alternatif deneme.",
            "tag": "Prolog"
        },
        {
            "term": "Fact (Prolog)",
            "def": "Doğru kabul edilen olgu: insan(eda).",
            "tag": "Prolog"
        },
        {
            "term": "Rule (Prolog)",
            "def": "Çıkarım kuralı: olumlu(X) :- insan(X).",
            "tag": "Prolog"
        },
        {
            "term": "Query (Prolog)",
            "def": "Sorgu: ?- olumlu(eda).",
            "tag": "Prolog"
        },
        {
            "term": "Cut (!)",
            "def": "Prolog’da geri izlemeyi (backtracking) keser; kontrol aracıdır.",
            "tag": "Prolog"
        },
        {
            "term": "Race Condition",
            "def": "Eşzamanlı çalışmada zamanlamaya bağlı yanlış sonuç.",
            "tag": "Concurrency"
        },
        {
            "term": "Critical Section",
            "def": "Paylaşılan kaynağa erişen kod bölgesi.",
            "tag": "Concurrency"
        },
        {
            "term": "Mutex",
            "def": "Karşılıklı dışlama kilidi.",
            "tag": "Concurrency"
        },
        {
            "term": "Semaphore",
            "def": "Sayma tabanlı senkronizasyon aracı.",
            "tag": "Concurrency"
        },
        {
            "term": "Monitor",
            "def": "Kilit+koşul değişkenleriyle yüksek seviye senkronizasyon.",
            "tag": "Concurrency"
        },
        {
            "term": "Deadlock",
            "def": "İş parçalarının birbirini sonsuz beklemesi (4 koşul).",
            "tag": "Concurrency"
        },
        {
            "term": "Starvation",
            "def": "Bazı iş parçalarının sürekli kaynak alamaması.",
            "tag": "Concurrency"
        },
        {
            "term": "TCP",
            "def": "Bağlantı yönelimli, güvenilir taşıma protokolü.",
            "tag": "Network"
        },
        {
            "term": "UDP",
            "def": "Bağlantısız, hızlı ama güvenilirlik garantisi yok.",
            "tag": "Network"
        }
    ];

    const grid = document.getElementById('flashGrid');
    const count = document.getElementById('flashCount');
    const search = document.getElementById('flashSearch');

    function escapeHtml(s) {
        return (s || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    function cardHTML(item) {
        const term = escapeHtml(item.term);
        const tag = escapeHtml(item.tag || '');
        const def = escapeHtml(item.def || '').replaceAll('\n', '<br/>');
        return `
      <div class="flashcard" tabindex="0" role="button" aria-label="Kart: ${term}">
        <div class="flash-inner">
          <div class="flash-face flash-front">
            <div>
              <h3>${term}</h3>
              <div class="meta">${tag}</div>
            </div>
            <span class="flash-tag">Tıkla / Enter</span>
          </div>
          <div class="flash-face flash-back">
            <h3>${term}</h3>
            <div class="flash-def">
              ${def}
            </div>
          </div>
        </div>
      </div>
    `;
    }

    function render(list) {
        if (!grid) return;
        grid.innerHTML = list.map(cardHTML).join('');
        if (count) count.textContent = `${list.length} kart`;
        // flip behavior
        grid.querySelectorAll('.flashcard').forEach(card => {
            const toggle = () => card.classList.toggle('flipped');
            card.addEventListener('click', toggle);
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggle();
                }
            });
        });
    }

    function filter() {
        const term = (search?.value || '').trim().toLowerCase();
        if (!term) { render(data); return; }
        const filtered = data.filter(x =>
            (x.term || '').toLowerCase().includes(term) ||
            (x.def || '').toLowerCase().includes(term) ||
            (x.tag || '').toLowerCase().includes(term)
        );
        render(filtered);
    }

    if (search) search.addEventListener('input', filter);

    render(data);
})();