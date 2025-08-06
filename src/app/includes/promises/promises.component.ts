import { Component, OnInit } from '@angular/core';
import { AsyncAwaitComponent } from "../async-await/async-await.component";

@Component({
  selector: 'app-promises',
  standalone: true,
  imports: [AsyncAwaitComponent],
  templateUrl: './promises.component.html',
  styleUrl: './promises.component.scss'
})
export class PromisesComponent implements OnInit{

  promiseVal: any;

  DellAvailable(){
    return true
  }
   HpAvailable(){
    return false
  }

  dell={
    brand:'Dell',
    hardDisk:'1 TB',
    color:'Black'
  }
  hp={
    brand:'Hp',
    hardDisk:'1 TB',
    color:'Silver'
  }
  notAvail={
    brand:'Not Avilable',
    status:'Failed'
  }
  ngOnInit(): void {
    // let buyLaptop= new Promise(function(resolve,reject){
    let buyLaptop= new Promise((resolve,reject)=>{
                  // resolve('Promise is resolved')
                  // reject('Promise not resolved')

                  if(this.DellAvailable()){
                    return setTimeout(()=>{
      // resolve('Dell is Purchased')
      resolve(this.dell)
    },3000)
                    
                  }else if(this.HpAvailable()){
                         return setTimeout(()=>{
      // resolve('Hp is Purchased')
      resolve(this.hp)
    },3000)
                  }else{
                         return setTimeout(()=>{
      //  reject('Laptop not there')
      reject(this.notAvail)
    },3000)
                   
                  }
    });

    buyLaptop.then(res=>{
      console.log('then code =>',res)
      this.promiseVal=res
    }).catch(res=>{
      console.log('catch code =>',res)
      this.promiseVal=res
    })
  }

  // myFunction(){
  //   console.log("Clicked me!")
  // }
 
  
}
