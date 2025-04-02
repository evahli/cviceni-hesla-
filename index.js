const weakPassword = (len) => {
  let result = '';
  for (let i = 0; i < len; i++) {
    result += String(i % 10);
  }

  return result;
};

const mediumPassword = (len) => {
  let result = '';
  for (let i = 0; i < len; i++) {
    const digit = Math.floor(Math.random() * 10);
    result += String(digit);
  }

  return result;
};

const strongPassword = (len) => {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789_-/?';
  let result = '';
  for (let i = 0; i < len; i++) {
    const charIndex = Math.floor(Math.random() * chars.length);
    result += chars[charIndex];
  }

  return result;
};

const createAccount = (user, generatePassword) => {
  document.body.innerHTML += `Uzivatel ${user} s heslem ${generatePassword(9)}`
}

createAccount("Jojo", strongPassword)

/* Napište funkci createAccount, která se bude tvářit, že zakládá nový uživatelský účet. Funkce bude mít dva parametry user a generatePassword. První bude uživatelské jméno a druhý bude funkce, pomocí které se má vygenerovat heslo pro tento účet. Ve funkci createAccount si do proměnné password uložte heslo vygenerované voláním funkce generatePassword. Funkci generatePassword při volání předejte číslo 9 jako délku požadovaného hesla. Funkce createAccount nakonec vrátí řetězec, který bude obsahovat jméno uživatele a vygenerované heslo z proměnné password. Například vrátí "Uživateli Míša s heslem 012345678".

Na konci javascriptového kódu vyzkoušejte založit více různých účtů (volání funkce createAccount) s různými typy hesel. Například:
*/
