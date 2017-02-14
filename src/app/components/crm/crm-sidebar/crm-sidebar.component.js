export const CRMSidebarComponent = {
  template: `
    <nav>
      <h4 class="sidebar-heading sidebar-heading-link"><a ui-sref="crm.leads({box: 'all'})">Leads</a></h4>
      <ul class="menu vertical">
        <li
          ui-sref-active="active"><a
          ui-sref="crm.leads({box: 'all'})">All <span class="badge">2404</span></a>
        </li>
        <li
          ui-sref-active="active"><a
          ui-sref="crm.leads({box: 'interested'})">Interested <span class="badge">456</span></a></li>
        <li
          ui-sref-active="active"><a
          ui-sref="crm.leads({box: 'conversion'})">Conversion <span class="badge">2153</span></a></li>
        <li
          ui-sref-active="active"><a
          ui-sref="crm.leads({box: 'ineligible'})">Ineligible <span class="badge">54</span></a></li>
        
      </ul>
      <hr>
      <h4 class="sidebar-heading sidebar-heading-link"><a ui-sref="lists">Lists</a></h4>
    </nav>
  `
};