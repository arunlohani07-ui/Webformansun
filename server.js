const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

console.clear();

console.log(`
╔══════════════════════════════════════════╗
║                                          ║
║        💜  OUR LITTLE FOREVER  💜        ║
║                                          ║
║             Love Website                 ║
║                                          ║
╚══════════════════════════════════════════╝
`);

console.log("  ✦ Initializing website...");
console.log("  ✦ Loading memories...");
console.log("  ✦ Loading photos...");
console.log("  ✦ Starting server...\n");

app.listen(PORT, "0.0.0.0", () => {

  console.log("  ┌────────────────────────────────────┐");
  console.log("  │  ✓ SERVER ONLINE                   │");
  console.log(`  │  ✓ PORT : ${PORT}                       │`);
  console.log("  │  ✓ STATUS : READY                 │");
  console.log("  └────────────────────────────────────┘\n");

  console.log(`  💜 Local  : http://localhost:${PORT}`);
  console.log(`  🌐 Network: http://0.0.0.0:${PORT}`);
  console.log("\n  ✦ Our little world is ready.");
  console.log("  ✦ Press CTRL + C to stop.\n");
});
