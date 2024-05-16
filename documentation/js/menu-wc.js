'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">radium documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-4e13400e6bc71f302982be7e4ed022e817a01473885a18afee0539342680ff8429b05498d07c6806bac27d4212769f3557bbe4755a8bd0df270346a2ab2297e2"' : 'data-bs-target="#xs-components-links-module-AppModule-4e13400e6bc71f302982be7e4ed022e817a01473885a18afee0539342680ff8429b05498d07c6806bac27d4212769f3557bbe4755a8bd0df270346a2ab2297e2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-4e13400e6bc71f302982be7e4ed022e817a01473885a18afee0539342680ff8429b05498d07c6806bac27d4212769f3557bbe4755a8bd0df270346a2ab2297e2"' :
                                            'id="xs-components-links-module-AppModule-4e13400e6bc71f302982be7e4ed022e817a01473885a18afee0539342680ff8429b05498d07c6806bac27d4212769f3557bbe4755a8bd0df270346a2ab2297e2"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppServerModule.html" data-type="entity-link" >AppServerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppServerModule-f9bd8a2e383e1fdb89b720482f275daf4d52b1791e7f4a876525a64e6683f175d787e6648760b5c33b83cc499537f1610a22f454735802bee0d2d5888220fb91"' : 'data-bs-target="#xs-components-links-module-AppServerModule-f9bd8a2e383e1fdb89b720482f275daf4d52b1791e7f4a876525a64e6683f175d787e6648760b5c33b83cc499537f1610a22f454735802bee0d2d5888220fb91"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppServerModule-f9bd8a2e383e1fdb89b720482f275daf4d52b1791e7f4a876525a64e6683f175d787e6648760b5c33b83cc499537f1610a22f454735802bee0d2d5888220fb91"' :
                                            'id="xs-components-links-module-AppServerModule-f9bd8a2e383e1fdb89b720482f275daf4d52b1791e7f4a876525a64e6683f175d787e6648760b5c33b83cc499537f1610a22f454735802bee0d2d5888220fb91"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AuthModule-208210f34ff013bfbd195f66d299e026b9e852e779288c02cf2c8a57d7d267ed943e8c4c4d9e2ece5d0922325c6d977c94fe425e20b8830a8a1d1b1556b8c257"' : 'data-bs-target="#xs-components-links-module-AuthModule-208210f34ff013bfbd195f66d299e026b9e852e779288c02cf2c8a57d7d267ed943e8c4c4d9e2ece5d0922325c6d977c94fe425e20b8830a8a1d1b1556b8c257"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-208210f34ff013bfbd195f66d299e026b9e852e779288c02cf2c8a57d7d267ed943e8c4c4d9e2ece5d0922325c6d977c94fe425e20b8830a8a1d1b1556b8c257"' :
                                            'id="xs-components-links-module-AuthModule-208210f34ff013bfbd195f66d299e026b9e852e779288c02cf2c8a57d7d267ed943e8c4c4d9e2ece5d0922325c6d977c94fe425e20b8830a8a1d1b1556b8c257"' }>
                                            <li class="link">
                                                <a href="components/SignInComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignInComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignUpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignUpComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BackendErrorMessagesModule.html" data-type="entity-link" >BackendErrorMessagesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-BackendErrorMessagesModule-25e8269f3b9af540fa03c85965d86460fef9aa9af7e66d79e460285cc8649777f98acca6f300772dba5896d52f592fcc48b8363cd124279b80756e0c2f309a8d"' : 'data-bs-target="#xs-components-links-module-BackendErrorMessagesModule-25e8269f3b9af540fa03c85965d86460fef9aa9af7e66d79e460285cc8649777f98acca6f300772dba5896d52f592fcc48b8363cd124279b80756e0c2f309a8d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BackendErrorMessagesModule-25e8269f3b9af540fa03c85965d86460fef9aa9af7e66d79e460285cc8649777f98acca6f300772dba5896d52f592fcc48b8363cd124279b80756e0c2f309a8d"' :
                                            'id="xs-components-links-module-BackendErrorMessagesModule-25e8269f3b9af540fa03c85965d86460fef9aa9af7e66d79e460285cc8649777f98acca6f300772dba5896d52f592fcc48b8363cd124279b80756e0c2f309a8d"' }>
                                            <li class="link">
                                                <a href="components/BackendErrorMessagesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BackendErrorMessagesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CounterModule.html" data-type="entity-link" >CounterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CounterModule-83a63e40e6e4725a93b1a75e1c973e652ee7d87c00c8e28129fd7e0332048967e4f652512336e63ae2cb5926e1b8beda72273820de22e925699142a270a6987a"' : 'data-bs-target="#xs-components-links-module-CounterModule-83a63e40e6e4725a93b1a75e1c973e652ee7d87c00c8e28129fd7e0332048967e4f652512336e63ae2cb5926e1b8beda72273820de22e925699142a270a6987a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CounterModule-83a63e40e6e4725a93b1a75e1c973e652ee7d87c00c8e28129fd7e0332048967e4f652512336e63ae2cb5926e1b8beda72273820de22e925699142a270a6987a"' :
                                            'id="xs-components-links-module-CounterModule-83a63e40e6e4725a93b1a75e1c973e652ee7d87c00c8e28129fd7e0332048967e4f652512336e63ae2cb5926e1b8beda72273820de22e925699142a270a6987a"' }>
                                            <li class="link">
                                                <a href="components/CounterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CounterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FakeapiModule.html" data-type="entity-link" >FakeapiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-FakeapiModule-86181e903c3d8b0979092f86c3c2ef07ad92da6dc2c8727840cd7d925ae336dda64cfdc2d74e0eb32e74cee775220e43505230ed56bcec0480df8f295cd56264"' : 'data-bs-target="#xs-components-links-module-FakeapiModule-86181e903c3d8b0979092f86c3c2ef07ad92da6dc2c8727840cd7d925ae336dda64cfdc2d74e0eb32e74cee775220e43505230ed56bcec0480df8f295cd56264"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FakeapiModule-86181e903c3d8b0979092f86c3c2ef07ad92da6dc2c8727840cd7d925ae336dda64cfdc2d74e0eb32e74cee775220e43505230ed56bcec0480df8f295cd56264"' :
                                            'id="xs-components-links-module-FakeapiModule-86181e903c3d8b0979092f86c3c2ef07ad92da6dc2c8727840cd7d925ae336dda64cfdc2d74e0eb32e74cee775220e43505230ed56bcec0480df8f295cd56264"' }>
                                            <li class="link">
                                                <a href="components/FakeapiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FakeapiComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MainModule.html" data-type="entity-link" >MainModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-MainModule-75dde0181f79036b4c2d86f140035261319d40735c4496e48a33b33f27dbb573e41961eedb1d17d445653c36f90edcee27e3f97d9f39c1b6b5147b644217fbeb"' : 'data-bs-target="#xs-components-links-module-MainModule-75dde0181f79036b4c2d86f140035261319d40735c4496e48a33b33f27dbb573e41961eedb1d17d445653c36f90edcee27e3f97d9f39c1b6b5147b644217fbeb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MainModule-75dde0181f79036b4c2d86f140035261319d40735c4496e48a33b33f27dbb573e41961eedb1d17d445653c36f90edcee27e3f97d9f39c1b6b5147b644217fbeb"' :
                                            'id="xs-components-links-module-MainModule-75dde0181f79036b4c2d86f140035261319d40735c4496e48a33b33f27dbb573e41961eedb1d17d445653c36f90edcee27e3f97d9f39c1b6b5147b644217fbeb"' }>
                                            <li class="link">
                                                <a href="components/MainLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainLayoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NotFoundModule.html" data-type="entity-link" >NotFoundModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-NotFoundModule-343a89156b2cf1953047d69ad312ffa22c181ca5f6a3e87225c6b8fd8e85f44e41e7e55fc244b929d28b6655247e59375125397c07457b340b51a429df37b828"' : 'data-bs-target="#xs-components-links-module-NotFoundModule-343a89156b2cf1953047d69ad312ffa22c181ca5f6a3e87225c6b8fd8e85f44e41e7e55fc244b929d28b6655247e59375125397c07457b340b51a429df37b828"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NotFoundModule-343a89156b2cf1953047d69ad312ffa22c181ca5f6a3e87225c6b8fd8e85f44e41e7e55fc244b929d28b6655247e59375125397c07457b340b51a429df37b828"' :
                                            'id="xs-components-links-module-NotFoundModule-343a89156b2cf1953047d69ad312ffa22c181ca5f6a3e87225c6b8fd8e85f44e41e7e55fc244b929d28b6655247e59375125397c07457b340b51a429df37b828"' }>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TopbarModule.html" data-type="entity-link" >TopbarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-TopbarModule-a77c2ebc52c837c8a957addfeaa6d2417a27dd742e684e144d94c29d4cdec52189d07a5ed1375911f3c0315f62049c3edbf41898baa263f72fc9b70d7a220ad2"' : 'data-bs-target="#xs-components-links-module-TopbarModule-a77c2ebc52c837c8a957addfeaa6d2417a27dd742e684e144d94c29d4cdec52189d07a5ed1375911f3c0315f62049c3edbf41898baa263f72fc9b70d7a220ad2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TopbarModule-a77c2ebc52c837c8a957addfeaa6d2417a27dd742e684e144d94c29d4cdec52189d07a5ed1375911f3c0315f62049c3edbf41898baa263f72fc9b70d7a220ad2"' :
                                            'id="xs-components-links-module-TopbarModule-a77c2ebc52c837c8a957addfeaa6d2417a27dd742e684e144d94c29d4cdec52189d07a5ed1375911f3c0315f62049c3edbf41898baa263f72fc9b70d7a220ad2"' }>
                                            <li class="link">
                                                <a href="components/TopbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TopbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FakeApiEffect.html" data-type="entity-link" >FakeApiEffect</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FakeapiService.html" data-type="entity-link" >FakeapiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetUserEffect.html" data-type="entity-link" >GetUserEffect</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginEffect.html" data-type="entity-link" >LoginEffect</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PersistanceService.html" data-type="entity-link" >PersistanceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RegisterEffect.html" data-type="entity-link" >RegisterEffect</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthInterceptor.html" data-type="entity-link" >AuthInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AppStateInterface.html" data-type="entity-link" >AppStateInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthResponseInterface.html" data-type="entity-link" >AuthResponseInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthStateInterface.html" data-type="entity-link" >AuthStateInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BackendErrorsInterface.html" data-type="entity-link" >BackendErrorsInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CommentInterface.html" data-type="entity-link" >CommentInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CounterStateInterface.html" data-type="entity-link" >CounterStateInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CurrentUserInterface.html" data-type="entity-link" >CurrentUserInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FakeApiStateInterface.html" data-type="entity-link" >FakeApiStateInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LoginRequestInterface.html" data-type="entity-link" >LoginRequestInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RegisterRequestInterface.html" data-type="entity-link" >RegisterRequestInterface</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});