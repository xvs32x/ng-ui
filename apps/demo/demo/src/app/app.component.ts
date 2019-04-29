import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--   Typography   -->
    <h3>Typography</h3>
    <ui-grid uiAutoFit method="auto-fill" uiAutoGap>
      <span class="ui-h1">H1 title</span>
      <span class="ui-h2">H2 title</span>
      <span class="ui-h3">H3 title</span>
      <span class="ui-h4">H4 title</span>
      <span class="ui-h5">H5 title</span>
    </ui-grid>
    <!--   Buttons   -->
    <h3>Button</h3>
    <ui-grid uiAutoFit uiAutoGap>
      <ui-button>Default button</ui-button>
      <ui-button state="primary">Primary button</ui-button>
      <ui-button [disabled]="true">Default disabled</ui-button>
      <ui-button [disabled]="true" state="primary">Primary disabled</ui-button>
    </ui-grid>
    <!--  Card    -->
    <h3>Card</h3>
    <ui-grid uiAutoFit uiAutoGap>
      <ui-card>
        <ui-card-head>
          Default card with button
        </ui-card-head>
        <ui-card-body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </ui-card-body>
        <ui-card-footer>
          <ui-button>Default button</ui-button>
        </ui-card-footer>
      </ui-card>
      <ui-card state="primary">
        <ui-card-head>
          Primary card with button
        </ui-card-head>
        <ui-card-body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </ui-card-body>
        <ui-card-footer>
          <ui-button state="primary">Primary button</ui-button>
        </ui-card-footer>
      </ui-card>
      <ui-card>
        <ui-card-head>
          Default card with button
        </ui-card-head>
        <ui-card-body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </ui-card-body>
        <ui-card-footer>
          <ui-button>Default button</ui-button>
        </ui-card-footer>
      </ui-card>
      <ui-card>
        <ui-card-head>
          Default card with button
        </ui-card-head>
        <ui-card-body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </ui-card-body>
        <ui-card-footer>
          <ui-button>Default button</ui-button>
        </ui-card-footer>
      </ui-card>
    </ui-grid>
  `,

  styles: [`
    ui-grid {
      align-items: end;
      margin-bottom: 2rem;
    }
    h3 {
      border-bottom: 1px dotted #000000;
      padding-bottom: 0.5rem;
      margin-bottom: 1rem;
    }
  `]
})
export class AppComponent {
  title = 'demo-demo';
}
