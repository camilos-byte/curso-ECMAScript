// declarando una clase
class user {
    // metodos 
    greeting(){
        return 'hello';
    }
};

    const gndx = new user ();
    console.log(gndx.greeting());


    // constructor

    class user {
        constructor(){
            console.log('Nuevo Usuario');
        }
        greeting(){
            return 'hello';
        }
    };
    
    const david = new user ();

    // this
    class user {
        constructor(name){
           this.name = name;
        }

        speak (){
            return ('Hello');
        }
        greeting(){
            return `${this.speak()} ${this.name}`;
        }

    };

    const ana = new user('ana');

    console.log(ana.greeting())