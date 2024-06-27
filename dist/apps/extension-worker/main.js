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
const short_id_1 = __webpack_require__(/*! @app/lib/short_id */ "./libs/lib/src/short_id.ts");
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
            throw new common_1.BadRequestException(error);
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
            throw new common_1.BadRequestException(error);
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
            throw new common_1.BadRequestException(error);
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
            throw new common_1.BadRequestException(error);
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
            throw new common_1.BadRequestException(error);
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
            throw new common_1.BadRequestException(error);
        }
    }
    async UpdatePassword(data) {
        try {
            const user = await this.db.user.update({
                where: {
                    email: data['property']['email'],
                    type: 'ADMIN',
                },
                data: {
                    password: data['property']['password'],
                },
            });
            return user;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async CreateResource(data) {
        try {
            const user = await this.db.user.create({
                data: {
                    id: (0, short_id_1.generateShortId)(),
                    email: data['email'],
                    first_name: data['first_name'],
                    last_name: data['last_name'],
                    password: data['password'],
                    phone_number: data['phone_number'],
                    type: 'ADMIN',
                    adminProfile: {
                        create: {
                            id: (0, short_id_1.generateShortId)(),
                        },
                    },
                },
            });
            return user;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    SignOut() {
        throw new Error('Method not implemented.');
    }
    async FindByEmail(data) {
        try {
            const user = await this.db.user.findFirstOrThrow({
                where: {
                    email: data['email'],
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
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.CreateInterventionDto !== "undefined" && dto_1.CreateInterventionDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], InterventionController.prototype, "createIntervention", null);
__decorate([
    (0, common_1.Post)('findById'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], InterventionController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)('findByAmount'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], InterventionController.prototype, "findByAmount", null);
__decorate([
    (0, common_1.Post)('findByType'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _h : Object]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], InterventionController.prototype, "findByType", null);
__decorate([
    (0, common_1.Post)('findByFarmerProfileId'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _k : Object]),
    __metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], InterventionController.prototype, "findByFarmerProfileId", null);
__decorate([
    (0, common_1.Post)('findByProjectId'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_m = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _m : Object]),
    __metadata("design:returntype", typeof (_o = typeof Promise !== "undefined" && Promise) === "function" ? _o : Object)
], InterventionController.prototype, "findByProjectId", null);
__decorate([
    (0, common_1.Post)('updateProperty'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
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
const auth_module_1 = __webpack_require__(/*! @app/lib/auth/auth.module */ "./libs/lib/src/auth/auth.module.ts");
let InterventionModule = class InterventionModule {
};
InterventionModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule],
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

/***/ "./apps/extension-worker/src/appointment/appointment.controller.ts":
/*!*************************************************************************!*\
  !*** ./apps/extension-worker/src/appointment/appointment.controller.ts ***!
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppointmentController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const find_dto_1 = __webpack_require__(/*! ./dto/find_dto */ "./apps/extension-worker/src/appointment/dto/find_dto.ts");
const update_dto_1 = __webpack_require__(/*! ./dto/update_dto */ "./apps/extension-worker/src/appointment/dto/update_dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const appointment_service_1 = __webpack_require__(/*! ./appointment.service */ "./apps/extension-worker/src/appointment/appointment.service.ts");
const dto_1 = __webpack_require__(/*! ./dto/dto */ "./apps/extension-worker/src/appointment/dto/dto.ts");
let AppointmentController = class AppointmentController {
    constructor(service) {
        this.service = service;
    }
    ScheduleAppointment(data) {
        return this.service.ScheduleAppointment(data);
    }
    GetVisits(data) {
        return this.service.GetVisits(data);
    }
    AddVisit(data) {
        return this.service.AddVisit(data);
    }
    RemoveVisit(data) {
        return this.service.RemoveVisit(data);
    }
    findByid(data) {
        return this.service.findByid(data);
    }
    findByTime(data) {
        return this.service.findByTime(data);
    }
    findByStatus(data) {
        return this.service.findByStatus(data);
    }
    findByworkerProfileId(data) {
        return this.service.findByworkerProfileId(data);
    }
    UpdateProperty(data) {
        return this.service.UpdateProperty(data);
    }
};
__decorate([
    (0, common_1.Post)('ScheduleAppointment'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.CreateAppointmentDto !== "undefined" && dto_1.CreateAppointmentDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], AppointmentController.prototype, "ScheduleAppointment", null);
__decorate([
    (0, common_1.Post)('GetVisits'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], AppointmentController.prototype, "GetVisits", null);
__decorate([
    (0, common_1.Post)('AddVisit'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof update_dto_1.UpdateDto !== "undefined" && update_dto_1.UpdateDto) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], AppointmentController.prototype, "AddVisit", null);
__decorate([
    (0, common_1.Post)('RemoveVisit'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof update_dto_1.UpdateDto !== "undefined" && update_dto_1.UpdateDto) === "function" ? _h : Object]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], AppointmentController.prototype, "RemoveVisit", null);
__decorate([
    (0, common_1.Post)('findByid'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _k : Object]),
    __metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], AppointmentController.prototype, "findByid", null);
__decorate([
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_m = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _m : Object]),
    __metadata("design:returntype", typeof (_o = typeof Promise !== "undefined" && Promise) === "function" ? _o : Object)
], AppointmentController.prototype, "findByTime", null);
__decorate([
    (0, common_1.Post)('findByTime'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_p = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _p : Object]),
    __metadata("design:returntype", typeof (_q = typeof Promise !== "undefined" && Promise) === "function" ? _q : Object)
], AppointmentController.prototype, "findByStatus", null);
__decorate([
    (0, common_1.Post)('findByworkerProfileId'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_r = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _r : Object]),
    __metadata("design:returntype", typeof (_s = typeof Promise !== "undefined" && Promise) === "function" ? _s : Object)
], AppointmentController.prototype, "findByworkerProfileId", null);
__decorate([
    (0, common_1.Post)('UpdateProperty'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_t = typeof update_dto_1.UpdateDto !== "undefined" && update_dto_1.UpdateDto) === "function" ? _t : Object]),
    __metadata("design:returntype", typeof (_u = typeof Promise !== "undefined" && Promise) === "function" ? _u : Object)
], AppointmentController.prototype, "UpdateProperty", null);
AppointmentController = __decorate([
    (0, common_1.Controller)('appointment'),
    (0, swagger_1.ApiTags)('appointment'),
    __metadata("design:paramtypes", [typeof (_a = typeof appointment_service_1.AppointmentService !== "undefined" && appointment_service_1.AppointmentService) === "function" ? _a : Object])
], AppointmentController);
exports.AppointmentController = AppointmentController;


/***/ }),

/***/ "./apps/extension-worker/src/appointment/appointment.module.ts":
/*!*********************************************************************!*\
  !*** ./apps/extension-worker/src/appointment/appointment.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppointmentModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const appointment_service_1 = __webpack_require__(/*! ./appointment.service */ "./apps/extension-worker/src/appointment/appointment.service.ts");
const appointment_controller_1 = __webpack_require__(/*! ./appointment.controller */ "./apps/extension-worker/src/appointment/appointment.controller.ts");
const db_service_1 = __webpack_require__(/*! @app/lib/db/db.service */ "./libs/lib/src/db/db.service.ts");
let AppointmentModule = class AppointmentModule {
};
AppointmentModule = __decorate([
    (0, common_1.Module)({
        providers: [appointment_service_1.AppointmentService, db_service_1.DbService],
        controllers: [appointment_controller_1.AppointmentController],
    })
], AppointmentModule);
exports.AppointmentModule = AppointmentModule;


/***/ }),

