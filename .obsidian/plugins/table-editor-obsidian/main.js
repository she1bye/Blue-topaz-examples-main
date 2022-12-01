'use strict';

var obsidian = require('obsidian');
var state = require('@codemirror/state');
var view = require('@codemirror/view');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var icons = {
    spreadsheet: "\n<svg version=\"1.1\" viewBox=\"0 0 482.81 482.81\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill=\"currentColor\" d=\"m457.58 25.464-432.83 0.42151c-13.658 0.013314-24.758 11.115-24.757 24.757l0.031024 347.45c7.4833e-4 8.3808 4.211 15.772 10.608 20.259 3.4533 2.4499 5.0716 3.2901 8.879 3.9022 1.7033 0.37333 3.4561 0.59471 5.2692 0.59294l432.84-0.42151c1.809-1e-3 3.5618-0.21823 5.2568-0.59294h1.2174v-0.37196c10.505-2.8727 18.279-12.397 18.278-23.788l-0.031-347.43c1e-3 -13.649-11.107-24.763-24.768-24.763zm3.5453 24.763v71.344h-163.31v-74.886h159.76c1.9641 0.0014 3.5467 1.5922 3.5467 3.5425zm-1.6737 350.37h-161.6v-67.207h163.31v64.268c1e-3 1.2572-0.70549 2.321-1.7033 2.9386zm-438.21-2.5171v-64.268h76.646v67.207h-74.942c-0.99784-0.61765-1.7033-1.6814-1.7033-2.9386zm255.28-155.18v69.688h-157.42v-69.688zm0 90.913v67.207h-157.42v-67.207zm-0.031-211.83h-157.42v-74.886h157.42zm0 21.226v77.826h-157.42v-77.826zm-178.64 77.826h-76.646v-77.826h76.646zm0.03102 21.862v69.688h-76.646v-69.688zm199.95 69.268v-69.697h163.31v69.697zm-0.031-91.552v-77.826h163.31v77.826z\" stroke-width=\"1.3725\"/>\n</svg>",
    alignLeft: "\n<svg class=\"widget-icon\" enable-background=\"new 0 0 512 512\" version=\"1.1\" viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g transform=\"matrix(-1 0 0 1 512 0)\">\n    <path d=\"m501.33 170.67h-320c-5.896 0-10.667 4.771-10.667 10.667v21.333c0 5.896 4.771 10.667 10.667 10.667h320c5.896 0 10.667-4.771 10.667-10.667v-21.333c0-5.896-4.771-10.667-10.667-10.667z\"/>\n    <path d=\"m501.33 298.67h-490.67c-5.896 0-10.667 4.771-10.667 10.666v21.333c0 5.896 4.771 10.667 10.667 10.667h490.67c5.896 0 10.667-4.771 10.667-10.667v-21.333c-1e-3 -5.895-4.772-10.666-10.668-10.666z\"/>\n    <path d=\"m501.33 426.67h-320c-5.896 0-10.667 4.771-10.667 10.667v21.333c0 5.896 4.771 10.667 10.667 10.667h320c5.896 0 10.667-4.771 10.667-10.667v-21.333c0-5.896-4.771-10.667-10.667-10.667z\"/>\n    <path d=\"m501.33 42.667h-490.67c-5.896 0-10.667 4.771-10.667 10.666v21.333c0 5.896 4.771 10.667 10.667 10.667h490.67c5.896 0 10.667-4.771 10.667-10.667v-21.333c-1e-3 -5.895-4.772-10.666-10.668-10.666z\"/>\n  </g>\n</svg>",
    alignCenter: "\n<svg class=\"widget-icon\" enable-background=\"new 0 0 512 512\" version=\"1.1\" viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g transform=\"matrix(-1 0 0 1 512 0)\">\n    <path d=\"m416 170.67h-320c-5.896 0-10.667 4.771-10.667 10.667v21.333c0 5.896 4.771 10.667 10.667 10.667h320c5.896 0 10.667-4.771 10.667-10.667v-21.333c0-5.896-4.771-10.667-10.667-10.667z\"/>\n    <path d=\"m501.33 298.67h-490.67c-5.896 0-10.667 4.771-10.667 10.666v21.333c0 5.896 4.771 10.667 10.667 10.667h490.67c5.896 0 10.667-4.771 10.667-10.667v-21.333c-1e-3 -5.895-4.772-10.666-10.668-10.666z\"/>\n    <path d=\"m416 426.67h-320c-5.896 0-10.667 4.771-10.667 10.667v21.333c0 5.896 4.771 10.667 10.667 10.667h320c5.896 0 10.667-4.771 10.667-10.667v-21.333c0-5.896-4.771-10.667-10.667-10.667z\"/>\n    <path d=\"m501.33 42.667h-490.67c-5.896 0-10.667 4.771-10.667 10.666v21.333c0 5.896 4.771 10.667 10.667 10.667h490.67c5.896 0 10.667-4.771 10.667-10.667v-21.333c-1e-3 -5.895-4.772-10.666-10.668-10.666z\"/>\n  </g>\n</svg>",
    alignRight: "\n<svg class=\"widget-icon\" enable-background=\"new 0 0 512 512\" version=\"1.1\" viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"m501.33 170.67h-320c-5.896 0-10.667 4.771-10.667 10.667v21.333c0 5.896 4.771 10.667 10.667 10.667h320c5.896 0 10.667-4.771 10.667-10.667v-21.333c0-5.896-4.771-10.667-10.667-10.667z\"/>\n  <path d=\"m501.33 298.67h-490.67c-5.896 0-10.667 4.771-10.667 10.666v21.333c0 5.896 4.771 10.667 10.667 10.667h490.67c5.896 0 10.667-4.771 10.667-10.667v-21.333c-1e-3 -5.895-4.772-10.666-10.668-10.666z\"/>\n  <path d=\"m501.33 426.67h-320c-5.896 0-10.667 4.771-10.667 10.667v21.333c0 5.896 4.771 10.667 10.667 10.667h320c5.896 0 10.667-4.771 10.667-10.667v-21.333c0-5.896-4.771-10.667-10.667-10.667z\"/>\n  <path d=\"m501.33 42.667h-490.67c-5.896 0-10.667 4.771-10.667 10.666v21.333c0 5.896 4.771 10.667 10.667 10.667h490.67c5.896 0 10.667-4.771 10.667-10.667v-21.333c-1e-3 -5.895-4.772-10.666-10.668-10.666z\"/>\n</svg>",
    deleteColumn: "\n<svg class=\"widget-icon\" enable-background=\"new 0 0 26 26\" version=\"1.1\" viewBox=\"0 0 26 26\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"m13.594 20.85v3.15h-10v-22h10v3.15c0.633-0.323 1.304-0.565 2-0.727v-3.423c0-0.551-0.448-1-1-1h-12c-0.55 0-1 0.449-1 1v24c0 0.551 0.449 1 1 1h12c0.552 0 1-0.449 1-1v-3.424c-0.696-0.161-1.367-0.403-2-0.726z\"/>\n  <path d=\"m17.594 6.188c-3.762 0-6.813 3.051-6.812 6.813-1e-3 3.761 3.05 6.812 6.812 6.812s6.813-3.051 6.813-6.813-3.052-6.812-6.813-6.812zm3.632 7.802-7.267 1e-3v-1.982h7.268l-1e-3 1.981z\"/>\n</svg>",
    deleteRow: "\n<svg class=\"widget-icon\" enable-background=\"new 0 0 15.381 15.381\" version=\"1.1\" viewBox=\"0 0 15.381 15.381\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M0,1.732v7.732h6.053c0-0.035-0.004-0.07-0.004-0.104c0-0.434,0.061-0.854,0.165-1.255H1.36V3.092    h12.662v2.192c0.546,0.396,1.01,0.897,1.359,1.477V1.732H0z\"/>\n  <path d=\"m11.196 5.28c-2.307 0-4.183 1.877-4.183 4.184 0 2.308 1.876 4.185 4.183 4.185 2.309 0 4.185-1.877 4.185-4.185 0-2.307-1.876-4.184-4.185-4.184zm0 7.233c-1.679 0-3.047-1.367-3.047-3.049 0-1.68 1.368-3.049 3.047-3.049 1.684 0 3.05 1.369 3.05 3.049 0 1.682-1.366 3.049-3.05 3.049z\"/>\n  <rect x=\"9.312\" y=\"8.759\" width=\"3.844\" height=\"1.104\"/>\n</svg>",
    insertColumn: "\n<svg class=\"widget-icon\" version=\"1.1\" viewBox=\"-21 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"m288 106.67c-3.9258 0-7.8516-1.4297-10.922-4.3125l-80-74.664c-4.8008-4.4805-6.3789-11.457-3.9688-17.559 2.4102-6.1016 8.3203-10.133 14.891-10.133h160c6.5703 0 12.48 4.0117 14.891 10.133 2.4102 6.125 0.83203 13.078-3.9688 17.559l-80 74.664c-3.0703 2.8828-6.9961 4.3125-10.922 4.3125zm-39.402-74.668 39.402 36.777 39.402-36.777z\"/>\n  <path d=\"m432 512h-53.332c-20.59 0-37.336-16.746-37.336-37.332v-330.67c0-20.586 16.746-37.332 37.336-37.332h53.332c20.586 0 37.332 16.746 37.332 37.332v330.67c0 20.586-16.746 37.332-37.332 37.332zm-53.332-373.33c-2.9453 0-5.3359 2.3867-5.3359 5.332v330.67c0 2.9414 2.3906 5.332 5.3359 5.332h53.332c2.9453 0 5.332-2.3906 5.332-5.332v-330.67c0-2.9453-2.3867-5.332-5.332-5.332z\"/>\n  <path d=\"m197.33 512h-160c-20.586 0-37.332-16.746-37.332-37.332v-330.67c0-20.586 16.746-37.332 37.332-37.332h160c20.59 0 37.336 16.746 37.336 37.332v330.67c0 20.586-16.746 37.332-37.336 37.332zm-160-373.33c-2.9414 0-5.332 2.3867-5.332 5.332v330.67c0 2.9414 2.3906 5.332 5.332 5.332h160c2.9453 0 5.3359-2.3906 5.3359-5.332v-330.67c0-2.9453-2.3906-5.332-5.3359-5.332z\"/>\n  <path d=\"m453.33 325.33h-96c-8.832 0-16-7.168-16-16s7.168-16 16-16h96c8.832 0 16 7.168 16 16s-7.168 16-16 16z\"/>\n  <path d=\"m218.67 325.33h-202.67c-8.832 0-16-7.168-16-16s7.168-16 16-16h202.67c8.832 0 16 7.168 16 16s-7.168 16-16 16z\"/>\n  <path d=\"m117.33 512c-8.832 0-16-7.168-16-16v-373.33c0-8.832 7.168-16 16-16s16 7.168 16 16v373.33c0 8.832-7.168 16-16 16z\"/>\n</svg>",
    insertRow: "\n<svg class=\"widget-icon\" version=\"1.1\" viewBox=\"0 -21 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"m16 277.33c-1.9844 0-3.9688-0.36328-5.8672-1.1094-6.1211-2.4102-10.133-8.3203-10.133-14.891v-160c0-6.5703 4.0117-12.48 10.133-14.891 6.1445-2.4102 13.078-0.85156 17.559 3.9688l74.664 80c5.7617 6.1445 5.7617 15.68 0 21.824l-74.664 80c-3.0938 3.3281-7.3398 5.0977-11.691 5.0977zm16-135.4v78.805l36.777-39.402z\"/>\n  <path d=\"m474.67 128h-330.67c-20.586 0-37.332-16.746-37.332-37.332v-53.336c0-20.586 16.746-37.332 37.332-37.332h330.67c20.586 0 37.332 16.746 37.332 37.332v53.336c0 20.586-16.746 37.332-37.332 37.332zm-330.67-96c-2.9453 0-5.332 2.3906-5.332 5.332v53.336c0 2.9414 2.3867 5.332 5.332 5.332h330.67c2.9414 0 5.332-2.3906 5.332-5.332v-53.336c0-2.9414-2.3906-5.332-5.332-5.332z\"/>\n  <path d=\"m474.67 469.33h-330.67c-20.586 0-37.332-16.746-37.332-37.332v-160c0-20.586 16.746-37.332 37.332-37.332h330.67c20.586 0 37.332 16.746 37.332 37.332v160c0 20.586-16.746 37.332-37.332 37.332zm-330.67-202.66c-2.9453 0-5.332 2.3867-5.332 5.332v160c0 2.9453 2.3867 5.332 5.332 5.332h330.67c2.9414 0 5.332-2.3867 5.332-5.332v-160c0-2.9453-2.3906-5.332-5.332-5.332z\"/>\n  <path d=\"m309.33 128c-8.832 0-16-7.168-16-16v-96c0-8.832 7.168-16 16-16s16 7.168 16 16v96c0 8.832-7.168 16-16 16z\"/>\n  <path d=\"m309.33 469.33c-8.832 0-16-7.168-16-16v-202.66c0-8.832 7.168-16 16-16s16 7.168 16 16v202.66c0 8.832-7.168 16-16 16z\"/>\n  <path d=\"m496 368h-373.33c-8.832 0-16-7.168-16-16s7.168-16 16-16h373.33c8.832 0 16 7.168 16 16s-7.168 16-16 16z\"/>\n</svg>",
    moveColumnLeft: "\n<svg class=\"widget-icon\" version=\"1.1\" viewBox=\"0 0 512.02 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"m357.35 512.01h96c32.363 0 58.668-26.305 58.668-58.668v-394.66c0-32.363-26.305-58.668-58.668-58.668h-96c-32.363 0-58.664 26.305-58.664 58.668v394.66c0 32.363 26.301 58.668 58.664 58.668zm96-480c14.699 0 26.668 11.969 26.668 26.668v394.66c0 14.699-11.969 26.668-26.668 26.668h-96c-14.699 0-26.664-11.969-26.664-26.668v-394.66c0-14.699 11.965-26.668 26.664-26.668z\"/>\n  <path d=\"m16.016 272.01h224c8.832 0 16-7.168 16-16s-7.168-16-16-16h-224c-8.832 0-16 7.168-16 16s7.168 16 16 16z\"/>\n  <path d=\"m101.35 357.34c4.0976 0 8.1914-1.5547 11.309-4.6914 6.25-6.25 6.25-16.383 0-22.637l-74.027-74.023 74.027-74.027c6.25-6.25 6.25-16.387 0-22.637s-16.383-6.25-22.637 0l-85.332 85.336c-6.25 6.25-6.25 16.383 0 22.633l85.332 85.332c3.1367 3.1602 7.2344 4.7148 11.328 4.7148z\"/>\n</svg>",
    moveColumnRight: "\n<svg class=\"widget-icon\" version=\"1.1\" viewBox=\"0 0 512.02 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"m154.67 512.01h-96c-32.363 0-58.668-26.305-58.668-58.668v-394.66c0-32.363 26.305-58.668 58.668-58.668h96c32.363 0 58.664 26.305 58.664 58.668v394.66c0 32.363-26.301 58.668-58.664 58.668zm-96-480c-14.699 0-26.668 11.969-26.668 26.668v394.66c0 14.699 11.969 26.668 26.668 26.668h96c14.699 0 26.664-11.969 26.664-26.668v-394.66c0-14.699-11.965-26.668-26.664-26.668z\"/>\n  <path d=\"m496 272.01h-224c-8.832 0-16-7.168-16-16 0-8.832 7.168-16 16-16h224c8.832 0 16 7.168 16 16 0 8.832-7.168 16-16 16z\"/>\n  <path d=\"m410.67 357.34c-4.0977 0-8.1914-1.5547-11.309-4.6914-6.25-6.25-6.25-16.383 0-22.637l74.027-74.023-74.027-74.027c-6.25-6.25-6.25-16.387 0-22.637s16.383-6.25 22.637 0l85.332 85.336c6.25 6.25 6.25 16.383 0 22.633l-85.332 85.332c-3.1367 3.1602-7.2344 4.7148-11.328 4.7148z\"/>\n</svg>",
    moveRowDown: "\n<svg class=\"widget-icon\" version=\"1.1\" viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"m453.33 213.33h-394.66c-32.363 0-58.668-26.301-58.668-58.664v-96c0-32.363 26.305-58.668 58.668-58.668h394.66c32.363 0 58.668 26.305 58.668 58.668v96c0 32.363-26.305 58.664-58.668 58.664zm-394.66-181.33c-14.699 0-26.668 11.969-26.668 26.668v96c0 14.699 11.969 26.664 26.668 26.664h394.66c14.699 0 26.668-11.965 26.668-26.664v-96c0-14.699-11.969-26.668-26.668-26.668z\"/>\n  <path d=\"m256 512c-8.832 0-16-7.168-16-16v-224c0-8.832 7.168-16 16-16s16 7.168 16 16v224c0 8.832-7.168 16-16 16z\"/>\n  <path d=\"m256 512c-4.0977 0-8.1914-1.5586-11.309-4.6914l-85.332-85.336c-6.25-6.25-6.25-16.383 0-22.633s16.383-6.25 22.637 0l74.023 74.027 74.027-74.027c6.25-6.25 16.387-6.25 22.637 0s6.25 16.383 0 22.633l-85.336 85.336c-3.1562 3.1328-7.25 4.6914-11.348 4.6914z\"/>\n</svg>",
    moveRowUp: "\n<svg class=\"widget-icon\" version=\"1.1\" viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"m453.33 298.67h-394.66c-32.363 0-58.668 26.301-58.668 58.664v96c0 32.363 26.305 58.668 58.668 58.668h394.66c32.363 0 58.668-26.305 58.668-58.668v-96c0-32.363-26.305-58.664-58.668-58.664zm-394.66 181.33c-14.699 0-26.668-11.969-26.668-26.668v-96c0-14.699 11.969-26.664 26.668-26.664h394.66c14.699 0 26.668 11.965 26.668 26.664v96c0 14.699-11.969 26.668-26.668 26.668z\"/>\n  <path d=\"m256 0c-8.832 0-16 7.168-16 16v224c0 8.832 7.168 16 16 16s16-7.168 16-16v-224c0-8.832-7.168-16-16-16z\"/>\n  <path d=\"m256 0c-4.0977 0-8.1914 1.5586-11.309 4.6914l-85.332 85.336c-6.25 6.25-6.25 16.383 0 22.633s16.383 6.25 22.637 0l74.023-74.027 74.027 74.027c6.25 6.25 16.387 6.25 22.637 0s6.25-16.383 0-22.633l-85.336-85.336c-3.1562-3.1328-7.25-4.6914-11.348-4.6914z\"/>\n</svg>",
    sortAsc: "\n<svg class=\"widget-icon\" version=\"1.1\" viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g transform=\"matrix(1 0 0 -1 0 501.15)\" stroke-width=\"1.3333\">\n    <path d=\"m353.6 74.486c-11.776 0-21.333 9.5573-21.333 21.333v298.67c0 11.776 9.5573 21.333 21.333 21.333s21.333-9.5573 21.333-21.333v-298.67c0-11.776-9.5573-21.333-21.333-21.333z\"/>\n    <path d=\"m353.6 74.486c-5.4636 0-10.922 2.0781-15.079 6.2552l-113.78 113.78c-8.3333 8.3333-8.3333 21.844 0 30.177 8.3333 8.3333 21.844 8.3333 30.183 0l98.697-98.703 98.703 98.703c8.3333 8.3333 21.849 8.3333 30.183 0 8.3333-8.3333 8.3333-21.844 0-30.177l-113.78-113.78c-4.2083-4.1771-9.6667-6.2552-15.131-6.2552z\"/>\n  </g>\n  <path d=\"m166.04 210.11q-5.0971-13.492-9.5945-26.385-4.4974-13.192-9.2947-26.685h-94.146l-18.889 53.07h-30.283q11.993-32.981 22.487-60.865 10.494-28.184 20.388-53.369 10.194-25.186 20.089-47.973 9.8943-23.087 20.688-45.574h26.685q10.794 22.487 20.688 45.574 9.8943 22.787 19.789 47.973 10.194 25.186 20.688 53.369 10.494 27.884 22.487 60.865zm-27.284-77.056q-9.5945-26.085-19.189-50.371-9.2947-24.586-19.489-47.073-10.494 22.487-20.089 47.073-9.2947 24.286-18.589 50.371z\"/>\n  <path d=\"m173.24 325.25q-6.896 7.7955-16.191 18.889-8.9948 10.794-19.189 24.286-10.194 13.192-20.988 28.184-10.794 14.692-21.288 29.983-10.194 14.991-19.489 29.983-9.2947 14.991-16.79 28.484h116.93v24.886h-150.81v-19.489q6.2964-11.993 14.692-26.385 8.695-14.392 18.29-29.383 9.8943-14.991 20.388-30.283t20.688-29.383q10.494-14.092 20.088-26.385 9.8943-12.293 17.99-21.588h-106.74v-24.886h142.42z\"/>\n</svg>",
    sortDesc: "\n<svg class=\"widget-icon\" version=\"1.1\" viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g transform=\"matrix(1 0 0 -1 0 501.15)\" stroke-width=\"1.3333\">\n    <path d=\"m353.6 74.486c-11.776 0-21.333 9.5573-21.333 21.333v298.67c0 11.776 9.5573 21.333 21.333 21.333s21.333-9.5573 21.333-21.333v-298.67c0-11.776-9.5573-21.333-21.333-21.333z\"/>\n    <path d=\"m353.6 74.486c-5.4636 0-10.922 2.0781-15.079 6.2552l-113.78 113.78c-8.3333 8.3333-8.3333 21.844 0 30.177 8.3333 8.3333 21.844 8.3333 30.183 0l98.697-98.703 98.703 98.703c8.3333 8.3333 21.849 8.3333 30.183 0 8.3333-8.3333 8.3333-21.844 0-30.177l-113.78-113.78c-4.2083-4.1771-9.6667-6.2552-15.131-6.2552z\"/>\n  </g>\n  <path d=\"m169.11 507.72q-5.0971-13.492-9.5945-26.385-4.4974-13.192-9.2947-26.685h-94.146l-18.889 53.07h-30.283q11.993-32.981 22.487-60.865 10.494-28.184 20.388-53.369 10.194-25.186 20.088-47.973 9.8943-23.087 20.688-45.574h26.685q10.794 22.487 20.688 45.574 9.8943 22.787 19.789 47.973 10.194 25.186 20.688 53.369 10.494 27.884 22.487 60.865zm-27.284-77.056q-9.5945-26.085-19.189-50.371-9.2947-24.586-19.489-47.073-10.494 22.487-20.089 47.073-9.2947 24.286-18.589 50.371z\"/>\n  <path d=\"m176.31 27.639q-6.896 7.7955-16.191 18.889-8.9948 10.794-19.189 24.286-10.194 13.192-20.988 28.184-10.794 14.692-21.288 29.983-10.194 14.991-19.489 29.983-9.2947 14.991-16.79 28.484h116.93v24.886h-150.81v-19.489q6.2964-11.993 14.692-26.385 8.695-14.392 18.29-29.383 9.8943-14.991 20.388-30.283 10.494-15.291 20.688-29.383 10.494-14.092 20.088-26.385 9.8943-12.293 17.99-21.588h-106.74v-24.886h142.42z\"/>\n</svg>",
    formula: "\n<svg class=\"widget-icon\" version=\"1.1\" viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"m263.51 62.967c1.672-11.134 9.326-22.967 20.222-22.967 11.028 0 20 8.972 20 20h40c0-33.084-26.916-60-60-60-33.629 0-55.527 28.691-59.784 57.073l-12.862 86.927h-61.354v40h55.436l-39.22 265.07-0.116 0.937c-1.063 10.62-9.393 21.99-20.1 21.99-11.028 0-20-8.972-20-20h-40c0 33.084 26.916 60 60 60 33.661 0 56.771-29.141 59.848-57.496l40.023-270.5h60.129v-40h-54.211l11.989-81.033z\"/>\n  <polygon points=\"426.27 248 378.24 248 352.25 287.08 334.92 248 291.17 248 326 326.57 270.52 410 318.56 410 345.21 369.92 362.98 410 406.73 410 371.46 330.43\"/>\n</svg>",
    help: "\n<svg class=\"widget-icon\" version=\"1.1\" viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"m248.16 343.22c-14.639 0-26.491 12.2-26.491 26.84 0 14.291 11.503 26.84 26.491 26.84s26.84-12.548 26.84-26.84c0-14.64-12.199-26.84-26.84-26.84z\"/>\n  <path d=\"m252.69 140c-47.057 0-68.668 27.885-68.668 46.708 0 13.595 11.502 19.869 20.914 19.869 18.822 0 11.154-26.84 46.708-26.84 17.429 0 31.372 7.669 31.372 23.703 0 18.824-19.52 29.629-31.023 39.389-10.108 8.714-23.354 23.006-23.354 52.983 0 18.125 4.879 23.354 19.171 23.354 17.08 0 20.565-7.668 20.565-14.291 0-18.126 0.35-28.583 19.521-43.571 9.411-7.32 39.04-31.023 39.04-63.789s-29.629-57.515-74.246-57.515z\"/>\n  <path d=\"m256 0c-141.48 0-256 114.5-256 256v236c0 11.046 8.954 20 20 20h236c141.48 0 256-114.5 256-256 0-141.48-114.5-256-256-256zm0 472h-216v-216c0-119.38 96.607-216 216-216 119.38 0 216 96.607 216 216 0 119.38-96.607 216-216 216z\"/>\n</svg>",
    csv: "\n<svg class=\"widget-icon\" version=\"1.1\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n <path d=\"m4.9979 9v-8h14.502l3.5 3.5 2e-7 18.5h-19m14-22v5h5m-16 7h-2c-1 0-2 0.5-2 1.5v1.5s1e-8 0.5 0 1.5 1 1.5 2 1.5h2m6.25-6h-2.5c-1.5 0-2 0.5-2 1.5s0.5 1.5 2 1.5 2 0.5 2 1.5-0.5 1.5-2 1.5h-2.5m12.25-7v0.5c0 0.5-2.5 6.5-2.5 6.5h-0.5s-2.5-6-2.5-6.5v-0.5\" fill=\"none\" stroke=\"var(--text-muted)\" stroke-width=\"1.5\"/>\n</svg>",
    arrowenter: "\n<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill=\"currentColor\" d=\"m4.64119 12.5 2.87283 2.7038c.30163.2839.31602.7586.03213 1.0602-.28389.3017-.75854.316-1.06017.0321l-4.25-4c-.15059-.1417-.23598-.3393-.23598-.5461s.08539-.4044.23598-.5462l4.25-3.99995c.30163-.28389.77628-.2695 1.06017.03213s.2695.77628-.03213 1.06017l-2.87284 2.70385h10.10882c.9665 0 1.75-.7835 1.75-1.75v-4.5c0-.41421.3358-.75.75-.75s.75.33579.75.75v4.5c0 1.7949-1.4551 3.25-3.25 3.25z\"/>\n</svg>",
    arrowtab: "\n<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill=\"currentColor\" d=\"m18.2071068 11.2928932-6.5-6.49999998c-.3905243-.39052429-1.0236893-.39052429-1.4142136 0-.36048394.36048396-.38821348.92771502-.0831886 1.32000622l.0831886.09420734 4.7931068 4.79289322h-11.086c-.51283584 0-.93550716.3860402-.99327227.8833789l-.00672773.1166211c0 .5128358.38604019.9355072.88337887.9932723l.11662113.0067277h11.086l-4.7931068 4.7928932c-.36048394.360484-.38821348.927715-.0831886 1.3200062l.0831886.0942074c.360484.3604839.927715.3882135 1.3200062.0831886l.0942074-.0831886 6.5-6.5c.3604839-.360484.3882135-.927715.0831886-1.3200062l-.0831886-.0942074-6.5-6.49999998zm2.7928932 7.2071068v-13c0-.55228475-.4477153-1-1-1s-1 .44771525-1 1v13c0 .5522847.4477153 1 1 1s1-.4477153 1-1z\" fill=\"#212121\"/>\n</svg>",
};
var addIcons = function () {
    Object.keys(icons).forEach(function (key) {
        // Don't add the 'help' icon here as it will overwrite the native one.
        if (key !== 'help') {
            obsidian.addIcon(key, icons[key]);
        }
    });
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var point = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
/**
 * A `Point` represents a point in the text editor.
 */
class Point {
    /**
     * Creates a new `Point` object.
     *
     * @param row - Row of the point, starts from 0.
     * @param column - Column of the point, starts from 0.
     */
    constructor(row, column) {
        this.row = row;
        this.column = column;
    }
    /**
     * Checks if the point is equal to another point.
     */
    equals(point) {
        return this.row === point.row && this.column === point.column;
    }
}
exports.Point = Point;
});

var range = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Range = void 0;
/**
 * A `Range` object represents a range in the text editor.
 */
class Range {
    /**
     * Creates a new `Range` object.
     *
     * @param start - The start point of the range.
     * @param end - The end point of the range.
     */
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}
exports.Range = Range;
});

var focus = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Focus = void 0;
/**
 * A `Focus` object represents which cell is focused in the table.
 *
 * Note that `row` and `column` properties specifiy a cell's position in the
 * table, not the cursor's position in the text editor as {@link Point} class.
 *
 * @private
 */
class Focus {
    /**
     * Creates a new `Focus` object.
     *
     * @param row - Row of the focused cell.
     * @param column - Column of the focused cell.
     * @param offset - Raw offset in the cell.
     */
    constructor(row, column, offset) {
        this.row = row;
        this.column = column;
        this.offset = offset;
    }
    /**
     * Checks if two focuses point the same cell.
     * Offsets are ignored.
     */
    posEquals(focus) {
        return this.row === focus.row && this.column === focus.column;
    }
    /**
     * Creates a copy of the focus object by setting its row to the specified value.
     *
     * @param row - Row of the focused cell.
     * @returns A new focus object with the specified row.
     */
    setRow(row) {
        return new Focus(row, this.column, this.offset);
    }
    /**
     * Creates a copy of the focus object by setting its column to the specified value.
     *
     * @param column - Column of the focused cell.
     * @returns A new focus object with the specified column.
     */
    setColumn(column) {
        return new Focus(this.row, column, this.offset);
    }
    /**
     * Creates a copy of the focus object by setting its offset to the specified value.
     *
     * @param offset - Offset in the focused cell.
     * @returns A new focus object with the specified offset.
     */
    setOffset(offset) {
        return new Focus(this.row, this.column, offset);
    }
}
exports.Focus = Focus;
});

var alignment = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderAlignment = exports.DefaultAlignment = exports.Alignment = void 0;
/**
 * Represents column alignment.
 *
 * - `Alignment.NONE` - Use default alignment.
 * - `Alignment.LEFT` - Align left.
 * - `Alignment.RIGHT` - Align right.
 * - `Alignment.CENTER` - Align center.
 *
 */
var Alignment;
(function (Alignment) {
    Alignment["NONE"] = "none";
    Alignment["LEFT"] = "left";
    Alignment["RIGHT"] = "right";
    Alignment["CENTER"] = "center";
})(Alignment = exports.Alignment || (exports.Alignment = {}));
/**
 * Represents default column alignment
 *
 * - `DefaultAlignment.LEFT` - Align left.
 * - `DefaultAlignment.RIGHT` - Align right.
 * - `DefaultAlignment.CENTER` - Align center.
 *
 */
var DefaultAlignment;
(function (DefaultAlignment) {
    DefaultAlignment["LEFT"] = "left";
    DefaultAlignment["RIGHT"] = "right";
    DefaultAlignment["CENTER"] = "center";
})(DefaultAlignment = exports.DefaultAlignment || (exports.DefaultAlignment = {}));
/**
 * Represents alignment of header cells.
 *
 * - `HeaderAlignment.FOLLOW` - Follow column's alignment.
 * - `HeaderAlignment.LEFT` - Align left.
 * - `HeaderAlignment.RIGHT` - Align right.
 * - `HeaderAlignment.CENTER` - Align center.
 *
 */
var HeaderAlignment;
(function (HeaderAlignment) {
    HeaderAlignment["FOLLOW"] = "follow";
    HeaderAlignment["LEFT"] = "left";
    HeaderAlignment["RIGHT"] = "right";
    HeaderAlignment["CENTER"] = "center";
})(HeaderAlignment = exports.HeaderAlignment || (exports.HeaderAlignment = {}));
});

var tableCell = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableCell = void 0;

/**
 * A `TableCell` object represents a table cell.
 *
 * @private
 */
class TableCell {
    /**
     * Creates a new `TableCell` object.
     *
     * @param rawContent - Raw content of the cell.
     */
    constructor(rawContent) {
        this.rawContent = rawContent;
        this.content = rawContent.trim();
        this.paddingLeft =
            this.content === ''
                ? this.rawContent === ''
                    ? 0
                    : 1
                : this.rawContent.length - this.rawContent.trimLeft().length;
        this.paddingRight =
            this.rawContent.length - this.content.length - this.paddingLeft;
    }
    /**
     * Convers the cell to a text representation.
     *
     * @returns The raw content of the cell.
     */
    toText() {
        return this.rawContent;
    }
    /**
     * Checks if the cell is a delimiter i.e. it only contains hyphens `-` with optional one
     * leading and trailing colons `:`.
     *
     * @returns `true` if the cell is a delimiter.
     */
    isDelimiter() {
        return /^\s*:?-+:?\s*$/.test(this.rawContent);
    }
    /**
     * Returns the alignment the cell represents.
     *
     * @returns The alignment the cell represents; `undefined` if the cell is not a delimiter.
     */
    getAlignment() {
        if (!this.isDelimiter()) {
            return undefined;
        }
        if (this.content[0] === ':') {
            if (this.content[this.content.length - 1] === ':') {
                return alignment.Alignment.CENTER;
            }
            return alignment.Alignment.LEFT;
        }
        if (this.content[this.content.length - 1] === ':') {
            return alignment.Alignment.RIGHT;
        }
        return alignment.Alignment.NONE;
    }
    /**
     * Computes a relative position in the trimmed content from that in the raw content.
     *
     * @param rawOffset - Relative position in the raw content.
     * @returns - Relative position in the trimmed content.
     */
    computeContentOffset(rawOffset) {
        if (this.content === '') {
            return 0;
        }
        if (rawOffset < this.paddingLeft) {
            return 0;
        }
        if (rawOffset < this.paddingLeft + this.content.length) {
            return rawOffset - this.paddingLeft;
        }
        return this.content.length;
    }
    /**
     * Computes a relative position in the raw content from that in the trimmed content.
     *
     * @param contentOffset - Relative position in the trimmed content.
     * @returns - Relative position in the raw content.
     */
    computeRawOffset(contentOffset) {
        return contentOffset + this.paddingLeft;
    }
}
exports.TableCell = TableCell;
});

var tableRow = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableRow = void 0;

/**
 * A `TableRow` object represents a table row.
 *
 * @private
 */
class TableRow {
    /**
     * Creates a new `TableRow` objec.
     *
     * @param cells - Cells that the row contains.
     * @param marginLeft - Margin string at the left of the row.
     * @param marginRight - Margin string at the right of the row.
     */
    constructor(cells, marginLeft, marginRight) {
        this._cells = cells.slice();
        this.marginLeft = marginLeft;
        this.marginRight = marginRight;
    }
    /**
     * Gets the number of the cells in the row.
     */
    getWidth() {
        return this._cells.length;
    }
    /**
     * Returns the cells that the row contains.
     */
    getCells() {
        return this._cells.slice();
    }
    /**
     * Gets a cell at the specified index.
     *
     * @param index - Index.
     * @returns The cell at the specified index if exists; `undefined` if no cell is found.
     */
    getCellAt(index) {
        return this._cells[index];
    }
    /**
     * Sets a cell in the row to a new value, returning a copy of the row
     * with the modified value.
     *
     * If an invalid index is provided, the row will be unchanged.
     */
    setCellAt(index, value) {
        const cells = this.getCells(); // a copy
        cells[index] = new tableCell.TableCell(value);
        return new TableRow(cells, this.marginLeft, this.marginRight);
    }
    /**
     * Convers the row to a text representation.
     */
    toText() {
        if (this._cells.length === 0) {
            return this.marginLeft;
        }
        const cells = this._cells.map((cell) => cell.toText()).join('|');
        return `${this.marginLeft}|${cells}|${this.marginRight}`;
    }
    /**
     * Checks if the row is a delimiter or not.
     *
     * @returns `true` if the row is a delimiter i.e. all the cells contained are delimiters.
     */
    isDelimiter() {
        return this._cells.every((cell) => cell.isDelimiter());
    }
}
exports.TableRow = TableRow;
});

var neverthrow = createCommonjsModule(function (module, exports) {
/**
 * Retrieved from
 *   https://github.com/supermacro/neverthrow
 *
 * MIT License
 * Copyright (c) 2019 Giorgio Delgado
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Err = exports.Ok = exports.err = exports.ok = void 0;
const ok = (value) => new Ok(value);
exports.ok = ok;
const err = (err) => new Err(err);
exports.err = err;
class Ok {
    constructor(value) {
        this.value = value;
        this.match = (ok, _err) => ok(this.value);
    }
    isOk() {
        return true;
    }
    isErr() {
        return !this.isOk();
    }
    map(f) {
        return exports.ok(f(this.value));
    }
    mapErr(_f) {
        return exports.ok(this.value);
    }
    // add info on how this is really useful for converting a
    // Result<Result<T, E2>, E1>
    // into a Result<T, E2>
    andThen(f) {
        return f(this.value);
    }
    unwrapOr(_v) {
        return this.value;
    }
    _unsafeUnwrap() {
        return this.value;
    }
    _unsafeUnwrapErr() {
        throw new Error('Called `_unsafeUnwrapErr` on an Ok');
    }
}
exports.Ok = Ok;
class Err {
    constructor(error) {
        this.error = error;
        this.match = (_ok, err) => err(this.error);
    }
    isOk() {
        return false;
    }
    isErr() {
        return !this.isOk();
    }
    map(_f) {
        return exports.err(this.error);
    }
    mapErr(f) {
        return exports.err(f(this.error));
    }
    andThen(_f) {
        return exports.err(this.error);
    }
    unwrapOr(v) {
        return v;
    }
    _unsafeUnwrap() {
        throw new Error('Called `_unsafeUnwrap` on an Err');
    }
    _unsafeUnwrapErr() {
        return this.error;
    }
}
exports.Err = Err;
});

var ast_utils = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.prettyPrintAST = exports.checkChildLength = exports.checkType = exports.errRelativeReferenceIndex = exports.errIndex0 = void 0;
exports.errIndex0 = new Error('Index 0 used to create a reference');
exports.errRelativeReferenceIndex = new Error('Can not use relative reference where absolute reference is required');
const checkType = (ast, ...expectedTypes) => {
    if (expectedTypes.indexOf(ast.type) >= 0) {
        return;
    }
    return new Error(`Formula element '${ast.text}' is a ${ast.type} but expected ` +
        `one of ${expectedTypes} in this position.`);
};
exports.checkType = checkType;
const checkChildLength = (ast, len) => {
    if (ast.children.length === len) {
        return;
    }
    return new Error(`Formula element '${ast.text}' was expected to have ${len} ` +
        `elements, but had ${ast.children.length}`);
};
exports.checkChildLength = checkChildLength;
const prettyPrintAST = (token, level = 0) => {
    console.log('  '.repeat(level) +
        `|-${token.type}${token.children.length === 0 ? '=' + token.text : ''}`);
    if (token.children) {
        token.children.forEach((c) => {
            exports.prettyPrintAST(c, level + 1);
        });
    }
};
exports.prettyPrintAST = prettyPrintAST;
});

var lodash = createCommonjsModule(function (module, exports) {
(function() {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined$1;

  /** Used as the semantic version number. */
  var VERSION = '4.17.20';

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /** Error message constants. */
  var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
      FUNC_ERROR_TEXT = 'Expected a function';

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /** Used as the internal argument placeholder. */
  var PLACEHOLDER = '__lodash_placeholder__';

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG = 4;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG = 1,
      WRAP_BIND_KEY_FLAG = 2,
      WRAP_CURRY_BOUND_FLAG = 4,
      WRAP_CURRY_FLAG = 8,
      WRAP_CURRY_RIGHT_FLAG = 16,
      WRAP_PARTIAL_FLAG = 32,
      WRAP_PARTIAL_RIGHT_FLAG = 64,
      WRAP_ARY_FLAG = 128,
      WRAP_REARG_FLAG = 256,
      WRAP_FLIP_FLAG = 512;

  /** Used as default options for `_.truncate`. */
  var DEFAULT_TRUNC_LENGTH = 30,
      DEFAULT_TRUNC_OMISSION = '...';

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
      HOT_SPAN = 16;

  /** Used to indicate the type of lazy iteratees. */
  var LAZY_FILTER_FLAG = 1,
      LAZY_MAP_FLAG = 2,
      LAZY_WHILE_FLAG = 3;

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0,
      MAX_SAFE_INTEGER = 9007199254740991,
      MAX_INTEGER = 1.7976931348623157e+308,
      NAN = 0 / 0;

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH = 4294967295,
      MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
      HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

  /** Used to associate wrap methods with their bit flags. */
  var wrapFlags = [
    ['ary', WRAP_ARY_FLAG],
    ['bind', WRAP_BIND_FLAG],
    ['bindKey', WRAP_BIND_KEY_FLAG],
    ['curry', WRAP_CURRY_FLAG],
    ['curryRight', WRAP_CURRY_RIGHT_FLAG],
    ['flip', WRAP_FLIP_FLAG],
    ['partial', WRAP_PARTIAL_FLAG],
    ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
    ['rearg', WRAP_REARG_FLAG]
  ];

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      asyncTag = '[object AsyncFunction]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      domExcTag = '[object DOMException]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      nullTag = '[object Null]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      proxyTag = '[object Proxy]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      undefinedTag = '[object Undefined]',
      weakMapTag = '[object WeakMap]',
      weakSetTag = '[object WeakSet]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to match empty string literals in compiled template source. */
  var reEmptyStringLeading = /\b__p \+= '';/g,
      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

  /** Used to match HTML entities and HTML characters. */
  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
      reUnescapedHtml = /[&<>"']/g,
      reHasEscapedHtml = RegExp(reEscapedHtml.source),
      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

  /** Used to match template delimiters. */
  var reEscape = /<%-([\s\S]+?)%>/g,
      reEvaluate = /<%([\s\S]+?)%>/g,
      reInterpolate = /<%=([\s\S]+?)%>/g;

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/,
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
      reHasRegExpChar = RegExp(reRegExpChar.source);

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g,
      reTrimStart = /^\s+/,
      reTrimEnd = /\s+$/;

  /** Used to match wrap detail comments. */
  var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
      reSplitDetails = /,? & /;

  /** Used to match words composed of alphanumeric characters. */
  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Used to match
   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
   */
  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /** Used to match Latin Unicode letters (excluding mathematical operators). */
  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

  /** Used to ensure capturing order of template delimiters. */
  var reNoMatch = /($^)/;

  /** Used to match unescaped characters in compiled string literals. */
  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

  /** Used to compose unicode character classes. */
  var rsAstralRange = '\\ud800-\\udfff',
      rsComboMarksRange = '\\u0300-\\u036f',
      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange = '\\u20d0-\\u20ff',
      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
      rsDingbatRange = '\\u2700-\\u27bf',
      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      rsPunctuationRange = '\\u2000-\\u206f',
      rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      rsVarRange = '\\ufe0e\\ufe0f',
      rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

  /** Used to compose unicode capture groups. */
  var rsApos = "['\u2019]",
      rsAstral = '[' + rsAstralRange + ']',
      rsBreak = '[' + rsBreakRange + ']',
      rsCombo = '[' + rsComboRange + ']',
      rsDigits = '\\d+',
      rsDingbat = '[' + rsDingbatRange + ']',
      rsLower = '[' + rsLowerRange + ']',
      rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
      rsFitz = '\\ud83c[\\udffb-\\udfff]',
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange + ']',
      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      rsUpper = '[' + rsUpperRange + ']',
      rsZWJ = '\\u200d';

  /** Used to compose unicode regexes. */
  var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
      rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
      rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
      rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
      reOptMod = rsModifier + '?',
      rsOptVar = '[' + rsVarRange + ']?',
      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
      rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
      rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
      rsSeq = rsOptVar + reOptMod + rsOptJoin,
      rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

  /** Used to match apostrophes. */
  var reApos = RegExp(rsApos, 'g');

  /**
   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
   */
  var reComboMark = RegExp(rsCombo, 'g');

  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

  /** Used to match complex or compound words. */
  var reUnicodeWord = RegExp([
    rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
    rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
    rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
    rsUpper + '+' + rsOptContrUpper,
    rsOrdUpper,
    rsOrdLower,
    rsDigits,
    rsEmoji
  ].join('|'), 'g');

  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

  /** Used to detect strings that need a more robust regexp to match words. */
  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

  /** Used to assign default `context` object properties. */
  var contextProps = [
    'Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array',
    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object',
    'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array',
    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap',
    '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'
  ];

  /** Used to make template sourceURLs easier to identify. */
  var templateCounter = -1;

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag] =
  typedArrayTags[weakMapTag] = false;

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] =
  cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
  cloneableTags[boolTag] = cloneableTags[dateTag] =
  cloneableTags[float32Tag] = cloneableTags[float64Tag] =
  cloneableTags[int8Tag] = cloneableTags[int16Tag] =
  cloneableTags[int32Tag] = cloneableTags[mapTag] =
  cloneableTags[numberTag] = cloneableTags[objectTag] =
  cloneableTags[regexpTag] = cloneableTags[setTag] =
  cloneableTags[stringTag] = cloneableTags[symbolTag] =
  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] =
  cloneableTags[weakMapTag] = false;

  /** Used to map Latin Unicode letters to basic Latin letters. */
  var deburredLetters = {
    // Latin-1 Supplement block.
    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
    '\xc7': 'C',  '\xe7': 'c',
    '\xd0': 'D',  '\xf0': 'd',
    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
    '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
    '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
    '\xd1': 'N',  '\xf1': 'n',
    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
    '\xc6': 'Ae', '\xe6': 'ae',
    '\xde': 'Th', '\xfe': 'th',
    '\xdf': 'ss',
    // Latin Extended-A block.
    '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
    '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
    '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
    '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
    '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
    '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
    '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
    '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
    '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
    '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
    '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
    '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
    '\u0134': 'J',  '\u0135': 'j',
    '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
    '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
    '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
    '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
    '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
    '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
    '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
    '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
    '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
    '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
    '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
    '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
    '\u0163': 't',  '\u0165': 't', '\u0167': 't',
    '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
    '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
    '\u0174': 'W',  '\u0175': 'w',
    '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
    '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
    '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
    '\u0132': 'IJ', '\u0133': 'ij',
    '\u0152': 'Oe', '\u0153': 'oe',
    '\u0149': "'n", '\u017f': 's'
  };

  /** Used to map characters to HTML entities. */
  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  /** Used to map HTML entities to characters. */
  var htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
  };

  /** Used to escape characters for inclusion in compiled string literals. */
  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  /** Built-in method references without a dependency on `root`. */
  var freeParseFloat = parseFloat,
      freeParseInt = parseInt;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Detect free variable `exports`. */
  var freeExports =  exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule && freeModule.require && freeModule.require('util').types;

      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  /* Node.js helper references. */
  var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer,
      nodeIsDate = nodeUtil && nodeUtil.isDate,
      nodeIsMap = nodeUtil && nodeUtil.isMap,
      nodeIsRegExp = nodeUtil && nodeUtil.isRegExp,
      nodeIsSet = nodeUtil && nodeUtil.isSet,
      nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /*--------------------------------------------------------------------------*/

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  /**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */
  function arrayAggregator(array, setter, iteratee, accumulator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      var value = array[index];
      setter(accumulator, value, iteratee(value), array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEachRight(array, iteratee) {
    var length = array == null ? 0 : array.length;

    while (length--) {
      if (iteratee(array[length], length, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */
  function arrayEvery(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (!predicate(array[index], index, array)) {
        return false;
      }
    }
    return true;
  }

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }

  /**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludesWith(array, value, comparator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }
    return false;
  }

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  /**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1,
        length = array == null ? 0 : array.length;

    if (initAccum && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduceRight(array, iteratee, accumulator, initAccum) {
    var length = array == null ? 0 : array.length;
    if (initAccum && length) {
      accumulator = array[--length];
    }
    while (length--) {
      accumulator = iteratee(accumulator, array[length], length, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  var asciiSize = baseProperty('length');

  /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function asciiToArray(string) {
    return string.split('');
  }

  /**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function asciiWords(string) {
    return string.match(reAsciiWord) || [];
  }

  /**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */
  function baseFindKey(collection, predicate, eachFunc) {
    var result;
    eachFunc(collection, function(value, key, collection) {
      if (predicate(value, key, collection)) {
        result = key;
        return false;
      }
    });
    return result;
  }

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while ((fromRight ? index-- : ++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    return value === value
      ? strictIndexOf(array, value, fromIndex)
      : baseFindIndex(array, baseIsNaN, fromIndex);
  }

  /**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOfWith(array, value, fromIndex, comparator) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (comparator(array[index], value)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */
  function baseIsNaN(value) {
    return value !== value;
  }

  /**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */
  function baseMean(array, iteratee) {
    var length = array == null ? 0 : array.length;
    return length ? (baseSum(array, iteratee) / length) : NAN;
  }

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined$1 : object[key];
    };
  }

  /**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyOf(object) {
    return function(key) {
      return object == null ? undefined$1 : object[key];
    };
  }

  /**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */
  function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
    eachFunc(collection, function(value, index, collection) {
      accumulator = initAccum
        ? (initAccum = false, value)
        : iteratee(accumulator, value, index, collection);
    });
    return accumulator;
  }

  /**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */
  function baseSortBy(array, comparer) {
    var length = array.length;

    array.sort(comparer);
    while (length--) {
      array[length] = array[length].value;
    }
    return array;
  }

  /**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */
  function baseSum(array, iteratee) {
    var result,
        index = -1,
        length = array.length;

    while (++index < length) {
      var current = iteratee(array[index]);
      if (current !== undefined$1) {
        result = result === undefined$1 ? current : (result + current);
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */
  function baseToPairs(object, props) {
    return arrayMap(props, function(key) {
      return [key, object[key]];
    });
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  /**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */
  function baseValues(object, props) {
    return arrayMap(props, function(key) {
      return object[key];
    });
  }

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  /**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */
  function charsStartIndex(strSymbols, chrSymbols) {
    var index = -1,
        length = strSymbols.length;

    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */
  function charsEndIndex(strSymbols, chrSymbols) {
    var index = strSymbols.length;

    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */
  function countHolders(array, placeholder) {
    var length = array.length,
        result = 0;

    while (length--) {
      if (array[length] === placeholder) {
        ++result;
      }
    }
    return result;
  }

  /**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */
  var deburrLetter = basePropertyOf(deburredLetters);

  /**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  var escapeHtmlChar = basePropertyOf(htmlEscapes);

  /**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  function escapeStringChar(chr) {
    return '\\' + stringEscapes[chr];
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined$1 : object[key];
  }

  /**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }

  /**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */
  function hasUnicodeWord(string) {
    return reHasUnicodeWord.test(string);
  }

  /**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */
  function iteratorToArray(iterator) {
    var data,
        result = [];

    while (!(data = iterator.next()).done) {
      result.push(data.value);
    }
    return result;
  }

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  /**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */
  function replaceHolders(array, placeholder) {
    var index = -1,
        length = array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (value === placeholder || value === PLACEHOLDER) {
        array[index] = PLACEHOLDER;
        result[resIndex++] = index;
      }
    }
    return result;
  }

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  /**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */
  function setToPairs(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = [value, value];
    });
    return result;
  }

  /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictLastIndexOf(array, value, fromIndex) {
    var index = fromIndex + 1;
    while (index--) {
      if (array[index] === value) {
        return index;
      }
    }
    return index;
  }

  /**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */
  function stringSize(string) {
    return hasUnicode(string)
      ? unicodeSize(string)
      : asciiSize(string);
  }

  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function stringToArray(string) {
    return hasUnicode(string)
      ? unicodeToArray(string)
      : asciiToArray(string);
  }

  /**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */
  var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

  /**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  function unicodeSize(string) {
    var result = reUnicode.lastIndex = 0;
    while (reUnicode.test(string)) {
      ++result;
    }
    return result;
  }

  /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }

  /**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function unicodeWords(string) {
    return string.match(reUnicodeWord) || [];
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Create a new pristine `lodash` function using the `context` object.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Util
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns a new `lodash` function.
   * @example
   *
   * _.mixin({ 'foo': _.constant('foo') });
   *
   * var lodash = _.runInContext();
   * lodash.mixin({ 'bar': lodash.constant('bar') });
   *
   * _.isFunction(_.foo);
   * // => true
   * _.isFunction(_.bar);
   * // => false
   *
   * lodash.isFunction(lodash.foo);
   * // => false
   * lodash.isFunction(lodash.bar);
   * // => true
   *
   * // Create a suped-up `defer` in Node.js.
   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
   */
  var runInContext = (function runInContext(context) {
    context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));

    /** Built-in constructor references. */
    var Array = context.Array,
        Date = context.Date,
        Error = context.Error,
        Function = context.Function,
        Math = context.Math,
        Object = context.Object,
        RegExp = context.RegExp,
        String = context.String,
        TypeError = context.TypeError;

    /** Used for built-in method references. */
    var arrayProto = Array.prototype,
        funcProto = Function.prototype,
        objectProto = Object.prototype;

    /** Used to detect overreaching core-js shims. */
    var coreJsData = context['__core-js_shared__'];

    /** Used to resolve the decompiled source of functions. */
    var funcToString = funcProto.toString;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Used to generate unique IDs. */
    var idCounter = 0;

    /** Used to detect methods masquerading as native. */
    var maskSrcKey = (function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
      return uid ? ('Symbol(src)_1.' + uid) : '';
    }());

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var nativeObjectToString = objectProto.toString;

    /** Used to infer the `Object` constructor. */
    var objectCtorString = funcToString.call(Object);

    /** Used to restore the original `_` reference in `_.noConflict`. */
    var oldDash = root._;

    /** Used to detect if a method is native. */
    var reIsNative = RegExp('^' +
      funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );

    /** Built-in value references. */
    var Buffer = moduleExports ? context.Buffer : undefined$1,
        Symbol = context.Symbol,
        Uint8Array = context.Uint8Array,
        allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined$1,
        getPrototype = overArg(Object.getPrototypeOf, Object),
        objectCreate = Object.create,
        propertyIsEnumerable = objectProto.propertyIsEnumerable,
        splice = arrayProto.splice,
        spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined$1,
        symIterator = Symbol ? Symbol.iterator : undefined$1,
        symToStringTag = Symbol ? Symbol.toStringTag : undefined$1;

    var defineProperty = (function() {
      try {
        var func = getNative(Object, 'defineProperty');
        func({}, '', {});
        return func;
      } catch (e) {}
    }());

    /** Mocked built-ins. */
    var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout,
        ctxNow = Date && Date.now !== root.Date.now && Date.now,
        ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeCeil = Math.ceil,
        nativeFloor = Math.floor,
        nativeGetSymbols = Object.getOwnPropertySymbols,
        nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined$1,
        nativeIsFinite = context.isFinite,
        nativeJoin = arrayProto.join,
        nativeKeys = overArg(Object.keys, Object),
        nativeMax = Math.max,
        nativeMin = Math.min,
        nativeNow = Date.now,
        nativeParseInt = context.parseInt,
        nativeRandom = Math.random,
        nativeReverse = arrayProto.reverse;

    /* Built-in method references that are verified to be native. */
    var DataView = getNative(context, 'DataView'),
        Map = getNative(context, 'Map'),
        Promise = getNative(context, 'Promise'),
        Set = getNative(context, 'Set'),
        WeakMap = getNative(context, 'WeakMap'),
        nativeCreate = getNative(Object, 'create');

    /** Used to store function metadata. */
    var metaMap = WeakMap && new WeakMap;

    /** Used to lookup unminified function names. */
    var realNames = {};

    /** Used to detect maps, sets, and weakmaps. */
    var dataViewCtorString = toSource(DataView),
        mapCtorString = toSource(Map),
        promiseCtorString = toSource(Promise),
        setCtorString = toSource(Set),
        weakMapCtorString = toSource(WeakMap);

    /** Used to convert symbols to primitives and strings. */
    var symbolProto = Symbol ? Symbol.prototype : undefined$1,
        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined$1,
        symbolToString = symbolProto ? symbolProto.toString : undefined$1;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chain sequences. Methods that operate on and return arrays, collections,
     * and functions can be chained together. Methods that retrieve a single value
     * or may return a primitive value will automatically end the chain sequence
     * and return the unwrapped value. Otherwise, the value must be unwrapped
     * with `_#value`.
     *
     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
     * enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion.
     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
     * the creation of intermediate arrays and can greatly reduce the number of
     * iteratee executions. Sections of a chain sequence qualify for shortcut
     * fusion if the section is applied to an array and iteratees accept only
     * one argument. The heuristic for whether a section qualifies for shortcut
     * fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
     * `zipObject`, `zipObjectDeep`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
     * `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // Returns an unwrapped value.
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // Returns a wrapped value.
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */
    function lodash(value) {
      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
        if (value instanceof LodashWrapper) {
          return value;
        }
        if (hasOwnProperty.call(value, '__wrapped__')) {
          return wrapperClone(value);
        }
      }
      return new LodashWrapper(value);
    }

    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */
    var baseCreate = (function() {
      function object() {}
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object;
        object.prototype = undefined$1;
        return result;
      };
    }());

    /**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */
    function baseLodash() {
      // No operation performed.
    }

    /**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */
    function LodashWrapper(value, chainAll) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__chain__ = !!chainAll;
      this.__index__ = 0;
      this.__values__ = undefined$1;
    }

    /**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
     * following template settings to use alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */
    lodash.templateSettings = {

      /**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'escape': reEscape,

      /**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'evaluate': reEvaluate,

      /**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'interpolate': reInterpolate,

      /**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type {string}
       */
      'variable': '',

      /**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type {Object}
       */
      'imports': {

        /**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type {Function}
         */
        '_': lodash
      }
    };

    // Ensure wrappers are instances of `baseLodash`.
    lodash.prototype = baseLodash.prototype;
    lodash.prototype.constructor = lodash;

    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
    LodashWrapper.prototype.constructor = LodashWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @constructor
     * @param {*} value The value to wrap.
     */
    function LazyWrapper(value) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__dir__ = 1;
      this.__filtered__ = false;
      this.__iteratees__ = [];
      this.__takeCount__ = MAX_ARRAY_LENGTH;
      this.__views__ = [];
    }

    /**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */
    function lazyClone() {
      var result = new LazyWrapper(this.__wrapped__);
      result.__actions__ = copyArray(this.__actions__);
      result.__dir__ = this.__dir__;
      result.__filtered__ = this.__filtered__;
      result.__iteratees__ = copyArray(this.__iteratees__);
      result.__takeCount__ = this.__takeCount__;
      result.__views__ = copyArray(this.__views__);
      return result;
    }

    /**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */
    function lazyReverse() {
      if (this.__filtered__) {
        var result = new LazyWrapper(this);
        result.__dir__ = -1;
        result.__filtered__ = true;
      } else {
        result = this.clone();
        result.__dir__ *= -1;
      }
      return result;
    }

    /**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */
    function lazyValue() {
      var array = this.__wrapped__.value(),
          dir = this.__dir__,
          isArr = isArray(array),
          isRight = dir < 0,
          arrLength = isArr ? array.length : 0,
          view = getView(0, arrLength, this.__views__),
          start = view.start,
          end = view.end,
          length = end - start,
          index = isRight ? end : (start - 1),
          iteratees = this.__iteratees__,
          iterLength = iteratees.length,
          resIndex = 0,
          takeCount = nativeMin(length, this.__takeCount__);

      if (!isArr || (!isRight && arrLength == length && takeCount == length)) {
        return baseWrapperValue(array, this.__actions__);
      }
      var result = [];

      outer:
      while (length-- && resIndex < takeCount) {
        index += dir;

        var iterIndex = -1,
            value = array[index];

        while (++iterIndex < iterLength) {
          var data = iteratees[iterIndex],
              iteratee = data.iteratee,
              type = data.type,
              computed = iteratee(value);

          if (type == LAZY_MAP_FLAG) {
            value = computed;
          } else if (!computed) {
            if (type == LAZY_FILTER_FLAG) {
              continue outer;
            } else {
              break outer;
            }
          }
        }
        result[resIndex++] = value;
      }
      return result;
    }

    // Ensure `LazyWrapper` is an instance of `baseLodash`.
    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
    LazyWrapper.prototype.constructor = LazyWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Hash(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined$1 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : undefined$1;
    }

    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? (data[key] !== undefined$1) : hasOwnProperty.call(data, key);
    }

    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = (nativeCreate && value === undefined$1) ? HASH_UNDEFINED : value;
      return this;
    }

    // Add methods to `Hash`.
    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function ListCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function listCacheDelete(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }

    /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function listCacheGet(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      return index < 0 ? undefined$1 : data[index][1];
    }

    /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }

    /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */
    function listCacheSet(key, value) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }

    // Add methods to `ListCache`.
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function MapCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        'hash': new Hash,
        'map': new (Map || ListCache),
        'string': new Hash
      };
    }

    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function mapCacheDelete(key) {
      var result = getMapData(this, key)['delete'](key);
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }

    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }

    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */
    function mapCacheSet(key, value) {
      var data = getMapData(this, key),
          size = data.size;

      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }

    // Add methods to `MapCache`.
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */
    function SetCache(values) {
      var index = -1,
          length = values == null ? 0 : values.length;

      this.__data__ = new MapCache;
      while (++index < length) {
        this.add(values[index]);
      }
    }

    /**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }

    /**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */
    function setCacheHas(value) {
      return this.__data__.has(value);
    }

    // Add methods to `SetCache`.
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }

    /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */
    function stackClear() {
      this.__data__ = new ListCache;
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function stackDelete(key) {
      var data = this.__data__,
          result = data['delete'](key);

      this.size = data.size;
      return result;
    }

    /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function stackGet(key) {
      return this.__data__.get(key);
    }

    /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function stackHas(key) {
      return this.__data__.has(key);
    }

    /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }

    // Add methods to `Stack`.
    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value),
          isArg = !isArr && isArguments(value),
          isBuff = !isArr && !isArg && isBuffer(value),
          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
          skipIndexes = isArr || isArg || isBuff || isType,
          result = skipIndexes ? baseTimes(value.length, String) : [],
          length = result.length;

      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) &&
            !(skipIndexes && (
               // Safari 9 has enumerable `arguments.length` in strict mode.
               key == 'length' ||
               // Node.js 0.10 has enumerable non-index properties on buffers.
               (isBuff && (key == 'offset' || key == 'parent')) ||
               // PhantomJS 2 has enumerable non-index properties on typed arrays.
               (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
               // Skip index properties.
               isIndex(key, length)
            ))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @returns {*} Returns the random element.
     */
    function arraySample(array) {
      var length = array.length;
      return length ? array[baseRandom(0, length - 1)] : undefined$1;
    }

    /**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function arraySampleSize(array, n) {
      return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
    }

    /**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function arrayShuffle(array) {
      return shuffleSelf(copyArray(array));
    }

    /**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignMergeValue(object, key, value) {
      if ((value !== undefined$1 && !eq(object[key], value)) ||
          (value === undefined$1 && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
          (value === undefined$1 && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }

    /**
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseAggregator(collection, setter, iteratee, accumulator) {
      baseEach(collection, function(value, key, collection) {
        setter(accumulator, value, iteratee(value), collection);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }

    /**
     * The base implementation of `_.assignIn` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }

    /**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function baseAssignValue(object, key, value) {
      if (key == '__proto__' && defineProperty) {
        defineProperty(object, key, {
          'configurable': true,
          'enumerable': true,
          'value': value,
          'writable': true
        });
      } else {
        object[key] = value;
      }
    }

    /**
     * The base implementation of `_.at` without support for individual paths.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {string[]} paths The property paths to pick.
     * @returns {Array} Returns the picked elements.
     */
    function baseAt(object, paths) {
      var index = -1,
          length = paths.length,
          result = Array(length),
          skip = object == null;

      while (++index < length) {
        result[index] = skip ? undefined$1 : get(object, paths[index]);
      }
      return result;
    }

    /**
     * The base implementation of `_.clamp` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     */
    function baseClamp(number, lower, upper) {
      if (number === number) {
        if (upper !== undefined$1) {
          number = number <= upper ? number : upper;
        }
        if (lower !== undefined$1) {
          number = number >= lower ? number : lower;
        }
      }
      return number;
    }

    /**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Deep clone
     *  2 - Flatten inherited properties
     *  4 - Clone symbols
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result,
          isDeep = bitmask & CLONE_DEEP_FLAG,
          isFlat = bitmask & CLONE_FLAT_FLAG,
          isFull = bitmask & CLONE_SYMBOLS_FLAG;

      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== undefined$1) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value),
            isFunc = tag == funcTag || tag == genTag;

        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
          result = (isFlat || isFunc) ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat
              ? copySymbolsIn(value, baseAssignIn(result, value))
              : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, isDeep);
        }
      }
      // Check for circular references and return its corresponding clone.
      stack || (stack = new Stack);
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);

      if (isSet(value)) {
        value.forEach(function(subValue) {
          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
      } else if (isMap(value)) {
        value.forEach(function(subValue, key) {
          result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
        });
      }

      var keysFunc = isFull
        ? (isFlat ? getAllKeysIn : getAllKeys)
        : (isFlat ? keysIn : keys);

      var props = isArr ? undefined$1 : keysFunc(value);
      arrayEach(props || value, function(subValue, key) {
        if (props) {
          key = subValue;
          subValue = value[key];
        }
        // Recursively populate clone (susceptible to call stack limits).
        assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });
      return result;
    }

    /**
     * The base implementation of `_.conforms` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     */
    function baseConforms(source) {
      var props = keys(source);
      return function(object) {
        return baseConformsTo(object, source, props);
      };
    }

    /**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     */
    function baseConformsTo(object, source, props) {
      var length = props.length;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (length--) {
        var key = props[length],
            predicate = source[key],
            value = object[key];

        if ((value === undefined$1 && !(key in object)) || !predicate(value)) {
          return false;
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    function baseDelay(func, wait, args) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return setTimeout(function() { func.apply(undefined$1, args); }, wait);
    }

    /**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */
    function baseDifference(array, values, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          isCommon = true,
          length = array.length,
          result = [],
          valuesLength = values.length;

      if (!length) {
        return result;
      }
      if (iteratee) {
        values = arrayMap(values, baseUnary(iteratee));
      }
      if (comparator) {
        includes = arrayIncludesWith;
        isCommon = false;
      }
      else if (values.length >= LARGE_ARRAY_SIZE) {
        includes = cacheHas;
        isCommon = false;
        values = new SetCache(values);
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee == null ? value : iteratee(value);

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var valuesIndex = valuesLength;
          while (valuesIndex--) {
            if (values[valuesIndex] === computed) {
              continue outer;
            }
          }
          result.push(value);
        }
        else if (!includes(values, computed, comparator)) {
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEach = createBaseEach(baseForOwn);

    /**
     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEachRight = createBaseEach(baseForOwnRight, true);

    /**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */
    function baseEvery(collection, predicate) {
      var result = true;
      baseEach(collection, function(value, index, collection) {
        result = !!predicate(value, index, collection);
        return result;
      });
      return result;
    }

    /**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */
    function baseExtremum(array, iteratee, comparator) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        var value = array[index],
            current = iteratee(value);

        if (current != null && (computed === undefined$1
              ? (current === current && !isSymbol(current))
              : comparator(current, computed)
            )) {
          var computed = current,
              result = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */
    function baseFill(array, value, start, end) {
      var length = array.length;

      start = toInteger(start);
      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = (end === undefined$1 || end > length) ? length : toInteger(end);
      if (end < 0) {
        end += length;
      }
      end = start > end ? 0 : toLength(end);
      while (start < end) {
        array[start++] = value;
      }
      return array;
    }

    /**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function(value, index, collection) {
        if (predicate(value, index, collection)) {
          result.push(value);
        }
      });
      return result;
    }

    /**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index = -1,
          length = array.length;

      predicate || (predicate = isFlattenable);
      result || (result = []);

      while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            // Recursively flatten arrays (susceptible to call stack limits).
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseFor = createBaseFor();

    /**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseForRight = createBaseFor(true);

    /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwnRight(object, iteratee) {
      return object && baseForRight(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */
    function baseFunctions(object, props) {
      return arrayFilter(props, function(key) {
        return isFunction(object[key]);
      });
    }

    /**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */
    function baseGet(object, path) {
      path = castPath(path, object);

      var index = 0,
          length = path.length;

      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return (index && index == length) ? object : undefined$1;
    }

    /**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }

    /**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    function baseGetTag(value) {
      if (value == null) {
        return value === undefined$1 ? undefinedTag : nullTag;
      }
      return (symToStringTag && symToStringTag in Object(value))
        ? getRawTag(value)
        : objectToString(value);
    }

    /**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */
    function baseGt(value, other) {
      return value > other;
    }

    /**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHas(object, key) {
      return object != null && hasOwnProperty.call(object, key);
    }

    /**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }

    /**
     * The base implementation of `_.inRange` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to check.
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     */
    function baseInRange(number, start, end) {
      return number >= nativeMin(start, end) && number < nativeMax(start, end);
    }

    /**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */
    function baseIntersection(arrays, iteratee, comparator) {
      var includes = comparator ? arrayIncludesWith : arrayIncludes,
          length = arrays[0].length,
          othLength = arrays.length,
          othIndex = othLength,
          caches = Array(othLength),
          maxLength = Infinity,
          result = [];

      while (othIndex--) {
        var array = arrays[othIndex];
        if (othIndex && iteratee) {
          array = arrayMap(array, baseUnary(iteratee));
        }
        maxLength = nativeMin(array.length, maxLength);
        caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
          ? new SetCache(othIndex && array)
          : undefined$1;
      }
      array = arrays[0];

      var index = -1,
          seen = caches[0];

      outer:
      while (++index < length && result.length < maxLength) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (!(seen
              ? cacheHas(seen, computed)
              : includes(result, computed, comparator)
            )) {
          othIndex = othLength;
          while (--othIndex) {
            var cache = caches[othIndex];
            if (!(cache
                  ? cacheHas(cache, computed)
                  : includes(arrays[othIndex], computed, comparator))
                ) {
              continue outer;
            }
          }
          if (seen) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.invert` and `_.invertBy` which inverts
     * `object` with values transformed by `iteratee` and set by `setter`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform values.
     * @param {Object} accumulator The initial inverted object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseInverter(object, setter, iteratee, accumulator) {
      baseForOwn(object, function(value, key, object) {
        setter(accumulator, iteratee(value), key, object);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */
    function baseInvoke(object, path, args) {
      path = castPath(path, object);
      object = parent(object, path);
      var func = object == null ? object : object[toKey(last(path))];
      return func == null ? undefined$1 : apply(func, object, args);
    }

    /**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }

    /**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */
    function baseIsArrayBuffer(value) {
      return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
    }

    /**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */
    function baseIsDate(value) {
      return isObjectLike(value) && baseGetTag(value) == dateTag;
    }

    /**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }

    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object),
          othIsArr = isArray(other),
          objTag = objIsArr ? arrayTag : getTag(object),
          othTag = othIsArr ? arrayTag : getTag(other);

      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;

      var objIsObj = objTag == objectTag,
          othIsObj = othTag == objectTag,
          isSameTag = objTag == othTag;

      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return (objIsArr || isTypedArray(object))
          ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
          : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object,
              othUnwrapped = othIsWrapped ? other.value() : other;

          stack || (stack = new Stack);
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack);
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }

    /**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }

    /**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length,
          length = index,
          noCustomizer = !customizer;

      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if ((noCustomizer && data[2])
              ? data[1] !== object[data[0]]
              : !(data[0] in object)
            ) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0],
            objValue = object[key],
            srcValue = data[1];

        if (noCustomizer && data[2]) {
          if (objValue === undefined$1 && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack;
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === undefined$1
                ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
                : result
              )) {
            return false;
          }
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }

    /**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */
    function baseIsRegExp(value) {
      return isObjectLike(value) && baseGetTag(value) == regexpTag;
    }

    /**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }

    /**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */
    function baseIsTypedArray(value) {
      return isObjectLike(value) &&
        isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }

    /**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */
    function baseIteratee(value) {
      // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
      // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
      if (typeof value == 'function') {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == 'object') {
        return isArray(value)
          ? baseMatchesProperty(value[0], value[1])
          : baseMatches(value);
      }
      return property(value);
    }

    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object),
          result = [];

      for (var key in object) {
        if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */
    function baseLt(value, other) {
      return value < other;
    }

    /**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function baseMap(collection, iteratee) {
      var index = -1,
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value, key, collection) {
        result[++index] = iteratee(value, key, collection);
      });
      return result;
    }

    /**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }

    /**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return (objValue === undefined$1 && objValue === srcValue)
          ? hasIn(object, path)
          : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }

    /**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        stack || (stack = new Stack);
        if (isObject(srcValue)) {
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        }
        else {
          var newValue = customizer
            ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
            : undefined$1;

          if (newValue === undefined$1) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }

    /**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = safeGet(object, key),
          srcValue = safeGet(source, key),
          stacked = stack.get(srcValue);

      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }
      var newValue = customizer
        ? customizer(objValue, srcValue, (key + ''), object, source, stack)
        : undefined$1;

      var isCommon = newValue === undefined$1;

      if (isCommon) {
        var isArr = isArray(srcValue),
            isBuff = !isArr && isBuffer(srcValue),
            isTyped = !isArr && !isBuff && isTypedArray(srcValue);

        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          }
          else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          }
          else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          }
          else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          }
          else {
            newValue = [];
          }
        }
        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          }
          else if (!isObject(objValue) || isFunction(objValue)) {
            newValue = initCloneObject(srcValue);
          }
        }
        else {
          isCommon = false;
        }
      }
      if (isCommon) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack['delete'](srcValue);
      }
      assignMergeValue(object, key, newValue);
    }

    /**
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     */
    function baseNth(array, n) {
      var length = array.length;
      if (!length) {
        return;
      }
      n += n < 0 ? length : 0;
      return isIndex(n, length) ? array[n] : undefined$1;
    }

    /**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */
    function baseOrderBy(collection, iteratees, orders) {
      if (iteratees.length) {
        iteratees = arrayMap(iteratees, function(iteratee) {
          if (isArray(iteratee)) {
            return function(value) {
              return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
            }
          }
          return iteratee;
        });
      } else {
        iteratees = [identity];
      }

      var index = -1;
      iteratees = arrayMap(iteratees, baseUnary(getIteratee()));

      var result = baseMap(collection, function(value, key, collection) {
        var criteria = arrayMap(iteratees, function(iteratee) {
          return iteratee(value);
        });
        return { 'criteria': criteria, 'index': ++index, 'value': value };
      });

      return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
      });
    }

    /**
     * The base implementation of `_.pick` without support for individual
     * property identifiers.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @returns {Object} Returns the new object.
     */
    function basePick(object, paths) {
      return basePickBy(object, paths, function(value, path) {
        return hasIn(object, path);
      });
    }

    /**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */
    function basePickBy(object, paths, predicate) {
      var index = -1,
          length = paths.length,
          result = {};

      while (++index < length) {
        var path = paths[index],
            value = baseGet(object, path);

        if (predicate(value, path)) {
          baseSet(result, castPath(path, object), value);
        }
      }
      return result;
    }

    /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }

    /**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     */
    function basePullAll(array, values, iteratee, comparator) {
      var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
          index = -1,
          length = values.length,
          seen = array;

      if (array === values) {
        values = copyArray(values);
      }
      if (iteratee) {
        seen = arrayMap(array, baseUnary(iteratee));
      }
      while (++index < length) {
        var fromIndex = 0,
            value = values[index],
            computed = iteratee ? iteratee(value) : value;

        while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
          if (seen !== array) {
            splice.call(seen, fromIndex, 1);
          }
          splice.call(array, fromIndex, 1);
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */
    function basePullAt(array, indexes) {
      var length = array ? indexes.length : 0,
          lastIndex = length - 1;

      while (length--) {
        var index = indexes[length];
        if (length == lastIndex || index !== previous) {
          var previous = index;
          if (isIndex(index)) {
            splice.call(array, index, 1);
          } else {
            baseUnset(array, index);
          }
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */
    function baseRandom(lower, upper) {
      return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
    }

    /**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */
    function baseRange(start, end, step, fromRight) {
      var index = -1,
          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
          result = Array(length);

      while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
      }
      return result;
    }

    /**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */
    function baseRepeat(string, n) {
      var result = '';
      if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
        return result;
      }
      // Leverage the exponentiation by squaring algorithm for a faster repeat.
      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
      do {
        if (n % 2) {
          result += string;
        }
        n = nativeFloor(n / 2);
        if (n) {
          string += string;
        }
      } while (n);

      return result;
    }

    /**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + '');
    }

    /**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */
    function baseSample(collection) {
      return arraySample(values(collection));
    }

    /**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function baseSampleSize(collection, n) {
      var array = values(collection);
      return shuffleSelf(array, baseClamp(n, 0, array.length));
    }

    /**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseSet(object, path, value, customizer) {
      if (!isObject(object)) {
        return object;
      }
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          lastIndex = length - 1,
          nested = object;

      while (nested != null && ++index < length) {
        var key = toKey(path[index]),
            newValue = value;

        if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
          return object;
        }

        if (index != lastIndex) {
          var objValue = nested[key];
          newValue = customizer ? customizer(objValue, key, nested) : undefined$1;
          if (newValue === undefined$1) {
            newValue = isObject(objValue)
              ? objValue
              : (isIndex(path[index + 1]) ? [] : {});
          }
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
      }
      return object;
    }

    /**
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var baseSetData = !metaMap ? identity : function(func, data) {
      metaMap.set(func, data);
      return func;
    };

    /**
     * The base implementation of `setToString` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, 'toString', {
        'configurable': true,
        'enumerable': false,
        'value': constant(string),
        'writable': true
      });
    };

    /**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function baseShuffle(collection) {
      return shuffleSelf(values(collection));
    }

    /**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseSlice(array, start, end) {
      var index = -1,
          length = array.length;

      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : ((end - start) >>> 0);
      start >>>= 0;

      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }

    /**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function baseSome(collection, predicate) {
      var result;

      baseEach(collection, function(value, index, collection) {
        result = predicate(value, index, collection);
        return !result;
      });
      return !!result;
    }

    /**
     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
     * performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndex(array, value, retHighest) {
      var low = 0,
          high = array == null ? low : array.length;

      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
        while (low < high) {
          var mid = (low + high) >>> 1,
              computed = array[mid];

          if (computed !== null && !isSymbol(computed) &&
              (retHighest ? (computed <= value) : (computed < value))) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return high;
      }
      return baseSortedIndexBy(array, value, identity, retHighest);
    }

    /**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndexBy(array, value, iteratee, retHighest) {
      var low = 0,
          high = array == null ? 0 : array.length;
      if (high === 0) {
        return 0;
      }

      value = iteratee(value);
      var valIsNaN = value !== value,
          valIsNull = value === null,
          valIsSymbol = isSymbol(value),
          valIsUndefined = value === undefined$1;

      while (low < high) {
        var mid = nativeFloor((low + high) / 2),
            computed = iteratee(array[mid]),
            othIsDefined = computed !== undefined$1,
            othIsNull = computed === null,
            othIsReflexive = computed === computed,
            othIsSymbol = isSymbol(computed);

        if (valIsNaN) {
          var setLow = retHighest || othIsReflexive;
        } else if (valIsUndefined) {
          setLow = othIsReflexive && (retHighest || othIsDefined);
        } else if (valIsNull) {
          setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
        } else if (valIsSymbol) {
          setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
        } else if (othIsNull || othIsSymbol) {
          setLow = false;
        } else {
          setLow = retHighest ? (computed <= value) : (computed < value);
        }
        if (setLow) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return nativeMin(high, MAX_ARRAY_INDEX);
    }

    /**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseSortedUniq(array, iteratee) {
      var index = -1,
          length = array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        if (!index || !eq(computed, seen)) {
          var seen = computed;
          result[resIndex++] = value === 0 ? 0 : value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     */
    function baseToNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      return +value;
    }

    /**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */
    function baseToString(value) {
      // Exit early for strings to avoid a performance hit in some environments.
      if (typeof value == 'string') {
        return value;
      }
      if (isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return arrayMap(value, baseToString) + '';
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseUniq(array, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          length = array.length,
          isCommon = true,
          result = [],
          seen = result;

      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      }
      else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache;
      }
      else {
        seen = iteratee ? [] : result;
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var seenIndex = seen.length;
          while (seenIndex--) {
            if (seen[seenIndex] === computed) {
              continue outer;
            }
          }
          if (iteratee) {
            seen.push(computed);
          }
          result.push(value);
        }
        else if (!includes(seen, computed, comparator)) {
          if (seen !== result) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The property path to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     */
    function baseUnset(object, path) {
      path = castPath(path, object);
      object = parent(object, path);
      return object == null || delete object[toKey(last(path))];
    }

    /**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseUpdate(object, path, updater, customizer) {
      return baseSet(object, path, updater(baseGet(object, path)), customizer);
    }

    /**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseWhile(array, predicate, isDrop, fromRight) {
      var length = array.length,
          index = fromRight ? length : -1;

      while ((fromRight ? index-- : ++index < length) &&
        predicate(array[index], index, array)) {}

      return isDrop
        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
    }

    /**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */
    function baseWrapperValue(value, actions) {
      var result = value;
      if (result instanceof LazyWrapper) {
        result = result.value();
      }
      return arrayReduce(actions, function(result, action) {
        return action.func.apply(action.thisArg, arrayPush([result], action.args));
      }, result);
    }

    /**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     */
    function baseXor(arrays, iteratee, comparator) {
      var length = arrays.length;
      if (length < 2) {
        return length ? baseUniq(arrays[0]) : [];
      }
      var index = -1,
          result = Array(length);

      while (++index < length) {
        var array = arrays[index],
            othIndex = -1;

        while (++othIndex < length) {
          if (othIndex != index) {
            result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
          }
        }
      }
      return baseUniq(baseFlatten(result, 1), iteratee, comparator);
    }

    /**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */
    function baseZipObject(props, values, assignFunc) {
      var index = -1,
          length = props.length,
          valsLength = values.length,
          result = {};

      while (++index < length) {
        var value = index < valsLength ? values[index] : undefined$1;
        assignFunc(result, props[index], value);
      }
      return result;
    }

    /**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */
    function castArrayLikeObject(value) {
      return isArrayLikeObject(value) ? value : [];
    }

    /**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */
    function castFunction(value) {
      return typeof value == 'function' ? value : identity;
    }

    /**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }

    /**
     * A `baseRest` alias which can be replaced with `identity` by module
     * replacement plugins.
     *
     * @private
     * @type {Function}
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    var castRest = baseRest;

    /**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === undefined$1 ? length : end;
      return (!start && end >= length) ? array : baseSlice(array, start, end);
    }

    /**
     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
     *
     * @private
     * @param {number|Object} id The timer id or timeout object of the timer to clear.
     */
    var clearTimeout = ctxClearTimeout || function(id) {
      return root.clearTimeout(id);
    };

    /**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length,
          result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

      buffer.copy(result);
      return result;
    }

    /**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }

    /**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }

    /**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }

    /**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }

    /**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }

    /**
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */
    function compareAscending(value, other) {
      if (value !== other) {
        var valIsDefined = value !== undefined$1,
            valIsNull = value === null,
            valIsReflexive = value === value,
            valIsSymbol = isSymbol(value);

        var othIsDefined = other !== undefined$1,
            othIsNull = other === null,
            othIsReflexive = other === other,
            othIsSymbol = isSymbol(other);

        if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
            (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
            (valIsNull && othIsDefined && othIsReflexive) ||
            (!valIsDefined && othIsReflexive) ||
            !valIsReflexive) {
          return 1;
        }
        if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
            (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
            (othIsNull && valIsDefined && valIsReflexive) ||
            (!othIsDefined && valIsReflexive) ||
            !othIsReflexive) {
          return -1;
        }
      }
      return 0;
    }

    /**
     * Used by `_.orderBy` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
     * specify an order of "desc" for descending or "asc" for ascending sort order
     * of corresponding values.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]|string[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */
    function compareMultiple(object, other, orders) {
      var index = -1,
          objCriteria = object.criteria,
          othCriteria = other.criteria,
          length = objCriteria.length,
          ordersLength = orders.length;

      while (++index < length) {
        var result = compareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
          if (index >= ordersLength) {
            return result;
          }
          var order = orders[index];
          return result * (order == 'desc' ? -1 : 1);
        }
      }
      // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
      // that causes it, under certain circumstances, to provide the same value for
      // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
      // for more details.
      //
      // This also ensures a stable sort in V8 and other engines.
      // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
      return object.index - other.index;
    }

    /**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgs(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersLength = holders.length,
          leftIndex = -1,
          leftLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(leftLength + rangeLength),
          isUncurried = !isCurried;

      while (++leftIndex < leftLength) {
        result[leftIndex] = partials[leftIndex];
      }
      while (++argsIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[holders[argsIndex]] = args[argsIndex];
        }
      }
      while (rangeLength--) {
        result[leftIndex++] = args[argsIndex++];
      }
      return result;
    }

    /**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgsRight(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersIndex = -1,
          holdersLength = holders.length,
          rightIndex = -1,
          rightLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(rangeLength + rightLength),
          isUncurried = !isCurried;

      while (++argsIndex < rangeLength) {
        result[argsIndex] = args[argsIndex];
      }
      var offset = argsIndex;
      while (++rightIndex < rightLength) {
        result[offset + rightIndex] = partials[rightIndex];
      }
      while (++holdersIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[offset + holders[holdersIndex]] = args[argsIndex++];
        }
      }
      return result;
    }

    /**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */
    function copyArray(source, array) {
      var index = -1,
          length = source.length;

      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }

    /**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});

      var index = -1,
          length = props.length;

      while (++index < length) {
        var key = props[index];

        var newValue = customizer
          ? customizer(object[key], source[key], key, object, source)
          : undefined$1;

        if (newValue === undefined$1) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }

    /**
     * Copies own symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }

    /**
     * Copies own and inherited symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }

    /**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {Function} Returns the new aggregator function.
     */
    function createAggregator(setter, initializer) {
      return function(collection, iteratee) {
        var func = isArray(collection) ? arrayAggregator : baseAggregator,
            accumulator = initializer ? initializer() : {};

        return func(collection, setter, getIteratee(iteratee, 2), accumulator);
      };
    }

    /**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index = -1,
            length = sources.length,
            customizer = length > 1 ? sources[length - 1] : undefined$1,
            guard = length > 2 ? sources[2] : undefined$1;

        customizer = (assigner.length > 3 && typeof customizer == 'function')
          ? (length--, customizer)
          : undefined$1;

        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? undefined$1 : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, index, customizer);
          }
        }
        return object;
      });
    }

    /**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length,
            index = fromRight ? length : -1,
            iterable = Object(collection);

        while ((fromRight ? index-- : ++index < length)) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }

    /**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1,
            iterable = Object(object),
            props = keysFunc(object),
            length = props.length;

        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }

    /**
     * Creates a function that wraps `func` to invoke it with the optional `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createBind(func, bitmask, thisArg) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return fn.apply(isBind ? thisArg : this, arguments);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);

        var strSymbols = hasUnicode(string)
          ? stringToArray(string)
          : undefined$1;

        var chr = strSymbols
          ? strSymbols[0]
          : string.charAt(0);

        var trailing = strSymbols
          ? castSlice(strSymbols, 1).join('')
          : string.slice(1);

        return chr[methodName]() + trailing;
      };
    }

    /**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */
    function createCompounder(callback) {
      return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
      };
    }

    /**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCtor(Ctor) {
      return function() {
        // Use a `switch` statement to work with class constructors. See
        // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
        // for more details.
        var args = arguments;
        switch (args.length) {
          case 0: return new Ctor;
          case 1: return new Ctor(args[0]);
          case 2: return new Ctor(args[0], args[1]);
          case 3: return new Ctor(args[0], args[1], args[2]);
          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        }
        var thisBinding = baseCreate(Ctor.prototype),
            result = Ctor.apply(thisBinding, args);

        // Mimic the constructor's `return` behavior.
        // See https://es5.github.io/#x13.2.2 for more details.
        return isObject(result) ? result : thisBinding;
      };
    }

    /**
     * Creates a function that wraps `func` to enable currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {number} arity The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCurry(func, bitmask, arity) {
      var Ctor = createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length,
            placeholder = getHolder(wrapper);

        while (index--) {
          args[index] = arguments[index];
        }
        var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
          ? []
          : replaceHolders(args, placeholder);

        length -= holders.length;
        if (length < arity) {
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, undefined$1,
            args, holders, undefined$1, undefined$1, arity - length);
        }
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return apply(fn, this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */
    function createFind(findIndexFunc) {
      return function(collection, predicate, fromIndex) {
        var iterable = Object(collection);
        if (!isArrayLike(collection)) {
          var iteratee = getIteratee(predicate, 3);
          collection = keys(collection);
          predicate = function(key) { return iteratee(iterable[key], key, iterable); };
        }
        var index = findIndexFunc(collection, predicate, fromIndex);
        return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined$1;
      };
    }

    /**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */
    function createFlow(fromRight) {
      return flatRest(function(funcs) {
        var length = funcs.length,
            index = length,
            prereq = LodashWrapper.prototype.thru;

        if (fromRight) {
          funcs.reverse();
        }
        while (index--) {
          var func = funcs[index];
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
            var wrapper = new LodashWrapper([], true);
          }
        }
        index = wrapper ? index : length;
        while (++index < length) {
          func = funcs[index];

          var funcName = getFuncName(func),
              data = funcName == 'wrapper' ? getData(func) : undefined$1;

          if (data && isLaziable(data[0]) &&
                data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) &&
                !data[4].length && data[9] == 1
              ) {
            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
          } else {
            wrapper = (func.length == 1 && isLaziable(func))
              ? wrapper[funcName]()
              : wrapper.thru(func);
          }
        }
        return function() {
          var args = arguments,
              value = args[0];

          if (wrapper && args.length == 1 && isArray(value)) {
            return wrapper.plant(value).value();
          }
          var index = 0,
              result = length ? funcs[index].apply(this, args) : value;

          while (++index < length) {
            result = funcs[index].call(this, result);
          }
          return result;
        };
      });
    }

    /**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
      var isAry = bitmask & WRAP_ARY_FLAG,
          isBind = bitmask & WRAP_BIND_FLAG,
          isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
          isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
          isFlip = bitmask & WRAP_FLIP_FLAG,
          Ctor = isBindKey ? undefined$1 : createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length;

        while (index--) {
          args[index] = arguments[index];
        }
        if (isCurried) {
          var placeholder = getHolder(wrapper),
              holdersCount = countHolders(args, placeholder);
        }
        if (partials) {
          args = composeArgs(args, partials, holders, isCurried);
        }
        if (partialsRight) {
          args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
        }
        length -= holdersCount;
        if (isCurried && length < arity) {
          var newHolders = replaceHolders(args, placeholder);
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, thisArg,
            args, newHolders, argPos, ary, arity - length
          );
        }
        var thisBinding = isBind ? thisArg : this,
            fn = isBindKey ? thisBinding[func] : func;

        length = args.length;
        if (argPos) {
          args = reorder(args, argPos);
        } else if (isFlip && length > 1) {
          args.reverse();
        }
        if (isAry && ary < length) {
          args.length = ary;
        }
        if (this && this !== root && this instanceof wrapper) {
          fn = Ctor || createCtor(fn);
        }
        return fn.apply(thisBinding, args);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */
    function createInverter(setter, toIteratee) {
      return function(object, iteratee) {
        return baseInverter(object, setter, toIteratee(iteratee), {});
      };
    }

    /**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */
    function createMathOperation(operator, defaultValue) {
      return function(value, other) {
        var result;
        if (value === undefined$1 && other === undefined$1) {
          return defaultValue;
        }
        if (value !== undefined$1) {
          result = value;
        }
        if (other !== undefined$1) {
          if (result === undefined$1) {
            return other;
          }
          if (typeof value == 'string' || typeof other == 'string') {
            value = baseToString(value);
            other = baseToString(other);
          } else {
            value = baseToNumber(value);
            other = baseToNumber(other);
          }
          result = operator(value, other);
        }
        return result;
      };
    }

    /**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */
    function createOver(arrayFunc) {
      return flatRest(function(iteratees) {
        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
        return baseRest(function(args) {
          var thisArg = this;
          return arrayFunc(iteratees, function(iteratee) {
            return apply(iteratee, thisArg, args);
          });
        });
      });
    }

    /**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */
    function createPadding(length, chars) {
      chars = chars === undefined$1 ? ' ' : baseToString(chars);

      var charsLength = chars.length;
      if (charsLength < 2) {
        return charsLength ? baseRepeat(chars, length) : chars;
      }
      var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
      return hasUnicode(chars)
        ? castSlice(stringToArray(result), 0, length).join('')
        : result.slice(0, length);
    }

    /**
     * Creates a function that wraps `func` to invoke it with the `this` binding
     * of `thisArg` and `partials` prepended to the arguments it receives.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to
     *  the new function.
     * @returns {Function} Returns the new wrapped function.
     */
    function createPartial(func, bitmask, thisArg, partials) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var argsIndex = -1,
            argsLength = arguments.length,
            leftIndex = -1,
            leftLength = partials.length,
            args = Array(leftLength + argsLength),
            fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

        while (++leftIndex < leftLength) {
          args[leftIndex] = partials[leftIndex];
        }
        while (argsLength--) {
          args[leftIndex++] = arguments[++argsIndex];
        }
        return apply(fn, isBind ? thisArg : this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new range function.
     */
    function createRange(fromRight) {
      return function(start, end, step) {
        if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
          end = step = undefined$1;
        }
        // Ensure the sign of `-0` is preserved.
        start = toFinite(start);
        if (end === undefined$1) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        step = step === undefined$1 ? (start < end ? 1 : -1) : toFinite(step);
        return baseRange(start, end, step, fromRight);
      };
    }

    /**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */
    function createRelationalOperation(operator) {
      return function(value, other) {
        if (!(typeof value == 'string' && typeof other == 'string')) {
          value = toNumber(value);
          other = toNumber(other);
        }
        return operator(value, other);
      };
    }

    /**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
      var isCurry = bitmask & WRAP_CURRY_FLAG,
          newHolders = isCurry ? holders : undefined$1,
          newHoldersRight = isCurry ? undefined$1 : holders,
          newPartials = isCurry ? partials : undefined$1,
          newPartialsRight = isCurry ? undefined$1 : partials;

      bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
      bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

      if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
        bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
      }
      var newData = [
        func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
        newHoldersRight, argPos, ary, arity
      ];

      var result = wrapFunc.apply(undefined$1, newData);
      if (isLaziable(func)) {
        setData(result, newData);
      }
      result.placeholder = placeholder;
      return setWrapToString(result, func, bitmask);
    }

    /**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */
    function createRound(methodName) {
      var func = Math[methodName];
      return function(number, precision) {
        number = toNumber(number);
        precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
        if (precision && nativeIsFinite(number)) {
          // Shift with exponential notation to avoid floating-point issues.
          // See [MDN](https://mdn.io/round#Examples) for more details.
          var pair = (toString(number) + 'e').split('e'),
              value = func(pair[0] + 'e' + (+pair[1] + precision));

          pair = (toString(value) + 'e').split('e');
          return +(pair[0] + 'e' + (+pair[1] - precision));
        }
        return func(number);
      };
    }

    /**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */
    var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
      return new Set(values);
    };

    /**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */
    function createToPairs(keysFunc) {
      return function(object) {
        var tag = getTag(object);
        if (tag == mapTag) {
          return mapToArray(object);
        }
        if (tag == setTag) {
          return setToPairs(object);
        }
        return baseToPairs(object, keysFunc(object));
      };
    }

    /**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *    1 - `_.bind`
     *    2 - `_.bindKey`
     *    4 - `_.curry` or `_.curryRight` of a bound function
     *    8 - `_.curry`
     *   16 - `_.curryRight`
     *   32 - `_.partial`
     *   64 - `_.partialRight`
     *  128 - `_.rearg`
     *  256 - `_.ary`
     *  512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
      var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
      if (!isBindKey && typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var length = partials ? partials.length : 0;
      if (!length) {
        bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
        partials = holders = undefined$1;
      }
      ary = ary === undefined$1 ? ary : nativeMax(toInteger(ary), 0);
      arity = arity === undefined$1 ? arity : toInteger(arity);
      length -= holders ? holders.length : 0;

      if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
        var partialsRight = partials,
            holdersRight = holders;

        partials = holders = undefined$1;
      }
      var data = isBindKey ? undefined$1 : getData(func);

      var newData = [
        func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
        argPos, ary, arity
      ];

      if (data) {
        mergeData(newData, data);
      }
      func = newData[0];
      bitmask = newData[1];
      thisArg = newData[2];
      partials = newData[3];
      holders = newData[4];
      arity = newData[9] = newData[9] === undefined$1
        ? (isBindKey ? 0 : func.length)
        : nativeMax(newData[9] - length, 0);

      if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
        bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
      }
      if (!bitmask || bitmask == WRAP_BIND_FLAG) {
        var result = createBind(func, bitmask, thisArg);
      } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
        result = createCurry(func, bitmask, arity);
      } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
        result = createPartial(func, bitmask, thisArg, partials);
      } else {
        result = createHybrid.apply(undefined$1, newData);
      }
      var setter = data ? baseSetData : setData;
      return setWrapToString(setter(result, newData), func, bitmask);
    }

    /**
     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
     * of source objects to the destination object for all destination properties
     * that resolve to `undefined`.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsAssignIn(objValue, srcValue, key, object) {
      if (objValue === undefined$1 ||
          (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        return srcValue;
      }
      return objValue;
    }

    /**
     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
     * objects into destination objects that are passed thru.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
      if (isObject(objValue) && isObject(srcValue)) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, objValue);
        baseMerge(objValue, srcValue, undefined$1, customDefaultsMerge, stack);
        stack['delete'](srcValue);
      }
      return objValue;
    }

    /**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
     */
    function customOmitClone(value) {
      return isPlainObject(value) ? undefined$1 : value;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          arrLength = array.length,
          othLength = other.length;

      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      // Check that cyclic values are equal.
      var arrStacked = stack.get(array);
      var othStacked = stack.get(other);
      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array;
      }
      var index = -1,
          result = true,
          seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined$1;

      stack.set(array, other);
      stack.set(other, array);

      // Ignore non-index properties.
      while (++index < arrLength) {
        var arrValue = array[index],
            othValue = other[index];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, arrValue, index, other, array, stack)
            : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== undefined$1) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
          if (!arraySome(other, function(othValue, othIndex) {
                if (!cacheHas(seen, othIndex) &&
                    (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
            result = false;
            break;
          }
        } else if (!(
              arrValue === othValue ||
                equalFunc(arrValue, othValue, bitmask, customizer, stack)
            )) {
          result = false;
          break;
        }
      }
      stack['delete'](array);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if ((object.byteLength != other.byteLength) ||
              (object.byteOffset != other.byteOffset)) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;

        case arrayBufferTag:
          if ((object.byteLength != other.byteLength) ||
              !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;

        case boolTag:
        case dateTag:
        case numberTag:
          // Coerce booleans to `1` or `0` and dates to milliseconds.
          // Invalid dates are coerced to `NaN`.
          return eq(+object, +other);

        case errorTag:
          return object.name == other.name && object.message == other.message;

        case regexpTag:
        case stringTag:
          // Coerce regexes to strings and treat strings, primitives and objects,
          // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
          // for more details.
          return object == (other + '');

        case mapTag:
          var convert = mapToArray;

        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);

          if (object.size != other.size && !isPartial) {
            return false;
          }
          // Assume cyclic values are equal.
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;

          // Recursively compare objects (susceptible to call stack limits).
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack['delete'](object);
          return result;

        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          objProps = getAllKeys(object),
          objLength = objProps.length,
          othProps = getAllKeys(other),
          othLength = othProps.length;

      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      // Check that cyclic values are equal.
      var objStacked = stack.get(object);
      var othStacked = stack.get(other);
      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);

      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key],
            othValue = other[key];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, objValue, key, other, object, stack)
            : customizer(objValue, othValue, key, object, other, stack);
        }
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined$1
              ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
              : compared
            )) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == 'constructor');
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor,
            othCtor = other.constructor;

        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor &&
            ('constructor' in object && 'constructor' in other) &&
            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack['delete'](object);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    function flatRest(func) {
      return setToString(overRest(func, undefined$1, flatten), func + '');
    }

    /**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }

    /**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }

    /**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */
    var getData = !metaMap ? noop : function(func) {
      return metaMap.get(func);
    };

    /**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */
    function getFuncName(func) {
      var result = (func.name + ''),
          array = realNames[result],
          length = hasOwnProperty.call(realNames, result) ? array.length : 0;

      while (length--) {
        var data = array[length],
            otherFunc = data.func;
        if (otherFunc == null || otherFunc == func) {
          return data.name;
        }
      }
      return result;
    }

    /**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
     * @returns {*} Returns the placeholder value.
     */
    function getHolder(func) {
      var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
      return object.placeholder;
    }

    /**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Function} Returns the chosen function or its result.
     */
    function getIteratee() {
      var result = lodash.iteratee || iteratee;
      result = result === iteratee ? baseIteratee : result;
      return arguments.length ? result(arguments[0], arguments[1]) : result;
    }

    /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key)
        ? data[typeof key == 'string' ? 'string' : 'hash']
        : data.map;
    }

    /**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */
    function getMatchData(object) {
      var result = keys(object),
          length = result.length;

      while (length--) {
        var key = result[length],
            value = object[key];

        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }

    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : undefined$1;
    }

    /**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];

      try {
        value[symToStringTag] = undefined$1;
        var unmasked = true;
      } catch (e) {}

      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }

    /**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };

    /**
     * Creates an array of the own and inherited enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };

    /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    var getTag = baseGetTag;

    // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
    if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
        (Map && getTag(new Map) != mapTag) ||
        (Promise && getTag(Promise.resolve()) != promiseTag) ||
        (Set && getTag(new Set) != setTag) ||
        (WeakMap && getTag(new WeakMap) != weakMapTag)) {
      getTag = function(value) {
        var result = baseGetTag(value),
            Ctor = result == objectTag ? value.constructor : undefined$1,
            ctorString = Ctor ? toSource(Ctor) : '';

        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString: return dataViewTag;
            case mapCtorString: return mapTag;
            case promiseCtorString: return promiseTag;
            case setCtorString: return setTag;
            case weakMapCtorString: return weakMapTag;
          }
        }
        return result;
      };
    }

    /**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */
    function getView(start, end, transforms) {
      var index = -1,
          length = transforms.length;

      while (++index < length) {
        var data = transforms[index],
            size = data.size;

        switch (data.type) {
          case 'drop':      start += size; break;
          case 'dropRight': end -= size; break;
          case 'take':      end = nativeMin(end, start + size); break;
          case 'takeRight': start = nativeMax(start, end - size); break;
        }
      }
      return { 'start': start, 'end': end };
    }

    /**
     * Extracts wrapper details from the `source` body comment.
     *
     * @private
     * @param {string} source The source to inspect.
     * @returns {Array} Returns the wrapper details.
     */
    function getWrapDetails(source) {
      var match = source.match(reWrapDetails);
      return match ? match[1].split(reSplitDetails) : [];
    }

    /**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */
    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          result = false;

      while (++index < length) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) &&
        (isArray(object) || isArguments(object));
    }

    /**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */
    function initCloneArray(array) {
      var length = array.length,
          result = new array.constructor(length);

      // Add properties assigned by `RegExp#exec`.
      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }

    /**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneObject(object) {
      return (typeof object.constructor == 'function' && !isPrototype(object))
        ? baseCreate(getPrototype(object))
        : {};
    }

    /**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneByTag(object, tag, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);

        case boolTag:
        case dateTag:
          return new Ctor(+object);

        case dataViewTag:
          return cloneDataView(object, isDeep);

        case float32Tag: case float64Tag:
        case int8Tag: case int16Tag: case int32Tag:
        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
          return cloneTypedArray(object, isDeep);

        case mapTag:
          return new Ctor;

        case numberTag:
        case stringTag:
          return new Ctor(object);

        case regexpTag:
          return cloneRegExp(object);

        case setTag:
          return new Ctor;

        case symbolTag:
          return cloneSymbol(object);
      }
    }

    /**
     * Inserts wrapper `details` in a comment at the top of the `source` body.
     *
     * @private
     * @param {string} source The source to modify.
     * @returns {Array} details The details to insert.
     * @returns {string} Returns the modified source.
     */
    function insertWrapDetails(source, details) {
      var length = details.length;
      if (!length) {
        return source;
      }
      var lastIndex = length - 1;
      details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
      details = details.join(length > 2 ? ', ' : ' ');
      return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
    }

    /**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) ||
        !!(spreadableSymbol && value && value[spreadableSymbol]);
    }

    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;

      return !!length &&
        (type == 'number' ||
          (type != 'symbol' && reIsUint.test(value))) &&
            (value > -1 && value % 1 == 0 && value < length);
    }

    /**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == 'number'
            ? (isArrayLike(object) && isIndex(index, object.length))
            : (type == 'string' && index in object)
          ) {
        return eq(object[index], value);
      }
      return false;
    }

    /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == 'number' || type == 'symbol' || type == 'boolean' ||
          value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
        (object != null && value in Object(object));
    }

    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */
    function isKeyable(value) {
      var type = typeof value;
      return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
        ? (value !== '__proto__')
        : (value === null);
    }

    /**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
     *  else `false`.
     */
    function isLaziable(func) {
      var funcName = getFuncName(func),
          other = lodash[funcName];

      if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
        return false;
      }
      if (func === other) {
        return true;
      }
      var data = getData(other);
      return !!data && func === data[0];
    }

    /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */
    function isMasked(func) {
      return !!maskSrcKey && (maskSrcKey in func);
    }

    /**
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */
    var isMaskable = coreJsData ? isFunction : stubFalse;

    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */
    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

      return value === proto;
    }

    /**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }

    /**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue &&
          (srcValue !== undefined$1 || (key in Object(object)));
      };
    }

    /**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });

      var cache = result.cache;
      return result;
    }

    /**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */
    function mergeData(data, source) {
      var bitmask = data[1],
          srcBitmask = source[1],
          newBitmask = bitmask | srcBitmask,
          isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

      var isCombo =
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
        ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

      // Exit early if metadata can't be merged.
      if (!(isCommon || isCombo)) {
        return data;
      }
      // Use source `thisArg` if available.
      if (srcBitmask & WRAP_BIND_FLAG) {
        data[2] = source[2];
        // Set when currying a bound function.
        newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
      }
      // Compose partial arguments.
      var value = source[3];
      if (value) {
        var partials = data[3];
        data[3] = partials ? composeArgs(partials, value, source[4]) : value;
        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
      }
      // Compose partial right arguments.
      value = source[5];
      if (value) {
        partials = data[5];
        data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
      }
      // Use source `argPos` if available.
      value = source[7];
      if (value) {
        data[7] = value;
      }
      // Use source `ary` if it's smaller.
      if (srcBitmask & WRAP_ARY_FLAG) {
        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
      }
      // Use source `arity` if one is not provided.
      if (data[9] == null) {
        data[9] = source[9];
      }
      // Use source `func` and merge bitmasks.
      data[0] = source[0];
      data[1] = newBitmask;

      return data;
    }

    /**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }

    /**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */
    function overRest(func, start, transform) {
      start = nativeMax(start === undefined$1 ? (func.length - 1) : start, 0);
      return function() {
        var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            array = Array(length);

        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }

    /**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */
    function parent(object, path) {
      return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
    }

    /**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */
    function reorder(array, indexes) {
      var arrLength = array.length,
          length = nativeMin(indexes.length, arrLength),
          oldArray = copyArray(array);

      while (length--) {
        var index = indexes[length];
        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined$1;
      }
      return array;
    }

    /**
     * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */
    function safeGet(object, key) {
      if (key === 'constructor' && typeof object[key] === 'function') {
        return;
      }

      if (key == '__proto__') {
        return;
      }

      return object[key];
    }

    /**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity
     * function to avoid garbage collection pauses in V8. See
     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var setData = shortOut(baseSetData);

    /**
     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    var setTimeout = ctxSetTimeout || function(func, wait) {
      return root.setTimeout(func, wait);
    };

    /**
     * Sets the `toString` method of `func` to return `string`.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var setToString = shortOut(baseSetToString);

    /**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */
    function setWrapToString(wrapper, reference, bitmask) {
      var source = (reference + '');
      return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
    }

    /**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */
    function shortOut(func) {
      var count = 0,
          lastCalled = 0;

      return function() {
        var stamp = nativeNow(),
            remaining = HOT_SPAN - (stamp - lastCalled);

        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(undefined$1, arguments);
      };
    }

    /**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `array`.
     * @returns {Array} Returns `array`.
     */
    function shuffleSelf(array, size) {
      var index = -1,
          length = array.length,
          lastIndex = length - 1;

      size = size === undefined$1 ? length : size;
      while (++index < size) {
        var rand = baseRandom(index, lastIndex),
            value = array[rand];

        array[rand] = array[index];
        array[index] = value;
      }
      array.length = size;
      return array;
    }

    /**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46 /* . */) {
        result.push('');
      }
      string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
      });
      return result;
    });

    /**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */
    function toKey(value) {
      if (typeof value == 'string' || isSymbol(value)) {
        return value;
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {}
        try {
          return (func + '');
        } catch (e) {}
      }
      return '';
    }

    /**
     * Updates wrapper `details` based on `bitmask` flags.
     *
     * @private
     * @returns {Array} details The details to modify.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Array} Returns `details`.
     */
    function updateWrapDetails(details, bitmask) {
      arrayEach(wrapFlags, function(pair) {
        var value = '_.' + pair[0];
        if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
          details.push(value);
        }
      });
      return details.sort();
    }

    /**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */
    function wrapperClone(wrapper) {
      if (wrapper instanceof LazyWrapper) {
        return wrapper.clone();
      }
      var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
      result.__actions__ = copyArray(wrapper.__actions__);
      result.__index__  = wrapper.__index__;
      result.__values__ = wrapper.__values__;
      return result;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */
    function chunk(array, size, guard) {
      if ((guard ? isIterateeCall(array, size, guard) : size === undefined$1)) {
        size = 1;
      } else {
        size = nativeMax(toInteger(size), 0);
      }
      var length = array == null ? 0 : array.length;
      if (!length || size < 1) {
        return [];
      }
      var index = 0,
          resIndex = 0,
          result = Array(nativeCeil(length / size));

      while (index < length) {
        result[resIndex++] = baseSlice(array, index, (index += size));
      }
      return result;
    }

    /**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */
    function compact(array) {
      var index = -1,
          length = array == null ? 0 : array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index];
        if (value) {
          result[resIndex++] = value;
        }
      }
      return result;
    }

    /**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */
    function concat() {
      var length = arguments.length;
      if (!length) {
        return [];
      }
      var args = Array(length - 1),
          array = arguments[0],
          index = length;

      while (index--) {
        args[index - 1] = arguments[index];
      }
      return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
    }

    /**
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.without, _.xor
     * @example
     *
     * _.difference([2, 1], [2, 3]);
     * // => [1]
     */
    var difference = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `iteratee` which
     * is invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var differenceBy = baseRest(function(array, values) {
      var iteratee = last(values);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined$1;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `comparator`
     * which is invoked to compare elements of `array` to `values`. The order and
     * references of result values are determined by the first array. The comparator
     * is invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     *
     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }]
     */
    var differenceWith = baseRest(function(array, values) {
      var comparator = last(values);
      if (isArrayLikeObject(comparator)) {
        comparator = undefined$1;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined$1, comparator)
        : [];
    });

    /**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function drop(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined$1) ? 1 : toInteger(n);
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function dropRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined$1) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true, true)
        : [];
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true)
        : [];
    }

    /**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 10], '*', 1, 3);
     * // => [4, '*', '*', 10]
     */
    function fill(array, value, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
        start = 0;
        end = length;
      }
      return baseFill(array, value, start, end);
    }

    /**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.findIndex(users, 'active');
     * // => 2
     */
    function findIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index);
    }

    /**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastIndex(users, 'active');
     * // => 0
     */
    function findLastIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length - 1;
      if (fromIndex !== undefined$1) {
        index = toInteger(fromIndex);
        index = fromIndex < 0
          ? nativeMax(length + index, 0)
          : nativeMin(index, length - 1);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index, true);
    }

    /**
     * Flattens `array` a single level deep.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, [3, [4]], 5]]);
     * // => [1, 2, [3, [4]], 5]
     */
    function flatten(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, 1) : [];
    }

    /**
     * Recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, [3, [4]], 5]]);
     * // => [1, 2, 3, 4, 5]
     */
    function flattenDeep(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, INFINITY) : [];
    }

    /**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenDepth(array, 2);
     * // => [1, 2, 3, [4], 5]
     */
    function flattenDepth(array, depth) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      depth = depth === undefined$1 ? 1 : toInteger(depth);
      return baseFlatten(array, depth);
    }

    /**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1], ['b', 2]]);
     * // => { 'a': 1, 'b': 2 }
     */
    function fromPairs(pairs) {
      var index = -1,
          length = pairs == null ? 0 : pairs.length,
          result = {};

      while (++index < length) {
        var pair = pairs[index];
        result[pair[0]] = pair[1];
      }
      return result;
    }

    /**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */
    function head(array) {
      return (array && array.length) ? array[0] : undefined$1;
    }

    /**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */
    function indexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseIndexOf(array, value, index);
    }

    /**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */
    function initial(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 0, -1) : [];
    }

    /**
     * Creates an array of unique values that are included in all given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersection([2, 1], [2, 3]);
     * // => [2]
     */
    var intersection = baseRest(function(arrays) {
      var mapped = arrayMap(arrays, castArrayLikeObject);
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped)
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `iteratee`
     * which is invoked for each element of each `arrays` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [2.1]
     *
     * // The `_.property` iteratee shorthand.
     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }]
     */
    var intersectionBy = baseRest(function(arrays) {
      var iteratee = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      if (iteratee === last(mapped)) {
        iteratee = undefined$1;
      } else {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `comparator`
     * which is invoked to compare elements of `arrays`. The order and references
     * of result values are determined by the first array. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.intersectionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }]
     */
    var intersectionWith = baseRest(function(arrays) {
      var comparator = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      comparator = typeof comparator == 'function' ? comparator : undefined$1;
      if (comparator) {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, undefined$1, comparator)
        : [];
    });

    /**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     */
    function join(array, separator) {
      return array == null ? '' : nativeJoin.call(array, separator);
    }

    /**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */
    function last(array) {
      var length = array == null ? 0 : array.length;
      return length ? array[length - 1] : undefined$1;
    }

    /**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     */
    function lastIndexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length;
      if (fromIndex !== undefined$1) {
        index = toInteger(fromIndex);
        index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
      }
      return value === value
        ? strictLastIndexOf(array, value, index)
        : baseFindIndex(array, baseIsNaN, index, true);
    }

    /**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
     *
     * _.nth(array, -2);
     * // => 'c';
     */
    function nth(array, n) {
      return (array && array.length) ? baseNth(array, toInteger(n)) : undefined$1;
    }

    /**
     * Removes all given values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
     * to remove elements from an array by predicate.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pull(array, 'a', 'c');
     * console.log(array);
     * // => ['b', 'b']
     */
    var pull = baseRest(pullAll);

    /**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pullAll(array, ['a', 'c']);
     * console.log(array);
     * // => ['b', 'b']
     */
    function pullAll(array, values) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values)
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    function pullAllBy(array, values, iteratee) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, getIteratee(iteratee, 2))
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    function pullAllWith(array, values, comparator) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, undefined$1, comparator)
        : array;
    }

    /**
     * Removes elements from `array` corresponding to `indexes` and returns an
     * array of removed elements.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     * var pulled = _.pullAt(array, [1, 3]);
     *
     * console.log(array);
     * // => ['a', 'c']
     *
     * console.log(pulled);
     * // => ['b', 'd']
     */
    var pullAt = flatRest(function(array, indexes) {
      var length = array == null ? 0 : array.length,
          result = baseAt(array, indexes);

      basePullAt(array, arrayMap(indexes, function(index) {
        return isIndex(index, length) ? +index : index;
      }).sort(compareAscending));

      return result;
    });

    /**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is invoked
     * with three arguments: (value, index, array).
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
     * to pull elements from an array by value.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */
    function remove(array, predicate) {
      var result = [];
      if (!(array && array.length)) {
        return result;
      }
      var index = -1,
          indexes = [],
          length = array.length;

      predicate = getIteratee(predicate, 3);
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result.push(value);
          indexes.push(index);
        }
      }
      basePullAt(array, indexes);
      return result;
    }

    /**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function reverse(array) {
      return array == null ? array : nativeReverse.call(array);
    }

    /**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function slice(array, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
        start = 0;
        end = length;
      }
      else {
        start = start == null ? 0 : toInteger(start);
        end = end === undefined$1 ? length : toInteger(end);
      }
      return baseSlice(array, start, end);
    }

    /**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */
    function sortedIndex(array, value) {
      return baseSortedIndex(array, value);
    }

    /**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
     * // => 0
     */
    function sortedIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
    }

    /**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
     * // => 1
     */
    function sortedIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value);
        if (index < length && eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
     * // => 4
     */
    function sortedLastIndex(array, value) {
      return baseSortedIndex(array, value, true);
    }

    /**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
     * // => 1
     */
    function sortedLastIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
    }

    /**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
     * // => 3
     */
    function sortedLastIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value, true) - 1;
        if (eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */
    function sortedUniq(array) {
      return (array && array.length)
        ? baseSortedUniq(array)
        : [];
    }

    /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */
    function sortedUniqBy(array, iteratee) {
      return (array && array.length)
        ? baseSortedUniq(array, getIteratee(iteratee, 2))
        : [];
    }

    /**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.tail([1, 2, 3]);
     * // => [2, 3]
     */
    function tail(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 1, length) : [];
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */
    function take(array, n, guard) {
      if (!(array && array.length)) {
        return [];
      }
      n = (guard || n === undefined$1) ? 1 : toInteger(n);
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */
    function takeRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined$1) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeRightWhile(users, 'active');
     * // => []
     */
    function takeRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), false, true)
        : [];
    }

    /**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */
    function takeWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3))
        : [];
    }

    /**
     * Creates an array of unique values, in order, from all given arrays using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([2], [1, 2]);
     * // => [2, 1]
     */
    var union = baseRest(function(arrays) {
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
    });

    /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which uniqueness is computed. Result values are chosen from the first
     * array in which the value occurs. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    var unionBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined$1;
      }
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.union` except that it accepts `comparator` which
     * is invoked to compare elements of `arrays`. Result values are chosen from
     * the first array in which the value occurs. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.unionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var unionWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined$1;
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined$1, comparator);
    });

    /**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the order they occur
     * in the array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     */
    function uniq(array) {
      return (array && array.length) ? baseUniq(array) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The order of result values is determined by the
     * order they occur in the array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    function uniqBy(array, iteratee) {
      return (array && array.length) ? baseUniq(array, getIteratee(iteratee, 2)) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */
    function uniqWith(array, comparator) {
      comparator = typeof comparator == 'function' ? comparator : undefined$1;
      return (array && array.length) ? baseUniq(array, undefined$1, comparator) : [];
    }

    /**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @since 1.2.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     *
     * _.unzip(zipped);
     * // => [['a', 'b'], [1, 2], [true, false]]
     */
    function unzip(array) {
      if (!(array && array.length)) {
        return [];
      }
      var length = 0;
      array = arrayFilter(array, function(group) {
        if (isArrayLikeObject(group)) {
          length = nativeMax(group.length, length);
          return true;
        }
      });
      return baseTimes(length, function(index) {
        return arrayMap(array, baseProperty(index));
      });
    }

    /**
     * This method is like `_.unzip` except that it accepts `iteratee` to specify
     * how regrouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  regrouped values.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */
    function unzipWith(array, iteratee) {
      if (!(array && array.length)) {
        return [];
      }
      var result = unzip(array);
      if (iteratee == null) {
        return result;
      }
      return arrayMap(result, function(group) {
        return apply(iteratee, undefined$1, group);
      });
    }

    /**
     * Creates an array excluding all given values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.pull`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.xor
     * @example
     *
     * _.without([2, 1, 2, 3], 1, 2);
     * // => [3]
     */
    var without = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, values)
        : [];
    });

    /**
     * Creates an array of unique values that is the
     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the given arrays. The order of result values is determined by the order
     * they occur in the arrays.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.without
     * @example
     *
     * _.xor([2, 1], [2, 3]);
     * // => [1, 3]
     */
    var xor = baseRest(function(arrays) {
      return baseXor(arrayFilter(arrays, isArrayLikeObject));
    });

    /**
     * This method is like `_.xor` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which by which they're compared. The order of result values is determined
     * by the order they occur in the arrays. The iteratee is invoked with one
     * argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2, 3.4]
     *
     * // The `_.property` iteratee shorthand.
     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var xorBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined$1;
      }
      return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.xor` except that it accepts `comparator` which is
     * invoked to compare elements of `arrays`. The order of result values is
     * determined by the order they occur in the arrays. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.xorWith(objects, others, _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var xorWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined$1;
      return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined$1, comparator);
    });

    /**
     * Creates an array of grouped elements, the first of which contains the
     * first elements of the given arrays, the second of which contains the
     * second elements of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     */
    var zip = baseRest(unzip);

    /**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */
    function zipObject(props, values) {
      return baseZipObject(props || [], values || [], assignValue);
    }

    /**
     * This method is like `_.zipObject` except that it supports property paths.
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
     */
    function zipObjectDeep(props, values) {
      return baseZipObject(props || [], values || [], baseSet);
    }

    /**
     * This method is like `_.zip` except that it accepts `iteratee` to specify
     * how grouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  grouped values.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
     *   return a + b + c;
     * });
     * // => [111, 222]
     */
    var zipWith = baseRest(function(arrays) {
      var length = arrays.length,
          iteratee = length > 1 ? arrays[length - 1] : undefined$1;

      iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined$1;
      return unzipWith(arrays, iteratee);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
     * chain sequences enabled. The result of such sequences must be unwrapped
     * with `_#value`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
     *     return o.user + ' is ' + o.age;
     *   })
     *   .head()
     *   .value();
     * // => 'pebbles is 1'
     */
    function chain(value) {
      var result = lodash(value);
      result.__chain__ = true;
      return result;
    }

    /**
     * This method invokes `interceptor` and returns `value`. The interceptor
     * is invoked with one argument; (value). The purpose of this method is to
     * "tap into" a method chain sequence in order to modify intermediate results.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    // Mutate input array.
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */
    function tap(value, interceptor) {
      interceptor(value);
      return value;
    }

    /**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     * The purpose of this method is to "pass thru" values replacing intermediate
     * results in a method chain sequence.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */
    function thru(value, interceptor) {
      return interceptor(value);
    }

    /**
     * This method is the wrapper version of `_.at`.
     *
     * @name at
     * @memberOf _
     * @since 1.0.0
     * @category Seq
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _(object).at(['a[0].b.c', 'a[1]']).value();
     * // => [3, 4]
     */
    var wrapperAt = flatRest(function(paths) {
      var length = paths.length,
          start = length ? paths[0] : 0,
          value = this.__wrapped__,
          interceptor = function(object) { return baseAt(object, paths); };

      if (length > 1 || this.__actions__.length ||
          !(value instanceof LazyWrapper) || !isIndex(start)) {
        return this.thru(interceptor);
      }
      value = value.slice(start, +start + (length ? 1 : 0));
      value.__actions__.push({
        'func': thru,
        'args': [interceptor],
        'thisArg': undefined$1
      });
      return new LodashWrapper(value, this.__chain__).thru(function(array) {
        if (length && !array.length) {
          array.push(undefined$1);
        }
        return array;
      });
    });

    /**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */
    function wrapperChain() {
      return chain(this);
    }

    /**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */
    function wrapperCommit() {
      return new LodashWrapper(this.value(), this.__chain__);
    }

    /**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
     * // => { 'done': true, 'value': undefined }
     */
    function wrapperNext() {
      if (this.__values__ === undefined$1) {
        this.__values__ = toArray(this.value());
      }
      var done = this.__index__ >= this.__values__.length,
          value = done ? undefined$1 : this.__values__[this.__index__++];

      return { 'done': done, 'value': value };
    }

    /**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
     * Array.from(wrapped);
     * // => [1, 2]
     */
    function wrapperToIterator() {
      return this;
    }

    /**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */
    function wrapperPlant(value) {
      var result,
          parent = this;

      while (parent instanceof baseLodash) {
        var clone = wrapperClone(parent);
        clone.__index__ = 0;
        clone.__values__ = undefined$1;
        if (result) {
          previous.__wrapped__ = clone;
        } else {
          result = clone;
        }
        var previous = clone;
        parent = parent.__wrapped__;
      }
      previous.__wrapped__ = value;
      return result;
    }

    /**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function wrapperReverse() {
      var value = this.__wrapped__;
      if (value instanceof LazyWrapper) {
        var wrapped = value;
        if (this.__actions__.length) {
          wrapped = new LazyWrapper(this);
        }
        wrapped = wrapped.reverse();
        wrapped.__actions__.push({
          'func': thru,
          'args': [reverse],
          'thisArg': undefined$1
        });
        return new LodashWrapper(wrapped, this.__chain__);
      }
      return this.thru(reverse);
    }

    /**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */
    function wrapperValue() {
      return baseWrapperValue(this.__wrapped__, this.__actions__);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the number of times the key was returned by `iteratee`. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': 1, '6': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */
    var countBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        ++result[key];
      } else {
        baseAssignValue(result, key, 1);
      }
    });

    /**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */
    function every(collection, predicate, guard) {
      var func = isArray(collection) ? arrayEvery : baseEvery;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined$1;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     *
     * // Combining several predicates using `_.overEvery` or `_.overSome`.
     * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
     * // => objects for ['fred', 'barney']
     */
    function filter(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.find(users, function(o) { return o.age < 40; });
     * // => object for 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.find(users, { 'age': 1, 'active': true });
     * // => object for 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.find(users, ['active', false]);
     * // => object for 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.find(users, 'active');
     * // => object for 'barney'
     */
    var find = createFind(findIndex);

    /**
     * This method is like `_.find` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=collection.length-1] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
     * // => 3
     */
    var findLast = createFind(findLastIndex);

    /**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMap([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMap(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), 1);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeep([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMapDeep(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), INFINITY);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2], duplicate, 2);
     * // => [[1, 1], [2, 2]]
     */
    function flatMapDepth(collection, iteratee, depth) {
      depth = depth === undefined$1 ? 1 : toInteger(depth);
      return baseFlatten(map(collection, iteratee), depth);
    }

    /**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forEach(collection, iteratee) {
      var func = isArray(collection) ? arrayEach : baseEach;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @alias eachRight
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEach
     * @example
     *
     * _.forEachRight([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `2` then `1`.
     */
    function forEachRight(collection, iteratee) {
      var func = isArray(collection) ? arrayEachRight : baseEachRight;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The order of grouped values
     * is determined by the order they occur in `collection`. The corresponding
     * value of each key is an array of elements responsible for generating the
     * key. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': [4.2], '6': [6.1, 6.3] }
     *
     * // The `_.property` iteratee shorthand.
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */
    var groupBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        result[key].push(value);
      } else {
        baseAssignValue(result, key, [value]);
      }
    });

    /**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */
    function includes(collection, value, fromIndex, guard) {
      collection = isArrayLike(collection) ? collection : values(collection);
      fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

      var length = collection.length;
      if (fromIndex < 0) {
        fromIndex = nativeMax(length + fromIndex, 0);
      }
      return isString(collection)
        ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
        : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
    }

    /**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `path` is a function, it's invoked
     * for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke each method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invokeMap([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */
    var invokeMap = baseRest(function(collection, path, args) {
      var index = -1,
          isFunc = typeof path == 'function',
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value) {
        result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
      });
      return result;
    });

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the last element responsible for generating the key. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var array = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.keyBy(array, function(o) {
     *   return String.fromCharCode(o.code);
     * });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.keyBy(array, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     */
    var keyBy = createAggregator(function(result, value, key) {
      baseAssignValue(result, key, value);
    });

    /**
     * Creates an array of values by running each element in `collection` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */
    function map(collection, iteratee) {
      var func = isArray(collection) ? arrayMap : baseMap;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // Sort by `user` in ascending order and by `age` in descending order.
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     */
    function orderBy(collection, iteratees, orders, guard) {
      if (collection == null) {
        return [];
      }
      if (!isArray(iteratees)) {
        iteratees = iteratees == null ? [] : [iteratees];
      }
      orders = guard ? undefined$1 : orders;
      if (!isArray(orders)) {
        orders = orders == null ? [] : [orders];
      }
      return baseOrderBy(collection, iteratees, orders);
    }

    /**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, the second of which
     * contains elements `predicate` returns falsey for. The predicate is
     * invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * _.partition(users, function(o) { return o.active; });
     * // => objects for [['fred'], ['barney', 'pebbles']]
     *
     * // The `_.matches` iteratee shorthand.
     * _.partition(users, { 'age': 1, 'active': false });
     * // => objects for [['pebbles'], ['barney', 'fred']]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.partition(users, ['active', false]);
     * // => objects for [['barney', 'pebbles'], ['fred']]
     *
     * // The `_.property` iteratee shorthand.
     * _.partition(users, 'active');
     * // => objects for [['fred'], ['barney', 'pebbles']]
     */
    var partition = createAggregator(function(result, value, key) {
      result[key ? 0 : 1].push(value);
    }, function() { return [[], []]; });

    /**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` thru `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not given, the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduceRight
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
     *   return sum + n;
     * }, 0);
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     *   return result;
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */
    function reduce(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduce : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
    }

    /**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduce
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */
    function reduceRight(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduceRight : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
    }

    /**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.filter
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * _.reject(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.reject(users, { 'age': 40, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.reject(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.reject(users, 'active');
     * // => objects for ['barney']
     */
    function reject(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, negate(getIteratee(predicate, 3)));
    }

    /**
     * Gets a random element from `collection`.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     */
    function sample(collection) {
      var func = isArray(collection) ? arraySample : baseSample;
      return func(collection);
    }

    /**
     * Gets `n` random elements at unique keys from `collection` up to the
     * size of `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @param {number} [n=1] The number of elements to sample.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the random elements.
     * @example
     *
     * _.sampleSize([1, 2, 3], 2);
     * // => [3, 1]
     *
     * _.sampleSize([1, 2, 3], 4);
     * // => [2, 3, 1]
     */
    function sampleSize(collection, n, guard) {
      if ((guard ? isIterateeCall(collection, n, guard) : n === undefined$1)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      var func = isArray(collection) ? arraySampleSize : baseSampleSize;
      return func(collection, n);
    }

    /**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */
    function shuffle(collection) {
      var func = isArray(collection) ? arrayShuffle : baseShuffle;
      return func(collection);
    }

    /**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */
    function size(collection) {
      if (collection == null) {
        return 0;
      }
      if (isArrayLike(collection)) {
        return isString(collection) ? stringSize(collection) : collection.length;
      }
      var tag = getTag(collection);
      if (tag == mapTag || tag == setTag) {
        return collection.size;
      }
      return baseKeys(collection).length;
    }

    /**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.some(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.some(users, 'active');
     * // => true
     */
    function some(collection, predicate, guard) {
      var func = isArray(collection) ? arraySome : baseSome;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined$1;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection thru each iteratee. This method
     * performs a stable sort, that is, it preserves the original sort order of
     * equal elements. The iteratees are invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 30 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.sortBy(users, [function(o) { return o.user; }]);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
     *
     * _.sortBy(users, ['user', 'age']);
     * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
     */
    var sortBy = baseRest(function(collection, iteratees) {
      if (collection == null) {
        return [];
      }
      var length = iteratees.length;
      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
        iteratees = [];
      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
        iteratees = [iteratees[0]];
      }
      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */
    var now = ctxNow || function() {
      return root.Date.now();
    };

    /*------------------------------------------------------------------------*/

    /**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it's called `n` or more times.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => Logs 'done saving!' after the two async saves have completed.
     */
    function after(n, func) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n < 1) {
          return func.apply(this, arguments);
        }
      };
    }

    /**
     * Creates a function that invokes `func`, with up to `n` arguments,
     * ignoring any additional arguments.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */
    function ary(func, n, guard) {
      n = guard ? undefined$1 : n;
      n = (func && n == null) ? func.length : n;
      return createWrap(func, WRAP_ARY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, n);
    }

    /**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => Allows adding up to 4 contacts to the list.
     */
    function before(n, func) {
      var result;
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n > 0) {
          result = func.apply(this, arguments);
        }
        if (n <= 1) {
          func = undefined$1;
        }
        return result;
      };
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and `partials` prepended to the arguments it receives.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * function greet(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * }
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */
    var bind = baseRest(function(func, thisArg, partials) {
      var bitmask = WRAP_BIND_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bind));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(func, bitmask, thisArg, partials, holders);
    });

    /**
     * Creates a function that invokes the method at `object[key]` with `partials`
     * prepended to the arguments it receives.
     *
     * This method differs from `_.bind` by allowing bound functions to reference
     * methods that may be redefined or don't yet exist. See
     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
     * for more details.
     *
     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Function
     * @param {Object} object The object to invoke the method on.
     * @param {string} key The key of the method.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
     *
     * var bound = _.bindKey(object, 'greet', 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
     *
     * bound('!');
     * // => 'hiya fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bindKey(object, 'greet', _, '!');
     * bound('hi');
     * // => 'hiya fred!'
     */
    var bindKey = baseRest(function(object, key, partials) {
      var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bindKey));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(key, bitmask, object, partials, holders);
    });

    /**
     * Creates a function that accepts arguments of `func` and either invokes
     * `func` returning its result, if at least `arity` number of arguments have
     * been provided, or returns a function that accepts the remaining `func`
     * arguments, and so on. The arity of `func` may be specified if `func.length`
     * is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */
    function curry(func, arity, guard) {
      arity = guard ? undefined$1 : arity;
      var result = createWrap(func, WRAP_CURRY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
      result.placeholder = curry.placeholder;
      return result;
    }

    /**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */
    function curryRight(func, arity, guard) {
      arity = guard ? undefined$1 : arity;
      var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
      result.placeholder = curryRight.placeholder;
      return result;
    }

    /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */
    function debounce(func, wait, options) {
      var lastArgs,
          lastThis,
          maxWait,
          result,
          timerId,
          lastCallTime,
          lastInvokeTime = 0,
          leading = false,
          maxing = false,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }

      function invokeFunc(time) {
        var args = lastArgs,
            thisArg = lastThis;

        lastArgs = lastThis = undefined$1;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }

      function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
      }

      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            timeWaiting = wait - timeSinceLastCall;

        return maxing
          ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
          : timeWaiting;
      }

      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime;

        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return (lastCallTime === undefined$1 || (timeSinceLastCall >= wait) ||
          (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
      }

      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
      }

      function trailingEdge(time) {
        timerId = undefined$1;

        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = undefined$1;
        return result;
      }

      function cancel() {
        if (timerId !== undefined$1) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined$1;
      }

      function flush() {
        return timerId === undefined$1 ? result : trailingEdge(now());
      }

      function debounced() {
        var time = now(),
            isInvoking = shouldInvoke(time);

        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
          if (timerId === undefined$1) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            // Handle invocations in a tight loop.
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === undefined$1) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }

    /**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // => Logs 'deferred' after one millisecond.
     */
    var defer = baseRest(function(func, args) {
      return baseDelay(func, 1, args);
    });

    /**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
     * // => Logs 'later' after one second.
     */
    var delay = baseRest(function(func, wait, args) {
      return baseDelay(func, toNumber(wait) || 0, args);
    });

    /**
     * Creates a function that invokes `func` with arguments reversed.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to flip arguments for.
     * @returns {Function} Returns the new flipped function.
     * @example
     *
     * var flipped = _.flip(function() {
     *   return _.toArray(arguments);
     * });
     *
     * flipped('a', 'b', 'c', 'd');
     * // => ['d', 'c', 'b', 'a']
     */
    function flip(func) {
      return createWrap(func, WRAP_FLIP_FLAG);
    }

    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */
    function memoize(func, resolver) {
      if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments,
            key = resolver ? resolver.apply(this, args) : args[0],
            cache = memoized.cache;

        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache);
      return memoized;
    }

    // Expose `MapCache`.
    memoize.Cache = MapCache;

    /**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new negated function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */
    function negate(predicate) {
      if (typeof predicate != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return function() {
        var args = arguments;
        switch (args.length) {
          case 0: return !predicate.call(this);
          case 1: return !predicate.call(this, args[0]);
          case 2: return !predicate.call(this, args[0], args[1]);
          case 3: return !predicate.call(this, args[0], args[1], args[2]);
        }
        return !predicate.apply(this, args);
      };
    }

    /**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // => `createApplication` is invoked once
     */
    function once(func) {
      return before(2, func);
    }

    /**
     * Creates a function that invokes `func` with its arguments transformed.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms=[_.identity]]
     *  The argument transforms.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var func = _.overArgs(function(x, y) {
     *   return [x, y];
     * }, [square, doubled]);
     *
     * func(9, 3);
     * // => [81, 6]
     *
     * func(10, 5);
     * // => [100, 10]
     */
    var overArgs = castRest(function(func, transforms) {
      transforms = (transforms.length == 1 && isArray(transforms[0]))
        ? arrayMap(transforms[0], baseUnary(getIteratee()))
        : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));

      var funcsLength = transforms.length;
      return baseRest(function(args) {
        var index = -1,
            length = nativeMin(args.length, funcsLength);

        while (++index < length) {
          args[index] = transforms[index].call(this, args[index]);
        }
        return apply(func, this, args);
      });
    });

    /**
     * Creates a function that invokes `func` with `partials` prepended to the
     * arguments it receives. This method is like `_.bind` except it does **not**
     * alter the `this` binding.
     *
     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 0.2.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var sayHelloTo = _.partial(greet, 'hello');
     * sayHelloTo('fred');
     * // => 'hello fred'
     *
     * // Partially applied with placeholders.
     * var greetFred = _.partial(greet, _, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     */
    var partial = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partial));
      return createWrap(func, WRAP_PARTIAL_FLAG, undefined$1, partials, holders);
    });

    /**
     * This method is like `_.partial` except that partially applied arguments
     * are appended to the arguments it receives.
     *
     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var greetFred = _.partialRight(greet, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     *
     * // Partially applied with placeholders.
     * var sayHelloTo = _.partialRight(greet, 'hello', _);
     * sayHelloTo('fred');
     * // => 'hello fred'
     */
    var partialRight = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partialRight));
      return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined$1, partials, holders);
    });

    /**
     * Creates a function that invokes `func` with arguments arranged according
     * to the specified `indexes` where the argument value at the first index is
     * provided as the first argument, the argument value at the second index is
     * provided as the second argument, and so on.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to rearrange arguments for.
     * @param {...(number|number[])} indexes The arranged argument indexes.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var rearged = _.rearg(function(a, b, c) {
     *   return [a, b, c];
     * }, [2, 0, 1]);
     *
     * rearged('b', 'c', 'a')
     * // => ['a', 'b', 'c']
     */
    var rearg = flatRest(function(func, indexes) {
      return createWrap(func, WRAP_REARG_FLAG, undefined$1, undefined$1, undefined$1, indexes);
    });

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */
    function rest(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start === undefined$1 ? start : toInteger(start);
      return baseRest(func, start);
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * create function and an array of arguments much like
     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
     *
     * **Note:** This method is based on the
     * [spread operator](https://mdn.io/spread_operator).
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @param {number} [start=0] The start position of the spread.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */
    function spread(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start == null ? 0 : nativeMax(toInteger(start), 0);
      return baseRest(function(args) {
        var array = args[start],
            otherArgs = castSlice(args, 0, start);

        if (array) {
          arrayPush(otherArgs, array);
        }
        return apply(func, this, otherArgs);
      });
    }

    /**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */
    function throttle(func, wait, options) {
      var leading = true,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }
      return debounce(func, wait, {
        'leading': leading,
        'maxWait': wait,
        'trailing': trailing
      });
    }

    /**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.unary(parseInt));
     * // => [6, 8, 10]
     */
    function unary(func) {
      return ary(func, 1);
    }

    /**
     * Creates a function that provides `value` to `wrapper` as its first
     * argument. Any additional arguments provided to the function are appended
     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
     * binding of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} [wrapper=identity] The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */
    function wrap(value, wrapper) {
      return partial(castFunction(wrapper), value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Casts `value` as an array if it's not one.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Lang
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast array.
     * @example
     *
     * _.castArray(1);
     * // => [1]
     *
     * _.castArray({ 'a': 1 });
     * // => [{ 'a': 1 }]
     *
     * _.castArray('abc');
     * // => ['abc']
     *
     * _.castArray(null);
     * // => [null]
     *
     * _.castArray(undefined);
     * // => [undefined]
     *
     * _.castArray();
     * // => []
     *
     * var array = [1, 2, 3];
     * console.log(_.castArray(array) === array);
     * // => true
     */
    function castArray() {
      if (!arguments.length) {
        return [];
      }
      var value = arguments[0];
      return isArray(value) ? value : [value];
    }

    /**
     * Creates a shallow clone of `value`.
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
     * and supports cloning arrays, array buffers, booleans, date objects, maps,
     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
     * arrays. The own enumerable properties of `arguments` objects are cloned
     * as plain objects. An empty object is returned for uncloneable values such
     * as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to clone.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeep
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var shallow = _.clone(objects);
     * console.log(shallow[0] === objects[0]);
     * // => true
     */
    function clone(value) {
      return baseClone(value, CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.clone` except that it accepts `customizer` which
     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
     * cloning is handled by the method instead. The `customizer` is invoked with
     * up to four arguments; (value [, index|key, object, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeepWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * }
     *
     * var el = _.cloneWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 0
     */
    function cloneWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined$1;
      return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */
    function cloneDeep(value) {
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.cloneWith` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the deep cloned value.
     * @see _.cloneWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * }
     *
     * var el = _.cloneDeepWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 20
     */
    function cloneDeepWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined$1;
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * Checks if `object` conforms to `source` by invoking the predicate
     * properties of `source` with the corresponding property values of `object`.
     *
     * **Note:** This method is equivalent to `_.conforms` when `source` is
     * partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
     * // => true
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
     * // => false
     */
    function conformsTo(object, source) {
      return source == null || baseConformsTo(object, source, keys(source));
    }

    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */
    function eq(value, other) {
      return value === other || (value !== value && other !== other);
    }

    /**
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     * @see _.lt
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */
    var gt = createRelationalOperation(baseGt);

    /**
     * Checks if `value` is greater than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than or equal to
     *  `other`, else `false`.
     * @see _.lte
     * @example
     *
     * _.gte(3, 1);
     * // => true
     *
     * _.gte(3, 3);
     * // => true
     *
     * _.gte(1, 3);
     * // => false
     */
    var gte = createRelationalOperation(function(value, other) {
      return value >= other;
    });

    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
        !propertyIsEnumerable.call(value, 'callee');
    };

    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray;

    /**
     * Checks if `value` is classified as an `ArrayBuffer` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     * @example
     *
     * _.isArrayBuffer(new ArrayBuffer(2));
     * // => true
     *
     * _.isArrayBuffer(new Array(2));
     * // => false
     */
    var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;

    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }

    /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }

    /**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */
    function isBoolean(value) {
      return value === true || value === false ||
        (isObjectLike(value) && baseGetTag(value) == boolTag);
    }

    /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */
    var isBuffer = nativeIsBuffer || stubFalse;

    /**
     * Checks if `value` is classified as a `Date` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     *
     * _.isDate('Mon April 23 2012');
     * // => false
     */
    var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

    /**
     * Checks if `value` is likely a DOM element.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */
    function isElement(value) {
      return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
    }

    /**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */
    function isEmpty(value) {
      if (value == null) {
        return true;
      }
      if (isArrayLike(value) &&
          (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
            isBuffer(value) || isTypedArray(value) || isArguments(value))) {
        return !value.length;
      }
      var tag = getTag(value);
      if (tag == mapTag || tag == setTag) {
        return !value.size;
      }
      if (isPrototype(value)) {
        return !baseKeys(value).length;
      }
      for (var key in value) {
        if (hasOwnProperty.call(value, key)) {
          return false;
        }
      }
      return true;
    }

    /**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are compared by strict equality, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }

    /**
     * This method is like `_.isEqual` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with up to
     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, othValue) {
     *   if (isGreeting(objValue) && isGreeting(othValue)) {
     *     return true;
     *   }
     * }
     *
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqualWith(array, other, customizer);
     * // => true
     */
    function isEqualWith(value, other, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined$1;
      var result = customizer ? customizer(value, other) : undefined$1;
      return result === undefined$1 ? baseIsEqual(value, other, undefined$1, customizer) : !!result;
    }

    /**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */
    function isError(value) {
      if (!isObjectLike(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == errorTag || tag == domExcTag ||
        (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
    }

    /**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on
     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MIN_VALUE);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
     *
     * _.isFinite('3');
     * // => false
     */
    function isFinite(value) {
      return typeof value == 'number' && nativeIsFinite(value);
    }

    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 9 which returns 'object' for typed arrays and other constructors.
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }

    /**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */
    function isInteger(value) {
      return typeof value == 'number' && value == toInteger(value);
    }

    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */
    function isLength(value) {
      return typeof value == 'number' &&
        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == 'object' || type == 'function');
    }

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return value != null && typeof value == 'object';
    }

    /**
     * Checks if `value` is classified as a `Map` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     * @example
     *
     * _.isMap(new Map);
     * // => true
     *
     * _.isMap(new WeakMap);
     * // => false
     */
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

    /**
     * Performs a partial deep comparison between `object` and `source` to
     * determine if `object` contains equivalent property values.
     *
     * **Note:** This method is equivalent to `_.matches` when `source` is
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.isMatch(object, { 'b': 2 });
     * // => true
     *
     * _.isMatch(object, { 'b': 1 });
     * // => false
     */
    function isMatch(object, source) {
      return object === source || baseIsMatch(object, source, getMatchData(source));
    }

    /**
     * This method is like `_.isMatch` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with five
     * arguments: (objValue, srcValue, index|key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, srcValue) {
     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
     *     return true;
     *   }
     * }
     *
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatchWith(object, source, customizer);
     * // => true
     */
    function isMatchWith(object, source, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined$1;
      return baseIsMatch(object, source, getMatchData(source), customizer);
    }

    /**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is based on
     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
     * `undefined` and other non-number values.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */
    function isNaN(value) {
      // An `NaN` primitive is the only value that is not equal to itself.
      // Perform the `toStringTag` check first to avoid errors with some
      // ActiveX objects in IE.
      return isNumber(value) && value != +value;
    }

    /**
     * Checks if `value` is a pristine native function.
     *
     * **Note:** This method can't reliably detect native functions in the presence
     * of the core-js package because core-js circumvents this kind of detection.
     * Despite multiple requests, the core-js maintainer has made it clear: any
     * attempt to fix the detection will be obstructed. As a result, we're left
     * with little choice but to throw an error. Unfortunately, this also affects
     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
     * which rely on core-js.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */
    function isNative(value) {
      if (isMaskable(value)) {
        throw new Error(CORE_ERROR_TEXT);
      }
      return baseIsNative(value);
    }

    /**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */
    function isNull(value) {
      return value === null;
    }

    /**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */
    function isNil(value) {
      return value == null;
    }

    /**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */
    function isNumber(value) {
      return typeof value == 'number' ||
        (isObjectLike(value) && baseGetTag(value) == numberTag);
    }

    /**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
      return typeof Ctor == 'function' && Ctor instanceof Ctor &&
        funcToString.call(Ctor) == objectCtorString;
    }

    /**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */
    var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

    /**
     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
     * double precision number which isn't the result of a rounded unsafe integer.
     *
     * **Note:** This method is based on
     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
     * @example
     *
     * _.isSafeInteger(3);
     * // => true
     *
     * _.isSafeInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isSafeInteger(Infinity);
     * // => false
     *
     * _.isSafeInteger('3');
     * // => false
     */
    function isSafeInteger(value) {
      return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is classified as a `Set` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     * @example
     *
     * _.isSet(new Set);
     * // => true
     *
     * _.isSet(new WeakSet);
     * // => false
     */
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */
    function isString(value) {
      return typeof value == 'string' ||
        (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
    }

    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
    function isSymbol(value) {
      return typeof value == 'symbol' ||
        (isObjectLike(value) && baseGetTag(value) == symbolTag);
    }

    /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

    /**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */
    function isUndefined(value) {
      return value === undefined$1;
    }

    /**
     * Checks if `value` is classified as a `WeakMap` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
     * @example
     *
     * _.isWeakMap(new WeakMap);
     * // => true
     *
     * _.isWeakMap(new Map);
     * // => false
     */
    function isWeakMap(value) {
      return isObjectLike(value) && getTag(value) == weakMapTag;
    }

    /**
     * Checks if `value` is classified as a `WeakSet` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
     * @example
     *
     * _.isWeakSet(new WeakSet);
     * // => true
     *
     * _.isWeakSet(new Set);
     * // => false
     */
    function isWeakSet(value) {
      return isObjectLike(value) && baseGetTag(value) == weakSetTag;
    }

    /**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     * @see _.gt
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */
    var lt = createRelationalOperation(baseLt);

    /**
     * Checks if `value` is less than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than or equal to
     *  `other`, else `false`.
     * @see _.gte
     * @example
     *
     * _.lte(1, 3);
     * // => true
     *
     * _.lte(3, 3);
     * // => true
     *
     * _.lte(3, 1);
     * // => false
     */
    var lte = createRelationalOperation(function(value, other) {
      return value <= other;
    });

    /**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */
    function toArray(value) {
      if (!value) {
        return [];
      }
      if (isArrayLike(value)) {
        return isString(value) ? stringToArray(value) : copyArray(value);
      }
      if (symIterator && value[symIterator]) {
        return iteratorToArray(value[symIterator]());
      }
      var tag = getTag(value),
          func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

      return func(value);
    }

    /**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = (value < 0 ? -1 : 1);
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }

    /**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */
    function toInteger(value) {
      var result = toFinite(value),
          remainder = result % 1;

      return result === result ? (remainder ? result - remainder : result) : 0;
    }

    /**
     * Converts `value` to an integer suitable for use as the length of an
     * array-like object.
     *
     * **Note:** This method is based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toLength(3.2);
     * // => 3
     *
     * _.toLength(Number.MIN_VALUE);
     * // => 0
     *
     * _.toLength(Infinity);
     * // => 4294967295
     *
     * _.toLength('3.2');
     * // => 3
     */
    function toLength(value) {
      return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
    }

    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */
    function toNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? (other + '') : other;
      }
      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, '');
      var isBinary = reIsBinary.test(value);
      return (isBinary || reIsOctal.test(value))
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : (reIsBadHex.test(value) ? NAN : +value);
    }

    /**
     * Converts `value` to a plain object flattening inherited enumerable string
     * keyed properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }

    /**
     * Converts `value` to a safe integer. A safe integer can be compared and
     * represented correctly.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toSafeInteger(3.2);
     * // => 3
     *
     * _.toSafeInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toSafeInteger(Infinity);
     * // => 9007199254740991
     *
     * _.toSafeInteger('3.2');
     * // => 3
     */
    function toSafeInteger(value) {
      return value
        ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER)
        : (value === 0 ? value : 0);
    }

    /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */
    function toString(value) {
      return value == null ? '' : baseToString(value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assign({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3 }
     */
    var assign = createAssigner(function(object, source) {
      if (isPrototype(source) || isArrayLike(source)) {
        copyObject(source, keys(source), object);
        return;
      }
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          assignValue(object, key, source[key]);
        }
      }
    });

    /**
     * This method is like `_.assign` except that it iterates over own and
     * inherited source properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assign
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
     */
    var assignIn = createAssigner(function(object, source) {
      copyObject(source, keysIn(source), object);
    });

    /**
     * This method is like `_.assignIn` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extendWith
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignInWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keysIn(source), object, customizer);
    });

    /**
     * This method is like `_.assign` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignInWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keys(source), object, customizer);
    });

    /**
     * Creates an array of values corresponding to `paths` of `object`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Array} Returns the picked values.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _.at(object, ['a[0].b.c', 'a[1]']);
     * // => [3, 4]
     */
    var at = flatRest(baseAt);

    /**
     * Creates an object that inherits from the `prototype` object. If a
     * `properties` object is given, its own enumerable string keyed properties
     * are assigned to the created object.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */
    function create(prototype, properties) {
      var result = baseCreate(prototype);
      return properties == null ? result : baseAssign(result, properties);
    }

    /**
     * Assigns own and inherited enumerable string keyed properties of source
     * objects to the destination object for all destination properties that
     * resolve to `undefined`. Source objects are applied from left to right.
     * Once a property is set, additional values of the same property are ignored.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaultsDeep
     * @example
     *
     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var defaults = baseRest(function(object, sources) {
      object = Object(object);

      var index = -1;
      var length = sources.length;
      var guard = length > 2 ? sources[2] : undefined$1;

      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        length = 1;
      }

      while (++index < length) {
        var source = sources[index];
        var props = keysIn(source);
        var propsIndex = -1;
        var propsLength = props.length;

        while (++propsIndex < propsLength) {
          var key = props[propsIndex];
          var value = object[key];

          if (value === undefined$1 ||
              (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
            object[key] = source[key];
          }
        }
      }

      return object;
    });

    /**
     * This method is like `_.defaults` except that it recursively assigns
     * default properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaults
     * @example
     *
     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
     * // => { 'a': { 'b': 2, 'c': 3 } }
     */
    var defaultsDeep = baseRest(function(args) {
      args.push(undefined$1, customDefaultsMerge);
      return apply(mergeWith, undefined$1, args);
    });

    /**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(o) { return o.age < 40; });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // The `_.matches` iteratee shorthand.
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findKey(users, 'active');
     * // => 'barney'
     */
    function findKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
    }

    /**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(o) { return o.age < 40; });
     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */
    function findLastKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
    }

    /**
     * Iterates over own and inherited enumerable string keyed properties of an
     * object and invokes `iteratee` for each property. The iteratee is invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forInRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
     */
    function forIn(object, iteratee) {
      return object == null
        ? object
        : baseFor(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
     */
    function forInRight(object, iteratee) {
      return object == null
        ? object
        : baseForRight(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * Iterates over own enumerable string keyed properties of an object and
     * invokes `iteratee` for each property. The iteratee is invoked with three
     * arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwnRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forOwn(object, iteratee) {
      return object && baseForOwn(object, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
     */
    function forOwnRight(object, iteratee) {
      return object && baseForOwnRight(object, getIteratee(iteratee, 3));
    }

    /**
     * Creates an array of function property names from own enumerable properties
     * of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functionsIn
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functions(new Foo);
     * // => ['a', 'b']
     */
    function functions(object) {
      return object == null ? [] : baseFunctions(object, keys(object));
    }

    /**
     * Creates an array of function property names from own and inherited
     * enumerable properties of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functions
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functionsIn(new Foo);
     * // => ['a', 'b', 'c']
     */
    function functionsIn(object) {
      return object == null ? [] : baseFunctions(object, keysIn(object));
    }

    /**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */
    function get(object, path, defaultValue) {
      var result = object == null ? undefined$1 : baseGet(object, path);
      return result === undefined$1 ? defaultValue : result;
    }

    /**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': 2 } };
     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b');
     * // => true
     *
     * _.has(object, ['a', 'b']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */
    function has(object, path) {
      return object != null && hasPath(object, path, baseHas);
    }

    /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }

    /**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite
     * property assignments of previous values.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Object
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { '1': 'c', '2': 'b' }
     */
    var invert = createInverter(function(result, value, key) {
      if (value != null &&
          typeof value.toString != 'function') {
        value = nativeObjectToString.call(value);
      }

      result[value] = key;
    }, constant(identity));

    /**
     * This method is like `_.invert` except that the inverted object is generated
     * from the results of running each element of `object` thru `iteratee`. The
     * corresponding inverted value of each inverted key is an array of keys
     * responsible for generating the inverted value. The iteratee is invoked
     * with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Object
     * @param {Object} object The object to invert.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invertBy(object);
     * // => { '1': ['a', 'c'], '2': ['b'] }
     *
     * _.invertBy(object, function(value) {
     *   return 'group' + value;
     * });
     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
     */
    var invertBy = createInverter(function(result, value, key) {
      if (value != null &&
          typeof value.toString != 'function') {
        value = nativeObjectToString.call(value);
      }

      if (hasOwnProperty.call(result, value)) {
        result[value].push(key);
      } else {
        result[value] = [key];
      }
    }, getIteratee);

    /**
     * Invokes the method at `path` of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
     *
     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
     * // => [2, 3]
     */
    var invoke = baseRest(baseInvoke);

    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }

    /**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }

    /**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */
    function mapKeys(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, iteratee(value, key, object), value);
      });
      return result;
    }

    /**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */
    function mapValues(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, key, iteratee(value, key, object));
      });
      return result;
    }

    /**
     * This method is like `_.assign` except that it recursively merges own and
     * inherited enumerable string keyed properties of source objects into the
     * destination object. Source properties that resolve to `undefined` are
     * skipped if a destination value exists. Array and plain object properties
     * are merged recursively. Other objects and value types are overridden by
     * assignment. Source objects are applied from left to right. Subsequent
     * sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {
     *   'a': [{ 'b': 2 }, { 'd': 4 }]
     * };
     *
     * var other = {
     *   'a': [{ 'c': 3 }, { 'e': 5 }]
     * };
     *
     * _.merge(object, other);
     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
     */
    var merge = createAssigner(function(object, source, srcIndex) {
      baseMerge(object, source, srcIndex);
    });

    /**
     * This method is like `_.merge` except that it accepts `customizer` which
     * is invoked to produce the merged values of the destination and source
     * properties. If `customizer` returns `undefined`, merging is handled by the
     * method instead. The `customizer` is invoked with six arguments:
     * (objValue, srcValue, key, object, source, stack).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   if (_.isArray(objValue)) {
     *     return objValue.concat(srcValue);
     *   }
     * }
     *
     * var object = { 'a': [1], 'b': [2] };
     * var other = { 'a': [3], 'b': [4] };
     *
     * _.mergeWith(object, other, customizer);
     * // => { 'a': [1, 3], 'b': [2, 4] }
     */
    var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
      baseMerge(object, source, srcIndex, customizer);
    });

    /**
     * The opposite of `_.pick`; this method creates an object composed of the
     * own and inherited enumerable property paths of `object` that are not omitted.
     *
     * **Note:** This method is considerably slower than `_.pick`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to omit.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omit(object, ['a', 'c']);
     * // => { 'b': '2' }
     */
    var omit = flatRest(function(object, paths) {
      var result = {};
      if (object == null) {
        return result;
      }
      var isDeep = false;
      paths = arrayMap(paths, function(path) {
        path = castPath(path, object);
        isDeep || (isDeep = path.length > 1);
        return path;
      });
      copyObject(object, getAllKeysIn(object), result);
      if (isDeep) {
        result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
      }
      var length = paths.length;
      while (length--) {
        baseUnset(result, paths[length]);
      }
      return result;
    });

    /**
     * The opposite of `_.pickBy`; this method creates an object composed of
     * the own and inherited enumerable string keyed properties of `object` that
     * `predicate` doesn't return truthy for. The predicate is invoked with two
     * arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omitBy(object, _.isNumber);
     * // => { 'b': '2' }
     */
    function omitBy(object, predicate) {
      return pickBy(object, negate(getIteratee(predicate)));
    }

    /**
     * Creates an object composed of the picked `object` properties.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pick(object, ['a', 'c']);
     * // => { 'a': 1, 'c': 3 }
     */
    var pick = flatRest(function(object, paths) {
      return object == null ? {} : basePick(object, paths);
    });

    /**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pickBy(object, _.isNumber);
     * // => { 'a': 1, 'c': 3 }
     */
    function pickBy(object, predicate) {
      if (object == null) {
        return {};
      }
      var props = arrayMap(getAllKeysIn(object), function(prop) {
        return [prop];
      });
      predicate = getIteratee(predicate);
      return basePickBy(object, props, function(value, path) {
        return predicate(value, path[0]);
      });
    }

    /**
     * This method is like `_.get` except that if the resolved value is a
     * function it's invoked with the `this` binding of its parent object and
     * its result is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a[0].b.c3', 'default');
     * // => 'default'
     *
     * _.result(object, 'a[0].b.c3', _.constant('default'));
     * // => 'default'
     */
    function result(object, path, defaultValue) {
      path = castPath(path, object);

      var index = -1,
          length = path.length;

      // Ensure the loop is entered when path is empty.
      if (!length) {
        length = 1;
        object = undefined$1;
      }
      while (++index < length) {
        var value = object == null ? undefined$1 : object[toKey(path[index])];
        if (value === undefined$1) {
          index = length;
          value = defaultValue;
        }
        object = isFunction(value) ? value.call(object) : value;
      }
      return object;
    }

    /**
     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
     * it's created. Arrays are created for missing index properties while objects
     * are created for all other missing properties. Use `_.setWith` to customize
     * `path` creation.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, ['x', '0', 'y', 'z'], 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */
    function set(object, path, value) {
      return object == null ? object : baseSet(object, path, value);
    }

    /**
     * This method is like `_.set` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.setWith(object, '[0][1]', 'a', Object);
     * // => { '0': { '1': 'a' } }
     */
    function setWith(object, path, value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined$1;
      return object == null ? object : baseSet(object, path, value, customizer);
    }

    /**
     * Creates an array of own enumerable string keyed-value pairs for `object`
     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
     * entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entries
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairs(new Foo);
     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
     */
    var toPairs = createToPairs(keys);

    /**
     * Creates an array of own and inherited enumerable string keyed-value pairs
     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
     * or set, its entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entriesIn
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairsIn(new Foo);
     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
     */
    var toPairsIn = createToPairs(keysIn);

    /**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable string keyed properties thru `iteratee`, with each invocation
     * potentially mutating the `accumulator` object. If `accumulator` is not
     * provided, a new object with the same `[[Prototype]]` will be used. The
     * iteratee is invoked with four arguments: (accumulator, value, key, object).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * }, []);
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */
    function transform(object, iteratee, accumulator) {
      var isArr = isArray(object),
          isArrLike = isArr || isBuffer(object) || isTypedArray(object);

      iteratee = getIteratee(iteratee, 4);
      if (accumulator == null) {
        var Ctor = object && object.constructor;
        if (isArrLike) {
          accumulator = isArr ? new Ctor : [];
        }
        else if (isObject(object)) {
          accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
        }
        else {
          accumulator = {};
        }
      }
      (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
        return iteratee(accumulator, value, index, object);
      });
      return accumulator;
    }

    /**
     * Removes the property at `path` of `object`.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
     * _.unset(object, 'a[0].b.c');
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     *
     * _.unset(object, ['a', '0', 'b', 'c']);
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     */
    function unset(object, path) {
      return object == null ? true : baseUnset(object, path);
    }

    /**
     * This method is like `_.set` except that accepts `updater` to produce the
     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
     * is invoked with one argument: (value).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
     * console.log(object.a[0].b.c);
     * // => 9
     *
     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
     * console.log(object.x[0].y.z);
     * // => 0
     */
    function update(object, path, updater) {
      return object == null ? object : baseUpdate(object, path, castFunction(updater));
    }

    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    function updateWith(object, path, updater, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined$1;
      return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
    }

    /**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */
    function values(object) {
      return object == null ? [] : baseValues(object, keys(object));
    }

    /**
     * Creates an array of the own and inherited enumerable string keyed property
     * values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */
    function valuesIn(object) {
      return object == null ? [] : baseValues(object, keysIn(object));
    }

    /*------------------------------------------------------------------------*/

    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Number
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    function clamp(number, lower, upper) {
      if (upper === undefined$1) {
        upper = lower;
        lower = undefined$1;
      }
      if (upper !== undefined$1) {
        upper = toNumber(upper);
        upper = upper === upper ? upper : 0;
      }
      if (lower !== undefined$1) {
        lower = toNumber(lower);
        lower = lower === lower ? lower : 0;
      }
      return baseClamp(toNumber(number), lower, upper);
    }

    /**
     * Checks if `n` is between `start` and up to, but not including, `end`. If
     * `end` is not specified, it's set to `start` with `start` then set to `0`.
     * If `start` is greater than `end` the params are swapped to support
     * negative ranges.
     *
     * @static
     * @memberOf _
     * @since 3.3.0
     * @category Number
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     * @see _.range, _.rangeRight
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     *
     * _.inRange(-3, -2, -6);
     * // => true
     */
    function inRange(number, start, end) {
      start = toFinite(start);
      if (end === undefined$1) {
        end = start;
        start = 0;
      } else {
        end = toFinite(end);
      }
      number = toNumber(number);
      return baseInRange(number, start, end);
    }

    /**
     * Produces a random number between the inclusive `lower` and `upper` bounds.
     * If only one argument is provided a number between `0` and the given number
     * is returned. If `floating` is `true`, or either `lower` or `upper` are
     * floats, a floating-point number is returned instead of an integer.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Number
     * @param {number} [lower=0] The lower bound.
     * @param {number} [upper=1] The upper bound.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */
    function random(lower, upper, floating) {
      if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
        upper = floating = undefined$1;
      }
      if (floating === undefined$1) {
        if (typeof upper == 'boolean') {
          floating = upper;
          upper = undefined$1;
        }
        else if (typeof lower == 'boolean') {
          floating = lower;
          lower = undefined$1;
        }
      }
      if (lower === undefined$1 && upper === undefined$1) {
        lower = 0;
        upper = 1;
      }
      else {
        lower = toFinite(lower);
        if (upper === undefined$1) {
          upper = lower;
          lower = 0;
        } else {
          upper = toFinite(upper);
        }
      }
      if (lower > upper) {
        var temp = lower;
        lower = upper;
        upper = temp;
      }
      if (floating || lower % 1 || upper % 1) {
        var rand = nativeRandom();
        return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
      }
      return baseRandom(lower, upper);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar--');
     * // => 'fooBar'
     *
     * _.camelCase('__FOO_BAR__');
     * // => 'fooBar'
     */
    var camelCase = createCompounder(function(result, word, index) {
      word = word.toLowerCase();
      return result + (index ? capitalize(word) : word);
    });

    /**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('FRED');
     * // => 'Fred'
     */
    function capitalize(string) {
      return upperFirst(toString(string).toLowerCase());
    }

    /**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */
    function deburr(string) {
      string = toString(string);
      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
    }

    /**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search up to.
     * @returns {boolean} Returns `true` if `string` ends with `target`,
     *  else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */
    function endsWith(string, target, position) {
      string = toString(string);
      target = baseToString(target);

      var length = string.length;
      position = position === undefined$1
        ? length
        : baseClamp(toInteger(position), 0, length);

      var end = position;
      position -= target.length;
      return position >= 0 && string.slice(position, end) == target;
    }

    /**
     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
     * corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional
     * characters use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value. See
     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * When working with HTML you should always
     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
     * XSS vectors.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */
    function escape(string) {
      string = toString(string);
      return (string && reHasUnescapedHtml.test(string))
        ? string.replace(reUnescapedHtml, escapeHtmlChar)
        : string;
    }

    /**
     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https://lodash\.com/\)'
     */
    function escapeRegExp(string) {
      string = toString(string);
      return (string && reHasRegExpChar.test(string))
        ? string.replace(reRegExpChar, '\\$&')
        : string;
    }

    /**
     * Converts `string` to
     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__FOO_BAR__');
     * // => 'foo-bar'
     */
    var kebabCase = createCompounder(function(result, word, index) {
      return result + (index ? '-' : '') + word.toLowerCase();
    });

    /**
     * Converts `string`, as space separated words, to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.lowerCase('--Foo-Bar--');
     * // => 'foo bar'
     *
     * _.lowerCase('fooBar');
     * // => 'foo bar'
     *
     * _.lowerCase('__FOO_BAR__');
     * // => 'foo bar'
     */
    var lowerCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toLowerCase();
    });

    /**
     * Converts the first character of `string` to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.lowerFirst('Fred');
     * // => 'fred'
     *
     * _.lowerFirst('FRED');
     * // => 'fRED'
     */
    var lowerFirst = createCaseFirst('toLowerCase');

    /**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */
    function pad(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      if (!length || strLength >= length) {
        return string;
      }
      var mid = (length - strLength) / 2;
      return (
        createPadding(nativeFloor(mid), chars) +
        string +
        createPadding(nativeCeil(mid), chars)
      );
    }

    /**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padEnd('abc', 6);
     * // => 'abc   '
     *
     * _.padEnd('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padEnd('abc', 3);
     * // => 'abc'
     */
    function padEnd(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (string + createPadding(length - strLength, chars))
        : string;
    }

    /**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padStart('abc', 6);
     * // => '   abc'
     *
     * _.padStart('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padStart('abc', 3);
     * // => 'abc'
     */
    function padStart(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (createPadding(length - strLength, chars) + string)
        : string;
    }

    /**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
     * hexadecimal, in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the
     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix=10] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */
    function parseInt(string, radix, guard) {
      if (guard || radix == null) {
        radix = 0;
      } else if (radix) {
        radix = +radix;
      }
      return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
    }

    /**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=1] The number of times to repeat the string.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */
    function repeat(string, n, guard) {
      if ((guard ? isIterateeCall(string, n, guard) : n === undefined$1)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      return baseRepeat(toString(string), n);
    }

    /**
     * Replaces matches for `pattern` in `string` with `replacement`.
     *
     * **Note:** This method is based on
     * [`String#replace`](https://mdn.io/String/replace).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to modify.
     * @param {RegExp|string} pattern The pattern to replace.
     * @param {Function|string} replacement The match replacement.
     * @returns {string} Returns the modified string.
     * @example
     *
     * _.replace('Hi Fred', 'Fred', 'Barney');
     * // => 'Hi Barney'
     */
    function replace() {
      var args = arguments,
          string = toString(args[0]);

      return args.length < 3 ? string : string.replace(args[1], args[2]);
    }

    /**
     * Converts `string` to
     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--FOO-BAR--');
     * // => 'foo_bar'
     */
    var snakeCase = createCompounder(function(result, word, index) {
      return result + (index ? '_' : '') + word.toLowerCase();
    });

    /**
     * Splits `string` by `separator`.
     *
     * **Note:** This method is based on
     * [`String#split`](https://mdn.io/String/split).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to split.
     * @param {RegExp|string} separator The separator pattern to split by.
     * @param {number} [limit] The length to truncate results to.
     * @returns {Array} Returns the string segments.
     * @example
     *
     * _.split('a-b-c', '-', 2);
     * // => ['a', 'b']
     */
    function split(string, separator, limit) {
      if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
        separator = limit = undefined$1;
      }
      limit = limit === undefined$1 ? MAX_ARRAY_LENGTH : limit >>> 0;
      if (!limit) {
        return [];
      }
      string = toString(string);
      if (string && (
            typeof separator == 'string' ||
            (separator != null && !isRegExp(separator))
          )) {
        separator = baseToString(separator);
        if (!separator && hasUnicode(string)) {
          return castSlice(stringToArray(string), 0, limit);
        }
      }
      return string.split(separator, limit);
    }

    /**
     * Converts `string` to
     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
     *
     * @static
     * @memberOf _
     * @since 3.1.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the start cased string.
     * @example
     *
     * _.startCase('--foo-bar--');
     * // => 'Foo Bar'
     *
     * _.startCase('fooBar');
     * // => 'Foo Bar'
     *
     * _.startCase('__FOO_BAR__');
     * // => 'FOO BAR'
     */
    var startCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + upperFirst(word);
    });

    /**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`,
     *  else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */
    function startsWith(string, target, position) {
      string = toString(string);
      position = position == null
        ? 0
        : baseClamp(toInteger(position), 0, string.length);

      target = baseToString(target);
      return string.slice(position, position + target.length) == target;
    }

    /**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is given, it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options={}] The options object.
     * @param {RegExp} [options.escape=_.templateSettings.escape]
     *  The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
     *  The "evaluate" delimiter.
     * @param {Object} [options.imports=_.templateSettings.imports]
     *  An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
     *  The "interpolate" delimiter.
     * @param {string} [options.sourceURL='lodash.templateSources[n]']
     *  The sourceURL of the compiled template.
     * @param {string} [options.variable='obj']
     *  The data object variable name.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // Use the "interpolate" delimiter to create a compiled template.
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // Use the HTML "escape" delimiter to escape data property values.
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the internal `print` function in "evaluate" delimiters.
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // Use the ES template literal delimiter as an "interpolate" delimiter.
     * // Disable support by replacing the "interpolate" delimiter.
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // Use backslashes to treat delimiters as plain text.
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // Use the `imports` option to import `jQuery` as `jq`.
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
     *
     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // Use custom template delimiters.
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // Use the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and stack traces.
     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */
    function template(string, options, guard) {
      // Based on John Resig's `tmpl` implementation
      // (http://ejohn.org/blog/javascript-micro-templating/)
      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
      var settings = lodash.templateSettings;

      if (guard && isIterateeCall(string, options, guard)) {
        options = undefined$1;
      }
      string = toString(string);
      options = assignInWith({}, options, settings, customDefaultsAssignIn);

      var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),
          importsKeys = keys(imports),
          importsValues = baseValues(imports, importsKeys);

      var isEscaping,
          isEvaluating,
          index = 0,
          interpolate = options.interpolate || reNoMatch,
          source = "__p += '";

      // Compile the regexp to match each delimiter.
      var reDelimiters = RegExp(
        (options.escape || reNoMatch).source + '|' +
        interpolate.source + '|' +
        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
        (options.evaluate || reNoMatch).source + '|$'
      , 'g');

      // Use a sourceURL for easier debugging.
      // The sourceURL gets injected into the source that's eval-ed, so be careful
      // to normalize all kinds of whitespace, so e.g. newlines (and unicode versions of it) can't sneak in
      // and escape the comment, thus injecting code that gets evaled.
      var sourceURL = '//# sourceURL=' +
        (hasOwnProperty.call(options, 'sourceURL')
          ? (options.sourceURL + '').replace(/\s/g, ' ')
          : ('lodash.templateSources[' + (++templateCounter) + ']')
        ) + '\n';

      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
        interpolateValue || (interpolateValue = esTemplateValue);

        // Escape characters that can't be included in string literals.
        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

        // Replace delimiters with snippets.
        if (escapeValue) {
          isEscaping = true;
          source += "' +\n__e(" + escapeValue + ") +\n'";
        }
        if (evaluateValue) {
          isEvaluating = true;
          source += "';\n" + evaluateValue + ";\n__p += '";
        }
        if (interpolateValue) {
          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
        }
        index = offset + match.length;

        // The JS engine embedded in Adobe products needs `match` returned in
        // order to produce the correct `offset` value.
        return match;
      });

      source += "';\n";

      // If `variable` is not specified wrap a with-statement around the generated
      // code to add the data object to the top of the scope chain.
      var variable = hasOwnProperty.call(options, 'variable') && options.variable;
      if (!variable) {
        source = 'with (obj) {\n' + source + '\n}\n';
      }
      // Cleanup code by stripping empty strings.
      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
        .replace(reEmptyStringMiddle, '$1')
        .replace(reEmptyStringTrailing, '$1;');

      // Frame code as the function body.
      source = 'function(' + (variable || 'obj') + ') {\n' +
        (variable
          ? ''
          : 'obj || (obj = {});\n'
        ) +
        "var __t, __p = ''" +
        (isEscaping
           ? ', __e = _.escape'
           : ''
        ) +
        (isEvaluating
          ? ', __j = Array.prototype.join;\n' +
            "function print() { __p += __j.call(arguments, '') }\n"
          : ';\n'
        ) +
        source +
        'return __p\n}';

      var result = attempt(function() {
        return Function(importsKeys, sourceURL + 'return ' + source)
          .apply(undefined$1, importsValues);
      });

      // Provide the compiled function's source by its `toString` method or
      // the `source` property as a convenience for inlining compiled templates.
      result.source = source;
      if (isError(result)) {
        throw result;
      }
      return result;
    }

    /**
     * Converts `string`, as a whole, to lower case just like
     * [String#toLowerCase](https://mdn.io/toLowerCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.toLower('--Foo-Bar--');
     * // => '--foo-bar--'
     *
     * _.toLower('fooBar');
     * // => 'foobar'
     *
     * _.toLower('__FOO_BAR__');
     * // => '__foo_bar__'
     */
    function toLower(value) {
      return toString(value).toLowerCase();
    }

    /**
     * Converts `string`, as a whole, to upper case just like
     * [String#toUpperCase](https://mdn.io/toUpperCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.toUpper('--foo-bar--');
     * // => '--FOO-BAR--'
     *
     * _.toUpper('fooBar');
     * // => 'FOOBAR'
     *
     * _.toUpper('__foo_bar__');
     * // => '__FOO_BAR__'
     */
    function toUpper(value) {
      return toString(value).toUpperCase();
    }

    /**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */
    function trim(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined$1)) {
        return string.replace(reTrim, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          chrSymbols = stringToArray(chars),
          start = charsStartIndex(strSymbols, chrSymbols),
          end = charsEndIndex(strSymbols, chrSymbols) + 1;

      return castSlice(strSymbols, start, end).join('');
    }

    /**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimEnd('  abc  ');
     * // => '  abc'
     *
     * _.trimEnd('-_-abc-_-', '_-');
     * // => '-_-abc'
     */
    function trimEnd(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined$1)) {
        return string.replace(reTrimEnd, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;

      return castSlice(strSymbols, 0, end).join('');
    }

    /**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimStart('  abc  ');
     * // => 'abc  '
     *
     * _.trimStart('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */
    function trimStart(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined$1)) {
        return string.replace(reTrimStart, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          start = charsStartIndex(strSymbols, stringToArray(chars));

      return castSlice(strSymbols, start).join('');
    }

    /**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object} [options={}] The options object.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.truncate('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */
    function truncate(string, options) {
      var length = DEFAULT_TRUNC_LENGTH,
          omission = DEFAULT_TRUNC_OMISSION;

      if (isObject(options)) {
        var separator = 'separator' in options ? options.separator : separator;
        length = 'length' in options ? toInteger(options.length) : length;
        omission = 'omission' in options ? baseToString(options.omission) : omission;
      }
      string = toString(string);

      var strLength = string.length;
      if (hasUnicode(string)) {
        var strSymbols = stringToArray(string);
        strLength = strSymbols.length;
      }
      if (length >= strLength) {
        return string;
      }
      var end = length - stringSize(omission);
      if (end < 1) {
        return omission;
      }
      var result = strSymbols
        ? castSlice(strSymbols, 0, end).join('')
        : string.slice(0, end);

      if (separator === undefined$1) {
        return result + omission;
      }
      if (strSymbols) {
        end += (result.length - end);
      }
      if (isRegExp(separator)) {
        if (string.slice(end).search(separator)) {
          var match,
              substring = result;

          if (!separator.global) {
            separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
          }
          separator.lastIndex = 0;
          while ((match = separator.exec(substring))) {
            var newEnd = match.index;
          }
          result = result.slice(0, newEnd === undefined$1 ? end : newEnd);
        }
      } else if (string.indexOf(baseToString(separator), end) != end) {
        var index = result.lastIndexOf(separator);
        if (index > -1) {
          result = result.slice(0, index);
        }
      }
      return result + omission;
    }

    /**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
     * their corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional
     * HTML entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @since 0.6.0
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */
    function unescape(string) {
      string = toString(string);
      return (string && reHasEscapedHtml.test(string))
        ? string.replace(reEscapedHtml, unescapeHtmlChar)
        : string;
    }

    /**
     * Converts `string`, as space separated words, to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.upperCase('--foo-bar');
     * // => 'FOO BAR'
     *
     * _.upperCase('fooBar');
     * // => 'FOO BAR'
     *
     * _.upperCase('__foo_bar__');
     * // => 'FOO BAR'
     */
    var upperCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toUpperCase();
    });

    /**
     * Converts the first character of `string` to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.upperFirst('fred');
     * // => 'Fred'
     *
     * _.upperFirst('FRED');
     * // => 'FRED'
     */
    var upperFirst = createCaseFirst('toUpperCase');

    /**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */
    function words(string, pattern, guard) {
      string = toString(string);
      pattern = guard ? undefined$1 : pattern;

      if (pattern === undefined$1) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
      }
      return string.match(pattern) || [];
    }

    /*------------------------------------------------------------------------*/

    /**
     * Attempts to invoke `func`, returning either the result or the caught error
     * object. Any additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Function} func The function to attempt.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {*} Returns the `func` result or error object.
     * @example
     *
     * // Avoid throwing errors for invalid selectors.
     * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
     *
     * if (_.isError(elements)) {
     *   elements = [];
     * }
     */
    var attempt = baseRest(function(func, args) {
      try {
        return apply(func, undefined$1, args);
      } catch (e) {
        return isError(e) ? e : new Error(e);
      }
    });

    /**
     * Binds methods of an object to the object itself, overwriting the existing
     * method.
     *
     * **Note:** This method doesn't set the "length" property of bound functions.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...(string|string[])} methodNames The object method names to bind.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'click': function() {
     *     console.log('clicked ' + this.label);
     *   }
     * };
     *
     * _.bindAll(view, ['click']);
     * jQuery(element).on('click', view.click);
     * // => Logs 'clicked docs' when clicked.
     */
    var bindAll = flatRest(function(object, methodNames) {
      arrayEach(methodNames, function(key) {
        key = toKey(key);
        baseAssignValue(object, key, bind(object[key], object));
      });
      return object;
    });

    /**
     * Creates a function that iterates over `pairs` and invokes the corresponding
     * function of the first predicate to return truthy. The predicate-function
     * pairs are invoked with the `this` binding and arguments of the created
     * function.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Array} pairs The predicate-function pairs.
     * @returns {Function} Returns the new composite function.
     * @example
     *
     * var func = _.cond([
     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
     *   [_.stubTrue,                      _.constant('no match')]
     * ]);
     *
     * func({ 'a': 1, 'b': 2 });
     * // => 'matches A'
     *
     * func({ 'a': 0, 'b': 1 });
     * // => 'matches B'
     *
     * func({ 'a': '1', 'b': '2' });
     * // => 'no match'
     */
    function cond(pairs) {
      var length = pairs == null ? 0 : pairs.length,
          toIteratee = getIteratee();

      pairs = !length ? [] : arrayMap(pairs, function(pair) {
        if (typeof pair[1] != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return [toIteratee(pair[0]), pair[1]];
      });

      return baseRest(function(args) {
        var index = -1;
        while (++index < length) {
          var pair = pairs[index];
          if (apply(pair[0], this, args)) {
            return apply(pair[1], this, args);
          }
        }
      });
    }

    /**
     * Creates a function that invokes the predicate properties of `source` with
     * the corresponding property values of a given object, returning `true` if
     * all predicates return truthy, else `false`.
     *
     * **Note:** The created function is equivalent to `_.conformsTo` with
     * `source` partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 2, 'b': 1 },
     *   { 'a': 1, 'b': 2 }
     * ];
     *
     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
     * // => [{ 'a': 1, 'b': 2 }]
     */
    function conforms(source) {
      return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.log(objects[0] === objects[1]);
     * // => true
     */
    function constant(value) {
      return function() {
        return value;
      };
    }

    /**
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Util
     * @param {*} value The value to check.
     * @param {*} defaultValue The default value.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * _.defaultTo(1, 10);
     * // => 1
     *
     * _.defaultTo(undefined, 10);
     * // => 10
     */
    function defaultTo(value, defaultValue) {
      return (value == null || value !== value) ? defaultValue : value;
    }

    /**
     * Creates a function that returns the result of invoking the given functions
     * with the `this` binding of the created function, where each successive
     * invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flowRight
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow([_.add, square]);
     * addSquare(1, 2);
     * // => 9
     */
    var flow = createFlow();

    /**
     * This method is like `_.flow` except that it creates a function that
     * invokes the given functions from right to left.
     *
     * @static
     * @since 3.0.0
     * @memberOf _
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flow
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flowRight([square, _.add]);
     * addSquare(1, 2);
     * // => 9
     */
    var flowRight = createFlow(true);

    /**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */
    function identity(value) {
      return value;
    }

    /**
     * Creates a function that invokes `func` with the arguments of the created
     * function. If `func` is a property name, the created function returns the
     * property value for a given element. If `func` is an array or object, the
     * created function returns `true` for elements that contain the equivalent
     * source properties, otherwise it returns `false`.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Util
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, _.iteratee(['user', 'fred']));
     * // => [{ 'user': 'fred', 'age': 40 }]
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, _.iteratee('user'));
     * // => ['barney', 'fred']
     *
     * // Create custom iteratee shorthands.
     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
     *     return func.test(string);
     *   };
     * });
     *
     * _.filter(['abc', 'def'], /ef/);
     * // => ['def']
     */
    function iteratee(func) {
      return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between a given
     * object and `source`, returning `true` if the given object has equivalent
     * property values, else `false`.
     *
     * **Note:** The created function is equivalent to `_.isMatch` with `source`
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * **Note:** Multiple values can be checked by combining several matchers
     * using `_.overSome`
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
     *
     * // Checking for several possible values
     * _.filter(objects, _.overSome([_.matches({ 'a': 1 }), _.matches({ 'a': 4 })]));
     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
     */
    function matches(source) {
      return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between the
     * value at `path` of a given object to `srcValue`, returning `true` if the
     * object value is equivalent, else `false`.
     *
     * **Note:** Partial comparisons will match empty array and empty object
     * `srcValue` values against any array or object value, respectively. See
     * `_.isEqual` for a list of supported value comparisons.
     *
     * **Note:** Multiple values can be checked by combining several matchers
     * using `_.overSome`
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.find(objects, _.matchesProperty('a', 4));
     * // => { 'a': 4, 'b': 5, 'c': 6 }
     *
     * // Checking for several possible values
     * _.filter(objects, _.overSome([_.matchesProperty('a', 1), _.matchesProperty('a', 4)]));
     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
     */
    function matchesProperty(path, srcValue) {
      return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that invokes the method at `path` of a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': _.constant(2) } },
     *   { 'a': { 'b': _.constant(1) } }
     * ];
     *
     * _.map(objects, _.method('a.b'));
     * // => [2, 1]
     *
     * _.map(objects, _.method(['a', 'b']));
     * // => [2, 1]
     */
    var method = baseRest(function(path, args) {
      return function(object) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * The opposite of `_.method`; this method creates a function that invokes
     * the method at a given path of `object`. Any additional arguments are
     * provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Object} object The object to query.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var array = _.times(3, _.constant),
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
     * // => [2, 0]
     */
    var methodOf = baseRest(function(object, args) {
      return function(path) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * Adds all own enumerable string keyed function properties of a source
     * object to the destination object. If `object` is a function, then methods
     * are added to its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */
    function mixin(object, source, options) {
      var props = keys(source),
          methodNames = baseFunctions(source, props);

      if (options == null &&
          !(isObject(source) && (methodNames.length || !props.length))) {
        options = source;
        source = object;
        object = this;
        methodNames = baseFunctions(source, keys(source));
      }
      var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
          isFunc = isFunction(object);

      arrayEach(methodNames, function(methodName) {
        var func = source[methodName];
        object[methodName] = func;
        if (isFunc) {
          object.prototype[methodName] = function() {
            var chainAll = this.__chain__;
            if (chain || chainAll) {
              var result = object(this.__wrapped__),
                  actions = result.__actions__ = copyArray(this.__actions__);

              actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
              result.__chain__ = chainAll;
              return result;
            }
            return func.apply(object, arrayPush([this.value()], arguments));
          };
        }
      });

      return object;
    }

    /**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */
    function noConflict() {
      if (root._ === this) {
        root._ = oldDash;
      }
      return this;
    }

    /**
     * This method returns `undefined`.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Util
     * @example
     *
     * _.times(2, _.noop);
     * // => [undefined, undefined]
     */
    function noop() {
      // No operation performed.
    }

    /**
     * Creates a function that gets the argument at index `n`. If `n` is negative,
     * the nth argument from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [n=0] The index of the argument to return.
     * @returns {Function} Returns the new pass-thru function.
     * @example
     *
     * var func = _.nthArg(1);
     * func('a', 'b', 'c', 'd');
     * // => 'b'
     *
     * var func = _.nthArg(-2);
     * func('a', 'b', 'c', 'd');
     * // => 'c'
     */
    function nthArg(n) {
      n = toInteger(n);
      return baseRest(function(args) {
        return baseNth(args, n);
      });
    }

    /**
     * Creates a function that invokes `iteratees` with the arguments it receives
     * and returns their results.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.over([Math.max, Math.min]);
     *
     * func(1, 2, 3, 4);
     * // => [4, 1]
     */
    var over = createOver(arrayMap);

    /**
     * Creates a function that checks if **all** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * Following shorthands are possible for providing predicates.
     * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
     * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overEvery([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => false
     *
     * func(NaN);
     * // => false
     */
    var overEvery = createOver(arrayEvery);

    /**
     * Creates a function that checks if **any** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * Following shorthands are possible for providing predicates.
     * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
     * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overSome([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => true
     *
     * func(NaN);
     * // => false
     *
     * var matchesFunc = _.overSome([{ 'a': 1 }, { 'a': 2 }])
     * var matchesPropertyFunc = _.overSome([['a', 1], ['a', 2]])
     */
    var overSome = createOver(arraySome);

    /**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }

    /**
     * The opposite of `_.property`; this method creates a function that returns
     * the value at a given path of `object`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */
    function propertyOf(object) {
      return function(path) {
        return object == null ? undefined$1 : baseGet(object, path);
      };
    }

    /**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
     * `start` is specified without an `end` or `step`. If `end` is not specified,
     * it's set to `start` with `start` then set to `0`.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.rangeRight
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(-4);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */
    var range = createRange();

    /**
     * This method is like `_.range` except that it populates values in
     * descending order.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.range
     * @example
     *
     * _.rangeRight(4);
     * // => [3, 2, 1, 0]
     *
     * _.rangeRight(-4);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 5);
     * // => [4, 3, 2, 1]
     *
     * _.rangeRight(0, 20, 5);
     * // => [15, 10, 5, 0]
     *
     * _.rangeRight(0, -4, -1);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.rangeRight(0);
     * // => []
     */
    var rangeRight = createRange(true);

    /**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */
    function stubArray() {
      return [];
    }

    /**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */
    function stubFalse() {
      return false;
    }

    /**
     * This method returns a new empty object.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Object} Returns the new empty object.
     * @example
     *
     * var objects = _.times(2, _.stubObject);
     *
     * console.log(objects);
     * // => [{}, {}]
     *
     * console.log(objects[0] === objects[1]);
     * // => false
     */
    function stubObject() {
      return {};
    }

    /**
     * This method returns an empty string.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {string} Returns the empty string.
     * @example
     *
     * _.times(2, _.stubString);
     * // => ['', '']
     */
    function stubString() {
      return '';
    }

    /**
     * This method returns `true`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `true`.
     * @example
     *
     * _.times(2, _.stubTrue);
     * // => [true, true]
     */
    function stubTrue() {
      return true;
    }

    /**
     * Invokes the iteratee `n` times, returning an array of the results of
     * each invocation. The iteratee is invoked with one argument; (index).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.times(3, String);
     * // => ['0', '1', '2']
     *
     *  _.times(4, _.constant(0));
     * // => [0, 0, 0, 0]
     */
    function times(n, iteratee) {
      n = toInteger(n);
      if (n < 1 || n > MAX_SAFE_INTEGER) {
        return [];
      }
      var index = MAX_ARRAY_LENGTH,
          length = nativeMin(n, MAX_ARRAY_LENGTH);

      iteratee = getIteratee(iteratee);
      n -= MAX_ARRAY_LENGTH;

      var result = baseTimes(length, iteratee);
      while (++index < n) {
        iteratee(index);
      }
      return result;
    }

    /**
     * Converts `value` to a property path array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {*} value The value to convert.
     * @returns {Array} Returns the new property path array.
     * @example
     *
     * _.toPath('a.b.c');
     * // => ['a', 'b', 'c']
     *
     * _.toPath('a[0].b.c');
     * // => ['a', '0', 'b', 'c']
     */
    function toPath(value) {
      if (isArray(value)) {
        return arrayMap(value, toKey);
      }
      return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
    }

    /**
     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {string} [prefix=''] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */
    function uniqueId(prefix) {
      var id = ++idCounter;
      return toString(prefix) + id;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {number} augend The first number in an addition.
     * @param {number} addend The second number in an addition.
     * @returns {number} Returns the total.
     * @example
     *
     * _.add(6, 4);
     * // => 10
     */
    var add = createMathOperation(function(augend, addend) {
      return augend + addend;
    }, 0);

    /**
     * Computes `number` rounded up to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round up.
     * @param {number} [precision=0] The precision to round up to.
     * @returns {number} Returns the rounded up number.
     * @example
     *
     * _.ceil(4.006);
     * // => 5
     *
     * _.ceil(6.004, 2);
     * // => 6.01
     *
     * _.ceil(6040, -2);
     * // => 6100
     */
    var ceil = createRound('ceil');

    /**
     * Divide two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} dividend The first number in a division.
     * @param {number} divisor The second number in a division.
     * @returns {number} Returns the quotient.
     * @example
     *
     * _.divide(6, 4);
     * // => 1.5
     */
    var divide = createMathOperation(function(dividend, divisor) {
      return dividend / divisor;
    }, 1);

    /**
     * Computes `number` rounded down to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round down.
     * @param {number} [precision=0] The precision to round down to.
     * @returns {number} Returns the rounded down number.
     * @example
     *
     * _.floor(4.006);
     * // => 4
     *
     * _.floor(0.046, 2);
     * // => 0.04
     *
     * _.floor(4060, -2);
     * // => 4000
     */
    var floor = createRound('floor');

    /**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */
    function max(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseGt)
        : undefined$1;
    }

    /**
     * This method is like `_.max` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.maxBy(objects, function(o) { return o.n; });
     * // => { 'n': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.maxBy(objects, 'n');
     * // => { 'n': 2 }
     */
    function maxBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseGt)
        : undefined$1;
    }

    /**
     * Computes the mean of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the mean.
     * @example
     *
     * _.mean([4, 2, 8, 6]);
     * // => 5
     */
    function mean(array) {
      return baseMean(array, identity);
    }

    /**
     * This method is like `_.mean` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be averaged.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the mean.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.meanBy(objects, function(o) { return o.n; });
     * // => 5
     *
     * // The `_.property` iteratee shorthand.
     * _.meanBy(objects, 'n');
     * // => 5
     */
    function meanBy(array, iteratee) {
      return baseMean(array, getIteratee(iteratee, 2));
    }

    /**
     * Computes the minimum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => undefined
     */
    function min(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseLt)
        : undefined$1;
    }

    /**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.n; });
     * // => { 'n': 1 }
     *
     * // The `_.property` iteratee shorthand.
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */
    function minBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseLt)
        : undefined$1;
    }

    /**
     * Multiply two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} multiplier The first number in a multiplication.
     * @param {number} multiplicand The second number in a multiplication.
     * @returns {number} Returns the product.
     * @example
     *
     * _.multiply(6, 4);
     * // => 24
     */
    var multiply = createMathOperation(function(multiplier, multiplicand) {
      return multiplier * multiplicand;
    }, 1);

    /**
     * Computes `number` rounded to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round.
     * @param {number} [precision=0] The precision to round to.
     * @returns {number} Returns the rounded number.
     * @example
     *
     * _.round(4.006);
     * // => 4
     *
     * _.round(4.006, 2);
     * // => 4.01
     *
     * _.round(4060, -2);
     * // => 4100
     */
    var round = createRound('round');

    /**
     * Subtract two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {number} minuend The first number in a subtraction.
     * @param {number} subtrahend The second number in a subtraction.
     * @returns {number} Returns the difference.
     * @example
     *
     * _.subtract(6, 4);
     * // => 2
     */
    var subtract = createMathOperation(function(minuend, subtrahend) {
      return minuend - subtrahend;
    }, 0);

    /**
     * Computes the sum of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 2, 8, 6]);
     * // => 20
     */
    function sum(array) {
      return (array && array.length)
        ? baseSum(array, identity)
        : 0;
    }

    /**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // The `_.property` iteratee shorthand.
     * _.sumBy(objects, 'n');
     * // => 20
     */
    function sumBy(array, iteratee) {
      return (array && array.length)
        ? baseSum(array, getIteratee(iteratee, 2))
        : 0;
    }

    /*------------------------------------------------------------------------*/

    // Add methods that return wrapped values in chain sequences.
    lodash.after = after;
    lodash.ary = ary;
    lodash.assign = assign;
    lodash.assignIn = assignIn;
    lodash.assignInWith = assignInWith;
    lodash.assignWith = assignWith;
    lodash.at = at;
    lodash.before = before;
    lodash.bind = bind;
    lodash.bindAll = bindAll;
    lodash.bindKey = bindKey;
    lodash.castArray = castArray;
    lodash.chain = chain;
    lodash.chunk = chunk;
    lodash.compact = compact;
    lodash.concat = concat;
    lodash.cond = cond;
    lodash.conforms = conforms;
    lodash.constant = constant;
    lodash.countBy = countBy;
    lodash.create = create;
    lodash.curry = curry;
    lodash.curryRight = curryRight;
    lodash.debounce = debounce;
    lodash.defaults = defaults;
    lodash.defaultsDeep = defaultsDeep;
    lodash.defer = defer;
    lodash.delay = delay;
    lodash.difference = difference;
    lodash.differenceBy = differenceBy;
    lodash.differenceWith = differenceWith;
    lodash.drop = drop;
    lodash.dropRight = dropRight;
    lodash.dropRightWhile = dropRightWhile;
    lodash.dropWhile = dropWhile;
    lodash.fill = fill;
    lodash.filter = filter;
    lodash.flatMap = flatMap;
    lodash.flatMapDeep = flatMapDeep;
    lodash.flatMapDepth = flatMapDepth;
    lodash.flatten = flatten;
    lodash.flattenDeep = flattenDeep;
    lodash.flattenDepth = flattenDepth;
    lodash.flip = flip;
    lodash.flow = flow;
    lodash.flowRight = flowRight;
    lodash.fromPairs = fromPairs;
    lodash.functions = functions;
    lodash.functionsIn = functionsIn;
    lodash.groupBy = groupBy;
    lodash.initial = initial;
    lodash.intersection = intersection;
    lodash.intersectionBy = intersectionBy;
    lodash.intersectionWith = intersectionWith;
    lodash.invert = invert;
    lodash.invertBy = invertBy;
    lodash.invokeMap = invokeMap;
    lodash.iteratee = iteratee;
    lodash.keyBy = keyBy;
    lodash.keys = keys;
    lodash.keysIn = keysIn;
    lodash.map = map;
    lodash.mapKeys = mapKeys;
    lodash.mapValues = mapValues;
    lodash.matches = matches;
    lodash.matchesProperty = matchesProperty;
    lodash.memoize = memoize;
    lodash.merge = merge;
    lodash.mergeWith = mergeWith;
    lodash.method = method;
    lodash.methodOf = methodOf;
    lodash.mixin = mixin;
    lodash.negate = negate;
    lodash.nthArg = nthArg;
    lodash.omit = omit;
    lodash.omitBy = omitBy;
    lodash.once = once;
    lodash.orderBy = orderBy;
    lodash.over = over;
    lodash.overArgs = overArgs;
    lodash.overEvery = overEvery;
    lodash.overSome = overSome;
    lodash.partial = partial;
    lodash.partialRight = partialRight;
    lodash.partition = partition;
    lodash.pick = pick;
    lodash.pickBy = pickBy;
    lodash.property = property;
    lodash.propertyOf = propertyOf;
    lodash.pull = pull;
    lodash.pullAll = pullAll;
    lodash.pullAllBy = pullAllBy;
    lodash.pullAllWith = pullAllWith;
    lodash.pullAt = pullAt;
    lodash.range = range;
    lodash.rangeRight = rangeRight;
    lodash.rearg = rearg;
    lodash.reject = reject;
    lodash.remove = remove;
    lodash.rest = rest;
    lodash.reverse = reverse;
    lodash.sampleSize = sampleSize;
    lodash.set = set;
    lodash.setWith = setWith;
    lodash.shuffle = shuffle;
    lodash.slice = slice;
    lodash.sortBy = sortBy;
    lodash.sortedUniq = sortedUniq;
    lodash.sortedUniqBy = sortedUniqBy;
    lodash.split = split;
    lodash.spread = spread;
    lodash.tail = tail;
    lodash.take = take;
    lodash.takeRight = takeRight;
    lodash.takeRightWhile = takeRightWhile;
    lodash.takeWhile = takeWhile;
    lodash.tap = tap;
    lodash.throttle = throttle;
    lodash.thru = thru;
    lodash.toArray = toArray;
    lodash.toPairs = toPairs;
    lodash.toPairsIn = toPairsIn;
    lodash.toPath = toPath;
    lodash.toPlainObject = toPlainObject;
    lodash.transform = transform;
    lodash.unary = unary;
    lodash.union = union;
    lodash.unionBy = unionBy;
    lodash.unionWith = unionWith;
    lodash.uniq = uniq;
    lodash.uniqBy = uniqBy;
    lodash.uniqWith = uniqWith;
    lodash.unset = unset;
    lodash.unzip = unzip;
    lodash.unzipWith = unzipWith;
    lodash.update = update;
    lodash.updateWith = updateWith;
    lodash.values = values;
    lodash.valuesIn = valuesIn;
    lodash.without = without;
    lodash.words = words;
    lodash.wrap = wrap;
    lodash.xor = xor;
    lodash.xorBy = xorBy;
    lodash.xorWith = xorWith;
    lodash.zip = zip;
    lodash.zipObject = zipObject;
    lodash.zipObjectDeep = zipObjectDeep;
    lodash.zipWith = zipWith;

    // Add aliases.
    lodash.entries = toPairs;
    lodash.entriesIn = toPairsIn;
    lodash.extend = assignIn;
    lodash.extendWith = assignInWith;

    // Add methods to `lodash.prototype`.
    mixin(lodash, lodash);

    /*------------------------------------------------------------------------*/

    // Add methods that return unwrapped values in chain sequences.
    lodash.add = add;
    lodash.attempt = attempt;
    lodash.camelCase = camelCase;
    lodash.capitalize = capitalize;
    lodash.ceil = ceil;
    lodash.clamp = clamp;
    lodash.clone = clone;
    lodash.cloneDeep = cloneDeep;
    lodash.cloneDeepWith = cloneDeepWith;
    lodash.cloneWith = cloneWith;
    lodash.conformsTo = conformsTo;
    lodash.deburr = deburr;
    lodash.defaultTo = defaultTo;
    lodash.divide = divide;
    lodash.endsWith = endsWith;
    lodash.eq = eq;
    lodash.escape = escape;
    lodash.escapeRegExp = escapeRegExp;
    lodash.every = every;
    lodash.find = find;
    lodash.findIndex = findIndex;
    lodash.findKey = findKey;
    lodash.findLast = findLast;
    lodash.findLastIndex = findLastIndex;
    lodash.findLastKey = findLastKey;
    lodash.floor = floor;
    lodash.forEach = forEach;
    lodash.forEachRight = forEachRight;
    lodash.forIn = forIn;
    lodash.forInRight = forInRight;
    lodash.forOwn = forOwn;
    lodash.forOwnRight = forOwnRight;
    lodash.get = get;
    lodash.gt = gt;
    lodash.gte = gte;
    lodash.has = has;
    lodash.hasIn = hasIn;
    lodash.head = head;
    lodash.identity = identity;
    lodash.includes = includes;
    lodash.indexOf = indexOf;
    lodash.inRange = inRange;
    lodash.invoke = invoke;
    lodash.isArguments = isArguments;
    lodash.isArray = isArray;
    lodash.isArrayBuffer = isArrayBuffer;
    lodash.isArrayLike = isArrayLike;
    lodash.isArrayLikeObject = isArrayLikeObject;
    lodash.isBoolean = isBoolean;
    lodash.isBuffer = isBuffer;
    lodash.isDate = isDate;
    lodash.isElement = isElement;
    lodash.isEmpty = isEmpty;
    lodash.isEqual = isEqual;
    lodash.isEqualWith = isEqualWith;
    lodash.isError = isError;
    lodash.isFinite = isFinite;
    lodash.isFunction = isFunction;
    lodash.isInteger = isInteger;
    lodash.isLength = isLength;
    lodash.isMap = isMap;
    lodash.isMatch = isMatch;
    lodash.isMatchWith = isMatchWith;
    lodash.isNaN = isNaN;
    lodash.isNative = isNative;
    lodash.isNil = isNil;
    lodash.isNull = isNull;
    lodash.isNumber = isNumber;
    lodash.isObject = isObject;
    lodash.isObjectLike = isObjectLike;
    lodash.isPlainObject = isPlainObject;
    lodash.isRegExp = isRegExp;
    lodash.isSafeInteger = isSafeInteger;
    lodash.isSet = isSet;
    lodash.isString = isString;
    lodash.isSymbol = isSymbol;
    lodash.isTypedArray = isTypedArray;
    lodash.isUndefined = isUndefined;
    lodash.isWeakMap = isWeakMap;
    lodash.isWeakSet = isWeakSet;
    lodash.join = join;
    lodash.kebabCase = kebabCase;
    lodash.last = last;
    lodash.lastIndexOf = lastIndexOf;
    lodash.lowerCase = lowerCase;
    lodash.lowerFirst = lowerFirst;
    lodash.lt = lt;
    lodash.lte = lte;
    lodash.max = max;
    lodash.maxBy = maxBy;
    lodash.mean = mean;
    lodash.meanBy = meanBy;
    lodash.min = min;
    lodash.minBy = minBy;
    lodash.stubArray = stubArray;
    lodash.stubFalse = stubFalse;
    lodash.stubObject = stubObject;
    lodash.stubString = stubString;
    lodash.stubTrue = stubTrue;
    lodash.multiply = multiply;
    lodash.nth = nth;
    lodash.noConflict = noConflict;
    lodash.noop = noop;
    lodash.now = now;
    lodash.pad = pad;
    lodash.padEnd = padEnd;
    lodash.padStart = padStart;
    lodash.parseInt = parseInt;
    lodash.random = random;
    lodash.reduce = reduce;
    lodash.reduceRight = reduceRight;
    lodash.repeat = repeat;
    lodash.replace = replace;
    lodash.result = result;
    lodash.round = round;
    lodash.runInContext = runInContext;
    lodash.sample = sample;
    lodash.size = size;
    lodash.snakeCase = snakeCase;
    lodash.some = some;
    lodash.sortedIndex = sortedIndex;
    lodash.sortedIndexBy = sortedIndexBy;
    lodash.sortedIndexOf = sortedIndexOf;
    lodash.sortedLastIndex = sortedLastIndex;
    lodash.sortedLastIndexBy = sortedLastIndexBy;
    lodash.sortedLastIndexOf = sortedLastIndexOf;
    lodash.startCase = startCase;
    lodash.startsWith = startsWith;
    lodash.subtract = subtract;
    lodash.sum = sum;
    lodash.sumBy = sumBy;
    lodash.template = template;
    lodash.times = times;
    lodash.toFinite = toFinite;
    lodash.toInteger = toInteger;
    lodash.toLength = toLength;
    lodash.toLower = toLower;
    lodash.toNumber = toNumber;
    lodash.toSafeInteger = toSafeInteger;
    lodash.toString = toString;
    lodash.toUpper = toUpper;
    lodash.trim = trim;
    lodash.trimEnd = trimEnd;
    lodash.trimStart = trimStart;
    lodash.truncate = truncate;
    lodash.unescape = unescape;
    lodash.uniqueId = uniqueId;
    lodash.upperCase = upperCase;
    lodash.upperFirst = upperFirst;

    // Add aliases.
    lodash.each = forEach;
    lodash.eachRight = forEachRight;
    lodash.first = head;

    mixin(lodash, (function() {
      var source = {};
      baseForOwn(lodash, function(func, methodName) {
        if (!hasOwnProperty.call(lodash.prototype, methodName)) {
          source[methodName] = func;
        }
      });
      return source;
    }()), { 'chain': false });

    /*------------------------------------------------------------------------*/

    /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */
    lodash.VERSION = VERSION;

    // Assign default placeholders.
    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
      lodash[methodName].placeholder = lodash;
    });

    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
    arrayEach(['drop', 'take'], function(methodName, index) {
      LazyWrapper.prototype[methodName] = function(n) {
        n = n === undefined$1 ? 1 : nativeMax(toInteger(n), 0);

        var result = (this.__filtered__ && !index)
          ? new LazyWrapper(this)
          : this.clone();

        if (result.__filtered__) {
          result.__takeCount__ = nativeMin(n, result.__takeCount__);
        } else {
          result.__views__.push({
            'size': nativeMin(n, MAX_ARRAY_LENGTH),
            'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
          });
        }
        return result;
      };

      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
        return this.reverse()[methodName](n).reverse();
      };
    });

    // Add `LazyWrapper` methods that accept an `iteratee` value.
    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
      var type = index + 1,
          isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;

      LazyWrapper.prototype[methodName] = function(iteratee) {
        var result = this.clone();
        result.__iteratees__.push({
          'iteratee': getIteratee(iteratee, 3),
          'type': type
        });
        result.__filtered__ = result.__filtered__ || isFilter;
        return result;
      };
    });

    // Add `LazyWrapper` methods for `_.head` and `_.last`.
    arrayEach(['head', 'last'], function(methodName, index) {
      var takeName = 'take' + (index ? 'Right' : '');

      LazyWrapper.prototype[methodName] = function() {
        return this[takeName](1).value()[0];
      };
    });

    // Add `LazyWrapper` methods for `_.initial` and `_.tail`.
    arrayEach(['initial', 'tail'], function(methodName, index) {
      var dropName = 'drop' + (index ? '' : 'Right');

      LazyWrapper.prototype[methodName] = function() {
        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
      };
    });

    LazyWrapper.prototype.compact = function() {
      return this.filter(identity);
    };

    LazyWrapper.prototype.find = function(predicate) {
      return this.filter(predicate).head();
    };

    LazyWrapper.prototype.findLast = function(predicate) {
      return this.reverse().find(predicate);
    };

    LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
      if (typeof path == 'function') {
        return new LazyWrapper(this);
      }
      return this.map(function(value) {
        return baseInvoke(value, path, args);
      });
    });

    LazyWrapper.prototype.reject = function(predicate) {
      return this.filter(negate(getIteratee(predicate)));
    };

    LazyWrapper.prototype.slice = function(start, end) {
      start = toInteger(start);

      var result = this;
      if (result.__filtered__ && (start > 0 || end < 0)) {
        return new LazyWrapper(result);
      }
      if (start < 0) {
        result = result.takeRight(-start);
      } else if (start) {
        result = result.drop(start);
      }
      if (end !== undefined$1) {
        end = toInteger(end);
        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
      }
      return result;
    };

    LazyWrapper.prototype.takeRightWhile = function(predicate) {
      return this.reverse().takeWhile(predicate).reverse();
    };

    LazyWrapper.prototype.toArray = function() {
      return this.take(MAX_ARRAY_LENGTH);
    };

    // Add `LazyWrapper` methods to `lodash.prototype`.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
          isTaker = /^(?:head|last)$/.test(methodName),
          lodashFunc = lodash[isTaker ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName],
          retUnwrapped = isTaker || /^find/.test(methodName);

      if (!lodashFunc) {
        return;
      }
      lodash.prototype[methodName] = function() {
        var value = this.__wrapped__,
            args = isTaker ? [1] : arguments,
            isLazy = value instanceof LazyWrapper,
            iteratee = args[0],
            useLazy = isLazy || isArray(value);

        var interceptor = function(value) {
          var result = lodashFunc.apply(lodash, arrayPush([value], args));
          return (isTaker && chainAll) ? result[0] : result;
        };

        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
          // Avoid lazy use if the iteratee has a "length" value other than `1`.
          isLazy = useLazy = false;
        }
        var chainAll = this.__chain__,
            isHybrid = !!this.__actions__.length,
            isUnwrapped = retUnwrapped && !chainAll,
            onlyLazy = isLazy && !isHybrid;

        if (!retUnwrapped && useLazy) {
          value = onlyLazy ? value : new LazyWrapper(this);
          var result = func.apply(value, args);
          result.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined$1 });
          return new LodashWrapper(result, chainAll);
        }
        if (isUnwrapped && onlyLazy) {
          return func.apply(this, args);
        }
        result = this.thru(interceptor);
        return isUnwrapped ? (isTaker ? result.value()[0] : result.value()) : result;
      };
    });

    // Add `Array` methods to `lodash.prototype`.
    arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
      var func = arrayProto[methodName],
          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
          retUnwrapped = /^(?:pop|shift)$/.test(methodName);

      lodash.prototype[methodName] = function() {
        var args = arguments;
        if (retUnwrapped && !this.__chain__) {
          var value = this.value();
          return func.apply(isArray(value) ? value : [], args);
        }
        return this[chainName](function(value) {
          return func.apply(isArray(value) ? value : [], args);
        });
      };
    });

    // Map minified method names to their real names.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var lodashFunc = lodash[methodName];
      if (lodashFunc) {
        var key = lodashFunc.name + '';
        if (!hasOwnProperty.call(realNames, key)) {
          realNames[key] = [];
        }
        realNames[key].push({ 'name': methodName, 'func': lodashFunc });
      }
    });

    realNames[createHybrid(undefined$1, WRAP_BIND_KEY_FLAG).name] = [{
      'name': 'wrapper',
      'func': undefined$1
    }];

    // Add methods to `LazyWrapper`.
    LazyWrapper.prototype.clone = lazyClone;
    LazyWrapper.prototype.reverse = lazyReverse;
    LazyWrapper.prototype.value = lazyValue;

    // Add chain sequence methods to the `lodash` wrapper.
    lodash.prototype.at = wrapperAt;
    lodash.prototype.chain = wrapperChain;
    lodash.prototype.commit = wrapperCommit;
    lodash.prototype.next = wrapperNext;
    lodash.prototype.plant = wrapperPlant;
    lodash.prototype.reverse = wrapperReverse;
    lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

    // Add lazy aliases.
    lodash.prototype.first = lodash.prototype.head;

    if (symIterator) {
      lodash.prototype[symIterator] = wrapperToIterator;
    }
    return lodash;
  });

  /*--------------------------------------------------------------------------*/

  // Export lodash.
  var _ = runInContext();

  // Some AMD build optimizers, like r.js, check for condition patterns like:
  if (freeModule) {
    // Export for Node.js.
    (freeModule.exports = _)._ = _;
    // Export for CommonJS support.
    freeExports._ = _;
  }
  else {
    // Export to the global object.
    root._ = _;
  }
}.call(commonjsGlobal));
});

var results = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Value = exports.Arity = void 0;

class Arity {
    constructor(rows, columns) {
        this.isRow = () => this.rows > 1 && this.cols === 1;
        this.isColumn = () => this.rows === 1 && this.cols > 1;
        this.isCell = () => this.rows === 1 && this.cols === 1;
        this.rows = rows;
        this.cols = columns;
    }
}
exports.Arity = Arity;
class Value {
    constructor(val) {
        this.get = (row, column) => this.val[row][column];
        this.getAsFloat = (row, column) => {
            const parsed = parseFloat(this.get(row, column));
            return isNaN(parsed) ? 0 : parsed;
        };
        this.getAsInt = (row, column) => {
            const parsed = parseInt(this.get(row, column));
            return isNaN(parsed) ? 0 : parsed;
        };
        /**
         * getArity returns the dimensions of the contained value, in rows and columns
         */
        this.getArity = () => {
            const maxCols = this.val.reduce((max, currentRow) => Math.max(max, currentRow.length), 0);
            return new Arity(this.val.length, maxCols);
        };
        this.toString = () => {
            if (this.getArity().isCell()) {
                return this.get(0, 0);
            }
            return `[${lodash.flatten(this.val)
                .map((val) => val.trim())
                .filter((val) => val !== '')
                .join(', ')}]`;
        };
        this.val = val;
    }
}
exports.Value = Value;
});

var algebraic_operation = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlgebraicOperation = void 0;





class AlgebraicOperation {
    constructor(ast, table) {
        this.getValue = (table, cell) => {
            switch (this.operator) {
                case '+':
                    return this.add(table, cell);
                case '-':
                    return this.subtract(table, cell);
                case '*':
                    return this.multiply(table, cell);
                case '/':
                    return this.divide(table, cell);
                default:
                    return neverthrow.err(Error('Invalid algbraic operator: ' + this.operator));
            }
        };
        /**
         * withCellAndRange aids in performing a numeric operation on cells in a
         * table where at least one of the two operands is a single cell. Optionally,
         * the two sides of the operation can be swapped, so the single cell is
         * always on the right.
         */
        this.withCellAndRange = (table, cell, name, canHaveRightRange, fn) => {
            const leftValue = this.leftSource.getValue(table, cell);
            if (leftValue.isErr()) {
                return neverthrow.err(leftValue.error);
            }
            const rightValue = this.rightSource.getValue(table, cell);
            if (rightValue.isErr()) {
                return neverthrow.err(rightValue.error);
            }
            const leftArity = leftValue.value.getArity();
            const rightArity = rightValue.value.getArity();
            if (!rightArity.isCell() && !leftArity.isCell()) {
                return neverthrow.err(Error(`At least one operand in algebraic "${name}" must be a single cell.`));
            }
            if (!rightArity.isCell() && !canHaveRightRange) {
                return neverthrow.err(Error(`Right operand in algebraic "${name}" must be a single cell.`));
            }
            if (rightArity.isCell()) {
                const rightCellValue = rightValue.value.getAsFloat(0, 0);
                const result = lodash.map(leftValue.value.val, (currentRow) => lodash.map(currentRow, (currentCell) => {
                    let leftCellValue = parseFloat(currentCell);
                    if (isNaN(leftCellValue)) {
                        leftCellValue = 0;
                    }
                    return fn(leftCellValue, rightCellValue).toString();
                }));
                return neverthrow.ok(new results.Value(result));
            }
            const leftCellValue = leftValue.value.getAsFloat(0, 0);
            const result = lodash.map(rightValue.value.val, (currentRow) => lodash.map(currentRow, (currentCell) => {
                let rightCellValue = parseFloat(currentCell);
                if (isNaN(leftCellValue)) {
                    rightCellValue = 0;
                }
                return fn(leftCellValue, rightCellValue).toString();
            }));
            return neverthrow.ok(new results.Value(result));
        };
        this.add = (table, cell) => this.withCellAndRange(table, cell, 'add', true, (left, right) => left + right);
        this.subtract = (table, cell) => this.withCellAndRange(table, cell, 'subtract', true, (left, right) => left - right);
        this.multiply = (table, cell) => this.withCellAndRange(table, cell, 'multiply', true, (left, right) => left * right);
        this.divide = (table, cell) => this.withCellAndRange(table, cell, 'divide', false, (left, right) => left / right);
        const typeErr = ast_utils.checkType(ast, 'algebraic_operation');
        if (typeErr) {
            throw typeErr;
        }
        const lengthError = ast_utils.checkChildLength(ast, 3);
        if (lengthError) {
            throw lengthError;
        }
        const childTypeErr = ast_utils.checkType(ast.children[1], 'algebraic_operator');
        if (childTypeErr) {
            throw childTypeErr;
        }
        this.operator = ast.children[1].text;
        try {
            this.leftSource = new calc.Source(ast.children[0], table);
            this.rightSource = new calc.Source(ast.children[2], table);
        }
        catch (error) {
            // Still in a constructor, so nothing we can do but throw again
            throw error;
        }
    }
}
exports.AlgebraicOperation = AlgebraicOperation;
});

var conditional_function = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConditionalFunctionCall = void 0;



class ConditionalFunctionCall {
    constructor(ast, table) {
        this.getValue = (table, cell) => this.predicate
            .eval(table, cell)
            .andThen((predicateResult) => predicateResult
            ? this.leftSource.getValue(table, cell)
            : this.rightSource.getValue(table, cell));
        const typeError = ast_utils.checkType(ast, 'conditional_function_call');
        if (typeError) {
            throw typeError;
        }
        const lengthError = ast_utils.checkChildLength(ast, 3);
        if (lengthError) {
            throw lengthError;
        }
        try {
            this.predicate = new Predicate(ast.children[0], table);
            this.leftSource = new calc.Source(ast.children[1], table);
            this.rightSource = new calc.Source(ast.children[2], table);
        }
        catch (error) {
            // Still in a constructor, so nothing we can do but throw again
            throw error;
        }
    }
}
exports.ConditionalFunctionCall = ConditionalFunctionCall;
class Predicate {
    constructor(ast, table) {
        this.eval = (table, cell) => {
            const leftData = this.leftSource.getValue(table, cell);
            if (leftData.isErr()) {
                return neverthrow.err(leftData.error);
            }
            const rightData = this.rightSource.getValue(table, cell);
            if (rightData.isErr()) {
                return neverthrow.err(rightData.error);
            }
            const leftArity = leftData.value.getArity();
            const rightArity = rightData.value.getArity();
            if (!leftArity.isCell()) {
                return neverthrow.err(Error('Can only use comparison operator on a single cell. Left side is not a cell.'));
            }
            if (!rightArity.isCell()) {
                return neverthrow.err(Error('Can only use comparison operator on a single cell. Right side is not a cell.'));
            }
            const leftVal = leftData.value.getAsFloat(0, 0);
            const rightVal = rightData.value.getAsFloat(0, 0);
            switch (this.operator) {
                case '>':
                    return neverthrow.ok(leftVal > rightVal);
                case '>=':
                    return neverthrow.ok(leftVal >= rightVal);
                case '<':
                    return neverthrow.ok(leftVal < rightVal);
                case '<=':
                    return neverthrow.ok(leftVal <= rightVal);
                case '==':
                    return neverthrow.ok(leftVal === rightVal);
                case '!=':
                    return neverthrow.ok(leftVal !== rightVal);
                default:
                    return neverthrow.err(Error('Invalid conditional operator: ' + this.operator));
            }
        };
        const typeError = ast_utils.checkType(ast, 'predicate');
        if (typeError) {
            throw typeError;
        }
        const lengthError = ast_utils.checkChildLength(ast, 3);
        if (lengthError) {
            throw lengthError;
        }
        const childTypeError = ast_utils.checkType(ast.children[1], 'conditional_operator');
        if (childTypeError) {
            throw childTypeError;
        }
        this.operator = ast.children[1].text;
        try {
            this.leftSource = new calc.Source(ast.children[0], table);
            this.rightSource = new calc.Source(ast.children[2], table);
        }
        catch (error) {
            // Still in a constructor, so nothing we can do but throw again
            throw error;
        }
    }
}
});

var constant = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constant = void 0;



class Constant {
    constructor(ast, table) {
        const typeErr = ast_utils.checkType(ast, 'real', 'float');
        if (typeErr) {
            throw typeErr;
        }
        const multiplier = ast.text[0] === '-' ? -1 : 1;
        if (ast.type === 'real') {
            this.value = multiplier * parseInt(ast.children[0].text);
        }
        else {
            this.value =
                multiplier *
                    parseFloat(ast.children[0].text + '.' + ast.children[1].text);
        }
    }
    getValue(table, currentCell) {
        return neverthrow.ok(new results.Value([[this.value.toString()]]));
    }
}
exports.Constant = Constant;
});

var column = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbsoluteColumn = exports.Column = exports.newColumn = void 0;



const newColumn = (ast, table) => {
    try {
        switch (ast.type) {
            case 'relative_column':
                return neverthrow.ok(new RelativeColumn(ast, table));
            case 'absolute_column':
                return neverthrow.ok(new AbsoluteColumn(ast, table));
            default:
                return neverthrow.err(new Error(`Formula element '${ast.text}' is a ${ast.type} but expected an ` +
                    'relatve_column or absolute_column in this position.'));
        }
    }
    catch (error) {
        return neverthrow.err(error);
    }
};
exports.newColumn = newColumn;
class Column {
    constructor() {
        this.getValue = (table, currentCell) => {
            var _a;
            const val = ((_a = table.getCellAt(currentCell.row, this.getIndex(currentCell))) === null || _a === void 0 ? void 0 : _a.toText()) ||
                '';
            return neverthrow.ok(new results.Value([[val]]));
        };
    }
}
exports.Column = Column;
class RelativeColumn extends Column {
    constructor(ast, table) {
        super();
        this.getIndex = (currentCell) => currentCell.column + this.offset;
        this.getAbsoluteIndex = () => neverthrow.err(ast_utils.errRelativeReferenceIndex);
        const typeError = ast_utils.checkType(ast, 'relative_column');
        if (typeError) {
            throw typeError;
        }
        const lengthError = ast_utils.checkChildLength(ast, 1);
        if (lengthError) {
            throw lengthError;
        }
        const multiplier = ast.text[1] === '-' ? -1 : 1;
        this.offset = multiplier * parseInt(ast.children[0].text);
    }
}
class AbsoluteColumn extends Column {
    constructor(ast, table) {
        super();
        this.getIndex = (currentCell) => this.index;
        this.getAbsoluteIndex = () => neverthrow.ok(this.index);
        let index = -1;
        let symbol = '';
        switch (ast.children.length) {
            case 0:
                symbol = ast.text[1];
                break;
            case 1:
                const typeError = ast_utils.checkType(ast.children[0], 'int');
                if (typeError) {
                    throw neverthrow.err(typeError);
                }
                index = parseInt(ast.children[0].text);
                break;
            default:
                throw new Error(`Formula element '${ast.text}' is a ${ast.type} but expected ` +
                    'a \'absolute_column\' in this position.');
        }
        switch (symbol) {
            case '':
                break;
            case '<':
                index = 1;
                break;
            case '>':
                index = table.getWidth();
                break;
            default:
                throw new Error(`Invalid column symbol '${symbol}'`);
        }
        if (index === 0) {
            throw ast_utils.errIndex0;
        }
        this.index = index - 1; // -1 for being zero indexed
    }
}
exports.AbsoluteColumn = AbsoluteColumn;
});

var row = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbsoluteRow = exports.Row = exports.newRow = void 0;



const newRow = (ast, table) => {
    try {
        switch (ast.type) {
            case 'relative_row':
                return neverthrow.ok(new RelativeRow(ast, table));
            case 'absolute_row':
                return neverthrow.ok(new AbsoluteRow(ast, table));
            default:
                return neverthrow.err(new Error(`Formula element '${ast.text}' is a ${ast.type} but expected an ` +
                    'relatve_row or absolute_row  in this position.'));
        }
    }
    catch (error) {
        return neverthrow.err(error);
    }
};
exports.newRow = newRow;
class Row {
    constructor() {
        this.getValue = (table, currentCell) => {
            var _a;
            const val = ((_a = table
                .getCellAt(this.getIndex(currentCell), currentCell.column)) === null || _a === void 0 ? void 0 : _a.toText()) || '';
            return neverthrow.ok(new results.Value([[val]]));
        };
    }
}
exports.Row = Row;
class RelativeRow extends Row {
    constructor(ast, table) {
        super();
        this.getIndex = (currentCell) => currentCell.row + this.offset;
        this.getAbsoluteIndex = () => neverthrow.err(ast_utils.errRelativeReferenceIndex);
        const typeError = ast_utils.checkType(ast, 'relative_row');
        if (typeError) {
            throw typeError;
        }
        const lengthError = ast_utils.checkChildLength(ast, 1);
        if (lengthError) {
            throw lengthError;
        }
        const multiplier = ast.text[1] === '-' ? -1 : 1;
        this.offset = multiplier * parseInt(ast.children[0].text);
    }
}
class AbsoluteRow extends Row {
    constructor(ast, table) {
        super();
        this.getIndex = (currentCell) => this.index;
        this.getAbsoluteIndex = () => neverthrow.ok(this.index);
        let index = -1;
        let symbol = '';
        switch (ast.children.length) {
            case 0:
                symbol = ast.text[1];
                break;
            case 1:
                const typeError = ast_utils.checkType(ast.children[0], 'int');
                if (typeError) {
                    throw neverthrow.err(typeError);
                }
                index = parseInt(ast.children[0].text);
                break;
            default:
                throw new Error(`Formula element '${ast.text}' is a ${ast.type} but expected ` +
                    'a \'absolute_row\' in this position.');
        }
        switch (symbol) {
            case '':
                break;
            case '<':
                index = 1;
                break;
            case '>':
                index = table.getHeight() - 1;
                break;
            case 'I':
                index = 2;
                break;
            default:
                throw new Error(`Invalid row symbol '${symbol}'`);
        }
        if (index === 0) {
            throw ast_utils.errIndex0;
        }
        if (index === 1) {
            this.index = 0; // account for being zero indexed
        }
        else {
            this.index = index; // -1 for being zero indexed, but plus 1 to skip header
        }
    }
}
exports.AbsoluteRow = AbsoluteRow;
});

var reference = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reference = void 0;





class Reference {
    constructor(ast, table) {
        this.getValue = (table, currentCell) => {
            var _a;
            const cell = {
                row: this.row ? this.row.getIndex(currentCell) : currentCell.row,
                column: this.column
                    ? this.column.getIndex(currentCell)
                    : currentCell.column,
            };
            const val = ((_a = table.getCellAt(cell.row, cell.column)) === null || _a === void 0 ? void 0 : _a.toText()) || '';
            return neverthrow.ok(new results.Value([[val]]));
        };
        const typeErr = ast_utils.checkType(ast, 'source_reference', 'absolute_reference', 'relative_reference');
        if (typeErr) {
            throw typeErr;
        }
        for (let i = 0; i < ast.children.length; i++) {
            const child = ast.children[i];
            switch (child.type) {
                case 'relative_row':
                case 'absolute_row':
                    if (this.row !== undefined) {
                        throw Error('Reference may only have at most 1 row, more than 1 provided');
                    }
                    const createdRow = row.newRow(child, table);
                    if (createdRow.isErr()) {
                        if (createdRow.error === ast_utils.errIndex0) {
                            // not actually an error, just indicates using current index
                            break;
                        }
                        throw createdRow.error;
                    }
                    this.row = createdRow.value;
                    break;
                case 'relative_column':
                case 'absolute_column':
                    if (this.column !== undefined) {
                        throw Error('Reference may only have at most 1 column, more than 1 provided');
                    }
                    const createdCol = column.newColumn(child, table);
                    if (createdCol.isErr()) {
                        if (createdCol.error === ast_utils.errIndex0) {
                            // not actually an error, just indicates using current index
                            break;
                        }
                        throw createdCol.error;
                    }
                    this.column = createdCol.value;
                    break;
            }
        }
    }
}
exports.Reference = Reference;
});

var range$1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Range = void 0;





class Range {
    constructor(ast, table) {
        this.getValue = (table, currentCell) => {
            // if no start column is provided, copy it from the currentCell
            const startColumn = this.startColumn
                ? this.startColumn.getIndex(currentCell)
                : currentCell.column;
            // if the column is provided in the first set, but not the second, copy it
            const endColumn = this.endColumn
                ? this.endColumn.getIndex(currentCell)
                : startColumn;
            const startRow = this.startRow
                ? this.startRow.getIndex(currentCell)
                : currentCell.row;
            const endRow = this.endRow
                ? this.endRow.getIndex(currentCell)
                : currentCell.row;
            return neverthrow.ok(new results.Value(lodash.map(lodash.range(startRow, endRow + 1), (row) => lodash.map(lodash.range(startColumn, endColumn + 1), (col) => { var _a; return ((_a = table.getCellAt(row, col)) === null || _a === void 0 ? void 0 : _a.toText()) || ''; }))));
        };
        // There needs to be a distinction between ranges for source and destination
        // a destination range does not allow relative references, which would
        // solve this issue with getting the index.
        this.asCells = () => {
            if (!this.startColumn || !this.startRow || !this.endRow) {
                return neverthrow.err(new Error('A range used as a desintation must define rows and cells'));
            }
            // If the second reference in the range does not include a column,
            // use the start column.
            let endColumn = this.endColumn;
            if (!endColumn) {
                endColumn = this.startColumn;
            }
            const startRowIndex = this.startRow.getAbsoluteIndex();
            const endRowIndex = this.endRow.getAbsoluteIndex();
            const startColumnIndex = this.startColumn.getAbsoluteIndex();
            const endColumnIndex = endColumn.getAbsoluteIndex();
            if (startRowIndex.isErr() ||
                endRowIndex.isErr() ||
                startColumnIndex.isErr() ||
                endColumnIndex.isErr()) {
                return neverthrow.err(new Error('A relative range can not be used in a formula destination'));
            }
            const minRow = Math.min(startRowIndex.value, endRowIndex.value);
            const maxRow = Math.max(startRowIndex.value, endRowIndex.value);
            const minColumn = Math.min(startColumnIndex.value, endColumnIndex.value);
            const maxColumn = Math.max(startColumnIndex.value, endColumnIndex.value);
            return neverthrow.ok(lodash.flatMap(lodash.range(minRow, maxRow + 1), (rowNum) => lodash.range(minColumn, maxColumn + 1).map((colNum) => ({ row: rowNum, column: colNum }))));
        };
        let typeErr = ast_utils.checkType(ast, 'range');
        if (typeErr) {
            throw typeErr;
        }
        let lengthError = ast_utils.checkChildLength(ast, 2);
        if (lengthError) {
            throw lengthError;
        }
        const startChild = ast.children[0];
        const endChild = ast.children[1];
        typeErr = ast_utils.checkType(startChild, 'source_reference');
        if (typeErr) {
            throw typeErr;
        }
        typeErr = ast_utils.checkType(endChild, 'source_reference');
        if (typeErr) {
            throw typeErr;
        }
        lengthError = ast_utils.checkChildLength(startChild, 1);
        if (lengthError) {
            throw lengthError;
        }
        lengthError = ast_utils.checkChildLength(endChild, 1);
        if (lengthError) {
            throw lengthError;
        }
        const start = new reference.Reference(startChild.children[0], table);
        const end = new reference.Reference(endChild.children[0], table);
        if ((start.row && !end.row) || (end.row && !start.row)) {
            throw new Error('Range must use references of the same kind');
        }
        // Must provide at least a row or a column, but if the first value has a
        // column but the second does not, then copy the first col to second.
        if (!start.row && !start.column) {
            console.log(start);
            throw new Error('Range must have a row or a column defined');
        }
        if (start.row) {
            this.startRow = start.row;
        }
        if (start.column) {
            this.startColumn = start.column;
        }
        if (end.row) {
            this.endRow = end.row;
        }
        if (end.column) {
            this.endColumn = end.column;
        }
        else {
            this.endColumn = start.column;
        }
    }
}
exports.Range = Range;
});

var destination = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangeDestination = exports.CellDestination = exports.ColumnDestination = exports.RowDestination = exports.newDestination = void 0;






const newDestination = (ast, table, formatter) => {
    const typeErr = ast_utils.checkType(ast, 'destination');
    if (typeErr) {
        return neverthrow.err(typeErr);
    }
    const lengthError = ast_utils.checkChildLength(ast, 1);
    if (lengthError) {
        return neverthrow.err(lengthError);
    }
    const child = ast.children[0];
    if (child.type === 'range') {
        return neverthrow.ok(new RangeDestination(child, table, formatter));
    }
    // must be either an absolute_reference
    try {
        switch (child.children.length) {
            case 2:
                return neverthrow.ok(new CellDestination(child, table, formatter));
            case 1:
                const innerChild = child.children[0];
                if (innerChild.type === 'absolute_row') {
                    return neverthrow.ok(new RowDestination(child, table, formatter));
                }
                else if (innerChild.type === 'absolute_column') {
                    return neverthrow.ok(new ColumnDestination(child, table, formatter));
                }
            default:
                return neverthrow.err(new Error('Unexpected destination type ' + child.type));
        }
    }
    catch (error) {
        if (error === ast_utils.errIndex0) {
            return neverthrow.err(new Error('Index 0 may not be used in a destination'));
        }
        return neverthrow.err(error);
    }
};
exports.newDestination = newDestination;
class RowDestination {
    constructor(ast, table, formatter) {
        this.merge = (source, table) => {
            // for cell in row...
            const cells = lodash.range(0, table.getWidth()).map((columnNum) => ({ row: this.row.index, column: columnNum }));
            return mergeForCells(source, table, cells, this.formatter);
        };
        this.formatter = formatter;
        const typeErr = ast_utils.checkType(ast, 'absolute_reference');
        if (typeErr) {
            throw typeErr;
        }
        const lengthError = ast_utils.checkChildLength(ast, 1);
        if (lengthError) {
            throw lengthError;
        }
        const child = ast.children[0];
        try {
            this.row = new row.AbsoluteRow(child, table);
        }
        catch (error) {
            // In a constructor, so we must throw
            throw error;
        }
    }
}
exports.RowDestination = RowDestination;
class ColumnDestination {
    constructor(ast, table, formatter) {
        this.merge = (source, table) => {
            // for cell in column (excluding header)...
            const cells = lodash.range(2, table.getHeight()).map((rowNum) => ({ row: rowNum, column: this.column.index }));
            return mergeForCells(source, table, cells, this.formatter);
        };
        this.formatter = formatter;
        const typeErr = ast_utils.checkType(ast, 'absolute_reference');
        if (typeErr) {
            throw typeErr;
        }
        const lengthError = ast_utils.checkChildLength(ast, 1);
        if (lengthError) {
            throw lengthError;
        }
        const child = ast.children[0];
        try {
            this.column = new column.AbsoluteColumn(child, table);
        }
        catch (error) {
            // In a constructor, so we must throw
            throw error;
        }
    }
}
exports.ColumnDestination = ColumnDestination;
class CellDestination {
    constructor(ast, table, formatter) {
        this.merge = (source, table) => {
            const cell = { row: this.row.index, column: this.column.index };
            return mergeForCells(source, table, [cell], this.formatter);
        };
        this.formatter = formatter;
        const typeErr = ast_utils.checkType(ast, 'absolute_reference');
        if (typeErr) {
            throw typeErr;
        }
        // A cell needs to have two children, a row and a column
        const lengthError = ast_utils.checkChildLength(ast, 2);
        if (lengthError) {
            throw lengthError;
        }
        const rowChild = ast.children[0];
        const colChild = ast.children[1];
        try {
            this.row = new row.AbsoluteRow(rowChild, table);
            this.column = new column.AbsoluteColumn(colChild, table);
        }
        catch (error) {
            // In a constructor, so we must throw
            throw error;
        }
    }
}
exports.CellDestination = CellDestination;
class RangeDestination {
    constructor(ast, table, formatter) {
        this.merge = (source, table) => this.range
            .asCells()
            .andThen((cells) => mergeForCells(source, table, cells, this.formatter));
        this.formatter = formatter;
        const typeErr = ast_utils.checkType(ast, 'range');
        if (typeErr) {
            throw typeErr;
        }
        const lengthError = ast_utils.checkChildLength(ast, 2);
        if (lengthError) {
            throw lengthError;
        }
        ast.children.forEach((child) => {
            let childTypeErr = ast_utils.checkType(child, 'source_reference');
            if (childTypeErr) {
                throw childTypeErr;
            }
            const childLengthError = ast_utils.checkChildLength(child, 1);
            if (childLengthError) {
                throw childLengthError;
            }
            childTypeErr = ast_utils.checkType(child.children[0], 'absolute_reference');
            if (childTypeErr) {
                throw childTypeErr;
            }
        });
        this.range = new range$1.Range(ast, table);
    }
}
exports.RangeDestination = RangeDestination;
const mergeForCells = (source, table, cells, formatter) => cells.reduce((currentTable, currentCell) => currentTable.andThen((t) => source
    .getValue(t, currentCell)
    .andThen((val) => neverthrow.ok(val.toString()))
    .andThen((val) => neverthrow.ok(val.trim() === '' ? '0' : val))
    .andThen((val) => neverthrow.ok(t.setCellAt(currentCell.row, currentCell.column, formatter.format(val))))), neverthrow.ok(table));
});

var display_directive = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayDirective = exports.DefaultFormatter = void 0;

class DefaultFormatter {
    constructor() {
        this.format = (num) => {
            if (typeof num === 'string') {
                return num;
            }
            return num.toString();
        };
    }
}
exports.DefaultFormatter = DefaultFormatter;
class DisplayDirective {
    constructor(ast) {
        this.format = (num) => {
            if (typeof num === 'string') {
                const parsedNum = parseFloat(num);
                return parsedNum.toFixed(this.decimalLength);
            }
            return num.toFixed(this.decimalLength);
        };
        let typeError = ast_utils.checkType(ast, 'display_directive');
        if (typeError) {
            throw typeError;
        }
        let lengthError = ast_utils.checkChildLength(ast, 1);
        if (lengthError) {
            throw lengthError;
        }
        const displayDirectiveOption = ast.children[0];
        typeError = ast_utils.checkType(displayDirectiveOption, 'display_directive_option');
        if (typeError) {
            throw typeError;
        }
        lengthError = ast_utils.checkChildLength(displayDirectiveOption, 1);
        if (lengthError) {
            throw lengthError;
        }
        const formattingDirective = displayDirectiveOption.children[0];
        typeError = ast_utils.checkType(formattingDirective, 'formatting_directive');
        if (typeError) {
            throw typeError;
        }
        lengthError = ast_utils.checkChildLength(formattingDirective, 1);
        if (lengthError) {
            throw lengthError;
        }
        const formattingDirectiveLength = formattingDirective.children[0];
        typeError = ast_utils.checkType(formattingDirectiveLength, 'int');
        if (typeError) {
            throw typeError;
        }
        this.decimalLength = parseInt(formattingDirectiveLength.text);
    }
}
exports.DisplayDirective = DisplayDirective;
});

var single_param_function = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleParamFunctionCall = void 0;




class SingleParamFunctionCall {
    constructor(ast, table) {
        this.getValue = (table, cell) => this.param.getValue(table, cell).andThen((sourceData) => 
        // The operation functions do not throw errors because data arity has
        // already been validated.
        neverthrow.ok(this.op(sourceData)));
        const typeError = ast_utils.checkType(ast, 'single_param_function_call');
        if (typeError) {
            throw typeError;
        }
        const lengthError = ast_utils.checkChildLength(ast, 2);
        if (lengthError) {
            throw lengthError;
        }
        const childTypeError = ast_utils.checkType(ast.children[0], 'single_param_function');
        if (childTypeError) {
            throw childTypeError;
        }
        const functionName = ast.children[0].text;
        switch (functionName) {
            case 'sum':
                this.op = sum;
                break;
            case 'mean':
                this.op = mean;
                break;
            default:
                throw Error('Unknown single param function call: ' + functionName);
        }
        this.param = new calc.Source(ast.children[1], table);
    }
}
exports.SingleParamFunctionCall = SingleParamFunctionCall;
/**
 * Sum all the cells in the input value, producing a single cell output.
 */
const sum = (value) => {
    const total = value.val.reduce((runningTotal, currentRow) => currentRow.reduce((rowTotal, currentCell) => {
        let currentCellValue = parseFloat(currentCell);
        if (isNaN(currentCellValue)) {
            currentCellValue = 0;
        }
        return rowTotal + currentCellValue;
    }, runningTotal), 0);
    return new results.Value([[total.toString()]]);
};
/**
 * Mean of all the cells in the input value, producing a single cell output.
 */
const mean = (value) => {
    const { total, count } = value.val.reduce(({ total: runningTotal1, count: currentCount1 }, currentRow) => currentRow.reduce(({ total: runningTotal2, count: currentCount2 }, currentCell) => ({
        total: runningTotal2 + +currentCell,
        count: currentCount2 + 1,
    }), { total: runningTotal1, count: currentCount1 }), { total: 0, count: 0 });
    return new results.Value([[(total / count).toString()]]);
};
});

var TokenError_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenError = void 0;
class TokenError extends Error {
    constructor(message, token) {
        super(message);
        this.message = message;
        this.token = token;
        if (token && token.errors)
            token.errors.push(this);
        else
            throw this;
    }
    inspect() {
        return 'SyntaxError: ' + this.message;
    }
}
exports.TokenError = TokenError;

});

var Parser_1 = createCommonjsModule(function (module, exports) {
// https://www.ics.uci.edu/~pattis/ICS-33/lectures/ebnf.pdf
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = exports.findRuleByName = exports.parseRuleName = exports.escapeRegExp = exports.readToken = void 0;
const UPPER_SNAKE_RE = /^[A-Z0-9_]+$/;
const decorationRE = /(\?|\+|\*)$/;
const preDecorationRE = /^(@|&|!)/;
const WS_RULE = 'WS';

function readToken(txt, expr) {
    let result = expr.exec(txt);
    if (result && result.index == 0) {
        if (result[0].length == 0 && expr.source.length > 0)
            return null;
        return {
            type: null,
            text: result[0],
            rest: txt.substr(result[0].length),
            start: 0,
            end: result[0].length - 1,
            fullText: result[0],
            errors: [],
            children: [],
            parent: null
        };
    }
    return null;
}
exports.readToken = readToken;
function escapeRegExp(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
exports.escapeRegExp = escapeRegExp;
function fixRest(token) {
    token.rest = '';
    token.children && token.children.forEach(c => fixRest(c));
}
function fixPositions(token, start) {
    token.start += start;
    token.end += start;
    token.children && token.children.forEach(c => fixPositions(c, token.start));
}
function agregateErrors(errors, token) {
    if (token.errors && token.errors.length)
        token.errors.forEach(err => errors.push(err));
    token.children && token.children.forEach(tok => agregateErrors(errors, tok));
}
function parseRuleName(name) {
    let postDecoration = decorationRE.exec(name);
    let preDecoration = preDecorationRE.exec(name);
    let postDecorationText = (postDecoration && postDecoration[0]) || '';
    let preDecorationText = (preDecoration && preDecoration[0]) || '';
    let out = {
        raw: name,
        name: name.replace(decorationRE, '').replace(preDecorationRE, ''),
        isOptional: postDecorationText == '?' || postDecorationText == '*',
        allowRepetition: postDecorationText == '+' || postDecorationText == '*',
        atLeastOne: postDecorationText == '+',
        lookupPositive: preDecorationText == '&',
        lookupNegative: preDecorationText == '!',
        pinned: preDecorationText == '@',
        lookup: false,
        isLiteral: false
    };
    out.isLiteral = out.name[0] == "'" || out.name[0] == '"';
    out.lookup = out.lookupNegative || out.lookupPositive;
    return out;
}
exports.parseRuleName = parseRuleName;
function findRuleByName(name, parser) {
    let parsed = parseRuleName(name);
    return parser.cachedRules[parsed.name] || null;
}
exports.findRuleByName = findRuleByName;
/// Removes all the nodes starting with 'RULE_'
function stripRules(token, re) {
    if (token.children) {
        let localRules = token.children.filter(x => x.type && re.test(x.type));
        for (let i = 0; i < localRules.length; i++) {
            let indexOnChildren = token.children.indexOf(localRules[i]);
            if (indexOnChildren != -1) {
                token.children.splice(indexOnChildren, 1);
            }
        }
        token.children.forEach(c => stripRules(c, re));
    }
}
const ignoreMissingRules = ['EOF'];
class Parser {
    constructor(grammarRules, options) {
        this.grammarRules = grammarRules;
        this.options = options;
        this.cachedRules = {};
        this.debug = options ? options.debug === true : false;
        let errors = [];
        let neededRules = [];
        grammarRules.forEach(rule => {
            let parsedName = parseRuleName(rule.name);
            if (parsedName.name in this.cachedRules) {
                errors.push('Duplicated rule ' + parsedName.name);
                return;
            }
            else {
                this.cachedRules[parsedName.name] = rule;
            }
            if (!rule.bnf || !rule.bnf.length) {
                let error = 'Missing rule content, rule: ' + rule.name;
                if (errors.indexOf(error) == -1)
                    errors.push(error);
            }
            else {
                rule.bnf.forEach(options => {
                    if (typeof options[0] === 'string') {
                        let parsed = parseRuleName(options[0]);
                        if (parsed.name == rule.name) {
                            let error = 'Left recursion is not allowed, rule: ' + rule.name;
                            if (errors.indexOf(error) == -1)
                                errors.push(error);
                        }
                    }
                    options.forEach(option => {
                        if (typeof option == 'string') {
                            let name = parseRuleName(option);
                            if (!name.isLiteral &&
                                neededRules.indexOf(name.name) == -1 &&
                                ignoreMissingRules.indexOf(name.name) == -1)
                                neededRules.push(name.name);
                        }
                    });
                });
            }
            if (WS_RULE == rule.name)
                rule.implicitWs = false;
            if (rule.implicitWs) {
                if (neededRules.indexOf(WS_RULE) == -1)
                    neededRules.push(WS_RULE);
            }
            if (rule.recover) {
                if (neededRules.indexOf(rule.recover) == -1)
                    neededRules.push(rule.recover);
            }
        });
        neededRules.forEach(ruleName => {
            if (!(ruleName in this.cachedRules)) {
                errors.push('Missing rule ' + ruleName);
            }
        });
        if (errors.length)
            throw new Error(errors.join('\n'));
    }
    getAST(txt, target) {
        if (!target) {
            target = this.grammarRules.filter(x => !x.fragment && x.name.indexOf('%') != 0)[0].name;
        }
        let result = this.parse(txt, target);
        if (result) {
            agregateErrors(result.errors, result);
            fixPositions(result, 0);
            // REMOVE ALL THE TAGS MATCHING /^%/
            stripRules(result, /^%/);
            if (!this.options || !this.options.keepUpperRules)
                stripRules(result, UPPER_SNAKE_RE);
            let rest = result.rest;
            if (rest) {
                new TokenError_1.TokenError('Unexpected end of input: \n' + rest, result);
            }
            fixRest(result);
            result.rest = rest;
        }
        return result;
    }
    emitSource() {
        return 'CANNOT EMIT SOURCE FROM BASE Parser';
    }
    parse(txt, target, recursion = 0) {
        let out = null;
        let type = parseRuleName(target);
        let expr;
        let printable = this.debug && /*!isLiteral &*/ !UPPER_SNAKE_RE.test(type.name);
        printable &&
            console.log(new Array(recursion).join('│  ') + 'Trying to get ' + target + ' from ' + JSON.stringify(txt.split('\n')[0]));
        let realType = type.name;
        let targetLex = findRuleByName(type.name, this);
        if (type.name == 'EOF') {
            if (txt.length) {
                return null;
            }
            else if (txt.length == 0) {
                return {
                    type: 'EOF',
                    text: '',
                    rest: '',
                    start: 0,
                    end: 0,
                    fullText: '',
                    errors: [],
                    children: [],
                    parent: null
                };
            }
        }
        try {
            if (!targetLex && type.isLiteral) {
                // tslint:disable-next-line: no-eval
                let src = eval(type.name);
                if (src === '') {
                    return {
                        type: '%%EMPTY%%',
                        text: '',
                        rest: txt,
                        start: 0,
                        end: 0,
                        fullText: '',
                        errors: [],
                        children: [],
                        parent: null
                    };
                }
                expr = new RegExp(escapeRegExp(src));
                realType = null;
            }
        }
        catch (e) {
            if (e instanceof ReferenceError) {
                console.error(e);
            }
            return null;
        }
        if (expr) {
            let result = readToken(txt, expr);
            if (result) {
                result.type = realType;
                return result;
            }
        }
        else {
            let options = targetLex.bnf;
            if (options instanceof Array) {
                options.forEach(phases => {
                    if (out)
                        return;
                    let pinned = null;
                    let tmp = {
                        type: type.name,
                        text: '',
                        children: [],
                        end: 0,
                        errors: [],
                        fullText: '',
                        parent: null,
                        start: 0,
                        rest: txt
                    };
                    if (targetLex.fragment)
                        tmp.fragment = true;
                    let tmpTxt = txt;
                    let position = 0;
                    let allOptional = phases.length > 0;
                    let foundSomething = false;
                    for (let i = 0; i < phases.length; i++) {
                        if (typeof phases[i] == 'string') {
                            let localTarget = parseRuleName(phases[i]);
                            allOptional = allOptional && localTarget.isOptional;
                            let got;
                            let foundAtLeastOne = false;
                            do {
                                got = null;
                                if (targetLex.implicitWs) {
                                    got = this.parse(tmpTxt, localTarget.name, recursion + 1);
                                    if (!got) {
                                        let WS;
                                        do {
                                            WS = this.parse(tmpTxt, WS_RULE, recursion + 1);
                                            if (WS) {
                                                tmp.text = tmp.text + WS.text;
                                                tmp.end = tmp.text.length;
                                                WS.parent = tmp;
                                                tmp.children.push(WS);
                                                tmpTxt = tmpTxt.substr(WS.text.length);
                                                position += WS.text.length;
                                            }
                                            else {
                                                break;
                                            }
                                        } while (WS && WS.text.length);
                                    }
                                }
                                got = got || this.parse(tmpTxt, localTarget.name, recursion + 1);
                                // rule ::= "true" ![a-zA-Z]
                                // negative lookup, if it does not match, we should continue
                                if (localTarget.lookupNegative) {
                                    if (got)
                                        return /* cancel this path */;
                                    break;
                                }
                                if (localTarget.lookupPositive) {
                                    if (!got)
                                        return;
                                }
                                if (!got) {
                                    if (localTarget.isOptional)
                                        break;
                                    if (localTarget.atLeastOne && foundAtLeastOne)
                                        break;
                                }
                                if (got && targetLex.pinned == i + 1) {
                                    pinned = got;
                                    printable && console.log(new Array(recursion + 1).join('│  ') + '└─ ' + got.type + ' PINNED');
                                }
                                if (!got)
                                    got = this.parseRecovery(targetLex, tmpTxt, recursion + 1);
                                if (!got) {
                                    if (pinned) {
                                        out = tmp;
                                        got = {
                                            type: 'SyntaxError',
                                            text: tmpTxt,
                                            children: [],
                                            end: tmpTxt.length,
                                            errors: [],
                                            fullText: '',
                                            parent: null,
                                            start: 0,
                                            rest: ''
                                        };
                                        if (tmpTxt.length) {
                                            new TokenError_1.TokenError(`Unexpected end of input. Expecting ${localTarget.name} Got: ${tmpTxt}`, got);
                                        }
                                        else {
                                            new TokenError_1.TokenError(`Unexpected end of input. Missing ${localTarget.name}`, got);
                                        }
                                        printable &&
                                            console.log(new Array(recursion + 1).join('│  ') + '└─ ' + got.type + ' ' + JSON.stringify(got.text));
                                    }
                                    else {
                                        return;
                                    }
                                }
                                foundAtLeastOne = true;
                                foundSomething = true;
                                if (got.type == '%%EMPTY%%') {
                                    break;
                                }
                                got.start += position;
                                got.end += position;
                                if (!localTarget.lookupPositive && got.type) {
                                    if (got.fragment) {
                                        got.children &&
                                            got.children.forEach(x => {
                                                x.start += position;
                                                x.end += position;
                                                x.parent = tmp;
                                                tmp.children.push(x);
                                            });
                                    }
                                    else {
                                        got.parent = tmp;
                                        tmp.children.push(got);
                                    }
                                }
                                if (localTarget.lookup)
                                    got.lookup = true;
                                printable &&
                                    console.log(new Array(recursion + 1).join('│  ') + '└─ ' + got.type + ' ' + JSON.stringify(got.text));
                                // Eat it from the input stream, only if it is not a lookup
                                if (!localTarget.lookup && !got.lookup) {
                                    tmp.text = tmp.text + got.text;
                                    tmp.end = tmp.text.length;
                                    tmpTxt = tmpTxt.substr(got.text.length);
                                    position += got.text.length;
                                }
                                tmp.rest = tmpTxt;
                            } while (got && localTarget.allowRepetition && tmpTxt.length && !got.lookup);
                        } /* IS A REGEXP */
                        else {
                            let got = readToken(tmpTxt, phases[i]);
                            if (!got) {
                                return;
                            }
                            printable &&
                                console.log(new Array(recursion + 1).join('│  ') + '└> ' + JSON.stringify(got.text) + phases[i].source);
                            foundSomething = true;
                            got.start += position;
                            got.end += position;
                            tmp.text = tmp.text + got.text;
                            tmp.end = tmp.text.length;
                            tmpTxt = tmpTxt.substr(got.text.length);
                            position += got.text.length;
                            tmp.rest = tmpTxt;
                        }
                    }
                    if (foundSomething) {
                        out = tmp;
                        printable &&
                            console.log(new Array(recursion).join('│  ') + '├<─┴< PUSHING ' + out.type + ' ' + JSON.stringify(out.text));
                    }
                });
            }
            if (out && targetLex.simplifyWhenOneChildren && out.children.length == 1) {
                out = out.children[0];
            }
        }
        if (!out) {
            printable && console.log(target + ' NOT RESOLVED FROM ' + txt);
        }
        return out;
    }
    parseRecovery(recoverableToken, tmpTxt, recursion) {
        if (recoverableToken.recover && tmpTxt.length) {
            let printable = this.debug;
            printable &&
                console.log(new Array(recursion + 1).join('│  ') +
                    'Trying to recover until token ' +
                    recoverableToken.recover +
                    ' from ' +
                    JSON.stringify(tmpTxt.split('\n')[0] + tmpTxt.split('\n')[1]));
            let tmp = {
                type: 'SyntaxError',
                text: '',
                children: [],
                end: 0,
                errors: [],
                fullText: '',
                parent: null,
                start: 0,
                rest: ''
            };
            let got;
            do {
                got = this.parse(tmpTxt, recoverableToken.recover, recursion + 1);
                if (got) {
                    new TokenError_1.TokenError('Unexpected input: "' + tmp.text + `" Expecting: ${recoverableToken.name}`, tmp);
                    break;
                }
                else {
                    tmp.text = tmp.text + tmpTxt[0];
                    tmp.end = tmp.text.length;
                    tmpTxt = tmpTxt.substr(1);
                }
            } while (!got && tmpTxt.length > 0);
            if (tmp.text.length > 0 && got) {
                printable && console.log(new Array(recursion + 1).join('│  ') + 'Recovered text: ' + JSON.stringify(tmp.text));
                return tmp;
            }
        }
        return null;
    }
}
exports.Parser = Parser;
exports.default = Parser;

});

var SemanticHelpers = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.findChildrenByType = void 0;
/**
 * Finds all the direct childs of a specifyed type
 */
function findChildrenByType(token, type) {
    return token.children ? token.children.filter(x => x.type == type) : [];
}
exports.findChildrenByType = findChildrenByType;

});

var BNF_1 = createCommonjsModule(function (module, exports) {
// https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_Form
Object.defineProperty(exports, "__esModule", { value: true });
/*
syntax ::= RULE_EOL* rule+
rule ::= " "* "<" rule-name ">" " "* "::=" firstExpression otherExpression* " "* RULE_EOL+ " "*
firstExpression ::= " "* list
otherExpression ::= " "* "|" " "* list
RULE_EOL ::= "\r" | "\n"
list ::= term " "* list | term
term ::= literal | "<" rule-name ">"
literal ::= '"' RULE_CHARACTER1* '"' | "'" RULE_CHARACTER2* "'"
RULE_CHARACTER ::= " " | RULE_LETTER | RULE_DIGIT | RULE_SYMBOL
RULE_LETTER ::= "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" | "X" | "Y" | "Z" | "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z"
RULE_DIGIT ::= "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
RULE_SYMBOL ::= "-" | "_" | "!" | "#" | "$" | "%" | "&" | "(" | ")" | "*" | "+" | "," | "-" | "." | "/" | ":" | ";" | "<" | "=" | ">" | "?" | "@" | "[" | "\" | "]" | "^" | "_" | "`" | "{" | "|" | "}" | "~"
RULE_CHARACTER1 ::= RULE_CHARACTER | "'"
RULE_CHARACTER2 ::= RULE_CHARACTER | '"'
rule-name ::= RULE_LETTER RULE_CHAR*
RULE_CHAR ::= RULE_LETTER | RULE_DIGIT | "_" | "-"
*/


var BNF;
(function (BNF) {
    BNF.RULES = [
        {
            name: 'syntax',
            bnf: [['RULE_EOL*', 'rule+']]
        },
        {
            name: 'rule',
            bnf: [
                [
                    '" "*',
                    '"<"',
                    'rule-name',
                    '">"',
                    '" "*',
                    '"::="',
                    'firstExpression',
                    'otherExpression*',
                    '" "*',
                    'RULE_EOL+',
                    '" "*'
                ]
            ]
        },
        {
            name: 'firstExpression',
            bnf: [['" "*', 'list']]
        },
        {
            name: 'otherExpression',
            bnf: [['" "*', '"|"', '" "*', 'list']]
        },
        {
            name: 'RULE_EOL',
            bnf: [['"\\r"'], ['"\\n"']]
        },
        {
            name: 'list',
            bnf: [['term', '" "*', 'list'], ['term']]
        },
        {
            name: 'term',
            bnf: [['literal'], ['"<"', 'rule-name', '">"']]
        },
        {
            name: 'literal',
            bnf: [[`'"'`, 'RULE_CHARACTER1*', `'"'`], [`"'"`, 'RULE_CHARACTER2*', `"'"`]]
        },
        {
            name: 'RULE_CHARACTER',
            bnf: [['" "'], ['RULE_LETTER'], ['RULE_DIGIT'], ['RULE_SYMBOL']]
        },
        {
            name: 'RULE_LETTER',
            bnf: [
                ['"A"'],
                ['"B"'],
                ['"C"'],
                ['"D"'],
                ['"E"'],
                ['"F"'],
                ['"G"'],
                ['"H"'],
                ['"I"'],
                ['"J"'],
                ['"K"'],
                ['"L"'],
                ['"M"'],
                ['"N"'],
                ['"O"'],
                ['"P"'],
                ['"Q"'],
                ['"R"'],
                ['"S"'],
                ['"T"'],
                ['"U"'],
                ['"V"'],
                ['"W"'],
                ['"X"'],
                ['"Y"'],
                ['"Z"'],
                ['"a"'],
                ['"b"'],
                ['"c"'],
                ['"d"'],
                ['"e"'],
                ['"f"'],
                ['"g"'],
                ['"h"'],
                ['"i"'],
                ['"j"'],
                ['"k"'],
                ['"l"'],
                ['"m"'],
                ['"n"'],
                ['"o"'],
                ['"p"'],
                ['"q"'],
                ['"r"'],
                ['"s"'],
                ['"t"'],
                ['"u"'],
                ['"v"'],
                ['"w"'],
                ['"x"'],
                ['"y"'],
                ['"z"']
            ]
        },
        {
            name: 'RULE_DIGIT',
            bnf: [['"0"'], ['"1"'], ['"2"'], ['"3"'], ['"4"'], ['"5"'], ['"6"'], ['"7"'], ['"8"'], ['"9"']]
        },
        {
            name: 'RULE_SYMBOL',
            bnf: [
                ['"-"'],
                ['"_"'],
                ['"!"'],
                ['"#"'],
                ['"$"'],
                ['"%"'],
                ['"&"'],
                ['"("'],
                ['")"'],
                ['"*"'],
                ['"+"'],
                ['","'],
                ['"-"'],
                ['"."'],
                ['"/"'],
                ['":"'],
                ['";"'],
                ['"<"'],
                ['"="'],
                ['">"'],
                ['"?"'],
                ['"@"'],
                ['"["'],
                ['"\\"'],
                ['"]"'],
                ['"^"'],
                ['"_"'],
                ['"`"'],
                ['"{"'],
                ['"|"'],
                ['"}"'],
                ['"~"']
            ]
        },
        {
            name: 'RULE_CHARACTER1',
            bnf: [['RULE_CHARACTER'], [`"'"`]]
        },
        {
            name: 'RULE_CHARACTER2',
            bnf: [['RULE_CHARACTER'], [`'"'`]]
        },
        {
            name: 'rule-name',
            bnf: [['RULE_LETTER', 'RULE_CHAR*']]
        },
        {
            name: 'RULE_CHAR',
            bnf: [['RULE_LETTER'], ['RULE_DIGIT'], ['"_"'], ['"-"']]
        }
    ];
    BNF.defaultParser = new Parser_1.Parser(BNF.RULES, { debug: false });
    function getAllTerms(expr) {
        let terms = SemanticHelpers.findChildrenByType(expr, 'term').map(term => {
            return SemanticHelpers.findChildrenByType(term, 'literal').concat(SemanticHelpers.findChildrenByType(term, 'rule-name'))[0].text;
        });
        SemanticHelpers.findChildrenByType(expr, 'list').forEach(expr => {
            terms = terms.concat(getAllTerms(expr));
        });
        return terms;
    }
    function getRules(source, parser = BNF.defaultParser) {
        let ast = parser.getAST(source);
        if (!ast)
            throw new Error('Could not parse ' + source);
        if (ast.errors && ast.errors.length) {
            throw ast.errors[0];
        }
        let rules = SemanticHelpers.findChildrenByType(ast, 'rule');
        let ret = rules.map((rule) => {
            let name = SemanticHelpers.findChildrenByType(rule, 'rule-name')[0].text;
            let expressions = SemanticHelpers.findChildrenByType(rule, 'firstExpression').concat(SemanticHelpers.findChildrenByType(rule, 'otherExpression'));
            let bnf = [];
            expressions.forEach(expr => {
                bnf.push(getAllTerms(expr));
            });
            return {
                name: name,
                bnf
            };
        });
        if (!ret.some(x => x.name == 'EOL')) {
            ret.push({
                name: 'EOL',
                bnf: [['"\\r\\n"', '"\\r"', '"\\n"']]
            });
        }
        return ret;
    }
    BNF.getRules = getRules;
    function Transform(source, subParser = BNF.defaultParser) {
        return getRules(source.join(''), subParser);
    }
    BNF.Transform = Transform;
    class Parser extends Parser_1.Parser {
        constructor(source, options) {
            const subParser = options && options.debugRulesParser === true ? new Parser_1.Parser(BNF.RULES, { debug: true }) : BNF.defaultParser;
            super(getRules(source, subParser), options);
            this.source = source;
        }
        emitSource() {
            return this.source;
        }
    }
    BNF.Parser = Parser;
})(BNF || (BNF = {}));
exports.default = BNF;

});

var W3CEBNF = createCommonjsModule(function (module, exports) {
// https://www.w3.org/TR/REC-xml/#NT-Name
// http://www.bottlecaps.de/rr/ui
Object.defineProperty(exports, "__esModule", { value: true });
// Grammar	::=	Production*
// Production	::=	NCName '::=' Choice
// NCName	::=	[http://www.w3.org/TR/xml-names/#NT-NCName]
// Choice	::=	SequenceOrDifference ( '|' SequenceOrDifference )*
// SequenceOrDifference	::=	(Item ( '-' Item | Item* ))?
// Item	::=	Primary ( '?' | '*' | '+' )?
// Primary	::=	NCName | StringLiteral | CharCode | CharClass | '(' Choice ')'
// StringLiteral	::=	'"' [^"]* '"' | "'" [^']* "'"
// CharCode	::=	'#x' [0-9a-fA-F]+
// CharClass	::=	'[' '^'? ( RULE_Char | CharCode | CharRange | CharCodeRange )+ ']'
// RULE_Char	::=	[http://www.w3.org/TR/xml#NT-RULE_Char]
// CharRange	::=	RULE_Char '-' ( RULE_Char - ']' )
// CharCodeRange	::=	CharCode '-' CharCode
// RULE_WHITESPACE	::=	RULE_S | Comment
// RULE_S	::=	#x9 | #xA | #xD | #x20
// Comment	::=	'/*' ( [^*] | '*'+ [^*/] )* '*'* '*/'

var BNF;
(function (BNF) {
    BNF.RULES = [
        {
            name: 'Grammar',
            bnf: [['RULE_S*', '%Atomic*', 'EOF']]
        },
        {
            name: '%Atomic',
            bnf: [['Production', 'RULE_S*']],
            fragment: true
        },
        {
            name: 'Production',
            bnf: [['NCName', 'RULE_S*', '"::="', 'RULE_WHITESPACE*', 'Choice', 'RULE_WHITESPACE*', 'RULE_EOL+', 'RULE_S*']]
        },
        {
            name: 'NCName',
            bnf: [[/[a-zA-Z][a-zA-Z_0-9]*/]]
        },
        {
            name: 'Choice',
            bnf: [['SequenceOrDifference', '%_Choice_1*']],
            fragment: true
        },
        {
            name: '%_Choice_1',
            bnf: [['RULE_WHITESPACE*', '"|"', 'RULE_WHITESPACE*', 'SequenceOrDifference']],
            fragment: true
        },
        {
            name: 'SequenceOrDifference',
            bnf: [['Item', 'RULE_WHITESPACE*', '%_Item_1?']]
        },
        {
            name: '%_Item_1',
            bnf: [['Minus', 'Item'], ['Item*']],
            fragment: true
        },
        {
            name: 'Minus',
            bnf: [['"-"']]
        },
        {
            name: 'Item',
            bnf: [['RULE_WHITESPACE*', '%Primary', 'PrimaryDecoration?']],
            fragment: true
        },
        {
            name: 'PrimaryDecoration',
            bnf: [['"?"'], ['"*"'], ['"+"']]
        },
        {
            name: 'DecorationName',
            bnf: [['"ebnf://"', /[^\x5D#]+/]]
        },
        {
            name: '%Primary',
            bnf: [['NCName'], ['StringLiteral'], ['CharCode'], ['CharClass'], ['SubItem']],
            fragment: true
        },
        {
            name: 'SubItem',
            bnf: [['"("', 'RULE_WHITESPACE*', 'Choice', 'RULE_WHITESPACE*', '")"']]
        },
        {
            name: 'StringLiteral',
            bnf: [[`'"'`, /[^"]*/, `'"'`], [`"'"`, /[^']*/, `"'"`]],
            pinned: 1
        },
        {
            name: 'CharCode',
            bnf: [['"#x"', /[0-9a-zA-Z]+/]]
        },
        {
            name: 'CharClass',
            bnf: [["'['", "'^'?", '%RULE_CharClass_1+', '"]"']]
        },
        {
            name: '%RULE_CharClass_1',
            bnf: [['CharCodeRange'], ['CharRange'], ['CharCode'], ['RULE_Char']],
            fragment: true
        },
        {
            name: 'RULE_Char',
            bnf: [[/\x09/], [/\x0A/], [/\x0D/], [/[\x20-\x5c]/], [/[\x5e-\uD7FF]/], [/[\uE000-\uFFFD]/]]
        },
        {
            name: 'CharRange',
            bnf: [['RULE_Char', '"-"', 'RULE_Char']]
        },
        {
            name: 'CharCodeRange',
            bnf: [['CharCode', '"-"', 'CharCode']]
        },
        {
            name: 'RULE_WHITESPACE',
            bnf: [['%RULE_WHITESPACE_CHAR*'], ['Comment', 'RULE_WHITESPACE*']]
        },
        {
            name: 'RULE_S',
            bnf: [['RULE_WHITESPACE', 'RULE_S*'], ['RULE_EOL', 'RULE_S*']]
        },
        {
            name: '%RULE_WHITESPACE_CHAR',
            bnf: [[/\x09/], [/\x20/]],
            fragment: true
        },
        {
            name: 'Comment',
            bnf: [['"/*"', '%RULE_Comment_Body*', '"*/"']]
        },
        {
            name: '%RULE_Comment_Body',
            bnf: [['!"*/"', /[^*]/]],
            fragment: true
        },
        {
            name: 'RULE_EOL',
            bnf: [[/\x0D/, /\x0A/], [/\x0A/], [/\x0D/]]
        },
        {
            name: 'Link',
            bnf: [["'['", 'Url', "']'"]]
        },
        {
            name: 'Url',
            bnf: [[/[^\x5D:/?#]/, '"://"', /[^\x5D#]+/, '%Url1?']]
        },
        {
            name: '%Url1',
            bnf: [['"#"', 'NCName']],
            fragment: true
        }
    ];
    BNF.defaultParser = new Parser_1.Parser(BNF.RULES, { debug: false });
    const preDecorationRE = /^(!|&)/;
    const decorationRE = /(\?|\+|\*)$/;
    const subExpressionRE = /^%/;
    function getBNFRule(name, parser) {
        if (typeof name == 'string') {
            if (preDecorationRE.test(name))
                return '';
            let subexpression = subExpressionRE.test(name);
            if (subexpression) {
                let decoration = decorationRE.exec(name);
                let decorationText = decoration ? decoration[0] + ' ' : '';
                let lonely = isLonelyRule(name, parser);
                if (lonely)
                    return getBNFBody(name, parser) + decorationText;
                return '(' + getBNFBody(name, parser) + ')' + decorationText;
            }
            return name;
        }
        else {
            return name.source
                .replace(/\\(?:x|u)([a-zA-Z0-9]+)/g, '#x$1')
                .replace(/\[\\(?:x|u)([a-zA-Z0-9]+)-\\(?:x|u)([a-zA-Z0-9]+)\]/g, '[#x$1-#x$2]');
        }
    }
    /// Returns true if the rule is a string literal or regular expression without a descendant tree
    function isLonelyRule(name, parser) {
        let rule = Parser_1.findRuleByName(name, parser);
        return (rule &&
            rule.bnf.length == 1 &&
            rule.bnf[0].length == 1 &&
            (rule.bnf[0][0] instanceof RegExp || rule.bnf[0][0][0] == '"' || rule.bnf[0][0][0] == "'"));
    }
    function getBNFChoice(rules, parser) {
        return rules.map(x => getBNFRule(x, parser)).join(' ');
    }
    function getBNFBody(name, parser) {
        let rule = Parser_1.findRuleByName(name, parser);
        if (rule)
            return rule.bnf.map(x => getBNFChoice(x, parser)).join(' | ');
        return 'RULE_NOT_FOUND {' + name + '}';
    }
    function emit(parser) {
        let acumulator = [];
        parser.grammarRules.forEach(l => {
            if (!/^%/.test(l.name)) {
                let recover = l.recover ? ' /* { recoverUntil=' + l.recover + ' } */' : '';
                acumulator.push(l.name + ' ::= ' + getBNFBody(l.name, parser) + recover);
            }
        });
        return acumulator.join('\n');
    }
    BNF.emit = emit;
    let subitems = 0;
    function restar(total, resta) {
        console.log('reberia restar ' + resta + ' a ' + total);
        throw new Error('Difference not supported yet');
    }
    function convertRegex(txt) {
        return new RegExp(txt
            .replace(/#x([a-zA-Z0-9]{4})/g, '\\u$1')
            .replace(/#x([a-zA-Z0-9]{3})/g, '\\u0$1')
            .replace(/#x([a-zA-Z0-9]{2})/g, '\\x$1')
            .replace(/#x([a-zA-Z0-9]{1})/g, '\\x0$1'));
    }
    function getSubItems(tmpRules, seq, parentName) {
        let anterior = null;
        let bnfSeq = [];
        seq.children.forEach((x, i) => {
            if (x.type == 'Minus') {
                restar(anterior, x);
            }
            let decoration = seq.children[i + 1];
            decoration = (decoration && decoration.type == 'PrimaryDecoration' && decoration.text) || '';
            let preDecoration = '';
            switch (x.type) {
                case 'SubItem':
                    let name = '%' + (parentName + subitems++);
                    createRule(tmpRules, x, name);
                    bnfSeq.push(preDecoration + name + decoration);
                    break;
                case 'NCName':
                case 'StringLiteral':
                    bnfSeq.push(preDecoration + x.text + decoration);
                    break;
                case 'CharCode':
                case 'CharClass':
                    if (decoration || preDecoration) {
                        let newRule = {
                            name: '%' + (parentName + subitems++),
                            bnf: [[convertRegex(x.text)]]
                        };
                        tmpRules.push(newRule);
                        bnfSeq.push(preDecoration + newRule.name + decoration);
                    }
                    else {
                        bnfSeq.push(convertRegex(x.text));
                    }
                    break;
                case 'PrimaryDecoration':
                    break;
                default:
                    throw new Error(' HOW SHOULD I PARSE THIS? ' + x.type + ' -> ' + JSON.stringify(x.text));
            }
            anterior = x;
        });
        return bnfSeq;
    }
    function createRule(tmpRules, token, name) {
        let bnf = token.children.filter(x => x.type == 'SequenceOrDifference').map(s => getSubItems(tmpRules, s, name));
        let rule = {
            name,
            bnf
        };
        let recover = null;
        bnf.forEach(x => {
            recover = recover || x['recover'];
            delete x['recover'];
        });
        if (name.indexOf('%') == 0)
            rule.fragment = true;
        if (recover)
            rule.recover = recover;
        tmpRules.push(rule);
    }
    function getRules(source, parser = BNF.defaultParser) {
        let ast = parser.getAST(source);
        if (!ast)
            throw new Error('Could not parse ' + source);
        if (ast.errors && ast.errors.length) {
            throw ast.errors[0];
        }
        let tmpRules = [];
        ast.children.filter(x => x.type == 'Production').map((x) => {
            let name = x.children.filter(x => x.type == 'NCName')[0].text;
            createRule(tmpRules, x, name);
        });
        return tmpRules;
    }
    BNF.getRules = getRules;
    function Transform(source, subParser = BNF.defaultParser) {
        return getRules(source.join(''), subParser);
    }
    BNF.Transform = Transform;
    class Parser extends Parser_1.Parser {
        constructor(source, options) {
            const subParser = options && options.debugRulesParser === true ? new Parser_1.Parser(BNF.RULES, { debug: true }) : BNF.defaultParser;
            super(getRules(source, subParser), options);
        }
        emitSource() {
            return emit(this);
        }
    }
    BNF.Parser = Parser;
})(BNF || (BNF = {}));
exports.default = BNF;

});

var Custom = createCommonjsModule(function (module, exports) {
// https://www.w3.org/TR/REC-xml/#NT-Name
// http://www.bottlecaps.de/rr/ui
Object.defineProperty(exports, "__esModule", { value: true });
// Grammar	::=	Production*
// Production	::=	NCName '::=' Choice
// NCName	::=	[http://www.w3.org/TR/xml-names/#NT-NCName]
// Choice	::=	SequenceOrDifference ( '|' SequenceOrDifference )*
// SequenceOrDifference	::=	(Item ( '-' Item | Item* ))?
// Item	::=	Primary ( '?' | '*' | '+' )?
// Primary	::=	NCName | StringLiteral | CharCode | CharClass | '(' Choice ')'
// StringLiteral	::=	'"' [^"]* '"' | "'" [^']* "'"
// CharCode	::=	'#x' [0-9a-fA-F]+
// CharClass	::=	'[' '^'? ( RULE_Char | CharCode | CharRange | CharCodeRange )+ ']'
// RULE_Char	::=	[http://www.w3.org/TR/xml#NT-RULE_Char]
// CharRange	::=	RULE_Char '-' ( RULE_Char - ']' )
// CharCodeRange	::=	CharCode '-' CharCode
// RULE_WHITESPACE	::=	RULE_S | Comment
// RULE_S	::=	#x9 | #xA | #xD | #x20
// Comment	::=	'/*' ( [^*] | '*'+ [^*/] )* '*'* '*/'


var BNF;
(function (BNF) {
    BNF.RULES = [
        {
            name: 'Grammar',
            bnf: [['RULE_S*', 'Attributes?', 'RULE_S*', '%Atomic*', 'EOF']]
        },
        {
            name: '%Atomic',
            bnf: [['Production', 'RULE_S*']],
            fragment: true
        },
        {
            name: 'Production',
            bnf: [
                [
                    'NCName',
                    'RULE_S*',
                    '"::="',
                    'RULE_WHITESPACE*',
                    '%Choice',
                    'RULE_WHITESPACE*',
                    'Attributes?',
                    'RULE_EOL+',
                    'RULE_S*'
                ]
            ]
        },
        {
            name: 'NCName',
            bnf: [[/[a-zA-Z][a-zA-Z_0-9]*/]]
        },
        {
            name: 'Attributes',
            bnf: [['"{"', 'Attribute', '%Attributes*', 'RULE_S*', '"}"']]
        },
        {
            name: '%Attributes',
            bnf: [['RULE_S*', '","', 'Attribute']],
            fragment: true
        },
        {
            name: 'Attribute',
            bnf: [['RULE_S*', 'NCName', 'RULE_WHITESPACE*', '"="', 'RULE_WHITESPACE*', 'AttributeValue']]
        },
        {
            name: 'AttributeValue',
            bnf: [['NCName'], [/[1-9][0-9]*/]]
        },
        {
            name: '%Choice',
            bnf: [['SequenceOrDifference', '%_Choice_1*']],
            fragment: true
        },
        {
            name: '%_Choice_1',
            bnf: [['RULE_S*', '"|"', 'RULE_S*', 'SequenceOrDifference']],
            fragment: true
        },
        {
            name: 'SequenceOrDifference',
            bnf: [['%Item', 'RULE_WHITESPACE*', '%_Item_1?']]
        },
        {
            name: '%_Item_1',
            bnf: [['Minus', '%Item'], ['%Item*']],
            fragment: true
        },
        {
            name: 'Minus',
            bnf: [['"-"']]
        },
        {
            name: '%Item',
            bnf: [['RULE_WHITESPACE*', 'PrimaryPreDecoration?', '%Primary', 'PrimaryDecoration?']],
            fragment: true
        },
        {
            name: 'PrimaryDecoration',
            bnf: [['"?"'], ['"*"'], ['"+"']]
        },
        {
            name: 'PrimaryPreDecoration',
            bnf: [['"&"'], ['"!"'], ['"~"']]
        },
        {
            name: '%Primary',
            bnf: [['NCName'], ['StringLiteral'], ['CharCode'], ['CharClass'], ['SubItem']],
            fragment: true
        },
        {
            name: 'SubItem',
            bnf: [['"("', 'RULE_S*', '%Choice', 'RULE_S*', '")"']]
        },
        {
            name: 'StringLiteral',
            bnf: [[`'"'`, /[^"]*/, `'"'`], [`"'"`, /[^']*/, `"'"`]]
        },
        {
            name: 'CharCode',
            bnf: [['"#x"', /[0-9a-zA-Z]+/]]
        },
        {
            name: 'CharClass',
            bnf: [["'['", "'^'?", '%RULE_CharClass_1+', '"]"']]
        },
        {
            name: '%RULE_CharClass_1',
            bnf: [['CharCodeRange'], ['CharRange'], ['CharCode'], ['RULE_Char']],
            fragment: true
        },
        {
            name: 'RULE_Char',
            bnf: [[/\x09/], [/\x0A/], [/\x0D/], [/[\x20-\x5c]/], [/[\x5e-\uD7FF]/], [/[\uE000-\uFFFD]/]]
        },
        {
            name: 'CharRange',
            bnf: [['RULE_Char', '"-"', 'RULE_Char']]
        },
        {
            name: 'CharCodeRange',
            bnf: [['CharCode', '"-"', 'CharCode']]
        },
        {
            name: 'RULE_WHITESPACE',
            bnf: [['%RULE_WHITESPACE_CHAR*'], ['Comment', 'RULE_WHITESPACE*']]
        },
        {
            name: 'RULE_S',
            bnf: [['RULE_WHITESPACE', 'RULE_S*'], ['RULE_EOL', 'RULE_S*']]
        },
        {
            name: '%RULE_WHITESPACE_CHAR',
            bnf: [[/\x09/], [/\x20/]],
            fragment: true
        },
        {
            name: 'Comment',
            bnf: [['"/*"', '%RULE_Comment_Body*', '"*/"']]
        },
        {
            name: '%RULE_Comment_Body',
            bnf: [[/[^*]/], ['"*"+', /[^/]*/]],
            fragment: true
        },
        {
            name: 'RULE_EOL',
            bnf: [[/\x0D/, /\x0A/], [/\x0A/], [/\x0D/]]
        },
        {
            name: 'Link',
            bnf: [["'['", 'Url', "']'"]]
        },
        {
            name: 'Url',
            bnf: [[/[^\x5D:/?#]/, '"://"', /[^\x5D#]+/, '%Url1?']]
        },
        {
            name: '%Url1',
            bnf: [['"#"', 'NCName']],
            fragment: true
        }
    ];
    BNF.defaultParser = new Parser_1.Parser(BNF.RULES, { debug: false });
    const preDecorationRE = /^(!|&)/;
    const decorationRE = /(\?|\+|\*)$/;
    const subExpressionRE = /^%/;
    function getBNFRule(name, parser) {
        if (typeof name == 'string') {
            let decoration = decorationRE.exec(name);
            let preDecoration = preDecorationRE.exec(name);
            let preDecorationText = preDecoration ? preDecoration[0] : '';
            let decorationText = decoration ? decoration[0] + ' ' : '';
            let subexpression = subExpressionRE.test(name);
            if (subexpression) {
                let lonely = isLonelyRule(name, parser);
                if (lonely)
                    return preDecorationText + getBNFBody(name, parser) + decorationText;
                return preDecorationText + '(' + getBNFBody(name, parser) + ')' + decorationText;
            }
            return name.replace(preDecorationRE, preDecorationText);
        }
        else {
            return name.source
                .replace(/\\(?:x|u)([a-zA-Z0-9]+)/g, '#x$1')
                .replace(/\[\\(?:x|u)([a-zA-Z0-9]+)-\\(?:x|u)([a-zA-Z0-9]+)\]/g, '[#x$1-#x$2]');
        }
    }
    /// Returns true if the rule is a string literal or regular expression without a descendant tree
    function isLonelyRule(name, parser) {
        let rule = Parser_1.findRuleByName(name, parser);
        return (rule &&
            rule.bnf.length == 1 &&
            rule.bnf[0].length == 1 &&
            (rule.bnf[0][0] instanceof RegExp || rule.bnf[0][0][0] == '"' || rule.bnf[0][0][0] == "'"));
    }
    function getBNFChoice(rules, parser) {
        return rules.map(x => getBNFRule(x, parser)).join(' ');
    }
    function getBNFBody(name, parser) {
        let rule = Parser_1.findRuleByName(name, parser);
        if (rule)
            return rule.bnf.map(x => getBNFChoice(x, parser)).join(' | ');
        return 'RULE_NOT_FOUND {' + name + '}';
    }
    function emit(parser) {
        let acumulator = [];
        parser.grammarRules.forEach(l => {
            if (!/^%/.test(l.name)) {
                let recover = l.recover ? ' { recoverUntil=' + l.recover + ' }' : '';
                acumulator.push(l.name + ' ::= ' + getBNFBody(l.name, parser) + recover);
            }
        });
        return acumulator.join('\n');
    }
    BNF.emit = emit;
    let subitems = 0;
    function restar(total, resta) {
        console.log('reberia restar ' + resta + ' a ' + total);
        throw new Error('Difference not supported yet');
    }
    function convertRegex(txt) {
        return new RegExp(txt
            .replace(/#x([a-zA-Z0-9]{4})/g, '\\u$1')
            .replace(/#x([a-zA-Z0-9]{3})/g, '\\u0$1')
            .replace(/#x([a-zA-Z0-9]{2})/g, '\\x$1')
            .replace(/#x([a-zA-Z0-9]{1})/g, '\\x0$1'));
    }
    function getSubItems(tmpRules, seq, parentName, parentAttributes) {
        let anterior = null;
        let bnfSeq = [];
        seq.children.forEach((x, i) => {
            if (x.type == 'Minus') {
                restar(anterior, x);
            }
            let decoration = seq.children[i + 1];
            decoration = (decoration && decoration.type == 'PrimaryDecoration' && decoration.text) || '';
            let preDecoration = '';
            if (anterior && anterior.type == 'PrimaryPreDecoration') {
                preDecoration = anterior.text;
            }
            let pinned = preDecoration == '~' ? 1 : undefined;
            if (pinned) {
                preDecoration = '';
            }
            switch (x.type) {
                case 'SubItem':
                    let name = '%' + (parentName + subitems++);
                    createRule(tmpRules, x, name, parentAttributes);
                    bnfSeq.push(preDecoration + name + decoration);
                    break;
                case 'NCName':
                    bnfSeq.push(preDecoration + x.text + decoration);
                    break;
                case 'StringLiteral':
                    if (decoration || preDecoration || !/^['"/()a-zA-Z0-9&_.:=,+*\-\^\\]+$/.test(x.text)) {
                        bnfSeq.push(preDecoration + x.text + decoration);
                    }
                    else {
                        for (const c of x.text.slice(1, -1)) {
                            if (parentAttributes && parentAttributes["ignoreCase"] == "true" && /[a-zA-Z]/.test(c)) {
                                bnfSeq.push(new RegExp("[" + c.toUpperCase() + c.toLowerCase() + "]"));
                            }
                            else {
                                bnfSeq.push(new RegExp(Parser_1.escapeRegExp(c)));
                            }
                        }
                    }
                    break;
                case 'CharCode':
                case 'CharClass':
                    if (decoration || preDecoration) {
                        let newRule = {
                            name: '%' + (parentName + subitems++),
                            bnf: [[convertRegex(x.text)]],
                            pinned
                        };
                        tmpRules.push(newRule);
                        bnfSeq.push(preDecoration + newRule.name + decoration);
                    }
                    else {
                        bnfSeq.push(convertRegex(x.text));
                    }
                    break;
                case 'PrimaryPreDecoration':
                case 'PrimaryDecoration':
                    break;
                default:
                    throw new Error(' HOW SHOULD I PARSE THIS? ' + x.type + ' -> ' + JSON.stringify(x.text));
            }
            anterior = x;
        });
        return bnfSeq;
    }
    function createRule(tmpRules, token, name, parentAttributes = undefined) {
        let attrNode = token.children.filter(x => x.type == 'Attributes')[0];
        let attributes = {};
        if (attrNode) {
            attrNode.children.forEach(x => {
                let name = x.children.filter(x => x.type == 'NCName')[0].text;
                if (name in attributes) {
                    throw new TokenError_1.TokenError('Duplicated attribute ' + name, x);
                }
                else {
                    attributes[name] = x.children.filter(x => x.type == 'AttributeValue')[0].text;
                }
            });
        }
        let bnf = token.children.filter(x => x.type == 'SequenceOrDifference').map(s => getSubItems(tmpRules, s, name, parentAttributes ? parentAttributes : attributes));
        let rule = {
            name,
            bnf
        };
        if (name.indexOf('%') == 0)
            rule.fragment = true;
        if (attributes['recoverUntil']) {
            rule.recover = attributes['recoverUntil'];
            if (rule.bnf.length > 1)
                throw new TokenError_1.TokenError('only one-option productions are suitable for error recovering', token);
        }
        if ('pin' in attributes) {
            let num = parseInt(attributes['pin']);
            if (!isNaN(num)) {
                rule.pinned = num;
            }
            if (rule.bnf.length > 1)
                throw new TokenError_1.TokenError('only one-option productions are suitable for pinning', token);
        }
        if ('ws' in attributes) {
            rule.implicitWs = attributes['ws'] != 'explicit';
        }
        else {
            rule.implicitWs = null;
        }
        rule.fragment = rule.fragment || attributes['fragment'] == 'true';
        rule.simplifyWhenOneChildren = attributes['simplifyWhenOneChildren'] == 'true';
        tmpRules.push(rule);
    }
    function getRules(source, parser = BNF.defaultParser) {
        let ast = parser.getAST(source);
        if (!ast)
            throw new Error('Could not parse ' + source);
        if (ast.errors && ast.errors.length) {
            throw ast.errors[0];
        }
        let implicitWs = null;
        let attrNode = ast.children.filter(x => x.type == 'Attributes')[0];
        let attributes = {};
        if (attrNode) {
            attrNode.children.forEach(x => {
                let name = x.children.filter(x => x.type == 'NCName')[0].text;
                if (name in attributes) {
                    throw new TokenError_1.TokenError('Duplicated attribute ' + name, x);
                }
                else {
                    attributes[name] = x.children.filter(x => x.type == 'AttributeValue')[0].text;
                }
            });
        }
        implicitWs = attributes['ws'] == 'implicit';
        let tmpRules = [];
        ast.children.filter(x => x.type == 'Production').map((x) => {
            let name = x.children.filter(x => x.type == 'NCName')[0].text;
            createRule(tmpRules, x, name);
        });
        tmpRules.forEach(rule => {
            if (rule.implicitWs === null)
                rule.implicitWs = implicitWs;
        });
        return tmpRules;
    }
    BNF.getRules = getRules;
    function Transform(source, subParser = BNF.defaultParser) {
        return getRules(source.join(''), subParser);
    }
    BNF.Transform = Transform;
    class Parser extends Parser_1.Parser {
        constructor(source, options) {
            const subParser = options && options.debugRulesParser === true ? new Parser_1.Parser(BNF.RULES, { debug: true }) : BNF.defaultParser;
            super(getRules(source, subParser), options);
        }
        emitSource() {
            return emit(this);
        }
    }
    BNF.Parser = Parser;
})(BNF || (BNF = {}));
exports.default = BNF;

});

var Grammars = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

Object.defineProperty(exports, "BNF", { enumerable: true, get: function () { return BNF_1.default; } });

Object.defineProperty(exports, "W3C", { enumerable: true, get: function () { return W3CEBNF.default; } });

Object.defineProperty(exports, "Custom", { enumerable: true, get: function () { return Custom.default; } });

});

var dist = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

Object.defineProperty(exports, "Parser", { enumerable: true, get: function () { return Parser_1.Parser; } });

Object.defineProperty(exports, "TokenError", { enumerable: true, get: function () { return TokenError_1.TokenError; } });
exports.Grammars = Grammars;

});

var calc = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFormula = exports.parseAndApply = exports.Source = exports.Formula = void 0;












/**
 * W3C grammar describing a valid formula at the bottom of a table.
 *
 * The library being used to parse the formula does not suport EBNF, only BNF,
 * so W3C syntax was used in order to get access to extended features.
 *
 * The parser generates a PEG parser, whic is not able to handle ambiguity. The
 * order of constructions is significant.
 * See https://github.com/lys-lang/node-ebnf/issues/34
 */
const parserGrammar = `
tblfm_line   ::= "<!-- TBLFM: " formula_list " -->"
formula_list ::= formula ( "::" formula_list )?
formula      ::= destination "=" source display_directive?

source           ::= range | source_reference | single_param_function_call | conditional_function_call | algebraic_operation | float | real
range            ::= source_reference ".." source_reference
source_reference ::= absolute_reference | relative_reference
destination      ::= range | absolute_reference

relative_reference ::= (relative_row | absolute_row) (relative_column | absolute_column) | relative_row | relative_column
relative_row ::= "@" ( "-" | "+" ) int
relative_column ::= "$" ( "-" | "+" ) int

absolute_reference ::= absolute_row absolute_column | absolute_row | absolute_column
absolute_row ::= "@" ( "I" | "<" | ">" | int )
absolute_column ::= "$" ( "<" | ">" | int )

single_param_function_call ::= single_param_function "(" source ")" 
single_param_function      ::= "mean" | "sum"

conditional_function_call ::= "if(" predicate "," " "? source "," " "? source ")"
predicate                 ::= source_without_range conditional_operator source_without_range
source_without_range      ::= source_reference | single_param_function_call | conditional_function_call | algebraic_operation | float | real
conditional_operator      ::= ">" | "<" | ">=" | "<=" | "==" | "!="

algebraic_operation ::= "(" source " "? algebraic_operator " "? source ")"
algebraic_operator  ::= "+" | "-" | "*" | "/"

display_directive        ::= ";" display_directive_option
display_directive_option ::= formatting_directive
formatting_directive     ::= "%." int "f"

float ::= "-"? int "." int
real ::= "-"? int
int  ::= [0-9]+
`;
class Formula {
    constructor(ast, table) {
        this.merge = (table) => this.destination.merge(this.source, table);
        let formatter = new display_directive.DefaultFormatter();
        if (ast.children.length === 3) {
            formatter = new display_directive.DisplayDirective(ast.children[2]);
        }
        const destination$1 = destination.newDestination(ast.children[0], table, formatter);
        if (destination$1.isErr()) {
            throw destination$1.error;
        }
        this.destination = destination$1.value;
        this.source = new Source(ast.children[1], table);
    }
}
exports.Formula = Formula;
class Source {
    constructor(ast, table) {
        /**
         * getValue returns the evaluated value for this source recursively.
         */
        this.getValue = (table, currentCell) => this.locationDescriptor.getValue(table, currentCell);
        if (ast.type !== 'source' && ast.type !== 'source_without_range') {
            throw Error('Invalid AST token type of ' + ast.type);
        }
        if (ast.children.length !== 1) {
            throw Error('Unexpected children length in Source');
        }
        const paramChild = ast.children[0];
        const vp = newValueProvider(paramChild, table);
        if (vp.isErr()) {
            throw vp.error;
        }
        this.locationDescriptor = vp.value;
    }
}
exports.Source = Source;
const newValueProvider = (ast, table) => {
    try {
        switch (ast.type) {
            case 'range':
                return neverthrow.ok(new range$1.Range(ast, table));
            case 'source_reference':
                const lengthError = ast_utils.checkChildLength(ast, 1);
                if (lengthError) {
                    return neverthrow.err(lengthError);
                }
                return neverthrow.ok(new reference.Reference(ast.children[0], table));
            case 'single_param_function_call':
                return neverthrow.ok(new single_param_function.SingleParamFunctionCall(ast, table));
            case 'conditional_function_call':
                return neverthrow.ok(new conditional_function.ConditionalFunctionCall(ast, table));
            case 'algebraic_operation':
                return neverthrow.ok(new algebraic_operation.AlgebraicOperation(ast, table));
            case 'real':
                return neverthrow.ok(new constant.Constant(ast, table));
            case 'float':
                return neverthrow.ok(new constant.Constant(ast, table));
            default:
                throw Error('Unrecognized valueProvider type ' + ast.type);
        }
    }
    catch (error) {
        return neverthrow.err(error);
    }
};
const parseAndApply = (formulaLines, table) => {
    // Parse each formula line, flattening the resulting lists of formulas into a
    // single list, but returning an error if any formula fails to parse.
    const formulas = formulaLines.reduce((prev, formulaLine) => prev.andThen((currentFormulas) => {
        const newFormulas = exports.parseFormula(formulaLine, table);
        if (newFormulas.isErr()) {
            return newFormulas;
        }
        return neverthrow.ok(lodash.concat(newFormulas.value, currentFormulas));
    }), neverthrow.ok([]));
    // If there is no error,
    return formulas.andThen((innerFormulas) => 
    // for each formula
    innerFormulas.reduceRight((prevValue, formula) => 
    // If the previous formula didn't give an error
    prevValue.andThen((prevTable) => 
    // attempt to apply this formula to the table and return the result
    formula.merge(prevTable)), 
    // Start with the current table state
    neverthrow.ok(table)));
};
exports.parseAndApply = parseAndApply;
/**
 * Parse the provided line, returning any found formulas. A single line may
 * contain zero or more formulas.
 *
 * @param line A line of the form `<!-- TBFM: {FORMULA}::{FORMULA} -->`
 */
const parseFormula = (line, table) => {
    const parser = new dist.Grammars.W3C.Parser(parserGrammar);
    const ast = parser.getAST(line);
    // TODO: Determine how to return errors when a formula-like string
    //       is not actually a valid formula.
    if (!ast) {
        return neverthrow.err(new Error(`Formula '${line}' could not be parsed`));
    }
    const typeError = ast_utils.checkType(ast, 'tblfm_line');
    if (typeError) {
        return neverthrow.err(typeError);
    }
    const lengthError = ast_utils.checkChildLength(ast, 1);
    if (lengthError) {
        return neverthrow.err(lengthError);
    }
    let unparsedFormulas = ast.children[0].children;
    const formulas = [];
    try {
        do {
            formulas.push(new Formula(unparsedFormulas[0], table));
            if (unparsedFormulas.length > 1 && unparsedFormulas[1].type === 'formula_list') {
                unparsedFormulas = unparsedFormulas[1].children;
            }
            else {
                unparsedFormulas = [];
            }
        } while (unparsedFormulas.length > 0);
        return neverthrow.ok(formulas);
    }
    catch (error) {
        return neverthrow.err(error);
    }
};
exports.parseFormula = parseFormula;
});

var table = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;




/**
 * A `Table` object represents a table.
 *
 * @private
 */
class Table {
    /**
     * Creates a new `Table` object.
     *
     * @param rows - An array of rows that the table contains.
     * @param formulas - An array of formulas attached to the table.
     */
    constructor(rows) {
        this._rows = rows.slice();
    }
    /**
     * Gets the number of rows in the table.
     *
     * @returns The number of rows.
     */
    getHeight() {
        return this._rows.length;
    }
    /**
     * Gets the maximum width of the rows in the table.
     *
     * @returns The maximum width of the rows.
     */
    getWidth() {
        return this._rows
            .map((row) => row.getWidth())
            .reduce((x, y) => Math.max(x, y), 0);
    }
    /**
     * Gets the width of the header row.
     * Assumes that it is called on a valid table with a header row.
     *
     * @returns The width of the header row
     */
    getHeaderWidth() {
        return this._rows[0].getWidth();
    }
    /**
     * Gets the rows that the table contains.
     *
     * @returns An array of the rows.
     */
    getRows() {
        return this._rows.slice();
    }
    /**
     * Gets the delimiter row of the table.
     *
     * @returns The delimiter row; `undefined` if there is not delimiter row.
     */
    getDelimiterRow() {
        const row = this._rows[1];
        if (row === undefined) {
            return undefined;
        }
        if (row.isDelimiter()) {
            return row;
        }
        return undefined;
    }
    /**
     * Gets a cell at the specified index.
     *
     * @param rowIndex - Row index of the cell.
     * @param columnIndex - Column index of the cell.
     * @returns The cell at the specified index; `undefined` if not found.
     */
    getCellAt(rowIndex, columnIndex) {
        const row = this._rows[rowIndex];
        if (row === undefined) {
            return undefined;
        }
        return row.getCellAt(columnIndex);
    }
    /**
     * Gets the cell at the focus.
     *
     * @param focus - Focus object.
     * @returns The cell at the focus; `undefined` if not found.
     */
    getFocusedCell(focus) {
        return this.getCellAt(focus.row, focus.column);
    }
    /**
     * Converts the table to an array of text representations of the rows.
     *
     * @returns An array of text representations of the rows.
     */
    toLines() {
        return this._rows.map((row) => row.toText());
    }
    /**
     * Sets a cell in the table to a new value, returning a copy of the table
     * with the modified value.
     *
     * If an invalid index is provided, the table will be unchanged.
     */
    setCellAt(rowIndex, columnIndex, value) {
        const rows = this.getRows(); // a copy
        rows[rowIndex] = rows[rowIndex].setCellAt(columnIndex, value);
        return new Table(rows);
    }
    /**
     * Computes a focus from a point in the text editor.
     *
     * @param pos - A point in the text editor.
     * @param rowOffset - The row index where the table starts in the text editor.
     * @returns A focus object that corresponds to the specified point;
     * `undefined` if the row index is out of bounds.
     */
    focusOfPosition(pos, rowOffset) {
        const rowIndex = pos.row - rowOffset;
        const row = this._rows[rowIndex];
        if (row === undefined) {
            return undefined;
        }
        if (pos.column < row.marginLeft.length + 1) {
            return new focus.Focus(rowIndex, -1, pos.column);
        }
        const cellWidths = row.getCells().map((cell) => cell.rawContent.length);
        let columnPos = row.marginLeft.length + 1; // left margin + a pipe
        let columnIndex = 0;
        for (; columnIndex < cellWidths.length; columnIndex++) {
            if (columnPos + cellWidths[columnIndex] + 1 > pos.column) {
                break;
            }
            columnPos += cellWidths[columnIndex] + 1;
        }
        const offset = pos.column - columnPos;
        return new focus.Focus(rowIndex, columnIndex, offset);
    }
    /**
     * Computes a position in the text editor from a focus.
     *
     * @param focus - A focus object.
     * @param rowOffset - The row index where the table starts in the text editor.
     * @returns A position in the text editor that corresponds to the focus;
     * `undefined` if the focused row  is out of the table.
     */
    positionOfFocus(focus, rowOffset) {
        const row = this._rows[focus.row];
        if (row === undefined) {
            return undefined;
        }
        const rowPos = focus.row + rowOffset;
        if (focus.column < 0) {
            return new point.Point(rowPos, focus.offset);
        }
        const cellWidths = row.getCells().map((cell) => cell.rawContent.length);
        const maxIndex = Math.min(focus.column, cellWidths.length);
        let columnPos = row.marginLeft.length + 1;
        for (let columnIndex = 0; columnIndex < maxIndex; columnIndex++) {
            columnPos += cellWidths[columnIndex] + 1;
        }
        return new point.Point(rowPos, columnPos + focus.offset);
    }
    /**
     * Computes a selection range from a focus.
     *
     * @param focus - A focus object.
     * @param rowOffset - The row index where the table starts in the text editor.
     * @returns A range to be selected that corresponds to the focus;
     * `undefined` if the focus does not specify any cell or the specified cell is empty.
     */
    selectionRangeOfFocus(focus, rowOffset) {
        const row = this._rows[focus.row];
        if (row === undefined) {
            return undefined;
        }
        const cell = row.getCellAt(focus.column);
        if (cell === undefined) {
            return undefined;
        }
        if (cell.content === '') {
            return undefined;
        }
        const rowPos = focus.row + rowOffset;
        const cellWidths = row.getCells().map((cell) => cell.rawContent.length);
        let columnPos = row.marginLeft.length + 1;
        for (let columnIndex = 0; columnIndex < focus.column; columnIndex++) {
            columnPos += cellWidths[columnIndex] + 1;
        }
        columnPos += cell.paddingLeft;
        return new range.Range(new point.Point(rowPos, columnPos), new point.Point(rowPos, columnPos + cell.content.length));
    }
    /**
     * Evaluate the formula, applying the results to this table and returning the
     * changes as a new table.
     */
    applyFormulas(formulaLines) {
        return calc.parseAndApply(formulaLines, this);
    }
}
exports.Table = Table;
});

var parser = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.readTable = exports._marginRegex = exports.marginRegexSrc = exports._readRow = exports._splitCells = void 0;



/**
 * Splits a text into cells.
 *
 * @private
 */
const _splitCells = (text) => {
    const cells = [];
    let buf = '';
    let rest = text;
    while (rest !== '') {
        switch (rest[0]) {
            case '`':
                // read code span
                {
                    const startMatch = rest.match(/^`*/);
                    if (startMatch === null) {
                        // case statement ensures first char is a ` and we cannot get here.
                        // This just satisfies the compiler.
                        break;
                    }
                    const start = startMatch[0];
                    let buf1 = start;
                    let rest1 = rest.substr(start.length);
                    let closed = false;
                    while (rest1 !== '') {
                        if (rest1[0] === '`') {
                            const endMatch = rest1.match(/^`*/);
                            if (endMatch === null) {
                                // case statement ensures first char is a ` and we cannot get here.
                                // This just satisfies the compiler.
                                break;
                            }
                            const end = endMatch[0];
                            buf1 += end;
                            rest1 = rest1.substr(end.length);
                            if (end.length === start.length) {
                                closed = true;
                                break;
                            }
                        }
                        else {
                            buf1 += rest1[0];
                            rest1 = rest1.substr(1);
                        }
                    }
                    if (closed) {
                        buf += buf1;
                        rest = rest1;
                    }
                    else {
                        buf += '`';
                        rest = rest.substr(1);
                    }
                }
                break;
            case '\\':
                // escape next character
                if (rest.length >= 2) {
                    buf += rest.substr(0, 2);
                    rest = rest.substr(2);
                }
                else {
                    buf += '\\';
                    rest = rest.substr(1);
                }
                break;
            case '[':
                // If we encounter a renamed [[link|Link]], automatically escape the pipe
                buf += '[';
                rest = rest.substr(1);
                if (/\[[^\\|\]]+\|[^|\]]+]]/.test(rest)) {
                    const idx = rest.indexOf('|');
                    buf += rest.slice(0, idx);
                    buf += '\\|';
                    rest = rest.substr(idx + 1);
                }
                break;
            case '|':
                // flush buffer
                cells.push(buf);
                buf = '';
                rest = rest.substr(1);
                break;
            default:
                buf += rest[0];
                rest = rest.substr(1);
        }
    }
    cells.push(buf);
    return cells;
};
exports._splitCells = _splitCells;
/**
 * Reads a table row.
 *
 * @private
 * @param text - A text.
 * @param [leftMarginRegex=/^\s*$/] - A regular expression object that matches left margin.
 */
const _readRow = (text, leftMarginRegex = /^\s*$/) => {
    let cells = exports._splitCells(text);
    let marginLeft;
    if (cells.length > 0 && leftMarginRegex.test(cells[0])) {
        marginLeft = cells[0];
        cells = cells.slice(1);
    }
    else {
        marginLeft = '';
    }
    let marginRight;
    if (cells.length > 1 && /^\s*$/.test(cells[cells.length - 1])) {
        marginRight = cells[cells.length - 1];
        cells = cells.slice(0, cells.length - 1);
    }
    else {
        marginRight = '';
    }
    return new tableRow.TableRow(cells.map((cell) => new tableCell.TableCell(cell)), marginLeft, marginRight);
};
exports._readRow = _readRow;
/**
 * Creates a regex source string of margin character class.
 *
 * @private
 * @param chars - A set of additional margin characters.
 * A pipe `|`, a backslash `\`, and a backquote will be ignored.
 * @return A regex source string.
 */
const marginRegexSrc = (chars) => {
    let cs = '';
    // for (const c chars.values()) {
    chars.forEach((c) => {
        if (c !== '|' && c !== '\\' && c !== '`') {
            cs += `\\u{${c.codePointAt(0).toString(16)}}`;
        }
    });
    return `[\\s${cs}]*`;
};
exports.marginRegexSrc = marginRegexSrc;
/**
 * Creates a regular expression object that matches margin of tables.
 *
 * @private
 * @param chars - A set of additional margin characters.
 * A pipe `|`, a backslash `\`, and a backquote will be ignored.
 * @return An regular expression object that matches margin of tables.
 */
const _marginRegex = (chars) => new RegExp(`^${exports.marginRegexSrc(chars)}$`, 'u');
exports._marginRegex = _marginRegex;
/**
 * Reads a table from lines.
 *
 * @private
 * @param lines - An array of texts, each text represents a row.
 * @param options - An object containing options for parsing.
 * @returns The table read from the lines.
 */
const readTable = (lines, options) => {
    const leftMarginRegex = exports._marginRegex(options.leftMarginChars);
    return new table.Table(lines.map((line) => exports._readRow(line, leftMarginRegex)));
};
exports.readTable = readTable;
});

/*
 * Generated by script. DO NOT EDIT!
 *
 * The part between BEGIN and END is derived from Unicode Data Files
 * and provided under Unicode, Inc. License Agreement.
 */
/* BEGIN */
var defs = [
    [0, 31, "N"],
    [32, 126, "Na"],
    [127, 160, "N"],
    [161, 161, "A"],
    [162, 163, "Na"],
    [164, 164, "A"],
    [165, 166, "Na"],
    [167, 168, "A"],
    [169, 169, "N"],
    [170, 170, "A"],
    [171, 171, "N"],
    [172, 172, "Na"],
    [173, 174, "A"],
    [175, 175, "Na"],
    [176, 180, "A"],
    [181, 181, "N"],
    [182, 186, "A"],
    [187, 187, "N"],
    [188, 191, "A"],
    [192, 197, "N"],
    [198, 198, "A"],
    [199, 207, "N"],
    [208, 208, "A"],
    [209, 214, "N"],
    [215, 216, "A"],
    [217, 221, "N"],
    [222, 225, "A"],
    [226, 229, "N"],
    [230, 230, "A"],
    [231, 231, "N"],
    [232, 234, "A"],
    [235, 235, "N"],
    [236, 237, "A"],
    [238, 239, "N"],
    [240, 240, "A"],
    [241, 241, "N"],
    [242, 243, "A"],
    [244, 246, "N"],
    [247, 250, "A"],
    [251, 251, "N"],
    [252, 252, "A"],
    [253, 253, "N"],
    [254, 254, "A"],
    [255, 256, "N"],
    [257, 257, "A"],
    [258, 272, "N"],
    [273, 273, "A"],
    [274, 274, "N"],
    [275, 275, "A"],
    [276, 282, "N"],
    [283, 283, "A"],
    [284, 293, "N"],
    [294, 295, "A"],
    [296, 298, "N"],
    [299, 299, "A"],
    [300, 304, "N"],
    [305, 307, "A"],
    [308, 311, "N"],
    [312, 312, "A"],
    [313, 318, "N"],
    [319, 322, "A"],
    [323, 323, "N"],
    [324, 324, "A"],
    [325, 327, "N"],
    [328, 331, "A"],
    [332, 332, "N"],
    [333, 333, "A"],
    [334, 337, "N"],
    [338, 339, "A"],
    [340, 357, "N"],
    [358, 359, "A"],
    [360, 362, "N"],
    [363, 363, "A"],
    [364, 461, "N"],
    [462, 462, "A"],
    [463, 463, "N"],
    [464, 464, "A"],
    [465, 465, "N"],
    [466, 466, "A"],
    [467, 467, "N"],
    [468, 468, "A"],
    [469, 469, "N"],
    [470, 470, "A"],
    [471, 471, "N"],
    [472, 472, "A"],
    [473, 473, "N"],
    [474, 474, "A"],
    [475, 475, "N"],
    [476, 476, "A"],
    [477, 592, "N"],
    [593, 593, "A"],
    [594, 608, "N"],
    [609, 609, "A"],
    [610, 707, "N"],
    [708, 708, "A"],
    [709, 710, "N"],
    [711, 711, "A"],
    [712, 712, "N"],
    [713, 715, "A"],
    [716, 716, "N"],
    [717, 717, "A"],
    [718, 719, "N"],
    [720, 720, "A"],
    [721, 727, "N"],
    [728, 731, "A"],
    [732, 732, "N"],
    [733, 733, "A"],
    [734, 734, "N"],
    [735, 735, "A"],
    [736, 767, "N"],
    [768, 879, "A"],
    [880, 912, "N"],
    [913, 929, "A"],
    [930, 930, "N"],
    [931, 937, "A"],
    [938, 944, "N"],
    [945, 961, "A"],
    [962, 962, "N"],
    [963, 969, "A"],
    [970, 1024, "N"],
    [1025, 1025, "A"],
    [1026, 1039, "N"],
    [1040, 1103, "A"],
    [1104, 1104, "N"],
    [1105, 1105, "A"],
    [1106, 4351, "N"],
    [4352, 4447, "W"],
    [4448, 8207, "N"],
    [8208, 8208, "A"],
    [8209, 8210, "N"],
    [8211, 8214, "A"],
    [8215, 8215, "N"],
    [8216, 8217, "A"],
    [8218, 8219, "N"],
    [8220, 8221, "A"],
    [8222, 8223, "N"],
    [8224, 8226, "A"],
    [8227, 8227, "N"],
    [8228, 8231, "A"],
    [8232, 8239, "N"],
    [8240, 8240, "A"],
    [8241, 8241, "N"],
    [8242, 8243, "A"],
    [8244, 8244, "N"],
    [8245, 8245, "A"],
    [8246, 8250, "N"],
    [8251, 8251, "A"],
    [8252, 8253, "N"],
    [8254, 8254, "A"],
    [8255, 8307, "N"],
    [8308, 8308, "A"],
    [8309, 8318, "N"],
    [8319, 8319, "A"],
    [8320, 8320, "N"],
    [8321, 8324, "A"],
    [8325, 8360, "N"],
    [8361, 8361, "H"],
    [8362, 8363, "N"],
    [8364, 8364, "A"],
    [8365, 8450, "N"],
    [8451, 8451, "A"],
    [8452, 8452, "N"],
    [8453, 8453, "A"],
    [8454, 8456, "N"],
    [8457, 8457, "A"],
    [8458, 8466, "N"],
    [8467, 8467, "A"],
    [8468, 8469, "N"],
    [8470, 8470, "A"],
    [8471, 8480, "N"],
    [8481, 8482, "A"],
    [8483, 8485, "N"],
    [8486, 8486, "A"],
    [8487, 8490, "N"],
    [8491, 8491, "A"],
    [8492, 8530, "N"],
    [8531, 8532, "A"],
    [8533, 8538, "N"],
    [8539, 8542, "A"],
    [8543, 8543, "N"],
    [8544, 8555, "A"],
    [8556, 8559, "N"],
    [8560, 8569, "A"],
    [8570, 8584, "N"],
    [8585, 8585, "A"],
    [8586, 8591, "N"],
    [8592, 8601, "A"],
    [8602, 8631, "N"],
    [8632, 8633, "A"],
    [8634, 8657, "N"],
    [8658, 8658, "A"],
    [8659, 8659, "N"],
    [8660, 8660, "A"],
    [8661, 8678, "N"],
    [8679, 8679, "A"],
    [8680, 8703, "N"],
    [8704, 8704, "A"],
    [8705, 8705, "N"],
    [8706, 8707, "A"],
    [8708, 8710, "N"],
    [8711, 8712, "A"],
    [8713, 8714, "N"],
    [8715, 8715, "A"],
    [8716, 8718, "N"],
    [8719, 8719, "A"],
    [8720, 8720, "N"],
    [8721, 8721, "A"],
    [8722, 8724, "N"],
    [8725, 8725, "A"],
    [8726, 8729, "N"],
    [8730, 8730, "A"],
    [8731, 8732, "N"],
    [8733, 8736, "A"],
    [8737, 8738, "N"],
    [8739, 8739, "A"],
    [8740, 8740, "N"],
    [8741, 8741, "A"],
    [8742, 8742, "N"],
    [8743, 8748, "A"],
    [8749, 8749, "N"],
    [8750, 8750, "A"],
    [8751, 8755, "N"],
    [8756, 8759, "A"],
    [8760, 8763, "N"],
    [8764, 8765, "A"],
    [8766, 8775, "N"],
    [8776, 8776, "A"],
    [8777, 8779, "N"],
    [8780, 8780, "A"],
    [8781, 8785, "N"],
    [8786, 8786, "A"],
    [8787, 8799, "N"],
    [8800, 8801, "A"],
    [8802, 8803, "N"],
    [8804, 8807, "A"],
    [8808, 8809, "N"],
    [8810, 8811, "A"],
    [8812, 8813, "N"],
    [8814, 8815, "A"],
    [8816, 8833, "N"],
    [8834, 8835, "A"],
    [8836, 8837, "N"],
    [8838, 8839, "A"],
    [8840, 8852, "N"],
    [8853, 8853, "A"],
    [8854, 8856, "N"],
    [8857, 8857, "A"],
    [8858, 8868, "N"],
    [8869, 8869, "A"],
    [8870, 8894, "N"],
    [8895, 8895, "A"],
    [8896, 8977, "N"],
    [8978, 8978, "A"],
    [8979, 8985, "N"],
    [8986, 8987, "W"],
    [8988, 9000, "N"],
    [9001, 9002, "W"],
    [9003, 9192, "N"],
    [9193, 9196, "W"],
    [9197, 9199, "N"],
    [9200, 9200, "W"],
    [9201, 9202, "N"],
    [9203, 9203, "W"],
    [9204, 9311, "N"],
    [9312, 9449, "A"],
    [9450, 9450, "N"],
    [9451, 9547, "A"],
    [9548, 9551, "N"],
    [9552, 9587, "A"],
    [9588, 9599, "N"],
    [9600, 9615, "A"],
    [9616, 9617, "N"],
    [9618, 9621, "A"],
    [9622, 9631, "N"],
    [9632, 9633, "A"],
    [9634, 9634, "N"],
    [9635, 9641, "A"],
    [9642, 9649, "N"],
    [9650, 9651, "A"],
    [9652, 9653, "N"],
    [9654, 9655, "A"],
    [9656, 9659, "N"],
    [9660, 9661, "A"],
    [9662, 9663, "N"],
    [9664, 9665, "A"],
    [9666, 9669, "N"],
    [9670, 9672, "A"],
    [9673, 9674, "N"],
    [9675, 9675, "A"],
    [9676, 9677, "N"],
    [9678, 9681, "A"],
    [9682, 9697, "N"],
    [9698, 9701, "A"],
    [9702, 9710, "N"],
    [9711, 9711, "A"],
    [9712, 9724, "N"],
    [9725, 9726, "W"],
    [9727, 9732, "N"],
    [9733, 9734, "A"],
    [9735, 9736, "N"],
    [9737, 9737, "A"],
    [9738, 9741, "N"],
    [9742, 9743, "A"],
    [9744, 9747, "N"],
    [9748, 9749, "W"],
    [9750, 9755, "N"],
    [9756, 9756, "A"],
    [9757, 9757, "N"],
    [9758, 9758, "A"],
    [9759, 9791, "N"],
    [9792, 9792, "A"],
    [9793, 9793, "N"],
    [9794, 9794, "A"],
    [9795, 9799, "N"],
    [9800, 9811, "W"],
    [9812, 9823, "N"],
    [9824, 9825, "A"],
    [9826, 9826, "N"],
    [9827, 9829, "A"],
    [9830, 9830, "N"],
    [9831, 9834, "A"],
    [9835, 9835, "N"],
    [9836, 9837, "A"],
    [9838, 9838, "N"],
    [9839, 9839, "A"],
    [9840, 9854, "N"],
    [9855, 9855, "W"],
    [9856, 9874, "N"],
    [9875, 9875, "W"],
    [9876, 9885, "N"],
    [9886, 9887, "A"],
    [9888, 9888, "N"],
    [9889, 9889, "W"],
    [9890, 9897, "N"],
    [9898, 9899, "W"],
    [9900, 9916, "N"],
    [9917, 9918, "W"],
    [9919, 9919, "A"],
    [9920, 9923, "N"],
    [9924, 9925, "W"],
    [9926, 9933, "A"],
    [9934, 9934, "W"],
    [9935, 9939, "A"],
    [9940, 9940, "W"],
    [9941, 9953, "A"],
    [9954, 9954, "N"],
    [9955, 9955, "A"],
    [9956, 9959, "N"],
    [9960, 9961, "A"],
    [9962, 9962, "W"],
    [9963, 9969, "A"],
    [9970, 9971, "W"],
    [9972, 9972, "A"],
    [9973, 9973, "W"],
    [9974, 9977, "A"],
    [9978, 9978, "W"],
    [9979, 9980, "A"],
    [9981, 9981, "W"],
    [9982, 9983, "A"],
    [9984, 9988, "N"],
    [9989, 9989, "W"],
    [9990, 9993, "N"],
    [9994, 9995, "W"],
    [9996, 10023, "N"],
    [10024, 10024, "W"],
    [10025, 10044, "N"],
    [10045, 10045, "A"],
    [10046, 10059, "N"],
    [10060, 10060, "W"],
    [10061, 10061, "N"],
    [10062, 10062, "W"],
    [10063, 10066, "N"],
    [10067, 10069, "W"],
    [10070, 10070, "N"],
    [10071, 10071, "W"],
    [10072, 10101, "N"],
    [10102, 10111, "A"],
    [10112, 10132, "N"],
    [10133, 10135, "W"],
    [10136, 10159, "N"],
    [10160, 10160, "W"],
    [10161, 10174, "N"],
    [10175, 10175, "W"],
    [10176, 10213, "N"],
    [10214, 10221, "Na"],
    [10222, 10628, "N"],
    [10629, 10630, "Na"],
    [10631, 11034, "N"],
    [11035, 11036, "W"],
    [11037, 11087, "N"],
    [11088, 11088, "W"],
    [11089, 11092, "N"],
    [11093, 11093, "W"],
    [11094, 11097, "A"],
    [11098, 11903, "N"],
    [11904, 11929, "W"],
    [11930, 11930, "N"],
    [11931, 12019, "W"],
    [12020, 12031, "N"],
    [12032, 12245, "W"],
    [12246, 12271, "N"],
    [12272, 12283, "W"],
    [12284, 12287, "N"],
    [12288, 12288, "F"],
    [12289, 12350, "W"],
    [12351, 12352, "N"],
    [12353, 12438, "W"],
    [12439, 12440, "N"],
    [12441, 12543, "W"],
    [12544, 12548, "N"],
    [12549, 12591, "W"],
    [12592, 12592, "N"],
    [12593, 12686, "W"],
    [12687, 12687, "N"],
    [12688, 12771, "W"],
    [12772, 12783, "N"],
    [12784, 12830, "W"],
    [12831, 12831, "N"],
    [12832, 12871, "W"],
    [12872, 12879, "A"],
    [12880, 19903, "W"],
    [19904, 19967, "N"],
    [19968, 42124, "W"],
    [42125, 42127, "N"],
    [42128, 42182, "W"],
    [42183, 43359, "N"],
    [43360, 43388, "W"],
    [43389, 44031, "N"],
    [44032, 55203, "W"],
    [55204, 57343, "N"],
    [57344, 63743, "A"],
    [63744, 64255, "W"],
    [64256, 65023, "N"],
    [65024, 65039, "A"],
    [65040, 65049, "W"],
    [65050, 65071, "N"],
    [65072, 65106, "W"],
    [65107, 65107, "N"],
    [65108, 65126, "W"],
    [65127, 65127, "N"],
    [65128, 65131, "W"],
    [65132, 65280, "N"],
    [65281, 65376, "F"],
    [65377, 65470, "H"],
    [65471, 65473, "N"],
    [65474, 65479, "H"],
    [65480, 65481, "N"],
    [65482, 65487, "H"],
    [65488, 65489, "N"],
    [65490, 65495, "H"],
    [65496, 65497, "N"],
    [65498, 65500, "H"],
    [65501, 65503, "N"],
    [65504, 65510, "F"],
    [65511, 65511, "N"],
    [65512, 65518, "H"],
    [65519, 65532, "N"],
    [65533, 65533, "A"],
    [65534, 94175, "N"],
    [94176, 94180, "W"],
    [94181, 94191, "N"],
    [94192, 94193, "W"],
    [94194, 94207, "N"],
    [94208, 100343, "W"],
    [100344, 100351, "N"],
    [100352, 101589, "W"],
    [101590, 101631, "N"],
    [101632, 101640, "W"],
    [101641, 110591, "N"],
    [110592, 110878, "W"],
    [110879, 110927, "N"],
    [110928, 110930, "W"],
    [110931, 110947, "N"],
    [110948, 110951, "W"],
    [110952, 110959, "N"],
    [110960, 111355, "W"],
    [111356, 126979, "N"],
    [126980, 126980, "W"],
    [126981, 127182, "N"],
    [127183, 127183, "W"],
    [127184, 127231, "N"],
    [127232, 127242, "A"],
    [127243, 127247, "N"],
    [127248, 127277, "A"],
    [127278, 127279, "N"],
    [127280, 127337, "A"],
    [127338, 127343, "N"],
    [127344, 127373, "A"],
    [127374, 127374, "W"],
    [127375, 127376, "A"],
    [127377, 127386, "W"],
    [127387, 127404, "A"],
    [127405, 127487, "N"],
    [127488, 127490, "W"],
    [127491, 127503, "N"],
    [127504, 127547, "W"],
    [127548, 127551, "N"],
    [127552, 127560, "W"],
    [127561, 127567, "N"],
    [127568, 127569, "W"],
    [127570, 127583, "N"],
    [127584, 127589, "W"],
    [127590, 127743, "N"],
    [127744, 127776, "W"],
    [127777, 127788, "N"],
    [127789, 127797, "W"],
    [127798, 127798, "N"],
    [127799, 127868, "W"],
    [127869, 127869, "N"],
    [127870, 127891, "W"],
    [127892, 127903, "N"],
    [127904, 127946, "W"],
    [127947, 127950, "N"],
    [127951, 127955, "W"],
    [127956, 127967, "N"],
    [127968, 127984, "W"],
    [127985, 127987, "N"],
    [127988, 127988, "W"],
    [127989, 127991, "N"],
    [127992, 128062, "W"],
    [128063, 128063, "N"],
    [128064, 128064, "W"],
    [128065, 128065, "N"],
    [128066, 128252, "W"],
    [128253, 128254, "N"],
    [128255, 128317, "W"],
    [128318, 128330, "N"],
    [128331, 128334, "W"],
    [128335, 128335, "N"],
    [128336, 128359, "W"],
    [128360, 128377, "N"],
    [128378, 128378, "W"],
    [128379, 128404, "N"],
    [128405, 128406, "W"],
    [128407, 128419, "N"],
    [128420, 128420, "W"],
    [128421, 128506, "N"],
    [128507, 128591, "W"],
    [128592, 128639, "N"],
    [128640, 128709, "W"],
    [128710, 128715, "N"],
    [128716, 128716, "W"],
    [128717, 128719, "N"],
    [128720, 128722, "W"],
    [128723, 128724, "N"],
    [128725, 128727, "W"],
    [128728, 128746, "N"],
    [128747, 128748, "W"],
    [128749, 128755, "N"],
    [128756, 128764, "W"],
    [128765, 128991, "N"],
    [128992, 129003, "W"],
    [129004, 129291, "N"],
    [129292, 129338, "W"],
    [129339, 129339, "N"],
    [129340, 129349, "W"],
    [129350, 129350, "N"],
    [129351, 129400, "W"],
    [129401, 129401, "N"],
    [129402, 129483, "W"],
    [129484, 129484, "N"],
    [129485, 129535, "W"],
    [129536, 129647, "N"],
    [129648, 129652, "W"],
    [129653, 129655, "N"],
    [129656, 129658, "W"],
    [129659, 129663, "N"],
    [129664, 129670, "W"],
    [129671, 129679, "N"],
    [129680, 129704, "W"],
    [129705, 129711, "N"],
    [129712, 129718, "W"],
    [129719, 129727, "N"],
    [129728, 129730, "W"],
    [129731, 129743, "N"],
    [129744, 129750, "W"],
    [129751, 131071, "N"],
    [131072, 196605, "W"],
    [196606, 196607, "N"],
    [196608, 262141, "W"],
    [262142, 917759, "N"],
    [917760, 917999, "A"],
    [918000, 983039, "N"],
    [983040, 1048573, "A"],
    [1048574, 1048575, "N"],
    [1048576, 1114109, "A"],
    [1114110, 1114111, "N"],
];
/* END */
var version = "13.0.0";

/**
 * Gets the EAW property of a code point.
 * @param codePoint Code point
 * @return The EAW property of the code point
 */
function getEAWOfCodePoint(codePoint) {
    var min = 0;
    var max = defs.length - 1;
    while (min !== max) {
        var i = min + ((max - min) >> 1);
        var _a = defs[i], start = _a[0], end = _a[1], prop = _a[2];
        if (codePoint < start) {
            max = i - 1;
        }
        else if (codePoint > end) {
            min = i + 1;
        }
        else {
            return prop;
        }
    }
    return defs[min][2];
}
/**
 * Gets the EAW property of a character.
 * @param str Character string
 * @param pos Character position (in code unit) (default = 0)
 * @return The EAW property of the character
 * @example
 * import { getEAW } from "meaw";
 *
 * // Narrow
 * assert(getEAW("A") === "Na");
 * // Wide
 * assert(getEAW("あ") === "W");
 * assert(getEAW("安") === "W");
 * assert(getEAW("🍣") === "W");
 * // Fullwidth
 * assert(getEAW("Ａ") === "F");
 * // Halfwidth
 * assert(getEAW("ｱ") === "H");
 * // Ambiguous
 * assert(getEAW("∀") === "A");
 * assert(getEAW("→") === "A");
 * assert(getEAW("Ω") === "A");
 * assert(getEAW("Я") === "A");
 * // Neutral
 * assert(getEAW("ℵ") === "N");
 *
 * // character position (in code unit) can be specified
 * assert(getEAW("ℵAあＡｱ∀", 2) === "W");
 */
function getEAW(str, pos) {
    if (pos === void 0) { pos = 0; }
    var codePoint = str.codePointAt(pos);
    if (codePoint === undefined) {
        return undefined;
    }
    return getEAWOfCodePoint(codePoint);
}

var defaultWidths = {
    N: 1,
    Na: 1,
    W: 2,
    F: 2,
    H: 1,
    A: 1,
};
/**
 * Computes the width of a string based on the EAW properties of the characters.
 * By default, characters with property Wide (W) or Fullwidth (F) are treated as wide (= 2)
 * and others are as narrow (= 1).
 * @param str Character string
 * @param widths An object that maps EAW properties to character widths
 * @return The computed width
 * @example
 * import { computeWidth } from "meaw";
 *
 * assert(computeWidth("Aあ🍣Ω") === 6);
 * // character width for each EAW property can be customized
 * assert(computeWidth("Aあ🍣Ω", { "A": 2 }) === 7);
 */
function computeWidth(str, widths) {
    var width = 0;
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- char cannot be empty
        var eaw = getEAW(char);
        width += (widths && widths[eaw]) || defaultWidths[eaw];
    }
    return width;
}

var lib = /*#__PURE__*/Object.freeze({
    __proto__: null,
    computeWidth: computeWidth,
    eawVersion: version,
    getEAW: getEAW
});

var meaw_1 = /*@__PURE__*/getAugmentedNamespace(lib);

var formatter = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveColumn = exports.deleteColumn = exports.insertColumn = exports.moveRow = exports.deleteRow = exports.insertRow = exports.alterAlignment = exports.formatTable = exports.FormatType = exports._weakFormatTable = exports._formatTable = exports._padText = exports._alignText = exports._computeTextWidth = exports.completeTable = exports._extendArray = exports._delimiterText = void 0;





/**
 * Creates a delimiter text.
 *
 * @private
 * @param width - Width of the horizontal bar of delimiter.
 * @throws {Error} Unknown alignment.
 */
const _delimiterText = (alignment$1, width) => {
    const bar = '-'.repeat(width);
    switch (alignment$1) {
        case alignment.Alignment.NONE:
            return ` ${bar} `;
        case alignment.Alignment.LEFT:
            return `:${bar} `;
        case alignment.Alignment.RIGHT:
            return ` ${bar}:`;
        case alignment.Alignment.CENTER:
            return `:${bar}:`;
        default:
            throw new Error('Unknown alignment: ' + alignment$1);
    }
};
exports._delimiterText = _delimiterText;
/**
 * Extends array size.
 *
 * @private
 * @param callback - Callback function to fill newly created cells.
 * @returns Extended array.
 */
const _extendArray = (arr, size, callback) => {
    const extended = arr.slice();
    for (let i = arr.length; i < size; i++) {
        extended.push(callback(i, arr));
    }
    return extended;
};
exports._extendArray = _extendArray;
/**
 * Completes a table by adding missing delimiter and cells.
 * After completion, all rows in the table have the same width.
 *
 * @private
 *
 * @throws {Error} Empty table.
 */
const completeTable = (table$1, options) => {
    const tableHeight = table$1.getHeight();
    const tableWidth = table$1.getWidth();
    if (tableHeight === 0) {
        throw new Error('Empty table');
    }
    const rows = table$1.getRows();
    const newRows = [];
    // header
    const headerRow = rows[0];
    const headerCells = headerRow.getCells();
    newRows.push(new tableRow.TableRow(exports._extendArray(headerCells, tableWidth, (j) => new tableCell.TableCell(j === headerCells.length ? headerRow.marginRight : '')), headerRow.marginLeft, headerCells.length < tableWidth ? '' : headerRow.marginRight));
    // delimiter
    const delimiterRow = table$1.getDelimiterRow();
    if (delimiterRow !== undefined) {
        const delimiterCells = delimiterRow.getCells();
        newRows.push(new tableRow.TableRow(exports._extendArray(delimiterCells, tableWidth, (j) => new tableCell.TableCell(exports._delimiterText(alignment.Alignment.NONE, j === delimiterCells.length
            ? Math.max(options.minDelimiterWidth, delimiterRow.marginRight.length - 2)
            : options.minDelimiterWidth))), delimiterRow.marginLeft, delimiterCells.length < tableWidth ? '' : delimiterRow.marginRight));
    }
    else {
        newRows.push(new tableRow.TableRow(exports._extendArray([], tableWidth, () => new tableCell.TableCell(exports._delimiterText(alignment.Alignment.NONE, options.minDelimiterWidth))), '', ''));
    }
    // body
    for (let i = delimiterRow !== undefined ? 2 : 1; i < tableHeight; i++) {
        const row = rows[i];
        const cells = row.getCells();
        newRows.push(new tableRow.TableRow(exports._extendArray(cells, tableWidth, (j) => new tableCell.TableCell(j === cells.length ? row.marginRight : '')), row.marginLeft, cells.length < tableWidth ? '' : row.marginRight));
    }
    return {
        table: new table.Table(newRows),
        delimiterInserted: delimiterRow === undefined,
    };
};
exports.completeTable = completeTable;
/**
 * Calculates the width of a text based on characters' EAW properties.
 *
 * @private
 *
 * @returns Calculated width of the text.
 */
const _computeTextWidth = (text, options) => {
    const normalized = options.normalize ? text.normalize('NFC') : text;
    let w = 0;
    for (const char of normalized) {
        if (options.wideChars.has(char)) {
            w += 2;
            continue;
        }
        if (options.narrowChars.has(char)) {
            w += 1;
            continue;
        }
        switch (meaw_1.getEAW(char)) {
            case 'F':
            case 'W':
                w += 2;
                break;
            case 'A':
                w += options.ambiguousAsWide ? 2 : 1;
                break;
            default:
                w += 1;
        }
    }
    return w;
};
exports._computeTextWidth = _computeTextWidth;
/**
 * Returns a aligned cell content.
 *
 * @throws {Error} Unknown alignment.
 * @throws {Error} Unexpected default alignment.
 */
const _alignText = (text, width, alignment$1, options) => {
    const space = width - exports._computeTextWidth(text, options);
    if (space < 0) {
        return text;
    }
    switch (alignment$1) {
        case alignment.Alignment.NONE:
            throw new Error('Unexpected default alignment');
        case alignment.Alignment.LEFT:
            return text + ' '.repeat(space);
        case alignment.Alignment.RIGHT:
            return ' '.repeat(space) + text;
        case alignment.Alignment.CENTER:
            return (' '.repeat(Math.floor(space / 2)) +
                text +
                ' '.repeat(Math.ceil(space / 2)));
        default:
            throw new Error('Unknown alignment: ' + alignment$1);
    }
};
exports._alignText = _alignText;
/**
 * Just adds one space paddings to both sides of a text.
 *
 * @private
 */
const _padText = (text) => ` ${text} `;
exports._padText = _padText;
/**
 * Formats a table.
 *
 * @private
 */
const _formatTable = (table$1, options) => {
    const tableHeight = table$1.getHeight();
    const tableWidth = table$1.getWidth();
    if (tableHeight === 0) {
        return {
            table: table$1,
            marginLeft: '',
        };
    }
    const marginLeft = table$1.getRows()[0].marginLeft;
    if (tableWidth === 0) {
        const rows = new Array(tableHeight).fill(new tableRow.TableRow([], marginLeft, ''));
        return {
            table: new table.Table(rows),
            marginLeft,
        };
    }
    // compute column widths
    const delimiterRow = table$1.getDelimiterRow();
    const columnWidths = new Array(tableWidth).fill(0);
    if (delimiterRow !== undefined) {
        const delimiterRowWidth = delimiterRow.getWidth();
        for (let j = 0; j < delimiterRowWidth; j++) {
            columnWidths[j] = options.minDelimiterWidth;
        }
    }
    for (let i = 0; i < tableHeight; i++) {
        if (delimiterRow !== undefined && i === 1) {
            continue;
        }
        const row = table$1.getRows()[i];
        const rowWidth = row.getWidth();
        for (let j = 0; j < rowWidth; j++) {
            columnWidths[j] = Math.max(columnWidths[j], exports._computeTextWidth(row.getCellAt(j).content, options.textWidthOptions));
        }
    }
    // get column alignments
    const alignments = delimiterRow !== undefined
        ? exports._extendArray(delimiterRow.getCells().map((cell) => cell.getAlignment()), tableWidth, 
        // Safe conversion because DefaultAlignment is a subset of Alignment
        () => options.defaultAlignment)
        : new Array(tableWidth).fill(options.defaultAlignment);
    // format
    const rows = [];
    // header
    const headerRow = table$1.getRows()[0];
    rows.push(new tableRow.TableRow(headerRow
        .getCells()
        .map((cell, j) => new tableCell.TableCell(exports._padText(exports._alignText(cell.content, columnWidths[j], options.headerAlignment === alignment.HeaderAlignment.FOLLOW
        ? alignments[j] === alignment.Alignment.NONE
            ? options.defaultAlignment
            : alignments[j]
        : options.headerAlignment, options.textWidthOptions)))), marginLeft, ''));
    // delimiter
    if (delimiterRow !== undefined) {
        rows.push(new tableRow.TableRow(delimiterRow
            .getCells()
            .map((cell, j) => new tableCell.TableCell(exports._delimiterText(alignments[j], columnWidths[j]))), marginLeft, ''));
    }
    // body
    for (let i = delimiterRow !== undefined ? 2 : 1; i < tableHeight; i++) {
        const row = table$1.getRows()[i];
        rows.push(new tableRow.TableRow(row
            .getCells()
            .map((cell, j) => new tableCell.TableCell(exports._padText(exports._alignText(cell.content, columnWidths[j], alignments[j] === alignment.Alignment.NONE
            ? options.defaultAlignment
            : alignments[j], options.textWidthOptions)))), marginLeft, ''));
    }
    return {
        table: new table.Table(rows),
        marginLeft,
    };
};
exports._formatTable = _formatTable;
/**
 * Formats a table weakly.
 * Rows are formatted independently to each other, cell contents are just trimmed and not aligned.
 * This is useful when using a non-monospaced font or dealing with wide tables.
 *
 * @private
 */
const _weakFormatTable = (table$1, options) => {
    const tableHeight = table$1.getHeight();
    const tableWidth = table$1.getWidth();
    if (tableHeight === 0) {
        return {
            table: table$1,
            marginLeft: '',
        };
    }
    const marginLeft = table$1.getRows()[0].marginLeft;
    if (tableWidth === 0) {
        const rows = new Array(tableHeight).fill(new tableRow.TableRow([], marginLeft, ''));
        return {
            table: new table.Table(rows),
            marginLeft,
        };
    }
    const delimiterRow = table$1.getDelimiterRow();
    // format
    const rows = [];
    // header
    const headerRow = table$1.getRows()[0];
    rows.push(new tableRow.TableRow(headerRow.getCells().map((cell) => new tableCell.TableCell(exports._padText(cell.content))), marginLeft, ''));
    // delimiter
    if (delimiterRow !== undefined) {
        rows.push(new tableRow.TableRow(delimiterRow
            .getCells()
            .map((cell) => new tableCell.TableCell(exports._delimiterText(cell.getAlignment(), options.minDelimiterWidth))), marginLeft, ''));
    }
    // body
    for (let i = delimiterRow !== undefined ? 2 : 1; i < tableHeight; i++) {
        const row = table$1.getRows()[i];
        rows.push(new tableRow.TableRow(row.getCells().map((cell) => new tableCell.TableCell(exports._padText(cell.content))), marginLeft, ''));
    }
    return {
        table: new table.Table(rows),
        marginLeft,
    };
};
exports._weakFormatTable = _weakFormatTable;
/**
 * Represents table format type.
 *
 * - `FormatType.NORMAL` - Formats table normally.
 * - `FormatType.WEAK` - Formats table weakly, rows are formatted independently to each other, cell
 *   contents are just trimmed and not aligned.
 */
var FormatType;
(function (FormatType) {
    FormatType["NORMAL"] = "normal";
    FormatType["WEAK"] = "weak";
})(FormatType = exports.FormatType || (exports.FormatType = {}));
/**
 * Formats a table.
 *
 * @private
 *
 * @throws {Error} Unknown format type.
 */
const formatTable = (table, options) => {
    switch (options.formatType) {
        case FormatType.NORMAL:
            return exports._formatTable(table, options);
        case FormatType.WEAK:
            return exports._weakFormatTable(table, options);
        default:
            throw new Error('Unknown format type: ' + options.formatType);
    }
};
exports.formatTable = formatTable;
/**
 * Alters a column's alignment of a table.
 *
 * @private
 * @param table - A completed non-empty table.
 * @param columnIndex - An index of the column.
 * @param alignment - A new alignment of the column.
 * @param options - An object containing options for completion.
 * @returns {Table} An altered table object.
 * If the column index is out of range, returns the original table.
 */
const alterAlignment = (table$1, columnIndex, alignment, options) => {
    if (table$1.getHeight() < 1) {
        return table$1;
    }
    const delimiterRow = table$1.getRows()[1];
    if (columnIndex < 0 || delimiterRow.getWidth() - 1 < columnIndex) {
        return table$1;
    }
    const delimiterCells = delimiterRow.getCells();
    delimiterCells[columnIndex] = new tableCell.TableCell(exports._delimiterText(alignment, options.minDelimiterWidth));
    const rows = table$1.getRows();
    rows[1] = new tableRow.TableRow(delimiterCells, delimiterRow.marginLeft, delimiterRow.marginRight);
    return new table.Table(rows);
};
exports.alterAlignment = alterAlignment;
/**
 * Inserts a row to a table.
 * The row is always inserted after the header and the delimiter rows, even if the index specifies
 * the header or the delimiter.
 *
 * @private
 * @param table - A completed non-empty table.
 * @param rowIndex - An row index at which a new row will be inserted.
 * @param row - A table row to be inserted.
 * @returns An altered table obejct.
 */
const insertRow = (table$1, rowIndex, row) => {
    const rows = table$1.getRows();
    rows.splice(Math.max(rowIndex, 2), 0, row);
    return new table.Table(rows);
};
exports.insertRow = insertRow;
/**
 * Deletes a row in a table.
 * If the index specifies the header row, the cells are emptied but the row will not be removed.
 * If the index specifies the delimiter row, it does nothing.
 *
 * @private
 * @param table - A completed non-empty table.
 * @param rowIndex - An index of the row to be deleted.
 * @returns An altered table obejct.
 */
const deleteRow = (table$1, rowIndex) => {
    if (rowIndex === 1) {
        return table$1;
    }
    const rows = table$1.getRows();
    if (rowIndex === 0) {
        const headerRow = rows[0];
        rows[0] = new tableRow.TableRow(new Array(headerRow.getWidth()).fill(new tableCell.TableCell('')), headerRow.marginLeft, headerRow.marginRight);
    }
    else {
        rows.splice(rowIndex, 1);
    }
    return new table.Table(rows);
};
exports.deleteRow = deleteRow;
/**
 * Moves a row at the index to the specified destination.
 *
 * @private
 * @param table - A completed non-empty table.
 * @param rowIndex - Index of the row to be moved.
 * @param destIndex - Index of the destination.
 * @returns An altered table object.
 */
const moveRow = (table$1, rowIndex, destIndex) => {
    if (rowIndex <= 1 || destIndex <= 1 || rowIndex === destIndex) {
        return table$1;
    }
    const rows = table$1.getRows();
    const row = rows[rowIndex];
    rows.splice(rowIndex, 1);
    rows.splice(destIndex, 0, row);
    return new table.Table(rows);
};
exports.moveRow = moveRow;
/**
 * Inserts a column to a table.
 *
 * @private
 * @param table - A completed non-empty table.
 * @param columnIndex - An column index at which the new column will be inserted.
 * @param column - An array of cells.
 * @param options - An object containing options for completion.
 * @returns An altered table obejct.
 */
const insertColumn = (table$1, columnIndex, column, options) => {
    const rows = table$1.getRows();
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const cells = rows[i].getCells();
        const cell = i === 1
            ? new tableCell.TableCell(exports._delimiterText(alignment.Alignment.NONE, options.minDelimiterWidth))
            : column[i > 1 ? i - 1 : i];
        cells.splice(columnIndex, 0, cell);
        rows[i] = new tableRow.TableRow(cells, row.marginLeft, row.marginRight);
    }
    return new table.Table(rows);
};
exports.insertColumn = insertColumn;
/**
 * Deletes a column in a table.
 * If there will be no columns after the deletion, the cells are emptied but the column will not be
 * removed.
 *
 * @private
 * @param table - A completed non-empty table.
 * @param columnIndex - An index of the column to be deleted.
 * @param options - An object containing options for completion.
 * @returns An altered table object.
 */
const deleteColumn = (table$1, columnIndex, options) => {
    const rows = table$1.getRows();
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        let cells = row.getCells();
        if (cells.length <= 1) {
            cells = [
                new tableCell.TableCell(i === 1
                    ? exports._delimiterText(alignment.Alignment.NONE, options.minDelimiterWidth)
                    : ''),
            ];
        }
        else {
            cells.splice(columnIndex, 1);
        }
        rows[i] = new tableRow.TableRow(cells, row.marginLeft, row.marginRight);
    }
    return new table.Table(rows);
};
exports.deleteColumn = deleteColumn;
/**
 * Moves a column at the index to the specified destination.
 *
 * @private
 * @param table - A completed non-empty table.
 * @param columnIndex - Index of the column to be moved.
 * @param destIndex - Index of the destination.
 * @returns An altered table object.
 */
const moveColumn = (table$1, columnIndex, destIndex) => {
    if (columnIndex === destIndex) {
        return table$1;
    }
    const rows = table$1.getRows();
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const cells = row.getCells();
        const cell = cells[columnIndex];
        cells.splice(columnIndex, 1);
        cells.splice(destIndex, 0, cell);
        rows[i] = new tableRow.TableRow(cells, row.marginLeft, row.marginRight);
    }
    return new table.Table(rows);
};
exports.moveColumn = moveColumn;
});

var editScript = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortestEditScript = exports.applyEditScript = exports._applyCommand = exports.Delete = exports.Insert = void 0;
/**
 * The `Insert` class represents an insertion of a line.
 *
 * @private
 */
class Insert {
    /**
     * Creats a new `Insert` object.
     *
     * @param row - Row index, starts from `0`.
     * @param line - A string to be inserted at the row.
     */
    constructor(row, line) {
        this.row = row;
        this.line = line;
    }
}
exports.Insert = Insert;
/**
 * The `Delete` class represents a deletion of a line.
 *
 * @private
 */
class Delete {
    /**
     * Creates a new `Delete` object.
     *
     * @param row - Row index, starts from `0`.
     */
    constructor(row) {
        this.row = row;
    }
}
exports.Delete = Delete;
/**
 * Applies a command to the text editor.
 *
 * @private
 * @param textEditor - An interface to the text editor.
 * @param command - A command.
 * @param rowOffset - Offset to the row index of the command.
 */
const _applyCommand = (textEditor, command, rowOffset) => {
    if (command instanceof Insert) {
        textEditor.insertLine(rowOffset + command.row, command.line);
    }
    else if (command instanceof Delete) {
        textEditor.deleteLine(rowOffset + command.row);
    }
    else {
        throw new Error('Unknown command');
    }
};
exports._applyCommand = _applyCommand;
/**
 * Apply an edit script (array of commands) to the text editor.
 *
 * @private
 * @param textEditor - An interface to the text editor.
 * @param script - An array of commands.
 * The commands are applied sequentially in the order of the array.
 * @param rowOffset - Offset to the row index of the commands.
 */
const applyEditScript = (textEditor, script, rowOffset) => {
    for (const command of script) {
        exports._applyCommand(textEditor, command, rowOffset);
    }
};
exports.applyEditScript = applyEditScript;
/**
 * Linked list used to remember edit script.
 *
 * @private
 */
class IList {
    get car() {
        throw new Error('Not implemented');
    }
    get cdr() {
        throw new Error('Not implemented');
    }
    isEmpty() {
        throw new Error('Not implemented');
    }
    unshift(value) {
        return new Cons(value, this);
    }
    toArray() {
        const arr = [];
        let rest = this;
        while (!rest.isEmpty()) {
            arr.push(rest.car);
            rest = rest.cdr;
        }
        return arr;
    }
}
/**
 * @private
 */
class Nil extends IList {
    constructor() {
        super();
    }
    get car() {
        throw new Error('Empty list');
    }
    get cdr() {
        throw new Error('Empty list');
    }
    isEmpty() {
        return true;
    }
}
/**
 * @private
 */
class Cons extends IList {
    constructor(car, cdr) {
        super();
        this._car = car;
        this._cdr = cdr;
    }
    get car() {
        return this._car;
    }
    get cdr() {
        return this._cdr;
    }
    isEmpty() {
        return false;
    }
}
/**
 * Computes the shortest edit script between two arrays of strings.
 *
 * @private
 * @param from - An array of string the edit starts from.
 * @param to - An array of string the edit goes to.
 * @param [limit=-1] - Upper limit of edit distance to be searched.
 * If negative, there is no limit.
 * @returns The shortest edit script that turns `from` into `to`;
 * `undefined` if no edit script is found in the given range.
 */
const shortestEditScript = (from, to, limit = -1) => {
    const fromLen = from.length;
    const toLen = to.length;
    const maxd = limit >= 0 ? Math.min(limit, fromLen + toLen) : fromLen + toLen;
    const mem = new Array(Math.min(maxd, fromLen) + Math.min(maxd, toLen) + 1);
    const offset = Math.min(maxd, fromLen);
    for (let d = 0; d <= maxd; d++) {
        const mink = d <= fromLen ? -d : d - 2 * fromLen;
        const maxk = d <= toLen ? d : -d + 2 * toLen;
        for (let k = mink; k <= maxk; k += 2) {
            let i;
            let script;
            if (d === 0) {
                i = 0;
                script = new Nil();
            }
            else if (k === -d) {
                i = mem[offset + k + 1].i + 1;
                script = mem[offset + k + 1].script.unshift(new Delete(i + k));
            }
            else if (k === d) {
                i = mem[offset + k - 1].i;
                script = mem[offset + k - 1].script.unshift(new Insert(i + k - 1, to[i + k - 1]));
            }
            else {
                const vi = mem[offset + k + 1].i + 1;
                const hi = mem[offset + k - 1].i;
                if (vi > hi) {
                    i = vi;
                    script = mem[offset + k + 1].script.unshift(new Delete(i + k));
                }
                else {
                    i = hi;
                    script = mem[offset + k - 1].script.unshift(new Insert(i + k - 1, to[i + k - 1]));
                }
            }
            while (i < fromLen && i + k < toLen && from[i] === to[i + k]) {
                i += 1;
            }
            if (k === toLen - fromLen && i === fromLen) {
                return script.toArray().reverse();
            }
            mem[offset + k] = { i, script };
        }
    }
    return undefined;
};
exports.shortestEditScript = shortestEditScript;
});

var textEditor = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITextEditor = void 0;
/**
 * The `ITextEditor` represents an interface to a text editor.
 *
 * @interface
 */
class ITextEditor {
    /**
     * Gets the current cursor position.
     *
     * @returns A point object that represents the cursor position.
     */
    getCursorPosition() {
        throw new Error('Not implemented: getCursorPosition');
    }
    /**
     * Sets the cursor position to a specified one.
     */
    setCursorPosition(pos) {
        throw new Error('Not implemented: setCursorPosition');
    }
    /**
     * Sets the selection range.
     * This method also expects the cursor position to be moved as the end of the selection range.
     */
    setSelectionRange(range) {
        throw new Error('Not implemented: setSelectionRange');
    }
    /**
     * Gets the last row index of the text editor.
     */
    getLastRow() {
        throw new Error('Not implemented: getLastRow');
    }
    /**
     * Checks if the editor accepts a table at a row to be editted.
     * It should return `false` if, for example, the row is in a code block (not Markdown).
     *
     * @param row - A row index in the text editor.
     * @returns `true` if the table at the row can be editted.
     */
    acceptsTableEdit(row) {
        throw new Error('Not implemented: acceptsTableEdit');
    }
    /**
     * Gets a line string at a row.
     *
     * @param row - Row index, starts from `0`.
     * @returns The line at the specified row.
     * The line must not contain an EOL like `"\n"` or `"\r"`.
     */
    getLine(row) {
        throw new Error('Not implemented: getLine');
    }
    /**
     * Inserts a line at a specified row.
     *
     * @param row - Row index, starts from `0`.
     * @param line - A string to be inserted.
     * This must not contain an EOL like `"\n"` or `"\r"`.
     */
    insertLine(row, line) {
        throw new Error('Not implemented: insertLine');
    }
    /**
     * Deletes a line at a specified row.
     *
     * @param row - Row index, starts from `0`.
     */
    deleteLine(row) {
        throw new Error('Not implemented: deleteLine');
    }
    /**
     * Replace lines in a specified range.
     *
     * @param startRow - Start row index, starts from `0`.
     * @param endRow - End row index.
     * Lines from `startRow` to `endRow - 1` is replaced.
     * @param lines - An array of string.
     * Each strings must not contain an EOL like `"\n"` or `"\r"`.
     */
    replaceLines(startRow, endRow, lines) {
        throw new Error('Not implemented: replaceLines');
    }
    /**
     * Batches multiple operations as a single undo/redo step.
     *
     * @param func - A callback function that executes some operations on the text editor.
     */
    transact(func) {
        throw new Error('Not implemented: transact');
    }
}
exports.ITextEditor = ITextEditor;
});

var options = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultOptions = exports.optionsWithDefaults = void 0;


const DEFAULT_TEXT_WIDTH_OPTIONS = {
    normalize: true,
    wideChars: new Set(),
    narrowChars: new Set(),
    ambiguousAsWide: false,
};
const DEFAULT_OPTIONS = {
    leftMarginChars: new Set(),
    formatType: formatter.FormatType.NORMAL,
    minDelimiterWidth: 3,
    defaultAlignment: alignment.DefaultAlignment.LEFT,
    headerAlignment: alignment.HeaderAlignment.FOLLOW,
    smartCursor: false,
};
/**
 * Create an Options object for the formatter.
 * The default values are used for options that are not specified.
 *
 * The available options and default values are listed below.
 *
 * | property name       | type                              | description                                             | default value            |
 * | ------------------- | --------------------------------- | ------------------------------------------------------- | ------------------------ |
 * | `leftMarginChars`   | {@link Set}&lt;{@link string}&gt; | A set of additional left margin characters.             | `new Set()`              |
 * | `formatType`        | {@link FormatType}                | Format type, normal or weak.                            | `FormatType.NORMAL`      |
 * | `minDelimiterWidth` | {@link number}                    | Minimum width of delimiters.                            | `3`                      |
 * | `defaultAlignment`  | {@link DefaultAlignment}          | Default alignment of columns.                           | `DefaultAlignment.LEFT`  |
 * | `headerAlignment`   | {@link HeaderAlignment}           | Alignment of header cells.                              | `HeaderAlignment.FOLLOW` |
 * | `textWidthOptions`  | {@link TextWidthOptions}          | An object containing options for computing text widths. |                          |
 * | `smartCursor`       | {@link boolean}                   | Enables "Smart Cursor" feature.                         | `false`                  |
 *
 * The available options for `textWidthOptions` are the following ones.
 *
 * | property name     | type                              | description                                           | default value |
 * | ----------------- | --------------------------------- | ----------------------------------------------------- | ------------- |
 * | `normalize`       | {@link boolean}                   | Normalizes texts before computing text widths.        | `true`        |
 * | `wideChars`       | {@link Set}&lt;{@link string}&gt; | A set of characters that should be treated as wide.   | `new Set()`   |
 * | `narrowChars`     | {@link Set}&lt;{@link string}&gt; | A set of characters that should be treated as narrow. | `new Set()`   |
 * | `ambiguousAsWide` | {@link boolean}                   | Treats East Asian Ambiguous characters as wide.       | `false`       |
 *
 */
const optionsWithDefaults = (options) => (Object.assign(Object.assign(Object.assign({}, DEFAULT_OPTIONS), options), { textWidthOptions: options.textWidthOptions
        ? Object.assign(Object.assign({}, DEFAULT_TEXT_WIDTH_OPTIONS), options.textWidthOptions) : DEFAULT_TEXT_WIDTH_OPTIONS }));
exports.optionsWithDefaults = optionsWithDefaults;
exports.defaultOptions = exports.optionsWithDefaults({});
});

var tableEditor = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableEditor = exports._computeNewOffset = exports._createIsTableFormulaRegex = exports._createIsTableRowRegex = exports.SortOrder = void 0;









var SortOrder;
(function (SortOrder) {
    SortOrder["Ascending"] = "ascending";
    SortOrder["Descending"] = "descending";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
/**
 * Creates a regular expression object that matches a table row.
 *
 * @param leftMarginChars - A set of additional left margin characters.
 * A pipe `|`, a backslash `\`, and a backquote will be ignored.
 * @returns A regular expression object that matches a table row.
 */
const _createIsTableRowRegex = (leftMarginChars) => new RegExp(`^${parser.marginRegexSrc(leftMarginChars)}\\|`, 'u');
exports._createIsTableRowRegex = _createIsTableRowRegex;
const _createIsTableFormulaRegex = (leftMarginChars) => new RegExp(`^${parser.marginRegexSrc(leftMarginChars)}<!-- ?.+-->$`, 'u');
exports._createIsTableFormulaRegex = _createIsTableFormulaRegex;
/**
 * Computes new focus offset from information of completed and formatted tables.
 *
 * @private
 * @param focus - A focus.
 * @param table - A completed but not formatted table with original cell contents.
 * @param formatted - Information of the formatted table.
 * @param moved - Indicates whether the focus position is moved by a command or not.
 */
const _computeNewOffset = (focus, table, formatted, moved) => {
    if (moved) {
        const formattedFocusedCell = formatted.table.getFocusedCell(focus);
        if (formattedFocusedCell !== undefined) {
            return formattedFocusedCell.computeRawOffset(0);
        }
        return focus.column < 0 ? formatted.marginLeft.length : 0;
    }
    const focusedCell = table.getFocusedCell(focus);
    const formattedFocusedCell = formatted.table.getFocusedCell(focus);
    if (focusedCell !== undefined && formattedFocusedCell !== undefined) {
        const contentOffset = Math.min(focusedCell.computeContentOffset(focus.offset), formattedFocusedCell.content.length);
        return formattedFocusedCell.computeRawOffset(contentOffset);
    }
    return focus.column < 0 ? formatted.marginLeft.length : 0;
};
exports._computeNewOffset = _computeNewOffset;
/**
 * The `TableEditor` class is at the center of the markdown-table-editor.
 * When a command is executed, it reads a table from the text editor, does some operation on the
 * table, and then apply the result to the text editor.
 *
 * To use this class, the text editor (or an interface to it) must implement {@link ITextEditor}.
 */
class TableEditor {
    /**
     * Creates a new table editor instance.
     *
     * @param textEditor - A text editor interface.
     */
    constructor(textEditor) {
        this._textEditor = textEditor;
        // smart cursor
        this._scActive = false;
    }
    /**
     * Resets the smart cursor.
     * Call this method when the table editor is inactivated.
     */
    resetSmartCursor() {
        this._scActive = false;
    }
    /**
     * Checks if the cursor is in a table row. Returns false if the cursor is in a
     * table formula row (see cursorIsInTableFormula).
     * This is useful to check whether the table editor should be activated or not.
     *
     * @returns `true` if the cursor is in a table row.
     */
    cursorIsInTable(options) {
        const re = exports._createIsTableRowRegex(options.leftMarginChars);
        const pos = this._textEditor.getCursorPosition();
        return (this._textEditor.acceptsTableEdit(pos.row) &&
            re.test(this._textEditor.getLine(pos.row)));
    }
    /**
     * Checks if the cursor is in a formula row below a table.
     * This is useful to check whether the table editor should be activated or not.
     *
     * @returns `true` if the cursor is in a formula row.
     */
    cursorIsInTableFormula(options) {
        const formulaRe = exports._createIsTableFormulaRegex(options.leftMarginChars);
        const pos = this._textEditor.getCursorPosition();
        return (this._textEditor.acceptsTableEdit(pos.row) &&
            formulaRe.test(this._textEditor.getLine(pos.row)));
    }
    /**
     * Finds a table under the current cursor position.
     *
     * @returns undefined if there is no table or the determined focus is invalid.
     */
    _findTable(options) {
        const re = exports._createIsTableRowRegex(options.leftMarginChars);
        const formulaRe = exports._createIsTableFormulaRegex(options.leftMarginChars);
        let pos = this._textEditor.getCursorPosition();
        const lastRow = this._textEditor.getLastRow();
        const lines = [];
        const formulaLines = [];
        let startRow = pos.row;
        let endRow = pos.row; // endRow is last line before fomulas
        // if the cursor is on formula line, work up until we find the last row of the table
        {
            let line = this._textEditor.getLine(pos.row);
            while (formulaRe.test(line) && pos.row >= 0) {
                pos = new point.Point(pos.row - 1, pos.column);
                endRow--;
                line = this._textEditor.getLine(pos.row);
            }
        }
        // current line
        {
            const line = this._textEditor.getLine(pos.row);
            if (!this._textEditor.acceptsTableEdit(pos.row) || !re.test(line)) {
                return undefined;
            }
            lines.push(line);
        }
        // previous lines
        for (let row = pos.row - 1; row >= 0; row--) {
            const line = this._textEditor.getLine(row);
            if (!this._textEditor.acceptsTableEdit(row) || !re.test(line)) {
                break;
            }
            lines.unshift(line);
            startRow = row;
        }
        // next lines
        for (let row = pos.row + 1; row <= lastRow; row++) {
            const line = this._textEditor.getLine(row);
            if (!this._textEditor.acceptsTableEdit(row) || !re.test(line)) {
                break;
            }
            lines.push(line);
            endRow = row;
        }
        // formula lines
        for (let row = endRow + 1; row <= lastRow; row++) {
            const line = this._textEditor.getLine(row);
            if (!this._textEditor.acceptsTableEdit(row) || !formulaRe.test(line)) {
                break;
            }
            formulaLines.push(line);
        }
        const range$1 = new range.Range(new point.Point(startRow, 0), new point.Point(endRow, lines[lines.length - 1].length));
        const table = parser.readTable(lines, options);
        const focus = table.focusOfPosition(pos, startRow);
        if (focus === undefined) {
            // TODO: Validate this for correctness
            return undefined;
        }
        return { range: range$1, lines, formulaLines, table, focus };
    }
    /**
     * Finds a table and does an operation with it.
     *
     * @private
     * @param func - A function that does some operation on table information obtained by
     * {@link TableEditor#_findTable}.
     */
    _withTable(options, func) {
        const info = this._findTable(options);
        if (info === undefined) {
            return;
        }
        return func(info);
    }
    /**
     * Updates lines in a given range in the text editor.
     *
     * @private
     * @param startRow - Start row index, starts from `0`.
     * @param endRow - End row index.
     * Lines from `startRow` to `endRow - 1` are replaced.
     * @param newLines - New lines.
     * @param [oldLines=undefined] - Old lines to be replaced.
     */
    _updateLines(startRow, endRow, newLines, oldLines = undefined) {
        if (oldLines !== undefined) {
            // apply the shortest edit script
            // if a table is edited in a normal manner, the edit distance never exceeds 3
            const ses = editScript.shortestEditScript(oldLines, newLines, 3);
            if (ses !== undefined) {
                editScript.applyEditScript(this._textEditor, ses, startRow);
                return;
            }
        }
        this._textEditor.replaceLines(startRow, endRow, newLines);
    }
    /**
     * Moves the cursor position to the focused cell,
     *
     * @private
     * @param startRow - Row index where the table starts in the text editor.
     * @param table - A table.
     * @param focus - A focus to which the cursor will be moved.
     */
    _moveToFocus(startRow, table, focus) {
        const pos = table.positionOfFocus(focus, startRow);
        if (pos !== undefined) {
            this._textEditor.setCursorPosition(pos);
        }
    }
    /**
     * Selects the focused cell.
     * If the cell has no content to be selected, then just moves the cursor position.
     *
     * @private
     * @param startRow - Row index where the table starts in the text editor.
     * @param table - A table.
     * @param focus - A focus to be selected.
     */
    _selectFocus(startRow, table, focus) {
        const range = table.selectionRangeOfFocus(focus, startRow);
        if (range !== undefined) {
            this._textEditor.setSelectionRange(range);
        }
        else {
            this._moveToFocus(startRow, table, focus);
        }
    }
    /**
     * Formats the table under the cursor.
     */
    format(options) {
        this.withCompletedTable(options, ({ range, lines, table, focus }) => {
            const newFocus = focus;
            // apply
            this._textEditor.transact(() => {
                this._updateLines(range.start.row, range.end.row + 1, table.toLines(), lines);
                this._moveToFocus(range.start.row, table, newFocus);
            });
        });
    }
    /**
     * Formats and escapes from the table.
     */
    escape(options) {
        this._withTable(options, ({ range, lines, table, focus }) => {
            // complete
            const completed = formatter.completeTable(table, options);
            // format
            const formatted = formatter.formatTable(completed.table, options);
            // apply
            const newRow = range.end.row + (completed.delimiterInserted ? 2 : 1);
            this._textEditor.transact(() => {
                this._updateLines(range.start.row, range.end.row + 1, formatted.table.toLines(), lines);
                let newPos;
                if (newRow > this._textEditor.getLastRow()) {
                    this._textEditor.insertLine(newRow, '');
                    newPos = new point.Point(newRow, 0);
                }
                else {
                    const re = new RegExp(`^${parser.marginRegexSrc(options.leftMarginChars)}`, 'u');
                    const nextLine = this._textEditor.getLine(newRow);
                    // @ts-expect-error TODO
                    const margin = re.exec(nextLine)[0];
                    newPos = new point.Point(newRow, margin.length);
                }
                this._textEditor.setCursorPosition(newPos);
            });
            this.resetSmartCursor();
        });
    }
    /**
     * Alters the alignment of the focused column.
     */
    alignColumn(alignment, options) {
        this.withCompletedTable(options, ({ range, lines, table, focus }) => {
            let newFocus = focus;
            // alter alignment
            let altered = table;
            if (0 <= newFocus.column &&
                newFocus.column <= altered.getHeaderWidth() - 1) {
                altered = formatter.alterAlignment(table, newFocus.column, alignment, options);
            }
            // format
            const formatted = formatter.formatTable(altered, options);
            newFocus = newFocus.setOffset(exports._computeNewOffset(newFocus, table, formatted, false));
            // apply
            this._textEditor.transact(() => {
                this._updateLines(range.start.row, range.end.row + 1, formatted.table.toLines(), lines);
                this._moveToFocus(range.start.row, formatted.table, newFocus);
            });
        });
    }
    /**
     * Selects the focused cell content.
     */
    selectCell(options) {
        this.withCompletedTable(options, ({ range, lines, table, focus }) => {
            const newFocus = focus;
            // apply
            this._textEditor.transact(() => {
                this._updateLines(range.start.row, range.end.row + 1, table.toLines(), lines);
                this._selectFocus(range.start.row, table, newFocus);
            });
        });
    }
    /**
     * Moves the focus to another cell.
     *
     * @param rowOffset - Offset in row.
     * @param columnOffset - Offset in column.
     */
    moveFocus(rowOffset, columnOffset, options) {
        this.withCompletedTable(options, ({ range, lines, table, focus }) => {
            let newFocus = focus;
            const startFocus = newFocus;
            // move focus
            if (rowOffset !== 0) {
                const height = table.getHeight();
                // skip delimiter row
                const skip = newFocus.row < 1 && newFocus.row + rowOffset >= 1
                    ? 1
                    : newFocus.row > 1 && newFocus.row + rowOffset <= 1
                        ? -1
                        : 0;
                newFocus = newFocus.setRow(Math.min(Math.max(newFocus.row + rowOffset + skip, 0), height <= 2 ? 0 : height - 1));
            }
            if (columnOffset !== 0) {
                const width = table.getHeaderWidth();
                if (!(newFocus.column < 0 && columnOffset < 0) &&
                    !(newFocus.column > width - 1 && columnOffset > 0)) {
                    newFocus = newFocus.setColumn(Math.min(Math.max(newFocus.column + columnOffset, 0), width - 1));
                }
            }
            const moved = !newFocus.posEquals(startFocus);
            // format
            const formatted = formatter.formatTable(table, options);
            newFocus = newFocus.setOffset(exports._computeNewOffset(newFocus, table, formatted, moved));
            // apply
            this._textEditor.transact(() => {
                this._updateLines(range.start.row, range.end.row + 1, formatted.table.toLines(), lines);
                if (moved) {
                    this._selectFocus(range.start.row, formatted.table, newFocus);
                }
                else {
                    this._moveToFocus(range.start.row, formatted.table, newFocus);
                }
            });
            if (moved) {
                this.resetSmartCursor();
            }
        });
    }
    /**
     * Moves the focus to the next cell.
     */
    nextCell(options) {
        this._withTable(options, ({ range, lines, table, focus: focus$1 }) => {
            // reset smart cursor if moved
            const focusMoved = (this._scTablePos !== undefined &&
                !range.start.equals(this._scTablePos)) ||
                (this._scLastFocus !== undefined &&
                    !focus$1.posEquals(this._scLastFocus));
            if (this._scActive && focusMoved) {
                this.resetSmartCursor();
            }
            let newFocus = focus$1;
            // complete
            const completed = formatter.completeTable(table, options);
            if (completed.delimiterInserted && newFocus.row > 0) {
                newFocus = newFocus.setRow(newFocus.row + 1);
            }
            const startFocus = newFocus;
            let altered = completed.table;
            // move focus
            if (newFocus.row === 1) {
                // move to next row
                newFocus = newFocus.setRow(2);
                if (options.smartCursor) {
                    if (newFocus.column < 0 ||
                        altered.getHeaderWidth() - 1 < newFocus.column) {
                        newFocus = newFocus.setColumn(0);
                    }
                }
                else {
                    newFocus = newFocus.setColumn(0);
                }
                // insert an empty row if needed
                if (newFocus.row > altered.getHeight() - 1) {
                    const row = new Array(altered.getHeaderWidth()).fill(new tableCell.TableCell(''));
                    altered = formatter.insertRow(altered, altered.getHeight(), new tableRow.TableRow(row, '', ''));
                }
            }
            else {
                // insert an empty column if needed
                if (newFocus.column > altered.getHeaderWidth() - 1) {
                    const column = new Array(altered.getHeight() - 1).fill(new tableCell.TableCell(''));
                    altered = formatter.insertColumn(altered, altered.getHeaderWidth(), column, options);
                }
                // move to next column
                newFocus = newFocus.setColumn(newFocus.column + 1);
            }
            // format
            const formatted = formatter.formatTable(altered, options);
            newFocus = newFocus.setOffset(exports._computeNewOffset(newFocus, altered, formatted, true));
            // apply
            const newLines = formatted.table.toLines();
            if (newFocus.column > formatted.table.getHeaderWidth() - 1) {
                // add margin
                newLines[newFocus.row] += ' ';
                newFocus = newFocus.setOffset(1);
            }
            this._textEditor.transact(() => {
                this._updateLines(range.start.row, range.end.row + 1, newLines, lines);
                this._selectFocus(range.start.row, formatted.table, newFocus);
            });
            if (options.smartCursor) {
                if (!this._scActive) {
                    // activate smart cursor
                    this._scActive = true;
                    this._scTablePos = range.start;
                    if (startFocus.column < 0 ||
                        formatted.table.getHeaderWidth() - 1 < startFocus.column) {
                        this._scStartFocus = new focus.Focus(startFocus.row, 0, 0);
                    }
                    else {
                        this._scStartFocus = startFocus;
                    }
                }
                this._scLastFocus = newFocus;
            }
        });
    }
    /**
     * Moves the focus to the previous cell.
     */
    previousCell(options) {
        this.withCompletedTable(options, ({ range, lines, table, focus: focus$1 }) => {
            let newFocus = focus$1;
            const startFocus = newFocus;
            // move focus
            if (newFocus.row === 0) {
                if (newFocus.column > 0) {
                    newFocus = newFocus.setColumn(newFocus.column - 1);
                }
            }
            else if (newFocus.row === 1) {
                newFocus = new focus.Focus(0, table.getHeaderWidth() - 1, newFocus.offset);
            }
            else {
                if (newFocus.column > 0) {
                    newFocus = newFocus.setColumn(newFocus.column - 1);
                }
                else {
                    newFocus = new focus.Focus(newFocus.row === 2 ? 0 : newFocus.row - 1, table.getHeaderWidth() - 1, newFocus.offset);
                }
            }
            const moved = !newFocus.posEquals(startFocus);
            // format
            const formatted = formatter.formatTable(table, options);
            newFocus = newFocus.setOffset(exports._computeNewOffset(newFocus, table, formatted, moved));
            // apply
            this._textEditor.transact(() => {
                this._updateLines(range.start.row, range.end.row + 1, formatted.table.toLines(), lines);
                if (moved) {
                    this._selectFocus(range.start.row, formatted.table, newFocus);
                }
                else {
                    this._moveToFocus(range.start.row, formatted.table, newFocus);
                }
            });
            if (moved) {
                this.resetSmartCursor();
            }
        });
    }
    /**
     * Moves the focus to the next row.
     */
    nextRow(options) {
        this._withTable(options, ({ range, lines, table, focus: focus$1 }) => {
            // reset smart cursor if moved
            const focusMoved = (this._scTablePos !== undefined &&
                !range.start.equals(this._scTablePos)) ||
                (this._scLastFocus !== undefined &&
                    !focus$1.posEquals(this._scLastFocus));
            if (this._scActive && focusMoved) {
                this.resetSmartCursor();
            }
            let newFocus = focus$1;
            // complete
            const completed = formatter.completeTable(table, options);
            if (completed.delimiterInserted && newFocus.row > 0) {
                newFocus = newFocus.setRow(newFocus.row + 1);
            }
            const startFocus = newFocus;
            let altered = completed.table;
            // move focus
            if (newFocus.row === 0) {
                newFocus = newFocus.setRow(2);
            }
            else {
                newFocus = newFocus.setRow(newFocus.row + 1);
            }
            if (options.smartCursor) {
                if (this._scActive && this._scStartFocus !== undefined) {
                    newFocus = newFocus.setColumn(this._scStartFocus.column);
                }
                else if (newFocus.column < 0 ||
                    altered.getHeaderWidth() - 1 < newFocus.column) {
                    newFocus = newFocus.setColumn(0);
                }
            }
            else {
                newFocus = newFocus.setColumn(0);
            }
            // insert empty row if needed
            if (newFocus.row > altered.getHeight() - 1) {
                const row = new Array(altered.getHeaderWidth()).fill(new tableCell.TableCell(''));
                altered = formatter.insertRow(altered, altered.getHeight(), new tableRow.TableRow(row, '', ''));
            }
            // format
            const formatted = formatter.formatTable(altered, options);
            newFocus = newFocus.setOffset(exports._computeNewOffset(newFocus, altered, formatted, true));
            // apply
            this._textEditor.transact(() => {
                this._updateLines(range.start.row, range.end.row + 1, formatted.table.toLines(), lines);
                this._selectFocus(range.start.row, formatted.table, newFocus);
            });
            if (options.smartCursor) {
                if (!this._scActive) {
                    // activate smart cursor
                    this._scActive = true;
                    this._scTablePos = range.start;
                    if (startFocus.column < 0 ||
                        formatted.table.getHeaderWidth() - 1 < startFocus.column) {
                        this._scStartFocus = new focus.Focus(startFocus.row, 0, 0);
                    }
                    else {
                        this._scStartFocus = startFocus;
                    }
                }
                this._scLastFocus = newFocus;
            }
        });
    }
    /**
     * Inserts an empty row at the current focus.
     */
    insertRow(options) {
        this.withCompletedTable(options, ({ range, lines, formulaLines, table, focus }) => {
            let newFocus = focus;
            // move focus
            if (newFocus.row <= 1) {
                newFocus = newFocus.setRow(2);
            }
            newFocus = newFocus.setColumn(0);
            // insert an empty row
            const row = new Array(table.getHeaderWidth()).fill(new tableCell.TableCell(''));
            const altered = formatter.insertRow(table, newFocus.row, new tableRow.TableRow(row, '', ''));
            this.formatAndApply(options, range, lines, formulaLines, altered, newFocus);
        });
    }
    /**
     * Deletes a row at the current focus.
     */
    deleteRow(options) {
        this.withCompletedTable(options, ({ range, lines, formulaLines, table, focus }) => {
            let newFocus = focus;
            // delete a row
            let altered = table;
            let moved = false;
            if (newFocus.row !== 1) {
                altered = formatter.deleteRow(altered, newFocus.row);
                moved = true;
                if (newFocus.row > altered.getHeight() - 1) {
                    newFocus = newFocus.setRow(newFocus.row === 2 ? 0 : newFocus.row - 1);
                }
            }
            this.formatAndApply(options, range, lines, formulaLines, altered, newFocus, moved);
        });
    }
    /**
     * Moves the focused row by the specified offset.
     *
     * @param offset - An offset the row is moved by.
     */
    moveRow(offset, options) {
        this.withCompletedTable(options, ({ range, lines, formulaLines, table, focus }) => {
            let newFocus = focus;
            // move row
            let altered = table;
            if (newFocus.row > 1) {
                const dest = Math.min(Math.max(newFocus.row + offset, 2), altered.getHeight() - 1);
                altered = formatter.moveRow(altered, newFocus.row, dest);
                newFocus = newFocus.setRow(dest);
            }
            this.formatAndApply(options, range, lines, formulaLines, altered, newFocus);
        });
    }
    evaluateFormulas(options) {
        return this.withCompletedTable(options, ({ range, lines, formulaLines, table, focus, }) => {
            const result = table.applyFormulas(formulaLines);
            if (result.isErr()) {
                return result.error;
            }
            const { table: formattedTable, focus: newFocus } = this.formatAndApply(options, range, lines, formulaLines, result.value, focus, false);
        });
    }
    /**
     * Sorts rows alphanumerically using the column at the current focus.
     * If all cells in the sorting column are numbers, the column is sorted
     * numerically.
     */
    sortRows(sortOrder, options) {
        this.withCompletedTable(options, ({ range, lines, formulaLines, table: table$1, focus }) => {
            const bodyRows = table$1.getRows().slice(2);
            const isNumber = (s) => /^\s*[-+]?((\d+(\.\d+)?)|(\d+\.)|(\.\d+))([eE][-+]?\d+)?\s*$/.test(s);
            const notAllNums = bodyRows
                .map((row) => { var _a; return (_a = row.getCellAt(focus.column)) === null || _a === void 0 ? void 0 : _a.content; })
                .some((cell) => cell !== undefined && cell !== '' && !isNumber(cell));
            bodyRows.sort((rowA, rowB) => {
                const cellA = rowA.getCellAt(focus.column);
                const cellB = rowB.getCellAt(focus.column);
                if (cellA === undefined || cellA.content === '') {
                    if (cellB === undefined || cellB.content === '') {
                        return 0;
                    }
                    return -1;
                }
                else if (cellB === undefined || cellB.content === '') {
                    return 1;
                }
                const contentA = notAllNums
                    ? cellA.content.replace(/[*~_$]/g, '')
                    : parseFloat(cellA.content);
                const contentB = notAllNums
                    ? cellB.content.replace(/[*~_$]/g, '')
                    : parseFloat(cellB.content);
                if (contentA === contentB) {
                    return 0;
                }
                else if (contentA === undefined) {
                    return -1;
                }
                else if (contentB === undefined) {
                    return 1;
                }
                return contentA < contentB ? -1 : 1;
            });
            if (sortOrder === SortOrder.Descending) {
                bodyRows.reverse();
            }
            const allRows = table$1.getRows().slice(0, 2).concat(bodyRows);
            const newTable = new table.Table(allRows);
            const { table: formattedTable, focus: newFocus } = this.formatAndApply(options, range, lines, formulaLines, newTable, focus, true);
            this._moveToFocus(range.start.row, formattedTable, newFocus);
        });
    }
    /**
     * Inserts an empty column at the current focus.
     */
    insertColumn(options) {
        this.withCompletedTable(options, ({ range, lines, formulaLines, table, focus }) => {
            let newFocus = focus;
            // move focus
            if (newFocus.row === 1) {
                newFocus = newFocus.setRow(0);
            }
            if (newFocus.column < 0) {
                newFocus = newFocus.setColumn(0);
            }
            // insert an empty column
            const column = new Array(table.getHeight() - 1).fill(new tableCell.TableCell(''));
            const altered = formatter.insertColumn(table, newFocus.column, column, options);
            this.formatAndApply(options, range, lines, formulaLines, altered, newFocus);
        });
    }
    /**
     * Deletes a column at the current focus.
     */
    deleteColumn(options) {
        this.withCompletedTable(options, ({ range, lines, formulaLines, table, focus }) => {
            let newFocus = focus;
            // move focus
            if (newFocus.row === 1) {
                newFocus = newFocus.setRow(0);
            }
            // delete a column
            let altered = table;
            let moved = false;
            if (0 <= newFocus.column &&
                newFocus.column <= altered.getHeaderWidth() - 1) {
                altered = formatter.deleteColumn(table, newFocus.column, options);
                moved = true;
                if (newFocus.column > altered.getHeaderWidth() - 1) {
                    newFocus = newFocus.setColumn(altered.getHeaderWidth() - 1);
                }
            }
            this.formatAndApply(options, range, lines, formulaLines, altered, newFocus, moved);
        });
    }
    /**
     * Moves the focused column by the specified offset.
     *
     * @param offset - An offset the column is moved by.
     */
    moveColumn(offset, options) {
        this.withCompletedTable(options, ({ range, lines, formulaLines, table, focus }) => {
            let newFocus = focus;
            // move column
            let altered = table;
            if (0 <= newFocus.column &&
                newFocus.column <= altered.getHeaderWidth() - 1) {
                const dest = Math.min(Math.max(newFocus.column + offset, 0), altered.getHeaderWidth() - 1);
                altered = formatter.moveColumn(altered, newFocus.column, dest);
                newFocus = newFocus.setColumn(dest);
            }
            this.formatAndApply(options, range, lines, formulaLines, altered, newFocus);
        });
    }
    /**
     * Formats all the tables in the text editor.
     */
    formatAll(options) {
        this._textEditor.transact(() => {
            const re = exports._createIsTableRowRegex(options.leftMarginChars);
            let pos = this._textEditor.getCursorPosition();
            let lines = [];
            let startRow = undefined;
            let lastRow = this._textEditor.getLastRow();
            // find tables
            for (let row = 0; row <= lastRow; row++) {
                const line = this._textEditor.getLine(row);
                if (this._textEditor.acceptsTableEdit(row) && re.test(line)) {
                    lines.push(line);
                    if (startRow === undefined) {
                        startRow = row;
                    }
                }
                else if (startRow !== undefined) {
                    // get table info
                    const endRow = row - 1;
                    const range$1 = new range.Range(new point.Point(startRow, 0), new point.Point(endRow, lines[lines.length - 1].length));
                    // formulaLines empty because formatting does not involve formulas
                    const table = parser.readTable(lines, options);
                    const focus = table.focusOfPosition(pos, startRow);
                    let diff;
                    if (focus !== undefined) {
                        // format
                        let newFocus = focus;
                        const completed = formatter.completeTable(table, options);
                        if (completed.delimiterInserted && newFocus.row > 0) {
                            newFocus = newFocus.setRow(newFocus.row + 1);
                        }
                        const formatted = formatter.formatTable(completed.table, options);
                        newFocus = newFocus.setOffset(exports._computeNewOffset(newFocus, completed.table, formatted, false));
                        // apply
                        const newLines = formatted.table.toLines();
                        this._updateLines(range$1.start.row, range$1.end.row + 1, newLines, lines);
                        // update cursor position
                        diff = newLines.length - lines.length;
                        pos = formatted.table.positionOfFocus(newFocus, startRow);
                    }
                    else {
                        // format
                        const completed = formatter.completeTable(table, options);
                        const formatted = formatter.formatTable(completed.table, options);
                        // apply
                        const newLines = formatted.table.toLines();
                        this._updateLines(range$1.start.row, range$1.end.row + 1, newLines, lines);
                        // update cursor position
                        diff = newLines.length - lines.length;
                        if (pos.row > endRow) {
                            pos = new point.Point(pos.row + diff, pos.column);
                        }
                    }
                    // reset
                    lines = [];
                    startRow = undefined;
                    // update
                    lastRow += diff;
                    row += diff;
                }
            }
            if (startRow !== undefined) {
                // get table info
                const endRow = lastRow;
                const range$1 = new range.Range(new point.Point(startRow, 0), new point.Point(endRow, lines[lines.length - 1].length));
                // formulaLines empty because formatting does not involve formulas
                const table = parser.readTable(lines, options);
                const focus = table.focusOfPosition(pos, startRow);
                // format
                let newFocus = focus;
                const completed = formatter.completeTable(table, options);
                // @ts-expect-error TODO
                if (completed.delimiterInserted && newFocus.row > 0) {
                    // @ts-expect-error TODO
                    newFocus = newFocus.setRow(newFocus.row + 1);
                }
                const formatted = formatter.formatTable(completed.table, options);
                // @ts-expect-error TODO
                newFocus = newFocus.setOffset(
                // @ts-expect-error TODO
                exports._computeNewOffset(newFocus, completed.table, formatted, false));
                // apply
                const newLines = formatted.table.toLines();
                this._updateLines(range$1.start.row, range$1.end.row + 1, newLines, lines);
                // @ts-expect-error TODO
                pos = formatted.table.positionOfFocus(newFocus, startRow);
            }
            this._textEditor.setCursorPosition(pos);
        });
    }
    /**
     * Exports the table as a two dimensional string array
     */
    exportTable(withtHeaders, options) {
        return this.withCompletedTable(options, ({ range, lines, formulaLines, table, focus }) => {
            const bodyRows = table.getRows();
            if (bodyRows.length > 0 && !withtHeaders) {
                bodyRows.splice(0, 2);
            }
            // else if(bodyRows.length > 1) bodyRows.splice(1, 1);
            return bodyRows.map((row) => row.getCells().map((cell) => cell.content));
        });
    }
    /**
     * Exports the table as a two dimensional string array
     */
    exportCSV(withtHeaders, options) {
        const r = this.exportTable(withtHeaders, options);
        return !r ? undefined : r.map((row) => row.join('\t')).join('\n');
    }
    /**
     * Finds a table, completes it, then does an operation with it.
     *
     * @param func - A function that does some operation on table information obtained by
     * {@link TableEditor#_findTable}.
     */
    withCompletedTable(options, func) {
        return this._withTable(options, (tableInfo) => {
            let newFocus = tableInfo.focus;
            // complete
            const completed = formatter.completeTable(tableInfo.table, options);
            if (completed.delimiterInserted && newFocus.row > 0) {
                newFocus = newFocus.setRow(newFocus.row + 1);
            }
            // format
            const formatted = formatter.formatTable(completed.table, options);
            newFocus = newFocus.setOffset(exports._computeNewOffset(newFocus, completed.table, formatted, false));
            tableInfo.table = formatted.table;
            tableInfo.focus = newFocus;
            return func(tableInfo);
        });
    }
    /**
     * Formats the table and applies any changes based on the difference between
     * originalLines and the newTable. Should generally be the last function call
     * in a TableEditor function.
     */
    formatAndApply(options, range, originalLines, formulaLines, newTable, newFocus, moved = false) {
        // format
        const formatted = formatter.formatTable(newTable, options);
        newFocus = newFocus.setOffset(exports._computeNewOffset(newFocus, newTable, formatted, moved));
        // apply
        this._textEditor.transact(() => {
            this._updateLines(range.start.row, range.end.row + 1, formatted.table.toLines(), originalLines);
            if (moved) {
                this._selectFocus(range.start.row, formatted.table, newFocus);
            }
            else {
                this._moveToFocus(range.start.row, formatted.table, newFocus);
            }
        });
        this.resetSmartCursor();
        return {
            range,
            lines: originalLines,
            formulaLines,
            table: formatted.table,
            focus: newFocus,
        };
    }
}
exports.TableEditor = TableEditor;
});

var lib$1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortOrder = exports.TableEditor = exports.optionsWithDefaults = exports.defaultOptions = exports.ITextEditor = exports.shortestEditScript = exports.applyEditScript = exports.Delete = exports.Insert = exports.moveColumn = exports.deleteColumn = exports.insertColumn = exports.moveRow = exports.deleteRow = exports.insertRow = exports.alterAlignment = exports.formatTable = exports.completeTable = exports.FormatType = exports.readTable = exports.Table = exports.TableRow = exports.TableCell = exports.HeaderAlignment = exports.DefaultAlignment = exports.Alignment = exports.Focus = exports.Range = exports.Point = void 0;

Object.defineProperty(exports, "Point", { enumerable: true, get: function () { return point.Point; } });

Object.defineProperty(exports, "Range", { enumerable: true, get: function () { return range.Range; } });

Object.defineProperty(exports, "Focus", { enumerable: true, get: function () { return focus.Focus; } });

Object.defineProperty(exports, "Alignment", { enumerable: true, get: function () { return alignment.Alignment; } });
Object.defineProperty(exports, "DefaultAlignment", { enumerable: true, get: function () { return alignment.DefaultAlignment; } });
Object.defineProperty(exports, "HeaderAlignment", { enumerable: true, get: function () { return alignment.HeaderAlignment; } });

Object.defineProperty(exports, "TableCell", { enumerable: true, get: function () { return tableCell.TableCell; } });

Object.defineProperty(exports, "TableRow", { enumerable: true, get: function () { return tableRow.TableRow; } });

Object.defineProperty(exports, "Table", { enumerable: true, get: function () { return table.Table; } });

Object.defineProperty(exports, "readTable", { enumerable: true, get: function () { return parser.readTable; } });

Object.defineProperty(exports, "FormatType", { enumerable: true, get: function () { return formatter.FormatType; } });
Object.defineProperty(exports, "completeTable", { enumerable: true, get: function () { return formatter.completeTable; } });
Object.defineProperty(exports, "formatTable", { enumerable: true, get: function () { return formatter.formatTable; } });
Object.defineProperty(exports, "alterAlignment", { enumerable: true, get: function () { return formatter.alterAlignment; } });
Object.defineProperty(exports, "insertRow", { enumerable: true, get: function () { return formatter.insertRow; } });
Object.defineProperty(exports, "deleteRow", { enumerable: true, get: function () { return formatter.deleteRow; } });
Object.defineProperty(exports, "moveRow", { enumerable: true, get: function () { return formatter.moveRow; } });
Object.defineProperty(exports, "insertColumn", { enumerable: true, get: function () { return formatter.insertColumn; } });
Object.defineProperty(exports, "deleteColumn", { enumerable: true, get: function () { return formatter.deleteColumn; } });
Object.defineProperty(exports, "moveColumn", { enumerable: true, get: function () { return formatter.moveColumn; } });

Object.defineProperty(exports, "Insert", { enumerable: true, get: function () { return editScript.Insert; } });
Object.defineProperty(exports, "Delete", { enumerable: true, get: function () { return editScript.Delete; } });
Object.defineProperty(exports, "applyEditScript", { enumerable: true, get: function () { return editScript.applyEditScript; } });
Object.defineProperty(exports, "shortestEditScript", { enumerable: true, get: function () { return editScript.shortestEditScript; } });

Object.defineProperty(exports, "ITextEditor", { enumerable: true, get: function () { return textEditor.ITextEditor; } });

Object.defineProperty(exports, "defaultOptions", { enumerable: true, get: function () { return options.defaultOptions; } });
Object.defineProperty(exports, "optionsWithDefaults", { enumerable: true, get: function () { return options.optionsWithDefaults; } });

Object.defineProperty(exports, "TableEditor", { enumerable: true, get: function () { return tableEditor.TableEditor; } });
Object.defineProperty(exports, "SortOrder", { enumerable: true, get: function () { return tableEditor.SortOrder; } });
});

var defaultSettings = {
    formatType: lib$1.FormatType.NORMAL,
    showRibbonIcon: true,
    bindEnter: true,
    bindTab: true,
};
var TableEditorPluginSettings = /** @class */ (function () {
    function TableEditorPluginSettings(loadedData) {
        var allFields = __assign(__assign({}, defaultSettings), loadedData);
        this.formatType = allFields.formatType;
        this.showRibbonIcon = allFields.showRibbonIcon;
        this.bindEnter = allFields.bindEnter;
        this.bindTab = allFields.bindTab;
    }
    TableEditorPluginSettings.prototype.asOptions = function () {
        return lib$1.optionsWithDefaults({ formatType: this.formatType });
    };
    return TableEditorPluginSettings;
}());

/**
 * ObsidianTextEditor is an implementation of the ITextEditor interface from
 * the mte-kernel library. It teaches the table editor library how to interface
 * with Obsidian.
 */
var ObsidianTextEditor = /** @class */ (function () {
    function ObsidianTextEditor(app, file, editor) {
        var _this = this;
        this.getCursorPosition = function () {
            var position = _this.editor.getCursor();
          //  // console.debug("getCursorPosition was called: line " + position.line + ", ch " + position.ch);
            return new lib$1.Point(position.line, position.ch);
        };
        this.setCursorPosition = function (pos) {
          //  // console.debug("setCursorPosition was called: line " + pos.row + ", ch " + pos.column);
            _this.editor.setCursor({ line: pos.row, ch: pos.column });
        };
        this.setSelectionRange = function (range) {
          //  // console.debug('setSelectionRange was called');
            _this.editor.setSelection({ line: range.start.row, ch: range.start.column }, { line: range.end.row, ch: range.end.column });
        };
        this.getLastRow = function () {
          //  // console.debug('getLastRow was called');
            return _this.editor.lastLine();
        };
        this.acceptsTableEdit = function (row) {
          //  // console.debug("acceptsTableEdit was called on row " + row);
            var cache = _this.app.metadataCache.getFileCache(_this.file);
            if (!cache.sections) {
                return true;
            }
            var table = cache.sections.find(function (section) {
                return section.position.start.line <= row &&
                    section.position.end.line >= row &&
                    section.type !== 'code' &&
                    section.type !== 'math';
            });
            if (table === undefined) {
             //   // console.debug('acceptsTableEdit returning false, table not found');
                return false;
            }
            // Check that the text `-tx-` is not on the line immediately preceeding the
            // table found in the previous check.
            // https://github.com/tgrosinger/advanced-tables-obsidian/issues/133
            var preceedingLineIndex = table.position.start.line;
            if (preceedingLineIndex >= 0) {
                var preceedingLine = _this.getLine(preceedingLineIndex);
                if (preceedingLine === '-tx-') {
                    return false;
                }
            }
            return true;
        };
        this.getLine = function (row) {
         //   // console.debug("getLine was called on line " + row);
            return _this.editor.getLine(row);
        };
        this.insertLine = function (row, line) {
        //    // console.debug("insertLine was called at line " + row);
            // console.debug("New line: " + line);
            if (row > _this.getLastRow()) {
                _this.editor.replaceRange('\n' + line, { line: row, ch: 0 });
            }
            else {
                _this.editor.replaceRange(line + '\n', { line: row, ch: 0 });
            }
        };
        this.deleteLine = function (row) {
           // // console.debug("deleteLine was called on line " + row);
            // If on the last line of the file, we cannot replace to the next row.
            // Instead, replace all the contents of this line.
            if (row === _this.getLastRow()) {
                var rowContents = _this.getLine(row);
                _this.editor.replaceRange('', { line: row, ch: 0 }, { line: row, ch: rowContents.length });
            }
            else {
                _this.editor.replaceRange('', { line: row, ch: 0 }, { line: row + 1, ch: 0 });
            }
        };
        this.replaceLines = function (startRow, endRow, lines) {
            // Take one off the endRow and instead go to the end of that line
            var realEndRow = endRow - 1;
            var endRowContents = _this.editor.getLine(realEndRow);
            var endRowFinalIndex = endRowContents.length;
            _this.editor.replaceRange(lines.join('\n'), { line: startRow, ch: 0 }, { line: realEndRow, ch: endRowFinalIndex });
        };
        this.transact = function (func) {
            /*
            this.editor.operation(() => {
              func();
            });
            */
            func();
        };
        this.app = app;
        this.file = file;
        this.editor = editor;
    }
    return ObsidianTextEditor;
}());

var TableEditor = /** @class */ (function () {
    function TableEditor(app, file, editor, settings) {
        var _this = this;
        this.cursorIsInTableFormula = function () {
            return _this.mte.cursorIsInTableFormula(_this.settings.asOptions());
        };
        this.cursorIsInTable = function () {
            return _this.mte.cursorIsInTable(_this.settings.asOptions());
        };
        this.nextCell = function () {
            _this.mte.nextCell(_this.settings.asOptions());
        };
        this.previousCell = function () {
            _this.mte.previousCell(_this.settings.asOptions());
        };
        this.nextRow = function () {
            _this.mte.nextRow(_this.settings.asOptions());
        };
        this.formatTable = function () {
            _this.mte.format(_this.settings.asOptions());
        };
        this.formatAllTables = function () {
            _this.mte.formatAll(_this.settings.asOptions());
        };
        this.insertColumn = function () {
            _this.mte.insertColumn(_this.settings.asOptions());
        };
        this.insertRow = function () {
            _this.mte.insertRow(_this.settings.asOptions());
        };
        this.leftAlignColumn = function () {
            _this.mte.alignColumn(lib$1.Alignment.LEFT, _this.settings.asOptions());
        };
        this.centerAlignColumn = function () {
            _this.mte.alignColumn(lib$1.Alignment.CENTER, _this.settings.asOptions());
        };
        this.rightAlignColumn = function () {
            _this.mte.alignColumn(lib$1.Alignment.RIGHT, _this.settings.asOptions());
        };
        this.moveColumnLeft = function () {
            _this.mte.moveColumn(-1, _this.settings.asOptions());
        };
        this.moveColumnRight = function () {
            _this.mte.moveColumn(1, _this.settings.asOptions());
        };
        this.moveRowUp = function () {
            _this.mte.moveRow(-1, _this.settings.asOptions());
        };
        this.moveRowDown = function () {
            _this.mte.moveRow(1, _this.settings.asOptions());
        };
        this.deleteColumn = function () {
            _this.mte.deleteColumn(_this.settings.asOptions());
        };
        this.deleteRow = function () {
            _this.mte.deleteRow(_this.settings.asOptions());
        };
        this.sortRowsAsc = function () {
            _this.mte.sortRows(lib$1.SortOrder.Ascending, _this.settings.asOptions());
        };
        this.sortRowsDesc = function () {
            _this.mte.sortRows(lib$1.SortOrder.Descending, _this.settings.asOptions());
        };
        this.escape = function () {
            _this.mte.escape(_this.settings.asOptions());
        };
        this.evaluateFormulas = function () {
            var err = _this.mte.evaluateFormulas(_this.settings.asOptions());
            if (err) {
                new obsidian.Notice(err.message);
            }
        };
        this.exportCSVModal = function () {
            new CSVModal(_this.app, _this.mte, _this.settings).open();
        };
        this.app = app;
        this.settings = settings;
        var ote = new ObsidianTextEditor(app, file, editor);
        this.mte = new lib$1.TableEditor(ote);
    }
    return TableEditor;
}());
var CSVModal = /** @class */ (function (_super) {
    __extends(CSVModal, _super);
    function CSVModal(app, mte, settings) {
        var _this = _super.call(this, app) || this;
        _this.mte = mte;
        _this.settings = settings;
        return _this;
    }
    CSVModal.prototype.onOpen = function () {
        var _this = this;
        var contentEl = this.contentEl;
        var div = contentEl.createDiv({
            cls: 'advanced-tables-csv-export',
        });
        var ta = div.createEl('textarea', {
            attr: {
                readonly: true,
            },
        });
        ta.value = this.mte.exportCSV(true, this.settings.asOptions());
        ta.onClickEvent(function () { return ta.select(); });
        var lb = div.createEl('label');
        var cb = lb.createEl('input', {
            type: 'checkbox',
            attr: {
                checked: true,
            },
        });
        lb.createSpan().setText('Include table headers');
        cb.onClickEvent(function () {
            ta.value = _this.mte.exportCSV(cb.checked, _this.settings.asOptions());
        });
    };
    CSVModal.prototype.onClose = function () {
        var contentEl = this.contentEl;
        contentEl.empty();
    };
    return CSVModal;
}(obsidian.Modal));

var TableControlsViewType = 'advanced-tables-toolbar';
var TableControlsView = /** @class */ (function (_super) {
    __extends(TableControlsView, _super);
    function TableControlsView(leaf, settings) {
        var _this = _super.call(this, leaf) || this;
        _this.draw = function () {
            var container = _this.containerEl.children[1];
            var rootEl = document.createElement('div');
            var navHeader = rootEl.createDiv({ cls: 'nav-header' });
            var rowOneBtns = navHeader.createDiv({ cls: 'nav-buttons-container' });
            _this.drawBtn(rowOneBtns, 'alignLeft', 'left align column', function (te) {
                return te.leftAlignColumn();
            });
            _this.drawBtn(rowOneBtns, 'alignCenter', 'center align column', function (te) {
                return te.centerAlignColumn();
            });
            _this.drawBtn(rowOneBtns, 'alignRight', 'right align column', function (te) {
                return te.rightAlignColumn();
            });
            var rowTwoBtns = navHeader.createDiv({ cls: 'nav-buttons-container' });
            _this.drawBtn(rowTwoBtns, 'moveRowDown', 'move row down', function (te) {
                return te.moveRowDown();
            });
            _this.drawBtn(rowTwoBtns, 'moveRowUp', 'move row up', function (te) {
                return te.moveRowUp();
            });
            _this.drawBtn(rowTwoBtns, 'moveColumnRight', 'move column right', function (te) {
                return te.moveColumnRight();
            });
            _this.drawBtn(rowTwoBtns, 'moveColumnLeft', 'move column left', function (te) {
                return te.moveColumnLeft();
            });
            var rowThreeBtns = navHeader.createDiv({ cls: 'nav-buttons-container' });
            _this.drawBtn(rowThreeBtns, 'insertRow', 'insert row above', function (te) {
                return te.insertRow();
            });
            _this.drawBtn(rowThreeBtns, 'insertColumn', 'insert column left', function (te) {
                return te.insertColumn();
            });
            _this.drawBtn(rowThreeBtns, 'deleteRow', 'delete row', function (te) {
                return te.deleteRow();
            });
            _this.drawBtn(rowThreeBtns, 'deleteColumn', 'delete column', function (te) {
                return te.deleteColumn();
            });
            var rowFourBtns = navHeader.createDiv({ cls: 'nav-buttons-container' });
            _this.drawBtn(rowFourBtns, 'sortAsc', 'sort by column ascending', function (te) {
                return te.sortRowsAsc();
            });
            _this.drawBtn(rowFourBtns, 'sortDesc', 'sort by column descending', function (te) {
                return te.sortRowsDesc();
            });
            _this.drawBtn(rowFourBtns, 'formula', 'evaluate formulas', function (te) {
                return te.evaluateFormulas();
            });
            var rowFiveBtns = navHeader.createDiv({ cls: 'nav-buttons-container' });
            _this.drawBtn(rowFiveBtns, 'csv', 'export as csv', function (te) {
                return te.exportCSVModal();
            });
            _this.drawBtn(rowFiveBtns, 'help', 'help', function () {
                return window.open('https://github.com/tgrosinger/advanced-tables-obsidian/blob/main/docs/help.md');
            });
            container.empty();
            container.appendChild(rootEl);
        };
        _this.drawBtn = function (parent, iconName, title, fn) {
            var cursorCheck = function (te) {
                if (title === 'evaluate formulas') {
                    return te.cursorIsInTable() || te.cursorIsInTableFormula();
                }
                return te.cursorIsInTable();
            };
            var button = parent.createDiv({ cls: 'nav-action-button', title: title });
            button.onClickEvent(function () { return _this.withTE(fn, cursorCheck); });
            button.appendChild(Element(icons[iconName]));
        };
        _this.withTE = function (fn, cursorCheck, alertOnNoTable) {
            if (alertOnNoTable === void 0) { alertOnNoTable = true; }
            var editor;
            var leaf = _this.app.workspace.getMostRecentLeaf();
            if (leaf.view instanceof obsidian.MarkdownView) {
                editor = leaf.view.editor;
            }
            else {
                console.warn('Advanced Tables: Unable to determine current editor.');
                return;
            }
            var te = new TableEditor(_this.app, leaf.view.file, editor, _this.settings);
            if (!cursorCheck(te)) {
                if (alertOnNoTable) {
                    new obsidian.Notice('Advanced Tables: Cursor must be in a table.');
                }
                return;
            }
            fn(te);
        };
        _this.settings = settings;
        return _this;
    }
    TableControlsView.prototype.getViewType = function () {
        return TableControlsViewType;
    };
    TableControlsView.prototype.getDisplayText = function () {
        return 'Advanced Tables';
    };
    TableControlsView.prototype.getIcon = function () {
        return 'spreadsheet';
    };
    TableControlsView.prototype.load = function () {
        _super.prototype.load.call(this);
        this.draw();
    };
    return TableControlsView;
}(obsidian.ItemView));
/**
 * Convert an svg string into an HTML element.
 *
 * @param svgText svg image as a string
 */
var Element = function (svgText) {
    var parser = new DOMParser();
    return parser.parseFromString(svgText, 'text/xml').documentElement;
};

var TableEditorPlugin = /** @class */ (function (_super) {
    __extends(TableEditorPlugin, _super);
    function TableEditorPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // makeEditorExtension is used to bind Tab and Enter in the new CM6 Live Preview editor.
        _this.makeEditorExtension = function () {
            var keymaps = [];
            if (_this.settings.bindEnter) {
                keymaps.push({
                    key: 'Enter',
                    run: function () {
                        return _this.newPerformTableActionCM6(function (te) { return te.nextRow(); })();
                    },
                    preventDefault: true,
                });
            }
            if (_this.settings.bindTab) {
                keymaps.push({
                    key: 'Tab',
                    run: function () {
                        return _this.newPerformTableActionCM6(function (te) { return te.nextCell(); })();
                    },
                    shift: function () {
                        return _this.newPerformTableActionCM6(function (te) {
                            return te.previousCell();
                        })();
                    },
                    preventDefault: true,
                });
            }
            return state.Prec.override(view.keymap.of(keymaps));
        };
        _this.newPerformTableActionCM6 = function (fn) {
            return function () {
                var leaf = _this.app.workspace.activeLeaf;
                if (leaf.view instanceof obsidian.MarkdownView) {
                    var te = new TableEditor(_this.app, leaf.view.file, leaf.view.editor, _this.settings);
                    if (te.cursorIsInTable()) {
                        fn(te);
                        return true;
                    }
                }
                return false;
            };
        };
        _this.newPerformTableAction = function (fn, alertOnNoTable) {
            return function (checking, editor, view) {
                var te = new TableEditor(_this.app, view.file, editor, _this.settings);
                if (checking) {
                    return te.cursorIsInTable();
                }
                fn(te);
            };
        };
        // handleKeyDown is used to bind the tab and enter keys in the legacy CM5 editor.
        _this.handleKeyDown = function (cm, event) {
            if (['Tab', 'Enter'].contains(event.key)) {
                var editor = void 0;
                var view = void 0;
                var activeLeaf = _this.app.workspace.activeLeaf;
                if (activeLeaf.view instanceof obsidian.MarkdownView) {
                    editor = activeLeaf.view.editor;
                    view = activeLeaf.view;
                }
                var action = _this.newPerformTableAction(function (te) {
                    switch (event.key) {
                        case 'Tab':
                            if (!_this.settings.bindTab) {
                                return;
                            }
                            if (event.shiftKey) {
                                te.previousCell();
                            }
                            else {
                                te.nextCell();
                            }
                            break;
                        case 'Enter':
                            if (!_this.settings.bindEnter) {
                                return;
                            }
                            if (event.shiftKey) {
                                te.escape();
                            }
                            else if (event.ctrlKey || event.metaKey || event.altKey) {
                                return;
                            }
                            else {
                                te.nextRow();
                            }
                            break;
                    }
                    event.preventDefault();
                }, false);
                // Check first if we are in a table, if so, then execute.
                if (action(true, editor, view)) {
                    action(false, editor, view);
                }
            }
        };
        _this.toggleTableControlsView = function () { return __awaiter(_this, void 0, void 0, function () {
            var existing;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        existing = this.app.workspace.getLeavesOfType(TableControlsViewType);
                        if (existing.length) {
                            this.app.workspace.revealLeaf(existing[0]);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.app.workspace.getRightLeaf(false).setViewState({
                                type: TableControlsViewType,
                                active: true,
                            })];
                    case 1:
                        _a.sent();
                        this.app.workspace.revealLeaf(this.app.workspace.getLeavesOfType(TableControlsViewType)[0]);
                        return [2 /*return*/];
                }
            });
        }); };
        _this.isMobile = function () { return _this.app.isMobile; };
        return _this;
    }
    TableEditorPlugin.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('loading markdown-table-editor plugin');
                        return [4 /*yield*/, this.loadSettings()];
                    case 1:
                        _a.sent();
                        this.registerView(TableControlsViewType, function (leaf) {
                            return (_this.tableControlsView = new TableControlsView(leaf, _this.settings));
                        });
                        addIcons();
                        if (this.settings.showRibbonIcon) {
                            this.addRibbonIcon('spreadsheet', 'Advanced Tables Toolbar', function () {
                                _this.toggleTableControlsView();
                            });
                        }
                        this.cmEditors = [];
                        this.registerCodeMirror(function (cm) {
                            _this.cmEditors.push(cm);
                            cm.on('keydown', _this.handleKeyDown);
                        });
                        // CM6 editor extension for remapping keys
                        this.registerEditorExtension(this.makeEditorExtension());
                        this.addCommand({
                            id: 'next-row',
                            name: 'Go to next row',
                            icon: 'arrowenter',
                            editorCheckCallback: this.newPerformTableAction(function (te) {
                                if (_this.settings.bindEnter && !_this.isMobile) {
                                    new obsidian.Notice('Advanced Tables: Next row also bound to enter. ' +
                                        'Possibly producing double actions. See Advanced Tables settings.');
                                }
                                te.nextRow();
                            }),
                        });
                        this.addCommand({
                            id: 'next-cell',
                            name: 'Go to next cell',
                            icon: 'arrowtab',
                            editorCheckCallback: this.newPerformTableAction(function (te) {
                                if (_this.settings.bindTab && !_this.isMobile) {
                                    new obsidian.Notice('Advanced Tables: Next cell also bound to tab. ' +
                                        'Possibly producing double actions. See Advanced Tables settings.');
                                }
                                te.nextCell();
                            }),
                        });
                        this.addCommand({
                            id: 'previous-cell',
                            name: 'Go to previous cell',
                            editorCheckCallback: this.newPerformTableAction(function (te) {
                                if (_this.settings.bindTab && !_this.isMobile) {
                                    new obsidian.Notice('Advanced Tables: Previous cell also bound to shift+tab. ' +
                                        'Possibly producing double actions. See Advanced Tables settings.');
                                }
                                te.previousCell();
                            }),
                        });
                        this.addCommand({
                            id: 'format-table',
                            name: 'Format table at the cursor',
                            editorCheckCallback: this.newPerformTableAction(function (te) {
                                te.formatTable();
                            }),
                        });
                        this.addCommand({
                            id: 'format-all-tables',
                            name: 'Format all tables in this file',
                            editorCheckCallback: this.newPerformTableAction(function (te) {
                                te.formatAllTables();
                            }),
                        });
                        this.addCommand({
                            id: 'insert-column',
                            name: 'Insert column before current',
                            icon: 'insertColumn',
                            editorCheckCallback: this.newPerformTableAction(function (te) {
                                te.insertColumn();
                            }),
                        });
                        this.addCommand({
                            id: 'insert-row',
                            name: 'Insert row before current',
                            icon: 'insertRow',
                            editorCheckCallback: this.newPerformTableAction(function (te) {
                                te.insertRow();
                            }),
                        });
                        this.addCommand({
                            id: 'escape-table',
                            name: 'Move cursor out of table',
                            editorCheckCallback: this.newPerformTableAction(function (te) {
                                te.escape();
                            }),
                        });
                        this.addCommand({
                            id: 'left-align-column',
                            name: 'Left align column',
                            icon: 'alignLeft',
                            editorCheckCallback: this.newPerformTableAction(function (te) {
                                te.leftAlignColumn();
                            }),
                        });
                        this.addCommand({
                            id: 'center-align-column',
                            name: 'Center align column',
                            icon: 'alignCenter',
                            editorCheckCallback: this.newPerformTableAction(function (te) {
                                te.centerAlignColumn();
                            }),
                        });
                        this.addCommand({
                            id: 'right-align-column',
                            name: 'Right align column',
                            icon: 'alignRight',
                            editorCheckCallback: this.newPerformTableAction(function (te) {
                                te.rightAlignColumn();
                            }),
                        });
                        this.addCommand({
                            id: 'move-column-left',
                            name: 'Move column left',
                            icon: 'moveColumnLeft',
                            editorCheckCallback: this.newPerformTableAction(function (te) {
                                te.moveColumnLeft();
                            }),
                        });
                        this.addCommand({
                            id: 'move-column-right',
                            name: 'Move column right',
                            icon: 'moveColumnRight',
                            editorCheckCallback: this.newPerformTableAction(function (te) {
                                te.moveColumnRight();
                            }),
                        });
                        this.addCommand({
                            id: 'move-row-up',
                            name: 'Move row up',
                            icon: 'moveRowUp',
                            editorCheckCallback: this.newPerformTableAction(function (te) {
                                te.moveRowUp();
                            }),
                        });
                        this.addCommand({
                            id: 'move-row-down',
                            name: 'Move row down',
                            icon: 'moveRowDown',
                            editorCheckCallback: this.newPerformTableAction(function (te) {
                                te.moveRowDown();
                            }),
                        });
                        this.addCommand({
                            id: 'delete-column',
                            name: 'Delete column',
                            icon: 'deleteColumn',
                            editorCheckCallback: this.newPerformTableAction(function (te) {
                                te.deleteColumn();
                            }),
                        });
                        this.addCommand({
                            id: 'delete-row',
                            name: 'Delete row',
                            icon: 'deleteRow',
                            editorCheckCallback: this.newPerformTableAction(function (te) {
                                te.deleteRow();
                            }),
                        });
                        this.addCommand({
                            id: 'sort-rows-ascending',
                            name: 'Sort rows ascending',
                            icon: 'sortAsc',
                            editorCheckCallback: this.newPerformTableAction(function (te) {
                                te.sortRowsAsc();
                            }),
                        });
                        this.addCommand({
                            id: 'sort-rows-descending',
                            name: 'Sort rows descending',
                            icon: 'sortDesc',
                            editorCheckCallback: this.newPerformTableAction(function (te) {
                                te.sortRowsDesc();
                            }),
                        });
                        this.addCommand({
                            id: 'evaluate-formulas',
                            name: 'Evaluate table formulas',
                            icon: 'formula',
                            editorCheckCallback: function (checking, editor, view) {
                                var te = new TableEditor(_this.app, view.file, editor, _this.settings);
                                if (checking) {
                                    return te.cursorIsInTable() || te.cursorIsInTableFormula();
                                }
                                te.evaluateFormulas();
                            },
                        });
                        this.addCommand({
                            id: 'table-control-bar',
                            name: 'Open table controls toolbar',
                            hotkeys: [
                                {
                                    modifiers: ['Mod', 'Shift'],
                                    key: 'd',
                                },
                            ],
                            callback: function () {
                                _this.toggleTableControlsView();
                            },
                        });
                        this.addSettingTab(new TableEditorSettingsTab(this.app, this));
                        return [2 /*return*/];
                }
            });
        });
    };
    TableEditorPlugin.prototype.onunload = function () {
        var _this = this;
        console.log('unloading markdown-table-editor plugin');
        this.cmEditors.forEach(function (cm) {
            cm.off('keydown', _this.handleKeyDown);
        });
    };
    TableEditorPlugin.prototype.loadSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var settingsOptions, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = Object).assign;
                        _c = [defaultSettings];
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        settingsOptions = _b.apply(_a, _c.concat([_d.sent()]));
                        this.settings = new TableEditorPluginSettings(settingsOptions);
                        this.saveData(this.settings);
                        return [2 /*return*/];
                }
            });
        });
    };
    return TableEditorPlugin;
}(obsidian.Plugin));
var TableEditorSettingsTab = /** @class */ (function (_super) {
    __extends(TableEditorSettingsTab, _super);
    function TableEditorSettingsTab(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.plugin = plugin;
        return _this;
    }
    TableEditorSettingsTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        containerEl.empty();
        containerEl.createEl('h2', { text: 'Advanced Tables Plugin - Settings' });
        new obsidian.Setting(containerEl)
            .setName('Bind enter to table navigation')
            .setDesc('Requires restart of Obsidian. If enabled, when the cursor is in a table, enter advances to the next ' +
            'row. Disabling this can help avoid conflicting with tag or CJK ' +
            'autocompletion. If disabling, bind "Go to ..." in the Obsidian Hotkeys settings.')
            .addToggle(function (toggle) {
            return toggle.setValue(_this.plugin.settings.bindEnter).onChange(function (value) {
                _this.plugin.settings.bindEnter = value;
                _this.plugin.saveData(_this.plugin.settings);
                _this.display();
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Bind tab to table navigation')
            .setDesc('Requires restart of Obsidian. If enabled, when the cursor is in a table, tab/shift+tab navigate ' +
            'between cells. Disabling this can help avoid conflicting with tag ' +
            'or CJK autocompletion. If disabling, bind "Go to ..." in the Obsidian Hotkeys settings.')
            .addToggle(function (toggle) {
            return toggle.setValue(_this.plugin.settings.bindTab).onChange(function (value) {
                _this.plugin.settings.bindTab = value;
                _this.plugin.saveData(_this.plugin.settings);
                _this.display();
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Pad cell width using spaces')
            .setDesc('If enabled, table cells will have spaces added to match the with of the ' +
            'longest cell in the column.')
            .addToggle(function (toggle) {
            return toggle
                .setValue(_this.plugin.settings.formatType === lib$1.FormatType.NORMAL)
                .onChange(function (value) {
                _this.plugin.settings.formatType = value
                    ? lib$1.FormatType.NORMAL
                    : lib$1.FormatType.WEAK;
                _this.plugin.saveData(_this.plugin.settings);
                _this.display();
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Show icon in sidebar')
            .setDesc('If enabled, a button which opens the table controls toolbar will be added to the Obsidian sidebar. ' +
            'The toolbar can also be opened with a Hotkey. Changes only take effect on reload.')
            .addToggle(function (toggle) {
            return toggle
                .setValue(_this.plugin.settings.showRibbonIcon)
                .onChange(function (value) {
                _this.plugin.settings.showRibbonIcon = value;
                _this.plugin.saveData(_this.plugin.settings);
                _this.display();
            });
        });
        var div = containerEl.createEl('div', {
            cls: 'advanced-tables-donation',
        });
        var donateText = document.createElement('p');
        donateText.appendText('If this plugin adds value for you and you would like to help support ' +
            'continued development, please use the buttons below:');
        div.appendChild(donateText);
        var parser = new DOMParser();
        div.appendChild(createDonateButton('https://paypal.me/tgrosinger', parser.parseFromString(paypal, 'text/xml').documentElement));
        div.appendChild(createDonateButton('https://www.buymeacoffee.com/tgrosinger', parser.parseFromString(buyMeACoffee, 'text/xml').documentElement));
    };
    return TableEditorSettingsTab;
}(obsidian.PluginSettingTab));
var createDonateButton = function (link, img) {
    var a = document.createElement('a');
    a.setAttribute('href', link);
    a.addClass('advanced-tables-donate-button');
    a.appendChild(img);
    return a;
};
var buyMeACoffee = "\n<svg width=\"150\" height=\"42\" viewBox=\"0 0 260 73\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M0 11.68C0 5.22932 5.22931 0 11.68 0H248.2C254.651 0 259.88 5.22931 259.88 11.68V61.32C259.88 67.7707 254.651 73 248.2 73H11.68C5.22931 73 0 67.7707 0 61.32V11.68Z\" fill=\"#FFDD00\"/>\n<path d=\"M52.2566 24.0078L52.2246 23.9889L52.1504 23.9663C52.1802 23.9915 52.2176 24.0061 52.2566 24.0078Z\" fill=\"#0D0C22\"/>\n<path d=\"M52.7248 27.3457L52.6895 27.3556L52.7248 27.3457Z\" fill=\"#0D0C22\"/>\n<path d=\"M52.2701 24.0024C52.266 24.0019 52.2619 24.0009 52.258 23.9995C52.2578 24.0022 52.2578 24.0049 52.258 24.0076C52.2624 24.007 52.2666 24.0052 52.2701 24.0024Z\" fill=\"#0D0C22\"/>\n<path d=\"M52.2578 24.0094H52.2643V24.0054L52.2578 24.0094Z\" fill=\"#0D0C22\"/>\n<path d=\"M52.6973 27.3394L52.7513 27.3086L52.7714 27.2973L52.7897 27.2778C52.7554 27.2926 52.7241 27.3135 52.6973 27.3394Z\" fill=\"#0D0C22\"/>\n<path d=\"M52.3484 24.0812L52.2956 24.031L52.2598 24.0115C52.279 24.0454 52.3108 24.0705 52.3484 24.0812Z\" fill=\"#0D0C22\"/>\n<path d=\"M39.0684 56.469C39.0262 56.4872 38.9893 56.5158 38.9609 56.552L38.9943 56.5306C39.0169 56.5098 39.0489 56.4853 39.0684 56.469Z\" fill=\"#0D0C22\"/>\n<path d=\"M46.7802 54.9518C46.7802 54.9041 46.7569 54.9129 46.7626 55.0826C46.7626 55.0687 46.7683 55.0549 46.7708 55.0417C46.7739 55.0115 46.7764 54.982 46.7802 54.9518Z\" fill=\"#0D0C22\"/>\n<path d=\"M45.9844 56.469C45.9422 56.4872 45.9053 56.5158 45.877 56.552L45.9103 56.5306C45.9329 56.5098 45.9649 56.4853 45.9844 56.469Z\" fill=\"#0D0C22\"/>\n<path d=\"M33.6307 56.8301C33.5987 56.8023 33.5595 56.784 33.5176 56.7773C33.5515 56.7937 33.5855 56.81 33.6081 56.8226L33.6307 56.8301Z\" fill=\"#0D0C22\"/>\n<path d=\"M32.4118 55.6598C32.4068 55.6103 32.3916 55.5624 32.3672 55.519C32.3845 55.5642 32.399 55.6104 32.4106 55.6573L32.4118 55.6598Z\" fill=\"#0D0C22\"/>\n<path d=\"M40.623 34.7221C38.9449 35.4405 37.0404 36.2551 34.5722 36.2551C33.5397 36.2531 32.5122 36.1114 31.5176 35.834L33.2247 53.3605C33.2851 54.093 33.6188 54.7761 34.1595 55.2739C34.7003 55.7718 35.4085 56.0482 36.1435 56.048C36.1435 56.048 38.564 56.1737 39.3716 56.1737C40.2409 56.1737 42.8474 56.048 42.8474 56.048C43.5823 56.048 44.2904 55.7716 44.831 55.2737C45.3716 54.7759 45.7052 54.0929 45.7656 53.3605L47.594 33.993C46.7769 33.714 45.9523 33.5286 45.0227 33.5286C43.415 33.5279 42.1196 34.0817 40.623 34.7221Z\" fill=\"white\"/>\n<path d=\"M26.2344 27.2449L26.2633 27.2719L26.2821 27.2832C26.2676 27.2688 26.2516 27.2559 26.2344 27.2449Z\" fill=\"#0D0C22\"/>\n<path d=\"M55.4906 25.6274L55.2336 24.3307C55.0029 23.1673 54.4793 22.068 53.2851 21.6475C52.9024 21.513 52.468 21.4552 52.1745 21.1768C51.881 20.8983 51.7943 20.4659 51.7264 20.0649C51.6007 19.3289 51.4825 18.5923 51.3537 17.8575C51.2424 17.2259 51.1544 16.5163 50.8647 15.9368C50.4876 15.1586 49.705 14.7036 48.9269 14.4025C48.5282 14.2537 48.1213 14.1278 47.7082 14.0254C45.7642 13.5125 43.7202 13.324 41.7202 13.2165C39.3197 13.084 36.9128 13.1239 34.518 13.3359C32.7355 13.4981 30.8581 13.6942 29.1642 14.3108C28.5451 14.5364 27.9071 14.8073 27.4364 15.2856C26.8587 15.8733 26.6702 16.7821 27.0919 17.515C27.3917 18.0354 27.8996 18.4031 28.4382 18.6463C29.1398 18.9597 29.8726 19.1982 30.6242 19.3578C32.7172 19.8204 34.885 20.0021 37.0233 20.0794C39.3932 20.175 41.767 20.0975 44.1256 19.8474C44.7089 19.7833 45.2911 19.7064 45.8723 19.6168C46.5568 19.5118 46.9961 18.6168 46.7943 17.9933C46.553 17.2479 45.9044 16.9587 45.1709 17.0712C45.0628 17.0882 44.9553 17.1039 44.8472 17.1196L44.7692 17.131C44.5208 17.1624 44.2723 17.1917 44.0238 17.219C43.5105 17.2743 42.9959 17.3195 42.4801 17.3547C41.3249 17.4352 40.1665 17.4722 39.0088 17.4741C37.8712 17.4741 36.7329 17.4421 35.5978 17.3673C35.0799 17.3333 34.5632 17.2902 34.0478 17.2378C33.8134 17.2133 33.5796 17.1875 33.3458 17.1586L33.1233 17.1303L33.0749 17.1234L32.8442 17.0901C32.3728 17.0191 31.9014 16.9374 31.435 16.8387C31.388 16.8283 31.3459 16.8021 31.3157 16.7645C31.2856 16.7269 31.2691 16.6801 31.2691 16.6319C31.2691 16.5837 31.2856 16.5369 31.3157 16.4993C31.3459 16.4617 31.388 16.4356 31.435 16.4251H31.4438C31.848 16.339 32.2553 16.2655 32.6638 16.2014C32.8 16.18 32.9366 16.159 33.0736 16.1385H33.0774C33.3332 16.1215 33.5903 16.0757 33.8448 16.0455C36.0595 15.8151 38.2874 15.7366 40.5128 15.8104C41.5933 15.8419 42.6731 15.9053 43.7485 16.0147C43.9798 16.0386 44.2098 16.0637 44.4399 16.092C44.5279 16.1027 44.6165 16.1153 44.7051 16.1259L44.8836 16.1517C45.404 16.2292 45.9217 16.3233 46.4367 16.4339C47.1997 16.5999 48.1796 16.6539 48.519 17.4898C48.6271 17.7551 48.6761 18.0499 48.7359 18.3283L48.8119 18.6834C48.8139 18.6898 48.8154 18.6963 48.8163 18.7029C48.9961 19.5409 49.176 20.379 49.3562 21.217C49.3694 21.2789 49.3697 21.3429 49.3571 21.4049C49.3445 21.4669 49.3193 21.5257 49.2829 21.5776C49.2466 21.6294 49.2 21.6732 49.146 21.7062C49.092 21.7392 49.0317 21.7608 48.969 21.7695H48.964L48.854 21.7846L48.7453 21.799C48.4009 21.8439 48.056 21.8858 47.7107 21.9247C47.0307 22.0022 46.3496 22.0693 45.6674 22.1259C44.3119 22.2386 42.9536 22.3125 41.5927 22.3477C40.8992 22.3662 40.2059 22.3748 39.5129 22.3735C36.7543 22.3713 33.9981 22.211 31.2578 21.8933C30.9611 21.8581 30.6645 21.8204 30.3678 21.7821C30.5978 21.8116 30.2006 21.7594 30.1202 21.7481C29.9316 21.7217 29.7431 21.6943 29.5545 21.6658C28.9216 21.5709 28.2924 21.454 27.6607 21.3515C26.8971 21.2258 26.1667 21.2887 25.476 21.6658C24.909 21.976 24.4501 22.4518 24.1605 23.0297C23.8626 23.6456 23.7739 24.3163 23.6407 24.9781C23.5074 25.6399 23.3 26.3521 23.3786 27.0315C23.5477 28.4979 24.5728 29.6895 26.0473 29.956C27.4345 30.2074 28.8292 30.4111 30.2276 30.5846C35.7212 31.2574 41.2711 31.3379 46.7818 30.8247C47.2305 30.7828 47.6787 30.7371 48.1262 30.6876C48.266 30.6723 48.4074 30.6884 48.5401 30.7348C48.6729 30.7812 48.7936 30.8566 48.8934 30.9557C48.9932 31.0548 49.0695 31.1749 49.1169 31.3073C49.1642 31.4397 49.1814 31.5811 49.167 31.7209L49.0275 33.0773C48.7463 35.8181 48.4652 38.5587 48.184 41.299C47.8907 44.1769 47.5955 47.0545 47.2984 49.9319C47.2146 50.7422 47.1308 51.5524 47.047 52.3624C46.9666 53.16 46.9552 53.9827 46.8038 54.7709C46.5649 56.0103 45.7258 56.7715 44.5015 57.0499C43.3798 57.3052 42.2339 57.4392 41.0836 57.4497C39.8083 57.4566 38.5336 57.4 37.2583 57.4069C35.897 57.4145 34.2295 57.2887 33.1786 56.2756C32.2553 55.3856 32.1277 53.9921 32.002 52.7872C31.8344 51.192 31.6682 49.5971 31.5036 48.0023L30.5796 39.1344L29.9819 33.3966C29.9718 33.3017 29.9618 33.208 29.9524 33.1125C29.8807 32.428 29.3961 31.758 28.6324 31.7926C27.9788 31.8215 27.2359 32.3771 27.3125 33.1125L27.7557 37.3664L28.672 46.1657C28.9331 48.6652 29.1935 51.165 29.4533 53.6653C29.5036 54.1442 29.5507 54.6244 29.6035 55.1034C29.8908 57.7205 31.8895 59.131 34.3646 59.5282C35.8102 59.7607 37.291 59.8085 38.758 59.8324C40.6386 59.8626 42.538 59.9348 44.3877 59.5942C47.1287 59.0914 49.1853 57.2611 49.4788 54.422C49.5626 53.6024 49.6464 52.7826 49.7302 51.9626C50.0088 49.2507 50.2871 46.5386 50.5649 43.8263L51.4737 34.9641L51.8904 30.9026C51.9112 30.7012 51.9962 30.5118 52.133 30.3625C52.2697 30.2132 52.4509 30.1119 52.6497 30.0736C53.4335 29.9208 54.1827 29.66 54.7402 29.0635C55.6277 28.1138 55.8043 26.8756 55.4906 25.6274ZM26.0071 26.5035C26.019 26.4979 25.997 26.6003 25.9876 26.6481C25.9857 26.5758 25.9895 26.5117 26.0071 26.5035ZM26.0831 27.0918C26.0894 27.0874 26.1083 27.1126 26.1278 27.1428C26.0982 27.1151 26.0794 27.0944 26.0825 27.0918H26.0831ZM26.1579 27.1905C26.185 27.2364 26.1994 27.2653 26.1579 27.1905V27.1905ZM26.3082 27.3125H26.3119C26.3119 27.3169 26.3188 27.3213 26.3214 27.3257C26.3172 27.3208 26.3126 27.3164 26.3075 27.3125H26.3082ZM52.6132 27.1302C52.3317 27.3979 51.9074 27.5224 51.4882 27.5846C46.7868 28.2823 42.0169 28.6355 37.264 28.4796C33.8624 28.3633 30.4967 27.9856 27.129 27.5098C26.799 27.4633 26.4414 27.403 26.2145 27.1597C25.7871 26.7009 25.997 25.777 26.1083 25.2226C26.2101 24.7148 26.405 24.0378 27.009 23.9656C27.9518 23.8549 29.0466 24.2528 29.9794 24.3942C31.1023 24.5656 32.2295 24.7028 33.3609 24.8059C38.1892 25.2459 43.0986 25.1774 47.9056 24.5337C48.7817 24.416 49.6548 24.2792 50.5246 24.1233C51.2996 23.9844 52.1588 23.7236 52.6271 24.5262C52.9482 25.073 52.991 25.8046 52.9413 26.4225C52.926 26.6917 52.8084 26.9448 52.6126 27.1302H52.6132Z\" fill=\"#0D0C22\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M81.1302 40.1929C80.8556 40.7169 80.4781 41.1732 79.9978 41.5604C79.5175 41.9479 78.9571 42.2633 78.3166 42.5062C77.6761 42.7497 77.0315 42.9131 76.3835 42.9964C75.7352 43.0799 75.106 43.0727 74.4963 42.9735C73.8863 42.8749 73.3674 42.6737 72.9408 42.3695L73.4214 37.3779C73.8633 37.2261 74.4197 37.0703 75.0909 36.9107C75.7619 36.7513 76.452 36.6371 77.1613 36.5689C77.8705 36.5003 78.5412 36.5084 79.1744 36.5917C79.8068 36.6753 80.3065 36.8765 80.6725 37.1958C80.8707 37.378 81.0387 37.5754 81.176 37.7883C81.313 38.0011 81.3969 38.2214 81.4276 38.4493C81.5037 39.0875 81.4047 39.6687 81.1302 40.1929ZM74.153 29.5602C74.4734 29.3627 74.8585 29.1877 75.3083 29.0356C75.7581 28.8841 76.2195 28.7774 76.6923 28.7167C77.1648 28.6562 77.6262 28.6481 78.0763 28.6938C78.5258 28.7395 78.9228 28.8647 79.2659 29.0697C79.6089 29.2751 79.8643 29.5714 80.032 29.9586C80.1997 30.3464 80.2456 30.8365 80.1693 31.429C80.1083 31.9001 79.9211 32.2991 79.6089 32.6256C79.2963 32.9526 78.9147 33.2259 78.4652 33.4462C78.0154 33.6668 77.5388 33.8415 77.0356 33.9702C76.5321 34.0997 76.0477 34.1949 75.5828 34.2553C75.1176 34.3163 74.7137 34.3545 74.3706 34.3692C74.0273 34.3845 73.8021 34.3921 73.6956 34.3921L74.153 29.5602ZM83.6007 36.9676C83.3566 36.4361 83.0287 35.9689 82.6172 35.5658C82.2054 35.1633 81.717 34.8709 81.1531 34.6885C81.3969 34.491 81.6371 34.1795 81.8737 33.7539C82.1099 33.3288 82.3119 32.865 82.4796 32.3636C82.6474 31.8619 82.762 31.357 82.8229 30.8478C82.8836 30.3389 82.8607 29.902 82.7544 29.537C82.4947 28.6256 82.087 27.9114 81.5303 27.3946C80.9734 26.8782 80.3257 26.5211 79.586 26.3233C78.8462 26.1264 78.0304 26.0842 77.1383 26.1981C76.2462 26.312 75.3347 26.5361 74.4049 26.8704C74.4049 26.7946 74.4124 26.7148 74.4278 26.6312C74.4426 26.548 74.4504 26.4604 74.4504 26.369C74.4504 26.1411 74.3361 25.9439 74.1074 25.7765C73.8787 25.6093 73.6155 25.5107 73.3183 25.4801C73.0209 25.45 72.731 25.5142 72.4489 25.6738C72.1665 25.8334 71.9721 26.1264 71.8656 26.5511C71.7434 27.9189 71.6215 29.3398 71.4996 30.8134C71.3774 32.2875 71.248 33.7767 71.1107 35.2812C70.9735 36.7855 70.8362 38.2784 70.6989 39.7598C70.5616 41.2414 70.4244 42.6659 70.2871 44.0333C70.333 44.4436 70.4473 44.7629 70.6304 44.9907C70.8133 45.2189 71.0268 45.3556 71.2709 45.401C71.5147 45.4467 71.7704 45.4045 72.0371 45.2755C72.3038 45.1469 72.5365 44.9222 72.735 44.6032C73.3447 44.9375 74.0311 45.1541 74.7938 45.253C75.5561 45.3516 76.3298 45.3516 77.1157 45.253C77.9007 45.1541 78.6747 44.9682 79.4374 44.6943C80.1997 44.4211 80.8936 44.079 81.519 43.669C82.1441 43.2586 82.6703 42.7911 83.0975 42.2671C83.5244 41.7426 83.8065 41.1767 83.9437 40.5691C84.081 39.946 84.119 39.3231 84.0581 38.7C83.9971 38.0771 83.8445 37.5 83.6007 36.9676Z\" fill=\"#0D0C23\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M105.915 49.0017C105.832 49.5031 105.713 50.0311 105.561 50.586C105.408 51.1403 105.229 51.6458 105.023 52.1018C104.818 52.5575 104.589 52.9256 104.337 53.207C104.085 53.488 103.815 53.606 103.525 53.5606C103.296 53.5297 103.151 53.3854 103.091 53.1274C103.029 52.8686 103.029 52.5497 103.091 52.17C103.151 51.7901 103.269 51.3607 103.445 50.8821C103.62 50.4035 103.834 49.9284 104.085 49.4577C104.337 48.9864 104.623 48.5347 104.943 48.1015C105.264 47.6686 105.599 47.3075 105.95 47.0189C106.026 47.11 106.06 47.3378 106.053 47.7028C106.045 48.0674 105.999 48.5006 105.915 49.0017ZM113.67 39.1097C113.464 38.8819 113.213 38.7529 112.915 38.7223C112.618 38.6919 112.317 38.859 112.012 39.2237C111.813 39.5883 111.562 39.9379 111.257 40.2722C110.952 40.6067 110.635 40.9103 110.307 41.1839C109.98 41.4572 109.667 41.6931 109.37 41.8903C109.072 42.0881 108.84 42.2324 108.672 42.3235C108.611 41.8374 108.576 41.3132 108.569 40.7507C108.561 40.1886 108.573 39.619 108.603 39.0415C108.649 38.2209 108.744 37.393 108.889 36.557C109.034 35.7213 109.244 34.9007 109.518 34.0951C109.518 33.67 109.419 33.3242 109.221 33.0582C109.022 32.7924 108.782 32.625 108.5 32.5567C108.218 32.4885 107.929 32.5264 107.631 32.6707C107.334 32.8153 107.078 33.0775 106.865 33.4569C106.682 33.9586 106.472 34.5207 106.236 35.1436C105.999 35.7667 105.732 36.4012 105.435 37.0469C105.138 37.6931 104.806 38.3197 104.44 38.9273C104.074 39.5354 103.674 40.075 103.239 40.5457C102.804 41.0168 102.331 41.3854 101.821 41.6512C101.31 41.9172 100.757 42.0349 100.162 42.0045C99.8876 41.9285 99.6893 41.7235 99.5675 41.3889C99.4453 41.0549 99.373 40.6368 99.3504 40.1354C99.3275 39.634 99.3504 39.0831 99.4189 38.4828C99.4877 37.8828 99.5791 37.2863 99.6934 36.6938C99.8078 36.101 99.9337 35.5389 100.071 35.0071C100.208 34.4753 100.337 34.0268 100.46 33.6622C100.643 33.2218 100.643 32.8529 100.46 32.5567C100.277 32.2604 100.025 32.0631 99.705 31.964C99.3846 31.8654 99.0489 31.8694 98.6983 31.9755C98.3474 32.0819 98.0958 32.3173 97.9435 32.682C97.684 33.3054 97.4475 34.004 97.2342 34.779C97.0206 35.5539 96.8491 36.3558 96.7197 37.1836C96.5896 38.0121 96.5171 38.8327 96.502 39.6456C96.5011 39.6985 96.5037 39.7488 96.5034 39.8014C96.1709 40.6848 95.854 41.3525 95.553 41.7992C95.1641 42.377 94.7253 42.6277 94.2375 42.5513C94.0236 42.4603 93.8832 42.2477 93.8147 41.9132C93.7453 41.5792 93.7227 41.1689 93.7453 40.6822C93.7688 40.1964 93.826 39.6456 93.9171 39.0299C94.0091 38.4146 94.1229 37.7764 94.2601 37.1154C94.3977 36.4541 94.5425 35.7899 94.6949 35.121C94.8472 34.4525 94.9845 33.8218 95.107 33.2291C95.0916 32.6973 94.9352 32.291 94.6377 32.0097C94.3405 31.7289 93.9247 31.6187 93.3913 31.6791C93.0253 31.8312 92.7542 32.029 92.579 32.2719C92.4034 32.5148 92.2623 32.8265 92.1558 33.2062C92.0946 33.404 92.0032 33.799 91.8813 34.3918C91.7591 34.984 91.603 35.6644 91.4123 36.4315C91.2217 37.1992 90.9967 38.0005 90.7376 38.8362C90.4781 39.6719 90.1885 40.4283 89.8684 41.1041C89.548 41.7801 89.1972 42.3235 88.8161 42.7338C88.4348 43.1438 88.023 43.3113 87.5807 43.2352C87.3366 43.1895 87.1805 42.9388 87.112 42.4831C87.0432 42.0271 87.0319 41.4653 87.0775 40.7964C87.1233 40.1279 87.2148 39.3946 87.352 38.5971C87.4893 37.7993 87.63 37.0434 87.7752 36.3289C87.92 35.6149 88.0535 34.984 88.1756 34.4372C88.2975 33.8901 88.3814 33.5254 88.4272 33.3433C88.4272 32.9026 88.3277 32.5495 88.1298 32.2832C87.9313 32.0178 87.6913 31.8503 87.4092 31.7818C87.1268 31.7136 86.8372 31.7514 86.54 31.8957C86.2426 32.0403 85.9872 32.3026 85.7736 32.682C85.6973 33.0923 85.598 33.5674 85.4761 34.1067C85.3539 34.6459 85.2361 35.2006 85.1218 35.7705C85.0074 36.3404 84.9003 36.8988 84.8014 37.4459C84.7021 37.993 84.6299 38.4716 84.584 38.8819C84.5536 39.2008 84.519 39.5923 84.4813 40.0556C84.443 40.5194 84.4238 41.0092 84.4238 41.5257C84.4238 42.0427 84.4618 42.5554 84.5385 43.0643C84.6145 43.5735 84.7518 44.0408 84.95 44.4659C85.1482 44.8915 85.4265 45.2408 85.7852 45.5144C86.1433 45.7879 86.5972 45.9397 87.1463 45.9704C87.7101 46.0005 88.202 45.9591 88.6217 45.8449C89.041 45.731 89.4221 45.5523 89.7654 45.3091C90.1084 45.0665 90.421 44.7776 90.7033 44.443C90.9851 44.1091 91.2637 43.7444 91.5383 43.3491C91.7974 43.9269 92.1329 44.3748 92.5447 44.694C92.9565 45.013 93.3913 45.2032 93.8486 45.2637C94.306 45.3241 94.7715 45.2602 95.2442 45.0699C95.7167 44.8803 96.1436 44.5573 96.5252 44.1012C96.7762 43.8216 97.0131 43.5038 97.2354 43.1525C97.3297 43.317 97.4301 43.4758 97.543 43.6224C97.9168 44.1091 98.424 44.443 99.0645 44.6255C99.7506 44.808 100.421 44.8386 101.077 44.7169C101.733 44.5954 102.358 44.3748 102.953 44.0559C103.548 43.7366 104.101 43.3532 104.612 42.9047C105.122 42.4565 105.568 41.9895 105.95 41.5028C105.934 41.8524 105.927 42.1832 105.927 42.4944C105.927 42.8061 105.919 43.1438 105.904 43.5088C105.141 44.0408 104.421 44.679 103.742 45.4233C103.064 46.1676 102.469 46.9616 101.958 47.8051C101.447 48.6483 101.047 49.5031 100.757 50.3691C100.467 51.2357 100.326 52.0445 100.334 52.7969C100.341 53.549 100.521 54.206 100.871 54.7681C101.222 55.3306 101.794 55.7331 102.587 55.9763C103.411 56.2348 104.135 56.242 104.76 55.9991C105.386 55.7559 105.931 55.3531 106.396 54.791C106.861 54.2289 107.242 53.549 107.54 52.7512C107.837 51.9534 108.073 51.1215 108.249 50.2555C108.424 49.3894 108.535 48.5379 108.58 47.7028C108.626 46.8668 108.626 46.1219 108.58 45.4687C109.892 44.9219 110.967 44.2305 111.806 43.3945C112.645 42.5594 113.338 41.6778 113.887 40.7507C114.055 40.5229 114.112 40.2493 114.059 39.9304C114.006 39.6111 113.876 39.3376 113.67 39.1097Z\" fill=\"#0D0C23\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M142.53 37.6515C142.575 37.3022 142.644 36.9335 142.735 36.546C142.827 36.1585 142.941 35.7823 143.079 35.4177C143.216 35.0531 143.376 34.7379 143.559 34.4718C143.742 34.2061 143.937 34.0161 144.142 33.9019C144.348 33.7883 144.558 33.7995 144.771 33.936C145 34.0731 145.141 34.3617 145.195 34.8021C145.248 35.2433 145.195 35.7141 145.034 36.2155C144.874 36.7172 144.588 37.1879 144.177 37.6286C143.765 38.0696 143.208 38.3579 142.507 38.4947C142.476 38.2824 142.484 38.0011 142.53 37.6515ZM150.456 38.5857C150.204 38.5103 149.964 38.5025 149.735 38.5632C149.506 38.6239 149.361 38.7835 149.301 39.042C149.178 39.5281 148.984 40.0258 148.717 40.5347C148.45 41.0439 148.122 41.5262 147.734 41.9822C147.345 42.438 146.906 42.8408 146.418 43.1901C145.93 43.5397 145.419 43.7904 144.886 43.9422C144.351 44.1096 143.91 44.1284 143.559 43.9991C143.208 43.8705 142.93 43.6498 142.724 43.3384C142.518 43.027 142.369 42.6508 142.278 42.2101C142.186 41.7694 142.133 41.3137 142.118 40.8424C142.987 40.9034 143.761 40.7478 144.44 40.3751C145.118 40.0032 145.694 39.509 146.167 38.8937C146.639 38.2784 146.998 37.587 147.242 36.8195C147.485 36.0524 147.623 35.2887 147.653 34.5288C147.669 33.8146 147.562 33.2108 147.333 32.7169C147.105 32.2233 146.796 31.839 146.407 31.5658C146.018 31.2922 145.572 31.1326 145.069 31.0872C144.566 31.0415 144.054 31.11 143.536 31.2922C142.91 31.505 142.381 31.8506 141.946 32.3294C141.512 32.808 141.149 33.3629 140.86 33.9933C140.57 34.6239 140.341 35.3038 140.173 36.033C140.005 36.7626 139.883 37.4806 139.807 38.1873C139.739 38.8214 139.702 39.4278 139.689 40.013C139.657 40.0874 139.625 40.1588 139.59 40.2383C139.354 40.7782 139.079 41.3062 138.766 41.8226C138.454 42.3394 138.107 42.7725 137.726 43.1218C137.344 43.4714 136.948 43.5929 136.536 43.4865C136.292 43.426 136.159 43.1444 136.136 42.6433C136.113 42.1416 136.139 41.5187 136.216 40.7741C136.292 40.0298 136.38 39.2239 136.479 38.3579C136.578 37.4918 136.628 36.664 136.628 35.8737C136.628 35.1898 136.498 34.5329 136.239 33.9019C135.979 33.2718 135.625 32.7473 135.175 32.3294C134.725 31.9113 134.203 31.634 133.608 31.4975C133.013 31.3605 132.373 31.4518 131.687 31.7708C131 32.09 130.455 32.5382 130.051 33.1157C129.647 33.6934 129.277 34.3009 128.942 34.9391C128.819 34.4528 128.641 34.0011 128.404 33.583C128.167 33.1651 127.878 32.8005 127.535 32.4888C127.191 32.1776 126.806 31.9344 126.38 31.7595C125.953 31.5851 125.502 31.4975 125.03 31.4975C124.572 31.4975 124.149 31.5851 123.76 31.7595C123.371 31.9344 123.017 32.1583 122.696 32.4318C122.376 32.7056 122.087 33.013 121.827 33.3551C121.568 33.6969 121.339 34.0352 121.141 34.3692C121.11 33.9742 121.076 33.6286 121.038 33.332C121 33.0359 120.931 32.7852 120.832 32.5801C120.733 32.3748 120.592 32.2193 120.409 32.1129C120.226 32.0067 119.967 31.9532 119.632 31.9532C119.464 31.9532 119.296 31.9874 119.128 32.0556C118.96 32.1241 118.811 32.2193 118.682 32.3407C118.552 32.4627 118.453 32.6105 118.385 32.7852C118.316 32.9598 118.297 33.1614 118.327 33.3892C118.342 33.5566 118.385 33.7576 118.453 33.9933C118.522 34.2289 118.587 34.5369 118.648 34.9163C118.708 35.2962 118.758 35.756 118.796 36.2953C118.834 36.8349 118.846 37.4959 118.831 38.2784C118.815 39.0611 118.758 39.9763 118.659 41.0248C118.56 42.0733 118.403 43.289 118.19 44.6714C118.16 44.9907 118.282 45.2492 118.556 45.4467C118.831 45.6439 119.143 45.7578 119.494 45.7885C119.845 45.8188 120.177 45.7578 120.489 45.6063C120.802 45.4539 120.981 45.1882 121.027 44.8085C121.072 44.0943 121.16 43.3347 121.29 42.529C121.419 41.724 121.579 40.9262 121.77 40.1359C121.961 39.346 122.178 38.5938 122.422 37.8793C122.666 37.1651 122.937 36.5347 123.234 35.9876C123.532 35.4405 123.84 35.0039 124.161 34.6771C124.481 34.3504 124.816 34.187 125.167 34.187C125.594 34.187 125.926 34.3805 126.162 34.7679C126.398 35.1557 126.566 35.6536 126.666 36.2609C126.765 36.869 126.81 37.5341 126.803 38.2555C126.795 38.9773 126.765 39.6724 126.711 40.341C126.658 41.0098 126.597 41.606 126.528 42.1303C126.46 42.6545 126.41 43.0157 126.38 43.2129C126.38 43.5625 126.513 43.8395 126.78 44.0448C127.046 44.2498 127.344 44.3716 127.672 44.4095C128 44.4476 128.309 44.3866 128.598 44.227C128.888 44.0674 129.056 43.7982 129.102 43.4179C129.254 42.324 129.464 41.2264 129.731 40.1247C129.997 39.023 130.303 38.0355 130.646 37.1616C130.989 36.2878 131.37 35.5735 131.79 35.0189C132.209 34.4646 132.655 34.187 133.128 34.187C133.371 34.187 133.559 34.3544 133.688 34.6884C133.818 35.0227 133.883 35.4784 133.883 36.0559C133.883 36.4815 133.848 36.9184 133.78 37.3666C133.711 37.8148 133.631 38.2784 133.54 38.7569C133.448 39.2358 133.368 39.7256 133.299 40.227C133.231 40.7287 133.196 41.2527 133.196 41.7998C133.196 42.1797 133.235 42.6204 133.311 43.1218C133.387 43.6229 133.532 44.0983 133.745 44.5462C133.959 44.9947 134.252 45.3744 134.626 45.6858C135 45.9973 135.476 46.1531 136.056 46.1531C136.925 46.1531 137.695 45.9669 138.366 45.5947C139.037 45.2226 139.613 44.7365 140.093 44.1362C140.118 44.1047 140.141 44.0711 140.165 44.0399C140.202 44.1287 140.235 44.2227 140.276 44.3071C140.604 44.9756 141.05 45.4921 141.615 45.857C142.178 46.2216 142.842 46.4229 143.605 46.4611C144.367 46.4987 145.198 46.3581 146.098 46.0392C146.769 45.796 147.352 45.4921 147.848 45.1275C148.343 44.7628 148.789 44.3184 149.186 43.7941C149.583 43.2699 149.945 42.6658 150.273 41.9822C150.601 41.2981 150.932 40.5159 151.268 39.6342C151.329 39.3916 151.272 39.1751 151.097 38.9848C150.921 38.7951 150.708 38.6621 150.456 38.5857Z\" fill=\"#0D0C23\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M162.887 36.0434C162.81 36.4918 162.707 36.986 162.578 37.525C162.448 38.0646 162.284 38.623 162.086 39.2004C161.888 39.7779 161.644 40.2984 161.354 40.7616C161.064 41.2254 160.733 41.5935 160.359 41.8671C159.985 42.1406 159.555 42.2546 159.066 42.2089C158.822 42.1788 158.635 42.0117 158.506 41.7075C158.376 41.4038 158.308 41.0161 158.3 40.545C158.292 40.0743 158.334 39.5575 158.426 38.9951C158.517 38.4333 158.658 37.8821 158.849 37.3426C159.04 36.8036 159.272 36.3056 159.547 35.8496C159.821 35.3939 160.138 35.0405 160.496 34.7898C160.854 34.5391 161.247 34.4217 161.674 34.4365C162.101 34.4518 162.559 34.6643 163.047 35.0747C163.016 35.2725 162.963 35.5954 162.887 36.0434ZM171.019 37.787C170.782 37.6656 170.538 37.6392 170.287 37.7075C170.035 37.7757 169.856 38.0076 169.749 38.4026C169.688 38.8283 169.551 39.3294 169.338 39.9069C169.124 40.4843 168.861 41.0317 168.548 41.5478C168.236 42.0646 167.877 42.494 167.473 42.8358C167.069 43.1778 166.638 43.3337 166.181 43.3028C165.799 43.2727 165.532 43.079 165.38 42.7218C165.227 42.3647 165.147 41.9168 165.14 41.3769C165.132 40.838 165.186 40.2301 165.3 39.5538C165.414 38.8777 165.552 38.2054 165.712 37.5363C165.872 36.868 166.036 36.2258 166.204 35.6105C166.371 34.9951 166.508 34.4747 166.616 34.0493C166.738 33.6693 166.699 33.3466 166.501 33.0803C166.303 32.8149 166.055 32.6246 165.758 32.5107C165.46 32.3967 165.159 32.3664 164.854 32.4196C164.549 32.4728 164.351 32.6362 164.259 32.9094C163.359 32.1345 162.494 31.7166 161.663 31.6559C160.831 31.5952 160.065 31.7776 159.364 32.203C158.662 32.6284 158.041 33.2437 157.5 34.0493C156.958 34.8549 156.52 35.7322 156.184 36.6818C155.849 37.6314 155.639 38.6004 155.555 39.5879C155.471 40.5757 155.536 41.4761 155.75 42.289C155.963 43.1018 156.34 43.7669 156.882 44.283C157.423 44.7998 158.159 45.0583 159.089 45.0583C159.501 45.0583 159.898 44.9747 160.279 44.8076C160.66 44.6401 161.011 44.4426 161.331 44.2148C161.651 43.9869 161.933 43.7475 162.178 43.4968C162.421 43.2461 162.612 43.0373 162.749 42.8699C162.856 43.417 163.032 43.8808 163.276 44.2605C163.519 44.6401 163.798 44.9521 164.111 45.1948C164.423 45.4376 164.751 45.6164 165.094 45.7306C165.437 45.8445 165.769 45.9015 166.089 45.9015C166.806 45.9015 167.477 45.6583 168.102 45.1719C168.727 44.6861 169.288 44.0893 169.784 43.3829C170.279 42.6762 170.687 41.9319 171.007 41.1491C171.328 40.3666 171.541 39.6715 171.648 39.0634C171.755 38.8355 171.735 38.5964 171.591 38.3457C171.446 38.095 171.255 37.909 171.019 37.787Z\" fill=\"#0D0C23\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M212.194 50.3701C212.064 50.8866 211.862 51.3238 211.587 51.6806C211.313 52.0377 210.97 52.2239 210.558 52.2393C210.299 52.2543 210.101 52.1175 209.963 51.8289C209.826 51.5401 209.731 51.1679 209.678 50.7122C209.624 50.2562 209.601 49.747 209.609 49.1849C209.616 48.6227 209.639 48.0681 209.678 47.521C209.715 46.9742 209.761 46.4647 209.815 45.9939C209.868 45.5226 209.91 45.1586 209.94 44.9C210.459 44.9608 210.89 45.1846 211.233 45.5723C211.576 45.9598 211.839 46.4193 212.022 46.9514C212.205 47.4831 212.312 48.0568 212.343 48.6722C212.373 49.2875 212.323 49.8534 212.194 50.3701ZM203.913 50.3701C203.783 50.8866 203.581 51.3238 203.307 51.6806C203.032 52.0377 202.689 52.2239 202.277 52.2393C202.018 52.2543 201.82 52.1175 201.683 51.8289C201.545 51.5401 201.45 51.1679 201.397 50.7122C201.343 50.2562 201.32 49.747 201.328 49.1849C201.336 48.6227 201.358 48.0681 201.397 47.521C201.434 46.9742 201.48 46.4647 201.534 45.9939C201.587 45.5226 201.629 45.1586 201.66 44.9C202.178 44.9608 202.609 45.1846 202.952 45.5723C203.295 45.9598 203.558 46.4193 203.741 46.9514C203.924 47.4831 204.031 48.0568 204.062 48.6722C204.092 49.2875 204.042 49.8534 203.913 50.3701ZM195.415 37.4241C195.399 37.7884 195.365 38.1114 195.312 38.3925C195.258 38.6741 195.186 38.8522 195.095 38.9283C194.927 38.8369 194.721 38.6018 194.477 38.2216C194.233 37.8419 194.042 37.4122 193.905 36.9336C193.768 36.4551 193.725 35.9843 193.779 35.5205C193.832 35.0573 194.073 34.6967 194.5 34.4379C194.667 34.3468 194.812 34.3809 194.934 34.5405C195.056 34.7001 195.155 34.9318 195.232 35.2357C195.308 35.5399 195.361 35.8892 195.392 36.2842C195.422 36.6795 195.43 37.0591 195.415 37.4241ZM193.39 41.9711C193.154 42.2215 192.89 42.4381 192.601 42.6206C192.311 42.803 192.014 42.9398 191.709 43.0309C191.404 43.1223 191.129 43.1448 190.885 43.0991C190.199 42.9627 189.673 42.666 189.307 42.2103C188.941 41.7545 188.708 41.219 188.609 40.6037C188.51 39.9881 188.521 39.3308 188.644 38.6319C188.765 37.933 188.971 37.2835 189.261 36.6832C189.551 36.0829 189.902 35.5662 190.313 35.1333C190.725 34.7001 191.175 34.4306 191.663 34.3239C191.48 35.0989 191.419 35.9007 191.48 36.7286C191.541 37.5568 191.739 38.3355 192.075 39.0648C192.288 39.506 192.544 39.9082 192.841 40.2729C193.139 40.6378 193.501 40.9492 193.928 41.2075C193.806 41.466 193.626 41.7204 193.39 41.9711ZM218.702 37.6519C218.747 37.3026 218.816 36.9336 218.908 36.5462C218.999 36.159 219.114 35.7828 219.251 35.4181C219.388 35.0532 219.548 34.738 219.731 34.4723C219.914 34.2065 220.108 34.0163 220.314 33.9024C220.52 33.7884 220.73 33.7997 220.943 33.9365C221.172 34.0735 221.313 34.3621 221.367 34.8025C221.42 35.2435 221.367 35.7142 221.207 36.2159C221.046 36.7173 220.761 37.1884 220.349 37.6288C219.937 38.07 219.38 38.3583 218.679 38.4951C218.648 38.2826 218.656 38.0015 218.702 37.6519ZM227.921 37.6519C227.966 37.3026 228.035 36.9336 228.126 36.5462C228.218 36.159 228.332 35.7828 228.47 35.4181C228.607 35.0532 228.767 34.738 228.95 34.4723C229.133 34.2065 229.328 34.0163 229.533 33.9024C229.739 33.7884 229.949 33.7997 230.162 33.9365C230.391 34.0735 230.532 34.3621 230.586 34.8025C230.639 35.2435 230.586 35.7142 230.425 36.2159C230.265 36.7173 229.979 37.1884 229.568 37.6288C229.156 38.07 228.599 38.3583 227.898 38.4951C227.867 38.2826 227.875 38.0015 227.921 37.6519ZM236.488 38.9852C236.312 38.7955 236.099 38.6625 235.847 38.5862C235.595 38.5104 235.355 38.5029 235.126 38.5636C234.897 38.6244 234.752 38.784 234.692 39.0422C234.57 39.5286 234.375 40.0262 234.108 40.5349C233.841 41.0444 233.514 41.5267 233.125 41.9824C232.736 42.4381 232.297 42.8412 231.81 43.1905C231.321 43.5401 230.81 43.7908 230.277 43.9423C229.743 44.1101 229.301 44.1289 228.95 43.9996C228.599 43.8706 228.321 43.6503 228.115 43.3389C227.909 43.0271 227.761 42.6512 227.669 42.2103C227.578 41.7699 227.524 41.3142 227.509 40.8428C228.378 40.9038 229.152 40.7483 229.831 40.3755C230.509 40.0034 231.085 39.5092 231.558 38.8939C232.031 38.2788 232.389 37.5874 232.633 36.82C232.877 36.0526 233.014 35.2892 233.045 34.5293C233.06 33.815 232.953 33.211 232.724 32.7171C232.496 32.2235 232.187 31.8395 231.798 31.5662C231.409 31.2924 230.963 31.133 230.46 31.0874C229.957 31.0417 229.445 31.1105 228.927 31.2924C228.302 31.5055 227.772 31.851 227.338 32.3296C226.903 32.8085 226.54 33.3634 226.251 33.9934C225.961 34.6244 225.732 35.3039 225.564 36.0335C225.396 36.7627 225.274 37.481 225.199 38.1874C225.124 38.873 225.084 39.5292 225.075 40.1572C225.017 40.2824 224.956 40.4082 224.889 40.5349C224.622 41.0444 224.295 41.5267 223.906 41.9824C223.517 42.4381 223.078 42.8412 222.591 43.1905C222.102 43.5401 221.592 43.7908 221.058 43.9423C220.524 44.1101 220.082 44.1289 219.731 43.9996C219.38 43.8706 219.102 43.6503 218.896 43.3389C218.691 43.0271 218.542 42.6512 218.45 42.2103C218.359 41.7699 218.305 41.3142 218.29 40.8428C219.159 40.9038 219.933 40.7483 220.612 40.3755C221.29 40.0034 221.866 39.5092 222.339 38.8939C222.811 38.2788 223.17 37.5874 223.414 36.82C223.658 36.0526 223.795 35.2892 223.826 34.5293C223.841 33.815 223.734 33.211 223.506 32.7171C223.277 32.2235 222.968 31.8395 222.579 31.5662C222.19 31.2924 221.744 31.133 221.241 31.0874C220.738 31.0417 220.227 31.1105 219.708 31.2924C219.083 31.5055 218.553 31.851 218.119 32.3296C217.684 32.8085 217.321 33.3634 217.032 33.9934C216.742 34.6244 216.513 35.3039 216.346 36.0335C216.178 36.7627 216.056 37.481 215.98 38.1874C215.936 38.5859 215.907 38.9722 215.886 39.3516C215.739 39.4765 215.595 39.6023 215.442 39.7258C214.916 40.1514 214.363 40.5349 213.784 40.8769C213.204 41.219 212.601 41.5001 211.977 41.7204C211.351 41.9408 210.71 42.0738 210.055 42.1192L211.473 26.9847C211.565 26.6655 211.519 26.3847 211.336 26.1415C211.153 25.8983 210.916 25.7312 210.627 25.6401C210.337 25.5488 210.028 25.5566 209.7 25.6627C209.372 25.7694 209.102 26.0126 208.888 26.3919C208.781 26.9697 208.671 27.7597 208.557 28.7625C208.442 29.7653 208.328 30.8595 208.213 32.0448C208.099 33.23 207.985 34.4532 207.87 35.7142C207.756 36.9759 207.657 38.1533 207.573 39.2472C207.569 39.2958 207.566 39.3398 207.562 39.3878C207.429 39.5005 207.299 39.6142 207.161 39.7258C206.635 40.1514 206.082 40.5349 205.503 40.8769C204.923 41.219 204.321 41.5001 203.696 41.7204C203.07 41.9408 202.429 42.0738 201.774 42.1192L203.192 26.9847C203.284 26.6655 203.238 26.3847 203.055 26.1415C202.872 25.8983 202.635 25.7312 202.346 25.6401C202.056 25.5488 201.747 25.5566 201.419 25.6627C201.091 25.7694 200.821 26.0126 200.607 26.3919C200.501 26.9697 200.39 27.7597 200.276 28.7625C200.161 29.7653 200.047 30.8595 199.933 32.0448C199.818 33.23 199.704 34.4532 199.589 35.7142C199.475 36.9759 199.376 38.1533 199.292 39.2472C199.29 39.2692 199.289 39.2891 199.287 39.3111C199.048 39.4219 198.786 39.519 198.503 39.6006C198.213 39.6844 197.885 39.7339 197.519 39.7489C197.58 39.4751 197.63 39.1712 197.668 38.8369C197.706 38.5029 197.737 38.1533 197.76 37.7884C197.782 37.4241 197.79 37.0591 197.782 36.6945C197.774 36.3296 197.755 35.9956 197.725 35.6914C197.649 35.0385 197.508 34.4191 197.302 33.8338C197.096 33.2491 196.818 32.7593 196.467 32.3637C196.116 31.9687 195.678 31.7027 195.151 31.5662C194.626 31.4294 194.012 31.4748 193.31 31.7027C192.273 31.5662 191.339 31.6613 190.508 31.9878C189.677 32.3149 188.956 32.7894 188.346 33.4122C187.736 34.0357 187.237 34.7684 186.848 35.6119C186.459 36.4551 186.2 37.3214 186.07 38.21C186.015 38.5868 185.988 38.9618 185.98 39.336C185.744 39.8177 185.486 40.2388 185.201 40.5921C184.797 41.0935 184.377 41.5038 183.943 41.8228C183.508 42.142 183.077 42.3852 182.65 42.5523C182.223 42.7198 181.842 42.8337 181.507 42.8941C181.11 42.9702 180.729 42.978 180.363 42.917C179.997 42.8565 179.661 42.6816 179.357 42.3927C179.112 42.1802 178.925 41.8381 178.796 41.3671C178.666 40.896 178.59 40.3608 178.567 39.7602C178.544 39.1599 178.567 38.533 178.636 37.8798C178.705 37.2266 178.822 36.6072 178.99 36.0222C179.158 35.4372 179.371 34.913 179.631 34.4492C179.89 33.9862 180.195 33.6554 180.546 33.4579C180.744 33.4886 180.866 33.606 180.912 33.811C180.958 34.0163 180.969 34.2595 180.946 34.5405C180.923 34.8219 180.889 35.1105 180.843 35.4066C180.797 35.703 180.775 35.9502 180.775 36.1474C180.851 36.5577 180.999 36.877 181.221 37.1048C181.441 37.3327 181.69 37.466 181.964 37.5036C182.239 37.5417 182.509 37.4773 182.776 37.3098C183.043 37.143 183.26 36.877 183.428 36.512C183.443 36.5274 183.466 36.5349 183.497 36.5349L183.817 33.6404C183.909 33.2451 183.847 32.8958 183.634 32.5919C183.42 32.288 183.138 32.113 182.788 32.0676C182.345 31.4294 181.747 31.0914 180.992 31.0532C180.237 31.0154 179.463 31.2623 178.67 31.7941C178.182 32.144 177.751 32.626 177.378 33.2413C177.004 33.857 176.699 34.5405 176.463 35.2926C176.226 36.0448 176.058 36.8391 175.959 37.6748C175.86 38.5104 175.841 39.3236 175.902 40.1133C175.963 40.9038 176.104 41.6484 176.325 42.347C176.546 43.0462 176.855 43.6312 177.252 44.102C177.587 44.5123 177.968 44.8127 178.395 45.0027C178.822 45.1927 179.268 45.3101 179.734 45.3558C180.199 45.4012 180.66 45.3821 181.118 45.2988C181.575 45.2155 182.01 45.0978 182.421 44.9454C182.955 44.7482 183.505 44.4972 184.069 44.1933C184.633 43.8897 185.174 43.5248 185.693 43.0991C185.966 42.8753 186.228 42.6313 186.482 42.3696C186.598 42.6553 186.727 42.9317 186.882 43.1905C187.294 43.8741 187.85 44.429 188.552 44.8544C189.253 45.2797 190.115 45.4844 191.137 45.4697C192.235 45.4544 193.249 45.1774 194.18 44.6378C195.11 44.0988 195.872 43.3042 196.467 42.256C197.358 42.256 198.234 42.1096 199.096 41.819C199.089 41.911 199.081 42.0079 199.075 42.0966C199.014 42.9019 198.983 43.4487 198.983 43.7376C198.968 44.239 198.934 44.8581 198.88 45.5949C198.827 46.332 198.793 47.1069 198.778 47.9198C198.763 48.7326 198.793 49.5532 198.869 50.3817C198.945 51.2096 199.105 51.962 199.349 52.6383C199.593 53.3141 199.94 53.8878 200.39 54.3591C200.84 54.8299 201.431 55.1112 202.163 55.2023C202.941 55.3084 203.612 55.1717 204.176 54.792C204.74 54.412 205.198 53.8918 205.549 53.2308C205.899 52.5695 206.147 51.8061 206.292 50.9401C206.437 50.074 206.479 49.2039 206.418 48.3301C206.357 47.4562 206.196 46.6321 205.937 45.8575C205.678 45.0822 205.319 44.444 204.862 43.9423C205.137 43.8669 205.465 43.7226 205.846 43.5095C206.227 43.2969 206.62 43.0575 207.024 42.7915C207.123 42.7261 207.221 42.6573 207.32 42.5902C207.283 43.1286 207.264 43.5126 207.264 43.7376C207.249 44.239 207.215 44.8581 207.161 45.5949C207.108 46.332 207.073 47.1069 207.058 47.9198C207.043 48.7326 207.073 49.5532 207.15 50.3817C207.226 51.2096 207.386 51.962 207.63 52.6383C207.874 53.3141 208.221 53.8878 208.671 54.3591C209.121 54.8299 209.712 55.1112 210.444 55.2023C211.221 55.3084 211.892 55.1717 212.457 54.792C213.021 54.412 213.478 53.8918 213.83 53.2308C214.18 52.5695 214.428 51.8061 214.573 50.9401C214.718 50.074 214.759 49.2039 214.699 48.3301C214.637 47.4562 214.477 46.6321 214.218 45.8575C213.959 45.0822 213.601 44.444 213.143 43.9423C213.418 43.8669 213.745 43.7226 214.127 43.5095C214.508 43.2969 214.9 43.0575 215.305 42.7915C215.515 42.6533 215.724 42.5107 215.932 42.3641C216.01 43.1072 216.179 43.759 216.448 44.3073C216.776 44.9761 217.222 45.4925 217.787 45.8575C218.351 46.2218 219.014 46.4234 219.777 46.4612C220.539 46.4988 221.37 46.3586 222.271 46.0393C222.941 45.7965 223.525 45.4925 224.02 45.1279C224.516 44.763 224.962 44.3185 225.358 43.7946C225.381 43.7642 225.403 43.7313 225.425 43.7006C225.496 43.9134 225.574 44.1179 225.667 44.3073C225.995 44.9761 226.441 45.4925 227.006 45.8575C227.569 46.2218 228.233 46.4234 228.996 46.4612C229.758 46.4988 230.589 46.3586 231.489 46.0393C232.16 45.7965 232.744 45.4925 233.239 45.1279C233.735 44.763 234.181 44.3185 234.577 43.7946C234.974 43.27 235.336 42.666 235.664 41.9824C235.992 41.2985 236.323 40.5164 236.659 39.6347C236.72 39.3918 236.663 39.1752 236.488 38.9852Z\" fill=\"#0D0C23\"/>\n</svg>";
var paypal = "\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"150\" height=\"40\">\n<path fill=\"#253B80\" d=\"M46.211 6.749h-6.839a.95.95 0 0 0-.939.802l-2.766 17.537a.57.57 0 0 0 .564.658h3.265a.95.95 0 0 0 .939-.803l.746-4.73a.95.95 0 0 1 .938-.803h2.165c4.505 0 7.105-2.18 7.784-6.5.306-1.89.013-3.375-.872-4.415-.972-1.142-2.696-1.746-4.985-1.746zM47 13.154c-.374 2.454-2.249 2.454-4.062 2.454h-1.032l.724-4.583a.57.57 0 0 1 .563-.481h.473c1.235 0 2.4 0 3.002.704.359.42.469 1.044.332 1.906zM66.654 13.075h-3.275a.57.57 0 0 0-.563.481l-.145.916-.229-.332c-.709-1.029-2.29-1.373-3.868-1.373-3.619 0-6.71 2.741-7.312 6.586-.313 1.918.132 3.752 1.22 5.031.998 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.57.57 0 0 0 .562.66h2.95a.95.95 0 0 0 .939-.803l1.77-11.209a.568.568 0 0 0-.561-.658zm-4.565 6.374c-.316 1.871-1.801 3.127-3.695 3.127-.951 0-1.711-.305-2.199-.883-.484-.574-.668-1.391-.514-2.301.295-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.499.589.697 1.411.554 2.317zM84.096 13.075h-3.291a.954.954 0 0 0-.787.417l-4.539 6.686-1.924-6.425a.953.953 0 0 0-.912-.678h-3.234a.57.57 0 0 0-.541.754l3.625 10.638-3.408 4.811a.57.57 0 0 0 .465.9h3.287a.949.949 0 0 0 .781-.408l10.946-15.8a.57.57 0 0 0-.468-.895z\"/>\n<path fill=\"#179BD7\" d=\"M94.992 6.749h-6.84a.95.95 0 0 0-.938.802l-2.766 17.537a.569.569 0 0 0 .562.658h3.51a.665.665 0 0 0 .656-.562l.785-4.971a.95.95 0 0 1 .938-.803h2.164c4.506 0 7.105-2.18 7.785-6.5.307-1.89.012-3.375-.873-4.415-.971-1.142-2.694-1.746-4.983-1.746zm.789 6.405c-.373 2.454-2.248 2.454-4.062 2.454h-1.031l.725-4.583a.568.568 0 0 1 .562-.481h.473c1.234 0 2.4 0 3.002.704.359.42.468 1.044.331 1.906zM115.434 13.075h-3.273a.567.567 0 0 0-.562.481l-.145.916-.23-.332c-.709-1.029-2.289-1.373-3.867-1.373-3.619 0-6.709 2.741-7.311 6.586-.312 1.918.131 3.752 1.219 5.031 1 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.57.57 0 0 0 .564.66h2.949a.95.95 0 0 0 .938-.803l1.771-11.209a.571.571 0 0 0-.565-.658zm-4.565 6.374c-.314 1.871-1.801 3.127-3.695 3.127-.949 0-1.711-.305-2.199-.883-.484-.574-.666-1.391-.514-2.301.297-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.501.589.699 1.411.554 2.317zM119.295 7.23l-2.807 17.858a.569.569 0 0 0 .562.658h2.822c.469 0 .867-.34.939-.803l2.768-17.536a.57.57 0 0 0-.562-.659h-3.16a.571.571 0 0 0-.562.482z\"/>\n<path fill=\"#253B80\" d=\"M7.266 29.154l.523-3.322-1.165-.027H1.061L4.927 1.292a.316.316 0 0 1 .314-.268h9.38c3.114 0 5.263.648 6.385 1.927.526.6.861 1.227 1.023 1.917.17.724.173 1.589.007 2.644l-.012.077v.676l.526.298a3.69 3.69 0 0 1 1.065.812c.45.513.741 1.165.864 1.938.127.795.085 1.741-.123 2.812-.24 1.232-.628 2.305-1.152 3.183a6.547 6.547 0 0 1-1.825 2c-.696.494-1.523.869-2.458 1.109-.906.236-1.939.355-3.072.355h-.73c-.522 0-1.029.188-1.427.525a2.21 2.21 0 0 0-.744 1.328l-.055.299-.924 5.855-.042.215c-.011.068-.03.102-.058.125a.155.155 0 0 1-.096.035H7.266z\"/>\n<path fill=\"#179BD7\" d=\"M23.048 7.667c-.028.179-.06.362-.096.55-1.237 6.351-5.469 8.545-10.874 8.545H9.326c-.661 0-1.218.48-1.321 1.132L6.596 26.83l-.399 2.533a.704.704 0 0 0 .695.814h4.881c.578 0 1.069-.42 1.16-.99l.048-.248.919-5.832.059-.32c.09-.572.582-.992 1.16-.992h.73c4.729 0 8.431-1.92 9.513-7.476.452-2.321.218-4.259-.978-5.622a4.667 4.667 0 0 0-1.336-1.03z\"/>\n<path fill=\"#222D65\" d=\"M21.754 7.151a9.757 9.757 0 0 0-1.203-.267 15.284 15.284 0 0 0-2.426-.177h-7.352a1.172 1.172 0 0 0-1.159.992L8.05 17.605l-.045.289a1.336 1.336 0 0 1 1.321-1.132h2.752c5.405 0 9.637-2.195 10.874-8.545.037-.188.068-.371.096-.55a6.594 6.594 0 0 0-1.017-.429 9.045 9.045 0 0 0-.277-.087z\"/>\n<path fill=\"#253B80\" d=\"M9.614 7.699a1.169 1.169 0 0 1 1.159-.991h7.352c.871 0 1.684.057 2.426.177a9.757 9.757 0 0 1 1.481.353c.365.121.704.264 1.017.429.368-2.347-.003-3.945-1.272-5.392C20.378.682 17.853 0 14.622 0h-9.38c-.66 0-1.223.48-1.325 1.133L.01 25.898a.806.806 0 0 0 .795.932h5.791l1.454-9.225 1.564-9.906z\"/>\n</svg>";

module.exports = TableEditorPlugin;