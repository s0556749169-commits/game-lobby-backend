# גרסת Node עדכנית ויציבה
FROM node:20

# הגדרת תיקיית עבודה בתוך הקונטיינר
WORKDIR /app

# העתקת קבצי ההגדרות בלבד (מאפשר Caching חכם)
COPY package*.json ./

# התקנת כל הספריות
RUN npm install

# העתקת שאר קבצי הפרויקט פנימה
COPY . .

# חובה: יצירת הקוד של Prisma בתוך סביבת ה-Docker
#RUN npx prisma generate

# פקודת ברירת מחדל (היא תוחלף בהמשך כדי לאפשר מיגרציה)
CMD ["node", "src/main.js"]