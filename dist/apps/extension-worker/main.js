/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/admin/src/admin/admin.service.ts":
/*!***********************************************!*\
  !*** ./apps/admin/src/admin/admin.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdminService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const db_service_1 = __webpack_require__(/*! @app/lib/db/db.service */ "./libs/lib/src/db/db.service.ts");
let AdminService = class AdminService {
    constructor(db) {
        this.db = db;
    }
    async UpdateFirstName(data) {
        try {
            const user = await this.db.user.update({
                where: {
                    id: data['id'],
                    type: 'ADMIN',
                },
                data: {
                    first_name: data['new_value'],
                },
            });
            return user;
        }
        catch (error) {
            return error;
        }
    }
    async UpdateLastName(data) {
        try {
            const user = await this.db.user.update({
                where: {
                    id: data['id'],
                    type: 'ADMIN',
                },
                data: {
                    last_name: data['new_value'],
                },
            });
            return user;
        }
        catch (error) {
            return error;
        }
    }
    async UpdatePhoneNumber(data) {
        try {
            const user = await this.db.user.update({
                where: {
                    id: data['id'],
                    type: 'ADMIN',
                },
                data: {
                    phone_number: data['new_value'],
                },
            });
            return user;
        }
        catch (error) {
            return error;
        }
    }
    async FindById(data) {
        try {
            const user = await this.db.user.findFirstOrThrow({
                where: {
                    id: data['id'],
                    type: 'ADMIN',
                },
            });
            return user;
        }
        catch (error) {
            return error;
        }
    }
    async FindByPhone_Number(data) {
        try {
            const user = await this.db.user.findFirstOrThrow({
                where: {
                    id: data['id'],
                    type: 'ADMIN',
                    phone_number: data['property'],
                },
            });
            return user;
        }
        catch (error) {
            return error;
        }
    }
    async FindByFirst_name(data) {
        try {
            const user = await this.db.user.findFirstOrThrow({
                where: {
                    id: data['id'],
                    type: 'ADMIN',
                    first_name: data['property'],
                },
            });
            return user;
        }
        catch (error) {
            return error;
        }
    }
    async UpdatePassword(data) {
        try {
            const user = await this.db.user.update({
                where: {
                    email: data['property'],
                    type: 'ADMIN',
                },
                data: {
                    password: data['new_value'],
                },
            });
            return user;
        }
        catch (error) {
            return error;
        }
    }
    async CreateResource(data) {
        try {
            const user = await this.db.user.create({
                data: {
                    email: data['email'],
                    first_name: data['first_name'],
                    last_name: data['last_name'],
                    password: data['password'],
                    phone_number: data['phone_number'],
                    type: 'ADMIN',
                },
            });
            return user;
        }
        catch (error) {
            return error;
        }
    }
    SignOut() {
        throw new Error('Method not implemented.');
    }
    async FindByEmail(data) {
        try {
            const user = await this.db.user.findFirstOrThrow({
                where: {
                    email: data['property'],
                    type: 'ADMIN',
                },
            });
            return user;
        }
        catch (error) {
            console.log(error);
        }
    }
};
AdminService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof db_service_1.DbService !== "undefined" && db_service_1.DbService) === "function" ? _a : Object])
], AdminService);
exports.AdminService = AdminService;


/***/ }),

/***/ "./apps/extension-worker/src/Intervention/Intervention.controller.ts":
/*!***************************************************************************!*\
  !*** ./apps/extension-worker/src/Intervention/Intervention.controller.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InterventionController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const dto_1 = __webpack_require__(/*! ./dto/dto */ "./apps/extension-worker/src/Intervention/dto/dto.ts");
const find_dto_1 = __webpack_require__(/*! ./dto/find_dto */ "./apps/extension-worker/src/Intervention/dto/find_dto.ts");
const update_dto_1 = __webpack_require__(/*! ./dto/update_dto */ "./apps/extension-worker/src/Intervention/dto/update_dto.ts");
const intervention_service_1 = __webpack_require__(/*! ./intervention.service */ "./apps/extension-worker/src/Intervention/intervention.service.ts");
let InterventionController = class InterventionController {
    constructor(service) {
        this.service = service;
    }
    createIntervention(data) {
        return this.service.createIntervention(data);
    }
    findById(data) {
        return this.service.findById(data);
    }
    findByAmount(data) {
        return this.service.findByAmount(data);
    }
    findByType(data) {
        return this.service.findByType(data);
    }
    findByFarmerProfileId(data) {
        return this.service.findByFarmerProfileId(data);
    }
    findByProjectId(data) {
        return this.service.findByProjectId(data);
    }
    updateProperty(data) {
        return this.service.updateProperty(data);
    }
};
__decorate([
    (0, common_1.Post)('createIntervention'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.CreateInterventionDto !== "undefined" && dto_1.CreateInterventionDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], InterventionController.prototype, "createIntervention", null);
__decorate([
    (0, common_1.Post)('findById'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], InterventionController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)('findByAmount'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], InterventionController.prototype, "findByAmount", null);
__decorate([
    (0, common_1.Post)('findByType'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _h : Object]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], InterventionController.prototype, "findByType", null);
__decorate([
    (0, common_1.Post)('findByFarmerProfileId'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _k : Object]),
    __metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], InterventionController.prototype, "findByFarmerProfileId", null);
__decorate([
    (0, common_1.Post)('findByProjectId'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_m = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _m : Object]),
    __metadata("design:returntype", typeof (_o = typeof Promise !== "undefined" && Promise) === "function" ? _o : Object)
], InterventionController.prototype, "findByProjectId", null);
__decorate([
    (0, common_1.Post)('updateProperty'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_p = typeof update_dto_1.UpdateDto !== "undefined" && update_dto_1.UpdateDto) === "function" ? _p : Object]),
    __metadata("design:returntype", typeof (_q = typeof Promise !== "undefined" && Promise) === "function" ? _q : Object)
], InterventionController.prototype, "updateProperty", null);
InterventionController = __decorate([
    (0, common_1.Controller)('Intervention'),
    (0, swagger_1.ApiTags)('Intervention'),
    __metadata("design:paramtypes", [typeof (_a = typeof intervention_service_1.InterventionService !== "undefined" && intervention_service_1.InterventionService) === "function" ? _a : Object])
], InterventionController);
exports.InterventionController = InterventionController;


/***/ }),

/***/ "./apps/extension-worker/src/Intervention/Intervention.module.ts":
/*!***********************************************************************!*\
  !*** ./apps/extension-worker/src/Intervention/Intervention.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InterventionModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const Intervention_controller_1 = __webpack_require__(/*! ./Intervention.controller */ "./apps/extension-worker/src/Intervention/Intervention.controller.ts");
const intervention_service_1 = __webpack_require__(/*! ./intervention.service */ "./apps/extension-worker/src/Intervention/intervention.service.ts");
const db_service_1 = __webpack_require__(/*! @app/lib/db/db.service */ "./libs/lib/src/db/db.service.ts");
let InterventionModule = class InterventionModule {
};
InterventionModule = __decorate([
    (0, common_1.Module)({
        controllers: [Intervention_controller_1.InterventionController],
        providers: [intervention_service_1.InterventionService, db_service_1.DbService],
    })
], InterventionModule);
exports.InterventionModule = InterventionModule;


/***/ }),

/***/ "./apps/extension-worker/src/Intervention/dto/dto.ts":
/*!***********************************************************!*\
  !*** ./apps/extension-worker/src/Intervention/dto/dto.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./apps/extension-worker/src/Intervention/dto/find_dto.ts":
/*!****************************************************************!*\
  !*** ./apps/extension-worker/src/Intervention/dto/find_dto.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class FindDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FindDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", typeof (_a = typeof Partial !== "undefined" && Partial) === "function" ? _a : Object)
], FindDto.prototype, "properties", void 0);
exports.FindDto = FindDto;


/***/ }),

/***/ "./apps/extension-worker/src/Intervention/dto/update_dto.ts":
/*!******************************************************************!*\
  !*** ./apps/extension-worker/src/Intervention/dto/update_dto.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class UpdateDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", typeof (_a = typeof Partial !== "undefined" && Partial) === "function" ? _a : Object)
], UpdateDto.prototype, "properties", void 0);
exports.UpdateDto = UpdateDto;


/***/ }),

