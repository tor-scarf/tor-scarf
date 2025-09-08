# 🧣 Tor Scarf Shop

پروژه فروشگاه شال با **Next.js 13 (App Router)** + **NextAuth.js** + **MongoDB**

---

## 🚀 امکانات
- پنل کاربری (User Dashboard)
- پنل مدیریت (Admin Dashboard)
- سیستم ورود و ثبت‌نام (NextAuth.js + MongoDB)
- نقش‌ها: `user` و `admin`
- مدیریت محصولات (CRUD)
- اسکریپت ساخت ادمین و کاربر عادی

---

## 📦 نصب و اجرا
1. پروژه را کلون یا دانلود کنید:
```bash
git clone <repo-url>
cd tor-scarf
```

2. پکیج‌ها را نصب کنید:
```bash
npm install
```

3. فایل `.env.local` بسازید و مقدارها را وارد کنید:
```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_random_secret
```

4. پروژه را اجرا کنید:
```bash
npm run dev
```

---

## 🔑 ساخت ادمین / کاربر

### ساخت ادمین پیش‌فرض (admin@example.com / 123456)
```bash
node scripts/createAdmin.js
```

### ساخت ادمین دلخواه
```bash
node scripts/createAdminCustom.js
```
👉 ایمیل و رمز را در ترمینال وارد می‌کنید.

### ساخت کاربر عادی دلخواه
```bash
node scripts/createUserCustom.js
```

---

## 📂 ساختار پروژه

```
tor-scarf/
│── app/
│   ├── api/
│   │   ├── auth/[...nextauth]/route.js   # لاگین/ثبت‌نام
│   │   └── products/route.js             # CRUD محصولات
│   ├── login/page.js                     # صفحه ورود
│   ├── dashboard/
│   │   ├── user/page.js                  # پنل کاربر
│   │   ├── admin/page.js                 # پنل ادمین
│   │   └── admin/products/page.js        # مدیریت محصولات
│── lib/
│   └── mongodb.js                        # اتصال به MongoDB
│── scripts/
│   ├── createAdmin.js                    # ادمین پیش‌فرض
│   ├── createAdminCustom.js              # ادمین دلخواه
│   └── createUserCustom.js               # کاربر عادی دلخواه
│── middleware.js                         # کنترل دسترسی
│── package.json
│── tailwind.config.js
│── next.config.js
│── .env.example
│── README.md
```

---

## 🛠️ تکنولوژی‌ها
- Next.js 13
- NextAuth.js
- MongoDB
- TailwindCSS
- bcryptjs

---

## 📌 یادداشت
- بعد از اولین ورود به عنوان ادمین، می‌توانید محصولات را از `/dashboard/admin/products` مدیریت کنید.
- کاربران عادی فقط می‌توانند وارد `/dashboard/user` شوند.
