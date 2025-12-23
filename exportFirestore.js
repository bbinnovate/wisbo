const admin = require("firebase-admin");
const { createObjectCsvWriter } = require("csv-writer");

// 🔴 IMPORTANT: update this path
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function exportToCSV() {
  const snapshot = await db.collection("waitlist").get();

  const records = snapshot.docs.map((doc) => ({
    id: doc.id,
    name: doc.data().name || "",
    email: doc.data().email || "",
    phone: doc.data().phone || "",
    childAges: (doc.data().childAges || []).join(", "),
    createdAt: doc.data().createdAt?.toDate().toISOString() || "",
  }));

  // ✅ FIX: unique file name (date + time)
  const fileName = `waitlist-${new Date()
    .toISOString()
    .replace(/[:.]/g, "-")}.csv`;

  const csvWriter = createObjectCsvWriter({
    path: fileName,
    header: [
      { id: "id", title: "ID" },
      { id: "name", title: "Name" },
      { id: "email", title: "Email" },
      { id: "phone", title: "Phone" },
      { id: "childAges", title: "Child Ages" },
      { id: "createdAt", title: "Created At" },
    ],
  });

  await csvWriter.writeRecords(records);
  console.log(`✅ CSV exported successfully as ${fileName}`);
}

exportToCSV();
