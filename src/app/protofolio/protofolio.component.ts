import { Component ,Input,OnInit } from '@angular/core';
interface item{
  photoSrc:string;

}
@Component({
  selector: 'app-protofolio',
  templateUrl: './protofolio.component.html',
  styleUrls: ['./protofolio.component.css']
})
export class ProtofolioComponent {
  photos:item[]=[
    {photoSrc:"../../assets/imgs/poert1.png"},
    {photoSrc:"../../assets/imgs/port2.png"},
    {photoSrc:"../../assets/imgs/port3.png"},
    {photoSrc:"../../assets/imgs/poert1.png"},
    {photoSrc:"../../assets/imgs/port2.png"},
    {photoSrc:"../../assets/imgs/port3.png"},
  ]


   imgUrl:string='';
  openModel(imgUrl:string){
   this.imgUrl= imgUrl;
  }

  onClickOutsideModal(event: MouseEvent): void {
    console.log(event.target)
    if ((event.target as HTMLElement).classList.contains('model')) {
      this.imgUrl = '';
}
}


}
