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
                    <a href="index.html" data-type="index-link">extension-worker documentation</a>
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
                                <a href="modules/Admin.html" data-type="entity-link" >Admin</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-Admin-fc5caff70dd57843d549786db034db7976bb783a37e2dd8c26d3cc02f61b1bcd9dedf8e03b80700b9d9aafce8b728aa332fc59ac52563347200047cc78d8787c"' : 'data-bs-target="#xs-controllers-links-module-Admin-fc5caff70dd57843d549786db034db7976bb783a37e2dd8c26d3cc02f61b1bcd9dedf8e03b80700b9d9aafce8b728aa332fc59ac52563347200047cc78d8787c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-Admin-fc5caff70dd57843d549786db034db7976bb783a37e2dd8c26d3cc02f61b1bcd9dedf8e03b80700b9d9aafce8b728aa332fc59ac52563347200047cc78d8787c"' :
                                            'id="xs-controllers-links-module-Admin-fc5caff70dd57843d549786db034db7976bb783a37e2dd8c26d3cc02f61b1bcd9dedf8e03b80700b9d9aafce8b728aa332fc59ac52563347200047cc78d8787c"' }>
                                            <li class="link">
                                                <a href="controllers/AdminController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-Admin-fc5caff70dd57843d549786db034db7976bb783a37e2dd8c26d3cc02f61b1bcd9dedf8e03b80700b9d9aafce8b728aa332fc59ac52563347200047cc78d8787c"' : 'data-bs-target="#xs-injectables-links-module-Admin-fc5caff70dd57843d549786db034db7976bb783a37e2dd8c26d3cc02f61b1bcd9dedf8e03b80700b9d9aafce8b728aa332fc59ac52563347200047cc78d8787c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-Admin-fc5caff70dd57843d549786db034db7976bb783a37e2dd8c26d3cc02f61b1bcd9dedf8e03b80700b9d9aafce8b728aa332fc59ac52563347200047cc78d8787c"' :
                                        'id="xs-injectables-links-module-Admin-fc5caff70dd57843d549786db034db7976bb783a37e2dd8c26d3cc02f61b1bcd9dedf8e03b80700b9d9aafce8b728aa332fc59ac52563347200047cc78d8787c"' }>
                                        <li class="link">
                                            <a href="injectables/AdminService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DbService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DbService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AdminModule-634ded7394b830ed4059f94d8be8d7eaf328de3408fc178eb98111aeeeb07f828db9796df794e490d5badcdb59a61419ade40fceb46332356cd393137b40d86a"' : 'data-bs-target="#xs-controllers-links-module-AdminModule-634ded7394b830ed4059f94d8be8d7eaf328de3408fc178eb98111aeeeb07f828db9796df794e490d5badcdb59a61419ade40fceb46332356cd393137b40d86a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AdminModule-634ded7394b830ed4059f94d8be8d7eaf328de3408fc178eb98111aeeeb07f828db9796df794e490d5badcdb59a61419ade40fceb46332356cd393137b40d86a"' :
                                            'id="xs-controllers-links-module-AdminModule-634ded7394b830ed4059f94d8be8d7eaf328de3408fc178eb98111aeeeb07f828db9796df794e490d5badcdb59a61419ade40fceb46332356cd393137b40d86a"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AdminModule-634ded7394b830ed4059f94d8be8d7eaf328de3408fc178eb98111aeeeb07f828db9796df794e490d5badcdb59a61419ade40fceb46332356cd393137b40d86a"' : 'data-bs-target="#xs-injectables-links-module-AdminModule-634ded7394b830ed4059f94d8be8d7eaf328de3408fc178eb98111aeeeb07f828db9796df794e490d5badcdb59a61419ade40fceb46332356cd393137b40d86a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AdminModule-634ded7394b830ed4059f94d8be8d7eaf328de3408fc178eb98111aeeeb07f828db9796df794e490d5badcdb59a61419ade40fceb46332356cd393137b40d86a"' :
                                        'id="xs-injectables-links-module-AdminModule-634ded7394b830ed4059f94d8be8d7eaf328de3408fc178eb98111aeeeb07f828db9796df794e490d5badcdb59a61419ade40fceb46332356cd393137b40d86a"' }>
                                        <li class="link">
                                            <a href="injectables/AdminService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DbService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DbService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FarmerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FarmerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WorkerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-c62c41557ad5ca7b27cda8fed44600fdc7771e7143d9e91f45ec5f5cdda55c6a1357721b69840ed1583ccb288cd743d9bb97669c509118ec9741d64baf9fcc23"' : 'data-bs-target="#xs-controllers-links-module-AppModule-c62c41557ad5ca7b27cda8fed44600fdc7771e7143d9e91f45ec5f5cdda55c6a1357721b69840ed1583ccb288cd743d9bb97669c509118ec9741d64baf9fcc23"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-c62c41557ad5ca7b27cda8fed44600fdc7771e7143d9e91f45ec5f5cdda55c6a1357721b69840ed1583ccb288cd743d9bb97669c509118ec9741d64baf9fcc23"' :
                                            'id="xs-controllers-links-module-AppModule-c62c41557ad5ca7b27cda8fed44600fdc7771e7143d9e91f45ec5f5cdda55c6a1357721b69840ed1583ccb288cd743d9bb97669c509118ec9741d64baf9fcc23"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/StatisticsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatisticsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-c62c41557ad5ca7b27cda8fed44600fdc7771e7143d9e91f45ec5f5cdda55c6a1357721b69840ed1583ccb288cd743d9bb97669c509118ec9741d64baf9fcc23"' : 'data-bs-target="#xs-injectables-links-module-AppModule-c62c41557ad5ca7b27cda8fed44600fdc7771e7143d9e91f45ec5f5cdda55c6a1357721b69840ed1583ccb288cd743d9bb97669c509118ec9741d64baf9fcc23"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-c62c41557ad5ca7b27cda8fed44600fdc7771e7143d9e91f45ec5f5cdda55c6a1357721b69840ed1583ccb288cd743d9bb97669c509118ec9741d64baf9fcc23"' :
                                        'id="xs-injectables-links-module-AppModule-c62c41557ad5ca7b27cda8fed44600fdc7771e7143d9e91f45ec5f5cdda55c6a1357721b69840ed1583ccb288cd743d9bb97669c509118ec9741d64baf9fcc23"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LolGovService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LolGovService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WorkerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppointmentModule.html" data-type="entity-link" >AppointmentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppointmentModule-5e131c2c420a7e2ef184ef870904ff59cf498b9d6f59e1e4a017d552b354acb5c2863dfbae2d36db4a7b4ab418b792c35993e6a286ceffcec14af5e95f378d31"' : 'data-bs-target="#xs-controllers-links-module-AppointmentModule-5e131c2c420a7e2ef184ef870904ff59cf498b9d6f59e1e4a017d552b354acb5c2863dfbae2d36db4a7b4ab418b792c35993e6a286ceffcec14af5e95f378d31"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppointmentModule-5e131c2c420a7e2ef184ef870904ff59cf498b9d6f59e1e4a017d552b354acb5c2863dfbae2d36db4a7b4ab418b792c35993e6a286ceffcec14af5e95f378d31"' :
                                            'id="xs-controllers-links-module-AppointmentModule-5e131c2c420a7e2ef184ef870904ff59cf498b9d6f59e1e4a017d552b354acb5c2863dfbae2d36db4a7b4ab418b792c35993e6a286ceffcec14af5e95f378d31"' }>
                                            <li class="link">
                                                <a href="controllers/AppointmentController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppointmentController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppointmentModule-5e131c2c420a7e2ef184ef870904ff59cf498b9d6f59e1e4a017d552b354acb5c2863dfbae2d36db4a7b4ab418b792c35993e6a286ceffcec14af5e95f378d31"' : 'data-bs-target="#xs-injectables-links-module-AppointmentModule-5e131c2c420a7e2ef184ef870904ff59cf498b9d6f59e1e4a017d552b354acb5c2863dfbae2d36db4a7b4ab418b792c35993e6a286ceffcec14af5e95f378d31"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppointmentModule-5e131c2c420a7e2ef184ef870904ff59cf498b9d6f59e1e4a017d552b354acb5c2863dfbae2d36db4a7b4ab418b792c35993e6a286ceffcec14af5e95f378d31"' :
                                        'id="xs-injectables-links-module-AppointmentModule-5e131c2c420a7e2ef184ef870904ff59cf498b9d6f59e1e4a017d552b354acb5c2863dfbae2d36db4a7b4ab418b792c35993e6a286ceffcec14af5e95f378d31"' }>
                                        <li class="link">
                                            <a href="injectables/AppointmentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppointmentService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DbService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DbService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-7560c254df0aa29d0ca66a61f6f1806482ec5ed62db25ede872ef906eda4e084e51e14e3b3b7fce424ee88728f5940f0a89c099b6a2008e59150251d28c7c228"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-7560c254df0aa29d0ca66a61f6f1806482ec5ed62db25ede872ef906eda4e084e51e14e3b3b7fce424ee88728f5940f0a89c099b6a2008e59150251d28c7c228"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-7560c254df0aa29d0ca66a61f6f1806482ec5ed62db25ede872ef906eda4e084e51e14e3b3b7fce424ee88728f5940f0a89c099b6a2008e59150251d28c7c228"' :
                                            'id="xs-controllers-links-module-AuthModule-7560c254df0aa29d0ca66a61f6f1806482ec5ed62db25ede872ef906eda4e084e51e14e3b3b7fce424ee88728f5940f0a89c099b6a2008e59150251d28c7c228"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-7560c254df0aa29d0ca66a61f6f1806482ec5ed62db25ede872ef906eda4e084e51e14e3b3b7fce424ee88728f5940f0a89c099b6a2008e59150251d28c7c228"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-7560c254df0aa29d0ca66a61f6f1806482ec5ed62db25ede872ef906eda4e084e51e14e3b3b7fce424ee88728f5940f0a89c099b6a2008e59150251d28c7c228"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-7560c254df0aa29d0ca66a61f6f1806482ec5ed62db25ede872ef906eda4e084e51e14e3b3b7fce424ee88728f5940f0a89c099b6a2008e59150251d28c7c228"' :
                                        'id="xs-injectables-links-module-AuthModule-7560c254df0aa29d0ca66a61f6f1806482ec5ed62db25ede872ef906eda4e084e51e14e3b3b7fce424ee88728f5940f0a89c099b6a2008e59150251d28c7c228"' }>
                                        <li class="link">
                                            <a href="injectables/AdminService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DbService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DbService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FarmerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FarmerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WorkerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChallengeModule.html" data-type="entity-link" >ChallengeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ChallengeModule-3e16b48e3bcca880ab53d18a10a9bbed37f92b0012b859e85e9d77d9334c14818497eb01ad370993f5ed95148ed7d276cb505ed961f412d00d4e2cf6653e11c9"' : 'data-bs-target="#xs-controllers-links-module-ChallengeModule-3e16b48e3bcca880ab53d18a10a9bbed37f92b0012b859e85e9d77d9334c14818497eb01ad370993f5ed95148ed7d276cb505ed961f412d00d4e2cf6653e11c9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ChallengeModule-3e16b48e3bcca880ab53d18a10a9bbed37f92b0012b859e85e9d77d9334c14818497eb01ad370993f5ed95148ed7d276cb505ed961f412d00d4e2cf6653e11c9"' :
                                            'id="xs-controllers-links-module-ChallengeModule-3e16b48e3bcca880ab53d18a10a9bbed37f92b0012b859e85e9d77d9334c14818497eb01ad370993f5ed95148ed7d276cb505ed961f412d00d4e2cf6653e11c9"' }>
                                            <li class="link">
                                                <a href="controllers/ChallengeController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChallengeController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ChallengeModule-3e16b48e3bcca880ab53d18a10a9bbed37f92b0012b859e85e9d77d9334c14818497eb01ad370993f5ed95148ed7d276cb505ed961f412d00d4e2cf6653e11c9"' : 'data-bs-target="#xs-injectables-links-module-ChallengeModule-3e16b48e3bcca880ab53d18a10a9bbed37f92b0012b859e85e9d77d9334c14818497eb01ad370993f5ed95148ed7d276cb505ed961f412d00d4e2cf6653e11c9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ChallengeModule-3e16b48e3bcca880ab53d18a10a9bbed37f92b0012b859e85e9d77d9334c14818497eb01ad370993f5ed95148ed7d276cb505ed961f412d00d4e2cf6653e11c9"' :
                                        'id="xs-injectables-links-module-ChallengeModule-3e16b48e3bcca880ab53d18a10a9bbed37f92b0012b859e85e9d77d9334c14818497eb01ad370993f5ed95148ed7d276cb505ed961f412d00d4e2cf6653e11c9"' }>
                                        <li class="link">
                                            <a href="injectables/AdminService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ChallengeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChallengeService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DbService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DbService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FarmerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FarmerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WorkerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CooperativeModule.html" data-type="entity-link" >CooperativeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CooperativeModule-d09fa6b5e0be9013d6fcb0d15c37dddb0652f52b34a3a788ddb3551adf00574ad10327db3abd945bd69394e1ca0cb462ef9bc89452a9b5e0a36c896b0e59855f"' : 'data-bs-target="#xs-controllers-links-module-CooperativeModule-d09fa6b5e0be9013d6fcb0d15c37dddb0652f52b34a3a788ddb3551adf00574ad10327db3abd945bd69394e1ca0cb462ef9bc89452a9b5e0a36c896b0e59855f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CooperativeModule-d09fa6b5e0be9013d6fcb0d15c37dddb0652f52b34a3a788ddb3551adf00574ad10327db3abd945bd69394e1ca0cb462ef9bc89452a9b5e0a36c896b0e59855f"' :
                                            'id="xs-controllers-links-module-CooperativeModule-d09fa6b5e0be9013d6fcb0d15c37dddb0652f52b34a3a788ddb3551adf00574ad10327db3abd945bd69394e1ca0cb462ef9bc89452a9b5e0a36c896b0e59855f"' }>
                                            <li class="link">
                                                <a href="controllers/CooperativeController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CooperativeController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CooperativeModule-d09fa6b5e0be9013d6fcb0d15c37dddb0652f52b34a3a788ddb3551adf00574ad10327db3abd945bd69394e1ca0cb462ef9bc89452a9b5e0a36c896b0e59855f"' : 'data-bs-target="#xs-injectables-links-module-CooperativeModule-d09fa6b5e0be9013d6fcb0d15c37dddb0652f52b34a3a788ddb3551adf00574ad10327db3abd945bd69394e1ca0cb462ef9bc89452a9b5e0a36c896b0e59855f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CooperativeModule-d09fa6b5e0be9013d6fcb0d15c37dddb0652f52b34a3a788ddb3551adf00574ad10327db3abd945bd69394e1ca0cb462ef9bc89452a9b5e0a36c896b0e59855f"' :
                                        'id="xs-injectables-links-module-CooperativeModule-d09fa6b5e0be9013d6fcb0d15c37dddb0652f52b34a3a788ddb3551adf00574ad10327db3abd945bd69394e1ca0cb462ef9bc89452a9b5e0a36c896b0e59855f"' }>
                                        <li class="link">
                                            <a href="injectables/AdminService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CooperativeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CooperativeService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DbService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DbService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FarmerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FarmerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WorkerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CropModule.html" data-type="entity-link" >CropModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CropModule-3923e1f30ce1f28b594ee752a95d94ba5c05db50cec88d934d2b6c5d9f0a6dea7279cc670037ac6941ee1796c4e083b788ed5154f58d16e57005fd8d778e5b7e"' : 'data-bs-target="#xs-controllers-links-module-CropModule-3923e1f30ce1f28b594ee752a95d94ba5c05db50cec88d934d2b6c5d9f0a6dea7279cc670037ac6941ee1796c4e083b788ed5154f58d16e57005fd8d778e5b7e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CropModule-3923e1f30ce1f28b594ee752a95d94ba5c05db50cec88d934d2b6c5d9f0a6dea7279cc670037ac6941ee1796c4e083b788ed5154f58d16e57005fd8d778e5b7e"' :
                                            'id="xs-controllers-links-module-CropModule-3923e1f30ce1f28b594ee752a95d94ba5c05db50cec88d934d2b6c5d9f0a6dea7279cc670037ac6941ee1796c4e083b788ed5154f58d16e57005fd8d778e5b7e"' }>
                                            <li class="link">
                                                <a href="controllers/CropController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CropController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DbModule.html" data-type="entity-link" >DbModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DbModule-a4a14e127addf7dceedd06336fe2e4abd6a4e705a593e9c4b6f8161ddb093c1e182f88fa3cc47a12d7124e89adb6469f9e3a63ead6739e001e76fe11863aa8eb"' : 'data-bs-target="#xs-injectables-links-module-DbModule-a4a14e127addf7dceedd06336fe2e4abd6a4e705a593e9c4b6f8161ddb093c1e182f88fa3cc47a12d7124e89adb6469f9e3a63ead6739e001e76fe11863aa8eb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DbModule-a4a14e127addf7dceedd06336fe2e4abd6a4e705a593e9c4b6f8161ddb093c1e182f88fa3cc47a12d7124e89adb6469f9e3a63ead6739e001e76fe11863aa8eb"' :
                                        'id="xs-injectables-links-module-DbModule-a4a14e127addf7dceedd06336fe2e4abd6a4e705a593e9c4b6f8161ddb093c1e182f88fa3cc47a12d7124e89adb6469f9e3a63ead6739e001e76fe11863aa8eb"' }>
                                        <li class="link">
                                            <a href="injectables/DbService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DbService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EmailModule.html" data-type="entity-link" >EmailModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ExtensionWorkerModule.html" data-type="entity-link" >ExtensionWorkerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ExtensionWorkerModule-f70074a14976c301183b32b88226728d415bf897d82926666f1d618b246ebb8a2bd12c0cbaca840b1ede2c3735f01a976991412831cbb5d5bf8065bb634b8343"' : 'data-bs-target="#xs-controllers-links-module-ExtensionWorkerModule-f70074a14976c301183b32b88226728d415bf897d82926666f1d618b246ebb8a2bd12c0cbaca840b1ede2c3735f01a976991412831cbb5d5bf8065bb634b8343"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ExtensionWorkerModule-f70074a14976c301183b32b88226728d415bf897d82926666f1d618b246ebb8a2bd12c0cbaca840b1ede2c3735f01a976991412831cbb5d5bf8065bb634b8343"' :
                                            'id="xs-controllers-links-module-ExtensionWorkerModule-f70074a14976c301183b32b88226728d415bf897d82926666f1d618b246ebb8a2bd12c0cbaca840b1ede2c3735f01a976991412831cbb5d5bf8065bb634b8343"' }>
                                            <li class="link">
                                                <a href="controllers/AppointmentController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppointmentController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/CooperativeController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CooperativeController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/ExtensionWorkerController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExtensionWorkerController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/MilestoneController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MilestoneController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/ProjectController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ExtensionWorkerModule-f70074a14976c301183b32b88226728d415bf897d82926666f1d618b246ebb8a2bd12c0cbaca840b1ede2c3735f01a976991412831cbb5d5bf8065bb634b8343"' : 'data-bs-target="#xs-injectables-links-module-ExtensionWorkerModule-f70074a14976c301183b32b88226728d415bf897d82926666f1d618b246ebb8a2bd12c0cbaca840b1ede2c3735f01a976991412831cbb5d5bf8065bb634b8343"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ExtensionWorkerModule-f70074a14976c301183b32b88226728d415bf897d82926666f1d618b246ebb8a2bd12c0cbaca840b1ede2c3735f01a976991412831cbb5d5bf8065bb634b8343"' :
                                        'id="xs-injectables-links-module-ExtensionWorkerModule-f70074a14976c301183b32b88226728d415bf897d82926666f1d618b246ebb8a2bd12c0cbaca840b1ede2c3735f01a976991412831cbb5d5bf8065bb634b8343"' }>
                                        <li class="link">
                                            <a href="injectables/AdminService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AppointmentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppointmentService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CooperativeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CooperativeService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DbService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DbService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FarmerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FarmerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MilestoneService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MilestoneService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProfileService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProjectService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WorkerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/Farmer.html" data-type="entity-link" >Farmer</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-Farmer-7c19a1655ec622fa23953ab7dfea2983153ed38b72a0e018feeb0a4073a06896b0e2d8c3a64341de25df589d6a8f4e4c8f58ce1ab8f155b2d8990d9c827a5346"' : 'data-bs-target="#xs-injectables-links-module-Farmer-7c19a1655ec622fa23953ab7dfea2983153ed38b72a0e018feeb0a4073a06896b0e2d8c3a64341de25df589d6a8f4e4c8f58ce1ab8f155b2d8990d9c827a5346"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-Farmer-7c19a1655ec622fa23953ab7dfea2983153ed38b72a0e018feeb0a4073a06896b0e2d8c3a64341de25df589d6a8f4e4c8f58ce1ab8f155b2d8990d9c827a5346"' :
                                        'id="xs-injectables-links-module-Farmer-7c19a1655ec622fa23953ab7dfea2983153ed38b72a0e018feeb0a4073a06896b0e2d8c3a64341de25df589d6a8f4e4c8f58ce1ab8f155b2d8990d9c827a5346"' }>
                                        <li class="link">
                                            <a href="injectables/DbService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DbService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FarmerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FarmerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FarmerModule.html" data-type="entity-link" >FarmerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FarmerModule-a384471cf9d47b9010ac2d5a72a727f92c5410b4c4ce95ee7413c247e3c6d99943ee2128d5e07d0a5da306630b8dbda248ac3789ade7dcc14c20ffe22db245da"' : 'data-bs-target="#xs-controllers-links-module-FarmerModule-a384471cf9d47b9010ac2d5a72a727f92c5410b4c4ce95ee7413c247e3c6d99943ee2128d5e07d0a5da306630b8dbda248ac3789ade7dcc14c20ffe22db245da"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FarmerModule-a384471cf9d47b9010ac2d5a72a727f92c5410b4c4ce95ee7413c247e3c6d99943ee2128d5e07d0a5da306630b8dbda248ac3789ade7dcc14c20ffe22db245da"' :
                                            'id="xs-controllers-links-module-FarmerModule-a384471cf9d47b9010ac2d5a72a727f92c5410b4c4ce95ee7413c247e3c6d99943ee2128d5e07d0a5da306630b8dbda248ac3789ade7dcc14c20ffe22db245da"' }>
                                            <li class="link">
                                                <a href="controllers/FarmerController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FarmerController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FarmerModule-a384471cf9d47b9010ac2d5a72a727f92c5410b4c4ce95ee7413c247e3c6d99943ee2128d5e07d0a5da306630b8dbda248ac3789ade7dcc14c20ffe22db245da"' : 'data-bs-target="#xs-injectables-links-module-FarmerModule-a384471cf9d47b9010ac2d5a72a727f92c5410b4c4ce95ee7413c247e3c6d99943ee2128d5e07d0a5da306630b8dbda248ac3789ade7dcc14c20ffe22db245da"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FarmerModule-a384471cf9d47b9010ac2d5a72a727f92c5410b4c4ce95ee7413c247e3c6d99943ee2128d5e07d0a5da306630b8dbda248ac3789ade7dcc14c20ffe22db245da"' :
                                        'id="xs-injectables-links-module-FarmerModule-a384471cf9d47b9010ac2d5a72a727f92c5410b4c4ce95ee7413c247e3c6d99943ee2128d5e07d0a5da306630b8dbda248ac3789ade7dcc14c20ffe22db245da"' }>
                                        <li class="link">
                                            <a href="injectables/AdminService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DbService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DbService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FarmerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FarmerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WorkerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/InterventionModule.html" data-type="entity-link" >InterventionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-InterventionModule-f6cc973aaceedc6036b1cf9132596a3e6df2e01cbc7120a130476ebbfea438a863535e79df1b5f35b30c2d3c8c62e9403e3743f77239dfd10240561dbae223ea"' : 'data-bs-target="#xs-controllers-links-module-InterventionModule-f6cc973aaceedc6036b1cf9132596a3e6df2e01cbc7120a130476ebbfea438a863535e79df1b5f35b30c2d3c8c62e9403e3743f77239dfd10240561dbae223ea"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-InterventionModule-f6cc973aaceedc6036b1cf9132596a3e6df2e01cbc7120a130476ebbfea438a863535e79df1b5f35b30c2d3c8c62e9403e3743f77239dfd10240561dbae223ea"' :
                                            'id="xs-controllers-links-module-InterventionModule-f6cc973aaceedc6036b1cf9132596a3e6df2e01cbc7120a130476ebbfea438a863535e79df1b5f35b30c2d3c8c62e9403e3743f77239dfd10240561dbae223ea"' }>
                                            <li class="link">
                                                <a href="controllers/InterventionController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InterventionController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-InterventionModule-f6cc973aaceedc6036b1cf9132596a3e6df2e01cbc7120a130476ebbfea438a863535e79df1b5f35b30c2d3c8c62e9403e3743f77239dfd10240561dbae223ea"' : 'data-bs-target="#xs-injectables-links-module-InterventionModule-f6cc973aaceedc6036b1cf9132596a3e6df2e01cbc7120a130476ebbfea438a863535e79df1b5f35b30c2d3c8c62e9403e3743f77239dfd10240561dbae223ea"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-InterventionModule-f6cc973aaceedc6036b1cf9132596a3e6df2e01cbc7120a130476ebbfea438a863535e79df1b5f35b30c2d3c8c62e9403e3743f77239dfd10240561dbae223ea"' :
                                        'id="xs-injectables-links-module-InterventionModule-f6cc973aaceedc6036b1cf9132596a3e6df2e01cbc7120a130476ebbfea438a863535e79df1b5f35b30c2d3c8c62e9403e3743f77239dfd10240561dbae223ea"' }>
                                        <li class="link">
                                            <a href="injectables/DbService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DbService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/InterventionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InterventionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LibModule.html" data-type="entity-link" >LibModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LocalgovernmentModule.html" data-type="entity-link" >LocalgovernmentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-LocalgovernmentModule-86b3054481e6a3daeac97a6cb50180c3c5569dc1924a01a9381ebf65dcc809c890745fd8fe5e936404faa47e041c4e8592a374513d7a696f22d8153cb2fd03eb"' : 'data-bs-target="#xs-controllers-links-module-LocalgovernmentModule-86b3054481e6a3daeac97a6cb50180c3c5569dc1924a01a9381ebf65dcc809c890745fd8fe5e936404faa47e041c4e8592a374513d7a696f22d8153cb2fd03eb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LocalgovernmentModule-86b3054481e6a3daeac97a6cb50180c3c5569dc1924a01a9381ebf65dcc809c890745fd8fe5e936404faa47e041c4e8592a374513d7a696f22d8153cb2fd03eb"' :
                                            'id="xs-controllers-links-module-LocalgovernmentModule-86b3054481e6a3daeac97a6cb50180c3c5569dc1924a01a9381ebf65dcc809c890745fd8fe5e936404faa47e041c4e8592a374513d7a696f22d8153cb2fd03eb"' }>
                                            <li class="link">
                                                <a href="controllers/LolGovController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LolGovController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-LocalgovernmentModule-86b3054481e6a3daeac97a6cb50180c3c5569dc1924a01a9381ebf65dcc809c890745fd8fe5e936404faa47e041c4e8592a374513d7a696f22d8153cb2fd03eb"' : 'data-bs-target="#xs-injectables-links-module-LocalgovernmentModule-86b3054481e6a3daeac97a6cb50180c3c5569dc1924a01a9381ebf65dcc809c890745fd8fe5e936404faa47e041c4e8592a374513d7a696f22d8153cb2fd03eb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LocalgovernmentModule-86b3054481e6a3daeac97a6cb50180c3c5569dc1924a01a9381ebf65dcc809c890745fd8fe5e936404faa47e041c4e8592a374513d7a696f22d8153cb2fd03eb"' :
                                        'id="xs-injectables-links-module-LocalgovernmentModule-86b3054481e6a3daeac97a6cb50180c3c5569dc1924a01a9381ebf65dcc809c890745fd8fe5e936404faa47e041c4e8592a374513d7a696f22d8153cb2fd03eb"' }>
                                        <li class="link">
                                            <a href="injectables/DbService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DbService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LolGovService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LolGovService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/StatisticsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatisticsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MilestoneModule.html" data-type="entity-link" >MilestoneModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MilestoneModule-486b03de468d490c83cb9f4fbdc8ac36e222bd56319c910173b0ffbc5e4ce7b0f2cda73b3af96cf18b1f324a7185615ef43174c0908f97e31f8ed5de2ef62c46"' : 'data-bs-target="#xs-controllers-links-module-MilestoneModule-486b03de468d490c83cb9f4fbdc8ac36e222bd56319c910173b0ffbc5e4ce7b0f2cda73b3af96cf18b1f324a7185615ef43174c0908f97e31f8ed5de2ef62c46"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MilestoneModule-486b03de468d490c83cb9f4fbdc8ac36e222bd56319c910173b0ffbc5e4ce7b0f2cda73b3af96cf18b1f324a7185615ef43174c0908f97e31f8ed5de2ef62c46"' :
                                            'id="xs-controllers-links-module-MilestoneModule-486b03de468d490c83cb9f4fbdc8ac36e222bd56319c910173b0ffbc5e4ce7b0f2cda73b3af96cf18b1f324a7185615ef43174c0908f97e31f8ed5de2ef62c46"' }>
                                            <li class="link">
                                                <a href="controllers/MilestoneController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MilestoneController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MilestoneModule-486b03de468d490c83cb9f4fbdc8ac36e222bd56319c910173b0ffbc5e4ce7b0f2cda73b3af96cf18b1f324a7185615ef43174c0908f97e31f8ed5de2ef62c46"' : 'data-bs-target="#xs-injectables-links-module-MilestoneModule-486b03de468d490c83cb9f4fbdc8ac36e222bd56319c910173b0ffbc5e4ce7b0f2cda73b3af96cf18b1f324a7185615ef43174c0908f97e31f8ed5de2ef62c46"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MilestoneModule-486b03de468d490c83cb9f4fbdc8ac36e222bd56319c910173b0ffbc5e4ce7b0f2cda73b3af96cf18b1f324a7185615ef43174c0908f97e31f8ed5de2ef62c46"' :
                                        'id="xs-injectables-links-module-MilestoneModule-486b03de468d490c83cb9f4fbdc8ac36e222bd56319c910173b0ffbc5e4ce7b0f2cda73b3af96cf18b1f324a7185615ef43174c0908f97e31f8ed5de2ef62c46"' }>
                                        <li class="link">
                                            <a href="injectables/DbService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DbService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MilestoneService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MilestoneService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileModule.html" data-type="entity-link" >ProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ProfileModule-a7795bb59b3064b77023ace6ce9fde1af0706b958edd29a4fbf5f590a6b79dbdc286e84722d4b52ad8baf55bbc26c77c0e6e84e1a2d5ea58d445b09471a3a709"' : 'data-bs-target="#xs-controllers-links-module-ProfileModule-a7795bb59b3064b77023ace6ce9fde1af0706b958edd29a4fbf5f590a6b79dbdc286e84722d4b52ad8baf55bbc26c77c0e6e84e1a2d5ea58d445b09471a3a709"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProfileModule-a7795bb59b3064b77023ace6ce9fde1af0706b958edd29a4fbf5f590a6b79dbdc286e84722d4b52ad8baf55bbc26c77c0e6e84e1a2d5ea58d445b09471a3a709"' :
                                            'id="xs-controllers-links-module-ProfileModule-a7795bb59b3064b77023ace6ce9fde1af0706b958edd29a4fbf5f590a6b79dbdc286e84722d4b52ad8baf55bbc26c77c0e6e84e1a2d5ea58d445b09471a3a709"' }>
                                            <li class="link">
                                                <a href="controllers/ProfileController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProfileModule-a7795bb59b3064b77023ace6ce9fde1af0706b958edd29a4fbf5f590a6b79dbdc286e84722d4b52ad8baf55bbc26c77c0e6e84e1a2d5ea58d445b09471a3a709"' : 'data-bs-target="#xs-injectables-links-module-ProfileModule-a7795bb59b3064b77023ace6ce9fde1af0706b958edd29a4fbf5f590a6b79dbdc286e84722d4b52ad8baf55bbc26c77c0e6e84e1a2d5ea58d445b09471a3a709"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProfileModule-a7795bb59b3064b77023ace6ce9fde1af0706b958edd29a4fbf5f590a6b79dbdc286e84722d4b52ad8baf55bbc26c77c0e6e84e1a2d5ea58d445b09471a3a709"' :
                                        'id="xs-injectables-links-module-ProfileModule-a7795bb59b3064b77023ace6ce9fde1af0706b958edd29a4fbf5f590a6b79dbdc286e84722d4b52ad8baf55bbc26c77c0e6e84e1a2d5ea58d445b09471a3a709"' }>
                                        <li class="link">
                                            <a href="injectables/DbService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DbService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProfileService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProjectModule.html" data-type="entity-link" >ProjectModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ProjectModule-04363aee60cfd06d244c229766e2f427399356110a7c7a9c876f9497c2a3cb96bdfea8b1a10b801450a17e6b734bdcf42fb987c2f1d4f39cbe4f1fcbc6cc0aa4"' : 'data-bs-target="#xs-controllers-links-module-ProjectModule-04363aee60cfd06d244c229766e2f427399356110a7c7a9c876f9497c2a3cb96bdfea8b1a10b801450a17e6b734bdcf42fb987c2f1d4f39cbe4f1fcbc6cc0aa4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProjectModule-04363aee60cfd06d244c229766e2f427399356110a7c7a9c876f9497c2a3cb96bdfea8b1a10b801450a17e6b734bdcf42fb987c2f1d4f39cbe4f1fcbc6cc0aa4"' :
                                            'id="xs-controllers-links-module-ProjectModule-04363aee60cfd06d244c229766e2f427399356110a7c7a9c876f9497c2a3cb96bdfea8b1a10b801450a17e6b734bdcf42fb987c2f1d4f39cbe4f1fcbc6cc0aa4"' }>
                                            <li class="link">
                                                <a href="controllers/ProjectController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProjectModule-04363aee60cfd06d244c229766e2f427399356110a7c7a9c876f9497c2a3cb96bdfea8b1a10b801450a17e6b734bdcf42fb987c2f1d4f39cbe4f1fcbc6cc0aa4"' : 'data-bs-target="#xs-injectables-links-module-ProjectModule-04363aee60cfd06d244c229766e2f427399356110a7c7a9c876f9497c2a3cb96bdfea8b1a10b801450a17e6b734bdcf42fb987c2f1d4f39cbe4f1fcbc6cc0aa4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProjectModule-04363aee60cfd06d244c229766e2f427399356110a7c7a9c876f9497c2a3cb96bdfea8b1a10b801450a17e6b734bdcf42fb987c2f1d4f39cbe4f1fcbc6cc0aa4"' :
                                        'id="xs-injectables-links-module-ProjectModule-04363aee60cfd06d244c229766e2f427399356110a7c7a9c876f9497c2a3cb96bdfea8b1a10b801450a17e6b734bdcf42fb987c2f1d4f39cbe4f1fcbc6cc0aa4"' }>
                                        <li class="link">
                                            <a href="injectables/AdminService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DbService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DbService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FarmerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FarmerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProfileService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProjectService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WorkerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ReportModule.html" data-type="entity-link" >ReportModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ReportModule-533984c16c7bf8d0b9f450c4f69a46e07e35deb04df18c9aae5b01c5470ced48d96a3b54197c8b7d9b25ae8f4726411f3ef4222a723a4a2b3bafaff8e0262de6"' : 'data-bs-target="#xs-controllers-links-module-ReportModule-533984c16c7bf8d0b9f450c4f69a46e07e35deb04df18c9aae5b01c5470ced48d96a3b54197c8b7d9b25ae8f4726411f3ef4222a723a4a2b3bafaff8e0262de6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ReportModule-533984c16c7bf8d0b9f450c4f69a46e07e35deb04df18c9aae5b01c5470ced48d96a3b54197c8b7d9b25ae8f4726411f3ef4222a723a4a2b3bafaff8e0262de6"' :
                                            'id="xs-controllers-links-module-ReportModule-533984c16c7bf8d0b9f450c4f69a46e07e35deb04df18c9aae5b01c5470ced48d96a3b54197c8b7d9b25ae8f4726411f3ef4222a723a4a2b3bafaff8e0262de6"' }>
                                            <li class="link">
                                                <a href="controllers/ReportController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReportController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StatisticsModule.html" data-type="entity-link" >StatisticsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-StatisticsModule-5f28f32b6e81aeb61814b5a25d4f9fff5f8ec5606ebf41d62e517475db512aba6fc1772ff5127d8f293189386175cd01a3d3b99d68286d159bc41a367abca9b2"' : 'data-bs-target="#xs-controllers-links-module-StatisticsModule-5f28f32b6e81aeb61814b5a25d4f9fff5f8ec5606ebf41d62e517475db512aba6fc1772ff5127d8f293189386175cd01a3d3b99d68286d159bc41a367abca9b2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-StatisticsModule-5f28f32b6e81aeb61814b5a25d4f9fff5f8ec5606ebf41d62e517475db512aba6fc1772ff5127d8f293189386175cd01a3d3b99d68286d159bc41a367abca9b2"' :
                                            'id="xs-controllers-links-module-StatisticsModule-5f28f32b6e81aeb61814b5a25d4f9fff5f8ec5606ebf41d62e517475db512aba6fc1772ff5127d8f293189386175cd01a3d3b99d68286d159bc41a367abca9b2"' }>
                                            <li class="link">
                                                <a href="controllers/StatisticsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatisticsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-StatisticsModule-5f28f32b6e81aeb61814b5a25d4f9fff5f8ec5606ebf41d62e517475db512aba6fc1772ff5127d8f293189386175cd01a3d3b99d68286d159bc41a367abca9b2"' : 'data-bs-target="#xs-injectables-links-module-StatisticsModule-5f28f32b6e81aeb61814b5a25d4f9fff5f8ec5606ebf41d62e517475db512aba6fc1772ff5127d8f293189386175cd01a3d3b99d68286d159bc41a367abca9b2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StatisticsModule-5f28f32b6e81aeb61814b5a25d4f9fff5f8ec5606ebf41d62e517475db512aba6fc1772ff5127d8f293189386175cd01a3d3b99d68286d159bc41a367abca9b2"' :
                                        'id="xs-injectables-links-module-StatisticsModule-5f28f32b6e81aeb61814b5a25d4f9fff5f8ec5606ebf41d62e517475db512aba6fc1772ff5127d8f293189386175cd01a3d3b99d68286d159bc41a367abca9b2"' }>
                                        <li class="link">
                                            <a href="injectables/StatisticsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatisticsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/VisitModule.html" data-type="entity-link" >VisitModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-VisitModule-95177a83a5bcc16454a38350dcc2c1ea81364c511a6f16abf769ae21f94be3ffb2a01f063a28db4735e1dd2cd8b9e6148056403061bede38f98f51ed12c8a766"' : 'data-bs-target="#xs-controllers-links-module-VisitModule-95177a83a5bcc16454a38350dcc2c1ea81364c511a6f16abf769ae21f94be3ffb2a01f063a28db4735e1dd2cd8b9e6148056403061bede38f98f51ed12c8a766"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-VisitModule-95177a83a5bcc16454a38350dcc2c1ea81364c511a6f16abf769ae21f94be3ffb2a01f063a28db4735e1dd2cd8b9e6148056403061bede38f98f51ed12c8a766"' :
                                            'id="xs-controllers-links-module-VisitModule-95177a83a5bcc16454a38350dcc2c1ea81364c511a6f16abf769ae21f94be3ffb2a01f063a28db4735e1dd2cd8b9e6148056403061bede38f98f51ed12c8a766"' }>
                                            <li class="link">
                                                <a href="controllers/VisitController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VisitController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-VisitModule-95177a83a5bcc16454a38350dcc2c1ea81364c511a6f16abf769ae21f94be3ffb2a01f063a28db4735e1dd2cd8b9e6148056403061bede38f98f51ed12c8a766"' : 'data-bs-target="#xs-injectables-links-module-VisitModule-95177a83a5bcc16454a38350dcc2c1ea81364c511a6f16abf769ae21f94be3ffb2a01f063a28db4735e1dd2cd8b9e6148056403061bede38f98f51ed12c8a766"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-VisitModule-95177a83a5bcc16454a38350dcc2c1ea81364c511a6f16abf769ae21f94be3ffb2a01f063a28db4735e1dd2cd8b9e6148056403061bede38f98f51ed12c8a766"' :
                                        'id="xs-injectables-links-module-VisitModule-95177a83a5bcc16454a38350dcc2c1ea81364c511a6f16abf769ae21f94be3ffb2a01f063a28db4735e1dd2cd8b9e6148056403061bede38f98f51ed12c8a766"' }>
                                        <li class="link">
                                            <a href="injectables/DbService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DbService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/VisitService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VisitService</a>
                                        </li>
                                    </ul>
                                </li>
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
                                <a href="classes/AllExceptionsFilter.html" data-type="entity-link" >AllExceptionsFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAppointmentDto.html" data-type="entity-link" >CreateAppointmentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCooperativeDto.html" data-type="entity-link" >CreateCooperativeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFarmerDto.html" data-type="entity-link" >CreateFarmerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateInterventionDto.html" data-type="entity-link" >CreateInterventionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateMilestoneDto.html" data-type="entity-link" >CreateMilestoneDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProfileDto.html" data-type="entity-link" >CreateProfileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProjectDto.html" data-type="entity-link" >CreateProjectDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateReportDto.html" data-type="entity-link" >CreateReportDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateVisitDto.html" data-type="entity-link" >CreateVisitDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Dto.html" data-type="entity-link" >Dto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindDto.html" data-type="entity-link" >FindDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindDto-1.html" data-type="entity-link" >FindDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindDto-2.html" data-type="entity-link" >FindDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindDto-3.html" data-type="entity-link" >FindDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindDto-4.html" data-type="entity-link" >FindDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindDto-5.html" data-type="entity-link" >FindDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindDto-6.html" data-type="entity-link" >FindDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindDto-7.html" data-type="entity-link" >FindDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindDto-8.html" data-type="entity-link" >FindDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Photo.html" data-type="entity-link" >Photo</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDto.html" data-type="entity-link" >UpdateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDto-1.html" data-type="entity-link" >UpdateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDto-2.html" data-type="entity-link" >UpdateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDto-3.html" data-type="entity-link" >UpdateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDto-4.html" data-type="entity-link" >UpdateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDto-5.html" data-type="entity-link" >UpdateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDto-6.html" data-type="entity-link" >UpdateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDto-7.html" data-type="entity-link" >UpdateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDto-8.html" data-type="entity-link" >UpdateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDto-9.html" data-type="entity-link" >UpdateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ValidationDto.html" data-type="entity-link" >ValidationDto</a>
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
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
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
                                <a href="guards/AdminGuard.html" data-type="entity-link" >AdminGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/ExtensionWorkerGuard.html" data-type="entity-link" >ExtensionWorkerGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/FamrerGuard.html" data-type="entity-link" >FamrerGuard</a>
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
                                <a href="interfaces/CooperativeManager.html" data-type="entity-link" >CooperativeManager</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAdmin.html" data-type="entity-link" >IAdmin</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAppointment.html" data-type="entity-link" >IAppointment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAuth.html" data-type="entity-link" >IAuth</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IChallenge.html" data-type="entity-link" >IChallenge</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICooperative.html" data-type="entity-link" >ICooperative</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICrop.html" data-type="entity-link" >ICrop</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFarmer.html" data-type="entity-link" >IFarmer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IIntervention.html" data-type="entity-link" >IIntervention</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMilestone.html" data-type="entity-link" >IMilestone</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProfile.html" data-type="entity-link" >IProfile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProject.html" data-type="entity-link" >IProject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IReport.html" data-type="entity-link" >IReport</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link" >IUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IVisit.html" data-type="entity-link" >IVisit</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Iworker.html" data-type="entity-link" >Iworker</a>
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