//import template from './dashboard.html';

export const DashboardComponent = {
  template: `
      <div class="row row-flush small-up-1 medium-up-3 page-header">
        <div class="column shrink">
          <ul class="dropdown menu dropdown-large" dropdown-menu>
            <li>
              <a tabindex="0"><h2>General Practice</h2></a>
              <ul class="menu">
                <li>
                  <a>Bariatrics</a>
                </li>
                <li>
                  <a>General Practice</a>
                </li>
                <li>
                  <a>Neurology</a>
                </li>
                <li>
                  <a>Organics</a>
                </li>
                <li>
                  <a>Women's Services</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="column">
          <div class="row">
                <div class="columns medium-6 large-3">
                  <p>Total Leads</p>
                  <div class="stat">128</div>
                  <div class="stat-difference">
                    +12  +3%
                  </div>
                </div>
                <div class="columns medium-6 large-3">
                  <p>Total Spend</p>
                  <div class="stat">$380</div>
                  <div class="stat-difference">
                    -$10  -2%
                  </div>
                </div>
                <div class="columns medium-6 large-3">
                  <p>Cost per Lead</p>
                  <div class="stat">$1.45</div>
                  <div class="stat-difference">
                    -$0.13  -2%
                  </div>
                </div>
                <div class="columns medium-6 large-3">
                  <p>Conversion Rate</p>
                  <div class="stat">67%</div>
                  <div class="stat-difference">
                    +2%
                  </div>
                </div>
              </div>
        </div>
        <div class="column shrink">
          <ul class="page-actions dropdown menu dropdown-large" dropdown-menu>
            <li>
              <a class="button secondary" tabindex="0">{{$ctrl.currentDate | date}}</a>
              <ul class="menu">
                <li>
                  <a>Select Date</a>
                </li>
                <li>
                  <a>Most Recent</a>
                </li>
                <li>
                  <a>Previous Day</a>
                </li>
                <li>
                  <a>28 days ago</a>
                </li>
                <li>
                  <a>Custom</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div class="row row-flush">
        <div class="column">
          <monarch-tile tile="$ctrl.lifeTimeOverviewTile">
            <table>
<tbody><tr><th>Top Campaigns (by spend)</th>
<th>Leads</th>
<th>Spend</th>
<th>CPL</th>
<th>CVR</th>
<th>Engage. Rate</th>
<th>Imp</th>
<th>CPC</th>
</tr></tbody><tbody>
<tr>
<td><a class="edit-link text panel-link" data-skip-pjax="true" href="/campaigns/33195/edit">MRP 2</a></td>
<td><a href="/leads?parameters%5Bcampaign_id%5D=33195&amp;parameters%5Bto%5D=02%2F02%2F2017+11%3A59+pm">0</a></td>
<td>$348.47</td>
<td>0</td>
<td>0</td>
<td>66.78%</td>
<td>13,393</td>
<td>NA</td>
</tr>
<tr>
<td><a class="edit-link text panel-link" data-skip-pjax="true" href="/campaigns/33174/edit">Medsports 11/16/2016</a></td>
<td><a href="/leads?parameters%5Bcampaign_id%5D=33174&amp;parameters%5Bto%5D=02%2F02%2F2017+11%3A59+pm">0</a></td>
<td>$53.32</td>
<td>0</td>
<td>0</td>
<td>48.48%</td>
<td>4,061</td>
<td>NA</td>
</tr>
<tr>
<td><a class="edit-link text panel-link" data-skip-pjax="true" href="/campaigns/33493/edit">MRP 1/9/2017</a></td>
<td><a href="/leads?parameters%5Bcampaign_id%5D=33493&amp;parameters%5Bto%5D=02%2F02%2F2017+11%3A59+pm">0</a></td>
<td>$52.98</td>
<td>0</td>
<td>0</td>
<td>71.43%</td>
<td>2,976</td>
<td>NA</td>
</tr>
<tr>
<td><a class="edit-link text panel-link" data-skip-pjax="true" href="/campaigns/3695/edit">Sean's Test Campaign - DO NOT DELETE</a></td>
<td><a href="/leads?parameters%5Bcampaign_id%5D=3695&amp;parameters%5Bto%5D=02%2F02%2F2017+11%3A59+pm">5</a></td>
<td>$1.10</td>
<td>$0.22</td>
<td>500%</td>
<td>100%</td>
<td>101</td>
<td>$1.10</td>
</tr>
<tr>
<td><a class="edit-link text panel-link" data-skip-pjax="true" href="/campaigns/2791/edit">Test Page</a></td>
<td><a href="/leads?parameters%5Bcampaign_id%5D=2791&amp;parameters%5Bto%5D=02%2F02%2F2017+11%3A59+pm">0</a></td>
<td>$1.10</td>
<td>0</td>
<td>0</td>
<td>300%</td>
<td>101</td>
<td>NA</td>
</tr>
<tr>
<td>Pre-2014</td>
<td>0</td>
<td>$0.00</td>
<td>0</td>
<td>0</td>
<td>NA</td>
<td>0</td>
<td>NA</td>
</tr>
<tr class="total_row">
<td>Lifetime (All campaigns)</td>
<td>5</td>
<td>$456.97</td>
<td>$91.39</td>
<td>1.4%</td>
<td>66.01%</td>
<td>20,667</td>
<td>$1.28</td>
</tr>
<tr class="hidden total_row with_brightwhistle_fees">
<td>Lifetime (Inclusive of BrightWhistle Fees)</td>
<td>5</td>
<td>$456.97</td>
<td>$91.39</td>
<td>1.4%</td>
<td>66.01%</td>
<td>20,667</td>
<td>$1.28</td>
</tr>
</tbody>
</table>
          </monarch-tile>
        </div>

      </div>

  `,
  controller: class DashboardComponent {
    constructor() {
      'ngInject';
      this.currentDate = new Date();
      this.lifeTimeOverviewTile = {
        title: 'Lifetime Overview',
        titleCaption: 'as of Feb 2, 2017'
      };
    }
  }
};