function sayHello(name, city, state){
    let fullName = name.join(' ');
    let welcomeString = 'Hello, ' + fullName + '! Welcome to ' + city + ', ' + state + '!';

    return welcomeString;
};

console.log(sayHello(['Yero', 'Bhoye'], 'Phoenix', 'Arizona'));
// Résultat attendu : "Hello, John Smith! Welcome to Phoenix, Arizona!"

console.log(sayHello(['Jane', 'Doe'], 'New York', 'New York'));
// Résultat attendu : "Hello, Jane Doe! Welcome to New York, New York!"

console.log(sayHello(['Mary', 'Jane', 'Watson'], 'Los Angeles', 'California'));
// Résultat attendu : "Hello, Mary Jane Watson! Welcome to Los Angeles, California!"
