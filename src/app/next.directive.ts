import { Directive ,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private el:ElementRef) {
    console.log('elref',this.el.nativeElement)
   }
@HostListener('click')
nextFunc(){
  var elm=this.el.nativeElement.parentElement.children[0];
  var item=elm.getElementsByClassName("item");
  elm.append(item[0]);
  console.log(item)
}
}
