import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  @Input() appHighlight: string = 'yellow';   // default color

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = '#FEF5E7';
    el.nativeElement.style.border = '#f5B041 1.5px solid';
    el.nativeElement.style.borderRadius= '5px';
    el.nativeElement.style.padding = '1.5rem';
    el.nativeElement.style.color = '#000';
  }


}