/***/ "./apps/extension-worker/src/Intervention/intervention.service.ts":
/*!************************************************************************!*\
  !*** ./apps/extension-worker/src/Intervention/intervention.service.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InterventionService = void 0;
const db_service_1 = __webpack_require__(/*! @app/lib/db/db.service */ "./libs/lib/src/db/db.service.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let InterventionService = class InterventionService {
    constructor(db) {
        this.db = db;
    }
    async createIntervention(data) {
        try {
            let query = await this.db.intervention.create({
                data: {
                    custom_field: data['custom_field'],
                    type: data['type'],
                    amount: data['amount'],
                    farmerProfileId: data['farmerProfileId'],
                    projectId: data['projectId'],
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async findById(data) {
        try {
            let query = await this.db.intervention.findFirstOrThrow({
                where: {
                    id: data['id'],
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async findByAmount(data) {
        try {
            let query = await this.db.intervention.findFirstOrThrow({
                where: {
                    id: data['id'],
                    amount: data['properties']['amount'],
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async findByType(data) {
        try {
            let query = await this.db.intervention.findFirstOrThrow({
                where: {
                    id: data['id'],
                    type: data['properties']['type'],
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async findByFarmerProfileId(data) {
        try {
            let query = await this.db.intervention.findFirstOrThrow({
                where: {
                    id: data['id'],
                    farmerProfileId: data['properties']['farmerProfileId'],
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async findByProjectId(data) {
        try {
            let query = await this.db.intervention.findFirstOrThrow({
                where: {
                    id: data['id'],
                    projectId: data['properties']['projectId'],
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async updateProperty(data) {
        try {
            let query = data['properties']['amount'] !== undefined
                ? await this.db.intervention.update({
                    where: {
                        id: data['id'],
                    },
                    data: {
                        amount: data['properties']['amount'],
                    },
                })
                : data['properties']['farmerProfileId'] !== undefined
                    ? await this.db.intervention.update({
                        where: {
                            id: data['id'],
                        },
                        data: {
                            farmerProfileId: data['properties']['farmerProfileId'],
                        },
                    })
                    : data['properties']['projectId'] !== undefined
                        ? await this.db.intervention.update({
                            where: {
                                id: data['id'],
                            },
                            data: {
                                projectId: data['properties']['projectId'],
                            },
                        })
                        : data['properties']['type'] !== undefined
                            ? await this.db.intervention.update({
                                where: {
                                    id: data['id'],
                                },
                                data: {
                                    type: data['properties']['type'],
                                },
                            })
                            : data['properties']['custom_field'] !== undefined
                                ? await this.db.intervention.update({
                                    where: {
                                        id: data['id'],
                                    },
                                    data: {
                                        custom_field: data['properties']['custom_field'],
                                    },
                                })
                                : new common_1.BadRequestException('pass in a valid prop');
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
};
InterventionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof db_service_1.DbService !== "undefined" && db_service_1.DbService) === "function" ? _a : Object])
], InterventionService);
exports.InterventionService = InterventionService;


/***/ }),

/***/ "./apps/extension-worker/src/challenge/challenge.controller.ts":
/*!*********************************************************************!*\
  !*** ./apps/extension-worker/src/challenge/challenge.controller.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChallengeController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const update_dto_1 = __webpack_require__(/*! ./dto/update_dto */ "./apps/extension-worker/src/challenge/dto/update_dto.ts");
const challenge_service_1 = __webpack_require__(/*! ./challenge.service */ "./apps/extension-worker/src/challenge/challenge.service.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let ChallengeController = class ChallengeController {
    constructor(service) {
        this.service = service;
    }
    CreateChallenge(data) {
        return this.service.CreateChallenge(data);
    }
    FindByid(data) {
        return this.service.FindByid(data);
    }
    FindBytype(data) {
        return this.service.FindBytype(data);
    }
    FindBycustom_felids(data) {
        return this.service.FindBycustom_felids(data);
    }
    FindByvisitId(data) {
        return this.service.FindByvisitId(data);
    }
    UpdateProperty(data) {
        return this.service.UpdateProperty(data);
    }
};
__decorate([
    (0, common_1.Post)('CreateChallenge'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], ChallengeController.prototype, "CreateChallenge", null);
__decorate([
    (0, common_1.Post)('FindByid'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof Partial !== "undefined" && Partial) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], ChallengeController.prototype, "FindByid", null);
__decorate([
    (0, common_1.Post)('FindBytype'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof Partial !== "undefined" && Partial) === "function" ? _e : Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], ChallengeController.prototype, "FindBytype", null);
__decorate([
    (0, common_1.Post)('FindBycustom_felids'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof Partial !== "undefined" && Partial) === "function" ? _g : Object]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], ChallengeController.prototype, "FindBycustom_felids", null);
__decorate([
    (0, common_1.Post)('FindByvisitId'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof Partial !== "undefined" && Partial) === "function" ? _j : Object]),
    __metadata("design:returntype", typeof (_k = typeof Promise !== "undefined" && Promise) === "function" ? _k : Object)
], ChallengeController.prototype, "FindByvisitId", null);
__decorate([
    (0, common_1.Post)('UpdateProperty'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_l = typeof update_dto_1.UpdateDto !== "undefined" && update_dto_1.UpdateDto) === "function" ? _l : Object]),
    __metadata("design:returntype", typeof (_m = typeof Promise !== "undefined" && Promise) === "function" ? _m : Object)
], ChallengeController.prototype, "UpdateProperty", null);
ChallengeController = __decorate([
    (0, common_1.Controller)('challenge'),
    (0, swagger_1.ApiTags)('Challenge'),
    __metadata("design:paramtypes", [typeof (_a = typeof challenge_service_1.ChallengeService !== "undefined" && challenge_service_1.ChallengeService) === "function" ? _a : Object])
], ChallengeController);
exports.ChallengeController = ChallengeController;


/***/ }),

/***/ "./apps/extension-worker/src/challenge/challenge.module.ts":
/*!*****************************************************************!*\
  !*** ./apps/extension-worker/src/challenge/challenge.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChallengeModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const challenge_service_1 = __webpack_require__(/*! ./challenge.service */ "./apps/extension-worker/src/challenge/challenge.service.ts");
const challenge_controller_1 = __webpack_require__(/*! ./challenge.controller */ "./apps/extension-worker/src/challenge/challenge.controller.ts");
const db_service_1 = __webpack_require__(/*! @app/lib/db/db.service */ "./libs/lib/src/db/db.service.ts");
let ChallengeModule = class ChallengeModule {
};
ChallengeModule = __decorate([
    (0, common_1.Module)({
        providers: [challenge_service_1.ChallengeService, db_service_1.DbService],
        controllers: [challenge_controller_1.ChallengeController],
    })
], ChallengeModule);
exports.ChallengeModule = ChallengeModule;


/***/ }),

/***/ "./apps/extension-worker/src/challenge/challenge.service.ts":
/*!******************************************************************!*\
  !*** ./apps/extension-worker/src/challenge/challenge.service.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChallengeService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const db_service_1 = __webpack_require__(/*! @app/lib/db/db.service */ "./libs/lib/src/db/db.service.ts");
let ChallengeService = class ChallengeService {
    constructor(db) {
        this.db = db;
    }
    async CreateChallenge(data) {
        try {
            let query = await this.db.challenge.create({
                data: {
                    type: data['type'],
                    custom_fields: data['custom_fields'],
                    visitId: data['visitId'],
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async FindByid(data) {
        try {
            let query = await this.db.challenge.findFirstOrThrow({
                where: {
                    id: data['id'],
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async FindBytype(data) {
        try {
            let query = await this.db.challenge.findFirstOrThrow({
                where: {
                    id: data['id'],
                    type: data['type'],
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    FindBycustom_felids(data) {
        throw new Error('Method not implemented.');
    }
    async FindByvisitId(data) {
        try {
            let query = await this.db.challenge.findFirstOrThrow({
                where: {
                    id: data['id'],
                    visitId: data['visitId'],
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async UpdateProperty(data) {
        try {
            let query = data['properties']['visitId'] !== undefined
                ? await this.db.challenge.update({
                    data: {
                        visitId: data['properties']['visitId'],
                    },
                    where: {
                        id: data['id'],
                    },
                })
                : data['properties']['type'] !== undefined
                    ? await this.db.challenge.update({
                        data: {
                            visitId: data['properties']['type'],
                        },
                        where: {
                            id: data['id'],
                        },
                    })
                    : new common_1.BadRequestException('pass in a valid property');
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
};
ChallengeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof db_service_1.DbService !== "undefined" && db_service_1.DbService) === "function" ? _a : Object])
], ChallengeService);
exports.ChallengeService = ChallengeService;


/***/ }),

/***/ "./apps/extension-worker/src/challenge/dto/update_dto.ts":
/*!***************************************************************!*\
  !*** ./apps/extension-worker/src/challenge/dto/update_dto.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateDto = void 0;
class UpdateDto {
}
exports.UpdateDto = UpdateDto;


/***/ }),

/***/ "./apps/extension-worker/src/cooperative/cooperative.controller.ts":
/*!*************************************************************************!*\
  !*** ./apps/extension-worker/src/cooperative/cooperative.controller.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CooperativeController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const dto_1 = __webpack_require__(/*! ./dto/dto */ "./apps/extension-worker/src/cooperative/dto/dto.ts");
const find_dto_1 = __webpack_require__(/*! ./dto/find_dto */ "./apps/extension-worker/src/cooperative/dto/find_dto.ts");
const update_dto_1 = __webpack_require__(/*! ./dto/update_dto */ "./apps/extension-worker/src/cooperative/dto/update_dto.ts");
const cooperative_service_1 = __webpack_require__(/*! ./cooperative.service */ "./apps/extension-worker/src/cooperative/cooperative.service.ts");
let CooperativeController = class CooperativeController {
    constructor(service) {
        this.service = service;
    }
    CreateCooperative(data) {
        return this.service.CreateCooperative(data);
    }
    FindByid(data) {
        return this.service.FindByid(data);
    }
    FindByworkerProfileId(data) {
        return this.service.FindByworkerProfileId(data);
    }
    UpdateProperty(data) {
        return this.service.UpdateProperty(data);
    }
    Getfarmers(data) {
        return this.service.Getfarmers(data);
    }
    Addfarmer(data) {
        return this.service.Addfarmer(data);
    }
    Removefarmer(data) {
        return this.service.Removefarmer(data);
    }
};
__decorate([
    (0, common_1.Post)('CreateCooperative'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.CreateCooperativeDto !== "undefined" && dto_1.CreateCooperativeDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], CooperativeController.prototype, "CreateCooperative", null);
__decorate([
    (0, common_1.Post)('FindByid'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], CooperativeController.prototype, "FindByid", null);
__decorate([
    (0, common_1.Post)('FindByworkerProfileId'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], CooperativeController.prototype, "FindByworkerProfileId", null);
__decorate([
    (0, common_1.Post)('UpdateProperty'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof update_dto_1.UpdateDto !== "undefined" && update_dto_1.UpdateDto) === "function" ? _h : Object]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], CooperativeController.prototype, "UpdateProperty", null);
__decorate([
    (0, common_1.Post)('Getfarmers'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _k : Object]),
    __metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], CooperativeController.prototype, "Getfarmers", null);
__decorate([
    (0, common_1.Post)('Addfarmer'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_m = typeof update_dto_1.UpdateDto !== "undefined" && update_dto_1.UpdateDto) === "function" ? _m : Object]),
    __metadata("design:returntype", typeof (_o = typeof Promise !== "undefined" && Promise) === "function" ? _o : Object)
], CooperativeController.prototype, "Addfarmer", null);
__decorate([
    (0, common_1.Post)('Removefarmer'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_p = typeof Promise !== "undefined" && Promise) === "function" ? _p : Object)
], CooperativeController.prototype, "Removefarmer", null);
CooperativeController = __decorate([
    (0, common_1.Controller)('cooperative'),
    (0, swagger_1.ApiTags)('cooperative'),
    __metadata("design:paramtypes", [typeof (_a = typeof cooperative_service_1.CooperativeService !== "undefined" && cooperative_service_1.CooperativeService) === "function" ? _a : Object])
], CooperativeController);
exports.CooperativeController = CooperativeController;


/***/ }),

/***/ "./apps/extension-worker/src/cooperative/cooperative.module.ts":
/*!*********************************************************************!*\
  !*** ./apps/extension-worker/src/cooperative/cooperative.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CooperativeModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cooperative_controller_1 = __webpack_require__(/*! ./cooperative.controller */ "./apps/extension-worker/src/cooperative/cooperative.controller.ts");
const cooperative_service_1 = __webpack_require__(/*! ./cooperative.service */ "./apps/extension-worker/src/cooperative/cooperative.service.ts");
const db_service_1 = __webpack_require__(/*! @app/lib/db/db.service */ "./libs/lib/src/db/db.service.ts");
let CooperativeModule = class CooperativeModule {
};
CooperativeModule = __decorate([
    (0, common_1.Module)({
        controllers: [cooperative_controller_1.CooperativeController],
        providers: [cooperative_service_1.CooperativeService, db_service_1.DbService]
    })
], CooperativeModule);
exports.CooperativeModule = CooperativeModule;


/***/ }),

/***/ "./apps/extension-worker/src/cooperative/cooperative.service.ts":
/*!**********************************************************************!*\
  !*** ./apps/extension-worker/src/cooperative/cooperative.service.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CooperativeService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const db_service_1 = __webpack_require__(/*! @app/lib/db/db.service */ "./libs/lib/src/db/db.service.ts");
let CooperativeService = class CooperativeService {
    constructor(db) {
        this.db = db;
    }
    async CreateCooperative(data) {
        try {
            let lga = await this.db.localGovernment.create({
                data: {
                    name: data['name'],
                },
            });
            let query = await this.db.cooperative.create({
                data: {
                    workerProfileId: data['workerProfileId'],
                    localGovernmentId: lga['id'],
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async FindByid(data) {
        try {
            let query = await this.db.cooperative.findFirstOrThrow({
                where: {
                    id: data['properties']['id'],
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async FindByworkerProfileId(data) {
        try {
            let query = await this.db.cooperative.findFirstOrThrow({
                where: {
                    id: data['properties']['workerProfileId'],
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async UpdateProperty(data) {
        try {
            let query = data['properties']['localGovernmentId'] !== undefined
                ? await this.db.cooperative.update({
                    where: {
                        id: data['properties']['id'],
                    },
                    data: {
                        localGovernmentId: data['properties']['localGovernmentId'],
                    },
                })
                : data['properties']['workerProfileId'] !== undefined
                    ? await this.db.cooperative.update({
                        where: {
                            id: data['properties']['id'],
                        },
                        data: {
                            localGovernmentId: data['properties']['workerProfileId'],
                        },
                    })
                    : new common_1.BadRequestException('pass in a valid prop');
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async Getfarmers(data) {
        try {
            let query = await this.db.farmerProfile.findMany({
                where: {
                    cooperativeId: data['properties']['id'],
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async Addfarmer(data) {
        try {
            let query = await this.db.cooperative.update({
                where: {
                    id: data['properties']['id'],
                },
                data: {
                    farmers: {
                        connect: {
                            id: data['properties']['farmerProfileId'],
                        },
                    },
                },
            });
            let farmers = await this.db.farmerProfile.findMany({
                where: {
                    cooperativeId: query['id'],
                },
            });
            return farmers;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async Removefarmer(data) {
        try {
            let cooperative = await this.db.cooperative.findFirstOrThrow({
                where: {
                    id: data['properties']['workerProfileId'],
                },
            });
            let query = await this.db.cooperative.update({
                where: {
                    id: cooperative['id'],
                },
                data: {
                    farmers: {
                        disconnect: {
                            id: data['properties']['farmerProfileId'],
                        },
                    },
                },
            });
            return cooperative;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
};
CooperativeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof db_service_1.DbService !== "undefined" && db_service_1.DbService) === "function" ? _a : Object])
], CooperativeService);
exports.CooperativeService = CooperativeService;


/***/ }),

/***/ "./apps/extension-worker/src/cooperative/dto/dto.ts":
/*!**********************************************************!*\
  !*** ./apps/extension-worker/src/cooperative/dto/dto.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./apps/extension-worker/src/cooperative/dto/find_dto.ts":
/*!***************************************************************!*\
  !*** ./apps/extension-worker/src/cooperative/dto/find_dto.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./apps/extension-worker/src/cooperative/dto/update_dto.ts":
/*!*****************************************************************!*\
  !*** ./apps/extension-worker/src/cooperative/dto/update_dto.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./apps/extension-worker/src/crop/crop.controller.ts":
/*!***********************************************************!*\
  !*** ./apps/extension-worker/src/crop/crop.controller.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CropController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let CropController = class CropController {
};
CropController = __decorate([
    (0, common_1.Controller)('crop'),
    (0, swagger_1.ApiTags)('crop')
], CropController);
exports.CropController = CropController;


/***/ }),

/***/ "./apps/extension-worker/src/crop/crop.module.ts":
/*!*******************************************************!*\
  !*** ./apps/extension-worker/src/crop/crop.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CropModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const crop_controller_1 = __webpack_require__(/*! ./crop.controller */ "./apps/extension-worker/src/crop/crop.controller.ts");
let CropModule = class CropModule {
};
CropModule = __decorate([
    (0, common_1.Module)({
        controllers: [crop_controller_1.CropController]
    })
], CropModule);
exports.CropModule = CropModule;


/***/ }),

/***/ "./apps/extension-worker/src/extension-worker/extension-worker.controller.ts":
/*!***********************************************************************************!*\
  !*** ./apps/extension-worker/src/extension-worker/extension-worker.controller.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExtensionWorkerController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const login_auth_dto_1 = __webpack_require__(/*! @app/lib/auth/dto/login-auth.dto */ "./libs/lib/src/auth/dto/login-auth.dto.ts");
const dto_1 = __webpack_require__(/*! apps/farmer/src/farmer/dto/dto */ "./apps/farmer/src/farmer/dto/dto.ts");
const find_dto_1 = __webpack_require__(/*! apps/farmer/src/farmer/dto/find.dto */ "./apps/farmer/src/farmer/dto/find.dto.ts");
const worker_service_1 = __webpack_require__(/*! ./worker.service */ "./apps/extension-worker/src/extension-worker/worker.service.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const extension_worker_guard_1 = __webpack_require__(/*! @app/lib/auth/extension-worker.guard */ "./libs/lib/src/auth/extension-worker.guard.ts");
let ExtensionWorkerController = class ExtensionWorkerController {
    constructor(worker) {
        this.worker = worker;
    }
    UpdatePassword(data) {
        return this.worker.UpdatePassword(data);
    }
    FindById(data) {
        return this.worker.FindById(data);
    }
    FindByPhone_Number(data) {
        return this.worker.FindByPhone_Number(data);
    }
    FindByFirst_name(data) {
        return this.worker.FindByFirst_name(data);
    }
    UpdateFirstName(data) {
        return this.worker.UpdateFirstName(data);
    }
    UpdateLastName(data) {
        return this.worker.UpdateLastName(data);
    }
    UpdatePhoneNumber(data) {
        return this.worker.UpdatePhoneNumber(data);
    }
    CreateResource(data) {
        throw new Error('Method not implemented.');
    }
    FindByEmail(data) {
        return this.worker.FindByEmail(data);
    }
    SignOut() {
        return this.worker.SignOut();
    }
};
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.UpdateDto !== "undefined" && dto_1.UpdateDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], ExtensionWorkerController.prototype, "UpdatePassword", null);
__decorate([
    (0, common_1.Post)('FindById'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], ExtensionWorkerController.prototype, "FindById", null);
__decorate([
    (0, common_1.Post)('FindByPhone_Number'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], ExtensionWorkerController.prototype, "FindByPhone_Number", null);
__decorate([
    (0, common_1.Post)('FindByFirst_name'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _h : Object]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], ExtensionWorkerController.prototype, "FindByFirst_name", null);
__decorate([
    (0, common_1.Post)('UpdateFirstName'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof dto_1.UpdateDto !== "undefined" && dto_1.UpdateDto) === "function" ? _k : Object]),
    __metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], ExtensionWorkerController.prototype, "UpdateFirstName", null);
__decorate([
    (0, common_1.Post)('UpdateLastName'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_m = typeof dto_1.UpdateDto !== "undefined" && dto_1.UpdateDto) === "function" ? _m : Object]),
    __metadata("design:returntype", typeof (_o = typeof Promise !== "undefined" && Promise) === "function" ? _o : Object)
], ExtensionWorkerController.prototype, "UpdateLastName", null);
__decorate([
    (0, common_1.Post)('UpdatePhoneNumber'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_p = typeof dto_1.UpdateDto !== "undefined" && dto_1.UpdateDto) === "function" ? _p : Object]),
    __metadata("design:returntype", typeof (_q = typeof Promise !== "undefined" && Promise) === "function" ? _q : Object)
], ExtensionWorkerController.prototype, "UpdatePhoneNumber", null);
__decorate([
    (0, common_1.Post)('FindByEmail'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_r = typeof login_auth_dto_1.ValidationDto !== "undefined" && login_auth_dto_1.ValidationDto) === "function" ? _r : Object]),
    __metadata("design:returntype", typeof (_s = typeof Promise !== "undefined" && Promise) === "function" ? _s : Object)
], ExtensionWorkerController.prototype, "FindByEmail", null);
ExtensionWorkerController = __decorate([
    (0, common_1.Controller)('extension-worker'),
    (0, swagger_1.ApiTags)('Extension Worker'),
    (0, common_1.UseGuards)(extension_worker_guard_1.ExtensionWorkerGuard),
    __metadata("design:paramtypes", [typeof (_a = typeof worker_service_1.WorkerService !== "undefined" && worker_service_1.WorkerService) === "function" ? _a : Object])
], ExtensionWorkerController);
exports.ExtensionWorkerController = ExtensionWorkerController;


/***/ }),

/***/ "./apps/extension-worker/src/extension-worker/extension-worker.module.ts":
/*!*******************************************************************************!*\
  !*** ./apps/extension-worker/src/extension-worker/extension-worker.module.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExtensionWorkerModule = void 0;
const auth_controller_1 = __webpack_require__(/*! @app/lib/auth/auth.controller */ "./libs/lib/src/auth/auth.controller.ts");
const auth_service_1 = __webpack_require__(/*! @app/lib/auth/auth.service */ "./libs/lib/src/auth/auth.service.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const admin_service_1 = __webpack_require__(/*! apps/admin/src/admin/admin.service */ "./apps/admin/src/admin/admin.service.ts");
const farmer_service_1 = __webpack_require__(/*! apps/farmer/src/farmer/farmer.service */ "./apps/farmer/src/farmer/farmer.service.ts");
const worker_service_1 = __webpack_require__(/*! ./worker.service */ "./apps/extension-worker/src/extension-worker/worker.service.ts");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const db_service_1 = __webpack_require__(/*! @app/lib/db/db.service */ "./libs/lib/src/db/db.service.ts");
const extension_worker_controller_1 = __webpack_require__(/*! ./extension-worker.controller */ "./apps/extension-worker/src/extension-worker/extension-worker.controller.ts");
const Intervention_module_1 = __webpack_require__(/*! ../Intervention/Intervention.module */ "./apps/extension-worker/src/Intervention/Intervention.module.ts");
const cooperative_module_1 = __webpack_require__(/*! ../cooperative/cooperative.module */ "./apps/extension-worker/src/cooperative/cooperative.module.ts");
const crop_module_1 = __webpack_require__(/*! ../crop/crop.module */ "./apps/extension-worker/src/crop/crop.module.ts");
const milestone_module_1 = __webpack_require__(/*! ../milestone/milestone.module */ "./apps/extension-worker/src/milestone/milestone.module.ts");
const profile_module_1 = __webpack_require__(/*! ../profile/profile.module */ "./apps/extension-worker/src/profile/profile.module.ts");
const project_module_1 = __webpack_require__(/*! ../project/project.module */ "./apps/extension-worker/src/project/project.module.ts");
const report_module_1 = __webpack_require__(/*! ../report/report.module */ "./apps/extension-worker/src/report/report.module.ts");
const project_controller_1 = __webpack_require__(/*! ../project/project.controller */ "./apps/extension-worker/src/project/project.controller.ts");
const milestone_controller_1 = __webpack_require__(/*! ../milestone/milestone.controller */ "./apps/extension-worker/src/milestone/milestone.controller.ts");
const cooperative_controller_1 = __webpack_require__(/*! ../cooperative/cooperative.controller */ "./apps/extension-worker/src/cooperative/cooperative.controller.ts");
const farmer_controller_1 = __webpack_require__(/*! apps/farmer/src/farmer/farmer.controller */ "./apps/farmer/src/farmer/farmer.controller.ts");
const milestone_service_1 = __webpack_require__(/*! ../milestone/milestone.service */ "./apps/extension-worker/src/milestone/milestone.service.ts");
const challenge_module_1 = __webpack_require__(/*! ../challenge/challenge.module */ "./apps/extension-worker/src/challenge/challenge.module.ts");
const cooperative_service_1 = __webpack_require__(/*! ../cooperative/cooperative.service */ "./apps/extension-worker/src/cooperative/cooperative.service.ts");
const project_service_1 = __webpack_require__(/*! ../project/project.service */ "./apps/extension-worker/src/project/project.service.ts");
const profile_service_1 = __webpack_require__(/*! ../profile/profile.service */ "./apps/extension-worker/src/profile/profile.service.ts");
let ExtensionWorkerModule = class ExtensionWorkerModule {
};
ExtensionWorkerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            Intervention_module_1.InterventionModule,
            cooperative_module_1.CooperativeModule,
            crop_module_1.CropModule,
            milestone_module_1.MilestoneModule,
            project_module_1.ProjectModule,
            report_module_1.ReportModule,
            profile_module_1.ProfileModule,
            challenge_module_1.ChallengeModule,
            Intervention_module_1.InterventionModule
        ],
        controllers: [
            auth_controller_1.AuthController,
            extension_worker_controller_1.ExtensionWorkerController,
            milestone_controller_1.MilestoneController,
            cooperative_controller_1.CooperativeController,
            farmer_controller_1.FarmerController,
            project_controller_1.ProjectController,
        ],
        providers: [
            auth_service_1.AuthService,
            farmer_service_1.FarmerService,
            admin_service_1.AdminService,
            worker_service_1.WorkerService,
            jwt_1.JwtService,
            db_service_1.DbService,
            milestone_service_1.MilestoneService,
            cooperative_service_1.CooperativeService,
            project_service_1.ProjectService,
            profile_service_1.ProfileService
        ],
    })
], ExtensionWorkerModule);
exports.ExtensionWorkerModule = ExtensionWorkerModule;


/***/ }),

/***/ "./apps/extension-worker/src/extension-worker/worker.service.ts":
/*!**********************************************************************!*\
  !*** ./apps/extension-worker/src/extension-worker/worker.service.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkerService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const db_service_1 = __webpack_require__(/*! @app/lib/db/db.service */ "./libs/lib/src/db/db.service.ts");
let WorkerService = class WorkerService {
    constructor(db) {
        this.db = db;
    }
    async UpdateFirstName(data) {
        try {
            const user = await this.db.user.update({
                where: {
                    id: data['id'],
                    type: 'EXTENSION_WORKER',
                },
                data: {
                    first_name: data['new_value'],
                },
            });
            return user;
        }
        catch (error) {
            return error;
        }
    }
    async UpdateLastName(data) {
        try {
            const user = await this.db.user.update({
                where: {
                    id: data['id'],
                    type: 'EXTENSION_WORKER',
                },
                data: {
                    last_name: data['new_value'],
                },
            });
            return user;
        }
        catch (error) {
            return error;
        }
    }
    async UpdatePhoneNumber(data) {
        try {
            const user = await this.db.user.update({
                where: {
                    id: data['id'],
                    type: 'EXTENSION_WORKER',
                },
                data: {
                    phone_number: data['new_value'],
                },
            });
            return user;
        }
        catch (error) {
            return error;
        }
    }
    async FindById(data) {
        try {
            const user = await this.db.user.findFirstOrThrow({
                where: {
                    id: data['id'],
                    type: 'EXTENSION_WORKER',
                },
            });
            return user;
        }
        catch (error) {
            return error;
        }
    }
    async FindByPhone_Number(data) {
        try {
            const user = await this.db.user.findFirstOrThrow({
                where: {
                    id: data['id'],
                    type: 'EXTENSION_WORKER',
                    phone_number: data['property'],
                },
            });
            return user;
        }
        catch (error) {
            return error;
        }
    }
    async FindByFirst_name(data) {
        try {
            const user = await this.db.user.findFirstOrThrow({
                where: {
                    id: data['id'],
                    type: 'EXTENSION_WORKER',
                    first_name: data['property'],
                },
            });
            return user;
        }
        catch (error) {
            return error;
        }
    }
    async UpdatePassword(data) {
        try {
            const user = await this.db.user.update({
                where: {
                    email: data['property'],
                    type: 'EXTENSION_WORKER',
                },
                data: {
                    password: data['new_value'],
                },
            });
            return user;
        }
        catch (error) {
            return error;
        }
    }
    async CreateResource(data) {
        try {
            const user = await this.db.user.create({
                data: {
                    email: data['email'],
                    first_name: data['first_name'],
                    last_name: data['last_name'],
                    password: data['password'],
                    phone_number: data['phone_number'],
                    type: 'EXTENSION_WORKER',
                },
            });
            return user;
        }
        catch (error) {
            return error;
        }
    }
    SignOut() {
        throw new Error('Method not implemented.');
    }
    async FindByEmail(data) {
        try {
            const user = await this.db.user.findFirstOrThrow({
                where: {
                    email: data['property'],
                    type: 'EXTENSION_WORKER',
                },
            });
            return user;
        }
        catch (error) {
            console.log(error);
        }
    }
};
WorkerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof db_service_1.DbService !== "undefined" && db_service_1.DbService) === "function" ? _a : Object])
], WorkerService);
exports.WorkerService = WorkerService;


/***/ }),

/***/ "./apps/extension-worker/src/milestone/dto/dto.ts":
/*!********************************************************!*\
  !*** ./apps/extension-worker/src/milestone/dto/dto.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateMilestoneDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class CreateMilestoneDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], CreateMilestoneDto.prototype, "Farmers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateMilestoneDto.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateMilestoneDto.prototype, "start_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateMilestoneDto.prototype, "end_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateMilestoneDto.prototype, "recommendationId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateMilestoneDto.prototype, "projectId", void 0);
exports.CreateMilestoneDto = CreateMilestoneDto;


/***/ }),

/***/ "./apps/extension-worker/src/milestone/dto/find_dto.ts":
/*!*************************************************************!*\
  !*** ./apps/extension-worker/src/milestone/dto/find_dto.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindDto = void 0;
class FindDto {
}
exports.FindDto = FindDto;


/***/ }),

/***/ "./apps/extension-worker/src/milestone/dto/update_dto.ts":
/*!***************************************************************!*\
  !*** ./apps/extension-worker/src/milestone/dto/update_dto.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateDto = void 0;
class UpdateDto {
}
exports.UpdateDto = UpdateDto;


/***/ }),

