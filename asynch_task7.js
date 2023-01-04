/*...........promises.........*/

console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringingTicket=new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve('ticket');
    }, 3000);
});



const getPopcorn=promiseWifeBringingTicket.then((t) =>{
    console.log('wife:here is the ticket');
   console.log('lets go inside');
   console.log('wife:NO i am hungry');
   return new Promise((resolve,reject) =>{
    resolve(`${t} popcorn`);
   });
});

const getButter=getPopcorn.then((t) =>{
    console.log('i got some popcorn');
    console.log('lets go inside');
    console.log('wife:NO i want butter');
    return new Promise((resolve,reject) =>{
     resolve(`${t} butter`);
    });
 });

 const getColdDrink=getButter.then((t) =>{
    console.log('can we go inside');
    console.log('no i want cold drinks');
    console.log('ok');
    return new Promise((resolve,reject) =>{
        resolve(`${t} cold drinks`);
    });
 });

getColdDrink.then((t) =>console.log(t));



console.log('person4: shows ticket');
console.log('person5: shows ticket');

/*.............asynch..........*/

console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMoview = async()=>{
  const promiseWifeBringingTicks = new Promise((resolve,reject)=>{
    setTimeout(()=>{ resolve('ticket') },3000); 
});  

const getPopcorn = new Promise((resolve,reject)=>resolve('popcorn'));
const addButter = new Promise((resolve,reject)=>resolve('butter'));
const getColdDrinks = new Promise((resolve,reject)=>resolve('getcolddrinks'));

    let ticket = await promiseWifeBringingTicks;
    console.log('wife: I have the tics');
    console.log('husband: we should go in');
    console.log('wife: no I am hungry');

    let popcorn = await getPopcorn;
    console.log('wife: I have the tics');
    console.log('husband: we should go in');
    console.log('wife: no I am hungry');

    let butter = await addButter;
    console.log(`husband: I got some${butter} on popcorn`);
    console.log(`husband: anything else darling?`);
    console.log(`wife: lets go we are getting late`);
    console.log(`husband: thank you for the reminder *grins*`);

    let coldDrinks = await getColdDrinks;
    console.log('husband: I got ColdDrinks');

return ticket
};
preMoview().then((m)=>console.log(`person3: shows${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket'); 

/*...........converting previous code to asynch await...........*/

const posts =[
    {title :'Post One', body:'This is post one' },
    {title :'Post Two', body:'This is post two'}
]

function getPosts(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let output = '';
            posts.forEach((arr)=>{
                output+= `<li>${arr.title}</li>`;
            })
            document.body.innerHTML=output;
            resolve()
        },2000)
        
    })


}
function createPost(newPost){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(newPost);
            resolve()
        },2000)
  
    })
}


function deletePost(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{

        if(posts.length!==0){
         getPosts();
         posts.pop(posts.length-1);
         resolve(deletePost());

        }
        else {
         reject ( console.log('array is empty now'));
         }
 
       
       },1500)
    })
 }

 const A=async ()=>{
     createPost({title:'post3',body:'this is the body of post3'});
     createPost({title:'post4',body:'this is the body of post4'});

     await getPosts();
     await deletePost();
 }

 A();