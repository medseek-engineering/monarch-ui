export const AdminComponent = {
  template: `
    <div class="row row-flush page-header">
      <div class="column">
        <h2>Admin</h2>
      </div>
    </div>
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
  controller: class AdminComponent {
    constructor(tiersMenu, tiers) {
      'ngInject';
      this.tiersMenu = tiersMenu;
      this.tiers = tiers;
    }
  }
};