/***/ "./apps/extension-worker/src/milestone/milestone.controller.ts":
/*!*********************************************************************!*\
  !*** ./apps/extension-worker/src/milestone/milestone.controller.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MilestoneController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const find_dto_1 = __webpack_require__(/*! ./dto/find_dto */ "./apps/extension-worker/src/milestone/dto/find_dto.ts");
const update_dto_1 = __webpack_require__(/*! ./dto/update_dto */ "./apps/extension-worker/src/milestone/dto/update_dto.ts");
const dto_1 = __webpack_require__(/*! ./dto/dto */ "./apps/extension-worker/src/milestone/dto/dto.ts");
const milestone_service_1 = __webpack_require__(/*! ./milestone.service */ "./apps/extension-worker/src/milestone/milestone.service.ts");
let MilestoneController = class MilestoneController {
    constructor(milestone) {
        this.milestone = milestone;
    }
    CreateMilestone(data) {
        return this.milestone.CreateMilestone(data);
    }
    FindByid(data) {
        return this.milestone.FindByid(data);
    }
    GetFarmers(data) {
        return this.milestone.GetFarmers(data);
    }
    AddFarmers(data) {
        return this.milestone.AddFarmers(data);
    }
    RemoveFarmers(data) {
        return this.milestone.RemoveFarmers(data);
    }
    FindBytext(data) {
        return this.milestone.FindBytext(data);
    }
    FindByisAchieved(data) {
        return this.milestone.FindByisAchieved(data);
    }
    FindByrecommendationId(data) {
        return this.milestone.FindByrecommendationId(data);
    }
    FindByprojectId(data) {
        return this.milestone.FindByprojectId(data);
    }
    UpdateProperty(data) {
        return this.milestone.UpdateProperty(data);
    }
};
__decorate([
    (0, common_1.Post)('CreateMilestone'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.CreateMilestoneDto !== "undefined" && dto_1.CreateMilestoneDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], MilestoneController.prototype, "CreateMilestone", null);
__decorate([
    (0, common_1.Post)('FindByid'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], MilestoneController.prototype, "FindByid", null);
__decorate([
    (0, common_1.Post)('GetFarmers'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], MilestoneController.prototype, "GetFarmers", null);
__decorate([
    (0, common_1.Post)('AddFarmers'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof update_dto_1.UpdateDto !== "undefined" && update_dto_1.UpdateDto) === "function" ? _h : Object]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], MilestoneController.prototype, "AddFarmers", null);
__decorate([
    (0, common_1.Post)('RemoveFarmers'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof update_dto_1.UpdateDto !== "undefined" && update_dto_1.UpdateDto) === "function" ? _k : Object]),
    __metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], MilestoneController.prototype, "RemoveFarmers", null);
