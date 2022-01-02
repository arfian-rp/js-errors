const x = "haha";

try {
  x = 90;
} catch (e) {
  console.log(e.message);
} finally {
  console.log(`selesai`);
}
