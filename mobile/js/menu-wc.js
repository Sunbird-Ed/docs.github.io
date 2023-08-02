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
                    <a href="index.html" data-type="index-link">sunbirded-mobile-app documentation</a>
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
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
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
                                <a href="modules/ActiveDownloadsPageModule.html" data-type="entity-link" >ActiveDownloadsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ActiveDownloadsPageModule-acf3eb5b6b1aa19b6139e96680c207c2663e6ff262958b87e0179a5a1de41779f4972855fb5c3298a6977635b43893e7936b8f15cbb0b8cbb8685faed98c1bc4"' : 'data-bs-target="#xs-components-links-module-ActiveDownloadsPageModule-acf3eb5b6b1aa19b6139e96680c207c2663e6ff262958b87e0179a5a1de41779f4972855fb5c3298a6977635b43893e7936b8f15cbb0b8cbb8685faed98c1bc4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ActiveDownloadsPageModule-acf3eb5b6b1aa19b6139e96680c207c2663e6ff262958b87e0179a5a1de41779f4972855fb5c3298a6977635b43893e7936b8f15cbb0b8cbb8685faed98c1bc4"' :
                                            'id="xs-components-links-module-ActiveDownloadsPageModule-acf3eb5b6b1aa19b6139e96680c207c2663e6ff262958b87e0179a5a1de41779f4972855fb5c3298a6977635b43893e7936b8f15cbb0b8cbb8685faed98c1bc4"' }>
                                            <li class="link">
                                                <a href="components/ActiveDownloadsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActiveDownloadsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ActivityDetailsPageModule.html" data-type="entity-link" >ActivityDetailsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ActivityDetailsPageModule-60cfa17f0b63cf30e1bd05c1b3cc303d3a6bb5f78f68455ae3e542e97dada1dffed14780a31a24697a7fc009e4315e6102f57467f0be69b9a6ee83825123a952"' : 'data-bs-target="#xs-components-links-module-ActivityDetailsPageModule-60cfa17f0b63cf30e1bd05c1b3cc303d3a6bb5f78f68455ae3e542e97dada1dffed14780a31a24697a7fc009e4315e6102f57467f0be69b9a6ee83825123a952"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ActivityDetailsPageModule-60cfa17f0b63cf30e1bd05c1b3cc303d3a6bb5f78f68455ae3e542e97dada1dffed14780a31a24697a7fc009e4315e6102f57467f0be69b9a6ee83825123a952"' :
                                            'id="xs-components-links-module-ActivityDetailsPageModule-60cfa17f0b63cf30e1bd05c1b3cc303d3a6bb5f78f68455ae3e542e97dada1dffed14780a31a24697a7fc009e4315e6102f57467f0be69b9a6ee83825123a952"' }>
                                            <li class="link">
                                                <a href="components/ActivityDashboardPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActivityDashboardPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ActivityDetailsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActivityDetailsPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ActivityTocPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActivityTocPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AddMemberToGroupPageModule.html" data-type="entity-link" >AddMemberToGroupPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AddMemberToGroupPageModule-7adfd377a0bfa3655f4c6e460edfc56c55b8465c613ca24c341557b9301ad471655cf1c361b042f3180abad7a03bd0bfd55e3491655fffdca79b58c5e2b85499"' : 'data-bs-target="#xs-components-links-module-AddMemberToGroupPageModule-7adfd377a0bfa3655f4c6e460edfc56c55b8465c613ca24c341557b9301ad471655cf1c361b042f3180abad7a03bd0bfd55e3491655fffdca79b58c5e2b85499"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AddMemberToGroupPageModule-7adfd377a0bfa3655f4c6e460edfc56c55b8465c613ca24c341557b9301ad471655cf1c361b042f3180abad7a03bd0bfd55e3491655fffdca79b58c5e2b85499"' :
                                            'id="xs-components-links-module-AddMemberToGroupPageModule-7adfd377a0bfa3655f4c6e460edfc56c55b8465c613ca24c341557b9301ad471655cf1c361b042f3180abad7a03bd0bfd55e3491655fffdca79b58c5e2b85499"' }>
                                            <li class="link">
                                                <a href="components/AddMemberToGroupPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddMemberToGroupPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AllEvidenceListModule.html" data-type="entity-link" >AllEvidenceListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AllEvidenceListModule-c9ed09b11242a6831886b4756a27736fc55b006ed76396d405542d1430e61d27184241b9fb8ca51a2f05a69979e09b0bc3ced5a4f9c9526d93e67af4e1e5257f"' : 'data-bs-target="#xs-components-links-module-AllEvidenceListModule-c9ed09b11242a6831886b4756a27736fc55b006ed76396d405542d1430e61d27184241b9fb8ca51a2f05a69979e09b0bc3ced5a4f9c9526d93e67af4e1e5257f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AllEvidenceListModule-c9ed09b11242a6831886b4756a27736fc55b006ed76396d405542d1430e61d27184241b9fb8ca51a2f05a69979e09b0bc3ced5a4f9c9526d93e67af4e1e5257f"' :
                                            'id="xs-components-links-module-AllEvidenceListModule-c9ed09b11242a6831886b4756a27736fc55b006ed76396d405542d1430e61d27184241b9fb8ca51a2f05a69979e09b0bc3ced5a4f9c9526d93e67af4e1e5257f"' }>
                                            <li class="link">
                                                <a href="components/AllEvidenceListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AllEvidenceListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-48e860acb087e217eb0a806307ec2d2b587d5fb68a2ac9a971b0b7cb566cdd8c03124a3d3f6ffa82e897b40cba195b920140d522cfbbfeb89a93e4f52d9cbd95"' : 'data-bs-target="#xs-components-links-module-AppModule-48e860acb087e217eb0a806307ec2d2b587d5fb68a2ac9a971b0b7cb566cdd8c03124a3d3f6ffa82e897b40cba195b920140d522cfbbfeb89a93e4f52d9cbd95"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-48e860acb087e217eb0a806307ec2d2b587d5fb68a2ac9a971b0b7cb566cdd8c03124a3d3f6ffa82e897b40cba195b920140d522cfbbfeb89a93e4f52d9cbd95"' :
                                            'id="xs-components-links-module-AppModule-48e860acb087e217eb0a806307ec2d2b587d5fb68a2ac9a971b0b7cb566cdd8c03124a3d3f6ffa82e897b40cba195b920140d522cfbbfeb89a93e4f52d9cbd95"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-48e860acb087e217eb0a806307ec2d2b587d5fb68a2ac9a971b0b7cb566cdd8c03124a3d3f6ffa82e897b40cba195b920140d522cfbbfeb89a93e4f52d9cbd95"' : 'data-bs-target="#xs-injectables-links-module-AppModule-48e860acb087e217eb0a806307ec2d2b587d5fb68a2ac9a971b0b7cb566cdd8c03124a3d3f6ffa82e897b40cba195b920140d522cfbbfeb89a93e4f52d9cbd95"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-48e860acb087e217eb0a806307ec2d2b587d5fb68a2ac9a971b0b7cb566cdd8c03124a3d3f6ffa82e897b40cba195b920140d522cfbbfeb89a93e4f52d9cbd95"' :
                                        'id="xs-injectables-links-module-AppModule-48e860acb087e217eb0a806307ec2d2b587d5fb68a2ac9a971b0b7cb566cdd8c03124a3d3f6ffa82e897b40cba195b920140d522cfbbfeb89a93e4f52d9cbd95"' }>
                                        <li class="link">
                                            <a href="injectables/AndroidPermissionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AndroidPermissionsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AppGlobalService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppGlobalService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AppHeaderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppHeaderService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AppRatingService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppRatingService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CanvasPlayerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CanvasPlayerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CollectionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CollectionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ComingSoonMessageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ComingSoonMessageService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CommonUtilService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommonUtilService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ConsentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConsentService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ContainerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContainerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ContentAggregatorHandler.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContentAggregatorHandler</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CourseUtilService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CourseUtilService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DiscussionTelemetryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DiscussionTelemetryService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DownloadPdfService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DownloadPdfService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ExternalIdVerificationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExternalIdVerificationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FormAndFrameworkUtilService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormAndFrameworkUtilService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GroupHandlerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GroupHandlerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalCourseService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalCourseService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocationHandler.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocationHandler</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LoginHandlerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginHandlerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LoginNavigationHandlerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginNavigationHandlerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LogoutHandlerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogoutHandlerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/NavigationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavigationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/OnboardingConfigurationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OnboardingConfigurationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrintPdfService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrintPdfService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProfileHandler.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileHandler</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/QRScannerResultHandler.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QRScannerResultHandler</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SegmentationTagService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SegmentationTagService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SplaschreenDeeplinkActionHandlerDelegate.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SplaschreenDeeplinkActionHandlerDelegate</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SplashScreenService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SplashScreenService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SplashcreenTelemetryActionHandlerDelegate.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SplashcreenTelemetryActionHandlerDelegate</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SplashscreenImportActionHandlerDelegate.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SplashscreenImportActionHandlerDelegate</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/StoragePermissionHandlerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StoragePermissionHandlerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SunbirdQRScanner.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SunbirdQRScanner</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TelemetryGeneratorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TelemetryGeneratorService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TextbookTocService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TextbookTocService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TncUpdateHandlerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TncUpdateHandlerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UpdateProfileService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateProfileService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UtilityService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UtilityService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AttachmentListingPageModule.html" data-type="entity-link" >AttachmentListingPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AttachmentListingPageModule-0a66cbf898254abbaef981ef88b4d88d13dbbc09286df96532a5ff5d407c4b5c8a8137e3a0d8bb55df26292ce1598203588b913889cacb4298e3ee3972bee9f7"' : 'data-bs-target="#xs-components-links-module-AttachmentListingPageModule-0a66cbf898254abbaef981ef88b4d88d13dbbc09286df96532a5ff5d407c4b5c8a8137e3a0d8bb55df26292ce1598203588b913889cacb4298e3ee3972bee9f7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AttachmentListingPageModule-0a66cbf898254abbaef981ef88b4d88d13dbbc09286df96532a5ff5d407c4b5c8a8137e3a0d8bb55df26292ce1598203588b913889cacb4298e3ee3972bee9f7"' :
                                            'id="xs-components-links-module-AttachmentListingPageModule-0a66cbf898254abbaef981ef88b4d88d13dbbc09286df96532a5ff5d407c4b5c8a8137e3a0d8bb55df26292ce1598203588b913889cacb4298e3ee3972bee9f7"' }>
                                            <li class="link">
                                                <a href="components/AttachmentListingPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AttachmentListingPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AttachmentListingPageRoutingModule.html" data-type="entity-link" >AttachmentListingPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CategoriesEditPageModule.html" data-type="entity-link" >CategoriesEditPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CategoriesEditPageModule-8365307c77913cf8661ad2af085fd781be8c5a6559b7828b3d4947809162ea4307b913890a11602e2e6d1c5f57252d8dd4428961108f199259387a7b60452ea9"' : 'data-bs-target="#xs-components-links-module-CategoriesEditPageModule-8365307c77913cf8661ad2af085fd781be8c5a6559b7828b3d4947809162ea4307b913890a11602e2e6d1c5f57252d8dd4428961108f199259387a7b60452ea9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CategoriesEditPageModule-8365307c77913cf8661ad2af085fd781be8c5a6559b7828b3d4947809162ea4307b913890a11602e2e6d1c5f57252d8dd4428961108f199259387a7b60452ea9"' :
                                            'id="xs-components-links-module-CategoriesEditPageModule-8365307c77913cf8661ad2af085fd781be8c5a6559b7828b3d4947809162ea4307b913890a11602e2e6d1c5f57252d8dd4428961108f199259387a7b60452ea9"' }>
                                            <li class="link">
                                                <a href="components/CategoriesEditPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriesEditPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoryListPageModule.html" data-type="entity-link" >CategoryListPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CategoryListPageModule-2d826a91a619c6271dfcda7824178bbe1ae3055efe673cd3bef8af16f650a30269cec90e32107c0bf1cbd519f2a6a02a9e344c3ec707587eaf683739383b8a91"' : 'data-bs-target="#xs-components-links-module-CategoryListPageModule-2d826a91a619c6271dfcda7824178bbe1ae3055efe673cd3bef8af16f650a30269cec90e32107c0bf1cbd519f2a6a02a9e344c3ec707587eaf683739383b8a91"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CategoryListPageModule-2d826a91a619c6271dfcda7824178bbe1ae3055efe673cd3bef8af16f650a30269cec90e32107c0bf1cbd519f2a6a02a9e344c3ec707587eaf683739383b8a91"' :
                                            'id="xs-components-links-module-CategoryListPageModule-2d826a91a619c6271dfcda7824178bbe1ae3055efe673cd3bef8af16f650a30269cec90e32107c0bf1cbd519f2a6a02a9e344c3ec707587eaf683739383b8a91"' }>
                                            <li class="link">
                                                <a href="components/CategoryListPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryListPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CertificateViewPageModule.html" data-type="entity-link" >CertificateViewPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CertificateViewPageModule-43f80bfd5c305c0ceaf487a941596c814b8958ef4b05fc0ddb219cd1ce8cda2fb5b18d9703ed5a56de626accf23ed131b30a0bcab55b78304725fc932caf1da4"' : 'data-bs-target="#xs-components-links-module-CertificateViewPageModule-43f80bfd5c305c0ceaf487a941596c814b8958ef4b05fc0ddb219cd1ce8cda2fb5b18d9703ed5a56de626accf23ed131b30a0bcab55b78304725fc932caf1da4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CertificateViewPageModule-43f80bfd5c305c0ceaf487a941596c814b8958ef4b05fc0ddb219cd1ce8cda2fb5b18d9703ed5a56de626accf23ed131b30a0bcab55b78304725fc932caf1da4"' :
                                            'id="xs-components-links-module-CertificateViewPageModule-43f80bfd5c305c0ceaf487a941596c814b8958ef4b05fc0ddb219cd1ce8cda2fb5b18d9703ed5a56de626accf23ed131b30a0bcab55b78304725fc932caf1da4"' }>
                                            <li class="link">
                                                <a href="components/CertificateViewPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CertificateViewPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChapterDetailsPageModule.html" data-type="entity-link" >ChapterDetailsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ChapterDetailsPageModule-54c76629caed1316718541d0b5950500d4420bffe30bc6688dde4bbf3652631e260fb383e17772e6515d5f8df8e5d689d1ceddf99c0a27999d4cd931a53ba3ba"' : 'data-bs-target="#xs-components-links-module-ChapterDetailsPageModule-54c76629caed1316718541d0b5950500d4420bffe30bc6688dde4bbf3652631e260fb383e17772e6515d5f8df8e5d689d1ceddf99c0a27999d4cd931a53ba3ba"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ChapterDetailsPageModule-54c76629caed1316718541d0b5950500d4420bffe30bc6688dde4bbf3652631e260fb383e17772e6515d5f8df8e5d689d1ceddf99c0a27999d4cd931a53ba3ba"' :
                                            'id="xs-components-links-module-ChapterDetailsPageModule-54c76629caed1316718541d0b5950500d4420bffe30bc6688dde4bbf3652631e260fb383e17772e6515d5f8df8e5d689d1ceddf99c0a27999d4cd931a53ba3ba"' }>
                                            <li class="link">
                                                <a href="components/ChapterDetailsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChapterDetailsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CollectionDetailEtbPageModule.html" data-type="entity-link" >CollectionDetailEtbPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CollectionDetailEtbPageModule-b6f33714bf1cc54eabdb9b902434651004bf0af2facb029f3aed550e7fb291690c3c7f0dc3e78402bc3d074bd753f17cbaebd11352a1f4b5ca76ff2a2e1d0a10"' : 'data-bs-target="#xs-components-links-module-CollectionDetailEtbPageModule-b6f33714bf1cc54eabdb9b902434651004bf0af2facb029f3aed550e7fb291690c3c7f0dc3e78402bc3d074bd753f17cbaebd11352a1f4b5ca76ff2a2e1d0a10"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CollectionDetailEtbPageModule-b6f33714bf1cc54eabdb9b902434651004bf0af2facb029f3aed550e7fb291690c3c7f0dc3e78402bc3d074bd753f17cbaebd11352a1f4b5ca76ff2a2e1d0a10"' :
                                            'id="xs-components-links-module-CollectionDetailEtbPageModule-b6f33714bf1cc54eabdb9b902434651004bf0af2facb029f3aed550e7fb291690c3c7f0dc3e78402bc3d074bd753f17cbaebd11352a1f4b5ca76ff2a2e1d0a10"' }>
                                            <li class="link">
                                                <a href="components/CollectionDetailEtbPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CollectionDetailEtbPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TextBookTocPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TextBookTocPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ComponentsModule.html" data-type="entity-link" >ComponentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ComponentsModule-04efc246164153ce50ce67295f7b4331574cfa853951c22e2a5da63bd82e0b8f3110bddde7c571ec2c0080601dd9fbd549cec4d0c33e8b3503ef3d39a1aa28b3"' : 'data-bs-target="#xs-components-links-module-ComponentsModule-04efc246164153ce50ce67295f7b4331574cfa853951c22e2a5da63bd82e0b8f3110bddde7c571ec2c0080601dd9fbd549cec4d0c33e8b3503ef3d39a1aa28b3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComponentsModule-04efc246164153ce50ce67295f7b4331574cfa853951c22e2a5da63bd82e0b8f3110bddde7c571ec2c0080601dd9fbd549cec4d0c33e8b3503ef3d39a1aa28b3"' :
                                            'id="xs-components-links-module-ComponentsModule-04efc246164153ce50ce67295f7b4331574cfa853951c22e2a5da63bd82e0b8f3110bddde7c571ec2c0080601dd9fbd549cec4d0c33e8b3503ef3d39a1aa28b3"' }>
                                            <li class="link">
                                                <a href="components/AccessDiscussionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccessDiscussionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AccountRecoveryInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountRecoveryInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcknowledgeResponseComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AcknowledgeResponseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddActivityToGroupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddActivityToGroupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppRatingAlertComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppRatingAlertComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ApplicationHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApplicationHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ApplicationHeaderKebabMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApplicationHeaderKebabMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CertificateVerificationPopoverComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CertificateVerificationPopoverComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CollectionActionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CollectionActionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CollectionChildComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CollectionChildComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CommonFormsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommonFormsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfirmAlertComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfirmAlertComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConsentPiiPopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConsentPiiPopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContentActionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContentActionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContentRatingAlertComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContentRatingAlertComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContentViewerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContentViewerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CopyTraceIdPopoverComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CopyTraceIdPopoverComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CourseCompletionPopoverComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CourseCompletionPopoverComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DetailCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogPopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DialogPopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DiscoverComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DiscoverComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DownloadTranscriptPopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DownloadTranscriptPopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditContactDetailsPopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditContactDetailsPopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditContactVerifyPopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditContactVerifyPopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EnrollmentDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EnrollmentDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ExploreBooksSortComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExploreBooksSortComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FilteroptionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilteroptionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GroupGuideLinesPopoverComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GroupGuideLinesPopoverComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ImportPopoverComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImportPopoverComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/JoyfulThemePopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JoyfulThemePopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LicenseCardComponentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LicenseCardComponentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyGroupsPopoverComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyGroupsPopoverComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewExperiencePopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewExperiencePopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotificationItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OverflowMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OverflowMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PbHorizontalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PbHorizontalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileAvatarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileAvatarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileNameConfirmationPopoverComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileNameConfirmationPopoverComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QrScannerIOSComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QrScannerIOSComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RelevantContentCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RelevantContentCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SbAppSharePopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SbAppSharePopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SbDownloadPopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SbDownloadPopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SbGenericFormPopoverComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SbGenericFormPopoverComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SbGenericPopoverComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SbGenericPopoverComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SbInsufficientStoragePopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SbInsufficientStoragePopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SbNoNetworkPopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SbNoNetworkPopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SbPopoverComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SbPopoverComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SbPreferencePopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SbPreferencePopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SbSharePopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SbSharePopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SbSubjectListPopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SbSubjectListPopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SbTutorialPopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SbTutorialPopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShowCertificateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShowCertificateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShowVendorAppsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShowVendorAppsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignInCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignInCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SkeletonItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SkeletonItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SupportAcknowledgement.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SupportAcknowledgement</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TeacherIdVerificationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TeacherIdVerificationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ToastNavigationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToastNavigationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TocHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TocHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpgradePopoverComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpgradePopoverComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewCreditsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewCreditsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/YearOfBirthPopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >YearOfBirthPopupComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ComponentsModule-04efc246164153ce50ce67295f7b4331574cfa853951c22e2a5da63bd82e0b8f3110bddde7c571ec2c0080601dd9fbd549cec4d0c33e8b3503ef3d39a1aa28b3"' : 'data-bs-target="#xs-injectables-links-module-ComponentsModule-04efc246164153ce50ce67295f7b4331574cfa853951c22e2a5da63bd82e0b8f3110bddde7c571ec2c0080601dd9fbd549cec4d0c33e8b3503ef3d39a1aa28b3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ComponentsModule-04efc246164153ce50ce67295f7b4331574cfa853951c22e2a5da63bd82e0b8f3110bddde7c571ec2c0080601dd9fbd549cec4d0c33e8b3503ef3d39a1aa28b3"' :
                                        'id="xs-injectables-links-module-ComponentsModule-04efc246164153ce50ce67295f7b4331574cfa853951c22e2a5da63bd82e0b8f3110bddde7c571ec2c0080601dd9fbd549cec4d0c33e8b3503ef3d39a1aa28b3"' }>
                                        <li class="link">
                                            <a href="injectables/ContentShareHandlerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContentShareHandlerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContentDetailsPageModule.html" data-type="entity-link" >ContentDetailsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ContentDetailsPageModule-26a17e621e96389f885a286dbe9beba96af0fc8917f0d34c74ce8b0a831ee3a75485f2c2d0a24c9b97e2bb0532d14ca025e08e37d2bcb75dd5c1464694a540eb"' : 'data-bs-target="#xs-components-links-module-ContentDetailsPageModule-26a17e621e96389f885a286dbe9beba96af0fc8917f0d34c74ce8b0a831ee3a75485f2c2d0a24c9b97e2bb0532d14ca025e08e37d2bcb75dd5c1464694a540eb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ContentDetailsPageModule-26a17e621e96389f885a286dbe9beba96af0fc8917f0d34c74ce8b0a831ee3a75485f2c2d0a24c9b97e2bb0532d14ca025e08e37d2bcb75dd5c1464694a540eb"' :
                                            'id="xs-components-links-module-ContentDetailsPageModule-26a17e621e96389f885a286dbe9beba96af0fc8917f0d34c74ce8b0a831ee3a75485f2c2d0a24c9b97e2bb0532d14ca025e08e37d2bcb75dd5c1464694a540eb"' }>
                                            <li class="link">
                                                <a href="components/ContentDetailsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContentDetailsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CoreModule-72244ccef4279c5b6a6914aa400e818f7dd52d0645b19184122afe3ac909c0183cb914bda9b95a62e0925faf90739a3106e2905f76197a1dd066708cc9d2d404"' : 'data-bs-target="#xs-injectables-links-module-CoreModule-72244ccef4279c5b6a6914aa400e818f7dd52d0645b19184122afe3ac909c0183cb914bda9b95a62e0925faf90739a3106e2905f76197a1dd066708cc9d2d404"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-72244ccef4279c5b6a6914aa400e818f7dd52d0645b19184122afe3ac909c0183cb914bda9b95a62e0925faf90739a3106e2905f76197a1dd066708cc9d2d404"' :
                                        'id="xs-injectables-links-module-CoreModule-72244ccef4279c5b6a6914aa400e818f7dd52d0645b19184122afe3ac909c0183cb914bda9b95a62e0925faf90739a3106e2905f76197a1dd066708cc9d2d404"' }>
                                        <li class="link">
                                            <a href="injectables/AssessmentApiService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AssessmentApiService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DhitiApiService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DhitiApiService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/EvidenceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EvidenceService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStorageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStorageService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProgramService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProgramService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProjectReportService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectReportService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SharingFeatureService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SharingFeatureService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UpdateLocalSchoolDataService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateLocalSchoolDataService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UpdateTrackerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateTrackerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CourseBatchesPageModule.html" data-type="entity-link" >CourseBatchesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CourseBatchesPageModule-2d350c723e0243f6909049eb9c2d5b430d427b133f1004acd68cadfd0f00402fc7f5c6cc35ac055d6c05a2c2f9f2dc3d877cafe4cd43b76fb82180f52bca9d97"' : 'data-bs-target="#xs-components-links-module-CourseBatchesPageModule-2d350c723e0243f6909049eb9c2d5b430d427b133f1004acd68cadfd0f00402fc7f5c6cc35ac055d6c05a2c2f9f2dc3d877cafe4cd43b76fb82180f52bca9d97"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CourseBatchesPageModule-2d350c723e0243f6909049eb9c2d5b430d427b133f1004acd68cadfd0f00402fc7f5c6cc35ac055d6c05a2c2f9f2dc3d877cafe4cd43b76fb82180f52bca9d97"' :
                                            'id="xs-components-links-module-CourseBatchesPageModule-2d350c723e0243f6909049eb9c2d5b430d427b133f1004acd68cadfd0f00402fc7f5c6cc35ac055d6c05a2c2f9f2dc3d877cafe4cd43b76fb82180f52bca9d97"' }>
                                            <li class="link">
                                                <a href="components/CourseBatchesPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CourseBatchesPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoursesPageModule.html" data-type="entity-link" >CoursesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CoursesPageModule-d6a020dce34c0e913b8b2471a4a5bce912bb04da6609c12dc11314d6284cb8af9fb86ad0b00d50e00f3810d8d4fc1e6ca1435b86791f6f26db9313fcee4f5cd2"' : 'data-bs-target="#xs-components-links-module-CoursesPageModule-d6a020dce34c0e913b8b2471a4a5bce912bb04da6609c12dc11314d6284cb8af9fb86ad0b00d50e00f3810d8d4fc1e6ca1435b86791f6f26db9313fcee4f5cd2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoursesPageModule-d6a020dce34c0e913b8b2471a4a5bce912bb04da6609c12dc11314d6284cb8af9fb86ad0b00d50e00f3810d8d4fc1e6ca1435b86791f6f26db9313fcee4f5cd2"' :
                                            'id="xs-components-links-module-CoursesPageModule-d6a020dce34c0e913b8b2471a4a5bce912bb04da6609c12dc11314d6284cb8af9fb86ad0b00d50e00f3810d8d4fc1e6ca1435b86791f6f26db9313fcee4f5cd2"' }>
                                            <li class="link">
                                                <a href="components/CoursesPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CoursesPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CreateEditGroupPageModule.html" data-type="entity-link" >CreateEditGroupPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CreateEditGroupPageModule-cddfe510598868c16fdbbc6ce4a25ff1be56bd77132c70a12f1479827cd9d4e6c5da2e25eb38a2827147f233ed90c0b68e9fed9a9c360111a6c0d8cc78a5610c"' : 'data-bs-target="#xs-components-links-module-CreateEditGroupPageModule-cddfe510598868c16fdbbc6ce4a25ff1be56bd77132c70a12f1479827cd9d4e6c5da2e25eb38a2827147f233ed90c0b68e9fed9a9c360111a6c0d8cc78a5610c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CreateEditGroupPageModule-cddfe510598868c16fdbbc6ce4a25ff1be56bd77132c70a12f1479827cd9d4e6c5da2e25eb38a2827147f233ed90c0b68e9fed9a9c360111a6c0d8cc78a5610c"' :
                                            'id="xs-components-links-module-CreateEditGroupPageModule-cddfe510598868c16fdbbc6ce4a25ff1be56bd77132c70a12f1479827cd9d4e6c5da2e25eb38a2827147f233ed90c0b68e9fed9a9c360111a6c0d8cc78a5610c"' }>
                                            <li class="link">
                                                <a href="components/CreateEditGroupPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateEditGroupPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CurriculumCoursesPageModule.html" data-type="entity-link" >CurriculumCoursesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CurriculumCoursesPageModule-8c8051c2c3e726ffe124e488262c6fd041bd72d60eeaca331968711c6dfab816696d817fa94fc65f2c97c63d82e70c6d0c96724515bf89c864bd14a06bb58f19"' : 'data-bs-target="#xs-components-links-module-CurriculumCoursesPageModule-8c8051c2c3e726ffe124e488262c6fd041bd72d60eeaca331968711c6dfab816696d817fa94fc65f2c97c63d82e70c6d0c96724515bf89c864bd14a06bb58f19"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CurriculumCoursesPageModule-8c8051c2c3e726ffe124e488262c6fd041bd72d60eeaca331968711c6dfab816696d817fa94fc65f2c97c63d82e70c6d0c96724515bf89c864bd14a06bb58f19"' :
                                            'id="xs-components-links-module-CurriculumCoursesPageModule-8c8051c2c3e726ffe124e488262c6fd041bd72d60eeaca331968711c6dfab816696d817fa94fc65f2c97c63d82e70c6d0c96724515bf89c864bd14a06bb58f19"' }>
                                            <li class="link">
                                                <a href="components/CurriculumCoursesPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CurriculumCoursesPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CurriculumCoursesRoutingModule.html" data-type="entity-link" >CurriculumCoursesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DeeplinkRedirectModule.html" data-type="entity-link" >DeeplinkRedirectModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-DeeplinkRedirectModule-cd455eef1a9c2337025965e2a1d6252fc06d30d427fbceb9b4105d5e93187ef58b211faa5f9981c0b7630037852d33c41c542da94ba3aa147c4ac882b4a59bee"' : 'data-bs-target="#xs-components-links-module-DeeplinkRedirectModule-cd455eef1a9c2337025965e2a1d6252fc06d30d427fbceb9b4105d5e93187ef58b211faa5f9981c0b7630037852d33c41c542da94ba3aa147c4ac882b4a59bee"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DeeplinkRedirectModule-cd455eef1a9c2337025965e2a1d6252fc06d30d427fbceb9b4105d5e93187ef58b211faa5f9981c0b7630037852d33c41c542da94ba3aa147c4ac882b4a59bee"' :
                                            'id="xs-components-links-module-DeeplinkRedirectModule-cd455eef1a9c2337025965e2a1d6252fc06d30d427fbceb9b4105d5e93187ef58b211faa5f9981c0b7630037852d33c41c542da94ba3aa147c4ac882b4a59bee"' }>
                                            <li class="link">
                                                <a href="components/DeeplinkRedirectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeeplinkRedirectComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DirectivesModule.html" data-type="entity-link" >DirectivesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-DirectivesModule-454fd1044cb5100ab407d09666157e7281205ee623bcfe0f0ce697399397ad06309fe13dfba5f0dcb5c4cf14447c07b0c0f8b01b5c8c5dc502efc9603db2f7a4"' : 'data-bs-target="#xs-directives-links-module-DirectivesModule-454fd1044cb5100ab407d09666157e7281205ee623bcfe0f0ce697399397ad06309fe13dfba5f0dcb5c4cf14447c07b0c0f8b01b5c8c5dc502efc9603db2f7a4"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-DirectivesModule-454fd1044cb5100ab407d09666157e7281205ee623bcfe0f0ce697399397ad06309fe13dfba5f0dcb5c4cf14447c07b0c0f8b01b5c8c5dc502efc9603db2f7a4"' :
                                        'id="xs-directives-links-module-DirectivesModule-454fd1044cb5100ab407d09666157e7281205ee623bcfe0f0ce697399397ad06309fe13dfba5f0dcb5c4cf14447c07b0c0f8b01b5c8c5dc502efc9603db2f7a4"' }>
                                        <li class="link">
                                            <a href="directives/CustomIonSelectDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomIonSelectDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/HideHeaderFooterDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HideHeaderFooterDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ReadMoreDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReadMoreDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DiscussionForumModule.html" data-type="entity-link" >DiscussionForumModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DistrictMappingPageModule.html" data-type="entity-link" >DistrictMappingPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-DistrictMappingPageModule-fb68bd4334715286cf5ff8bc8b02ed74d592801b903acc7b005ce2de82028c289de439f3d60647dd8e07bd3bd34e892c8d6a4139ce533341c987b7ec2a9c40e0"' : 'data-bs-target="#xs-components-links-module-DistrictMappingPageModule-fb68bd4334715286cf5ff8bc8b02ed74d592801b903acc7b005ce2de82028c289de439f3d60647dd8e07bd3bd34e892c8d6a4139ce533341c987b7ec2a9c40e0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DistrictMappingPageModule-fb68bd4334715286cf5ff8bc8b02ed74d592801b903acc7b005ce2de82028c289de439f3d60647dd8e07bd3bd34e892c8d6a4139ce533341c987b7ec2a9c40e0"' :
                                            'id="xs-components-links-module-DistrictMappingPageModule-fb68bd4334715286cf5ff8bc8b02ed74d592801b903acc7b005ce2de82028c289de439f3d60647dd8e07bd3bd34e892c8d6a4139ce533341c987b7ec2a9c40e0"' }>
                                            <li class="link">
                                                <a href="components/DistrictMappingPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DistrictMappingPage</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DistrictMappingPageModule-fb68bd4334715286cf5ff8bc8b02ed74d592801b903acc7b005ce2de82028c289de439f3d60647dd8e07bd3bd34e892c8d6a4139ce533341c987b7ec2a9c40e0"' : 'data-bs-target="#xs-injectables-links-module-DistrictMappingPageModule-fb68bd4334715286cf5ff8bc8b02ed74d592801b903acc7b005ce2de82028c289de439f3d60647dd8e07bd3bd34e892c8d6a4139ce533341c987b7ec2a9c40e0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DistrictMappingPageModule-fb68bd4334715286cf5ff8bc8b02ed74d592801b903acc7b005ce2de82028c289de439f3d60647dd8e07bd3bd34e892c8d6a4139ce533341c987b7ec2a9c40e0"' :
                                        'id="xs-injectables-links-module-DistrictMappingPageModule-fb68bd4334715286cf5ff8bc8b02ed74d592801b903acc7b005ce2de82028c289de439f3d60647dd8e07bd3bd34e892c8d6a4139ce533341c987b7ec2a9c40e0"' }>
                                        <li class="link">
                                            <a href="injectables/LocationHandler.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocationHandler</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProfileHandler.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileHandler</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DomainEcmListingModule.html" data-type="entity-link" >DomainEcmListingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-DomainEcmListingModule-47ef4cda23fc0b1fa75f77fb258aa41f3d02c0b3e518348dbaef41d94124250e19c6b5bb4f43ae6cbea032489048ff62370b382283955947c6929f3e949d6192"' : 'data-bs-target="#xs-components-links-module-DomainEcmListingModule-47ef4cda23fc0b1fa75f77fb258aa41f3d02c0b3e518348dbaef41d94124250e19c6b5bb4f43ae6cbea032489048ff62370b382283955947c6929f3e949d6192"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DomainEcmListingModule-47ef4cda23fc0b1fa75f77fb258aa41f3d02c0b3e518348dbaef41d94124250e19c6b5bb4f43ae6cbea032489048ff62370b382283955947c6929f3e949d6192"' :
                                            'id="xs-components-links-module-DomainEcmListingModule-47ef4cda23fc0b1fa75f77fb258aa41f3d02c0b3e518348dbaef41d94124250e19c6b5bb4f43ae6cbea032489048ff62370b382283955947c6929f3e949d6192"' }>
                                            <li class="link">
                                                <a href="components/DomainEcmLsitingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DomainEcmLsitingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DownloadManagerPageModule.html" data-type="entity-link" >DownloadManagerPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-DownloadManagerPageModule-2d9244b0a495d2da3780d1d0a4f9926e7d3759de11e6cd09f341b63ad346e5cf571895a9c62e9a46de416b2d6ceacefb4cff347ca2d3abaac58bc7ddfa4c3d00"' : 'data-bs-target="#xs-components-links-module-DownloadManagerPageModule-2d9244b0a495d2da3780d1d0a4f9926e7d3759de11e6cd09f341b63ad346e5cf571895a9c62e9a46de416b2d6ceacefb4cff347ca2d3abaac58bc7ddfa4c3d00"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DownloadManagerPageModule-2d9244b0a495d2da3780d1d0a4f9926e7d3759de11e6cd09f341b63ad346e5cf571895a9c62e9a46de416b2d6ceacefb4cff347ca2d3abaac58bc7ddfa4c3d00"' :
                                            'id="xs-components-links-module-DownloadManagerPageModule-2d9244b0a495d2da3780d1d0a4f9926e7d3759de11e6cd09f341b63ad346e5cf571895a9c62e9a46de416b2d6ceacefb4cff347ca2d3abaac58bc7ddfa4c3d00"' }>
                                            <li class="link">
                                                <a href="components/DownloadManagerPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DownloadManagerPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DownloadsHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DownloadsHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DownloadsTabComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DownloadsTabComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoDownloadsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NoDownloadsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EcmListingPageModule.html" data-type="entity-link" >EcmListingPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-EcmListingPageModule-e4b20bfc48c6a1dda949e300e80ba2978544f9c440239a42d631f5f453e5d97abb1f12ac18f7a4f291bfdd80226d3c22b02b84dd0ff3984903490147af6f9f0e"' : 'data-bs-target="#xs-components-links-module-EcmListingPageModule-e4b20bfc48c6a1dda949e300e80ba2978544f9c440239a42d631f5f453e5d97abb1f12ac18f7a4f291bfdd80226d3c22b02b84dd0ff3984903490147af6f9f0e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EcmListingPageModule-e4b20bfc48c6a1dda949e300e80ba2978544f9c440239a42d631f5f453e5d97abb1f12ac18f7a4f291bfdd80226d3c22b02b84dd0ff3984903490147af6f9f0e"' :
                                            'id="xs-components-links-module-EcmListingPageModule-e4b20bfc48c6a1dda949e300e80ba2978544f9c440239a42d631f5f453e5d97abb1f12ac18f7a4f291bfdd80226d3c22b02b84dd0ff3984903490147af6f9f0e"' }>
                                            <li class="link">
                                                <a href="components/EcmListingPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EcmListingPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EnrolledCourseDetailsPagePageModule.html" data-type="entity-link" >EnrolledCourseDetailsPagePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-EnrolledCourseDetailsPagePageModule-4bab3f0676e8b244cee18d51f32987373eed86e039b7f96317ef5a3ad666649bd9bf904cb40af14eee4c31381ddf7dbc3cbcc7d07e7bfc5997c6df9927b46507"' : 'data-bs-target="#xs-components-links-module-EnrolledCourseDetailsPagePageModule-4bab3f0676e8b244cee18d51f32987373eed86e039b7f96317ef5a3ad666649bd9bf904cb40af14eee4c31381ddf7dbc3cbcc7d07e7bfc5997c6df9927b46507"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EnrolledCourseDetailsPagePageModule-4bab3f0676e8b244cee18d51f32987373eed86e039b7f96317ef5a3ad666649bd9bf904cb40af14eee4c31381ddf7dbc3cbcc7d07e7bfc5997c6df9927b46507"' :
                                            'id="xs-components-links-module-EnrolledCourseDetailsPagePageModule-4bab3f0676e8b244cee18d51f32987373eed86e039b7f96317ef5a3ad666649bd9bf904cb40af14eee4c31381ddf7dbc3cbcc7d07e7bfc5997c6df9927b46507"' }>
                                            <li class="link">
                                                <a href="components/EnrolledCourseDetailsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EnrolledCourseDetailsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-EnrolledCourseDetailsPagePageModule-4bab3f0676e8b244cee18d51f32987373eed86e039b7f96317ef5a3ad666649bd9bf904cb40af14eee4c31381ddf7dbc3cbcc7d07e7bfc5997c6df9927b46507"' : 'data-bs-target="#xs-injectables-links-module-EnrolledCourseDetailsPagePageModule-4bab3f0676e8b244cee18d51f32987373eed86e039b7f96317ef5a3ad666649bd9bf904cb40af14eee4c31381ddf7dbc3cbcc7d07e7bfc5997c6df9927b46507"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EnrolledCourseDetailsPagePageModule-4bab3f0676e8b244cee18d51f32987373eed86e039b7f96317ef5a3ad666649bd9bf904cb40af14eee4c31381ddf7dbc3cbcc7d07e7bfc5997c6df9927b46507"' :
                                        'id="xs-injectables-links-module-EnrolledCourseDetailsPagePageModule-4bab3f0676e8b244cee18d51f32987373eed86e039b7f96317ef5a3ad666649bd9bf904cb40af14eee4c31381ddf7dbc3cbcc7d07e7bfc5997c6df9927b46507"' }>
                                        <li class="link">
                                            <a href="injectables/TextbookTocService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TextbookTocService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ExploreBooksPageModule.html" data-type="entity-link" >ExploreBooksPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ExploreBooksPageModule-a5849a30d064ca8ff1ac2ea18e229de40c52514b95521362a57443949fd4557406da1570e9194ab81e1d6791c39061d689680001eb41f74cba088de5aa376afd"' : 'data-bs-target="#xs-components-links-module-ExploreBooksPageModule-a5849a30d064ca8ff1ac2ea18e229de40c52514b95521362a57443949fd4557406da1570e9194ab81e1d6791c39061d689680001eb41f74cba088de5aa376afd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExploreBooksPageModule-a5849a30d064ca8ff1ac2ea18e229de40c52514b95521362a57443949fd4557406da1570e9194ab81e1d6791c39061d689680001eb41f74cba088de5aa376afd"' :
                                            'id="xs-components-links-module-ExploreBooksPageModule-a5849a30d064ca8ff1ac2ea18e229de40c52514b95521362a57443949fd4557406da1570e9194ab81e1d6791c39061d689680001eb41f74cba088de5aa376afd"' }>
                                            <li class="link">
                                                <a href="components/ExploreBooksPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExploreBooksPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FaqHelpPageModule.html" data-type="entity-link" >FaqHelpPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-FaqHelpPageModule-4b4f01cebc296bc79565dd7475c564b8d0666f7eb0493fe9a73b45c345c96e73b131105a7a984d36eb19cac88d64b44ba52a216773b71840b377974d1134e649"' : 'data-bs-target="#xs-components-links-module-FaqHelpPageModule-4b4f01cebc296bc79565dd7475c564b8d0666f7eb0493fe9a73b45c345c96e73b131105a7a984d36eb19cac88d64b44ba52a216773b71840b377974d1134e649"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FaqHelpPageModule-4b4f01cebc296bc79565dd7475c564b8d0666f7eb0493fe9a73b45c345c96e73b131105a7a984d36eb19cac88d64b44ba52a216773b71840b377974d1134e649"' :
                                            'id="xs-components-links-module-FaqHelpPageModule-4b4f01cebc296bc79565dd7475c564b8d0666f7eb0493fe9a73b45c345c96e73b131105a7a984d36eb19cac88d64b44ba52a216773b71840b377974d1134e649"' }>
                                            <li class="link">
                                                <a href="components/FaqHelpPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FaqHelpPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FaqReportIssuePageModule.html" data-type="entity-link" >FaqReportIssuePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-FaqReportIssuePageModule-f1d469f55afc7714e8ef358252923dbd23e312884dfa9e24b825a7a8f832943be1dc04d3e4f23a568e5b149df7b8d665407e135efda1f56b9775517098b78a06"' : 'data-bs-target="#xs-components-links-module-FaqReportIssuePageModule-f1d469f55afc7714e8ef358252923dbd23e312884dfa9e24b825a7a8f832943be1dc04d3e4f23a568e5b149df7b8d665407e135efda1f56b9775517098b78a06"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FaqReportIssuePageModule-f1d469f55afc7714e8ef358252923dbd23e312884dfa9e24b825a7a8f832943be1dc04d3e4f23a568e5b149df7b8d665407e135efda1f56b9775517098b78a06"' :
                                            'id="xs-components-links-module-FaqReportIssuePageModule-f1d469f55afc7714e8ef358252923dbd23e312884dfa9e24b825a7a8f832943be1dc04d3e4f23a568e5b149df7b8d665407e135efda1f56b9775517098b78a06"' }>
                                            <li class="link">
                                                <a href="components/FaqReportIssuePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FaqReportIssuePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FiltersPageModule.html" data-type="entity-link" >FiltersPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-FiltersPageModule-e700a62c999115feaf4baeffdfecfb82f6e2a8000f36c734c2111ed9f25bec24100cbab30c71f2a5e7f022f48dbb4e2bce590bac167efb5a5e67a3f853ee7d9a"' : 'data-bs-target="#xs-components-links-module-FiltersPageModule-e700a62c999115feaf4baeffdfecfb82f6e2a8000f36c734c2111ed9f25bec24100cbab30c71f2a5e7f022f48dbb4e2bce590bac167efb5a5e67a3f853ee7d9a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FiltersPageModule-e700a62c999115feaf4baeffdfecfb82f6e2a8000f36c734c2111ed9f25bec24100cbab30c71f2a5e7f022f48dbb4e2bce590bac167efb5a5e67a3f853ee7d9a"' :
                                            'id="xs-components-links-module-FiltersPageModule-e700a62c999115feaf4baeffdfecfb82f6e2a8000f36c734c2111ed9f25bec24100cbab30c71f2a5e7f022f48dbb4e2bce590bac167efb5a5e67a3f853ee7d9a"' }>
                                            <li class="link">
                                                <a href="components/FiltersPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FiltersPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FrameworkSelectionPageModule.html" data-type="entity-link" >FrameworkSelectionPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-FrameworkSelectionPageModule-fe637f0cd34f914f62cb61a2405db147ae73d71fc19e2086466a4966c11e38f224832697ee07acc3467e4e26a51e803c83a8afdb104da8bf0b0594a389196105"' : 'data-bs-target="#xs-components-links-module-FrameworkSelectionPageModule-fe637f0cd34f914f62cb61a2405db147ae73d71fc19e2086466a4966c11e38f224832697ee07acc3467e4e26a51e803c83a8afdb104da8bf0b0594a389196105"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FrameworkSelectionPageModule-fe637f0cd34f914f62cb61a2405db147ae73d71fc19e2086466a4966c11e38f224832697ee07acc3467e4e26a51e803c83a8afdb104da8bf0b0594a389196105"' :
                                            'id="xs-components-links-module-FrameworkSelectionPageModule-fe637f0cd34f914f62cb61a2405db147ae73d71fc19e2086466a4966c11e38f224832697ee07acc3467e4e26a51e803c83a8afdb104da8bf0b0594a389196105"' }>
                                            <li class="link">
                                                <a href="components/FrameworkSelectionPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FrameworkSelectionPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GenericReportsModule.html" data-type="entity-link" >GenericReportsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-GenericReportsModule-27409e48b354b61d00db8cf7c33bab3c38e6f700b3859647a2a571c1eaa536a243b510d4b0ed8b0d9dd7389fa6aa0e1d4dce64fd2b71f46a3fb4f0a608e9a40d"' : 'data-bs-target="#xs-components-links-module-GenericReportsModule-27409e48b354b61d00db8cf7c33bab3c38e6f700b3859647a2a571c1eaa536a243b510d4b0ed8b0d9dd7389fa6aa0e1d4dce64fd2b71f46a3fb4f0a608e9a40d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GenericReportsModule-27409e48b354b61d00db8cf7c33bab3c38e6f700b3859647a2a571c1eaa536a243b510d4b0ed8b0d9dd7389fa6aa0e1d4dce64fd2b71f46a3fb4f0a608e9a40d"' :
                                            'id="xs-components-links-module-GenericReportsModule-27409e48b354b61d00db8cf7c33bab3c38e6f700b3859647a2a571c1eaa536a243b510d4b0ed8b0d9dd7389fa6aa0e1d4dce64fd2b71f46a3fb4f0a608e9a40d"' }>
                                            <li class="link">
                                                <a href="components/ReportsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReportsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GroupDetailsPageModule.html" data-type="entity-link" >GroupDetailsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-GroupDetailsPageModule-4cba244a0242afc41e5c67346076207976d4707b5b989ff7751da87238da3c0d026472eeeae106b312e398158b221a65de8558e3eb24a2325a6b33bf72440783"' : 'data-bs-target="#xs-components-links-module-GroupDetailsPageModule-4cba244a0242afc41e5c67346076207976d4707b5b989ff7751da87238da3c0d026472eeeae106b312e398158b221a65de8558e3eb24a2325a6b33bf72440783"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GroupDetailsPageModule-4cba244a0242afc41e5c67346076207976d4707b5b989ff7751da87238da3c0d026472eeeae106b312e398158b221a65de8558e3eb24a2325a6b33bf72440783"' :
                                            'id="xs-components-links-module-GroupDetailsPageModule-4cba244a0242afc41e5c67346076207976d4707b5b989ff7751da87238da3c0d026472eeeae106b312e398158b221a65de8558e3eb24a2325a6b33bf72440783"' }>
                                            <li class="link">
                                                <a href="components/AddActivityToGroupPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddActivityToGroupPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GroupDetailsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GroupDetailsPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewMoreActivityPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewMoreActivityPage</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-GroupDetailsPageModule-4cba244a0242afc41e5c67346076207976d4707b5b989ff7751da87238da3c0d026472eeeae106b312e398158b221a65de8558e3eb24a2325a6b33bf72440783"' : 'data-bs-target="#xs-injectables-links-module-GroupDetailsPageModule-4cba244a0242afc41e5c67346076207976d4707b5b989ff7751da87238da3c0d026472eeeae106b312e398158b221a65de8558e3eb24a2325a6b33bf72440783"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GroupDetailsPageModule-4cba244a0242afc41e5c67346076207976d4707b5b989ff7751da87238da3c0d026472eeeae106b312e398158b221a65de8558e3eb24a2325a6b33bf72440783"' :
                                        'id="xs-injectables-links-module-GroupDetailsPageModule-4cba244a0242afc41e5c67346076207976d4707b5b989ff7751da87238da3c0d026472eeeae106b312e398158b221a65de8558e3eb24a2325a6b33bf72440783"' }>
                                        <li class="link">
                                            <a href="injectables/ViewMoreActivityDelegateService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewMoreActivityDelegateService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GuestEditPageModule.html" data-type="entity-link" >GuestEditPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-GuestEditPageModule-cb245ff648e1177dcfb52f241743f8e436d3a95962819a73a884c52415568fad3ac42c4e028a5a75052877b06eafbf9fac6ed86d4abb39c6a89a5d4c87e4a4fb"' : 'data-bs-target="#xs-components-links-module-GuestEditPageModule-cb245ff648e1177dcfb52f241743f8e436d3a95962819a73a884c52415568fad3ac42c4e028a5a75052877b06eafbf9fac6ed86d4abb39c6a89a5d4c87e4a4fb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GuestEditPageModule-cb245ff648e1177dcfb52f241743f8e436d3a95962819a73a884c52415568fad3ac42c4e028a5a75052877b06eafbf9fac6ed86d4abb39c6a89a5d4c87e4a4fb"' :
                                            'id="xs-components-links-module-GuestEditPageModule-cb245ff648e1177dcfb52f241743f8e436d3a95962819a73a884c52415568fad3ac42c4e028a5a75052877b06eafbf9fac6ed86d4abb39c6a89a5d4c87e4a4fb"' }>
                                            <li class="link">
                                                <a href="components/GuestEditPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GuestEditPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GuestProfilePageModule.html" data-type="entity-link" >GuestProfilePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-GuestProfilePageModule-1e3366a2750b3f6ac69465d22f7453be4f71443621a92e1521ecb92ba0bf18d86c274a51a4aeac15a2d352a3f7a6e0fca4ac2db12df1f9a8cf02f304ff9c83e6"' : 'data-bs-target="#xs-components-links-module-GuestProfilePageModule-1e3366a2750b3f6ac69465d22f7453be4f71443621a92e1521ecb92ba0bf18d86c274a51a4aeac15a2d352a3f7a6e0fca4ac2db12df1f9a8cf02f304ff9c83e6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GuestProfilePageModule-1e3366a2750b3f6ac69465d22f7453be4f71443621a92e1521ecb92ba0bf18d86c274a51a4aeac15a2d352a3f7a6e0fca4ac2db12df1f9a8cf02f304ff9c83e6"' :
                                            'id="xs-components-links-module-GuestProfilePageModule-1e3366a2750b3f6ac69465d22f7453be4f71443621a92e1521ecb92ba0bf18d86c274a51a4aeac15a2d352a3f7a6e0fca4ac2db12df1f9a8cf02f304ff9c83e6"' }>
                                            <li class="link">
                                                <a href="components/GuestProfilePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GuestProfilePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link" >HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-HomePageModule-c90a31fa5ef3ff0a02064fcd48463cbc3a3f5a348e98bb319c716c6e6673593c5810003da220b8adecda27ceb637e49316068f76b0140669853ba563ff64f28b"' : 'data-bs-target="#xs-components-links-module-HomePageModule-c90a31fa5ef3ff0a02064fcd48463cbc3a3f5a348e98bb319c716c6e6673593c5810003da220b8adecda27ceb637e49316068f76b0140669853ba563ff64f28b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-c90a31fa5ef3ff0a02064fcd48463cbc3a3f5a348e98bb319c716c6e6673593c5810003da220b8adecda27ceb637e49316068f76b0140669853ba563ff64f28b"' :
                                            'id="xs-components-links-module-HomePageModule-c90a31fa5ef3ff0a02064fcd48463cbc3a3f5a348e98bb319c716c6e6673593c5810003da220b8adecda27ceb637e49316068f76b0140669853ba563ff64f28b"' }>
                                            <li class="link">
                                                <a href="components/AdminHomePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminHomePage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserHomePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserHomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ImageListingModule.html" data-type="entity-link" >ImageListingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ImageListingModule-5014fa89151cab47803c541073101b6b443855f91c73882d2e1b760446c9ac08a905acbcfee1395f6bee76d7d74633fdbf7ca64009a7c5f5d5fe906c90f07196"' : 'data-bs-target="#xs-components-links-module-ImageListingModule-5014fa89151cab47803c541073101b6b443855f91c73882d2e1b760446c9ac08a905acbcfee1395f6bee76d7d74633fdbf7ca64009a7c5f5d5fe906c90f07196"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ImageListingModule-5014fa89151cab47803c541073101b6b443855f91c73882d2e1b760446c9ac08a905acbcfee1395f6bee76d7d74633fdbf7ca64009a7c5f5d5fe906c90f07196"' :
                                            'id="xs-components-links-module-ImageListingModule-5014fa89151cab47803c541073101b6b443855f91c73882d2e1b760446c9ac08a905acbcfee1395f6bee76d7d74633fdbf7ca64009a7c5f5d5fe906c90f07196"' }>
                                            <li class="link">
                                                <a href="components/ImageListingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImageListingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ImpSuggestionsPageModule.html" data-type="entity-link" >ImpSuggestionsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ImpSuggestionsPageModule-eac542328b561cc2770640481eacd1853ec32de0350f17be0b8b590befda71883c496eed13494365a68a994d72f9863206458c0b5f7bc8196fc270cdcc47474f"' : 'data-bs-target="#xs-components-links-module-ImpSuggestionsPageModule-eac542328b561cc2770640481eacd1853ec32de0350f17be0b8b590befda71883c496eed13494365a68a994d72f9863206458c0b5f7bc8196fc270cdcc47474f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ImpSuggestionsPageModule-eac542328b561cc2770640481eacd1853ec32de0350f17be0b8b590befda71883c496eed13494365a68a994d72f9863206458c0b5f7bc8196fc270cdcc47474f"' :
                                            'id="xs-components-links-module-ImpSuggestionsPageModule-eac542328b561cc2770640481eacd1853ec32de0350f17be0b8b590befda71883c496eed13494365a68a994d72f9863206458c0b5f7bc8196fc270cdcc47474f"' }>
                                            <li class="link">
                                                <a href="components/ImpSuggestionsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImpSuggestionsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ImpSuggestionsPageRoutingModule.html" data-type="entity-link" >ImpSuggestionsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LanguageSettingsModule.html" data-type="entity-link" >LanguageSettingsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-LanguageSettingsModule-50ed9ce4204a8d398587393cffca49732448a66d1c278a4974f707571a94973d9c5f1df1b0da5a33a50fced1b446fa17efa67d1ef3b23b66d3a962219883dc11"' : 'data-bs-target="#xs-components-links-module-LanguageSettingsModule-50ed9ce4204a8d398587393cffca49732448a66d1c278a4974f707571a94973d9c5f1df1b0da5a33a50fced1b446fa17efa67d1ef3b23b66d3a962219883dc11"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LanguageSettingsModule-50ed9ce4204a8d398587393cffca49732448a66d1c278a4974f707571a94973d9c5f1df1b0da5a33a50fced1b446fa17efa67d1ef3b23b66d3a962219883dc11"' :
                                            'id="xs-components-links-module-LanguageSettingsModule-50ed9ce4204a8d398587393cffca49732448a66d1c278a4974f707571a94973d9c5f1df1b0da5a33a50fced1b446fa17efa67d1ef3b23b66d3a962219883dc11"' }>
                                            <li class="link">
                                                <a href="components/LanguageSettingsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LanguageSettingsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ManageUserProfilesPageModule.html" data-type="entity-link" >ManageUserProfilesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ManageUserProfilesPageModule-6307752e2a46e29e0b6c7524abf15227d38a56782d97d949a1418e084dce4b2c501be04e442ef664111b3adf59c3018d2bc628a319bf604a18f995cc71c7db3f"' : 'data-bs-target="#xs-components-links-module-ManageUserProfilesPageModule-6307752e2a46e29e0b6c7524abf15227d38a56782d97d949a1418e084dce4b2c501be04e442ef664111b3adf59c3018d2bc628a319bf604a18f995cc71c7db3f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ManageUserProfilesPageModule-6307752e2a46e29e0b6c7524abf15227d38a56782d97d949a1418e084dce4b2c501be04e442ef664111b3adf59c3018d2bc628a319bf604a18f995cc71c7db3f"' :
                                            'id="xs-components-links-module-ManageUserProfilesPageModule-6307752e2a46e29e0b6c7524abf15227d38a56782d97d949a1418e084dce4b2c501be04e442ef664111b3adf59c3018d2bc628a319bf604a18f995cc71c7db3f"' }>
                                            <li class="link">
                                                <a href="components/ManageUserProfilesPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManageUserProfilesPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MyGroupsPageModule.html" data-type="entity-link" >MyGroupsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-MyGroupsPageModule-1d936f9034725c77fcabb8eeab2be37b58f3bcbf590d6614f5a02e1112bf59e60fe247531b28ee411a7fefb92ecd3991a4ad650ebca692419e24ef4ef7e77d95"' : 'data-bs-target="#xs-components-links-module-MyGroupsPageModule-1d936f9034725c77fcabb8eeab2be37b58f3bcbf590d6614f5a02e1112bf59e60fe247531b28ee411a7fefb92ecd3991a4ad650ebca692419e24ef4ef7e77d95"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MyGroupsPageModule-1d936f9034725c77fcabb8eeab2be37b58f3bcbf590d6614f5a02e1112bf59e60fe247531b28ee411a7fefb92ecd3991a4ad650ebca692419e24ef4ef7e77d95"' :
                                            'id="xs-components-links-module-MyGroupsPageModule-1d936f9034725c77fcabb8eeab2be37b58f3bcbf590d6614f5a02e1112bf59e60fe247531b28ee411a7fefb92ecd3991a4ad650ebca692419e24ef4ef7e77d95"' }>
                                            <li class="link">
                                                <a href="components/MyGroupsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyGroupsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MyGroupsRoutingModule.html" data-type="entity-link" >MyGroupsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NotificationPageModule.html" data-type="entity-link" >NotificationPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-NotificationPageModule-7b4068ed5fdfc9961a77b2083e6812bc7df5d64bef19acb56affeee164b19c1f304bbfe9a4771c0507d6b80c8a60f9ea54e85d4b82262f78d622ace15f39149a"' : 'data-bs-target="#xs-components-links-module-NotificationPageModule-7b4068ed5fdfc9961a77b2083e6812bc7df5d64bef19acb56affeee164b19c1f304bbfe9a4771c0507d6b80c8a60f9ea54e85d4b82262f78d622ace15f39149a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NotificationPageModule-7b4068ed5fdfc9961a77b2083e6812bc7df5d64bef19acb56affeee164b19c1f304bbfe9a4771c0507d6b80c8a60f9ea54e85d4b82262f78d622ace15f39149a"' :
                                            'id="xs-components-links-module-NotificationPageModule-7b4068ed5fdfc9961a77b2083e6812bc7df5d64bef19acb56affeee164b19c1f304bbfe9a4771c0507d6b80c8a60f9ea54e85d4b82262f78d622ace15f39149a"' }>
                                            <li class="link">
                                                <a href="components/NotificationPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ObservationModule.html" data-type="entity-link" >ObservationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ObservationModule-a920d990c07faa64919b454bf831a7be4fefd3ea1d2526e2d21b811add219351bce187ead497520497a858abdf7ab283c8c1073189945ba6a15ae45b52b1faa7"' : 'data-bs-target="#xs-components-links-module-ObservationModule-a920d990c07faa64919b454bf831a7be4fefd3ea1d2526e2d21b811add219351bce187ead497520497a858abdf7ab283c8c1073189945ba6a15ae45b52b1faa7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ObservationModule-a920d990c07faa64919b454bf831a7be4fefd3ea1d2526e2d21b811add219351bce187ead497520497a858abdf7ab283c8c1073189945ba6a15ae45b52b1faa7"' :
                                            'id="xs-components-links-module-ObservationModule-a920d990c07faa64919b454bf831a7be4fefd3ea1d2526e2d21b811add219351bce187ead497520497a858abdf7ab283c8c1073189945ba6a15ae45b52b1faa7"' }>
                                            <li class="link">
                                                <a href="components/ObservationDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ObservationDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ObservationHomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ObservationHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ObservationSubmissionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ObservationSubmissionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ObservationRoutingModule.html" data-type="entity-link" >ObservationRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OtpPageModule.html" data-type="entity-link" >OtpPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-OtpPageModule-200af55048a2b8bc55c4233affeeb937586a25dd48c6fcc08dc4dd6fb08769e0498ef229efcde9f59dccd840b16fa34061940859fb9a2acc07cd9196907a56b8"' : 'data-bs-target="#xs-components-links-module-OtpPageModule-200af55048a2b8bc55c4233affeeb937586a25dd48c6fcc08dc4dd6fb08769e0498ef229efcde9f59dccd840b16fa34061940859fb9a2acc07cd9196907a56b8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OtpPageModule-200af55048a2b8bc55c4233affeeb937586a25dd48c6fcc08dc4dd6fb08769e0498ef229efcde9f59dccd840b16fa34061940859fb9a2acc07cd9196907a56b8"' :
                                            'id="xs-components-links-module-OtpPageModule-200af55048a2b8bc55c4233affeeb937586a25dd48c6fcc08dc4dd6fb08769e0498ef229efcde9f59dccd840b16fa34061940859fb9a2acc07cd9196907a56b8"' }>
                                            <li class="link">
                                                <a href="components/OtpPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OtpPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PageFilterOptionsPageModule.html" data-type="entity-link" >PageFilterOptionsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PageFilterOptionsPageModule-996cc8cd5737c6cc1d2f06e2e677b3f01de1accae58f9832d9343d90285fb906f7750830b3ac958a4b7aac15cad60b68e66fca84c52f7587a3c5b4597680332b"' : 'data-bs-target="#xs-components-links-module-PageFilterOptionsPageModule-996cc8cd5737c6cc1d2f06e2e677b3f01de1accae58f9832d9343d90285fb906f7750830b3ac958a4b7aac15cad60b68e66fca84c52f7587a3c5b4597680332b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageFilterOptionsPageModule-996cc8cd5737c6cc1d2f06e2e677b3f01de1accae58f9832d9343d90285fb906f7750830b3ac958a4b7aac15cad60b68e66fca84c52f7587a3c5b4597680332b"' :
                                            'id="xs-components-links-module-PageFilterOptionsPageModule-996cc8cd5737c6cc1d2f06e2e677b3f01de1accae58f9832d9343d90285fb906f7750830b3ac958a4b7aac15cad60b68e66fca84c52f7587a3c5b4597680332b"' }>
                                            <li class="link">
                                                <a href="components/PageFilterOptionsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageFilterOptionsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PageFilterPageModule.html" data-type="entity-link" >PageFilterPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PageFilterPageModule-771830184aaea09ecffbcb3d9332c1c8a109aa8d48419aa83f410b604a9bf11d1a3a67d1ed52ea914683538e01a684ce7bb5890b778a9158ed82f6698025d3dc"' : 'data-bs-target="#xs-components-links-module-PageFilterPageModule-771830184aaea09ecffbcb3d9332c1c8a109aa8d48419aa83f410b604a9bf11d1a3a67d1ed52ea914683538e01a684ce7bb5890b778a9158ed82f6698025d3dc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageFilterPageModule-771830184aaea09ecffbcb3d9332c1c8a109aa8d48419aa83f410b604a9bf11d1a3a67d1ed52ea914683538e01a684ce7bb5890b778a9158ed82f6698025d3dc"' :
                                            'id="xs-components-links-module-PageFilterPageModule-771830184aaea09ecffbcb3d9332c1c8a109aa8d48419aa83f410b604a9bf11d1a3a67d1ed52ea914683538e01a684ce7bb5890b778a9158ed82f6698025d3dc"' }>
                                            <li class="link">
                                                <a href="components/PageFilterPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageFilterPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PersonalDetailsEditPageModule.html" data-type="entity-link" >PersonalDetailsEditPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PersonalDetailsEditPageModule-3c95bcf5ac485fd13c1153d1d6930ae14c158ff8a6a457fd13e675134270ead1a7867175a70980b8463f689d6c4723a76aae1fec799ea18df795301b622617c8"' : 'data-bs-target="#xs-components-links-module-PersonalDetailsEditPageModule-3c95bcf5ac485fd13c1153d1d6930ae14c158ff8a6a457fd13e675134270ead1a7867175a70980b8463f689d6c4723a76aae1fec799ea18df795301b622617c8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PersonalDetailsEditPageModule-3c95bcf5ac485fd13c1153d1d6930ae14c158ff8a6a457fd13e675134270ead1a7867175a70980b8463f689d6c4723a76aae1fec799ea18df795301b622617c8"' :
                                            'id="xs-components-links-module-PersonalDetailsEditPageModule-3c95bcf5ac485fd13c1153d1d6930ae14c158ff8a6a457fd13e675134270ead1a7867175a70980b8463f689d6c4723a76aae1fec799ea18df795301b622617c8"' }>
                                            <li class="link">
                                                <a href="components/PersonalDetailsEditPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PersonalDetailsEditPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PipesModule.html" data-type="entity-link" >PipesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-PipesModule-58001691adfa2ad7febaede6a3a60d6db715692f53fbc11af6e473ae82fd741e5c676becfd2417e6bf243423d9830a190829dd2ecf7a44b3a30654820b581e52"' : 'data-bs-target="#xs-pipes-links-module-PipesModule-58001691adfa2ad7febaede6a3a60d6db715692f53fbc11af6e473ae82fd741e5c676becfd2417e6bf243423d9830a190829dd2ecf7a44b3a30654820b581e52"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-PipesModule-58001691adfa2ad7febaede6a3a60d6db715692f53fbc11af6e473ae82fd741e5c676becfd2417e6bf243423d9830a190829dd2ecf7a44b3a30654820b581e52"' :
                                            'id="xs-pipes-links-module-PipesModule-58001691adfa2ad7febaede6a3a60d6db715692f53fbc11af6e473ae82fd741e5c676becfd2417e6bf243423d9830a190829dd2ecf7a44b3a30654820b581e52"' }>
                                            <li class="link">
                                                <a href="pipes/AliasBoardName.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AliasBoardName</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/CSAPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CSAPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/CategoryKeyTranslator.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryKeyTranslator</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/CategoryPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/DateAgoPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DateAgoPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/FileSizePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FileSizePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/FilterPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ImageContentPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImageContentPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/InitialPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InitialPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/MimeTypePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MimeTypePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/RandomColorMapPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RandomColorMapPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/SortByPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SortByPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ThemeInputsSelectorPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ThemeInputsSelectorPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/TranslateHtmlPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TranslateHtmlPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/TranslateJsonPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TranslateJsonPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PlayerPageModule.html" data-type="entity-link" >PlayerPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PlayerPageModule-34f58ecc834adea1b77b190f77240b9b2a39456211dbbd7b9bf249f672190ac9bcc196fc016ec54eff6848527abfbfe1498e2d7caba262a25fe05ee31f2ec512"' : 'data-bs-target="#xs-components-links-module-PlayerPageModule-34f58ecc834adea1b77b190f77240b9b2a39456211dbbd7b9bf249f672190ac9bcc196fc016ec54eff6848527abfbfe1498e2d7caba262a25fe05ee31f2ec512"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PlayerPageModule-34f58ecc834adea1b77b190f77240b9b2a39456211dbbd7b9bf249f672190ac9bcc196fc016ec54eff6848527abfbfe1498e2d7caba262a25fe05ee31f2ec512"' :
                                            'id="xs-components-links-module-PlayerPageModule-34f58ecc834adea1b77b190f77240b9b2a39456211dbbd7b9bf249f672190ac9bcc196fc016ec54eff6848527abfbfe1498e2d7caba262a25fe05ee31f2ec512"' }>
                                            <li class="link">
                                                <a href="components/PlayerPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlayerPage</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PlayerPageModule-34f58ecc834adea1b77b190f77240b9b2a39456211dbbd7b9bf249f672190ac9bcc196fc016ec54eff6848527abfbfe1498e2d7caba262a25fe05ee31f2ec512"' : 'data-bs-target="#xs-injectables-links-module-PlayerPageModule-34f58ecc834adea1b77b190f77240b9b2a39456211dbbd7b9bf249f672190ac9bcc196fc016ec54eff6848527abfbfe1498e2d7caba262a25fe05ee31f2ec512"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PlayerPageModule-34f58ecc834adea1b77b190f77240b9b2a39456211dbbd7b9bf249f672190ac9bcc196fc016ec54eff6848527abfbfe1498e2d7caba262a25fe05ee31f2ec512"' :
                                        'id="xs-injectables-links-module-PlayerPageModule-34f58ecc834adea1b77b190f77240b9b2a39456211dbbd7b9bf249f672190ac9bcc196fc016ec54eff6848527abfbfe1498e2d7caba262a25fe05ee31f2ec512"' }>
                                        <li class="link">
                                            <a href="injectables/CanvasPlayerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CanvasPlayerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfilePageModule.html" data-type="entity-link" >ProfilePageModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileRoutingModule.html" data-type="entity-link" >ProfileRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileSettingsPageModule.html" data-type="entity-link" >ProfileSettingsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ProfileSettingsPageModule-8a04785feb7619b713696e4d1a5800fcaac10e39e3d8759ebf1487f41f0b95922e8c45658b21efc745f81b33e69231d86ce3af9d64379974acd8e420d0917174"' : 'data-bs-target="#xs-components-links-module-ProfileSettingsPageModule-8a04785feb7619b713696e4d1a5800fcaac10e39e3d8759ebf1487f41f0b95922e8c45658b21efc745f81b33e69231d86ce3af9d64379974acd8e420d0917174"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfileSettingsPageModule-8a04785feb7619b713696e4d1a5800fcaac10e39e3d8759ebf1487f41f0b95922e8c45658b21efc745f81b33e69231d86ce3af9d64379974acd8e420d0917174"' :
                                            'id="xs-components-links-module-ProfileSettingsPageModule-8a04785feb7619b713696e4d1a5800fcaac10e39e3d8759ebf1487f41f0b95922e8c45658b21efc745f81b33e69231d86ce3af9d64379974acd8e420d0917174"' }>
                                            <li class="link">
                                                <a href="components/ProfileSettingsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileSettingsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProgramsModule.html" data-type="entity-link" >ProgramsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ProgramsModule-ef32e6e646dcae81f6be1ce1b672e514352fbb1ebf420f44caa546c763144639a3e168a8c59c242811e4b46f9241d65c5fa15c9817380815b869af8a53a5306a"' : 'data-bs-target="#xs-components-links-module-ProgramsModule-ef32e6e646dcae81f6be1ce1b672e514352fbb1ebf420f44caa546c763144639a3e168a8c59c242811e4b46f9241d65c5fa15c9817380815b869af8a53a5306a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProgramsModule-ef32e6e646dcae81f6be1ce1b672e514352fbb1ebf420f44caa546c763144639a3e168a8c59c242811e4b46f9241d65c5fa15c9817380815b869af8a53a5306a"' :
                                            'id="xs-components-links-module-ProgramsModule-ef32e6e646dcae81f6be1ce1b672e514352fbb1ebf420f44caa546c763144639a3e168a8c59c242811e4b46f9241d65c5fa15c9817380815b869af8a53a5306a"' }>
                                            <li class="link">
                                                <a href="components/ProgramListingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProgramListingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SolutionListingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SolutionListingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProjectModule.html" data-type="entity-link" >ProjectModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ProjectModule-f99387c46129304dd781e7b42ea073701b8bce2ef827b6b4321e2254d54853438d533f3df791fd97ba4d76039f75dad632f581371b63fd4c091b58f0d04f729d"' : 'data-bs-target="#xs-components-links-module-ProjectModule-f99387c46129304dd781e7b42ea073701b8bce2ef827b6b4321e2254d54853438d533f3df791fd97ba4d76039f75dad632f581371b63fd4c091b58f0d04f729d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProjectModule-f99387c46129304dd781e7b42ea073701b8bce2ef827b6b4321e2254d54853438d533f3df791fd97ba4d76039f75dad632f581371b63fd4c091b58f0d04f729d"' :
                                            'id="xs-components-links-module-ProjectModule-f99387c46129304dd781e7b42ea073701b8bce2ef827b6b4321e2254d54853438d533f3df791fd97ba4d76039f75dad632f581371b63fd4c091b58f0d04f729d"' }>
                                            <li class="link">
                                                <a href="components/AddEntityComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddEntityComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddFilePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddFilePage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddProgramsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddProgramsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategorySelectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategorySelectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateProjectPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateProjectPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ItemListHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ItemListHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LearningResourcesPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LearningResourcesPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LinkLearningResourcesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LinkLearningResourcesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProjectDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProjectEditPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectEditPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProjectListingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectListingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProjectOperationPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectOperationPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProjectTemplatePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectTemplatePage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SyncPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SyncPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TaskViewPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskViewPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProjectReportModule.html" data-type="entity-link" >ProjectReportModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ProjectReportModule-d2d4fdf75c3fd4c191ebc465dcc1ef52ecd6aa20425806007a093e15968e8caa3e0a8cc767164c018a01668518cb684f67407d6c2306416810ca6a16e2ece78d"' : 'data-bs-target="#xs-components-links-module-ProjectReportModule-d2d4fdf75c3fd4c191ebc465dcc1ef52ecd6aa20425806007a093e15968e8caa3e0a8cc767164c018a01668518cb684f67407d6c2306416810ca6a16e2ece78d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProjectReportModule-d2d4fdf75c3fd4c191ebc465dcc1ef52ecd6aa20425806007a093e15968e8caa3e0a8cc767164c018a01668518cb684f67407d6c2306416810ca6a16e2ece78d"' :
                                            'id="xs-components-links-module-ProjectReportModule-d2d4fdf75c3fd4c191ebc465dcc1ef52ecd6aa20425806007a093e15968e8caa3e0a8cc767164c018a01668518cb684f67407d6c2306416810ca6a16e2ece78d"' }>
                                            <li class="link">
                                                <a href="components/ProjectReportComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectReportComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProjectTemplateviewPageModule.html" data-type="entity-link" >ProjectTemplateviewPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ProjectTemplateviewPageModule-bf987e4d03e0f20e9a2cf775b466da02c8c03805a85c6c36f19bafb9d082b0b402cbd1467a9f06da0b4e9db18b81a089df8ffb121507b2f651198217294cb30e"' : 'data-bs-target="#xs-components-links-module-ProjectTemplateviewPageModule-bf987e4d03e0f20e9a2cf775b466da02c8c03805a85c6c36f19bafb9d082b0b402cbd1467a9f06da0b4e9db18b81a089df8ffb121507b2f651198217294cb30e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProjectTemplateviewPageModule-bf987e4d03e0f20e9a2cf775b466da02c8c03805a85c6c36f19bafb9d082b0b402cbd1467a9f06da0b4e9db18b81a089df8ffb121507b2f651198217294cb30e"' :
                                            'id="xs-components-links-module-ProjectTemplateviewPageModule-bf987e4d03e0f20e9a2cf775b466da02c8c03805a85c6c36f19bafb9d082b0b402cbd1467a9f06da0b4e9db18b81a089df8ffb121507b2f651198217294cb30e"' }>
                                            <li class="link">
                                                <a href="components/ProjectTemplateviewPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectTemplateviewPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProjectTemplateviewPageRoutingModule.html" data-type="entity-link" >ProjectTemplateviewPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/QrcoderesultPageModule.html" data-type="entity-link" >QrcoderesultPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-QrcoderesultPageModule-3f9b2df0f0ef75684063c6b6e5bf26e84c262fd0383a1dc219e74ffb06ff29a3c6f1fcdbc0b19bc220ba5d7e8e0510fd6543e2468bebeb1f61d950add752fa5a"' : 'data-bs-target="#xs-components-links-module-QrcoderesultPageModule-3f9b2df0f0ef75684063c6b6e5bf26e84c262fd0383a1dc219e74ffb06ff29a3c6f1fcdbc0b19bc220ba5d7e8e0510fd6543e2468bebeb1f61d950add752fa5a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-QrcoderesultPageModule-3f9b2df0f0ef75684063c6b6e5bf26e84c262fd0383a1dc219e74ffb06ff29a3c6f1fcdbc0b19bc220ba5d7e8e0510fd6543e2468bebeb1f61d950add752fa5a"' :
                                            'id="xs-components-links-module-QrcoderesultPageModule-3f9b2df0f0ef75684063c6b6e5bf26e84c262fd0383a1dc219e74ffb06ff29a3c6f1fcdbc0b19bc220ba5d7e8e0510fd6543e2468bebeb1f61d950add752fa5a"' }>
                                            <li class="link">
                                                <a href="components/QrcoderesultPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QrcoderesultPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/QrscannerAlertPageModule.html" data-type="entity-link" >QrscannerAlertPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-QrscannerAlertPageModule-8913cbd5646d322dfaae072b718b11e1db8b742fc4340cd14daa29d491574d2ba919727f9439d6b23ece24bf62280e2e39d758b38e0342ad450ab5e70718b9dd"' : 'data-bs-target="#xs-components-links-module-QrscannerAlertPageModule-8913cbd5646d322dfaae072b718b11e1db8b742fc4340cd14daa29d491574d2ba919727f9439d6b23ece24bf62280e2e39d758b38e0342ad450ab5e70718b9dd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-QrscannerAlertPageModule-8913cbd5646d322dfaae072b718b11e1db8b742fc4340cd14daa29d491574d2ba919727f9439d6b23ece24bf62280e2e39d758b38e0342ad450ab5e70718b9dd"' :
                                            'id="xs-components-links-module-QrscannerAlertPageModule-8913cbd5646d322dfaae072b718b11e1db8b742fc4340cd14daa29d491574d2ba919727f9439d6b23ece24bf62280e2e39d758b38e0342ad450ab5e70718b9dd"' }>
                                            <li class="link">
                                                <a href="components/QRScannerAlert.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QRScannerAlert</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/QuestionnairePageModule.html" data-type="entity-link" >QuestionnairePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-QuestionnairePageModule-fb5229abb1026e30171e3d17afc2deb6a3c715d5ef9763c9443423803eeebf354d6c7072633eddb9f92b8954c7767c7bfd34c95c59a99dc0924b94608dac9b3c"' : 'data-bs-target="#xs-components-links-module-QuestionnairePageModule-fb5229abb1026e30171e3d17afc2deb6a3c715d5ef9763c9443423803eeebf354d6c7072633eddb9f92b8954c7767c7bfd34c95c59a99dc0924b94608dac9b3c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-QuestionnairePageModule-fb5229abb1026e30171e3d17afc2deb6a3c715d5ef9763c9443423803eeebf354d6c7072633eddb9f92b8954c7767c7bfd34c95c59a99dc0924b94608dac9b3c"' :
                                            'id="xs-components-links-module-QuestionnairePageModule-fb5229abb1026e30171e3d17afc2deb6a3c715d5ef9763c9443423803eeebf354d6c7072633eddb9f92b8954c7767c7bfd34c95c59a99dc0924b94608dac9b3c"' }>
                                            <li class="link">
                                                <a href="components/MatrixModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MatrixModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuestionMapModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuestionMapModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuestionnairePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuestionnairePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RelevantContentsPageModule.html" data-type="entity-link" >RelevantContentsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-RelevantContentsPageModule-c2f47b71408e1f6ec08c542f34687316a1c63c63de8c6a0469fa27d729dd7a6fe1694aa8d5a5cd92077134793f9a3fbfb77d6fabab1b946a1ea7e24a2a4971e5"' : 'data-bs-target="#xs-components-links-module-RelevantContentsPageModule-c2f47b71408e1f6ec08c542f34687316a1c63c63de8c6a0469fa27d729dd7a6fe1694aa8d5a5cd92077134793f9a3fbfb77d6fabab1b946a1ea7e24a2a4971e5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RelevantContentsPageModule-c2f47b71408e1f6ec08c542f34687316a1c63c63de8c6a0469fa27d729dd7a6fe1694aa8d5a5cd92077134793f9a3fbfb77d6fabab1b946a1ea7e24a2a4971e5"' :
                                            'id="xs-components-links-module-RelevantContentsPageModule-c2f47b71408e1f6ec08c542f34687316a1c63c63de8c6a0469fa27d729dd7a6fe1694aa8d5a5cd92077134793f9a3fbfb77d6fabab1b946a1ea7e24a2a4971e5"' }>
                                            <li class="link">
                                                <a href="components/RelevantContentsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RelevantContentsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ReportsModule.html" data-type="entity-link" >ReportsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ReportsModule-75536f39e18dc0c75725f0db54f636c272a5f844d9ef32b0d5fd1c4e4de1035b664a0b263839a92f74d2c94ab893fd5f456725677f2c428622b7a6064ae6328b"' : 'data-bs-target="#xs-components-links-module-ReportsModule-75536f39e18dc0c75725f0db54f636c272a5f844d9ef32b0d5fd1c4e4de1035b664a0b263839a92f74d2c94ab893fd5f456725677f2c428622b7a6064ae6328b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ReportsModule-75536f39e18dc0c75725f0db54f636c272a5f844d9ef32b0d5fd1c4e4de1035b664a0b263839a92f74d2c94ab893fd5f456725677f2c428622b7a6064ae6328b"' :
                                            'id="xs-components-links-module-ReportsModule-75536f39e18dc0c75725f0db54f636c272a5f844d9ef32b0d5fd1c4e4de1035b664a0b263839a92f74d2c94ab893fd5f456725677f2c428622b7a6064ae6328b"' }>
                                            <li class="link">
                                                <a href="components/ObservationSolutionEntityListingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ObservationSolutionEntityListingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ObservationSolutionListingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ObservationSolutionListingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReportsListingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReportsListingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResourcesModule.html" data-type="entity-link" >ResourcesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ResourcesModule-7e5b575020ab7d327a48298be4872230a72e75d00c2f5ca788bd466949302c16f3420a7c7695e1d2c390b23e87807e8ba80f73c465f7af607d36965a7cb5dc2c"' : 'data-bs-target="#xs-components-links-module-ResourcesModule-7e5b575020ab7d327a48298be4872230a72e75d00c2f5ca788bd466949302c16f3420a7c7695e1d2c390b23e87807e8ba80f73c465f7af607d36965a7cb5dc2c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ResourcesModule-7e5b575020ab7d327a48298be4872230a72e75d00c2f5ca788bd466949302c16f3420a7c7695e1d2c390b23e87807e8ba80f73c465f7af607d36965a7cb5dc2c"' :
                                            'id="xs-components-links-module-ResourcesModule-7e5b575020ab7d327a48298be4872230a72e75d00c2f5ca788bd466949302c16f3420a7c7695e1d2c390b23e87807e8ba80f73c465f7af607d36965a7cb5dc2c"' }>
                                            <li class="link">
                                                <a href="components/ResourcesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResourcesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResourcesRoutingModule.html" data-type="entity-link" >ResourcesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SearchFilterPageModule.html" data-type="entity-link" >SearchFilterPageModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SearchPageModule.html" data-type="entity-link" >SearchPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SearchPageModule-574fad1b9036dd317bf17caabdc1529cefafbfe96b136706691e156960f7c6fb0a298d6c39034e7a72dac444fe8ce3ff796e6440fed0786b6da90241b5428840"' : 'data-bs-target="#xs-components-links-module-SearchPageModule-574fad1b9036dd317bf17caabdc1529cefafbfe96b136706691e156960f7c6fb0a298d6c39034e7a72dac444fe8ce3ff796e6440fed0786b6da90241b5428840"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SearchPageModule-574fad1b9036dd317bf17caabdc1529cefafbfe96b136706691e156960f7c6fb0a298d6c39034e7a72dac444fe8ce3ff796e6440fed0786b6da90241b5428840"' :
                                            'id="xs-components-links-module-SearchPageModule-574fad1b9036dd317bf17caabdc1529cefafbfe96b136706691e156960f7c6fb0a298d6c39034e7a72dac444fe8ce3ff796e6440fed0786b6da90241b5428840"' }>
                                            <li class="link">
                                                <a href="components/SearchPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SectionListingPageModule.html" data-type="entity-link" >SectionListingPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SectionListingPageModule-d9c28eaa0bf4288d5007a572c13d2e58ae504ee168d735752f3a48526719defc7fd3d7a8791a4ded0a35fedcbe245a235ed9532f1ea43a7c6615866aab5652d0"' : 'data-bs-target="#xs-components-links-module-SectionListingPageModule-d9c28eaa0bf4288d5007a572c13d2e58ae504ee168d735752f3a48526719defc7fd3d7a8791a4ded0a35fedcbe245a235ed9532f1ea43a7c6615866aab5652d0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SectionListingPageModule-d9c28eaa0bf4288d5007a572c13d2e58ae504ee168d735752f3a48526719defc7fd3d7a8791a4ded0a35fedcbe245a235ed9532f1ea43a7c6615866aab5652d0"' :
                                            'id="xs-components-links-module-SectionListingPageModule-d9c28eaa0bf4288d5007a572c13d2e58ae504ee168d735752f3a48526719defc7fd3d7a8791a4ded0a35fedcbe245a235ed9532f1ea43a7c6615866aab5652d0"' }>
                                            <li class="link">
                                                <a href="components/SectionListingPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SectionListingPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SelfDeclaredTeacherEditPageModule.html" data-type="entity-link" >SelfDeclaredTeacherEditPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SelfDeclaredTeacherEditPageModule-7c066dcf7fa2045f9b0314140b3f9cbc075a3089dd45b2e468dba0bf1765cf3dad0277c84e3531db2882f4cd0944b40a82d503febafb62583d6a789f6365fce9"' : 'data-bs-target="#xs-components-links-module-SelfDeclaredTeacherEditPageModule-7c066dcf7fa2045f9b0314140b3f9cbc075a3089dd45b2e468dba0bf1765cf3dad0277c84e3531db2882f4cd0944b40a82d503febafb62583d6a789f6365fce9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SelfDeclaredTeacherEditPageModule-7c066dcf7fa2045f9b0314140b3f9cbc075a3089dd45b2e468dba0bf1765cf3dad0277c84e3531db2882f4cd0944b40a82d503febafb62583d6a789f6365fce9"' :
                                            'id="xs-components-links-module-SelfDeclaredTeacherEditPageModule-7c066dcf7fa2045f9b0314140b3f9cbc075a3089dd45b2e468dba0bf1765cf3dad0277c84e3531db2882f4cd0944b40a82d503febafb62583d6a789f6365fce9"' }>
                                            <li class="link">
                                                <a href="components/SelfDeclaredTeacherEditPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelfDeclaredTeacherEditPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsPageModule.html" data-type="entity-link" >SettingsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SettingsPageModule-10f917d90c771efaf739de0418d30db89f425dc3fdc2e314b24eb449c48f8b41865fc2b535cb56d91b15843660a1fe24a3adb4689464895e14a85d946a93cde5"' : 'data-bs-target="#xs-components-links-module-SettingsPageModule-10f917d90c771efaf739de0418d30db89f425dc3fdc2e314b24eb449c48f8b41865fc2b535cb56d91b15843660a1fe24a3adb4689464895e14a85d946a93cde5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SettingsPageModule-10f917d90c771efaf739de0418d30db89f425dc3fdc2e314b24eb449c48f8b41865fc2b535cb56d91b15843660a1fe24a3adb4689464895e14a85d946a93cde5"' :
                                            'id="xs-components-links-module-SettingsPageModule-10f917d90c771efaf739de0418d30db89f425dc3fdc2e314b24eb449c48f8b41865fc2b535cb56d91b15843660a1fe24a3adb4689464895e14a85d946a93cde5"' }>
                                            <li class="link">
                                                <a href="components/AboutUsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutUsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DataSyncComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataSyncComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PermissionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SettingsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SettingsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SharedModule-c677ed069bb87717503ef609a1dc2ffd0a9a274397934b66fc7ddd5d468cf45db1cb3939766f713f43aaec658c3b19f7b12417284b2d51dd2d66bd93802d1b9f"' : 'data-bs-target="#xs-components-links-module-SharedModule-c677ed069bb87717503ef609a1dc2ffd0a9a274397934b66fc7ddd5d468cf45db1cb3939766f713f43aaec658c3b19f7b12417284b2d51dd2d66bd93802d1b9f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-c677ed069bb87717503ef609a1dc2ffd0a9a274397934b66fc7ddd5d468cf45db1cb3939766f713f43aaec658c3b19f7b12417284b2d51dd2d66bd93802d1b9f"' :
                                            'id="xs-components-links-module-SharedModule-c677ed069bb87717503ef609a1dc2ffd0a9a274397934b66fc7ddd5d468cf45db1cb3939766f713f43aaec658c3b19f7b12417284b2d51dd2d66bd93802d1b9f"' }>
                                            <li class="link">
                                                <a href="components/AccordionListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccordionListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddLinkModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddLinkModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AttachmentCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AttachmentCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AttachmentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AttachmentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AttachmentListsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AttachmentListsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BarChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BarChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CommonHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommonHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateTaskComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateTaskComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateTaskFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateTaskFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DateTypeInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DateTypeInputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DownloadShareComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DownloadShareComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EntitySearchLocalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EntitySearchLocalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EntityfilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EntityfilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ExpansionPanelComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExpansionPanelComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ExpansionTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExpansionTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FilterModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterButtonsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterButtonsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GraphCircleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GraphCircleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HintComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HintComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ImageUploadComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImageUploadComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ItemListCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ItemListCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MatrixChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MatrixChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MatrixTypeInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MatrixTypeInputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MetadataActionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetadataActionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MetadataDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetadataDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MultipleTypeInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MultipleTypeInputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoDataComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NoDataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageQuestionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageQuestionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PercentageColumnChartsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PercentageColumnChartsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PieChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PieChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PopoverComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PopoverComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrivacyPolicyAndTCComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrivacyPolicyAndTCComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProgressBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProgressBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProjectDetailsCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectDetailsCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProjectMetadataCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectMetadataCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProjectTaskListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectTaskListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuestionHeadingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuestionHeadingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RadioTypeInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RadioTypeInputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RemarksComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RemarksComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RemarksModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RemarksModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReportListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReportListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReportModalFilter.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReportModalFilter</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReportsTextComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReportsTextComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ScatterChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScatterChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SliderTypeInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SliderTypeInputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StartImprovementComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StartImprovementComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubmissionActionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubmissionActionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SurveyMsgComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SurveyMsgComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TaskCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TextTypeInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TextTypeInputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewDetailComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SharedModule-c677ed069bb87717503ef609a1dc2ffd0a9a274397934b66fc7ddd5d468cf45db1cb3939766f713f43aaec658c3b19f7b12417284b2d51dd2d66bd93802d1b9f"' : 'data-bs-target="#xs-injectables-links-module-SharedModule-c677ed069bb87717503ef609a1dc2ffd0a9a274397934b66fc7ddd5d468cf45db1cb3939766f713f43aaec658c3b19f7b12417284b2d51dd2d66bd93802d1b9f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SharedModule-c677ed069bb87717503ef609a1dc2ffd0a9a274397934b66fc7ddd5d468cf45db1cb3939766f713f43aaec658c3b19f7b12417284b2d51dd2d66bd93802d1b9f"' :
                                        'id="xs-injectables-links-module-SharedModule-c677ed069bb87717503ef609a1dc2ffd0a9a274397934b66fc7ddd5d468cf45db1cb3939766f713f43aaec658c3b19f7b12417284b2d51dd2d66bd93802d1b9f"' }>
                                        <li class="link">
                                            <a href="injectables/GenericPopUpService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GenericPopUpService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SurveyProviderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SurveyProviderService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-SharedModule-c677ed069bb87717503ef609a1dc2ffd0a9a274397934b66fc7ddd5d468cf45db1cb3939766f713f43aaec658c3b19f7b12417284b2d51dd2d66bd93802d1b9f"' : 'data-bs-target="#xs-pipes-links-module-SharedModule-c677ed069bb87717503ef609a1dc2ffd0a9a274397934b66fc7ddd5d468cf45db1cb3939766f713f43aaec658c3b19f7b12417284b2d51dd2d66bd93802d1b9f"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-c677ed069bb87717503ef609a1dc2ffd0a9a274397934b66fc7ddd5d468cf45db1cb3939766f713f43aaec658c3b19f7b12417284b2d51dd2d66bd93802d1b9f"' :
                                            'id="xs-pipes-links-module-SharedModule-c677ed069bb87717503ef609a1dc2ffd0a9a274397934b66fc7ddd5d468cf45db1cb3939766f713f43aaec658c3b19f7b12417284b2d51dd2d66bd93802d1b9f"' }>
                                            <li class="link">
                                                <a href="pipes/CamelToTitlePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CamelToTitlePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/EntitySearchPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EntitySearchPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/GetLabelsPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GetLabelsPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/SearchPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SignInPageModule.html" data-type="entity-link" >SignInPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SignInPageModule-33e619e98233d43e17941fffa4c56378e19ba5175592f54484863f8edb17adf8c91262b459e9d19e4347e12c1991fdf3c21d740814cd6924bcf6eac50e0c8b6a"' : 'data-bs-target="#xs-components-links-module-SignInPageModule-33e619e98233d43e17941fffa4c56378e19ba5175592f54484863f8edb17adf8c91262b459e9d19e4347e12c1991fdf3c21d740814cd6924bcf6eac50e0c8b6a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SignInPageModule-33e619e98233d43e17941fffa4c56378e19ba5175592f54484863f8edb17adf8c91262b459e9d19e4347e12c1991fdf3c21d740814cd6924bcf6eac50e0c8b6a"' :
                                            'id="xs-components-links-module-SignInPageModule-33e619e98233d43e17941fffa4c56378e19ba5175592f54484863f8edb17adf8c91262b459e9d19e4347e12c1991fdf3c21d740814cd6924bcf6eac50e0c8b6a"' }>
                                            <li class="link">
                                                <a href="components/SignInPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignInPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SignInPageRoutingModule.html" data-type="entity-link" >SignInPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SignupBasicInfoPageModule.html" data-type="entity-link" >SignupBasicInfoPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SignupBasicInfoPageModule-e0a3eac2fd3d558327216350a5b88ca4d371a61ddebc79b87356c20d87a4f97d2fcd38dfe3ab6c39c6be44f4d068afce7d11b74118f67d26a6b63fe90c14ea9e"' : 'data-bs-target="#xs-components-links-module-SignupBasicInfoPageModule-e0a3eac2fd3d558327216350a5b88ca4d371a61ddebc79b87356c20d87a4f97d2fcd38dfe3ab6c39c6be44f4d068afce7d11b74118f67d26a6b63fe90c14ea9e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SignupBasicInfoPageModule-e0a3eac2fd3d558327216350a5b88ca4d371a61ddebc79b87356c20d87a4f97d2fcd38dfe3ab6c39c6be44f4d068afce7d11b74118f67d26a6b63fe90c14ea9e"' :
                                            'id="xs-components-links-module-SignupBasicInfoPageModule-e0a3eac2fd3d558327216350a5b88ca4d371a61ddebc79b87356c20d87a4f97d2fcd38dfe3ab6c39c6be44f4d068afce7d11b74118f67d26a6b63fe90c14ea9e"' }>
                                            <li class="link">
                                                <a href="components/SignupBasicInfoPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignupBasicInfoPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SignupEmailPasswordPageModule.html" data-type="entity-link" >SignupEmailPasswordPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SignupEmailPasswordPageModule-754736c80205212b5de86dfbfefd8b696ab071c78ecfdef775834336991afe6f09fef73eab245bf49e1150263178f841a3c4f1b9cfcf6938cb7f5f3d766156f8"' : 'data-bs-target="#xs-components-links-module-SignupEmailPasswordPageModule-754736c80205212b5de86dfbfefd8b696ab071c78ecfdef775834336991afe6f09fef73eab245bf49e1150263178f841a3c4f1b9cfcf6938cb7f5f3d766156f8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SignupEmailPasswordPageModule-754736c80205212b5de86dfbfefd8b696ab071c78ecfdef775834336991afe6f09fef73eab245bf49e1150263178f841a3c4f1b9cfcf6938cb7f5f3d766156f8"' :
                                            'id="xs-components-links-module-SignupEmailPasswordPageModule-754736c80205212b5de86dfbfefd8b696ab071c78ecfdef775834336991afe6f09fef73eab245bf49e1150263178f841a3c4f1b9cfcf6938cb7f5f3d766156f8"' }>
                                            <li class="link">
                                                <a href="components/SignupEmailPasswordPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignupEmailPasswordPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StorageSettingsPageModule.html" data-type="entity-link" >StorageSettingsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-StorageSettingsPageModule-f2aafa0dbff58f61b2cc460a8242c7f3c503d6cdbf8f1ed7d0e8211335e1aaa2eed290dd56e4634c720532919e9d67608a7d420d905bf83becf00c80bdb4e772"' : 'data-bs-target="#xs-components-links-module-StorageSettingsPageModule-f2aafa0dbff58f61b2cc460a8242c7f3c503d6cdbf8f1ed7d0e8211335e1aaa2eed290dd56e4634c720532919e9d67608a7d420d905bf83becf00c80bdb4e772"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StorageSettingsPageModule-f2aafa0dbff58f61b2cc460a8242c7f3c503d6cdbf8f1ed7d0e8211335e1aaa2eed290dd56e4634c720532919e9d67608a7d420d905bf83becf00c80bdb4e772"' :
                                            'id="xs-components-links-module-StorageSettingsPageModule-f2aafa0dbff58f61b2cc460a8242c7f3c503d6cdbf8f1ed7d0e8211335e1aaa2eed290dd56e4634c720532919e9d67608a7d420d905bf83becf00c80bdb4e772"' }>
                                            <li class="link">
                                                <a href="components/StorageSettingsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StorageSettingsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SubmissionPreviewModule.html" data-type="entity-link" >SubmissionPreviewModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SubmissionPreviewModule-1b8b1d593428109c7849a03ea34e4c267d6f581dae9b682d31d96958774a49ece0b53b73b0080bb2a2ee8eb168cbd7cf1c3d49682ef2f468baf91e2768cf1d50"' : 'data-bs-target="#xs-components-links-module-SubmissionPreviewModule-1b8b1d593428109c7849a03ea34e4c267d6f581dae9b682d31d96958774a49ece0b53b73b0080bb2a2ee8eb168cbd7cf1c3d49682ef2f468baf91e2768cf1d50"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SubmissionPreviewModule-1b8b1d593428109c7849a03ea34e4c267d6f581dae9b682d31d96958774a49ece0b53b73b0080bb2a2ee8eb168cbd7cf1c3d49682ef2f468baf91e2768cf1d50"' :
                                            'id="xs-components-links-module-SubmissionPreviewModule-1b8b1d593428109c7849a03ea34e4c267d6f581dae9b682d31d96958774a49ece0b53b73b0080bb2a2ee8eb168cbd7cf1c3d49682ef2f468baf91e2768cf1d50"' }>
                                            <li class="link">
                                                <a href="components/SubmissionPreviewPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubmissionPreviewPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SubProfileEditPageModule.html" data-type="entity-link" >SubProfileEditPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SubProfileEditPageModule-c738a5643e16da035710cab2d68d3b6e38257c9562ca4b3cf712fa8a92296464e4179da82cfeb450ddbf5f5688aa6d5aaa683f7e5e38d5cdb9709b3611ad69f1"' : 'data-bs-target="#xs-components-links-module-SubProfileEditPageModule-c738a5643e16da035710cab2d68d3b6e38257c9562ca4b3cf712fa8a92296464e4179da82cfeb450ddbf5f5688aa6d5aaa683f7e5e38d5cdb9709b3611ad69f1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SubProfileEditPageModule-c738a5643e16da035710cab2d68d3b6e38257c9562ca4b3cf712fa8a92296464e4179da82cfeb450ddbf5f5688aa6d5aaa683f7e5e38d5cdb9709b3611ad69f1"' :
                                            'id="xs-components-links-module-SubProfileEditPageModule-c738a5643e16da035710cab2d68d3b6e38257c9562ca4b3cf712fa8a92296464e4179da82cfeb450ddbf5f5688aa6d5aaa683f7e5e38d5cdb9709b3611ad69f1"' }>
                                            <li class="link">
                                                <a href="components/SubProfileEditPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubProfileEditPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SurveyModule.html" data-type="entity-link" >SurveyModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SurveyModule-c831a29d3b7b3769baa314528064b35bc02abaef51552910bed35d6e6ff1ea7f920589718b26a4c0c869b3751b867c2437029ed72ae32fa816cada49a10376aa"' : 'data-bs-target="#xs-components-links-module-SurveyModule-c831a29d3b7b3769baa314528064b35bc02abaef51552910bed35d6e6ff1ea7f920589718b26a4c0c869b3751b867c2437029ed72ae32fa816cada49a10376aa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SurveyModule-c831a29d3b7b3769baa314528064b35bc02abaef51552910bed35d6e6ff1ea7f920589718b26a4c0c869b3751b867c2437029ed72ae32fa816cada49a10376aa"' :
                                            'id="xs-components-links-module-SurveyModule-c831a29d3b7b3769baa314528064b35bc02abaef51552910bed35d6e6ff1ea7f920589718b26a4c0c869b3751b867c2437029ed72ae32fa816cada49a10376aa"' }>
                                            <li class="link">
                                                <a href="components/SurveyHomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SurveyHomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageModule.html" data-type="entity-link" >TabsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-TabsPageModule-b6ef970d4044830c9d6cd8421f1ea4a0abba13e3ac4a96e92da89af599d46c29f52d8fc3d10bfe91df851210edfb45862480361808d9e8007fd27d5554f22621"' : 'data-bs-target="#xs-components-links-module-TabsPageModule-b6ef970d4044830c9d6cd8421f1ea4a0abba13e3ac4a96e92da89af599d46c29f52d8fc3d10bfe91df851210edfb45862480361808d9e8007fd27d5554f22621"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TabsPageModule-b6ef970d4044830c9d6cd8421f1ea4a0abba13e3ac4a96e92da89af599d46c29f52d8fc3d10bfe91df851210edfb45862480361808d9e8007fd27d5554f22621"' :
                                            'id="xs-components-links-module-TabsPageModule-b6ef970d4044830c9d6cd8421f1ea4a0abba13e3ac4a96e92da89af599d46c29f52d8fc3d10bfe91df851210edfb45862480361808d9e8007fd27d5554f22621"' }>
                                            <li class="link">
                                                <a href="components/TabsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TabsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TermsAndConditionsPageModule.html" data-type="entity-link" >TermsAndConditionsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-TermsAndConditionsPageModule-762c842c0236d74c08fb582bb93683181d51c2d750691c2cebd8dd65561ea52c34dc879ed2eaea7b22a9dca0fcc599afb70fbff8c5748514ef39bd00cf1c62a3"' : 'data-bs-target="#xs-components-links-module-TermsAndConditionsPageModule-762c842c0236d74c08fb582bb93683181d51c2d750691c2cebd8dd65561ea52c34dc879ed2eaea7b22a9dca0fcc599afb70fbff8c5748514ef39bd00cf1c62a3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TermsAndConditionsPageModule-762c842c0236d74c08fb582bb93683181d51c2d750691c2cebd8dd65561ea52c34dc879ed2eaea7b22a9dca0fcc599afb70fbff8c5748514ef39bd00cf1c62a3"' :
                                            'id="xs-components-links-module-TermsAndConditionsPageModule-762c842c0236d74c08fb582bb93683181d51c2d750691c2cebd8dd65561ea52c34dc879ed2eaea7b22a9dca0fcc599afb70fbff8c5748514ef39bd00cf1c62a3"' }>
                                            <li class="link">
                                                <a href="components/TermsAndConditionsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TermsAndConditionsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TextbookViewMorePageModule.html" data-type="entity-link" >TextbookViewMorePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-TextbookViewMorePageModule-2eab8943d79be60457fe70945363ed9816ccf589b8317b372f988033d70f62f09873f452bcc2e1a04600ed7095446030414e6ef72846782cc783118b11416e7e"' : 'data-bs-target="#xs-components-links-module-TextbookViewMorePageModule-2eab8943d79be60457fe70945363ed9816ccf589b8317b372f988033d70f62f09873f452bcc2e1a04600ed7095446030414e6ef72846782cc783118b11416e7e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TextbookViewMorePageModule-2eab8943d79be60457fe70945363ed9816ccf589b8317b372f988033d70f62f09873f452bcc2e1a04600ed7095446030414e6ef72846782cc783118b11416e7e"' :
                                            'id="xs-components-links-module-TextbookViewMorePageModule-2eab8943d79be60457fe70945363ed9816ccf589b8317b372f988033d70f62f09873f452bcc2e1a04600ed7095446030414e6ef72846782cc783118b11416e7e"' }>
                                            <li class="link">
                                                <a href="components/TextbookViewMorePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TextbookViewMorePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserTypeSelectionPageModule.html" data-type="entity-link" >UserTypeSelectionPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-UserTypeSelectionPageModule-27e8e19a660c8740028cbbf6245362bff624a8f8ba23139dad8ab7775d40b1d70b9e95d0f550cbfd6c65e18f1e4f3fc7cec82d9108fbe82eb3c0a1ecc69ca1f6"' : 'data-bs-target="#xs-components-links-module-UserTypeSelectionPageModule-27e8e19a660c8740028cbbf6245362bff624a8f8ba23139dad8ab7775d40b1d70b9e95d0f550cbfd6c65e18f1e4f3fc7cec82d9108fbe82eb3c0a1ecc69ca1f6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserTypeSelectionPageModule-27e8e19a660c8740028cbbf6245362bff624a8f8ba23139dad8ab7775d40b1d70b9e95d0f550cbfd6c65e18f1e4f3fc7cec82d9108fbe82eb3c0a1ecc69ca1f6"' :
                                            'id="xs-components-links-module-UserTypeSelectionPageModule-27e8e19a660c8740028cbbf6245362bff624a8f8ba23139dad8ab7775d40b1d70b9e95d0f550cbfd6c65e18f1e4f3fc7cec82d9108fbe82eb3c0a1ecc69ca1f6"' }>
                                            <li class="link">
                                                <a href="components/UserTypeSelectionPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserTypeSelectionPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ViewMoreActivityModule.html" data-type="entity-link" >ViewMoreActivityModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ViewMoreActivityModule-d8f0a3b4ac1176cb41c5d510f5870289ebc5c70b8cde00b8acad75df39fc562ed1462bd26e0f4ca982fee4b178cf732bbbce6557f3155f3984a0301afc69f8fb"' : 'data-bs-target="#xs-components-links-module-ViewMoreActivityModule-d8f0a3b4ac1176cb41c5d510f5870289ebc5c70b8cde00b8acad75df39fc562ed1462bd26e0f4ca982fee4b178cf732bbbce6557f3155f3984a0301afc69f8fb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ViewMoreActivityModule-d8f0a3b4ac1176cb41c5d510f5870289ebc5c70b8cde00b8acad75df39fc562ed1462bd26e0f4ca982fee4b178cf732bbbce6557f3155f3984a0301afc69f8fb"' :
                                            'id="xs-components-links-module-ViewMoreActivityModule-d8f0a3b4ac1176cb41c5d510f5870289ebc5c70b8cde00b8acad75df39fc562ed1462bd26e0f4ca982fee4b178cf732bbbce6557f3155f3984a0301afc69f8fb"' }>
                                            <li class="link">
                                                <a href="components/ViewMoreActivityComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewMoreActivityComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AccordionListComponent.html" data-type="entity-link" >AccordionListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AddLinkModalComponent.html" data-type="entity-link" >AddLinkModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AttachmentCardComponent.html" data-type="entity-link" >AttachmentCardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AttachmentListsComponent.html" data-type="entity-link" >AttachmentListsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CommonHeaderComponent.html" data-type="entity-link" >CommonHeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CreateTaskFormComponent.html" data-type="entity-link" >CreateTaskFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DateTypeInputComponent.html" data-type="entity-link" >DateTypeInputComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EntityfilterComponent.html" data-type="entity-link" >EntityfilterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EntitySearchLocalComponent.html" data-type="entity-link" >EntitySearchLocalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FooterButtonsComponent.html" data-type="entity-link" >FooterButtonsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ImageUploadComponent.html" data-type="entity-link" >ImageUploadComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ItemListCardComponent.html" data-type="entity-link" >ItemListCardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LicenseCardComponentComponent.html" data-type="entity-link" >LicenseCardComponentComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MatrixTypeInputComponent.html" data-type="entity-link" >MatrixTypeInputComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MetadataActionsComponent.html" data-type="entity-link" >MetadataActionsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MetadataDetailsComponent.html" data-type="entity-link" >MetadataDetailsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MultipleTypeInputComponent.html" data-type="entity-link" >MultipleTypeInputComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NoDataComponent.html" data-type="entity-link" >NoDataComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PageQuestionsComponent.html" data-type="entity-link" >PageQuestionsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PopoverComponent.html" data-type="entity-link" >PopoverComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PrivacyPolicyAndTCComponent.html" data-type="entity-link" >PrivacyPolicyAndTCComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProfilePage.html" data-type="entity-link" >ProfilePage</a>
                            </li>
                            <li class="link">
                                <a href="components/ProgressBarComponent.html" data-type="entity-link" >ProgressBarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProjectDetailsCardComponent.html" data-type="entity-link" >ProjectDetailsCardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProjectMetadataCardComponent.html" data-type="entity-link" >ProjectMetadataCardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProjectTaskListComponent.html" data-type="entity-link" >ProjectTaskListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/QuestionHeadingComponent.html" data-type="entity-link" >QuestionHeadingComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RadioTypeInputComponent.html" data-type="entity-link" >RadioTypeInputComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RemarksComponent.html" data-type="entity-link" >RemarksComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ReportListComponent.html" data-type="entity-link" >ReportListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SbProgressLoaderPage.html" data-type="entity-link" >SbProgressLoaderPage</a>
                            </li>
                            <li class="link">
                                <a href="components/SearchFilterPage.html" data-type="entity-link" >SearchFilterPage</a>
                            </li>
                            <li class="link">
                                <a href="components/ShowVendorAppsComponent.html" data-type="entity-link" >ShowVendorAppsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SliderTypeInputComponent.html" data-type="entity-link" >SliderTypeInputComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/StartImprovementComponent.html" data-type="entity-link" >StartImprovementComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TaskCardComponent.html" data-type="entity-link" >TaskCardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TextTypeInputComponent.html" data-type="entity-link" >TextTypeInputComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ActionType.html" data-type="entity-link" >ActionType</a>
                            </li>
                            <li class="link">
                                <a href="classes/ActivePageService.html" data-type="entity-link" >ActivePageService</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppMode.html" data-type="entity-link" >AppMode</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppThemes.html" data-type="entity-link" >AppThemes</a>
                            </li>
                            <li class="link">
                                <a href="classes/AssessmentConstant.html" data-type="entity-link" >AssessmentConstant</a>
                            </li>
                            <li class="link">
                                <a href="classes/AudienceFilter.html" data-type="entity-link" >AudienceFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/BatchConstants.html" data-type="entity-link" >BatchConstants</a>
                            </li>
                            <li class="link">
                                <a href="classes/CommandFunctions.html" data-type="entity-link" >CommandFunctions</a>
                            </li>
                            <li class="link">
                                <a href="classes/ContentCard.html" data-type="entity-link" >ContentCard</a>
                            </li>
                            <li class="link">
                                <a href="classes/ContentConstants.html" data-type="entity-link" >ContentConstants</a>
                            </li>
                            <li class="link">
                                <a href="classes/ContentFilterConfig.html" data-type="entity-link" >ContentFilterConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/ContentUtil.html" data-type="entity-link" >ContentUtil</a>
                            </li>
                            <li class="link">
                                <a href="classes/CrashAnalyticsErrorLogger.html" data-type="entity-link" >CrashAnalyticsErrorLogger</a>
                            </li>
                            <li class="link">
                                <a href="classes/EventTopics.html" data-type="entity-link" >EventTopics</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExploreConstants.html" data-type="entity-link" >ExploreConstants</a>
                            </li>
                            <li class="link">
                                <a href="classes/FormConfigCategories.html" data-type="entity-link" >FormConfigCategories</a>
                            </li>
                            <li class="link">
                                <a href="classes/FormConfigSubcategories.html" data-type="entity-link" >FormConfigSubcategories</a>
                            </li>
                            <li class="link">
                                <a href="classes/FormConstant.html" data-type="entity-link" >FormConstant</a>
                            </li>
                            <li class="link">
                                <a href="classes/FormConstants.html" data-type="entity-link" >FormConstants</a>
                            </li>
                            <li class="link">
                                <a href="classes/FrameworkCategory.html" data-type="entity-link" >FrameworkCategory</a>
                            </li>
                            <li class="link">
                                <a href="classes/GenericAppConfig.html" data-type="entity-link" >GenericAppConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/GroupErrorCodes.html" data-type="entity-link" >GroupErrorCodes</a>
                            </li>
                            <li class="link">
                                <a href="classes/IgnoreTelemetryPatters.html" data-type="entity-link" >IgnoreTelemetryPatters</a>
                            </li>
                            <li class="link">
                                <a href="classes/LaunchType.html" data-type="entity-link" >LaunchType</a>
                            </li>
                            <li class="link">
                                <a href="classes/Location.html" data-type="entity-link" >Location</a>
                            </li>
                            <li class="link">
                                <a href="classes/LocationConfig.html" data-type="entity-link" >LocationConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/Map.html" data-type="entity-link" >Map</a>
                            </li>
                            <li class="link">
                                <a href="classes/MenuOverflow.html" data-type="entity-link" >MenuOverflow</a>
                            </li>
                            <li class="link">
                                <a href="classes/MimeType.html" data-type="entity-link" >MimeType</a>
                            </li>
                            <li class="link">
                                <a href="classes/ObjectUtil.html" data-type="entity-link" >ObjectUtil</a>
                            </li>
                            <li class="link">
                                <a href="classes/ObjectUtil-1.html" data-type="entity-link" >ObjectUtil</a>
                            </li>
                            <li class="link">
                                <a href="classes/OnboardingScreenType.html" data-type="entity-link" >OnboardingScreenType</a>
                            </li>
                            <li class="link">
                                <a href="classes/OTPTemplates.html" data-type="entity-link" >OTPTemplates</a>
                            </li>
                            <li class="link">
                                <a href="classes/PageName.html" data-type="entity-link" >PageName</a>
                            </li>
                            <li class="link">
                                <a href="classes/PreferenceKey.html" data-type="entity-link" >PreferenceKey</a>
                            </li>
                            <li class="link">
                                <a href="classes/PrimaryCategory.html" data-type="entity-link" >PrimaryCategory</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProfileConstants.html" data-type="entity-link" >ProfileConstants</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProgressPopupContext.html" data-type="entity-link" >ProgressPopupContext</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegexPatterns.html" data-type="entity-link" >RegexPatterns</a>
                            </li>
                            <li class="link">
                                <a href="classes/RouterLinks.html" data-type="entity-link" >RouterLinks</a>
                            </li>
                            <li class="link">
                                <a href="classes/Search.html" data-type="entity-link" >Search</a>
                            </li>
                            <li class="link">
                                <a href="classes/ShareItemType.html" data-type="entity-link" >ShareItemType</a>
                            </li>
                            <li class="link">
                                <a href="classes/ShareMode.html" data-type="entity-link" >ShareMode</a>
                            </li>
                            <li class="link">
                                <a href="classes/ShareUrl.html" data-type="entity-link" >ShareUrl</a>
                            </li>
                            <li class="link">
                                <a href="classes/StatusBarTheme.html" data-type="entity-link" >StatusBarTheme</a>
                            </li>
                            <li class="link">
                                <a href="classes/StoreRating.html" data-type="entity-link" >StoreRating</a>
                            </li>
                            <li class="link">
                                <a href="classes/SystemSettingsIds.html" data-type="entity-link" >SystemSettingsIds</a>
                            </li>
                            <li class="link">
                                <a href="classes/TagPrefixConstants.html" data-type="entity-link" >TagPrefixConstants</a>
                            </li>
                            <li class="link">
                                <a href="classes/ValueComparator.html" data-type="entity-link" >ValueComparator</a>
                            </li>
                            <li class="link">
                                <a href="classes/ViewMore.html" data-type="entity-link" >ViewMore</a>
                            </li>
                            <li class="link">
                                <a href="classes/XwalkConstants.html" data-type="entity-link" >XwalkConstants</a>
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
                                    <a href="injectables/AndroidPermissionsService.html" data-type="entity-link" >AndroidPermissionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ApiService.html" data-type="entity-link" >ApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ApiUtilsService.html" data-type="entity-link" >ApiUtilsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppGlobalService.html" data-type="entity-link" >AppGlobalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppHeaderService.html" data-type="entity-link" >AppHeaderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppRatingService.html" data-type="entity-link" >AppRatingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AttachmentService.html" data-type="entity-link" >AttachmentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CanvasPlayerService.html" data-type="entity-link" >CanvasPlayerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoriesEditService.html" data-type="entity-link" >CategoriesEditService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChildContentHandler.html" data-type="entity-link" >ChildContentHandler</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CollectionService.html" data-type="entity-link" >CollectionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ComingSoonMessageService.html" data-type="entity-link" >ComingSoonMessageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CommonUtilService.html" data-type="entity-link" >CommonUtilService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConsentService.html" data-type="entity-link" >ConsentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContainerService.html" data-type="entity-link" >ContainerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContentAggregatorHandler.html" data-type="entity-link" >ContentAggregatorHandler</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContentDeleteHandler.html" data-type="entity-link" >ContentDeleteHandler</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContentPlayerHandler.html" data-type="entity-link" >ContentPlayerHandler</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContentShareHandlerService.html" data-type="entity-link" >ContentShareHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CourseUtilService.html" data-type="entity-link" >CourseUtilService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DbService.html" data-type="entity-link" >DbService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DiscussionTelemetryService.html" data-type="entity-link" >DiscussionTelemetryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DownloadPdfService.html" data-type="entity-link" >DownloadPdfService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Events.html" data-type="entity-link" >Events</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExternalIdVerificationService.html" data-type="entity-link" >ExternalIdVerificationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FilterFormConfigMapper.html" data-type="entity-link" >FilterFormConfigMapper</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FormAndFrameworkUtilService.html" data-type="entity-link" >FormAndFrameworkUtilService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FormLocationFactory.html" data-type="entity-link" >FormLocationFactory</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FormValidationAsyncFactory.html" data-type="entity-link" >FormValidationAsyncFactory</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FrameworkCommonFormConfigBuilder.html" data-type="entity-link" >FrameworkCommonFormConfigBuilder</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FrameworkDetailsService.html" data-type="entity-link" >FrameworkDetailsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GroupHandlerService.html" data-type="entity-link" >GroupHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/KendraApiService.html" data-type="entity-link" >KendraApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoaderService.html" data-type="entity-link" >LoaderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalCourseService.html" data-type="entity-link" >LocalCourseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStorageService.html" data-type="entity-link" >LocalStorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocationHandler.html" data-type="entity-link" >LocationHandler</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginHandlerService.html" data-type="entity-link" >LoginHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginNavigationHandlerService.html" data-type="entity-link" >LoginNavigationHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LogoutHandlerService.html" data-type="entity-link" >LogoutHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ManageLearnCertificateService.html" data-type="entity-link" >ManageLearnCertificateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NavigationService.html" data-type="entity-link" >NavigationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NetworkAvailabilityToastService.html" data-type="entity-link" >NetworkAvailabilityToastService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NetworkService.html" data-type="entity-link" >NetworkService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotificationService.html" data-type="entity-link" >NotificationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ObservationService.html" data-type="entity-link" >ObservationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OnboardingConfigurationService.html" data-type="entity-link" >OnboardingConfigurationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrintPdfService.html" data-type="entity-link" >PrintPdfService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProfileHandler.html" data-type="entity-link" >ProfileHandler</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProfileSwitchHandler.html" data-type="entity-link" >ProfileSwitchHandler</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProjectService.html" data-type="entity-link" >ProjectService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QRScannerResultHandler.html" data-type="entity-link" >QRScannerResultHandler</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QumlPlayerService.html" data-type="entity-link" >QumlPlayerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RatingHandler.html" data-type="entity-link" >RatingHandler</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SbProgressLoader.html" data-type="entity-link" >SbProgressLoader</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ScrollToService.html" data-type="entity-link" >ScrollToService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SearchFilterService.html" data-type="entity-link" >SearchFilterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SegmentationTagService.html" data-type="entity-link" >SegmentationTagService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SplaschreenDeeplinkActionHandlerDelegate.html" data-type="entity-link" >SplaschreenDeeplinkActionHandlerDelegate</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SplashcreenTelemetryActionHandlerDelegate.html" data-type="entity-link" >SplashcreenTelemetryActionHandlerDelegate</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SplashscreenImportActionHandlerDelegate.html" data-type="entity-link" >SplashscreenImportActionHandlerDelegate</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SplashScreenService.html" data-type="entity-link" >SplashScreenService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StoragePermissionHandlerService.html" data-type="entity-link" >StoragePermissionHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SunbirdQRScanner.html" data-type="entity-link" >SunbirdQRScanner</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SunbirdService.html" data-type="entity-link" >SunbirdService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SyncService.html" data-type="entity-link" >SyncService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TelemetryGeneratorService.html" data-type="entity-link" >TelemetryGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TncUpdateHandlerService.html" data-type="entity-link" >TncUpdateHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ToastService.html" data-type="entity-link" >ToastService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UnnatiDataService.html" data-type="entity-link" >UnnatiDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UpdateProfileService.html" data-type="entity-link" >UpdateProfileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UtilityService.html" data-type="entity-link" >UtilityService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UtilsService.html" data-type="entity-link" >UtilsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/DeactivateGuard.html" data-type="entity-link" >DeactivateGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/HasNotBeenOnboardedGuard.html" data-type="entity-link" >HasNotBeenOnboardedGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/HasNotSelectedFrameworkGuard.html" data-type="entity-link" >HasNotSelectedFrameworkGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/HasNotSelectedLanguageGuard.html" data-type="entity-link" >HasNotSelectedLanguageGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/HasNotSelectedUserTypeGuard.html" data-type="entity-link" >HasNotSelectedUserTypeGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/IsGuestUserGuard.html" data-type="entity-link" >IsGuestUserGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/MlGuard.html" data-type="entity-link" >MlGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/UserTypeGuard.html" data-type="entity-link" >UserTypeGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/UserTypeSpecificTabGuard.html" data-type="entity-link" >UserTypeSpecificTabGuard</a>
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
                                <a href="interfaces/ActiveDownloadsInterface.html" data-type="entity-link" >ActiveDownloadsInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ActivityData.html" data-type="entity-link" >ActivityData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AddActivityToGroup.html" data-type="entity-link" >AddActivityToGroup</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AndroidPermissionsStatus.html" data-type="entity-link" >AndroidPermissionsStatus</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AppStorageInfo.html" data-type="entity-link" >AppStorageInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConsentPopoverActionsDelegate.html" data-type="entity-link" >ConsentPopoverActionsDelegate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ContentInfo.html" data-type="entity-link" >ContentInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Context.html" data-type="entity-link" >Context</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DownloadManagerPageInterface.html" data-type="entity-link" >DownloadManagerPageInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmitedContents.html" data-type="entity-link" >EmitedContents</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EnrollCourse.html" data-type="entity-link" >EnrollCourse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EventParams.html" data-type="entity-link" >EventParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FieldConfig.html" data-type="entity-link" >FieldConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FieldConfigOption.html" data-type="entity-link" >FieldConfigOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FieldConfigOptionAssociations.html" data-type="entity-link" >FieldConfigOptionAssociations</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FilterFormConfigWithDefaults.html" data-type="entity-link" >FilterFormConfigWithDefaults</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FrameworkSelectionActionsDelegate.html" data-type="entity-link" >FrameworkSelectionActionsDelegate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GroupData.html" data-type="entity-link" >GroupData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HierarchyInfo.html" data-type="entity-link" >HierarchyInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICON.html" data-type="entity-link" >ICON</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILanguages.html" data-type="entity-link" >ILanguages</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/isDeactivatable.html" data-type="entity-link" >isDeactivatable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/KebabMenuOption.html" data-type="entity-link" >KebabMenuOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MaxAttempt.html" data-type="entity-link" >MaxAttempt</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NetworkInfo.html" data-type="entity-link" >NetworkInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OnBoardingConfig.html" data-type="entity-link" >OnBoardingConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OnTabViewWillEnter.html" data-type="entity-link" >OnTabViewWillEnter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PageFilterCallback.html" data-type="entity-link" >PageFilterCallback</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PermissionAsked.html" data-type="entity-link" >PermissionAsked</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PersonaConfig.html" data-type="entity-link" >PersonaConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PlayerActionHandlerDelegate.html" data-type="entity-link" >PlayerActionHandlerDelegate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QRAlertCallBack.html" data-type="entity-link" >QRAlertCallBack</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QRResultCallback.html" data-type="entity-link" >QRResultCallback</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RequestParams.html" data-type="entity-link" >RequestParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SearchFilterConfig.html" data-type="entity-link" >SearchFilterConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SplashscreenActionHandlerDelegate.html" data-type="entity-link" >SplashscreenActionHandlerDelegate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StorageSettingsInterface.html" data-type="entity-link" >StorageSettingsInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TabConfig.html" data-type="entity-link" >TabConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TabOptions.html" data-type="entity-link" >TabOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TelemetryActionPayload.html" data-type="entity-link" >TelemetryActionPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Theme.html" data-type="entity-link" >Theme</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Theme-1.html" data-type="entity-link" >Theme</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ViewMoreActivityActionsDelegate.html" data-type="entity-link" >ViewMoreActivityActionsDelegate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ViewText.html" data-type="entity-link" >ViewText</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Window.html" data-type="entity-link" >Window</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#pipes-links"' :
                                'data-bs-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/DateAgoPipe.html" data-type="entity-link" >DateAgoPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/InitialPipe.html" data-type="entity-link" >InitialPipe</a>
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
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
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