export const ContentComponent = {
  bindings: {
    campaign: '='
  },
  template: `
    <section>
      <header class="row">
        <div class="columns small-12">
          <hr>
          <h3>Content</h3>
        </div>
      </header>
      <div>
        <div class="row">
          <div class="columns large-8 large-offset-4">
            <label
              for="campaign-image"
              class="upload-image"><span class="upload-image-heading button">Insert an image</span></label>
            <input type="file" id="campaign-image" class="show-for-sr">
          </div>
        </div>
        <div class="row">
          <div class="columns large-4">
            <label
              class="middle text-right"
              for="campaign-title">Title</label>
          </div>
          <div class="columns large-8">
            <input id="campaign-title" type="text" />
          </div>
        </div>
        <div class="row">
          <div class="columns large-4">
            <label
              class="middle text-right"
              for="campaign-description">Description</label>
          </div>
          <div class="columns large-8">
            <textarea
              id="campaign-description"
              ng-model="$ctrl.campaign.description"></textarea>
          </div>
        </div>
      </div>
    </section>
  `,
  controller: class ContentComponent {
    constructor() {
      'ngInject';
    }
    $onInit() {
      this.campaign = Object.assign(
        {},
        this.campaign
      )
    }
  }
};