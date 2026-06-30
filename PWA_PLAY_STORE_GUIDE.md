# PWA को Google Play Store में Upload करने का Guide

## Step 1: GitHub Pages Enable करो

1. Repository में जाओ: https://github.com/adiyogimanishbhagat/Adiyogimanishbhagat
2. **Settings** → **Pages**
3. Source: `Deploy from a branch`
4. Branch: `main`
5. **Save** करो

✅ Website live: https://adiyogimanishbhagat.github.io/Adiyogimanishbhagat/

---

## Step 2: PWA को Test करो

### Android पर (Chrome):
1. Website खोलो
2. Top right में **⋮** (3 dots)
3. **"Install app"** click करो
4. **"Install"** दबाओ
5. ✅ App install हो जाएगा!

### iPhone पर (Safari):
1. Website खोलो
2. **Share** button
3. **"Add to Home Screen"**
4. **Add** करो
5. ✅ App ready!

---

## Step 3: Google Play Store में Upload

### 3.1 Google Developer Account बनाओ

1. जाओ: https://play.google.com/console
2. **"Create account"**
3. Payment करो (₹100 - one time)
4. Developer information भरो
5. Account setup पूरा करो

### 3.2 App Details भरो

1. **"Create new app"**
2. **App Details:**
   - Name: `Adiyogi Manish Bhagat`
   - Category: `Health & Fitness` या `Lifestyle`
   - Content Rating: Complete करो

### 3.3 PWA Wrapper File बनाओ

PWA को proper app में convert करने के लिए **Bubblewrap** tool use करो:

```bash
npm install -g @bubblewrap/cli
bubblewrap init --manifest=https://adiyogimanishbhagat.github.io/Adiyogimanishbhagat/manifest.json
bubblewrap build
```

Ye एक **APK** file बना देगा!

### 3.4 APK Upload करो

1. Play Console में जाओ
2. **Testing → Open testing → Create new release**
3. **APK file upload** करो
4. App details भरो:
   - Screenshots (3-5)
   - Description
   - Privacy Policy
   - Content Rating

### 3.5 Upload और Review

1. **Review process** शुरू होगी (1-2 hours)
2. ✅ Approved होने के बाद **Live** हो जाएगा!

---

## Alternative (Easier): PWABuilder use करो

अगर command line नहीं समझ आ रहा:

1. जाओ: https://www.pwabuilder.com/
2. URL enter करो: `https://adiyogimanishbhagat.github.io/Adiyogimanishbhagat/`
3. **"Start"** click करो
4. **Android APK** download करो
5. Play Console में upload करो

---

## Quick Checklist ✅

- [ ] GitHub Pages enabled है
- [ ] manifest.json सही है
- [ ] service-worker.js काम कर रहा है
- [ ] Phone पर install हो रहा है
- [ ] Google Developer Account बना लिया
- [ ] APK generate हो गया
- [ ] Play Console में uploaded

---

## Support Links

- 🔗 PWABuilder: https://www.pwabuilder.com/
- 🔗 Google Play Console: https://play.google.com/console
- 🔗 Bubblewrap: https://github.com/GoogleChromeLabs/bubblewrap
- 🔗 Your Website: https://adiyogimanishbhagat.github.io/Adiyogimanishbhagat/

---

**अगर कोई problem हो तो मुझे बताना!** 👍
