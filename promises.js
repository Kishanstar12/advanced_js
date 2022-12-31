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

createPost({title:'post 4',body:'post 4 is created'}).then(setTimeout(() =>{
    deletePost().then(getPost);
},1000))
