//import templateUrl from 'header.html';

export const HeaderComponent = {
  template: `
  <header class="monarch-site-header" id="monarch-site-header">
    <div class="title-bar monarch-header header-shaded">
      <div class="top-bar-title">
        <a class="logo-container" ui-sref="dashboard">
         <span class="ih-logo"></span> 
        </a>
      </div>
      <div class="title-bar-left">
        <mode-switcher></mode-switcher>
      </div>
      <div class="title-bar-right">
        <ul class="dropdown menu" dropdown-menu>
          <li><button class="monarch-search-button"><span>Search everything</span><svg class="icon icon-search"><use xlink:href="#icon-search" /></svg></button></li>
          <li><a href="">Notifications</a></li>
          <li>
            <a class="multi-line-menu-link" tabindex="0"><small>Healthcare Marketing<br>Peachtree Hospital</small></a>
            <ul id="client-dropdown-menu" class="menu">
              <li><form class="search-client-form"><input type="search" placeholder="Search for Client"></form></li>
              <li class="client-list">
                <div class="tier">
                  <ul class="menu vertical">
                    <li>
                      <a href="">Healthcare Marketing</a>
                      <div class="tier">
                        <ul class="menu vertical">
                          <li><a href="">Peachtree Hospital</a></li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <a tabindex="0">John Smith</a>
            <ul class="menu">
              <li>
                <div>
                  <h4>John Smith</h4>
                </div>
              </li>
              <li><a href="#">User Settings</a></li>
              <li><a href="#">Logout</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </header>
  `
};