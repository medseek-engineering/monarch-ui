export const DateFilterComponent = {
  bindings: {},
  template: `
    <ul class="page-actions dropdown menu dropdown-on-right" dropdown-menu>
      <li>
        <a class="button secondary" tabindex="0">{{$ctrl.currentDate | date}}</a>
        <ul class="menu">
          <li>
            <a tabindex="0">Today</a>
          </li>
          <li>
            <a tabindex="0">Most Recent</a>
          </li>
          <li>
            <a tabindex="0">Previous Day</a>
          </li>
          <li>
            <a tabindex="0">28 days ago</a>
          </li>
          <li>
            <a tabindex="0">Custom</a>
          </li>
        </ul>
      </li>
    </ul>
  `,
  controller: class DateFilterComponent {
    constructor() {
      this.currentDate = new Date();
    }
  }
};