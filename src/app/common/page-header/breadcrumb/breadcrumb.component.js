export const BreadcrumbComponent = {
  bindings: {
    breadcrumb: '<'
  },
  template: `
    <ul class="breadcrumb">
      <li ng-repeat="crumb in $ctrl.breadcrumbList track by crumb.name">
        <a ui-sref="{{crumb.name}}">{{crumb.title}}</a>
      </li>
    </ul>
  `,
  controller: class BreadcrumbComponent {
    constructor($state) {
      'ngInject';
      this.$state = $state;
    }
    $onInit() {

      if (this.breadcrumb && this.breadcrumb.length) {
        this.breadcrumbList = this.breadcrumb.map((crumb)=>{
          return this.$state.get(crumb);
        });
      } 
    }

  }
  
};