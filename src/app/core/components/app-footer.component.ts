import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="container">
        <span class="text-muted">nirkaufman@gmail.com</span>
      </div>
    </footer>
  `,
  styles: []
})
export class AppFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
