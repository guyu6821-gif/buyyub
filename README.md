# UniFy - BDU Tələbə Köməkçisi

Bakı Dövlət Universiteti tələbələri üçün hesablama və məlumat platforması.

## ⚠️ ÖNƏMLİ: Bu Pure Static Site-dır

**Bu layihə Render.com, Netlify və ya Vercel üçün hazırlanıb.**
- ✅ **Render.com** (tövsiyə edilir - ən asan)
- ✅ Netlify (sürətli)
- ✅ Vercel (modern)
- ✅ GitHub Pages (sadə)
- ❌ **Cloudflare Workers** (işləməz - backend yoxdur, pure static site-dır)

**📖 Ətraflı məlumat:** `DEPLOY_PLATFORM.md` faylına baxın

**🔄 Cache və Versiya Sistemi:** `CACHE_VERSIYA_IZAH.md` faylına baxın

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

### Addım 1: Render.com Hesabı

1. **Render.com** hesabınıza daxil olun: https://render.com
2. GitHub hesabınızla qoşulun

### Addım 2: Static Site Yaradın

1. Dashboard-da "**New +**" düyməsinə basın
2. "**Static Site**" seçin
3. GitHub repository-ni tapın: `guyu6821-gif/buyyub`
4. "**Connect**" düyməsinə basın

### Addım 3: Konfiqurasiya

```
Name: unify-bdu (və ya istədiyiniz ad)
Branch: main
Build Command: (boş buraxın və ya: echo 'Static site')
Publish Directory: .
Auto-Deploy: Yes
```

### Addım 4: Deploy

1. "**Create Static Site**" düyməsinə basın
2. Deployment başlayacaq (1-2 dəqiqə)
3. Hazır! URL əldə edəcəksiniz

### ⚠️ Əhəmiyyətli:

- ✅ **package.json** və **package-lock.json** artıq əlavə edilib
- ✅ **_redirects** faylı PWA routing üçün konfiqurasiya edilib
- ✅ **Lock file warning** düzəldildi
- ✅ Heç bir build command lazım deyil (pure static)

### Deploy URL:

Saytınız bu formada əlçatan olacaq:
```
https://unify-bdu.onrender.com
```
(və ya seçdiyiniz ad)

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

