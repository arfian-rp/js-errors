class ValidationError extends Error {
  constructor(m) {
    super(m);
    this.name = "ValidationError";
  }
}

let json = '{"age":14}';

try {
  let user = JSON.parse(json);
  if (!user.name) {
    throw new ValidationError("nama kosong");
  }
  if (!user.age) {
    throw new ValidationError("age kosong");
  }
} catch (e) {
  if (e instanceof SyntaxError) {
    console.log(`JSON Syntax Error: ${e.message}`);
  } else if (e instanceof ValidationError) {
    console.log(`Validation Error: ${e.message}`);
  } else if (e instanceof ReferenceError) {
    console.log(`Invalid data: ${e.message}`);
  } else {
    console.log(e.stack);
  }
}
