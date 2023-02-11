//Рекурсия
// function counter (number){
//   if(number < 10){
//     setTimeout(() => {
//         number++
//         console.log(number);
//         counter(number)
//     }, 1000)
//   } else {
//     console.log('Finish');
//   }
// }
// counter(0)

//AJAX
//синхронность 
// function getData(){
//    console.log('first');
//    console.log('second');
// }
// getData()

// Асинхронность когда берет и нарушаеь синхронность 
function getData(){
   console.log('first');
   setTimeout(()=> {
    console.log('three');
   })
   console.log('second');
}
getData()