__decorate([
    (0, common_1.Post)('FindBytext'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_m = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _m : Object]),
    __metadata("design:returntype", typeof (_o = typeof Promise !== "undefined" && Promise) === "function" ? _o : Object)
], MilestoneController.prototype, "FindBytext", null);
__decorate([
    (0, common_1.Post)('FindByisAchieved'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_p = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _p : Object]),
    __metadata("design:returntype", typeof (_q = typeof Promise !== "undefined" && Promise) === "function" ? _q : Object)
], MilestoneController.prototype, "FindByisAchieved", null);
__decorate([
    (0, common_1.Post)('FindByrecommendationId'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_r = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _r : Object]),
    __metadata("design:returntype", typeof (_s = typeof Promise !== "undefined" && Promise) === "function" ? _s : Object)
], MilestoneController.prototype, "FindByrecommendationId", null);
__decorate([
    (0, common_1.Post)('FindByprojectId'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_t = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _t : Object]),
    __metadata("design:returntype", typeof (_u = typeof Promise !== "undefined" && Promise) === "function" ? _u : Object)
], MilestoneController.prototype, "FindByprojectId", null);
__decorate([
    (0, common_1.Post)('UpdateProperty'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_v = typeof update_dto_1.UpdateDto !== "undefined" && update_dto_1.UpdateDto) === "function" ? _v : Object]),
    __metadata("design:returntype", typeof (_w = typeof Promise !== "undefined" && Promise) === "function" ? _w : Object)
], MilestoneController.prototype, "UpdateProperty", null);
MilestoneController = __decorate([
    (0, common_1.Controller)('milestone'),
    (0, swagger_1.ApiTags)('milestone'),
    __metadata("design:paramtypes", [typeof (_a = typeof milestone_service_1.MilestoneService !== "undefined" && milestone_service_1.MilestoneService) === "function" ? _a : Object])
], MilestoneController);
exports.MilestoneController = MilestoneController;


/***/ }),

/***/ "./apps/extension-worker/src/milestone/milestone.module.ts":
/*!*****************************************************************!*\
  !*** ./apps/extension-worker/src/milestone/milestone.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MilestoneModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const milestone_controller_1 = __webpack_require__(/*! ./milestone.controller */ "./apps/extension-worker/src/milestone/milestone.controller.ts");
const milestone_service_1 = __webpack_require__(/*! ./milestone.service */ "./apps/extension-worker/src/milestone/milestone.service.ts");
const db_service_1 = __webpack_require__(/*! @app/lib/db/db.service */ "./libs/lib/src/db/db.service.ts");
let MilestoneModule = class MilestoneModule {
};
MilestoneModule = __decorate([
    (0, common_1.Module)({
        controllers: [milestone_controller_1.MilestoneController],
        providers: [milestone_service_1.MilestoneService, db_service_1.DbService]
    })
], MilestoneModule);
exports.MilestoneModule = MilestoneModule;


/***/ }),

/***/ "./apps/extension-worker/src/milestone/milestone.service.ts":
/*!******************************************************************!*\
  !*** ./apps/extension-worker/src/milestone/milestone.service.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MilestoneService = void 0;
const db_service_1 = __webpack_require__(/*! @app/lib/db/db.service */ "./libs/lib/src/db/db.service.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let MilestoneService = class MilestoneService {
    constructor(db) {
        this.db = db;
    }
    async CreateMilestone(data) {
        try {
            let query = await this.db.milestone.create({
                data: {
                    end_date: data['end_date'],
                    isAchieved: false,
                    start_date: data['start_date'],
                    text: data['text'],
                },
            });
            data['Farmers'].forEach(async (farmer) => {
                await this.db.milestone.update({
                    where: {
                        id: query['id'],
                    },
                    data: {
                        farmerProfile: {
                            push: farmer,
                        },
                    },
                });
            });
            return query;
        }
        catch (error) { }
    }
    async FindByid(data) {
        try {
            let query = await this.db.milestone.findUniqueOrThrow({
                where: {
                    id: data['id'],
                },
            });
            return query;
        }
        catch (error) { }
    }
    async GetFarmers(data) {
        try {
            let query = await this.db.farmerProfile.findMany({
                where: {
                    milestoneId: data['property']['milestone_id'],
                },
            });
            return query;
        }
        catch (error) { }
    }
    async AddFarmers(data) {
        try {
            let query = await this.db.milestone.update({
                data: {
                    Farmer: {
                        connect: {
                            id: data['property']['farmer_id'],
                        },
                    },
                },
                where: {
                    id: data['id'],
                },
            });
            return query;
        }
        catch (error) { }
    }
    async RemoveFarmers(data) {
        try {
            let query = await this.db.milestone.update({
                data: {
                    Farmer: {
                        disconnect: {
                            id: data['property']['farmer_id'],
                        },
                    },
                },
                where: {
                    id: data['id'],
                },
            });
            return query;
        }
        catch (error) { }
    }
    async FindBytext(data) {
        try {
            let query = await this.db.milestone.findFirstOrThrow({
                where: {
                    text: data['property']['text'],
                },
            });
            return query;
        }
        catch (error) { }
    }
    async FindByisAchieved(data) {
        try {
            let query = await this.db.milestone.findFirstOrThrow({
                where: {
                    isAchieved: data['property']['isAchieved'],
                },
            });
            return query;
        }
        catch (error) { }
    }
    async FindByrecommendationId(data) {
        try {
            let query = await this.db.milestone.findFirstOrThrow({
                where: {
                    recommendationId: data['property']['recommendationId'],
                },
            });
            return query;
        }
        catch (error) { }
    }
    async FindByprojectId(data) {
        try {
            let query = await this.db.milestone.findFirstOrThrow({
                where: {
                    recommendationId: data['property']['recommendationId'],
                },
            });
            return query;
        }
        catch (error) { }
    }
    async UpdateProperty(data) {
        try {
            let query = data['new_value']['start_date'] !== undefined
                ? await this.db.milestone.update({
                    data: {
                        start_date: data['new_value']['start_date'],
                    },
                    where: {
                        id: data['id'],
                    },
                })
                : data['new_value']['end_date'] !== undefined
                    ? await this.db.milestone.update({
                        data: {
                            end_date: data['new_value']['end_date'],
                        },
                        where: {
                            id: data['id'],
                        },
                    })
                    : data['new_value']['text'] !== undefined
                        ? await this.db.milestone.update({
                            data: {
                                text: data['new_value']['text'],
                            },
                            where: {
                                id: data['id'],
                            },
                        })
                        : data['new_value']['isAchieved'] !== undefined
                            ? await this.db.milestone.update({
                                data: {
                                    isAchieved: data['new_value']['isAchieved'],
                                },
                                where: {
                                    id: data['id'],
                                },
                            })
                            : new common_1.BadRequestException('pass in a valid property');
            return query;
        }
        catch (error) {
            return error;
        }
    }
};
MilestoneService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof db_service_1.DbService !== "undefined" && db_service_1.DbService) === "function" ? _a : Object])
], MilestoneService);
exports.MilestoneService = MilestoneService;


/***/ }),

/***/ "./apps/extension-worker/src/profile/dto/dto.ts":
/*!******************************************************!*\
  !*** ./apps/extension-worker/src/profile/dto/dto.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateProfileDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
class CreateProfileDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreateProfileDto.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: client_1.Gender,
    }),
    __metadata("design:type", typeof (_a = typeof client_1.Gender !== "undefined" && client_1.Gender) === "function" ? _a : Object)
], CreateProfileDto.prototype, "sex", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "birthday", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: client_1.Religion,
    }),
    __metadata("design:type", typeof (_b = typeof client_1.Religion !== "undefined" && client_1.Religion) === "function" ? _b : Object)
], CreateProfileDto.prototype, "religion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: client_1.Marital,
    }),
    __metadata("design:type", typeof (_c = typeof client_1.Marital !== "undefined" && client_1.Marital) === "function" ? _c : Object)
], CreateProfileDto.prototype, "maritalStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'the id of the base user',
    }),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "about", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", typeof (_d = typeof Buffer !== "undefined" && Buffer) === "function" ? _d : Object)
], CreateProfileDto.prototype, "photo", void 0);
exports.CreateProfileDto = CreateProfileDto;


/***/ }),

/***/ "./apps/extension-worker/src/profile/dto/find_dto.ts":
/*!***********************************************************!*\
  !*** ./apps/extension-worker/src/profile/dto/find_dto.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
class FindDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FindDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: client_1.UserType,
    }),
    __metadata("design:type", typeof (_a = typeof client_1.UserType !== "undefined" && client_1.UserType) === "function" ? _a : Object)
], FindDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], FindDto.prototype, "property", void 0);
exports.FindDto = FindDto;


/***/ }),

