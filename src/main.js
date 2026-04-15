const { PrismaClient } = require('@prisma/client');
const { joinGame } = require('./game.service');

const prisma = new PrismaClient();

async function main() {
  try {
    console.log("--- Starting Game Lobby Test ---");

    // 1. יצירת נתוני דמי (כדי שיהיה לנו עם מה לעבוד)
    // אנחנו משתמשים ב-upsert כדי שלא תיזרק שגיאה אם המשתמש כבר קיים
    const user = await prisma.user.upsert({
      where: { email: 'candidate@test.com' },
      update: {},
      create: {
        username: 'CandidateUser',
        email: 'candidate@test.com'
      }
    });

    const game = await prisma.game.create({
      data: { status: 'Waiting' }
    });

    console.log(`Setup success: User ${user.username} (ID: ${user.id}) and Game (ID: ${game.id}) created.`);

    // 2. הפעלת הלוגיקה שכתבנו בשלב 5
    console.log("Attempting to join game...");
    const result = await joinGame(user.id, game.id);

    // 3. הדפסת התוצאה
    console.log("Success! User joined game:", result);

  } catch (error) {
    console.error("Operation failed:", error.message);
  } finally {
    // סגירת החיבור למסד הנתונים
    await prisma.$disconnect();
  }
}

main();