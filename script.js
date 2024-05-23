function GetTime() // GetTime adında bir fonksiyon tanımlar.
{
    var now = new Date(); // Şu anki tarihi ve saati içeren bir Date objesi oluşturur.
    var hour = now.getHours(); // Saat bilgisini alır.
    var minute = now.getMinutes(); // Dakika bilgisini alır.
    var second = now.getSeconds(); // Saniye bilgisini alır.

    var day = now.getDate(); // Gün bilgisini alır.
    var month = now.getMonth()+1; // Ay bilgisini alır. JavaScript'te aylar 0'dan başladığı için 1 ekleriz.
    var year = now.getFullYear(); // Yıl bilgisini alır.

    // Saat, dakika ve saniye değerleri eğer 10'dan küçükse başlarına '0' ekler.
    (hour < 10) ? document.getElementById("hour").innerText = "0" + hour:
               document.getElementById("hour").innerText = hour;

    (minute < 10) ? document.getElementById("minute").innerText = "0" + minute:
                 document.getElementById("minute").innerText = minute;

    (second < 10) ? document.getElementById("second").innerText = "0" + second:
                 document.getElementById("second").innerText = second;

    // Tarih bilgisini 'gün / ay / yıl' formatında ekrana yazdırır.
    document.getElementById("date").innerText = day + " / " + month + " / " + year;
}

// setInterval fonksiyonu, belirtilen süre (milisaniye cinsinden) sonunda tekrar tekrar bir fonksiyonu çalıştırır.
// Burada, GetTime fonksiyonunu her 1000 milisaniyede (1 saniye) bir kez çalıştırır.
setInterval(function(){GetTime();},1000);