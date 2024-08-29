import { Component } from apos;@angular/coreapos;;

@Component({
  selector: apos;app-button-clickapos;,
  templateUrl: apos;./button-click.component.htmlapos;,
  styleUrls: [apos;./button-click.component.cssapos;]
})
export class ButtonClickComponent {
  clickLogs: { timestamp: string, count: number }[] = [];

  logClick() {
    const timestamp = new Date().toLocaleString();
    const count = this.clickLogs.length + 1;
    this.clickLogs.push({ timestamp, count });
  }
}
```

```html
lt;button (click)=apos;logClick()apos;gt;Display Detailslt;/buttongt;

lt;divgt;
  lt;ulgt;
    lt;ligt;Click Logslt;/ligt;
    lt;ligt *ngFor=apos;let log of clickLogsapos;gt;
      {{ log.timestamp }} - Click {{ log.count }}
    lt;/ligt;
  lt;/ulgt;
lt;/divgt;
```