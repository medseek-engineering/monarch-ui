export const TierComponent = {
  bindings: {
    tier: '<',
    entities: '<',
    selectedEntity: '='
  },
  template: `
    <h3 class="tier-title">{{$ctrl.tier.title}}</h3>
    <select
      ng-options="option.title for option in $ctrl.entities"
      ng-model="$ctrl.selectedEntity">
    </select>
    <ul class="tier-menu menu vertical">
      <li ng-repeat="menuItem in $ctrl.tier.menu">
        <a ui-sref="{{menuItem.name}}">{{menuItem.title}}</a>
      </li>
    </ul>
  `,
  controller: class TierComponent {
    $onChanges(changes) {
      if (changes.entities &&
          changes.entities.currentValue) {
        this.selectedEntity = changes.entities.currentValue[0];
      }
    }
  }
};