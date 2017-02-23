export const CreateListComponent = {
  template: `
    <div ui-view></div>
  `,
  controller: class CreateListComponent {
    constructor(lists, $stateParams, createListModes, $state, audiences) {
      'ngInject';

      let vm = this;
      vm.audiences = audiences;
      vm.lists = lists;
      vm.stateParams = $stateParams;
      vm.$state = $state;
      vm.createListModes = createListModes;
      vm.personList = [];



      vm.onAudienceCancel = (audience) => {
        $state.go('lists.createList.form');
      }

      vm.onAudienceSave = (audience)=> {
        vm.list.audience = audience;
        $state.go('lists.createList.form');
      }



      vm.$onInit = ()=>{

        vm.list = {
          title: 'List #'+vm.lists.length,
          audience: vm.audiences.find((aud) => aud.audienceId === parseInt(vm.stateParams.audienceId) ) || vm.audiences[0],
          source: vm.createListModes.find((mode) => mode.mode === vm.stateParams.mode )
        };
      }
    }
  }
};