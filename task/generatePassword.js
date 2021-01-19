const generate = () => {
  let password = "";
  let length = 12;

  return () => {
    let charset = "qwertyuiopasdfghjklzxcvbnm1234567890";
    for (let i = 0; i < length; i++) {
      password += charset[Math.floor(Math.random() * charset.length)];
    }

    return password;
  };
};

let generatePassword = generate();
console.log(generatePassword());