/***/ "./apps/extension-worker/src/profile/dto/update_dto.ts":
/*!*************************************************************!*\
  !*** ./apps/extension-worker/src/profile/dto/update_dto.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
class UpdateDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: client_1.UserType,
    }),
    __metadata("design:type", typeof (_a = typeof client_1.UserType !== "undefined" && client_1.UserType) === "function" ? _a : Object)
], UpdateDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], UpdateDto.prototype, "new_value", void 0);
exports.UpdateDto = UpdateDto;


/***/ }),

/***/ "./apps/extension-worker/src/profile/profile.controller.ts":
/*!*****************************************************************!*\
  !*** ./apps/extension-worker/src/profile/profile.controller.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProfileController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const dto_1 = __webpack_require__(/*! ../cooperative/dto/dto */ "./apps/extension-worker/src/cooperative/dto/dto.ts");
const dto_2 = __webpack_require__(/*! ../project/dto/dto */ "./apps/extension-worker/src/project/dto/dto.ts");
const dto_3 = __webpack_require__(/*! ../report/dto/dto */ "./apps/extension-worker/src/report/dto/dto.ts");
const dto_4 = __webpack_require__(/*! ./dto/dto */ "./apps/extension-worker/src/profile/dto/dto.ts");
const find_dto_1 = __webpack_require__(/*! ./dto/find_dto */ "./apps/extension-worker/src/profile/dto/find_dto.ts");
const update_dto_1 = __webpack_require__(/*! ./dto/update_dto */ "./apps/extension-worker/src/profile/dto/update_dto.ts");
const profile_service_1 = __webpack_require__(/*! ./profile.service */ "./apps/extension-worker/src/profile/profile.service.ts");
let ProfileController = class ProfileController {
    constructor(profile) {
        this.profile = profile;
    }
    Getreports(data) {
        throw new Error('Method not implemented.');
    }
    Addreport(data) {
        throw new Error('Method not implemented.');
    }
    CreateProfile(data) {
        throw new Error('Method not implemented.');
    }
    Getprojects(data) {
        throw new Error('Method not implemented.');
    }
    GetCooperative(data) {
        throw new Error('Method not implemented.');
    }
    Addproject(data) {
        throw new Error('Method not implemented.');
    }
    AddCooperative(data) {
        throw new Error('Method not implemented.');
    }
    Removeproject(data) {
        throw new Error('Method not implemented.');
    }
    Removereport(data) {
        throw new Error('Method not implemented.');
    }
    RemoveCooperative(data) {
        throw new Error('Method not implemented.');
    }
    findByUserId(data) {
        throw new Error('Method not implemented.');
    }
    UpdateProperty(data) {
        return this.profile.UpdateProperty(data);
    }
};
__decorate([
    (0, common_1.Post)('Getreports'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], ProfileController.prototype, "Getreports", null);
__decorate([
    (0, common_1.Post)('Addreport'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof dto_3.CreateReportDto !== "undefined" && dto_3.CreateReportDto) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], ProfileController.prototype, "Addreport", null);
__decorate([
    (0, common_1.Post)('CreateProfile'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof dto_4.CreateProfileDto !== "undefined" && dto_4.CreateProfileDto) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], ProfileController.prototype, "CreateProfile", null);
__decorate([
    (0, common_1.Post)('Getprojects'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _h : Object]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], ProfileController.prototype, "Getprojects", null);
__decorate([
    (0, common_1.Post)('GetCooperative'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _k : Object]),
    __metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], ProfileController.prototype, "GetCooperative", null);
__decorate([
    (0, common_1.Post)('Addproject'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_m = typeof dto_2.CreateProjectDto !== "undefined" && dto_2.CreateProjectDto) === "function" ? _m : Object]),
    __metadata("design:returntype", typeof (_o = typeof Promise !== "undefined" && Promise) === "function" ? _o : Object)
], ProfileController.prototype, "Addproject", null);
__decorate([
    (0, common_1.Post)('AddCooperative'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_p = typeof dto_1.CreateCooperativeDto !== "undefined" && dto_1.CreateCooperativeDto) === "function" ? _p : Object]),
    __metadata("design:returntype", typeof (_q = typeof Promise !== "undefined" && Promise) === "function" ? _q : Object)
], ProfileController.prototype, "AddCooperative", null);
__decorate([
    (0, common_1.Post)('Removeproject'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_r = typeof update_dto_1.UpdateDto !== "undefined" && update_dto_1.UpdateDto) === "function" ? _r : Object]),
    __metadata("design:returntype", typeof (_s = typeof Promise !== "undefined" && Promise) === "function" ? _s : Object)
], ProfileController.prototype, "Removeproject", null);
__decorate([
    (0, common_1.Post)('Removereport'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_t = typeof update_dto_1.UpdateDto !== "undefined" && update_dto_1.UpdateDto) === "function" ? _t : Object]),
    __metadata("design:returntype", typeof (_u = typeof Promise !== "undefined" && Promise) === "function" ? _u : Object)
], ProfileController.prototype, "Removereport", null);
__decorate([
    (0, common_1.Post)('RemoveCooperative'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_v = typeof update_dto_1.UpdateDto !== "undefined" && update_dto_1.UpdateDto) === "function" ? _v : Object]),
    __metadata("design:returntype", typeof (_w = typeof Promise !== "undefined" && Promise) === "function" ? _w : Object)
], ProfileController.prototype, "RemoveCooperative", null);
__decorate([
    (0, common_1.Post)('findByUserId'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_x = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _x : Object]),
    __metadata("design:returntype", typeof (_y = typeof Promise !== "undefined" && Promise) === "function" ? _y : Object)
], ProfileController.prototype, "findByUserId", null);
__decorate([
    (0, common_1.Post)('UpdateProperty'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_z = typeof update_dto_1.UpdateDto !== "undefined" && update_dto_1.UpdateDto) === "function" ? _z : Object]),
    __metadata("design:returntype", typeof (_0 = typeof Promise !== "undefined" && Promise) === "function" ? _0 : Object)
], ProfileController.prototype, "UpdateProperty", null);
ProfileController = __decorate([
    (0, common_1.Controller)('profile'),
    (0, swagger_1.ApiTags)('profile'),
    __metadata("design:paramtypes", [typeof (_a = typeof profile_service_1.ProfileService !== "undefined" && profile_service_1.ProfileService) === "function" ? _a : Object])
], ProfileController);
exports.ProfileController = ProfileController;


/***/ }),

/***/ "./apps/extension-worker/src/profile/profile.module.ts":
/*!*************************************************************!*\
  !*** ./apps/extension-worker/src/profile/profile.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProfileModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const profile_controller_1 = __webpack_require__(/*! ./profile.controller */ "./apps/extension-worker/src/profile/profile.controller.ts");
const profile_service_1 = __webpack_require__(/*! ./profile.service */ "./apps/extension-worker/src/profile/profile.service.ts");
const db_service_1 = __webpack_require__(/*! @app/lib/db/db.service */ "./libs/lib/src/db/db.service.ts");
let ProfileModule = class ProfileModule {
};
ProfileModule = __decorate([
    (0, common_1.Module)({
        controllers: [profile_controller_1.ProfileController],
        providers: [profile_service_1.ProfileService, db_service_1.DbService],
    })
], ProfileModule);
exports.ProfileModule = ProfileModule;


/***/ }),

/***/ "./apps/extension-worker/src/profile/profile.service.ts":
/*!**************************************************************!*\
  !*** ./apps/extension-worker/src/profile/profile.service.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProfileService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const db_service_1 = __webpack_require__(/*! @app/lib/db/db.service */ "./libs/lib/src/db/db.service.ts");
let ProfileService = class ProfileService {
    constructor(db) {
        this.db = db;
    }
    async CreateProfile(data) {
        try {
            let user = await this.db.user.findFirstOrThrow({
                where: {
                    id: data['userId'],
                },
            });
            let query = await this.db.workerProfile.create({
                data: {
                    address: data['address'],
                    age: data['age'],
                    birthday: data['birthday'],
                    maritalStatus: data['maritalStatus'],
                    religion: data['religion'],
                    sex: data['sex'],
                    User: {
                        connect: {
                            id: user.id,
                        },
                    },
                    about: data['about'],
                    photo: Buffer.from(data['photo']),
                },
            });
            return query;
        }
        catch (error) {
            new common_1.BadRequestException(error);
        }
    }
    async Getprojects(data) {
        try {
            let query = await this.db.project.findMany({
                where: {
                    workerProfileId: data['id'],
                },
            });
            return query;
        }
        catch (error) {
            new common_1.BadRequestException(error);
        }
    }
    async Getreports(data) {
        try {
            let query = await this.db.report.findMany({
                where: {
                    workerProfileId: data['id'],
                },
            });
            return query;
        }
        catch (error) {
            new common_1.BadRequestException(error);
        }
    }
    async GetCooperative(data) {
        try {
            let query = await this.db.cooperative.findMany({
                where: {
                    workerProfileId: data['id'],
                },
            });
            return query;
        }
        catch (error) {
            new common_1.BadRequestException(error);
        }
    }
    async Addproject(data) {
        try {
            let project = await this.db.project.create({
                data: {
                    status: 'ACTIVE',
                    end_date: data['end_date'],
                    start_date: data['start_date'],
                    type: data['type'],
                    workerProfileId: data['id'],
                },
            });
            for (let index = 0; index < data['farmer_ids'].length; index++) {
                const element = data['farmer_ids'][index];
                const pAddFarmers = await this.db.project.findFirstOrThrow({
                    where: {
                        id: project.id,
                    },
                });
                const conn = await this.db.project.update({
                    where: {
                        id: pAddFarmers.id,
                    },
                    data: {
                        participants: {
                            connect: {
                                id: element,
                            },
                        },
                    },
                });
            }
            return project;
        }
        catch (error) {
            new common_1.BadRequestException(error);
        }
    }
    async Addreport(data) {
        let query = await this.db.report.create({
            data: {},
        });
        throw new Error('Method not implemented.');
    }
    async AddCooperative(data) {
        try {
            let cooperative = await this.db.cooperative.create({
                data: {
                    localGovernmentId: data['localGovernmentId'],
                    workerProfileId: data['id'],
                },
            });
            for (let index = 0; index < data['farmer_ids'].length; index++) {
                const element = data['farmer_ids'][index];
                const pAddFarmers = await this.db.cooperative.findFirstOrThrow({
                    where: {
                        id: cooperative.id,
                    },
                });
                const conn = await this.db.cooperative.update({
                    where: {
                        id: pAddFarmers.id,
                    },
                    data: {
                        farmers: {
                            connect: {
                                id: element,
                            },
                        },
                    },
                });
            }
            return cooperative;
        }
        catch (error) {
            new common_1.BadRequestException(error);
        }
    }
    async Removeproject(data) {
        try {
            let query = await this.db.project.update({
                where: {
                    workerProfileId: data['id'],
                },
                data: {
                    participants: {
                        disconnect: {
                            id: data['new_value']['project_id'],
                        },
                    },
                },
            });
            return true;
        }
        catch (error) {
            new common_1.BadRequestException(error);
        }
    }
    async Removereport(data) {
        let query = await this.db.report.update({
            where: {
                workerProfileId: data['id'],
            },
            data: {},
        });
        return true;
    }
    async RemoveCooperative(data) {
        try {
            let query = await this.db.cooperative.update({
                where: {
                    workerProfileId: data['id'],
                },
                data: {
                    farmers: {
                        disconnect: {
                            id: data['new_value']['project_id'],
                        },
                    },
                },
            });
            return true;
        }
        catch (error) {
            new common_1.BadRequestException(error);
        }
    }
    async findByUserId(data) {
        try {
            let query = await this.db.workerProfile.findFirstOrThrow({
                where: {
                    User: {
                        every: {
                            id: data['property']['user_id'],
                        },
                    },
                },
            });
            return query;
        }
        catch (error) {
            new common_1.BadRequestException(error);
        }
    }
    async UpdateProperty(data) {
        console.log(data);
        try {
            let query = data['new_value']['about'] !== undefined
                ? await this.db.workerProfile.update({
                    where: {
                        id: data['id'],
                    },
                    data: {
                        about: data['new_value']['about'],
                    },
                })
                : data['new_value']['age'] !== undefined
                    ? await this.db.workerProfile.update({
                        where: {
                            id: data['id'],
                        },
                        data: {
                            age: data['new_value']['age'],
                        },
                    })
                    : data['new_value']['sex'] !== undefined
                        ? await this.db.workerProfile.update({
                            where: {
                                id: data['id'],
                            },
                            data: {
                                sex: data['new_value']['sex'],
                            },
                        })
                        : data['new_value']['birthday'] !== undefined
                            ? await this.db.workerProfile.update({
                                where: {
                                    id: data['id'],
                                },
                                data: {
                                    birthday: data['new_value']['birthday'],
                                },
                            })
                            : data['new_value']['address'] !== undefined
                                ? await this.db.workerProfile.update({
                                    where: {
                                        id: data['id'],
                                    },
                                    data: {
                                        address: data['new_value']['address'],
                                    },
                                })
                                : data['new_value']['religion'] !== undefined
                                    ? await this.db.workerProfile.update({
                                        where: {
                                            id: data['id'],
                                        },
                                        data: {
                                            religion: data['new_value']['religion'],
                                        },
                                    })
                                    : data['new_value']['religion'] !== undefined
                                        ? await this.db.workerProfile.update({
                                            where: {
                                                id: data['id'],
                                            },
                                            data: {
                                                religion: data['new_value']['religion'],
                                            },
                                        })
                                        : data['new_value']['maritalStatus'] !== undefined
                                            ? await this.db.workerProfile.update({
                                                where: {
                                                    id: data['id'],
                                                },
                                                data: {
                                                    maritalStatus: data['new_value']['maritalStatus'],
                                                },
                                            })
                                            : data['new_value']['photo'] !== undefined
                                                ? await this.db.workerProfile.update({
                                                    where: {
                                                        id: data['id'],
                                                    },
                                                    data: {
                                                        photo: Buffer.from(data['new_value']['maritalStatus']),
                                                    },
                                                })
                                                : new common_1.BadRequestException('specify a proper type to be updated');
            return query;
        }
        catch (error) {
            return error;
        }
    }
};
ProfileService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof db_service_1.DbService !== "undefined" && db_service_1.DbService) === "function" ? _a : Object])
], ProfileService);
exports.ProfileService = ProfileService;


