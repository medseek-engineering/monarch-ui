export const FilterBarComponent = {
  bindings: {
    searchFilter: '=',
    placeHolderText: '@',
    ctaButtonText: '@',
    ctaButtonSref: '@'
  },
  template: `
    <div class="filter-bar">
      <div class="filter-bar-left">
        <ul class="dropdown menu" dropdown-menu>
          <li class="filter-bar-input">
            <input
              ng-model="$ctrl.searchFilter"
              type="search"
              placeholder="{{$ctrl.placeHolderText}}" />
          </li>
          <li>
            <a href="" class="button">Filter</a>
            <ul class="menu">
              <li><a href="">Create Filter</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="filter-bar-right">
        <ul class="menu">
          <li>
            <a
              ui-sref="{{$ctrl.ctaButtonSref}}"
              class="button primary">{{$ctrl.ctaButtonText}}</a>
          </li>
        </ul>
      </div>
    </div>
  `
};