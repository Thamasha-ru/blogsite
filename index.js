//regular function
// function myfn(){
//     console.log("====================================");
//     console.log('arrow function');
//     console.log("====================================");

// }

// // arrow function
// const _myFn = (param1, param2) => {
//    console.log('====================================')
//    console.log()
//    console.log('====================================')
// }//https://jsonplaceholder.typicode.com/posts

// const get_comment = async() => {
//     const response =  await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await response.json()
//     console.log('====================================');
//     console.log();
//     console.log('====================================');
// }


// const url = "https://jsonplaceholder.typicode.com/posts";
// const get_comment = async() =>{
//     const responce = await fetch(url)
//     console.log("============================");
//     console.log(responce);
//     console.log("============================");
// }

// get_comment();

// console.log('====================================');
// console.log('Hello world');
// console.log('====================================');

// const url = "https://jsonplaceholder.typicode.com/posts";
// const get_comment = async() =>{
//     const response = await fetch(url);
//     const posts = await response.json()
//     for (post of posts){
//         const {id,title,body}=post;//destracture
//         console.log("============================");
//         console.log(post);
//         console.log("============================");
//     }
// }
//get_comment();

//const url = "https://jsonplaceholder.typicode.com/posts";
// const get_comment = async() =>{
//     const response = await fetch(url);
//     const posts = await response.json()

    // <div id ="root"></div>
    // <div>
    //     <h1>{title}</h1>
    //     <p>{body}</p>
    // </div>



    // for (post of posts){
    //     const {id,title,body}=post;//destracture
    //     const div=document.createElement('div')



    //     div.id=id;
    //     h1.innerHTML = title;
    //     p.innerHTML = body;

//         div.appendChild(h1)
//         div.appendChild(p)

//         document.getElementByID('root').appendChild(div)
//         break;
//     }

// }
    
// get_comment();


// const get_comment = async()=>{

//     const response = await fetch(url);
//     const posts = await response.json() // data

//     // const nodeList = [];

//     // <div id={id}>
//     //     <h1>{title}</h1>
//     //     <p>{body}</p>
//     // </div>

//     for(post of posts) {
//         const {id,title,body} = post; //destructure
//         //******creating (element) */
//         //create div element
//         const div = document.createElement('div') 
//         //create h1 element
//         const h1 = document.createElement('h1')
//         //create p element
//         const p = document.createElement('p')
        
//         div.id = id;
//         h1.innerHTML = title;
//         p.innerHTML = body;

//         div.appendChild(h1)
//         div.appendChild(p)

//         document.getElementById('root').appendChild(div)
//         break;
//     }

// }
// get_comment();

const url = 'https://jsonplaceholder.typicode.com/posts'

const get_comment = async()=>{

    const response = await fetch(url);
    const posts = await response.json() // data

    // const nodeList = [];

    // <div id={id}>
    //     <h1>{title}</h1>
    //     <p>{body}</p>
    // </div>

    for(post of posts) {
        const {id,title,body} = post; //destructure
        
        const tr = document.createElement('tr')
        const td_title = document.createElement('td')
        td_title.innerHTML = title;

       const td_body = document.createElement('td')
       td_body.innerHTML = body;

       tr.appendChild(td_title)
       tr.appendChild(td_body)

       document.querySelector('table').appendChild(tr)

    }

}
get_comment()