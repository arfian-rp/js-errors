let json = '{ "age": 20 }';

try {
  let user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError("'name' is required.");
  }

  console.log(user.name); // undefined
  console.log(user.age); // 20
} catch (error) {
  console.log(`JSON Error: ${error.message}`);
}
