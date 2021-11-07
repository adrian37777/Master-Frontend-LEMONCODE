let a, rest;

const tail = (data) => {
  [a, ...rest] = data;
  console.log(rest);
};

tail(["dog", "cat", "rat"]);