/***/ }),

/***/ "./apps/extension-worker/src/project/dto/dto.ts":
/*!******************************************************!*\
  !*** ./apps/extension-worker/src/project/dto/dto.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateProjectDto = void 0;
class CreateProjectDto {
}
exports.CreateProjectDto = CreateProjectDto;


/***/ }),

/***/ "./apps/extension-worker/src/project/dto/find_dto.ts":
/*!***********************************************************!*\
  !*** ./apps/extension-worker/src/project/dto/find_dto.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class FindDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FindDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], FindDto.prototype, "property", void 0);
exports.FindDto = FindDto;


/***/ }),

/***/ "./apps/extension-worker/src/project/dto/update_dto.ts":
/*!*************************************************************!*\
  !*** ./apps/extension-worker/src/project/dto/update_dto.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateDto = void 0;
class UpdateDto {
}
exports.UpdateDto = UpdateDto;


/***/ }),

/***/ "./apps/extension-worker/src/project/project.controller.ts":
/*!*****************************************************************!*\
  !*** ./apps/extension-worker/src/project/project.controller.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const dto_1 = __webpack_require__(/*! ./dto/dto */ "./apps/extension-worker/src/project/dto/dto.ts");
const find_dto_1 = __webpack_require__(/*! ./dto/find_dto */ "./apps/extension-worker/src/project/dto/find_dto.ts");
const update_dto_1 = __webpack_require__(/*! ./dto/update_dto */ "./apps/extension-worker/src/project/dto/update_dto.ts");
const project_service_1 = __webpack_require__(/*! ./project.service */ "./apps/extension-worker/src/project/project.service.ts");
let ProjectController = class ProjectController {
    constructor(project) {
        this.project = project;
    }
    CreateProject(data) {
        try {
            return this.project.CreateProject(data);
        }
        catch (error) {
            return error;
        }
    }
    Addparticipant(data) {
        try {
            return this.project.Addparticipant(data);
        }
        catch (error) {
            return error;
        }
    }
    Addmilestones(data) {
        try {
            return this.project.Addmilestones(data);
        }
        catch (error) {
            return error;
        }
    }
    Getparticipants(data) {
        try {
            return this.project.Getparticipants(data);
        }
        catch (error) {
            return error;
        }
    }
    Removeparticipants(data) {
        try {
            return this.project.Removeparticipants(data);
        }
        catch (error) {
            return error;
        }
    }
    Getmilestones(data) {
        try {
            return this.project.Getmilestones(data);
        }
        catch (error) {
            return error;
        }
    }
    Removemilestones(data) {
        try {
            return this.project.Removemilestones(data);
        }
        catch (error) {
            return error;
        }
    }
    FindByid(data) {
        try {
            return this.project.FindByid(data);
        }
        catch (error) {
            return error;
        }
    }
    FindBytype(data) {
        try {
            return this.project.FindBytype(data);
        }
        catch (error) {
            return error;
        }
    }
    FindByparticipants(data) {
        try {
            return this.project.FindByparticipants(data);
        }
        catch (error) {
            return error;
        }
    }
    FindBymilestones(data) {
        try {
            return this.project.FindBymilestones(data);
        }
        catch (error) {
            return error;
        }
    }
    FindBystart_date(data) {
        try {
            return this.project.FindBystart_date(data);
        }
        catch (error) {
            return error;
        }
    }
    FindByend_date(data) {
        try {
            return this.project.FindByend_date(data);
        }
        catch (error) {
            return error;
        }
    }
    FindByworkerProfileId(data) {
        try {
            return this.project.FindByworkerProfileId(data);
        }
        catch (error) {
            return error;
        }
    }
    UpdateProperty(data) {
        try {
            return this.project.UpdateProperty(data);
        }
        catch (error) {
            return error;
        }
    }
};
__decorate([
    (0, common_1.Post)('CreateProject'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.CreateProjectDto !== "undefined" && dto_1.CreateProjectDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], ProjectController.prototype, "CreateProject", null);
__decorate([
    (0, common_1.Post)('Addparticipant'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof update_dto_1.UpdateDto !== "undefined" && update_dto_1.UpdateDto) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], ProjectController.prototype, "Addparticipant", null);
__decorate([
    (0, common_1.Post)('Addmilestones'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof update_dto_1.UpdateDto !== "undefined" && update_dto_1.UpdateDto) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], ProjectController.prototype, "Addmilestones", null);
__decorate([
    (0, common_1.Post)('Getparticipants'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _h : Object]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], ProjectController.prototype, "Getparticipants", null);
__decorate([
    (0, common_1.Post)('Removeparticipants'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof update_dto_1.UpdateDto !== "undefined" && update_dto_1.UpdateDto) === "function" ? _k : Object]),
    __metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], ProjectController.prototype, "Removeparticipants", null);
__decorate([
    (0, common_1.Post)('Getmilestones'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_m = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _m : Object]),
    __metadata("design:returntype", typeof (_o = typeof Promise !== "undefined" && Promise) === "function" ? _o : Object)
], ProjectController.prototype, "Getmilestones", null);
__decorate([
    (0, common_1.Post)('Removemilestones'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_p = typeof update_dto_1.UpdateDto !== "undefined" && update_dto_1.UpdateDto) === "function" ? _p : Object]),
    __metadata("design:returntype", typeof (_q = typeof Promise !== "undefined" && Promise) === "function" ? _q : Object)
], ProjectController.prototype, "Removemilestones", null);
__decorate([
    (0, common_1.Post)('FindByid'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_r = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _r : Object]),
    __metadata("design:returntype", typeof (_s = typeof Promise !== "undefined" && Promise) === "function" ? _s : Object)
], ProjectController.prototype, "FindByid", null);
__decorate([
    (0, common_1.Post)('FindBytype'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_t = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _t : Object]),
    __metadata("design:returntype", typeof (_u = typeof Promise !== "undefined" && Promise) === "function" ? _u : Object)
], ProjectController.prototype, "FindBytype", null);
__decorate([
    (0, common_1.Post)('FindByparticipants'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_v = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _v : Object]),
    __metadata("design:returntype", typeof (_w = typeof Promise !== "undefined" && Promise) === "function" ? _w : Object)
], ProjectController.prototype, "FindByparticipants", null);
__decorate([
    (0, common_1.Post)('FindBymilestones'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_x = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _x : Object]),
    __metadata("design:returntype", typeof (_y = typeof Promise !== "undefined" && Promise) === "function" ? _y : Object)
], ProjectController.prototype, "FindBymilestones", null);
__decorate([
    (0, common_1.Post)('FindBystart_date'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_z = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _z : Object]),
    __metadata("design:returntype", typeof (_0 = typeof Promise !== "undefined" && Promise) === "function" ? _0 : Object)
], ProjectController.prototype, "FindBystart_date", null);
__decorate([
    (0, common_1.Post)('FindByend_date'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_1 = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _1 : Object]),
    __metadata("design:returntype", typeof (_2 = typeof Promise !== "undefined" && Promise) === "function" ? _2 : Object)
], ProjectController.prototype, "FindByend_date", null);
__decorate([
    (0, common_1.Post)('FindByworkerProfileId'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_3 = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _3 : Object]),
    __metadata("design:returntype", typeof (_4 = typeof Promise !== "undefined" && Promise) === "function" ? _4 : Object)
], ProjectController.prototype, "FindByworkerProfileId", null);
__decorate([
    (0, common_1.Post)('UpdateProperty'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_5 = typeof update_dto_1.UpdateDto !== "undefined" && update_dto_1.UpdateDto) === "function" ? _5 : Object]),
    __metadata("design:returntype", typeof (_6 = typeof Promise !== "undefined" && Promise) === "function" ? _6 : Object)
], ProjectController.prototype, "UpdateProperty", null);
ProjectController = __decorate([
    (0, common_1.Controller)('project'),
    (0, swagger_1.ApiTags)('project'),
    __metadata("design:paramtypes", [typeof (_a = typeof project_service_1.ProjectService !== "undefined" && project_service_1.ProjectService) === "function" ? _a : Object])
], ProjectController);
exports.ProjectController = ProjectController;


/***/ }),

/***/ "./apps/extension-worker/src/project/project.module.ts":
/*!*************************************************************!*\
  !*** ./apps/extension-worker/src/project/project.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const project_controller_1 = __webpack_require__(/*! ./project.controller */ "./apps/extension-worker/src/project/project.controller.ts");
const project_service_1 = __webpack_require__(/*! ./project.service */ "./apps/extension-worker/src/project/project.service.ts");
const db_service_1 = __webpack_require__(/*! @app/lib/db/db.service */ "./libs/lib/src/db/db.service.ts");
const profile_service_1 = __webpack_require__(/*! ../profile/profile.service */ "./apps/extension-worker/src/profile/profile.service.ts");
let ProjectModule = class ProjectModule {
};
ProjectModule = __decorate([
    (0, common_1.Module)({
        controllers: [project_controller_1.ProjectController],
        providers: [project_service_1.ProjectService, db_service_1.DbService, profile_service_1.ProfileService],
    })
], ProjectModule);
exports.ProjectModule = ProjectModule;


/***/ }),

/***/ "./apps/extension-worker/src/project/project.service.ts":
/*!**************************************************************!*\
  !*** ./apps/extension-worker/src/project/project.service.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const db_service_1 = __webpack_require__(/*! @app/lib/db/db.service */ "./libs/lib/src/db/db.service.ts");
