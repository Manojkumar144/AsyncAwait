//promises 
// console.log('Person 1: shows ticket');
// console.log('Person 2: shows ticket');

// const promiseWifeBringingTickets= new Promise((resolve, reject)=>
// {
//  setTimeout(()=>
//  {
//     resolve('ticket');
//  },3000)
// });

// const getpopcorn =promiseWifeBringingTickets.then((t)=>
// {
//   console.log('wife: i have the tickets');
//   console.log('husband: we should go in');
//   console.log('wife: no, I am hungry');
//   console.log('husband: i got popcorn');
//   return new Promise((resolve, reject)=>resolve(`${t} popcorn`));
// });
// const getButter = getpopcorn.then((t)=>
// {
//     console.log('husband: we should go in');
//     console.log('wife: I need butter on my popcorn');
//     return new Promise((resolve, reject)=>resolve(`${t} butter`));
// });
// const getColdDrinks = getButter.then((t)=>
// {
//     console.log('husband: we should go in');
//     console.log('wife: can we please have coldDrinks?');
//    return new Promise((resolve, reject)=>resolve(`${t} colddrinks`));
// });

// getColdDrinks.then((t)=> console.log(t));

// console.log('Person 4: shows ticket');
// console.log('Person 5: shows ticket');


//async and await

// console.log('Person 1: shows ticket');
// console.log('Person 2: shows ticket');
// const preMovie= async()=> 
// {
//     const promiseWifeBringingTickets= new Promise((resolve, reject)=>
// {
//  setTimeout(()=>
//  {
//     resolve('ticket');
//  },3000)
// });

// const getpopcorn = new Promise((resolve, reject)=>resolve(`popcorn`));
// const getbutter = new Promise((resolve, reject)=>resolve(`butter`));
// const getcolddrinks = new Promise((resolve, reject)=>resolve(`colddrinks`));


// let ticket= await promiseWifeBringingTickets;

// console.log(`wife: i have the ${ticket}`);
// console.log('husband: we should go in');
// console.log('wife: no, I am hungry');

// let popcorn=await getpopcorn;
// console.log(`husband: i got some ${popcorn}`);
// console.log('husband: we should go in');
// console.log('wife: I need butter on my popcorn');

// let butter = await getbutter;
// console.log(`husband: I got some ${butter} on popcorn`);
// console.log('wife: lets go , we are getting late');
// console.log('husband: thank you for the reminder');

//  let  coldDrinks = await getcolddrinks;
//  console.log('husband: we should go in');
//  console.log(`wife: can we please have ${coldDrinks}?`);

// return ticket;
// };


// preMovie().then((m)=> console.log(`person3 shows ${m}`));

// console.log('Person 4: shows ticket');
// console.log('Person 5: shows ticket');


// async and await using promise.all
// console.log('Person 1: shows ticket');
// console.log('Person 2: shows ticket');
// const preMovie= async()=> 
// {
//     const promiseWifeBringingTickets= new Promise((resolve, reject)=>
// {
//  setTimeout(()=>
//  {
//     resolve('ticket');
//  },3000)
// });

// const getpopcorn = new Promise((resolve, reject)=>resolve(`popcorn`));
// const getbutter = new Promise((resolve, reject)=>resolve(`butter`));
// const getcolddrinks = new Promise((resolve, reject)=>resolve(`colddrinks`));


// let ticket= await promiseWifeBringingTickets;
// let [popcorn, butter, colddrinks]=await Promise.all([getpopcorn, getbutter,getcolddrinks]);

// console.log(`${popcorn} ${butter} ${colddrinks}`);
// return ticket;
// };


// preMovie().then((m)=> console.log(`person3 shows ${m}`));

// console.log('Person 4: shows ticket');
// console.log('Person 5: shows ticket');



//Create and deletepost using async and await
function createPost(post) {

    return new Promise((resolve, reject) => {
   
     setTimeout(() => {
   
      console.log(`Post created: ${post}`);
   
      resolve(`Post created: ${post}`);
   
     }, 500); 
   
    });
   
   }
   
   function deletePost(post) {

    return new Promise((resolve, reject) => {
   
     setTimeout(() => {
   
      console.log(`Post deleted: ${post}`);
   
      resolve(`Post deleted: ${post}`);
   
     }, 500); 
   
    });
   
   }   

   async function createAndDeletePost()
   {
    try {
    const  createdpost = await createPost("New Post");
    const  deletedpost = await deletePost("New Post");
    console.log('operation completed:', createdpost, deletedpost);
    }
    catch(error)
    {
        console.log('Error', error);
    }

   }

   createAndDeletePost();