export const AdminLandingComponent = {
  template: `
    <div class="tiers">
      <tier
        tier="$ctrl.tiersMenu[0]"
        entities="$ctrl.tiers.entities"
        selected-entity="$ctrl.selectedTier1">
      </tier>
      <tier
        tier="$ctrl.tiersMenu[1]"
        entities="$ctrl.selectedTier1.entities"
        selected-entity="$ctrl.selectedTier2">
      </tier>
      <tier
        tier="$ctrl.tiersMenu[2]"
        entities="$ctrl.selectedTier2.entities"
        selected-entity="$ctrl.selectedTier3">
      </tier>
    </div>
  `,
  controller: class AdminLandingComponent {
    constructor(tiersMenu, tiers) {
      'ngInject';
      this.tiersMenu = tiersMenu;
      this.tiers = tiers;
    }
  }
};