import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  constructor(private el:ElementRef) { }
  @HostListener('click')
  PrevFunc(){
    var elm=this.el.nativeElement.parentElement.children[0];
    var item=elm.getElementsByClassName("item");
   
       elm.prepend(item[item.lenght-1]);
      console.log(item)
 
  }
}