/***/ "./apps/extension-worker/src/appointment/appointment.service.ts":
/*!**********************************************************************!*\
  !*** ./apps/extension-worker/src/appointment/appointment.service.ts ***!
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
exports.AppointmentService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const db_service_1 = __webpack_require__(/*! @app/lib/db/db.service */ "./libs/lib/src/db/db.service.ts");
let AppointmentService = class AppointmentService {
    constructor(db) {
        this.db = db;
    }
    async ScheduleAppointment(data) {
        try {
            let query = await this.db.appointment.create({
                data: {
                    status: 'PENDING',
                    time: data['time'],
                    workerProfileId: data['workerProfileId'],
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(undefined, error);
        }
    }
    async GetVisits(data) {
        try {
            let query = await this.db.visit.findMany({
                where: {
                    appointmentId: data['properties']['id'],
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(undefined, error);
        }
    }
    async AddVisit(data) {
        try {
            let query = await this.db.appointment.update({
                where: {
                    id: data['id'],
                },
                data: {
                    Visit: {
                        connect: {
                            id: data['properties']['visitId'],
                        },
                    },
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(undefined, error);
        }
    }
    async RemoveVisit(data) {
        try {
            let query = await this.db.appointment.update({
                where: {
                    id: data['id'],
                },
                data: {
                    Visit: {
                        disconnect: {
                            id: data['properties']['visitId'],
                        },
                    },
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(undefined, error);
        }
    }
    async findByid(data) {
        try {
            let query = await this.db.appointment.findFirstOrThrow({
                where: {
                    id: data['id'],
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(undefined, error);
        }
    }
    async findByTime(data) {
        try {
            let query = await this.db.appointment.findFirstOrThrow({
                where: {
                    id: data['id'],
                    time: data['properties']['time'],
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(undefined, error);
        }
    }
    async findByStatus(data) {
        try {
            let query = await this.db.appointment.findFirstOrThrow({
                where: {
                    id: data['id'],
                    status: data['properties']['status'],
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(undefined, error);
        }
    }
    async findByworkerProfileId(data) {
        try {
            let query = await this.db.appointment.findFirstOrThrow({
                where: {
                    id: data['id'],
                    workerProfileId: data['properties']['workerProfileId'],
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(undefined, error);
        }
    }
    async UpdateProperty(data) {
        try {
            let query = data['properties']['status'] !== undefined
                ? await this.db.appointment.update({
                    where: {
                        id: data['id'],
                    },
                    data: {
                        status: data['properties']['status'],
                    },
                })
                : data['properties']['time'] !== undefined
                    ? await this.db.appointment.update({
                        where: {
                            id: data['id'],
                        },
                        data: {
                            time: data['properties']['time'],
                        },
                    })
                    : data['properties']['workerProfileId'] !== undefined
                        ? await this.db.appointment.update({
                            where: {
                                id: data['id'],
                            },
                            data: {
                                workerProfileId: data['properties']['workerProfileId'],
                            },
                        })
                        : new common_1.BadRequestException('please pass in a valid property');
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(undefined, error);
        }
    }
};
AppointmentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof db_service_1.DbService !== "undefined" && db_service_1.DbService) === "function" ? _a : Object])
], AppointmentService);
exports.AppointmentService = AppointmentService;


/***/ }),

/***/ "./apps/extension-worker/src/appointment/dto/dto.ts":
/*!**********************************************************!*\
  !*** ./apps/extension-worker/src/appointment/dto/dto.ts ***!
  \**********************************************************/
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
exports.CreateAppointmentDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class CreateAppointmentDto {
    constructor(createAppointmentDto) {
        Object.assign(this, createAppointmentDto);
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CreateAppointmentDto.prototype, "time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateAppointmentDto.prototype, "workerProfileId", void 0);
exports.CreateAppointmentDto = CreateAppointmentDto;


/***/ }),

/***/ "./apps/extension-worker/src/appointment/dto/find_dto.ts":
/*!***************************************************************!*\
  !*** ./apps/extension-worker/src/appointment/dto/find_dto.ts ***!
  \***************************************************************/
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

/***/ "./apps/extension-worker/src/appointment/dto/update_dto.ts":
/*!*****************************************************************!*\
  !*** ./apps/extension-worker/src/appointment/dto/update_dto.ts ***!
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
const auth_guard_1 = __webpack_require__(/*! @app/lib/auth/auth.guard */ "./libs/lib/src/auth/auth.guard.ts");
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
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], ChallengeController.prototype, "CreateChallenge", null);
__decorate([
    (0, common_1.Post)('FindByid'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof Partial !== "undefined" && Partial) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], ChallengeController.prototype, "FindByid", null);
__decorate([
    (0, common_1.Post)('FindBytype'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof Partial !== "undefined" && Partial) === "function" ? _e : Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], ChallengeController.prototype, "FindBytype", null);
__decorate([
    (0, common_1.Post)('FindBycustom_felids'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof Partial !== "undefined" && Partial) === "function" ? _g : Object]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], ChallengeController.prototype, "FindBycustom_felids", null);
__decorate([
    (0, common_1.Post)('FindByvisitId'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof Partial !== "undefined" && Partial) === "function" ? _j : Object]),
    __metadata("design:returntype", typeof (_k = typeof Promise !== "undefined" && Promise) === "function" ? _k : Object)
], ChallengeController.prototype, "FindByvisitId", null);
__decorate([
    (0, common_1.Post)('UpdateProperty'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_l = typeof update_dto_1.UpdateDto !== "undefined" && update_dto_1.UpdateDto) === "function" ? _l : Object]),
    __metadata("design:returntype", typeof (_m = typeof Promise !== "undefined" && Promise) === "function" ? _m : Object)
], ChallengeController.prototype, "UpdateProperty", null);
ChallengeController = __decorate([
    (0, common_1.Controller)('challenge'),
    (0, swagger_1.ApiTags)('Challenge'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
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
const auth_module_1 = __webpack_require__(/*! @app/lib/auth/auth.module */ "./libs/lib/src/auth/auth.module.ts");
const email_service_1 = __webpack_require__(/*! @app/lib/email/email.service */ "./libs/lib/src/email/email.service.ts");
const auth_service_1 = __webpack_require__(/*! @app/lib/auth/auth.service */ "./libs/lib/src/auth/auth.service.ts");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const admin_service_1 = __webpack_require__(/*! apps/admin/src/admin/admin.service */ "./apps/admin/src/admin/admin.service.ts");
const farmer_service_1 = __webpack_require__(/*! apps/farmer/src/farmer/farmer.service */ "./apps/farmer/src/farmer/farmer.service.ts");
const worker_service_1 = __webpack_require__(/*! ../extension-worker/worker.service */ "./apps/extension-worker/src/extension-worker/worker.service.ts");
let ChallengeModule = class ChallengeModule {
};
ChallengeModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule],
        providers: [challenge_service_1.ChallengeService, db_service_1.DbService, auth_service_1.AuthService, farmer_service_1.FarmerService, admin_service_1.AdminService, worker_service_1.WorkerService, jwt_1.JwtService, email_service_1.MailService],
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
                    workerProfileId: data['workerProfileId'],
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
                    : data['properties']['workerProfileId'] !== undefined
                        ? await this.db.challenge.update({
                            data: {
                                workerProfileId: data['properties']['workerProfileId'],
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
const auth_guard_1 = __webpack_require__(/*! @app/lib/auth/auth.guard */ "./libs/lib/src/auth/auth.guard.ts");
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
    async getAllCooperatives() {
        return this.service.getAllCooperatives();
    }
};
__decorate([
    (0, common_1.Post)('CreateCooperative'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.CreateCooperativeDto !== "undefined" && dto_1.CreateCooperativeDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], CooperativeController.prototype, "CreateCooperative", null);
__decorate([
    (0, common_1.Post)('FindByid'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], CooperativeController.prototype, "FindByid", null);
__decorate([
    (0, common_1.Post)('FindByworkerProfileId'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], CooperativeController.prototype, "FindByworkerProfileId", null);
__decorate([
    (0, common_1.Post)('UpdateProperty'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof update_dto_1.UpdateDto !== "undefined" && update_dto_1.UpdateDto) === "function" ? _h : Object]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], CooperativeController.prototype, "UpdateProperty", null);
__decorate([
    (0, common_1.Post)('Getfarmers'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _k : Object]),
    __metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], CooperativeController.prototype, "Getfarmers", null);
__decorate([
    (0, common_1.Post)('Addfarmer'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_m = typeof update_dto_1.UpdateDto !== "undefined" && update_dto_1.UpdateDto) === "function" ? _m : Object]),
    __metadata("design:returntype", typeof (_o = typeof Promise !== "undefined" && Promise) === "function" ? _o : Object)
], CooperativeController.prototype, "Addfarmer", null);
__decorate([
    (0, common_1.Post)('Removefarmer'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_p = typeof Promise !== "undefined" && Promise) === "function" ? _p : Object)
], CooperativeController.prototype, "Removefarmer", null);
__decorate([
    (0, common_1.Get)('getAllCooperatives'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CooperativeController.prototype, "getAllCooperatives", null);
CooperativeController = __decorate([
    (0, common_1.Controller)('cooperative'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
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
const auth_service_1 = __webpack_require__(/*! @app/lib/auth/auth.service */ "./libs/lib/src/auth/auth.service.ts");
const farmer_service_1 = __webpack_require__(/*! apps/farmer/src/farmer/farmer.service */ "./apps/farmer/src/farmer/farmer.service.ts");
const admin_service_1 = __webpack_require__(/*! apps/admin/src/admin/admin.service */ "./apps/admin/src/admin/admin.service.ts");
const worker_service_1 = __webpack_require__(/*! ../extension-worker/worker.service */ "./apps/extension-worker/src/extension-worker/worker.service.ts");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const email_service_1 = __webpack_require__(/*! @app/lib/email/email.service */ "./libs/lib/src/email/email.service.ts");
let CooperativeModule = class CooperativeModule {
};
CooperativeModule = __decorate([
    (0, common_1.Module)({
        controllers: [cooperative_controller_1.CooperativeController],
        providers: [cooperative_service_1.CooperativeService, db_service_1.DbService, auth_service_1.AuthService, farmer_service_1.FarmerService, admin_service_1.AdminService, worker_service_1.WorkerService, jwt_1.JwtService, email_service_1.MailService]
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
const short_id_1 = __webpack_require__(/*! @app/lib/short_id */ "./libs/lib/src/short_id.ts");
let CooperativeService = class CooperativeService {
    constructor(db) {
        this.db = db;
    }
    async CreateCooperative(data) {
        try {
            let lga = await this.db.localGovernment.create({
                data: {
                    name: data['local_government_name'],
                },
            });
            let query = await this.db.cooperative.create({
                data: {
                    localGovernmentId: lga['id'],
                    animal_type: data['animal_type'],
                    location: data['location'],
                    name: data['name'],
                },
                include: {
                    farmers: true,
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
    async getAllCooperatives() {
        try {
            await (0, short_id_1.generateShortId)();
            return this.db.cooperative.findMany({
                include: {
                    lga: true,
                    WorkerProfile: true,
                },
            });
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
exports.CreateCooperativeDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class CreateCooperativeDto {
    constructor(createCooperativeDto) {
        Object.assign(this, createCooperativeDto);
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCooperativeDto.prototype, "Cooperative_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCooperativeDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCooperativeDto.prototype, "animal_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateCooperativeDto.prototype, "local_government_name", void 0);
exports.CreateCooperativeDto = CreateCooperativeDto;


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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExtensionWorkerController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const create_auth_dto_1 = __webpack_require__(/*! @app/lib/auth/dto/create-auth.dto */ "./libs/lib/src/auth/dto/create-auth.dto.ts");
const login_auth_dto_1 = __webpack_require__(/*! @app/lib/auth/dto/login-auth.dto */ "./libs/lib/src/auth/dto/login-auth.dto.ts");
const dto_1 = __webpack_require__(/*! apps/farmer/src/farmer/dto/dto */ "./apps/farmer/src/farmer/dto/dto.ts");
const find_dto_1 = __webpack_require__(/*! apps/farmer/src/farmer/dto/find.dto */ "./apps/farmer/src/farmer/dto/find.dto.ts");
const worker_service_1 = __webpack_require__(/*! ./worker.service */ "./apps/extension-worker/src/extension-worker/worker.service.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const auth_guard_1 = __webpack_require__(/*! @app/lib/auth/auth.guard */ "./libs/lib/src/auth/auth.guard.ts");
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
    CreateResource(data) {
        return this.worker.CreateResource(data);
    }
    UpdateProperty(id, data) {
        return this.worker.UpdateProperties(data, id);
    }
    FindByEmail(data) {
        return this.worker.FindByEmail(data);
    }
    getAllWorkers() {
        return this.worker.getAllWorkers();
    }
    getAllWorkersCount() {
        return this.worker.getAllExtensionWorkersCount();
    }
    SignOut() {
        return this.worker.SignOut();
    }
};
__decorate([
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.UpdateDto !== "undefined" && dto_1.UpdateDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], ExtensionWorkerController.prototype, "UpdatePassword", null);
__decorate([
    (0, common_1.Post)('FindById'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], ExtensionWorkerController.prototype, "FindById", null);
__decorate([
    (0, common_1.Post)('FindByPhone_Number'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], ExtensionWorkerController.prototype, "FindByPhone_Number", null);
__decorate([
    (0, common_1.Post)('FindByFirst_name'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _h : Object]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], ExtensionWorkerController.prototype, "FindByFirst_name", null);
__decorate([
    (0, common_1.Post)('createExtensionWorker'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof create_auth_dto_1.CreateUserDto !== "undefined" && create_auth_dto_1.CreateUserDto) === "function" ? _k : Object]),
    __metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], ExtensionWorkerController.prototype, "CreateResource", null);
__decorate([
    (0, common_1.Post)('UpdateProperty'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_m = typeof dto_1.UpdateDto !== "undefined" && dto_1.UpdateDto) === "function" ? _m : Object]),
    __metadata("design:returntype", typeof (_o = typeof Promise !== "undefined" && Promise) === "function" ? _o : Object)
], ExtensionWorkerController.prototype, "UpdateProperty", null);
__decorate([
    (0, common_1.Post)('FindByEmail'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_p = typeof login_auth_dto_1.ValidationDto !== "undefined" && login_auth_dto_1.ValidationDto) === "function" ? _p : Object]),
    __metadata("design:returntype", typeof (_q = typeof Promise !== "undefined" && Promise) === "function" ? _q : Object)
], ExtensionWorkerController.prototype, "FindByEmail", null);
__decorate([
    (0, common_1.Get)('getAllWorkers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExtensionWorkerController.prototype, "getAllWorkers", null);
__decorate([
    (0, common_1.Get)('getAllWorkersCount'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExtensionWorkerController.prototype, "getAllWorkersCount", null);
ExtensionWorkerController = __decorate([
    (0, common_1.Controller)('extension-worker'),
    (0, swagger_1.ApiTags)('Extension Worker'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
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
const milestone_service_1 = __webpack_require__(/*! ../milestone/milestone.service */ "./apps/extension-worker/src/milestone/milestone.service.ts");
const challenge_module_1 = __webpack_require__(/*! ../challenge/challenge.module */ "./apps/extension-worker/src/challenge/challenge.module.ts");
const cooperative_service_1 = __webpack_require__(/*! ../cooperative/cooperative.service */ "./apps/extension-worker/src/cooperative/cooperative.service.ts");
const project_service_1 = __webpack_require__(/*! ../project/project.service */ "./apps/extension-worker/src/project/project.service.ts");
const profile_service_1 = __webpack_require__(/*! ../profile/profile.service */ "./apps/extension-worker/src/profile/profile.service.ts");
const visit_module_1 = __webpack_require__(/*! ../visit/visit.module */ "./apps/extension-worker/src/visit/visit.module.ts");
const appointment_module_1 = __webpack_require__(/*! ../appointment/appointment.module */ "./apps/extension-worker/src/appointment/appointment.module.ts");
const appointment_controller_1 = __webpack_require__(/*! ../appointment/appointment.controller */ "./apps/extension-worker/src/appointment/appointment.controller.ts");
const appointment_service_1 = __webpack_require__(/*! ../appointment/appointment.service */ "./apps/extension-worker/src/appointment/appointment.service.ts");
const farmer_module_1 = __webpack_require__(/*! apps/farmer/src/farmer.module */ "./apps/farmer/src/farmer.module.ts");
const schedule_1 = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
const email_service_1 = __webpack_require__(/*! @app/lib/email/email.service */ "./libs/lib/src/email/email.service.ts");
const auth_module_1 = __webpack_require__(/*! @app/lib/auth/auth.module */ "./libs/lib/src/auth/auth.module.ts");
const localgovernment_module_1 = __webpack_require__(/*! ../localgovernment/localgovernment.module */ "./apps/extension-worker/src/localgovernment/localgovernment.module.ts");
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
            visit_module_1.VisitModule,
            Intervention_module_1.InterventionModule,
            appointment_module_1.AppointmentModule,
            farmer_module_1.FarmerModule,
            schedule_1.ScheduleModule.forRoot(),
            auth_module_1.AuthModule,
            localgovernment_module_1.LocalgovernmentModule
        ],
        controllers: [
            auth_controller_1.AuthController,
            extension_worker_controller_1.ExtensionWorkerController,
            milestone_controller_1.MilestoneController,
            cooperative_controller_1.CooperativeController,
            project_controller_1.ProjectController,
            appointment_controller_1.AppointmentController,
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
            profile_service_1.ProfileService,
            appointment_service_1.AppointmentService,
            email_service_1.MailService
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
const worker_growth_calc_1 = __webpack_require__(/*! @app/lib/worker_growth_calc */ "./libs/lib/src/worker_growth_calc.ts");
const short_id_1 = __webpack_require__(/*! @app/lib/short_id */ "./libs/lib/src/short_id.ts");
const argon2_1 = __webpack_require__(/*! argon2 */ "argon2");
let WorkerService = class WorkerService {
    constructor(db) {
        this.db = db;
        this.UpdateProperties = async (data, id) => {
            let workerId = id;
            console.log(data);
            try {
                let query = data['property']['email'] !== undefined
                    ? await this.db.user.update({
                        data: {
                            email: data['property']['email'],
                        },
                        where: {
                            id: workerId,
                            type: 'EXTENSION_WORKER',
                        },
                    })
                    : data['property']['first_name'] !== undefined
                        ? await this.db.user.update({
                            data: {
                                first_name: data['property']['first_name'],
                            },
                            where: {
                                id: workerId,
                                type: 'EXTENSION_WORKER',
                            },
                        })
                        : data['property']['phone_number'] !== undefined
                            ? await this.db.user.update({
                                data: {
                                    phone_number: data['property']['phone_number'],
                                },
                                where: {
                                    id: workerId,
                                    type: 'EXTENSION_WORKER',
                                },
                            })
                            : data['property']['password'] !== undefined
                                ? await this.db.user.update({
                                    data: {
                                        password: data['property']['password'],
                                    },
                                    where: {
                                        id: workerId,
                                        type: 'EXTENSION_WORKER',
                                    },
                                })
                                : data['property']['birthday'] !== undefined
                                    ? await this.db.user.update({
                                        data: {
                                            workerProfile: {
                                                update: {
                                                    birthday: data['property']['birthday'],
                                                },
                                            },
                                        },
                                        where: {
                                            id: workerId,
                                            type: 'EXTENSION_WORKER',
                                        },
                                    })
                                    : data['property']['age'] !== undefined
                                        ? await this.db.user.update({
                                            data: {
                                                workerProfile: {
                                                    update: {
                                                        age: data['property']['age'],
                                                    },
                                                },
                                            },
                                            where: {
                                                id: workerId,
                                                type: 'EXTENSION_WORKER',
                                            },
                                        })
                                        : data['property']['religion'] !== undefined
                                            ? await this.db.user.update({
                                                data: {
                                                    workerProfile: {
                                                        update: {
                                                            religion: data['property']['religion'],
                                                        },
                                                    },
                                                },
                                                where: {
                                                    id: workerId,
                                                    type: 'EXTENSION_WORKER',
                                                },
                                            })
                                            : data['property']['maritalStatus'] !== undefined
                                                ? await this.db.user.update({
                                                    data: {
                                                        workerProfile: {
                                                            update: {
                                                                maritalStatus: data['property']['maritalStatus'],
                                                            },
                                                        },
                                                    },
                                                    where: {
                                                        id: workerId,
                                                        type: 'EXTENSION_WORKER',
                                                    },
                                                })
                                                : data['property']['sex'] !== undefined
                                                    ? await this.db.user.update({
                                                        data: {
                                                            workerProfile: {
                                                                update: {
                                                                    sex: data['property']['sex'],
                                                                },
                                                            },
                                                        },
                                                        where: {
                                                            id: workerId,
                                                            type: 'EXTENSION_WORKER',
                                                        },
                                                    })
                                                    : data['property']['address'] !== undefined
                                                        ? await this.db.user.update({
                                                            data: {
                                                                workerProfile: {
                                                                    update: {
                                                                        address: JSON.parse(data['property']['address']),
                                                                    },
                                                                },
                                                            },
                                                            where: {
                                                                id: workerId,
                                                                type: 'EXTENSION_WORKER',
                                                            },
                                                            include: {
                                                                workerProfile: {
                                                                    include: {
                                                                        Appointment: true,
                                                                        Challenge: true,
                                                                        Cooperative: true,
                                                                        projects: true,
                                                                        reports: true,
                                                                        Visit: true,
                                                                    },
                                                                },
                                                            },
                                                        })
                                                        : new common_1.BadRequestException('Please pass in a valid property');
                return query;
            }
            catch (error) {
                new common_1.BadRequestException(error, {
                    cause: error,
                });
            }
        };
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
            throw new common_1.BadRequestException(error);
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
            throw new common_1.BadRequestException(error);
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
            throw new common_1.BadRequestException(error);
        }
    }
    async FindById(data) {
        try {
            const user = await this.db.user.findFirstOrThrow({
                where: {
                    id: data['id'],
                    type: 'EXTENSION_WORKER',
                },
                include: {
                    workerProfile: {
                        include: {
                            Appointment: true,
                            Challenge: true,
                            Cooperative: true,
                            projects: true,
                            reports: true,
                            Visit: true,
                        },
                    },
                },
            });
            return user;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
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
            throw new common_1.BadRequestException(error);
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
            throw new common_1.BadRequestException(error);
        }
    }
    async UpdatePassword(data) {
        try {
            const user = await this.db.user.update({
                where: {
                    email: data['property']['email'],
                    type: 'EXTENSION_WORKER',
                },
                data: {
                    password: data['property']['password'],
                },
            });
            return user;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async CreateResource(data) {
        try {
            const user = await this.db.user.create({
                data: {
                    id: (0, short_id_1.generateShortId)(),
                    nin: data['nin'],
                    email: data['email'],
                    first_name: data['first_name'],
                    last_name: data['last_name'],
                    password: await (0, argon2_1.hash)("password_1", {
                        secret: Buffer.from(process.env.HASH_SECRET || 'hash'),
                        type: 2,
                    }),
                    phone_number: data['phone_number'],
                    type: 'EXTENSION_WORKER',
                    workerProfile: {
                        create: {
                            id: (0, short_id_1.generateShortId)(),
                            address: data['address'] !== undefined ? data['address'] : JSON,
                            localGovernmentId: data['localGovernmentId'],
                            age: Number(data['age']),
                            birthday: data['birthday'],
                            maritalStatus: data['maritalStatus'],
                            religion: data['religion'],
                            sex: data['sex'],
                        },
                    },
                }, include: {
                    workerProfile: {
                        include: {
                            assigned_to: true
                        }
                    }
                }
            });
            return user;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error);
        }
    }
    SignOut() {
        throw new Error('Method not implemented.');
    }
    async FindByEmail(data) {
        try {
            const user = await this.db.user.findFirstOrThrow({
                where: {
                    email: data['email'],
                    type: 'EXTENSION_WORKER',
                }, include: {
                    workerProfile: {
                        include: {
                            assigned_to: true
                        }
                    }
                }
            });
            return user;
        }
        catch (error) {
            console.log(error);
        }
    }
    async getAllWorkers() {
        let count = (await this.db.workerProfile.findMany()).length;
        let query = await this.db.user.findMany({
            where: {
                type: 'EXTENSION_WORKER',
            },
            include: {
                workerProfile: {
                    include: {
                        Appointment: true,
                        Challenge: true,
                        Cooperative: true,
                        projects: true,
                        reports: true,
                        Visit: true,
                    },
                },
            },
        });
        const data = {
            count: count,
            query: query
        };
        return query;
    }
    async getAllExtensionWorkersCount() {
        try {
            const res = {
                count: Number,
                percent: Number,
            };
            res['count'] = await this.db.workerProfile.count();
            res['percent'] = await (0, worker_growth_calc_1.calculateGrowth)();
            return res;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
};
WorkerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof db_service_1.DbService !== "undefined" && db_service_1.DbService) === "function" ? _a : Object])
], WorkerService);
exports.WorkerService = WorkerService;


/***/ }),

/***/ "./apps/extension-worker/src/localgovernment/localgovernment.module.ts":
/*!*****************************************************************************!*\
  !*** ./apps/extension-worker/src/localgovernment/localgovernment.module.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalgovernmentModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const lol_gov_service_1 = __webpack_require__(/*! ./lol_gov.service */ "./apps/extension-worker/src/localgovernment/lol_gov.service.ts");
const lol_gov_controller_1 = __webpack_require__(/*! ./lol_gov.controller */ "./apps/extension-worker/src/localgovernment/lol_gov.controller.ts");
const db_service_1 = __webpack_require__(/*! @app/lib/db/db.service */ "./libs/lib/src/db/db.service.ts");
let LocalgovernmentModule = class LocalgovernmentModule {
};
LocalgovernmentModule = __decorate([
    (0, common_1.Module)({
        providers: [lol_gov_service_1.LolGovService, db_service_1.DbService],
        controllers: [lol_gov_controller_1.LolGovController]
    })
], LocalgovernmentModule);
exports.LocalgovernmentModule = LocalgovernmentModule;


/***/ }),

/***/ "./apps/extension-worker/src/localgovernment/lol_gov.controller.ts":
/*!*************************************************************************!*\
  !*** ./apps/extension-worker/src/localgovernment/lol_gov.controller.ts ***!
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LolGovController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const lol_gov_service_1 = __webpack_require__(/*! ./lol_gov.service */ "./apps/extension-worker/src/localgovernment/lol_gov.service.ts");
let LolGovController = class LolGovController {
    constructor(lcl) {
        this.lcl = lcl;
    }
    async getAllLocalGov() {
        try {
            return this.lcl.getAllLocalGov();
        }
        catch (error) {
            throw new common_1.BadRequestException(undefined);
        }
    }
    async getFarmersByLocalGovernment(id) {
        try {
            return this.lcl.getFarmersByLocalGovernment(id);
        }
        catch (error) {
        }
    }
};
__decorate([
    (0, common_1.Get)("getAllLocalGov"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LolGovController.prototype, "getAllLocalGov", null);
__decorate([
    (0, common_1.Get)('getFarmersByLocalGovernment'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LolGovController.prototype, "getFarmersByLocalGovernment", null);
LolGovController = __decorate([
    (0, common_1.Controller)('lol-gov'),
    __metadata("design:paramtypes", [typeof (_a = typeof lol_gov_service_1.LolGovService !== "undefined" && lol_gov_service_1.LolGovService) === "function" ? _a : Object])
], LolGovController);
exports.LolGovController = LolGovController;


/***/ }),

/***/ "./apps/extension-worker/src/localgovernment/lol_gov.service.ts":
/*!**********************************************************************!*\
  !*** ./apps/extension-worker/src/localgovernment/lol_gov.service.ts ***!
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
exports.LolGovService = void 0;
const db_service_1 = __webpack_require__(/*! @app/lib/db/db.service */ "./libs/lib/src/db/db.service.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let LolGovService = class LolGovService {
    constructor(db) {
        this.db = db;
    }
    async getAllLocalGov() {
        return this.db.localGovernment.findMany();
    }
    async getFarmersByLocalGovernment(id) {
        return this.db.farmerProfile.findMany({
            where: {
                localGovernmentId: id,
            }, include: {
                User: true,
                lga: true,
            }
        });
    }
};
LolGovService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof db_service_1.DbService !== "undefined" && db_service_1.DbService) === "function" ? _a : Object])
], LolGovService);
exports.LolGovService = LolGovService;


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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateMilestoneDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateMilestoneDto {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String, format: 'uuid' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateMilestoneDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: 'Array of FarmerProfile IDs' }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], CreateMilestoneDto.prototype, "farmerProfileId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMilestoneDto.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Date }),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CreateMilestoneDto.prototype, "start_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Date }),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], CreateMilestoneDto.prototype, "end_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateMilestoneDto.prototype, "isAchieved", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Object, description: 'Custom fields as JSON object' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_c = typeof Record !== "undefined" && Record) === "function" ? _c : Object)
], CreateMilestoneDto.prototype, "custom_field", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String, format: 'uuid' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateMilestoneDto.prototype, "recommendationId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String, format: 'uuid' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateMilestoneDto.prototype, "projectId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String, format: 'uuid' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateMilestoneDto.prototype, "visitId", void 0);
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
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.CreateMilestoneDto !== "undefined" && dto_1.CreateMilestoneDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], MilestoneController.prototype, "CreateMilestone", null);
__decorate([
    (0, common_1.Post)('FindByid'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], MilestoneController.prototype, "FindByid", null);
__decorate([
    (0, common_1.Post)('GetFarmers'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], MilestoneController.prototype, "GetFarmers", null);
__decorate([
    (0, common_1.Post)('AddFarmers'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof update_dto_1.UpdateDto !== "undefined" && update_dto_1.UpdateDto) === "function" ? _h : Object]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], MilestoneController.prototype, "AddFarmers", null);
__decorate([
    (0, common_1.Post)('RemoveFarmers'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof update_dto_1.UpdateDto !== "undefined" && update_dto_1.UpdateDto) === "function" ? _k : Object]),
    __metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], MilestoneController.prototype, "RemoveFarmers", null);
__decorate([
    (0, common_1.Post)('FindBytext'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_m = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _m : Object]),
    __metadata("design:returntype", typeof (_o = typeof Promise !== "undefined" && Promise) === "function" ? _o : Object)
], MilestoneController.prototype, "FindBytext", null);
__decorate([
    (0, common_1.Post)('FindByisAchieved'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_p = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _p : Object]),
    __metadata("design:returntype", typeof (_q = typeof Promise !== "undefined" && Promise) === "function" ? _q : Object)
], MilestoneController.prototype, "FindByisAchieved", null);
__decorate([
    (0, common_1.Post)('FindByrecommendationId'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_r = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _r : Object]),
    __metadata("design:returntype", typeof (_s = typeof Promise !== "undefined" && Promise) === "function" ? _s : Object)
], MilestoneController.prototype, "FindByrecommendationId", null);
__decorate([
    (0, common_1.Post)('FindByprojectId'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_t = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _t : Object]),
    __metadata("design:returntype", typeof (_u = typeof Promise !== "undefined" && Promise) === "function" ? _u : Object)
], MilestoneController.prototype, "FindByprojectId", null);
__decorate([
    (0, common_1.Post)('UpdateProperty'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
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
                    projectId: data['projectId'],
                },
                select: {
                    id: true,
                    isAchieved: true,
                    Project: true,
                    start_date: true,
                    end_date: true,
                    text: true,
                    createdAt: true,
                    updatedAt: true
                }
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
                    Milestone: data['property']['milestone_id'],
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
            let query = await this.db.milestone.findMany({
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
            throw new common_1.BadRequestException(error);
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
var _a, _b, _c;
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
    __metadata("design:type", String)
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
var _a, _b;
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
    __metadata("design:type", typeof (_b = typeof Partial !== "undefined" && Partial) === "function" ? _b : Object)
], UpdateDto.prototype, "properties", void 0);
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
        return this.profile.Getreports(data);
    }
    Addreport(data) {
        return this.profile.Addreport(data);
    }
    CreateProfile(data) {
        return this.profile.CreateProfile(data);
    }
    Getprojects(data) {
        return this.profile.Getprojects(data);
    }
    GetCooperative(data) {
        return this.profile.GetCooperative(data);
    }
    Addproject(data) {
        return this.profile.Addproject(data);
    }
    AddCooperative(data) {
        return this.profile.AddCooperative(data);
    }
    Removeproject(data) {
        return this.profile.Removeproject(data);
    }
    Removereport(data) {
        return this.profile.Removereport(data);
    }
    RemoveCooperative(data) {
        return this.profile.RemoveCooperative(data);
    }
    findByUserId(data) {
        return this.profile.findByUserId(data);
    }
    UpdateProperty(data) {
        return this.profile.UpdateProperty(data);
    }
};
__decorate([
    (0, common_1.Post)('Getreports'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], ProfileController.prototype, "Getreports", null);
__decorate([
    (0, common_1.Post)('Addreport'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof dto_3.CreateReportDto !== "undefined" && dto_3.CreateReportDto) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], ProfileController.prototype, "Addreport", null);
__decorate([
    (0, common_1.Post)('CreateProfile'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof dto_4.CreateProfileDto !== "undefined" && dto_4.CreateProfileDto) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], ProfileController.prototype, "CreateProfile", null);
__decorate([
    (0, common_1.Post)('Getprojects'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _h : Object]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], ProfileController.prototype, "Getprojects", null);
__decorate([
    (0, common_1.Post)('GetCooperative'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _k : Object]),
    __metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], ProfileController.prototype, "GetCooperative", null);
__decorate([
    (0, common_1.Post)('Addproject'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_m = typeof dto_2.CreateProjectDto !== "undefined" && dto_2.CreateProjectDto) === "function" ? _m : Object]),
    __metadata("design:returntype", typeof (_o = typeof Promise !== "undefined" && Promise) === "function" ? _o : Object)
], ProfileController.prototype, "Addproject", null);
__decorate([
    (0, common_1.Post)('AddCooperative'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_p = typeof dto_1.CreateCooperativeDto !== "undefined" && dto_1.CreateCooperativeDto) === "function" ? _p : Object]),
    __metadata("design:returntype", typeof (_q = typeof Promise !== "undefined" && Promise) === "function" ? _q : Object)
], ProfileController.prototype, "AddCooperative", null);
__decorate([
    (0, common_1.Post)('Removeproject'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_r = typeof update_dto_1.UpdateDto !== "undefined" && update_dto_1.UpdateDto) === "function" ? _r : Object]),
    __metadata("design:returntype", typeof (_s = typeof Promise !== "undefined" && Promise) === "function" ? _s : Object)
], ProfileController.prototype, "Removeproject", null);
__decorate([
    (0, common_1.Post)('Removereport'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_t = typeof update_dto_1.UpdateDto !== "undefined" && update_dto_1.UpdateDto) === "function" ? _t : Object]),
    __metadata("design:returntype", typeof (_u = typeof Promise !== "undefined" && Promise) === "function" ? _u : Object)
], ProfileController.prototype, "Removereport", null);
__decorate([
    (0, common_1.Post)('RemoveCooperative'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_v = typeof update_dto_1.UpdateDto !== "undefined" && update_dto_1.UpdateDto) === "function" ? _v : Object]),
    __metadata("design:returntype", typeof (_w = typeof Promise !== "undefined" && Promise) === "function" ? _w : Object)
], ProfileController.prototype, "RemoveCooperative", null);
__decorate([
    (0, common_1.Post)('findByUserId'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_x = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _x : Object]),
    __metadata("design:returntype", typeof (_y = typeof Promise !== "undefined" && Promise) === "function" ? _y : Object)
], ProfileController.prototype, "findByUserId", null);
__decorate([
    (0, common_1.Post)('UpdateProperty'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
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
                    photo: data['photo'],
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async Getprojects(data) {
        try {
            let query = await this.db.project.findMany({
                include: {
                    participants: true,
                },
            });
            let projects;
            query.forEach((element) => {
                element.participants.forEach((farmer) => {
                    if (farmer['id'] == data['id']) {
                        projects.push(element);
                    }
                });
            });
            return projects;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
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
            throw new common_1.BadRequestException(error);
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
            throw new common_1.BadRequestException(error);
        }
    }
    async Addproject(data) {
        try {
            let project = await this.db.project.create({
                data: {
                    status: 'ACTIVE',
                    name: data['name'],
                    description: data['description'],
                    end_date: data['end_date'],
                    start_date: data['start_date'],
                    type: data['type'],
                    workerProfileId: data['workerProfileId'],
                    location: data['location'],
                },
                include: {
                    participants: {
                        include: {
                            User: true
                        }
                    }
                }
            });
            if (data['farmer_ids'].length > 0) {
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
            }
            return project;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
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
            throw new common_1.BadRequestException(error);
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
                            id: data['properties']['project_id'],
                        },
                    },
                },
            });
            return true;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
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
                            id: data['properties']['project_id'],
                        },
                    },
                },
            });
            return true;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
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
            throw new common_1.BadRequestException(error);
        }
    }
    async UpdateProperty(data) {
        console.log(data);
        try {
            let query = data['properties']['about'] !== undefined
                ? await this.db.workerProfile.update({
                    where: {
                        id: data['id'],
                    },
                    data: {
                        about: data['properties']['about'],
                    },
                })
                : data['properties']['age'] !== undefined
                    ? await this.db.workerProfile.update({
                        where: {
                            id: data['id'],
                        },
                        data: {
                            age: data['properties']['age'],
                        },
                    })
                    : data['properties']['sex'] !== undefined
                        ? await this.db.workerProfile.update({
                            where: {
                                id: data['id'],
                            },
                            data: {
                                sex: data['properties']['sex'],
                            },
                        })
                        : data['properties']['birthday'] !== undefined
                            ? await this.db.workerProfile.update({
                                where: {
                                    id: data['id'],
                                },
                                data: {
                                    birthday: data['properties']['birthday'],
                                },
                            })
                            : data['properties']['address'] !== undefined
                                ? await this.db.workerProfile.update({
                                    where: {
                                        id: data['id'],
                                    },
                                    data: {
                                        address: data['properties']['address'],
                                    },
                                })
                                : data['properties']['religion'] !== undefined
                                    ? await this.db.workerProfile.update({
                                        where: {
                                            id: data['id'],
                                        },
                                        data: {
                                            religion: data['properties']['religion'],
                                        },
                                    })
                                    : data['properties']['religion'] !== undefined
                                        ? await this.db.workerProfile.update({
                                            where: {
                                                id: data['id'],
                                            },
                                            data: {
                                                religion: data['properties']['religion'],
                                            },
                                        })
                                        : data['properties']['maritalStatus'] !== undefined
                                            ? await this.db.workerProfile.update({
                                                where: {
                                                    id: data['id'],
                                                },
                                                data: {
                                                    maritalStatus: data['properties']['maritalStatus'],
                                                },
                                            })
                                            : data['properties']['photo'] !== undefined
                                                ? await this.db.workerProfile.update({
                                                    where: {
                                                        id: data['id'],
                                                    },
                                                    data: {
                                                        photo: data['properties']['photo'],
                                                    },
                                                })
                                                : new common_1.BadRequestException('specify a proper type to be updated');
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
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
exports.CreateProjectDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
class CreateProjectDto {
    constructor(data) {
        Object.assign(this, data);
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateProjectDto.prototype, "farmer_ids", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: client_1.ProjectStatus, enumName: 'ProjectStatus' }),
    (0, class_validator_1.IsEnum)(client_1.ProjectStatus),
    __metadata("design:type", typeof (_a = typeof client_1.ProjectStatus !== "undefined" && client_1.ProjectStatus) === "function" ? _a : Object)
], CreateProjectDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: client_1.ProjectType, enumName: 'ProjectType' }),
    (0, class_validator_1.IsEnum)(client_1.ProjectType),
    __metadata("design:type", typeof (_b = typeof client_1.ProjectType !== "undefined" && client_1.ProjectType) === "function" ? _b : Object)
], CreateProjectDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Date }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], CreateProjectDto.prototype, "start_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Date }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], CreateProjectDto.prototype, "end_date", void 0);
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const dto_1 = __webpack_require__(/*! ./dto/dto */ "./apps/extension-worker/src/project/dto/dto.ts");
const find_dto_1 = __webpack_require__(/*! ./dto/find_dto */ "./apps/extension-worker/src/project/dto/find_dto.ts");
const update_dto_1 = __webpack_require__(/*! ./dto/update_dto */ "./apps/extension-worker/src/project/dto/update_dto.ts");
const project_service_1 = __webpack_require__(/*! ./project.service */ "./apps/extension-worker/src/project/project.service.ts");
const auth_guard_1 = __webpack_require__(/*! @app/lib/auth/auth.guard */ "./libs/lib/src/auth/auth.guard.ts");
let ProjectController = class ProjectController {
    constructor(project) {
        this.project = project;
    }
    CreateProject(data) {
        try {
            return this.project.CreateProject(data);
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    Addparticipant(data) {
        try {
            console.log(data);
            return this.project.Addparticipant(data);
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    Addmilestones(data) {
        try {
            return this.project.Addmilestones(data);
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    Getparticipants(data) {
        try {
            return this.project.Getparticipants(data);
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    Removeparticipants(data) {
        try {
            return this.project.Removeparticipants(data);
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    Getmilestones(data) {
        try {
            return this.project.Getmilestones(data);
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    Removemilestones(data) {
        try {
            return this.project.Removemilestones(data);
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    FindByid(data) {
        try {
            return this.project.FindByid(data);
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    FindBytype(data) {
        try {
            return this.project.FindBytype(data);
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    FindByparticipants(data) {
        try {
            return this.project.FindByparticipants(data);
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    FindBymilestones(data) {
        try {
            return this.project.FindBymilestones(data);
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    FindBystart_date(data) {
        try {
            return this.project.FindBystart_date(data);
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    FindByend_date(data) {
        try {
            return this.project.FindByend_date(data);
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    FindByworkerProfileId(data) {
        try {
            return this.project.FindByworkerProfileId(data);
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    UpdateProperty(data) {
        try {
            return this.project.UpdateProperty(data);
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async getAllProjectCount() {
        return this.project.getAllProjectCount();
    }
    async getAllProjects() {
        return this.project.getAllProjects();
    }
};
__decorate([
    (0, common_1.Post)('CreateProject'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
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
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], ProjectController.prototype, "Addmilestones", null);
__decorate([
    (0, common_1.Post)('Getparticipants'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _g : Object]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], ProjectController.prototype, "Getparticipants", null);
__decorate([
    (0, common_1.Post)('Removeparticipants'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof update_dto_1.UpdateDto !== "undefined" && update_dto_1.UpdateDto) === "function" ? _j : Object]),
    __metadata("design:returntype", typeof (_k = typeof Promise !== "undefined" && Promise) === "function" ? _k : Object)
], ProjectController.prototype, "Removeparticipants", null);
__decorate([
    (0, common_1.Post)('Getmilestones'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_l = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _l : Object]),
    __metadata("design:returntype", typeof (_m = typeof Promise !== "undefined" && Promise) === "function" ? _m : Object)
], ProjectController.prototype, "Getmilestones", null);
__decorate([
    (0, common_1.Post)('Removemilestones'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_o = typeof update_dto_1.UpdateDto !== "undefined" && update_dto_1.UpdateDto) === "function" ? _o : Object]),
    __metadata("design:returntype", typeof (_p = typeof Promise !== "undefined" && Promise) === "function" ? _p : Object)
], ProjectController.prototype, "Removemilestones", null);
__decorate([
    (0, common_1.Post)('FindByid'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_q = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _q : Object]),
    __metadata("design:returntype", typeof (_r = typeof Promise !== "undefined" && Promise) === "function" ? _r : Object)
], ProjectController.prototype, "FindByid", null);
__decorate([
    (0, common_1.Post)('FindBytype'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_s = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _s : Object]),
    __metadata("design:returntype", typeof (_t = typeof Promise !== "undefined" && Promise) === "function" ? _t : Object)
], ProjectController.prototype, "FindBytype", null);
__decorate([
    (0, common_1.Post)('FindByparticipants'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_u = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _u : Object]),
    __metadata("design:returntype", typeof (_v = typeof Promise !== "undefined" && Promise) === "function" ? _v : Object)
], ProjectController.prototype, "FindByparticipants", null);
__decorate([
    (0, common_1.Post)('FindBymilestones'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_w = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _w : Object]),
    __metadata("design:returntype", typeof (_x = typeof Promise !== "undefined" && Promise) === "function" ? _x : Object)
], ProjectController.prototype, "FindBymilestones", null);
__decorate([
    (0, common_1.Post)('FindBystart_date'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_y = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _y : Object]),
    __metadata("design:returntype", typeof (_z = typeof Promise !== "undefined" && Promise) === "function" ? _z : Object)
], ProjectController.prototype, "FindBystart_date", null);
__decorate([
    (0, common_1.Post)('FindByend_date'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_0 = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _0 : Object]),
    __metadata("design:returntype", typeof (_1 = typeof Promise !== "undefined" && Promise) === "function" ? _1 : Object)
], ProjectController.prototype, "FindByend_date", null);
__decorate([
    (0, common_1.Post)('FindByworkerProfileId'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_2 = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _2 : Object]),
    __metadata("design:returntype", typeof (_3 = typeof Promise !== "undefined" && Promise) === "function" ? _3 : Object)
], ProjectController.prototype, "FindByworkerProfileId", null);
__decorate([
    (0, common_1.Post)('UpdateProperty'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_4 = typeof update_dto_1.UpdateDto !== "undefined" && update_dto_1.UpdateDto) === "function" ? _4 : Object]),
    __metadata("design:returntype", typeof (_5 = typeof Promise !== "undefined" && Promise) === "function" ? _5 : Object)
], ProjectController.prototype, "UpdateProperty", null);
__decorate([
    (0, common_1.Get)('getAllProjectCount'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "getAllProjectCount", null);
__decorate([
    (0, common_1.Get)('getAllProjects'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "getAllProjects", null);
ProjectController = __decorate([
    (0, common_1.Controller)('project'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
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
const auth_service_1 = __webpack_require__(/*! @app/lib/auth/auth.service */ "./libs/lib/src/auth/auth.service.ts");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const admin_service_1 = __webpack_require__(/*! apps/admin/src/admin/admin.service */ "./apps/admin/src/admin/admin.service.ts");
const farmer_service_1 = __webpack_require__(/*! apps/farmer/src/farmer/farmer.service */ "./apps/farmer/src/farmer/farmer.service.ts");
const worker_service_1 = __webpack_require__(/*! ../extension-worker/worker.service */ "./apps/extension-worker/src/extension-worker/worker.service.ts");
const email_service_1 = __webpack_require__(/*! @app/lib/email/email.service */ "./libs/lib/src/email/email.service.ts");
let ProjectModule = class ProjectModule {
};
ProjectModule = __decorate([
    (0, common_1.Module)({
        controllers: [project_controller_1.ProjectController],
        providers: [project_service_1.ProjectService, profile_service_1.ProfileService, auth_service_1.AuthService, farmer_service_1.FarmerService, admin_service_1.AdminService, worker_service_1.WorkerService, jwt_1.JwtService, email_service_1.MailService, db_service_1.DbService],
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
const projects_growth_calc_1 = __webpack_require__(/*! @app/lib/projects_growth_calc */ "./libs/lib/src/projects_growth_calc.ts");
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
            throw new common_1.BadRequestException(error);
        }
    }
    async Addparticipant(data) {
        try {
            const query = await this.db.project.update({
                data: {
                    participants: {
                        connect: {
                            id: data['property']['farmer_id'],
                        },
                    },
                },
                where: {
                    id: data['id'],
                },
                include: {
                    participants: true,
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async Addmilestones(data) {
        try {
            const responses = await Promise.all(data.map(async (milestone) => {
                return await this.db.milestone.create({
                    data: {
                        end_date: milestone.end_date,
                        start_date: milestone.start_date,
                        isAchieved: false,
                        text: milestone.text,
                        projectId: milestone.projectId,
                        Farmer: {
                            connect: {
                                id: milestone.farmerProfileId
                            }
                        }
                    },
                    include: {
                        Project: {
                            include: {
                                participants: true,
                            },
                        },
                    },
                });
            }));
            return responses[0].Project;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
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
            throw new common_1.BadRequestException(error);
        }
    }
    async Removeparticipants(data) {
        try {
            const query = await this.db.project.update({
                data: {
                    participants: {
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
        catch (error) {
            throw new common_1.BadRequestException(error);
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
            throw new common_1.BadRequestException(error);
        }
    }
    async Removemilestones(data) {
        try {
            const query = await this.db.project.update({
                data: {
                    milestones: {
                        disconnect: {
                            id: data['property']['milestone_id'],
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
            throw new common_1.BadRequestException(error);
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
            throw new common_1.BadRequestException(error);
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
            throw new common_1.BadRequestException(error);
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
            throw new common_1.BadRequestException(error);
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
            throw new common_1.BadRequestException(error);
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
            throw new common_1.BadRequestException(error);
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
            throw new common_1.BadRequestException(error);
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
            throw new common_1.BadRequestException(error);
        }
    }
    async UpdateProperty(data) {
        try {
            const query = data['property']['type'] !== undefined
                ? await this.db.project.update({
                    data: {
                        type: data['property']['type'],
                    },
                    where: {
                        id: data['id'],
                        type: data['type'],
                    },
                })
                : data['property']['start_date'] !== undefined
                    ? await this.db.project.update({
                        data: {
                            start_date: data['property']['start_date'],
                        },
                        where: {
                            id: data['id'],
                            type: data['type'],
                        },
                    })
                    : data['property']['end_date'] !== undefined
                        ? await this.db.project.update({
                            data: {
                                end_date: data['property']['end_date'],
                            },
                            where: {
                                id: data['id'],
                                type: data['type'],
                            },
                        })
                        : data['property']['workerProfileId'] !== undefined
                            ? await this.db.project.update({
                                data: {
                                    workerProfileId: data['property']['workerProfileId'],
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
    async getAllProjectCount() {
        try {
            const res = {
                count: Number,
                percent: Number,
            };
            res['count'] = await this.db.project.count();
            res['percent'] = await (0, projects_growth_calc_1.calculateGrowth)();
            return res;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async getAllProjects() {
        try {
            return await this.db.project.findMany({});
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
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

/***/ "./apps/extension-worker/src/visit/dto/dto.ts":
/*!****************************************************!*\
  !*** ./apps/extension-worker/src/visit/dto/dto.ts ***!
  \****************************************************/
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
exports.CreateVisitDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
class CreateVisitDto {
    constructor(createVisitDto) {
        Object.assign(this, createVisitDto);
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVisitDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: client_1.VisitStatus, enumName: 'VisitStatus' }),
    (0, class_validator_1.IsEnum)(client_1.VisitStatus),
    __metadata("design:type", typeof (_a = typeof client_1.VisitStatus !== "undefined" && client_1.VisitStatus) === "function" ? _a : Object)
], CreateVisitDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateVisitDto.prototype, "appointmentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateVisitDto.prototype, "milestoneId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], CreateVisitDto.prototype, "from", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], CreateVisitDto.prototype, "to", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], CreateVisitDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateVisitDto.prototype, "projectId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateVisitDto.prototype, "workerProfileId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateVisitDto.prototype, "interventionId", void 0);
exports.CreateVisitDto = CreateVisitDto;


/***/ }),

/***/ "./apps/extension-worker/src/visit/dto/find_dto.ts":
/*!*********************************************************!*\
  !*** ./apps/extension-worker/src/visit/dto/find_dto.ts ***!
  \*********************************************************/
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

/***/ "./apps/extension-worker/src/visit/dto/update_dto.ts":
/*!***********************************************************!*\
  !*** ./apps/extension-worker/src/visit/dto/update_dto.ts ***!
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

/***/ "./apps/extension-worker/src/visit/visit.controller.ts":
/*!*************************************************************!*\
  !*** ./apps/extension-worker/src/visit/visit.controller.ts ***!
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VisitController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const dto_1 = __webpack_require__(/*! ./dto/dto */ "./apps/extension-worker/src/visit/dto/dto.ts");
const find_dto_1 = __webpack_require__(/*! ./dto/find_dto */ "./apps/extension-worker/src/visit/dto/find_dto.ts");
const update_dto_1 = __webpack_require__(/*! ./dto/update_dto */ "./apps/extension-worker/src/visit/dto/update_dto.ts");
const visit_service_1 = __webpack_require__(/*! ./visit.service */ "./apps/extension-worker/src/visit/visit.service.ts");
let VisitController = class VisitController {
    constructor(service) {
        this.service = service;
    }
    CreateVisit(data) {
        return this.service.CreateVisit(data);
    }
    Addphoto(data) {
        return this.service.Addphoto(data);
    }
    Addmilestone(data) {
        return this.service.Addmilestone(data);
    }
    Addchallenge(data) {
        return this.service.Addchallenge(data);
    }
    Removephoto(data) {
        return this.service.Removephoto(data);
    }
    Removemilestone(data) {
        return this.service.Removemilestone(data);
    }
    Removechallenge(data) {
        return this.service.Removechallenge(data);
    }
    Getphotos(data) {
        return this.service.Getphotos(data);
    }
    Getmilestones(data) {
        return this.service.Getmilestones(data);
    }
    Getchallenges(data) {
        return this.service.Getchallenges(data);
    }
    FindByid(data) {
        return this.service.FindByid(data);
    }
    FindBystatus(data) {
        return this.service.FindBystatus(data);
    }
    FindBymilestoneId(data) {
        return this.service.FindBymilestoneId(data);
    }
    FindByappointmentId(data) {
        return this.service.FindByappointmentId(data);
    }
    FindByprojectId(data) {
        return this.service.FindByprojectId(data);
    }
    UpdateProperties(data) {
        return this.service.UpdateProperties(data);
    }
    async getAllVisits(projectId) {
        return this.service.getAllVisits(projectId);
    }
    async getAllKnownVisits() {
        return this.service.getAllKnownVisits();
    }
};
__decorate([
    (0, common_1.Post)('CreateVisit'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.CreateVisitDto !== "undefined" && dto_1.CreateVisitDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], VisitController.prototype, "CreateVisit", null);
__decorate([
    (0, common_1.Post)('Addphoto'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], VisitController.prototype, "Addphoto", null);
__decorate([
    (0, common_1.Post)('Addmilestone'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof update_dto_1.UpdateDto !== "undefined" && update_dto_1.UpdateDto) === "function" ? _e : Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], VisitController.prototype, "Addmilestone", null);
__decorate([
    (0, common_1.Post)('Addchallenge'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof update_dto_1.UpdateDto !== "undefined" && update_dto_1.UpdateDto) === "function" ? _g : Object]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], VisitController.prototype, "Addchallenge", null);
__decorate([
    (0, common_1.Post)('Removephoto'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], VisitController.prototype, "Removephoto", null);
__decorate([
    (0, common_1.Post)('Removemilestone'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof update_dto_1.UpdateDto !== "undefined" && update_dto_1.UpdateDto) === "function" ? _k : Object]),
    __metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], VisitController.prototype, "Removemilestone", null);
__decorate([
    (0, common_1.Post)('Removechallenge'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_m = typeof update_dto_1.UpdateDto !== "undefined" && update_dto_1.UpdateDto) === "function" ? _m : Object]),
    __metadata("design:returntype", typeof (_o = typeof Promise !== "undefined" && Promise) === "function" ? _o : Object)
], VisitController.prototype, "Removechallenge", null);
__decorate([
    (0, common_1.Post)('Getphotos'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_p = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _p : Object]),
    __metadata("design:returntype", typeof (_q = typeof Promise !== "undefined" && Promise) === "function" ? _q : Object)
], VisitController.prototype, "Getphotos", null);
__decorate([
    (0, common_1.Post)('Getmilestones'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_r = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _r : Object]),
    __metadata("design:returntype", typeof (_s = typeof Promise !== "undefined" && Promise) === "function" ? _s : Object)
], VisitController.prototype, "Getmilestones", null);
__decorate([
    (0, common_1.Post)('Getchallenges'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_t = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _t : Object]),
    __metadata("design:returntype", typeof (_u = typeof Promise !== "undefined" && Promise) === "function" ? _u : Object)
], VisitController.prototype, "Getchallenges", null);
__decorate([
    (0, common_1.Post)('FindByid'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_v = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _v : Object]),
    __metadata("design:returntype", typeof (_w = typeof Promise !== "undefined" && Promise) === "function" ? _w : Object)
], VisitController.prototype, "FindByid", null);
__decorate([
    (0, common_1.Post)('FindBystatus'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_x = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _x : Object]),
    __metadata("design:returntype", typeof (_y = typeof Promise !== "undefined" && Promise) === "function" ? _y : Object)
], VisitController.prototype, "FindBystatus", null);
__decorate([
    (0, common_1.Post)('FindBymilestoneId'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_z = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _z : Object]),
    __metadata("design:returntype", typeof (_0 = typeof Promise !== "undefined" && Promise) === "function" ? _0 : Object)
], VisitController.prototype, "FindBymilestoneId", null);
__decorate([
    (0, common_1.Post)('FindByappointmentId'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_1 = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _1 : Object]),
    __metadata("design:returntype", typeof (_2 = typeof Promise !== "undefined" && Promise) === "function" ? _2 : Object)
], VisitController.prototype, "FindByappointmentId", null);
__decorate([
    (0, common_1.Post)('FindByprojectId'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_3 = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _3 : Object]),
    __metadata("design:returntype", typeof (_4 = typeof Promise !== "undefined" && Promise) === "function" ? _4 : Object)
], VisitController.prototype, "FindByprojectId", null);
__decorate([
    (0, common_1.Post)('UpdateProperties'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_5 = typeof update_dto_1.UpdateDto !== "undefined" && update_dto_1.UpdateDto) === "function" ? _5 : Object]),
    __metadata("design:returntype", typeof (_6 = typeof Promise !== "undefined" && Promise) === "function" ? _6 : Object)
], VisitController.prototype, "UpdateProperties", null);
__decorate([
    (0, common_1.Get)('getAllVisits'),
    __param(0, (0, common_1.Query)('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VisitController.prototype, "getAllVisits", null);
__decorate([
    (0, common_1.Get)('getAllKnownVisits'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VisitController.prototype, "getAllKnownVisits", null);
VisitController = __decorate([
    (0, common_1.Controller)('visit'),
    (0, swagger_1.ApiTags)('Visit'),
    __metadata("design:paramtypes", [typeof (_a = typeof visit_service_1.VisitService !== "undefined" && visit_service_1.VisitService) === "function" ? _a : Object])
], VisitController);
exports.VisitController = VisitController;


/***/ }),

/***/ "./apps/extension-worker/src/visit/visit.module.ts":
/*!*********************************************************!*\
  !*** ./apps/extension-worker/src/visit/visit.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VisitModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const visit_service_1 = __webpack_require__(/*! ./visit.service */ "./apps/extension-worker/src/visit/visit.service.ts");
const visit_controller_1 = __webpack_require__(/*! ./visit.controller */ "./apps/extension-worker/src/visit/visit.controller.ts");
const db_service_1 = __webpack_require__(/*! @app/lib/db/db.service */ "./libs/lib/src/db/db.service.ts");
let VisitModule = class VisitModule {
};
VisitModule = __decorate([
    (0, common_1.Module)({
        providers: [visit_service_1.VisitService, db_service_1.DbService],
        controllers: [visit_controller_1.VisitController],
    })
], VisitModule);
exports.VisitModule = VisitModule;


/***/ }),

/***/ "./apps/extension-worker/src/visit/visit.service.ts":
/*!**********************************************************!*\
  !*** ./apps/extension-worker/src/visit/visit.service.ts ***!
  \**********************************************************/
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
exports.VisitService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const db_service_1 = __webpack_require__(/*! @app/lib/db/db.service */ "./libs/lib/src/db/db.service.ts");
let VisitService = class VisitService {
    constructor(db) {
        this.db = db;
    }
    async CreateVisit(data) {
        try {
            let query = await this.db.visit.create({
                data: {
                    name: data['name'],
                    workerProfileId: data['workerProfileId'],
                    appointmentId: data['milestoneId'],
                    projectId: data['projectId'],
                    status: 'UNCOMPLETED',
                    milestoneId: data['milestoneId'],
                    interventionId: data['interventionId'],
                    from: data['date'],
                    to: data['time'],
                },
                include: {
                    worker: true,
                    intervention: true,
                    milestone: true,
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(undefined, error);
        }
    }
    async Addphoto(data) {
        try {
            let query = await this.db.visit.update({
                where: {
                    id: data['visitId'],
                },
                data: {
                    photos: {
                        create: {
                            data: data['data'],
                        },
                    },
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async Addmilestone(data) {
        try {
            let query = await this.db.visit.update({
                where: {
                    id: data['id'],
                },
                data: {
                    milestoneId: data['properties']['milestoneId'],
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async Addchallenge(data) {
        try {
            let query = await this.db.visit.update({
                where: {
                    id: data['id'],
                },
                data: {
                    challenge: {
                        connect: {
                            id: data['challengeId'],
                        },
                    },
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    Removephoto(data) {
        try {
        }
        catch (error) { }
        throw new Error('Method not implemented.');
    }
    async Removemilestone(data) {
        try {
            let query = await this.db.visit.update({
                where: {
                    id: data['id'],
                },
                data: {
                    milestone: {
                        disconnect: {
                            id: data['properties']['milestoneId'],
                        },
                    },
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async Removechallenge(data) {
        try {
            let query = await this.db.visit.update({
                where: {
                    id: data['id'],
                },
                data: {
                    challenge: {
                        disconnect: {
                            id: data['challengeId'],
                        },
                    },
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async Getphotos(data) {
        try {
            let query = await this.db.photo.findMany({
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
    async Getmilestones(data) {
        try {
            let query = await this.db.milestone.findMany({
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
    async Getchallenges(data) {
        try {
            let query = await this.db.challenge.findMany({
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
    async FindByid(data) {
        try {
            let query = await this.db.visit.findFirstOrThrow({
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
    async FindBystatus(data) {
        try {
            let query = await this.db.visit.findMany({
                where: {
                    id: data['id'],
                    status: data['properties']['status'],
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async FindBymilestoneId(data) {
        try {
            let query = await this.db.visit.findFirstOrThrow({
                where: {
                    milestone: {
                        every: {
                            id: data['properties']['milestoneId'],
                        },
                    },
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async FindByappointmentId(data) {
        try {
            let query = await this.db.visit.findFirstOrThrow({
                where: {
                    appointment: {
                        id: data['properties']['appointmentId'],
                    },
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async FindByprojectId(data) {
        try {
            let query = await this.db.visit.findFirstOrThrow({
                where: {
                    Project: {
                        id: data['properties']['projectId'],
                    },
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async UpdateProperties(data) {
        try {
            let query = data['properties']['milestoneId'] !== undefined
                ? await this.db.visit.update({
                    where: {
                        id: data['id'],
                    },
                    data: {
                        challenge: {
                            disconnect: {
                                id: data['challengeId'],
                            },
                        },
                    },
                })
                : data['properties']['appointmentId'] !== undefined
                    ? await this.db.visit.update({
                        where: {
                            id: data['id'],
                        },
                        data: {
                            challenge: {
                                disconnect: {
                                    id: data['challengeId'],
                                },
                            },
                        },
                    })
                    : data['properties']['projectId'] !== undefined
                        ? await this.db.visit.update({
                            where: {
                                id: data['id'],
                            },
                            data: {
                                challenge: {
                                    disconnect: {
                                        id: data['challengeId'],
                                    },
                                },
                            },
                        })
                        : data['properties']['workerProfileId'] !== undefined
                            ? await this.db.visit.update({
                                where: {
                                    id: data['id'],
                                },
                                data: {
                                    workerProfileId: {
                                        set: data['properties']['workerProfileId'],
                                    },
                                },
                            })
                            : new common_1.BadRequestException('pass in a valid prop');
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async getAllVisits(id) {
        try {
            return this.db.visit.findMany({
                where: {
                    projectId: id,
                },
            });
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async getAllKnownVisits() {
        try {
            return this.db.visit.findMany({});
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
};
VisitService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof db_service_1.DbService !== "undefined" && db_service_1.DbService) === "function" ? _a : Object])
], VisitService);
exports.VisitService = VisitService;


/***/ }),

/***/ "./apps/farmer/src/farmer.module.ts":
/*!******************************************!*\
  !*** ./apps/farmer/src/farmer.module.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FarmerModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! @app/lib/auth/auth.service */ "./libs/lib/src/auth/auth.service.ts");
const farmer_module_1 = __webpack_require__(/*! ./farmer/farmer.module */ "./apps/farmer/src/farmer/farmer.module.ts");
const db_service_1 = __webpack_require__(/*! @app/lib/db/db.service */ "./libs/lib/src/db/db.service.ts");
const farmer_service_1 = __webpack_require__(/*! ./farmer/farmer.service */ "./apps/farmer/src/farmer/farmer.service.ts");
const admin_service_1 = __webpack_require__(/*! apps/admin/src/admin/admin.service */ "./apps/admin/src/admin/admin.service.ts");
const worker_service_1 = __webpack_require__(/*! apps/extension-worker/src/extension-worker/worker.service */ "./apps/extension-worker/src/extension-worker/worker.service.ts");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const farmer_controller_1 = __webpack_require__(/*! ./farmer/farmer.controller */ "./apps/farmer/src/farmer/farmer.controller.ts");
const email_service_1 = __webpack_require__(/*! @app/lib/email/email.service */ "./libs/lib/src/email/email.service.ts");
let FarmerModule = class FarmerModule {
};
FarmerModule = __decorate([
    (0, common_1.Module)({
        imports: [farmer_module_1.Farmer],
        controllers: [farmer_controller_1.FarmerController],
        providers: [
            auth_service_1.AuthService,
            farmer_service_1.FarmerService,
            db_service_1.DbService,
            admin_service_1.AdminService,
            worker_service_1.WorkerService,
            jwt_1.JwtService,
            email_service_1.MailService
        ],
    })
], FarmerModule);
exports.FarmerModule = FarmerModule;


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
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateFarmerDto = exports.UpdateDto = void 0;
const class_validator_1 = __webpack_require__(/*! @nestjs/class-validator */ "@nestjs/class-validator");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
class UpdateDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
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
    __metadata("design:type", typeof (_b = typeof Partial !== "undefined" && Partial) === "function" ? _b : Object)
], UpdateDto.prototype, "property", void 0);
exports.UpdateDto = UpdateDto;
class CreateFarmerDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFarmerDto.prototype, "first_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFarmerDto.prototype, "last_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFarmerDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFarmerDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFarmerDto.prototype, "phone_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: client_1.UserType,
    }),
    __metadata("design:type", typeof (_c = typeof client_1.UserType !== "undefined" && client_1.UserType) === "function" ? _c : Object)
], CreateFarmerDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateFarmerDto.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: client_1.Gender,
    }),
    __metadata("design:type", typeof (_d = typeof client_1.Gender !== "undefined" && client_1.Gender) === "function" ? _d : Object)
], CreateFarmerDto.prototype, "sex", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], CreateFarmerDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: client_1.Religion,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", typeof (_e = typeof client_1.Religion !== "undefined" && client_1.Religion) === "function" ? _e : Object)
], CreateFarmerDto.prototype, "religion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: client_1.Marital,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", typeof (_f = typeof client_1.Marital !== "undefined" && client_1.Marital) === "function" ? _f : Object)
], CreateFarmerDto.prototype, "maritalStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFarmerDto.prototype, "photo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateFarmerDto.prototype, "household_size", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateFarmerDto.prototype, "household_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'lga cant be empty',
    }),
    __metadata("design:type", String)
], CreateFarmerDto.prototype, "lga", void 0);
exports.CreateFarmerDto = CreateFarmerDto;


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
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FarmerController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const farmer_service_1 = __webpack_require__(/*! ./farmer.service */ "./apps/farmer/src/farmer/farmer.service.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const dto_1 = __webpack_require__(/*! ./dto/dto */ "./apps/farmer/src/farmer/dto/dto.ts");
const find_dto_1 = __webpack_require__(/*! ./dto/find.dto */ "./apps/farmer/src/farmer/dto/find.dto.ts");
let FarmerController = class FarmerController {
    constructor(farmer) {
        this.farmer = farmer;
    }
    FindByEmail(data) {
        return this.farmer.FindByEmail(data);
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
    Create_Farmer(data) {
        return this.farmer.CreateResource(data);
    }
    getAllFarmers() {
        return this.farmer.getAllFarmers();
    }
    getAllProjects(data) {
        return this.farmer.getAllProjects(data);
    }
    UpdateProperty(data) {
        return this.farmer.UpdateProperties(data);
    }
    async farmerCount() {
        return await this.farmer.getAllFarmersCount();
    }
};
__decorate([
    (0, common_1.Post)('FindByEmail'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof Partial !== "undefined" && Partial) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], FarmerController.prototype, "FindByEmail", null);
__decorate([
    (0, common_1.Post)('FindById'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], FarmerController.prototype, "FindById", null);
__decorate([
    (0, common_1.Post)('FindByPhone_Number'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], FarmerController.prototype, "FindByPhone_Number", null);
__decorate([
    (0, common_1.Post)('FindByFirst_name'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _e : Object]),
    __metadata("design:returntype", void 0)
], FarmerController.prototype, "FindByFirst_name", null);
__decorate([
    (0, common_1.Post)('Createfarmer'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof dto_1.CreateFarmerDto !== "undefined" && dto_1.CreateFarmerDto) === "function" ? _f : Object]),
    __metadata("design:returntype", void 0)
], FarmerController.prototype, "Create_Farmer", null);
__decorate([
    (0, common_1.Post)('getAllFarmers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FarmerController.prototype, "getAllFarmers", null);
__decorate([
    (0, common_1.Post)('getAllProjects'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof find_dto_1.FindDto !== "undefined" && find_dto_1.FindDto) === "function" ? _g : Object]),
    __metadata("design:returntype", void 0)
], FarmerController.prototype, "getAllProjects", null);
__decorate([
    (0, common_1.Post)('UpdateProperty'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof dto_1.UpdateDto !== "undefined" && dto_1.UpdateDto) === "function" ? _h : Object]),
    __metadata("design:returntype", void 0)
], FarmerController.prototype, "UpdateProperty", null);
__decorate([
    (0, common_1.Get)('farmerCount'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FarmerController.prototype, "farmerCount", null);
FarmerController = __decorate([
    (0, common_1.Controller)('farmer'),
    (0, swagger_1.ApiTags)('farmer'),
    __metadata("design:paramtypes", [typeof (_a = typeof farmer_service_1.FarmerService !== "undefined" && farmer_service_1.FarmerService) === "function" ? _a : Object])
], FarmerController);
exports.FarmerController = FarmerController;


/***/ }),

/***/ "./apps/farmer/src/farmer/farmer.module.ts":
/*!*************************************************!*\
  !*** ./apps/farmer/src/farmer/farmer.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Farmer = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const farmer_service_1 = __webpack_require__(/*! ./farmer.service */ "./apps/farmer/src/farmer/farmer.service.ts");
const db_service_1 = __webpack_require__(/*! @app/lib/db/db.service */ "./libs/lib/src/db/db.service.ts");
let Farmer = class Farmer {
};
Farmer = __decorate([
    (0, common_1.Module)({
        providers: [farmer_service_1.FarmerService, db_service_1.DbService]
    })
], Farmer);
exports.Farmer = Farmer;


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
const schedule_1 = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
const farmer_growth_calc_1 = __webpack_require__(/*! @app/lib/farmer_growth_calc */ "./libs/lib/src/farmer_growth_calc.ts");
const short_id_1 = __webpack_require__(/*! @app/lib/short_id */ "./libs/lib/src/short_id.ts");
let FarmerService = class FarmerService {
    constructor(db) {
        this.db = db;
    }
    async UpdateProperties(data) {
        try {
            let query = data['property']['first_name'] !== undefined
                ? await this.db.user.update({
                    data: {
                        first_name: data['property']['first_name'],
                    },
                    where: {
                        id: data['id'],
                        type: 'FARMER',
                    },
                })
                : data['property']['last_name'] !== undefined
                    ? await this.db.user.update({
                        data: {
                            last_name: data['property']['last_name'],
                        },
                        where: {
                            id: data['id'],
                            type: 'FARMER',
                        },
                    })
                    : data['property']['phone_number'] !== undefined
                        ? await this.db.user.update({
                            data: {
                                phone_number: data['property']['phone_number'],
                            },
                            where: {
                                id: data['id'],
                                type: 'FARMER',
                            },
                        })
                        : data['property']['email'] !== undefined
                            ? await this.db.user.update({
                                data: {
                                    email: data['property']['email'],
                                },
                                where: {
                                    id: data['id'],
                                    type: 'FARMER',
                                },
                            })
                            : data['property']['age'] !== undefined
                                ? await this.db.user.update({
                                    data: {
                                        Farmer: {
                                            update: {
                                                age: data['property']['age'],
                                            },
                                        },
                                    },
                                    where: {
                                        id: data['id'],
                                        type: 'FARMER',
                                    },
                                })
                                : data['property']['birthday'] !== undefined
                                    ? await this.db.user.update({
                                        data: {
                                            Farmer: {
                                                update: {
                                                    birthday: data['property']['birthday'],
                                                },
                                            },
                                        },
                                        where: {
                                            id: data['id'],
                                            type: 'FARMER',
                                        },
                                    })
                                    : data['property']['maritalStatus'] !== undefined
                                        ? await this.db.user.update({
                                            data: {
                                                Farmer: {
                                                    update: {
                                                        maritalStatus: data['property']['maritalStatus'],
                                                    },
                                                },
                                            },
                                            where: {
                                                id: data['id'],
                                                type: 'FARMER',
                                            },
                                        })
                                        : data['property']['religion'] !== undefined
                                            ? await this.db.user.update({
                                                data: {
                                                    Farmer: {
                                                        update: {
                                                            religion: data['property']['religion'],
                                                        },
                                                    },
                                                },
                                                where: {
                                                    id: data['id'],
                                                    type: 'FARMER',
                                                },
                                            })
                                            : data['property']['photo'] !== undefined
                                                ? await this.db.user.update({
                                                    data: {
                                                        Farmer: {
                                                            update: {
                                                                photo: data['property']['photo'],
                                                            },
                                                        },
                                                    },
                                                    where: {
                                                        id: data['id'],
                                                        type: 'FARMER',
                                                    },
                                                })
                                                : data['property']['lga'] !== undefined
                                                    ? await this.db.user.update({
                                                        data: {
                                                            Farmer: {
                                                                update: {
                                                                    lga: {
                                                                        update: {
                                                                            name: data['property']['lga'],
                                                                        },
                                                                    },
                                                                },
                                                            },
                                                        },
                                                        where: {
                                                            id: data['id'],
                                                            type: 'FARMER',
                                                        },
                                                        include: {
                                                            Farmer: {
                                                                include: {
                                                                    lga: true,
                                                                    household: true,
                                                                },
                                                            },
                                                        },
                                                    })
                                                    : new common_1.BadRequestException('pass in a valid property  please');
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
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
                    first_name: data['property']['first_name'],
                },
            });
            return user;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
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
                    last_name: data['property']['last_name'],
                },
            });
            return user;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
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
                    phone_number: data['property']['phone_number'],
                },
            });
            return user;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async FindById(data) {
        try {
            const user = await this.db.user.findFirstOrThrow({
                where: {
                    id: data['id'],
                    type: 'FARMER',
                },
                include: {
                    Farmer: {
                        include: {
                            lga: true,
                            Cooperative: true,
                            household: true,
                            Intervention: true,
                            Project: true,
                            Milestone: true,
                        },
                    },
                },
            });
            return user;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error);
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
                include: {
                    Farmer: true,
                },
            });
            return user;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
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
                include: {
                    Farmer: true,
                },
            });
            return user;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async UpdatePassword(data) {
        try {
            const user = await this.db.user.update({
                where: {
                    email: data['property']['email'],
                    type: 'FARMER',
                },
                data: {
                    password: data['property']['password'],
                },
            });
            return user;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async CreateResource(data) {
        try {
            console.log(data);
            const user = await this.db.user.create({
                data: {
                    id: (0, short_id_1.generateShortId)(),
                    email: data['email'],
                    first_name: data['first_name'],
                    last_name: data['last_name'],
                    password: '',
                    phone_number: data['phone_number'],
                    type: 'FARMER',
                    Farmer: {
                        create: {
                            id: (0, short_id_1.generateShortId)(),
                            address: data['address'] !== undefined ? data['address'] : JSON,
                            photo: data['photo'],
                            age: Number(data['age']),
                            birthday: data['birthday'],
                            income: 'SMALL',
                            maritalStatus: data['maritalStatus'],
                            religion: data['religion'],
                            sex: data['sex'],
                            lga: {
                                create: {
                                    name: data['lga'],
                                },
                            },
                            household: {
                                create: {
                                    size: Number(data['household_size']),
                                    number: Number(data['household_number']),
                                },
                            },
                        },
                    },
                },
                include: {
                    Farmer: {
                        include: {
                            lga: true,
                            household: true,
                            Project: true,
                        },
                    },
                },
            });
            return user;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(undefined, {
                description: error,
            });
        }
    }
    SignOut() {
        throw new Error('Method not implemented.');
    }
    async FindByEmail(data) {
        try {
            const user = await this.db.user.findFirstOrThrow({
                where: {
                    email: data['email'],
                    type: 'FARMER',
                },
                include: {
                    Farmer: true,
                },
            });
            return user;
        }
        catch (error) {
            console.log(error);
        }
    }
    async getAllFarmers(page = 1, pageSize = 10) {
        try {
            const query = await this.db.user.findMany({
                where: {
                    type: 'FARMER',
                },
            });
            const resultPromises = query.map(async (farmer) => {
                farmer.workerProfileId = undefined;
                if (!farmer.farmerProfile) {
                    farmer.farmerProfile = undefined;
                }
                else {
                    const farmerId = farmer.farmerProfile;
                    farmer.farmerProfile = await this.db.farmerProfile.findUnique({
                        where: { id: farmerId },
                        include: {},
                    });
                }
                return farmer;
            });
            const result = await Promise.all(resultPromises);
            console.log('result  result', result);
            return result;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error, {
                description: error,
            });
        }
    }
    async getAllProjects(data) {
        try {
            const projects = await this.db.project.findMany({});
            let results = [];
            projects.forEach((project) => {
                project['participantsId'].forEach((farmer) => {
                    if (farmer == data['id']) {
                        results.push(project);
                    }
                });
            });
            return projects;
        }
        catch (error) {
            console.error('Error fetching projects:', error);
            throw new common_1.BadRequestException('Failed to fetch projects', {
                description: error.message,
            });
        }
    }
    async getAllFarmersCount() {
        try {
            const res = {
                count: Number,
                percent: Number,
            };
            res['count'] = await this.db.farmerProfile.count();
            res['percent'] = await (0, farmer_growth_calc_1.calculateGrowth)();
            return res;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async findByLocalGovernmentId(id) {
        try {
            const res = await this.db.farmerProfile.findFirstOrThrow({
                where: {
                    localGovernmentId: id,
                },
            });
            return res;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    cronThing() {
        console.log('dont sleep');
    }
};
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_5_SECONDS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FarmerService.prototype, "cronThing", null);
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
    async resetPassword(token, newPassword) {
        try {
            const result = await this.authService.resetPassword(token, newPassword);
            return { message: result.message };
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to reset password', error.message);
        }
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
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
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
__decorate([
    (0, common_1.Post)('reset-password'),
    __param(0, (0, common_1.Query)('token')),
    __param(1, (0, common_1.Body)('newPassword')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resetPassword", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    (0, swagger_1.ApiTags)('Auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);
exports.AuthController = AuthController;


/***/ }),

/***/ "./libs/lib/src/auth/auth.guard.ts":
/*!*****************************************!*\
  !*** ./libs/lib/src/auth/auth.guard.ts ***!
  \*****************************************/
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
exports.AuthGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./libs/lib/src/auth/auth.service.ts");
let AuthGuard = class AuthGuard extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(auth) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.HASH_SECRET,
        });
        this.auth = auth;
    }
    canActivate(context) {
        try {
            return true;
        }
        catch (error) {
            console.log(error.message + ',\njwt is missing');
        }
    }
    async validate(bearerToken) {
        try {
            const user = await this.auth.validate(bearerToken);
            console.log(user);
            return user;
        }
        catch (error) {
            throw new common_1.BadRequestException(undefined, error);
        }
    }
};
AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthGuard);
exports.AuthGuard = AuthGuard;


/***/ }),

/***/ "./libs/lib/src/auth/auth.module.ts":
/*!******************************************!*\
  !*** ./libs/lib/src/auth/auth.module.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./libs/lib/src/auth/auth.service.ts");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./libs/lib/src/auth/auth.controller.ts");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const email_service_1 = __webpack_require__(/*! ../email/email.service */ "./libs/lib/src/email/email.service.ts");
const admin_service_1 = __webpack_require__(/*! apps/admin/src/admin/admin.service */ "./apps/admin/src/admin/admin.service.ts");
const worker_service_1 = __webpack_require__(/*! apps/extension-worker/src/extension-worker/worker.service */ "./apps/extension-worker/src/extension-worker/worker.service.ts");
const farmer_service_1 = __webpack_require__(/*! apps/farmer/src/farmer/farmer.service */ "./apps/farmer/src/farmer/farmer.service.ts");
const db_service_1 = __webpack_require__(/*! ../db/db.service */ "./libs/lib/src/db/db.service.ts");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, farmer_service_1.FarmerService, admin_service_1.AdminService, worker_service_1.WorkerService, jwt_1.JwtService, email_service_1.MailService, db_service_1.DbService]
    })
], AuthModule);
exports.AuthModule = AuthModule;


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
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const farmer_service_1 = __webpack_require__(/*! apps/farmer/src/farmer/farmer.service */ "./apps/farmer/src/farmer/farmer.service.ts");
const admin_service_1 = __webpack_require__(/*! apps/admin/src/admin/admin.service */ "./apps/admin/src/admin/admin.service.ts");
const worker_service_1 = __webpack_require__(/*! apps/extension-worker/src/extension-worker/worker.service */ "./apps/extension-worker/src/extension-worker/worker.service.ts");
const argon2_1 = __webpack_require__(/*! argon2 */ "argon2");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const db_service_1 = __webpack_require__(/*! ../db/db.service */ "./libs/lib/src/db/db.service.ts");
const email_service_1 = __webpack_require__(/*! ../email/email.service */ "./libs/lib/src/email/email.service.ts");
const emailTemplate_1 = __webpack_require__(/*! ../emailTemplate */ "./libs/lib/src/emailTemplate.ts");
const jsonwebtoken_1 = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
const getPasswordResetSuccessTemplate_1 = __webpack_require__(/*! ../getPasswordResetSuccessTemplate */ "./libs/lib/src/getPasswordResetSuccessTemplate.ts");
let AuthService = class AuthService {
    constructor(farmer, admin, extensionWorker, jwtService, db, mail) {
        this.farmer = farmer;
        this.admin = admin;
        this.extensionWorker = extensionWorker;
        this.jwtService = jwtService;
        this.db = db;
        this.mail = mail;
    }
    async Signup(info) {
        try {
            info['password'] = await (0, argon2_1.hash)(info['password'], {
                secret: Buffer.from(process.env.HASH_SECRET || 'hash'),
                type: 2,
            });
            let query = info['type'] == 'ADMIN'
                ? this.admin.CreateResource(info)
                : info['type'] == 'EXTENSION_WORKER'
                    ? this.extensionWorker.CreateResource(info)
                    : new common_1.BadRequestException('Please Specify User Type');
            return query;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error);
        }
    }
    async SignIn(data) {
        try {
            let user;
            switch (data['type']) {
                case 'FARMER':
                    user = await this.farmer.FindByEmail(data);
                    break;
                case 'ADMIN':
                    user = await this.admin.FindByEmail(data);
                    break;
                case 'EXTENSION_WORKER':
                    user = await this.extensionWorker.FindByEmail(data);
                    break;
                default:
                    throw new Error('Cant Find Any Users By that email');
            }
            if (!user) {
                throw new Error('User not found');
            }
            console.log(user);
            const verification = await (0, argon2_1.verify)(user['password'], Buffer.from(data['password']), {
                secret: Buffer.from(process.env.HASH_SECRET || 'hash'),
            });
            if (!verification) {
                throw new common_1.UnauthorizedException('Invalid password');
            }
            user['access_token'] = this.jwtService.sign(data, {
                secret: process.env.HASH_SECRET || 'hash',
            });
            return user;
        }
        catch (error) {
            console.log(error);
            throw new common_1.UnauthorizedException(undefined, error.message);
        }
    }
    async SignOut(data) {
        throw new Error('Method not implemented.');
    }
    async validate(data) {
        try {
            let user = data['type'] == 'FARMER'
                ? await this.farmer.FindByEmail(data)
                : data['type'] == 'ADMIN'
                    ? await this.admin.FindByEmail(data)
                    : data['type'] == 'EXTENSION_WORKER'
                        ? await this.extensionWorker.FindByEmail(data)
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
            throw new common_1.BadRequestException(undefined, error);
        }
    }
    async ForgotPassword(data) {
        try {
            const user = await this.db.user.findFirstOrThrow({
                where: {
                    email: data['property']['email'],
                    type: data['type'],
                },
            });
            console.log(user);
            const resetToken = (0, jsonwebtoken_1.sign)({ id: user.id, type: user.type }, process.env.HASH_SECRET, { expiresIn: '1h' });
            const resetLink = `${process.env.FRONTEND_URL}?token=${resetToken}`;
            const change = await this.db.passwordReset.create({
                data: {
                    resetToken: resetToken,
                },
                select: {
                    id: true,
                    resetToken: true,
                },
            });
            await this.mail.sendEmail(user.email, 'YolaFarms Password Reset', 'Password RESET', (0, emailTemplate_1.getPasswordResetTemplate)(user.first_name, resetLink));
            await this.db.adminProfile.update({
                where: {
                    id: user['adminProfileId'],
                },
                data: {
                    reset: {
                        connect: {
                            id: change.id,
                        },
                    },
                },
            });
            delete change.resetToken;
            return change;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException('Error processing password reset request', error.message || error);
        }
    }
    async updatePasswordByUserType(data) {
        const { type } = data;
        switch (type) {
            case 'FARMER':
                await this.farmer.UpdatePassword(data);
                break;
            case 'ADMIN':
                await this.admin.UpdatePassword(data);
                break;
            case 'EXTENSION_WORKER':
                await this.extensionWorker.UpdatePassword(data);
                break;
            default:
                throw new Error('Cannot find any users by that type');
        }
    }
    async resetPassword(token, newPassword) {
        try {
            console.log(token);
            const decodedToken = (0, jsonwebtoken_1.verify)(token, process.env.HASH_SECRET);
            const dec = await (0, jsonwebtoken_1.decode)(token, {});
            console.log(dec);
            const resetEntry = await this.db.passwordReset.findFirst({
                where: {
                    resetToken: token,
                },
            });
            if (!resetEntry) {
                throw new Error('Invalid or expired reset token');
            }
            const user = await this.db.user.findFirstOrThrow({
                where: {
                    id: dec['id'],
                    type: dec['type']
                }
            });
            await this.db.user.update({
                where: {
                    id: dec['id'],
                    type: dec['type']
                },
                data: {
                    password: await (0, argon2_1.hash)(newPassword, {
                        secret: Buffer.from(process.env.HASH_SECRET || 'hash'),
                        type: 2,
                    })
                },
            });
            await this.db.passwordReset.delete({
                where: {
                    id: resetEntry.id,
                },
            });
            await this.mail.sendEmail(user.email, 'YolaFarms Successful Password Reset', 'Password RESET', (0, getPasswordResetSuccessTemplate_1.getPasswordResetSuccessTemplate)(user.first_name));
            return { message: 'Password reset successful' };
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException('Error resetting password', error.message || error);
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof farmer_service_1.FarmerService !== "undefined" && farmer_service_1.FarmerService) === "function" ? _a : Object, typeof (_b = typeof admin_service_1.AdminService !== "undefined" && admin_service_1.AdminService) === "function" ? _b : Object, typeof (_c = typeof worker_service_1.WorkerService !== "undefined" && worker_service_1.WorkerService) === "function" ? _c : Object, typeof (_d = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _d : Object, typeof (_e = typeof db_service_1.DbService !== "undefined" && db_service_1.DbService) === "function" ? _e : Object, typeof (_f = typeof email_service_1.MailService !== "undefined" && email_service_1.MailService) === "function" ? _f : Object])
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateUserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'National Identification Number' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "nin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email address of the user' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'First name of the user' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "first_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last name of the user' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "last_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Phone number of the user' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "phone_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Address of the user', required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateUserDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Age of the user' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: client_1.Marital }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", typeof (_a = typeof client_1.Marital !== "undefined" && client_1.Marital) === "function" ? _a : Object)
], CreateUserDto.prototype, "maritalStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: client_1.Religion }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", typeof (_b = typeof client_1.Religion !== "undefined" && client_1.Religion) === "function" ? _b : Object)
], CreateUserDto.prototype, "religion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: client_1.Gender }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", typeof (_c = typeof client_1.Gender !== "undefined" && client_1.Gender) === "function" ? _c : Object)
], CreateUserDto.prototype, "sex", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'localGovernmentId' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "localGovernmentId", void 0);
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

/***/ "./libs/lib/src/auth/error_filter.filter.ts":
/*!**************************************************!*\
  !*** ./libs/lib/src/auth/error_filter.filter.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AllExceptionsFilter = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AllExceptionsFilter = class AllExceptionsFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception instanceof common_1.HttpException
            ? exception.getStatus()
            : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        const errorResponse = {
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
            method: request.method,
            message: exception instanceof common_1.HttpException
                ? exception.getResponse().message
                : 'Internal server error',
        };
        response.status(status).json(errorResponse);
    }
};
AllExceptionsFilter = __decorate([
    (0, common_1.Catch)()
], AllExceptionsFilter);
exports.AllExceptionsFilter = AllExceptionsFilter;


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

/***/ "./libs/lib/src/email/email.service.ts":
/*!*********************************************!*\
  !*** ./libs/lib/src/email/email.service.ts ***!
  \*********************************************/
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
exports.MailService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const sgMail = __webpack_require__(/*! @sendgrid/mail */ "@sendgrid/mail");
let MailService = class MailService {
    constructor() {
        const apiKey = process.env.SENDGRID_API_KEY;
        if (!apiKey) {
            throw new Error('SENDGRID_API_KEY is not defined in the environment variables');
        }
        sgMail.setApiKey(apiKey);
    }
    async sendEmail(email, subject, text, html) {
        const msg = {
            to: email,
            from: 'buynbulk22@gmail.com',
            subject,
            text,
            html,
        };
        try {
            await sgMail.send(msg);
            console.log('Email sent successfully');
        }
        catch (error) {
            console.error('Error sending email:', error.toString());
            if (error.response) {
                console.error('SendGrid response:', error.response.body);
            }
            throw error;
        }
    }
};
MailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], MailService);
exports.MailService = MailService;


/***/ }),

/***/ "./libs/lib/src/emailTemplate.ts":
/*!***************************************!*\
  !*** ./libs/lib/src/emailTemplate.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPasswordResetTemplate = void 0;
const getPasswordResetTemplate = (userName, otp) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset Request</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff; /* Change background color to white */
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            padding: 10px 0;
            background-color: #FB8519; /* Change header background color to #FB8519 */
            color: #fff;
        }
        .content {
            padding: 20px;
        }
        .otp {
            display: block;
            width: fit-content;
            margin: 20px auto;
            padding: 10px 20px;
            text-align: center;
            background-color: #FB8519;
            color: #fff;
            border-radius: 5px;
            font-size: 1.2em;
            letter-spacing: 0.1em;
        }
        .footer {
            text-align: center;
            padding: 10px;
            background-color: #FB8519; /* Change footer background color to #FB8519 */
            font-size: 12px;
            color: #fff; /* Change footer text color to white */
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Password Reset</h1>
        </div>
        <div class="content">
            <p>Hi ${userName},</p>
            <p>You recently requested to reset your password for your Yola Farms account. Use the OTP below to reset your password:</p>
            <div class="otp">${otp}</div>
            <p>If you did not request a password reset, please ignore this email or contact support if you have questions.</p>
            <p>Thanks,<br>The Yola Farms Team</p>
        </div>
        <div class="footer">
            <p>If you’re having trouble using the OTP, please contact our support team.</p>
        </div>
    </div>
</body>
</html>
`;
exports.getPasswordResetTemplate = getPasswordResetTemplate;


/***/ }),

/***/ "./libs/lib/src/farmer_growth_calc.ts":
/*!********************************************!*\
  !*** ./libs/lib/src/farmer_growth_calc.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.calculateGrowth = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const db_service_1 = __webpack_require__(/*! ./db/db.service */ "./libs/lib/src/db/db.service.ts");
const prisma = new db_service_1.DbService();
async function calculateGrowth() {
    try {
        const now = new Date();
        const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const currentCount = await prisma.farmerProfile.count({
            where: {
                createdAt: {
                    gte: startOfMonth,
                },
            },
        });
        const previousCount = await prisma.farmerProfile.count({
            where: {
                createdAt: {
                    gte: lastMonth,
                    lt: startOfMonth,
                },
            },
        });
        let growth;
        if (previousCount === 0) {
            growth = currentCount > 0 ? 100 : 0;
        }
        else {
            growth = ((currentCount - previousCount) / previousCount) * 100;
        }
        return growth.toFixed(2) + "%";
    }
    catch (error) {
        console.error('Error calculating growth:', error);
        throw new common_1.BadRequestException(undefined, error);
    }
    finally {
        await prisma.$disconnect();
    }
}
exports.calculateGrowth = calculateGrowth;


/***/ }),

/***/ "./libs/lib/src/getPasswordResetSuccessTemplate.ts":
/*!*********************************************************!*\
  !*** ./libs/lib/src/getPasswordResetSuccessTemplate.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPasswordResetSuccessTemplate = void 0;
const getPasswordResetSuccessTemplate = (userName) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset Successful</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            padding: 10px 0;
            background-color: #FB8519;
            color: #fff;
        }
        .content {
            padding: 20px;
        }
        .footer {
            text-align: center;
            padding: 10px;
            background-color: #FB8519;
            font-size: 12px;
            color: #fff;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Password Reset Successful</h1>
        </div>
        <div class="content">
            <p>Hi ${userName},</p>
            <p>Your password for your Yola Farms account has been successfully reset. If you did not make this change or if you believe an unauthorized person has accessed your account, please contact our support team immediately.</p>
            <p>For security reasons, we recommend that you do not share your password with anyone.</p>
            <p>Thanks,<br>The Yola Farms Team</p>
        </div>
        <div class="footer">
            <p>If you need any assistance, please contact our support team.</p>
        </div>
    </div>
</body>
</html>
`;
exports.getPasswordResetSuccessTemplate = getPasswordResetSuccessTemplate;


/***/ }),

/***/ "./libs/lib/src/projects_growth_calc.ts":
/*!**********************************************!*\
  !*** ./libs/lib/src/projects_growth_calc.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.calculateGrowth = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const db_service_1 = __webpack_require__(/*! ./db/db.service */ "./libs/lib/src/db/db.service.ts");
const prisma = new db_service_1.DbService();
async function calculateGrowth() {
    try {
        const now = new Date();
        const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const currentCount = await prisma.project.count({
            where: {
                createdAt: {
                    gte: startOfMonth,
                },
            },
        });
        const previousCount = await prisma.project.count({
            where: {
                createdAt: {
                    gte: lastMonth,
                    lt: startOfMonth,
                },
            },
        });
        let growth;
        if (previousCount === 0) {
            growth = currentCount > 0 ? 100 : 0;
        }
        else {
            growth = ((currentCount - previousCount) / previousCount) * 100;
        }
        return growth.toFixed(2) + '%';
    }
    catch (error) {
        console.error('Error calculating growth:', error);
        throw new common_1.BadRequestException(undefined, error);
    }
    finally {
        await prisma.$disconnect();
    }
}
exports.calculateGrowth = calculateGrowth;


/***/ }),

/***/ "./libs/lib/src/short_id.ts":
/*!**********************************!*\
  !*** ./libs/lib/src/short_id.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generateShortId = void 0;
const uuid_1 = __webpack_require__(/*! uuid */ "uuid");
const crypto_js_1 = __webpack_require__(/*! crypto-js */ "crypto-js");
const generateShortId = () => {
    const id = (0, uuid_1.v4)();
    console.log('Original UUID:', id);
    const hash = (0, crypto_js_1.SHA256)(id).toString(crypto_js_1.enc.Base64);
    const base64url = hash.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    const shortId = base64url.substring(0, 6);
    return shortId;
};
exports.generateShortId = generateShortId;
const shortId = (0, exports.generateShortId)();
console.log(shortId);


/***/ }),

/***/ "./libs/lib/src/worker_growth_calc.ts":
/*!********************************************!*\
  !*** ./libs/lib/src/worker_growth_calc.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.calculateGrowth = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const db_service_1 = __webpack_require__(/*! ./db/db.service */ "./libs/lib/src/db/db.service.ts");
const prisma = new db_service_1.DbService();
async function calculateGrowth() {
    try {
        const now = new Date();
        const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const currentCount = await prisma.workerProfile.count({
            where: {
                createdAt: {
                    gte: startOfMonth,
                },
            },
        });
        const previousCount = await prisma.workerProfile.count({
            where: {
                createdAt: {
                    gte: lastMonth,
                    lt: startOfMonth,
                },
            },
        });
        let growth;
        if (previousCount === 0) {
            growth = currentCount > 0 ? 100 : 0;
        }
        else {
            growth = ((currentCount - previousCount) / previousCount) * 100;
        }
        return growth.toFixed(2) + '%';
    }
    catch (error) {
        console.error('Error calculating growth:', error);
        throw new common_1.BadRequestException(undefined, error);
    }
    finally {
        await prisma.$disconnect();
    }
}
exports.calculateGrowth = calculateGrowth;


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

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/schedule":
/*!***********************************!*\
  !*** external "@nestjs/schedule" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/schedule");

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

/***/ "@sendgrid/mail":
/*!*********************************!*\
  !*** external "@sendgrid/mail" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sendgrid/mail");

/***/ }),

/***/ "argon2":
/*!*************************!*\
  !*** external "argon2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("argon2");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "crypto-js":
/*!****************************!*\
  !*** external "crypto-js" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("crypto-js");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");

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
const bodyParser = __webpack_require__(/*! body-parser */ "body-parser");
const error_filter_filter_1 = __webpack_require__(/*! @app/lib/auth/error_filter.filter */ "./libs/lib/src/auth/error_filter.filter.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(extension_worker_module_1.ExtensionWorkerModule);
    app.enableCors({
        origin: ['https://yolaweb.vercel.app', '*', 'http://localhost:3000'],
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        allowedHeaders: 'Content-Type, Accept',
        credentials: true,
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Extension Worker Doc')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
    app.useGlobalFilters(new error_filter_filter_1.AllExceptionsFilter());
    await app.listen(process.env.WORKER_PORT || 3000);
    const logger = new common_1.Logger('Extension Worker Logic', {
        timestamp: true,
    });
    logger.log('app running on ' + 3000);
}
bootstrap();

})();

/******/ })()
;