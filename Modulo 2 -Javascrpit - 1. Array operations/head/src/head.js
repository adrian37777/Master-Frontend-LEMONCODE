let a, rest;

const head = (data) => {
  [a, ...rest] = data;
  console.log(a);
};

head(["dog", "cat", "rat"]);
