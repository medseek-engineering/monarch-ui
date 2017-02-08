export const AppComponent = {
  template: `
  <div class="off-canvas-wrapper">
    <div class="off-canvas-wrapper-inner">
      <div class="off-canvas position-left">
        <button class="close-button" aria-label="Close menu" type="button" data-close>
          <span aria-hidden="true">&times;</span>
        </button>
        <a ui-sref="dashboard" class="logo-container">
          <div class="ih-logo"></div>
        </a>
        <ul class="mobile-ofc vertical menu">
          <li>
            <a ui-sref="dashboard">Dashboard</a>
          </li>
          <li>
            <a href="#">CRM</a>
          </li>
          <li>
            <a href="#">Audience</a>
          </li>
          <li>
            <a href="#">Content Apps</a>
          </li>
          <li>
            <a href="#">Sources / Destination</a>
          </li>
          <li>
            <a href="#">Insight</a>
          </li>
          <li>
            <a href="#">Admin</a>
          </li>
        </ul>
      </div>
      <div class="off-canvas-content">
        <monarch-header></monarch-header>
        <div class="monarch-site-body" ui-view></div>
        <monarch-footer></monarch-footer>
      </div>
    </div>
  </div>
  <svg class="symbol-defs">
    <symbol id="ih-logo" viewBox="0 0 640 127.645">
      <g>
        <rect x="151.842" y="17.094" width="11.988" height="53.5"/>
        <polygon points="220.659,51.503 194.464,17.094 183.365,17.094 183.365,70.594 195.352,70.594 195.352,37.073 220.659,70.594 
          232.646,70.594 232.646,17.094 220.659,17.094  "/>
        <polygon points="251.516,70.594 263.503,70.594 263.503,49.725 287.034,49.725 287.034,39.293 263.503,39.293 263.503,27.528 
          288.366,27.528 288.366,17.094 251.516,17.094  "/>
        <polygon points="317.225,17.094 305.238,17.094 305.238,70.594 340.09,70.594 340.09,59.938 317.225,59.938  "/>
        <path d="M397.142,17.094h-11.986v29.525c0,4.438-0.889,7.77-2.887,10.211c-1.997,2.441-4.661,3.773-7.991,3.773
          c-3.329,0-5.993-1.331-7.991-3.773s-2.886-5.772-2.886-10.211V17.094h-11.987v29.97c0,7.547,2.22,13.542,6.438,17.759
          c4.219,4.217,9.769,6.215,16.428,6.215c6.66,0,12.21-1.998,16.428-6.215c4.218-3.997,6.438-9.991,6.438-17.759v-29.97H397.142z"/>
        <polygon points="455.082,60.16 427.555,60.16 427.555,49.06 451.529,49.06 451.529,38.848 427.555,38.848 427.555,27.749 
          454.193,27.749 454.193,17.094 415.789,17.094 415.789,70.815 455.082,70.815  "/>
        <polygon points="510.801,17.094 510.801,51.503 484.606,17.094 473.507,17.094 473.507,70.594 485.494,70.594 485.494,37.073 
          511.023,70.594 523.011,70.594 523.011,17.094 511.023,17.094   "/>
        <path d="M565.411,71.26c8.214,0,15.539-3.33,21.533-10.211l-7.548-7.77c-3.773,4.662-8.657,6.881-14.431,6.881
          c-4.438,0-7.991-1.554-11.1-4.662c-2.886-3.108-4.439-7.104-4.439-11.987c0-4.883,1.775-8.88,4.884-11.766
          c3.33-2.886,7.104-4.44,11.545-4.44c5.549,0,10.211,2.442,13.984,7.104l7.325-8.437c-5.771-6.659-13.319-9.988-21.977-9.988
          c-7.992,0-14.652,2.664-19.979,7.991c-5.55,5.328-8.214,11.766-8.214,19.758c0,7.991,2.664,14.65,7.992,19.757
          C550.315,68.596,557.197,71.26,565.411,71.26z"/>
        <polygon points="612.473,60.16 612.473,49.06 636.448,49.06 636.448,38.848 612.473,38.848 612.473,27.749 639.112,27.749 
          639.112,17.094 600.708,17.094 600.708,70.815 640,70.815 640,60.16   "/>
        <polygon points="415.789,97.899 398.03,97.899 398.03,86.133 393.368,86.133 393.368,115.213 398.03,115.213 398.03,102.115 
          415.789,102.115 415.789,115.213 420.451,115.213 420.451,86.133 415.789,86.133   "/>
        <polygon points="448.422,102.338 464.405,102.338 464.405,98.121 448.422,98.121 448.422,89.906 465.515,89.906 465.515,86.133 
          443.538,86.133 443.538,115.213 466.181,115.213 466.181,111.217 448.422,111.217  "/>
        <path d="M496.372,86.133l-14.43,29.305h5.327l3.773-7.326h15.762l3.773,7.326h5.55l-14.43-29.305H496.372z M493.042,103.67
          l5.994-12.875l5.993,12.875H493.042z"/>
        <polygon points="538.328,86.133 533.444,86.133 533.444,115.213 554.756,115.213 554.756,111.217 538.328,111.217  "/>
        <polygon points="565.189,90.129 577.398,90.129 577.398,115.213 582.061,115.213 582.061,90.129 594.27,90.129 594.27,86.133 
          565.189,86.133  "/>
        <polygon points="635.116,98.121 617.579,98.121 617.579,86.133 612.695,86.133 612.695,115.213 617.579,115.213 617.579,101.893 
          635.116,101.893 635.116,115.213 640,115.213 640,86.133 635.116,86.133   "/>
        <polygon points="57.718,42.401 57.718,85.244 57.718,99.008 106.333,127.645 106.333,71.037 94.124,63.933 106.333,56.608 
          106.333,0.001 57.718,28.636   "/>
        <polygon points="0,56.608 12.209,63.933 0,71.037 0,127.645 48.616,99.008 48.616,85.244 48.616,42.401 48.616,28.636 0,0.001  "/>
      </g>
    </symbol>
    <symbol id="icon-doctor" viewBox="0 0 640 640">
      <path  d="M321.264,334.715c-82.879,0-147.838-64.959-147.838-147.838c0-82.879,64.958-145.599,147.838-145.599
  c82.879,0,145.598,64.959,145.598,145.599C466.861,267.516,401.902,334.715,321.264,334.715z M469.102,354.874
  c-2.24,20.161-4.48,47.04-8.96,80.64c6.72,2.239,11.2,6.72,15.68,13.439c11.2,13.439,31.359,49.279-6.72,120.959l-20.16-11.2
  c22.4-42.56,24.64-78.399,8.96-96.319c-8.96-8.96-20.159-13.439-31.359-8.96c-20.16,6.721-42.56,31.36-49.279,85.119l-22.4-2.239
  c6.722-62.72,38.08-94.079,64.96-103.039c6.72-2.24,11.199-2.24,17.92-2.24c6.72-38.079,8.96-67.199,8.96-87.358
  c-2.24-2.24-6.721-4.479-8.96-6.721L319.024,457.913L200.305,336.954c-13.44,8.96-26.879,17.92-38.08,24.641
  c6.72,26.879,20.16,69.438,40.32,107.519c6.719-2.24,11.199-2.24,15.679-2.24c26.88,0,49.279,22.399,49.279,49.279
  s-22.399,49.279-49.279,49.279s-49.279-22.399-49.279-49.279c0-13.439,6.72-26.88,15.679-35.84
  c-20.159-35.84-33.599-76.159-40.319-103.039C30.067,478.072,39.027,601.271,39.027,601.271h282.237H603.5
  C601.26,599.031,612.46,457.913,469.102,354.874z M245.104,513.912c0-15.68-13.44-29.119-29.12-29.119
  c-15.68,0-29.12,13.439-29.12,29.119s13.44,29.12,29.12,29.12C233.904,543.032,245.104,529.592,245.104,513.912z"/>
    </symbol>
    <symbol id="icon-pointer" viewBox="0 0 640 640">
      <path d="M476.291,98.969c-86.315-86.279-226.262-86.279-312.6,0c-77.774,77.773-86.517,209.059-20.484,297.06L320.032,605.74
  L496.85,396.028C562.815,308.027,554.072,176.742,476.291,98.969 M322.169,326.085c-40.322,0-72.979-32.664-72.979-72.979
  c0-40.264,32.656-72.972,72.979-72.972c40.315,0,72.957,32.708,72.957,72.972C395.126,293.421,362.484,326.085,322.169,326.085"/>
    </symbol>
    <symbol id="icon-search" viewBox="0 0 640 640">
      <g>
        <path d="M265.832,504.071c-131.365,0-238.238-106.869-238.238-238.238c0-131.365,106.873-238.238,238.238-238.238
          c131.369,0,238.238,106.874,238.238,238.238C504.07,397.202,397.201,504.071,265.832,504.071z M265.832,109.746
          c-86.069,0-156.088,70.019-156.088,156.087S179.763,421.92,265.832,421.92c86.068,0,156.087-70.019,156.087-156.087
          S351.9,109.746,265.832,109.746z"/>
      </g>
      <g>
        <path d="M571.406,612.482c-10.51,0-21.028-4.012-29.042-12.033L382.921,441.005
          c-16.046-16.036-16.046-42.047,0-58.083c16.027-16.045,42.056-16.045,58.083,0l159.443,159.443
          c16.045,16.036,16.045,42.047,0,58.084C592.434,608.471,581.915,612.482,571.406,612.482z"/>
      </g>
    </symbol>
    <symbol id="icon-share" viewBox="0 0 640 640">
      <path d="M473.354,459.412c-17.596,0-33.91,5.444-47.38,14.723L246.822,343.843
      c2.247-7.559,3.471-15.557,3.471-23.843c0-6.617-0.792-13.045-2.245-19.218l178.946-134.217
      c13.27,8.853,29.207,14.022,46.359,14.022c46.182,0,83.648-37.453,83.648-83.647s-37.467-83.647-83.648-83.647
      c-46.207,0-83.646,37.453-83.646,83.647c0,8.721,1.338,17.129,3.814,25.034L217.748,253.805
      c-14.138-10.932-31.856-17.453-51.102-17.453c-46.208,0-83.647,37.454-83.647,83.648c0,46.18,37.439,83.647,83.647,83.647
      c17.584,0,33.897-5.444,47.367-14.722l179.163,130.292c-2.245,7.559-3.469,15.556-3.469,23.842
      c0,46.181,37.439,83.648,83.646,83.648c46.182,0,83.648-37.468,83.648-83.648C557.002,496.88,519.535,459.412,473.354,459.412z"/>
    </symbol>
    <symbol id="icon-play" viewBox="0 0 180 180">
      <g transform="translate(40, 40)">
        <circle class="icon-play-circle" cx="50" cy="50" r="80"/>
        <polygon class="icon-play-triangle" points="31,18.062 86.939,50.359 31,82.656 "/>
      </g>
    </symbol>
  </svg>
  `
};