const profile_service_1 = __webpack_require__(/*! ../profile/profile.service */ "./apps/extension-worker/src/profile/profile.service.ts");
const find_dto_1 = __webpack_require__(/*! ./dto/find_dto */ "./apps/extension-worker/src/project/dto/find_dto.ts");
let ProjectService = class ProjectService {
    constructor(db, profile) {
        this.db = db;
        this.profile = profile;
    }
    async CreateProject(data) {
        try {
            const query = await this.profile.Addproject(data);
            return query;
        }
        catch (error) {
            return error;
        }
    }
    async Addparticipant(data) {
        try {
            const query = await this.db.project.update({
                data: {
                    participants: {
                        connect: {
                            id: data['new_value']['farmer_id'],
                        },
                    },
                },
                where: {
                    id: data['id'],
                },
            });
            return query;
        }
        catch (error) {
            return error;
        }
    }
    async Addmilestones(data) {
        try {
            const query = await this.db.project.update({
                data: {
                    participants: {
                        connect: {
                            id: data['new_value']['farmer_id'],
                        },
                    },
                },
                where: {
                    id: data['id'],
                },
            });
            return query;
        }
        catch (error) {
            return error;
        }
    }
    async Getparticipants(data) {
        try {
            const user = await this.db.farmerProfile.findMany({
                where: {
                    projectId: data['property']['project_id'],
                },
            });
            return user;
        }
        catch (error) {
            return error;
        }
    }
    async Removeparticipants(data) {
        try {
            const query = await this.db.project.update({
                data: {
                    participants: {
                        disconnect: {
                            id: data['new_value']['farmer_id'],
                        },
                    },
                },
                where: {
                    id: data['id'],
                },
            });
            return query;
        }
        catch (error) {
            return error;
        }
    }
    async Getmilestones(data) {
        try {
            const user = await this.db.milestone.findMany({
                where: {
                    projectId: data['property']['project_id'],
                },
            });
            return user;
        }
        catch (error) {
            return error;
        }
    }
    async Removemilestones(data) {
        try {
            const query = await this.db.project.update({
                data: {
                    milestones: {
                        disconnect: {
                            id: data['new_value']['milestone_id'],
                        },
                    },
                },
                where: {
                    id: data['id'],
                },
            });
            return query;
        }
        catch (error) {
            return error;
        }
    }
    async FindByid(data) {
        try {
            const query = await this.db.project.findFirstOrThrow({
                where: {
                    id: find_dto_1.FindDto['id'],
                },
            });
            return query;
        }
        catch (error) {
            return error;
        }
    }
    async FindBytype(data) {
        try {
            const query = await this.db.project.findFirstOrThrow({
                where: {
                    id: find_dto_1.FindDto['id'],
                    type: find_dto_1.FindDto['property']['type'],
                },
            });
            return query;
        }
        catch (error) {
            return error;
        }
    }
    async FindByparticipants(data) {
        try {
            const query = await this.db.project.findFirstOrThrow({
                where: {
                    id: find_dto_1.FindDto['id'],
                    participants: {
                        every: {
                            id: data['property']['farmer_id'],
                        },
                    },
                },
            });
            return query;
        }
        catch (error) {
            return error;
        }
    }
    async FindBymilestones(data) {
        try {
            const query = await this.db.project.findFirstOrThrow({
                where: {
                    id: find_dto_1.FindDto['id'],
                    milestones: {
                        every: {
                            id: data['property']['milestone_id'],
                        },
                    },
                },
            });
            return query;
        }
        catch (error) {
            return error;
        }
    }
    async FindBystart_date(data) {
        try {
            const query = await this.db.project.findFirstOrThrow({
                where: {
                    id: find_dto_1.FindDto['id'],
                    start_date: data['property']['start_date'],
                },
            });
            return query;
        }
        catch (error) {
            return error;
        }
    }
    async FindByend_date(data) {
        try {
            const query = await this.db.project.findFirstOrThrow({
                where: {
                    id: find_dto_1.FindDto['id'],
                    end_date: data['property']['end_date'],
                },
            });
            return query;
        }
        catch (error) {
            return error;
        }
    }
    async FindByworkerProfileId(data) {
        try {
            const query = await this.db.project.findFirstOrThrow({
                where: {
                    id: find_dto_1.FindDto['id'],
                    workerProfileId: data['property']['workerProfileId'],
                },
            });
            return query;
        }
        catch (error) {
            return error;
        }
    }
    async UpdateProperty(data) {
        try {
            const query = data['new_value']['type'] !== undefined
                ? await this.db.project.update({
                    data: {
                        type: data['new_value']['type'],
                    },
                    where: {
                        id: data['id'],
                        type: data['type'],
                    },
                })
                : data['new_value']['start_date'] !== undefined
                    ? await this.db.project.update({
                        data: {
                            start_date: data['new_value']['start_date'],
                        },
                        where: {
                            id: data['id'],
                            type: data['type'],
                        },
                    })
                    : data['new_value']['end_date'] !== undefined
                        ? await this.db.project.update({
                            data: {
                                end_date: data['new_value']['end_date'],
                            },
                            where: {
                                id: data['id'],
                                type: data['type'],
                            },
                        })
                        : new common_1.BadRequestException('pass in a valid property');
            return query;
        }
        catch (error) {
            return error;
        }
    }
};
ProjectService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof db_service_1.DbService !== "undefined" && db_service_1.DbService) === "function" ? _a : Object, typeof (_b = typeof profile_service_1.ProfileService !== "undefined" && profile_service_1.ProfileService) === "function" ? _b : Object])
], ProjectService);
exports.ProjectService = ProjectService;


/***/ }),

/***/ "./apps/extension-worker/src/report/dto/dto.ts":
/*!*****************************************************!*\
  !*** ./apps/extension-worker/src/report/dto/dto.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateReportDto = void 0;
class CreateReportDto {
}
exports.CreateReportDto = CreateReportDto;


/***/ }),

/***/ "./apps/extension-worker/src/report/report.controller.ts":
/*!***************************************************************!*\
  !*** ./apps/extension-worker/src/report/report.controller.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReportController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let ReportController = class ReportController {
};
ReportController = __decorate([
    (0, common_1.Controller)('report'),
    (0, swagger_1.ApiTags)('report')
], ReportController);
exports.ReportController = ReportController;


/***/ }),

/***/ "./apps/extension-worker/src/report/report.module.ts":
/*!***********************************************************!*\
  !*** ./apps/extension-worker/src/report/report.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReportModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const report_controller_1 = __webpack_require__(/*! ./report.controller */ "./apps/extension-worker/src/report/report.controller.ts");
let ReportModule = class ReportModule {
};
ReportModule = __decorate([
    (0, common_1.Module)({
        controllers: [report_controller_1.ReportController]
    })
], ReportModule);
exports.ReportModule = ReportModule;


/***/ }),

/***/ "./apps/farmer/src/farmer/dto/dto.ts":
/*!*******************************************!*\
  !*** ./apps/farmer/src/farmer/dto/dto.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
class UpdateDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: client_1.UserType,
    }),
    __metadata("design:type", typeof (_a = typeof client_1.UserType !== "undefined" && client_1.UserType) === "function" ? _a : Object)
], UpdateDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'new value for the property',
    }),
    __metadata("design:type", Object)
], UpdateDto.prototype, "new_value", void 0);
exports.UpdateDto = UpdateDto;


/***/ }),

/***/ "./apps/farmer/src/farmer/dto/find.dto.ts":
/*!************************************************!*\
  !*** ./apps/farmer/src/farmer/dto/find.dto.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
class FindDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FindDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: client_1.UserType,
    }),
    __metadata("design:type", typeof (_a = typeof client_1.UserType !== "undefined" && client_1.UserType) === "function" ? _a : Object)
], FindDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], FindDto.prototype, "property", void 0);
exports.FindDto = FindDto;


/***/ }),

/***/ "./apps/farmer/src/farmer/farmer.controller.ts":
/*!*****************************************************!*\
  !*** ./apps/farmer/src/farmer/farmer.controller.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FarmerController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const login_auth_dto_1 = __webpack_require__(/*! @app/lib/auth/dto/login-auth.dto */ "./libs/lib/src/auth/dto/login-auth.dto.ts");
const farmer_service_1 = __webpack_require__(/*! ./farmer.service */ "./apps/farmer/src/farmer/farmer.service.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const dto_1 = __webpack_require__(/*! ./dto/dto */ "./apps/farmer/src/farmer/dto/dto.ts");
const find_dto_1 = __webpack_require__(/*! ./dto/find.dto */ "./apps/farmer/src/farmer/dto/find.dto.ts");
const famrer_guard_1 = __webpack_require__(/*! @app/lib/auth/famrer.guard */ "./libs/lib/src/auth/famrer.guard.ts");
let FarmerController = class FarmerController {
    constructor(farmer) {
        this.farmer = farmer;
    }
    UpdateProperties(data) {
        return this.farmer.UpdateProperties(data);
    }
    UpdatePassword(data) {
        return this.farmer.UpdatePassword(data);
    }
    FindById(data) {
        return this.farmer.FindById(data);
    }
    FindByPhone_Number(data) {
        return this.farmer.FindByPhone_Number(data);
    }
    FindByFirst_name(data) {
        return this.farmer.FindByFirst_name(data);
    }
    UpdateFirstName(data) {
        return this.farmer.UpdateFirstName(data);
    }
    UpdateLastName(data) {
        return this.farmer.UpdateLastName(data);
    }
    UpdatePhoneNumber(data) {
        return this.farmer.UpdatePhoneNumber(data);
    }
    CreateResource(data) {
        throw new Error('Method not implemented.');
    }
    FindByEmail(data) {
        return this.farmer.FindByEmail(data);
    }
    SignOut() {
        return this.farmer.SignOut();
    }
};
__decorate([
    (0, common_1.Post)('UpdateProperties'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.UpdateDto !== "undefined" && dto_1.UpdateDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], FarmerController.prototype, "UpdateProperties", null);
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof dto_1.UpdateDto !== "undefined" && dto_1.UpdateDto) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], FarmerController.prototype, "UpdatePassword", null);
__decorate([
    (0, common_1.Post)('FindById'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _e : Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], FarmerController.prototype, "FindById", null);
__decorate([
    (0, common_1.Post)('FindByPhone_Number'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _g : Object]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], FarmerController.prototype, "FindByPhone_Number", null);
__decorate([
    (0, common_1.Post)('FindByFirst_name'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _j : Object]),
    __metadata("design:returntype", typeof (_k = typeof Promise !== "undefined" && Promise) === "function" ? _k : Object)
], FarmerController.prototype, "FindByFirst_name", null);
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_l = typeof dto_1.UpdateDto !== "undefined" && dto_1.UpdateDto) === "function" ? _l : Object]),
    __metadata("design:returntype", typeof (_m = typeof Promise !== "undefined" && Promise) === "function" ? _m : Object)
], FarmerController.prototype, "UpdateFirstName", null);
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_o = typeof dto_1.UpdateDto !== "undefined" && dto_1.UpdateDto) === "function" ? _o : Object]),
    __metadata("design:returntype", typeof (_p = typeof Promise !== "undefined" && Promise) === "function" ? _p : Object)
], FarmerController.prototype, "UpdateLastName", null);
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_q = typeof dto_1.UpdateDto !== "undefined" && dto_1.UpdateDto) === "function" ? _q : Object]),
    __metadata("design:returntype", typeof (_r = typeof Promise !== "undefined" && Promise) === "function" ? _r : Object)
], FarmerController.prototype, "UpdatePhoneNumber", null);
__decorate([
    (0, common_1.Post)('FindByEmail'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_s = typeof login_auth_dto_1.ValidationDto !== "undefined" && login_auth_dto_1.ValidationDto) === "function" ? _s : Object]),
    __metadata("design:returntype", typeof (_t = typeof Promise !== "undefined" && Promise) === "function" ? _t : Object)
], FarmerController.prototype, "FindByEmail", null);
FarmerController = __decorate([
    (0, common_1.Controller)('farmer'),
    (0, swagger_1.ApiTags)('Farmer'),
    (0, common_1.UseGuards)(famrer_guard_1.FamrerGuard),
    __metadata("design:paramtypes", [typeof (_a = typeof farmer_service_1.FarmerService !== "undefined" && farmer_service_1.FarmerService) === "function" ? _a : Object])
], FarmerController);
exports.FarmerController = FarmerController;


/***/ }),

/***/ "./apps/farmer/src/farmer/farmer.service.ts":
/*!**************************************************!*\
  !*** ./apps/farmer/src/farmer/farmer.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FarmerService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const db_service_1 = __webpack_require__(/*! @app/lib/db/db.service */ "./libs/lib/src/db/db.service.ts");
