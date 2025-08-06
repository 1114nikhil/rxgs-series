import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-async-await',
  standalone: true,
  imports: [],
  templateUrl: './async-await.component.html',
  styleUrl: './async-await.component.scss'
})
export class AsyncAwaitComponent implements OnInit{
  // result1=document.getElementById('result1')
  @ViewChild('result1') result1!: ElementRef<HTMLDivElement>;
  @ViewChild('result2') result2!: ElementRef<HTMLDivElement>;
  @ViewChild('result3') result3!: ElementRef<HTMLDivElement>;
   dell={
    brand:'Dell',
    hardDisk:'1 TB',
    color:'Black'
  }
  ngOnInit(): void {
    // for normal fuction
  //  console.log(this.getData())

  // for async function
  // this.getData().then(data=>console.log(data))
  // this.getData().then(console.log)

  // for async/await
  // this.getData()
}
// without async  
  // getData(){
  //     return 'Data Received!';
  // }

  // with async
  // async keywords with function awalys return promises
  // async getData(){
  //     return 'Data Received!';
  // }


  // with async /await
  // promise =new Promise((resolve,reject)=>{
  //   setTimeout(()=>{resolve('Data Recived!')},3000)
  // })

  // async getData(){
  //   let response=await this.promise;
  //   console.log(response);
  // }

// Ex :01 :With Promises
buyLaptop =new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve(this.dell)},3000)
  })

buyLaptop2 =  fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json());

fetch1(){
  this.result1.nativeElement.innerText = 'Fetching Data...';
  this.buyLaptop.then(res=>{
    console.log(res)
    this.result1.nativeElement.innerText=JSON.stringify(res);
  })
}


// Ex :02 :With Async / Await
  async fetch2(){
  this.result2.nativeElement.innerText = 'Fetching Data...';

  let data=await this.buyLaptop;
  console.log(data);
  this.result2.nativeElement.innerText=JSON.stringify(data);
}

// Ex :03 :With Fetch API

//#region Promises
// fetch3(){
//   this.result3.nativeElement.innerText = 'Fetching Data...';

//   this.buyLaptop2.then(res =>{
//     console.log(res)
// this.result3.nativeElement.innerText =JSON.stringify(res)
//   })
// }
// #endregion

//#region Async/Await
  async fetch3(){
  this.result3.nativeElement.innerText = 'Fetching Data...';
  let res =await this.buyLaptop2;

 this.result3.nativeElement.innerText =JSON.stringify(res)
}
//#endregion
  }

 



