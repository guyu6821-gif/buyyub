# UniFy - BDU Tələbə Köməkçisi

Bakı Dövlət Universiteti tələbələri üçün hesablama və məlumat platforması.

## Xüsusiyyətlər

- ✅ Semestr balı hesablama (seminar, kollekvium, sərbəst iş, davamiyyət)
- ✅ ÜOMG hesablama (kredit əsaslı)
- ✅ 25% İmtahan pulu hesablama
- ✅ Yaş hesablayıcı (gün sayı və növbəti ad günü)
- ✅ Akademik lüğət və məlumat bölməsi
- ✅ Sürətli linklər (BDU, sosial media)
- ✅ Progressive Web App (PWA)
- ✅ **Offline tam dəstək** - İnternet olmadan işləyir
- ✅ **Quraşdırma ikonu** - İlk girişdə görünür
- ✅ **UniFy loqosu** - Splash screen və ikonlar
- ✅ Tam responsive dizayn

## PWA Xüsusiyyətləri

🔄 **Avtomatik cache yeniləmə** - Köhnə versiyalar avtomatik silinir
💾 **Offline işləmə** - İnternet olmadan tam funksional
📱 **Ana ekrana əlavə** - Quraşdırma düyməsi ilk girişdə görünür
⚡ **Sürətli yükləmə** - Cache edilmiş resurslar
🎨 **Splash screen** - UniFy loqosu ilə açılış ekranı
📲 **PWA standartları** - Manifest.json və Service Worker

## Texnologiyalar

- HTML5
- CSS3
- Vanilla JavaScript
- Service Worker (PWA)
- Manifest.json
- UniFy Brand Design

## Lokal İstifadə

1. Repository-ni klonlayın:
```bash
git clone https://github.com/guyu6821-gif/buyyub.git
cd buyyub
```

2. Lokal serverdə işə salın:
```bash
python -m http.server 8000
```

3. Brauzerdə açın: `http://localhost:8000`

## Render.com-da Deploy

1. **Render.com** hesabınıza daxil olun: https://render.com
2. "New Static Site" seçin
3. GitHub repository-ni bağlayın: `guyu6821-gif/buyyub`
4. Parametrlər:
   - **Build Command:** boş buraxın
   - **Publish Directory:** `.` (root directory)
5. "Create Static Site" düyməsinə basın

## Struktur

```
webapp/
├── index.html          # Ana səhifə (splash screen daxil)
├── styles.css          # Responsive dizayn
├── app.js             # Hesablama və PWA məntiqi
├── service-worker.js  # Offline cache sistemi
├── manifest.json      # PWA konfiqurasiya
├── logo.png           # UniFy orijinal logo (1024x1024)
├── icon-192.png       # PWA ikonu 192x192
├── icon-512.png       # PWA ikonu 512x512
├── README.md          # Sənədləşdirmə
└── .gitignore         # Git ignore
```

## PWA Quraşdırma

### Mobil (Android/iOS):
1. Saytı brauzerdə açın
2. "Quraşdır" düyməsinə basın
3. Və ya brauzer menyusundan "Ana ekrana əlavə et" seçin
4. Tətbiq artıq offline işləyir!

### Desktop (Chrome/Edge):
1. Saytı açın
2. Ünvan çubuğundakı quraşdırma ikonuna basın
3. "Quraşdır" düyməsinə basın

## Offline İşləmə

✅ Tətbiq quraşdırıldıqdan sonra tam offline işləyir
✅ Bütün hesablama funksiyaları internet olmadan da əlçatandır
✅ Cache avtomatik yenilənir (yeni versiyalar olduqda)
✅ Service Worker bütün resursları cache edir

## Əlaqə

**Sayt sahibi:** [@desespere_etoile](https://www.instagram.com/desespere_etoile)

**Sərbəst iş sifarişi:** WhatsApp +994559406018

## URL-lər

- **GitHub:** https://github.com/guyu6821-gif/buyyub
- **Test URL:** https://3000-ikunyar38tcebwb9z0pr7-cc2fbc16.sandbox.novita.ai

## Versiya

**v1.0.1** - UniFy Brand Update
- ✅ Quraşdırma ikonu ilk girişdə görünür
- ✅ Offline tam dəstək
- ✅ UniFy loqosu və splash screen
- ✅ Cache avtomatik yeniləmə

## Lisenziya

© 2024 UniFy - BDU Tələbə Köməkçisi. Bütün hüquqlar qorunur.

