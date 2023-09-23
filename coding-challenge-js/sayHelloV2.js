
//! --------------------------------- V1 -------------------------------------------------

const sayHello = ( name, city, state ) => `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`

//! --------------------------------- V2 -------------------------------------------------

function sayHello( name, city, state ) {
    return [
            'Hello, ', 
            name.join(' '), 
            '! Welcome to ', 
            [city, state].join(', '), 
            '!'
            ].join('');
  }

//! --------------------------------- V3 -------------------------------------------------

  const sayHello=(...$)=>`Hello, ${$[0].join` `}! Welcome to ${$[1]+', '+$[2]}!`