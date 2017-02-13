export const CRMHeaderComponent = {
  template: `
  <div class="row row-flush small-up-1 medium-up-2 page-header">
    <div class="column">
      <h2>CRM</h2>
    </div>
    <div class="column">
      <ul class="page-actions dropdown menu dropdown-large" dropdown-menu>
        <li>
          <a ui-sref="crm({leadId: 'ADD'})" class="button">Add Lead</a>
        </li>
      </ul>
    </div>
  </div>
  `
};