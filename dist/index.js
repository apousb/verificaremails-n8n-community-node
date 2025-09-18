"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.credentials = exports.nodes = void 0;
const Verificaremails_node_1 = require("./nodes/Verificaremails/Verificaremails.node");
const VerificaremailsApi_credentials_1 = require("./credentials/VerificaremailsApi.credentials");
exports.nodes = [Verificaremails_node_1.Verificaremails];
exports.credentials = [VerificaremailsApi_credentials_1.VerificaremailsApi];
