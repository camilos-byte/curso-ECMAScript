const regex = /\b(apple)+\b/g;

const fruit = 'apple, banana, orange, apple';


for ( const match of fruit.matchAll(regex)){
    console.log(match);
}
