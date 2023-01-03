var time=new Date();

const posts = [
    { title: 'post1', body: 'post 1 is created' },
    { title: 'post2', body: 'post 2 is created' },
    {title:'post 3',body:'Post 3 created'}
]

function getPost() {
    let output = '';
    setTimeout(() => {
        posts.forEach((post, index) => {
            
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error){
                resolve();
            }else{
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}

function deletePost(){
    return new Promise((resolve,reject) => {
       setTimeout(() => {
        posts.pop();

        //const error = false;

            if(posts.length>0){
                resolve();
            }else{
                reject('Array is empty now');
            }
       }, 1000);
    });
}

//createPost({title:'post 3',body:'Post 3 created'}).then(getPost).catch(err =>console.log(err));

// deletePost().then(getPost);
// deletePost().then(getPost);
// deletePost().then(getPost);
//deletePost().then(getPost).catch(err => alert(err));

// createPost({title:'post 4',body:'post 4 is created'}).then(setTimeout(() =>{
//     deletePost().then(getPost);
// },1000))

// const promise1=Promise.resolve('Hello world');
// const promise2=10;
// const promise3=new Promise((resolve,reject) =>{
//     setTimeout(resolve,2000,'goodbye')
// });

// Promise.all([promise1,promise2,promise3]).then( values =>console.log(values));

promise1=createPost({title:'post 4',body:'Post 4 created'});
promise2=new Promise((resolve,reject) => {
    setTimeout(() => {
    time=new Date('january 01,2023,13:55:00');
    resolve();
    },1000);
});

Promise.all([promise1,promise2]).then(() =>{
   console.log(posts);
   console.log(`last active at ${time}`);
}).then(() =>{
    deletePost();
    console.log(posts);
});