let FarmerService = class FarmerService {
    constructor(db) {
        this.db = db;
    }
    async UpdateProperties(data) {
        try {
            let query = data['new_value']['first_name'] !== undefined
                ? await this.db.user.update({
                    data: {
                        first_name: data['new_value']['first_name'],
                    },
                    where: {
                        id: data['id'],
                        type: 'FARMER',
                    },
                })
                : data['new_value']['last_name'] !== undefined
                    ? await this.db.user.update({
                        data: {
                            last_name: data['new_value']['last_name'],
                        },
                        where: {
                            id: data['id'],
                            type: 'FARMER',
                        },
                    })
                    : data['new_value']['phone_number'] !== undefined
                        ? await this.db.user.update({
                            data: {
                                phone_number: data['new_value']['phone_number'],
                            },
                            where: {
                                id: data['id'],
                                type: 'FARMER',
                            },
                        })
                        : data['new_value']['email'] !== undefined
                            ? await this.db.user.update({
                                data: {
                                    email: data['new_value']['email'],
                                },
                                where: {
                                    id: data['id'],
                                    type: 'FARMER',
                                },
                            })
                            : new common_1.BadRequestException('pass in a valid property  please');
            return query;
        }
        catch (error) {
            return error;
        }
    }
    async UpdateFirstName(data) {
        try {
            const user = await this.db.user.update({
                where: {
                    id: data['id'],
                    type: 'FARMER',
                },
                data: {
                    first_name: data['new_value'],
                },
            });
            return user;
        }
        catch (error) {
            return error;
        }
    }
    async UpdateLastName(data) {
        try {
            const user = await this.db.user.update({
                where: {
                    id: data['id'],
                    type: 'FARMER',
                },
                data: {
                    last_name: data['new_value'],
                },
            });
            return user;
        }
        catch (error) {
            return error;
        }
    }
    async UpdatePhoneNumber(data) {
        try {
            const user = await this.db.user.update({
                where: {
                    id: data['id'],
                    type: 'FARMER',
                },
                data: {
                    phone_number: data['new_value'],
                },
            });
            return user;
        }
        catch (error) {
            return error;
        }
    }
    async FindById(data) {
        try {
            const user = await this.db.user.findFirstOrThrow({
                where: {
                    id: data['id'],
                    type: 'FARMER',
                },
            });
            return user;
        }
        catch (error) {
            return error;
        }
    }
    async FindByPhone_Number(data) {
        try {
            const user = await this.db.user.findFirstOrThrow({
                where: {
                    id: data['id'],
                    type: 'FARMER',
                    phone_number: data['property'],
                },
            });
            return user;
        }
        catch (error) {
            return error;
        }
    }
    async FindByFirst_name(data) {
        try {
            const user = await this.db.user.findFirstOrThrow({
                where: {
                    id: data['id'],
                    type: 'FARMER',
                    first_name: data['property'],
                },
            });
            return user;
        }
        catch (error) {
            return error;
        }
    }
    async UpdatePassword(data) {
        try {
            const user = await this.db.user.update({
                where: {
                    email: data['property'],
                    type: 'FARMER',
                },
                data: {
                    password: data['new_value'],
                },
            });
            return user;
        }
        catch (error) {
            return error;
        }
    }
    async CreateResource(data) {
        try {
            const user = await this.db.user.create({
                data: {
                    email: data['email'],
                    first_name: data['first_name'],
                    last_name: data['last_name'],
                    password: data['password'],
                    phone_number: data['phone_number'],
                    type: 'FARMER',
                },
            });
            return user;
        }
        catch (error) {
            return error;
        }
    }
    SignOut() {
        throw new Error('Method not implemented.');
    }
    async FindByEmail(data) {
        try {
            const user = await this.db.user.findFirstOrThrow({
                where: {
                    email: data['property'],
                    type: 'FARMER',
                },
            });
            return user;
        }
        catch (error) {
            console.log(error);
        }
    }
};
FarmerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof db_service_1.DbService !== "undefined" && db_service_1.DbService) === "function" ? _a : Object])
], FarmerService);
exports.FarmerService = FarmerService;


/***/ }),

/***/ "./libs/lib/src/auth/auth.controller.ts":
/*!**********************************************!*\
  !*** ./libs/lib/src/auth/auth.controller.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./libs/lib/src/auth/auth.service.ts");
const create_auth_dto_1 = __webpack_require__(/*! ./dto/create-auth.dto */ "./libs/lib/src/auth/dto/create-auth.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const login_auth_dto_1 = __webpack_require__(/*! ./dto/login-auth.dto */ "./libs/lib/src/auth/dto/login-auth.dto.ts");
const dto_1 = __webpack_require__(/*! apps/farmer/src/farmer/dto/dto */ "./apps/farmer/src/farmer/dto/dto.ts");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    validate(data) {
        throw new Error('Method not implemented.');
    }
    Signup(info) {
        return this.authService.Signup(info);
    }
    SignIn(data) {
        return this.authService.SignIn(data);
    }
    SignOut(data) {
        return this.authService.SignOut(data);
    }
    ForgotPassword(data) {
        return this.authService.ForgotPassword(data);
    }
};
__decorate([
    (0, common_1.Post)('Signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_auth_dto_1.CreateUserDto !== "undefined" && create_auth_dto_1.CreateUserDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "Signup", null);
__decorate([
    (0, common_1.Post)('SignIn'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof login_auth_dto_1.ValidationDto !== "undefined" && login_auth_dto_1.ValidationDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "SignIn", null);
__decorate([
    (0, common_1.Post)('SignOut'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "SignOut", null);
__decorate([
    (0, common_1.Post)('ForgotPassword'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof dto_1.UpdateDto !== "undefined" && dto_1.UpdateDto) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "ForgotPassword", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    (0, swagger_1.ApiTags)('Auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);
exports.AuthController = AuthController;


/***/ }),

/***/ "./libs/lib/src/auth/auth.service.ts":
/*!*******************************************!*\
  !*** ./libs/lib/src/auth/auth.service.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const farmer_service_1 = __webpack_require__(/*! apps/farmer/src/farmer/farmer.service */ "./apps/farmer/src/farmer/farmer.service.ts");
const admin_service_1 = __webpack_require__(/*! apps/admin/src/admin/admin.service */ "./apps/admin/src/admin/admin.service.ts");
const worker_service_1 = __webpack_require__(/*! apps/extension-worker/src/extension-worker/worker.service */ "./apps/extension-worker/src/extension-worker/worker.service.ts");
const argon2_1 = __webpack_require__(/*! argon2 */ "argon2");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
let AuthService = class AuthService {
    constructor(farmer, admin, extensionWorker, jwtService) {
        this.farmer = farmer;
        this.admin = admin;
        this.extensionWorker = extensionWorker;
        this.jwtService = jwtService;
    }
    async Signup(info) {
        try {
            info['password'] = await (0, argon2_1.hash)(info['password'], {
                secret: Buffer.from(process.env.HASH_SECRET || 'hash'),
                type: 2,
            });
            let query = info['type'] == 'FARMER'
                ? this.farmer.CreateResource(info)
                : info['type'] == 'ADMIN'
                    ? this.admin.CreateResource(info)
                    : info['type'] == 'EXTENSION_WORKER'
                        ? this.extensionWorker.CreateResource(info)
                        : new common_1.BadRequestException('Please Specify User Type');
            return query;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async SignIn(data) {
        try {
            let user = data['type'] == 'FARMER'
                ? await this.farmer.FindByEmail(data)
                : data['type'] == 'ADMIN'
                    ? await this.admin.FindByEmail(data)
                    : data['type'] == 'EXTENSION_WORKER'
                        ? await this.extensionWorker.FindByEmail(data)
                        : new Error('Cant Find Any Users By that email');
            console.log(user);
            const verification = await (0, argon2_1.verify)(user['password'], Buffer.from(data['password']), {
                secret: Buffer.from(process.env.HASH_SECRET || 'hash'),
            });
            const access_token = verification == true
                ? {
                    access_token: this.jwtService.sign(data, {
                        secret: process.env.HASH_SECRET || 'hash',
                    }),
                }
                : new common_1.UnauthorizedException();
            return access_token;
        }
        catch (error) {
            console.log(error);
        }
    }
    async SignOut(data) {
        throw new Error('Method not implemented.');
    }
    async validate(data) {
        try {
            let user = data['type'] == 'FARMER'
                ? this.farmer.FindByEmail(data)
                : data['type'] == 'ADMIN'
                    ? this.admin.FindByEmail(data)
                    : data['type'] == 'EXTENSION_WORKER'
                        ? this.extensionWorker.FindByEmail(data)
                        : new Error('Cant Find Any Users By that email');
            const verification = await (0, argon2_1.verify)(user['password'], Buffer.from(data['password']), {
                secret: Buffer.from(process.env.HASH_SECRET || 'hash'),
            });
            if (user && verification) {
                const result = __rest(user, []);
                return result;
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (error) {
            return error;
        }
    }
    async ForgotPassword(data) {
        try {
            let hashed = await (0, argon2_1.hash)(data['new_value'], {
                secret: Buffer.from(process.env.HASH_SECRET || 'hash'),
                type: 2,
            });
            data['password'] = hashed;
            let user = data['type'] == 'FARMER'
                ? this.farmer.UpdatePassword(data)
                : data['type'] == 'ADMIN'
                    ? this.admin.UpdatePassword(data)
                    : data['type'] == 'EXTENSION_WORKER'
                        ? this.extensionWorker.UpdatePassword(data)
                        : new Error('Cant Find Any Users By that email');
            return user;
        }
        catch (error) {
            return error;
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof farmer_service_1.FarmerService !== "undefined" && farmer_service_1.FarmerService) === "function" ? _a : Object, typeof (_b = typeof admin_service_1.AdminService !== "undefined" && admin_service_1.AdminService) === "function" ? _b : Object, typeof (_c = typeof worker_service_1.WorkerService !== "undefined" && worker_service_1.WorkerService) === "function" ? _c : Object, typeof (_d = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _d : Object])
], AuthService);
exports.AuthService = AuthService;


/***/ }),

/***/ "./libs/lib/src/auth/dto/create-auth.dto.ts":
/*!**************************************************!*\
  !*** ./libs/lib/src/auth/dto/create-auth.dto.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserDto = void 0;
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
const class_validator_1 = __webpack_require__(/*! @nestjs/class-validator */ "@nestjs/class-validator");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class CreateUserDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "first_name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "last_name", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsPhoneNumber)('NG'),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "phone_number", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(client_1.UserType),
    (0, swagger_1.ApiProperty)({
        enum: client_1.UserType,
    }),
    __metadata("design:type", typeof (_a = typeof client_1.UserType !== "undefined" && client_1.UserType) === "function" ? _a : Object)
], CreateUserDto.prototype, "type", void 0);
exports.CreateUserDto = CreateUserDto;


/***/ }),

/***/ "./libs/lib/src/auth/dto/login-auth.dto.ts":
/*!*************************************************!*\
  !*** ./libs/lib/src/auth/dto/login-auth.dto.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidationDto = void 0;
const class_validator_1 = __webpack_require__(/*! @nestjs/class-validator */ "@nestjs/class-validator");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
class ValidationDto {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ValidationDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ValidationDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ValidationDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(client_1.UserType),
    (0, swagger_1.ApiProperty)({
        enum: client_1.UserType,
    }),
    __metadata("design:type", typeof (_a = typeof client_1.UserType !== "undefined" && client_1.UserType) === "function" ? _a : Object)
], ValidationDto.prototype, "type", void 0);
exports.ValidationDto = ValidationDto;


/***/ }),

/***/ "./libs/lib/src/auth/extension-worker.guard.ts":
/*!*****************************************************!*\
  !*** ./libs/lib/src/auth/extension-worker.guard.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExtensionWorkerGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let ExtensionWorkerGuard = class ExtensionWorkerGuard {
    canActivate(context) {
        try {
            const type = context.switchToHttp().getRequest()['body']['type'];
            const valid = type == 'EXTENSION_WORKER' ? true : false;
            if (valid == false) {
                throw new common_1.ForbiddenException('wrong server');
            }
            else {
                return valid;
            }
        }
        catch (error) {
            throw new common_1.ForbiddenException('wrong server');
        }
    }
};
ExtensionWorkerGuard = __decorate([
    (0, common_1.Injectable)()
], ExtensionWorkerGuard);
exports.ExtensionWorkerGuard = ExtensionWorkerGuard;


/***/ }),

/***/ "./libs/lib/src/auth/famrer.guard.ts":
/*!*******************************************!*\
  !*** ./libs/lib/src/auth/famrer.guard.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FamrerGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let FamrerGuard = class FamrerGuard {
    canActivate(context) {
        try {
            const type = context.switchToHttp().getRequest()['body']['type'];
            const valid = type == 'FARMER' ? true : false;
            if (valid == false) {
                throw new common_1.ForbiddenException('wrong server');
            }
            else {
                return valid;
            }
        }
        catch (error) {
            throw new common_1.ForbiddenException('wrong server');
        }
    }
};
FamrerGuard = __decorate([
    (0, common_1.Injectable)()
], FamrerGuard);
exports.FamrerGuard = FamrerGuard;


/***/ }),

/***/ "./libs/lib/src/db/db.service.ts":
/*!***************************************!*\
  !*** ./libs/lib/src/db/db.service.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DbService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
let DbService = class DbService extends client_1.PrismaClient {
    constructor() {
        super({
            datasourceUrl: process.env.DATABASE_URL,
        });
    }
};
DbService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], DbService);
exports.DbService = DbService;


/***/ }),

/***/ "@nestjs/class-validator":
/*!******************************************!*\
  !*** external "@nestjs/class-validator" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@nestjs/class-validator");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "argon2":
/*!*************************!*\
  !*** external "argon2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("argon2");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*******************************************!*\
  !*** ./apps/extension-worker/src/main.ts ***!
  \*******************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const extension_worker_module_1 = __webpack_require__(/*! ./extension-worker/extension-worker.module */ "./apps/extension-worker/src/extension-worker/extension-worker.module.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(extension_worker_module_1.ExtensionWorkerModule);
    app.enableCors({
        origin: '*',
        allowedHeaders: [],
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Extension Worker Doc')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(process.env.WORKER_PORT || 3000);
    const logger = new common_1.Logger('Extension Worker Logic', {
        timestamp: true,
    });
    logger.log('app running on ' + process.env.WORKER_PORT);
}
bootstrap();

})();

/******/ })()
;