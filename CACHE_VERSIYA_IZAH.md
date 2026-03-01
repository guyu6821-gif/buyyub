# Cache və Versiya Sistemi İzahı

## 📦 Cache Sistemi Necə İşləyir?

### 1️⃣ Service Worker Cache Versiyası

**Fayl: `service-worker.js` (1-ci sətir)**
```javascript
const CACHE_VERSION = 'v1.0.2';  // ← BU SƏTRI DƏYİŞİN
```

### Versiya Dəyişdirmə Qaydaları:

#### 🔴 **Major Update (v1 → v2)**
Nə zaman: Tam yenidən qurulma, böyük dəyişikliklər
```javascript
const CACHE_VERSION = 'v2.0.0';
```

#### 🟡 **Minor Update (v1.0 → v1.1)**
Nə zaman: Yeni funksiya, orta dəyişikliklər
```javascript
const CACHE_VERSION = 'v1.1.0';
```

#### 🟢 **Patch Update (v1.0.2 → v1.0.3)**
Nə zaman: Bug fix, kiçik düzəliş, CSS/JS dəyişikliyi
```javascript
const CACHE_VERSION = 'v1.0.3';
```

---

## 🔄 Cache Yeniləmə Prosesi (ADDIM-ADDIM)

### Addım 1: Faylları Dəyişin
```bash
# Məsələn: styles.css-də rəng dəyişdirdiniz
# Və ya: app.js-də hesablama düzəltdiniz
```

### Addım 2: service-worker.js Açın və Versiya Artırın
```javascript
// KÖHNƏ (1-ci sətir)
const CACHE_VERSION = 'v1.0.2';

// YENİ (dəyişdirin)
const CACHE_VERSION = 'v1.0.3';
```

### Addım 3: Git Push
```bash
git add .
git commit -m "Versiya 1.0.3 - düzəliş"
git push origin main
```

### Addım 4: İstifadəçi Tərəfi (Avtomatik)
```
1. İstifadəçi saytı açır
2. Service Worker yeni versiya görür (v1.0.3)
3. Köhnə cache-i silir (v1.0.2)
4. Yeni faylları cache edir
5. Səhifə yenilənir
```

---

## 📂 Hansı Faylları Cache Edir?

**Fayl: `service-worker.js` (5-13 sətir)**
```javascript
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/manifest.json',
  '/logo.png',
  '/icon-192.png',
  '/icon-512.png'
];
```

### Yeni Fayl Əlavə Etmək:
```javascript
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/manifest.json',
  '/logo.png',
  '/icon-192.png',
  '/icon-512.png',
  '/yeni-fayl.js'  // ← BURAYA ƏLAVƏ EDİN
];
```

---

## 🎯 Praktik Nümunələr

### Nümunə 1: CSS Rəngini Dəyişdirdiniz
```bash
1. styles.css-i dəyişin
2. service-worker.js açın (1-ci sətir):
   const CACHE_VERSION = 'v1.0.2';
   ↓
   const CACHE_VERSION = 'v1.0.3';
3. git add . && git commit -m "v1.0.3" && git push
4. İstifadəçilər yeni rəngi görəcək
```

### Nümunə 2: Yeni Funksiya Əlavə Etdiniz
```bash
1. app.js-ə yeni funksiya əlavə edin
2. service-worker.js açın (1-ci sətir):
   const CACHE_VERSION = 'v1.0.3';
   ↓
   const CACHE_VERSION = 'v1.1.0';  # Minor update
3. git add . && git commit -m "v1.1.0" && git push
4. İstifadəçilər yeni funksiyanı görəcək
```

### Nümunə 3: Tam Yenidən Dizayn
```bash
1. Bütün faylları dəyişin
2. service-worker.js açın (1-ci sətir):
   const CACHE_VERSION = 'v1.1.0';
   ↓
   const CACHE_VERSION = 'v2.0.0';  # Major update
3. git add . && git commit -m "v2.0.0" && git push
4. İstifadəçilər tamamilə yeni versiya görəcək
```

---

## ⚠️ ÖNƏMLİ QEYDLƏR

### ✅ EDİLMƏLİ:
- Hər dəyişiklikdən sonra versiya artırın
- Kiçik dəyişikliklər üçün patch (v1.0.2 → v1.0.3)
- Orta dəyişikliklər üçün minor (v1.0.3 → v1.1.0)
- Böyük dəyişikliklər üçün major (v1.1.0 → v2.0.0)

### ❌ EDİLMƏMƏLİ:
- Versiya artırmadan fayl dəyişməyin
- Eyni versiya ilə təkrar push etməyin
- Cache-də olmayan fayl əlavə etməyin

---

## 🔍 Cache Statusunu Yoxlama

**Browser DevTools:**
```
1. F12 basın (Developer Tools)
2. "Application" tab
3. "Cache Storage" bölməsi
4. "bdu-helper-v1.0.2" görəcəksiniz
```

**Console-da:**
```javascript
// Browser console-da
caches.keys().then(console.log);
// Output: ["bdu-helper-v1.0.2"]
```

---

## 📊 Versiya Tarixi

| Versiya | Tarix | Dəyişikliklər |
|---------|-------|---------------|
| v1.0.0 | İlkin | İlkin PWA versiyası |
| v1.0.1 | 01.03.2024 | UniFy logo, splash screen |
| v1.0.2 | 01.03.2024 | Deploy konfiqurasiyası, sənədləşdirmə |
| v1.0.3 | Gələcək | Sizin dəyişiklikləriniz |

---

## 🚀 Sürətli Bələdçi

### Hər Dəyişiklikdə:
1. Faylları dəyişin (HTML/CSS/JS)
2. `service-worker.js` aç → 1-ci sətirdə `CACHE_VERSION` artır
3. `git add . && git commit -m "v1.0.X" && git push`
4. Hazır! İstifadəçilər avtomatik yeniləyəcək

---

## 🎓 Əlavə Məlumat

### Cache Nədir?
- Faylların lokal surəti
- İnternet olmadan işləyir
- Sürətli yükləmə

### Service Worker Nədir?
- Arxa planda işləyən JavaScript
- Cache idarə edir
- Offline dəstək verir

### PWA Nədir?
- Progressive Web App
- Tətbiq kimi işləyir
- Quraşdırıla bilər
- Offline işləyir

---

## 📞 Yardım

Sual olarsa:
- README.md-yə baxın
- service-worker.js-də şərhlərə baxın
- Bu fayla yenidən baxın
