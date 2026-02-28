(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/global/usePolygonStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWorkspaceStore",
    ()=>useWorkspaceStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
;
;
const useWorkspaceStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        activeModuleKey: null,
        workspaceStatus: "idle",
        setActiveModule: (moduleKey)=>set({
                activeModuleKey: moduleKey
            }),
        setWorkspaceStatus: (status)=>set({
                workspaceStatus: status
            }),
        resetWorkspace: ()=>set({
                activeModuleKey: null,
                workspaceStatus: "idle"
            })
    }), {
    name: "workspace-session"
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/icons/icons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AIIcon",
    ()=>AIIcon,
    "AiEmployeesIcon",
    ()=>AiEmployeesIcon,
    "BackArrowIcon",
    ()=>BackArrowIcon,
    "CampaignIcon",
    ()=>CampaignIcon,
    "CampaignsIcon",
    ()=>CampaignsIcon,
    "CloseIcon",
    ()=>CloseIcon,
    "ContactsIcon",
    ()=>ContactsIcon,
    "DetailsIcon",
    ()=>DetailsIcon,
    "HeaderInboxIcon",
    ()=>HeaderInboxIcon,
    "HomeIcon",
    ()=>HomeIcon,
    "InboxIcon",
    ()=>InboxIcon,
    "MenuIcon",
    ()=>MenuIcon,
    "MoreVerticalIcon",
    ()=>MoreVerticalIcon,
    "SingleUserIcon",
    ()=>SingleUserIcon,
    "TickIcon",
    ()=>TickIcon,
    "TwoUsersIcon",
    ()=>TwoUsersIcon,
    "UnassignedUserIcon",
    ()=>UnassignedUserIcon,
    "UserGroupFilledIcon",
    ()=>UserGroupFilledIcon,
    "WorkflowIcon",
    ()=>WorkflowIcon,
    "WorkflowsIcon",
    ()=>WorkflowsIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
const InboxIcon = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "24d0e2f1dd79634eb78c449221ed5d45d96d9ff47c590a6f41c26128cb53ddae") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "24d0e2f1dd79634eb78c449221ed5d45d96d9ff47c590a6f41c26128cb53ddae";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M1.16959 10.5263C0.847953 10.5263 0.572612 10.4118 0.343567 10.1827C0.114522 9.9537 0 9.67836 0 9.35672L0 1.16959C0 0.847953 0.114522 0.572612 0.343567 0.343567C0.572612 0.114522 0.847953 0 1.16959 0L9.35672 0C9.67836 0 9.9537 0.114522 10.1827 0.343567C10.4118 0.572612 10.5263 0.847953 10.5263 1.16959V9.35672C10.5263 9.67836 10.4118 9.9537 10.1827 10.1827C9.9537 10.4118 9.67836 10.5263 9.35672 10.5263H1.16959ZM1.16959 8.65497C1.16959 9.04254 1.48378 9.35672 1.87135 9.35672H8.65497C9.04254 9.35672 9.35672 9.04254 9.35672 8.65497V7.01754H7.60234C7.30994 7.38791 6.9615 7.67544 6.55702 7.88012C6.15253 8.08479 5.72125 8.18713 5.26316 8.18713C4.80507 8.18713 4.37378 8.08479 3.9693 7.88012C3.56481 7.67544 3.21637 7.38791 2.92398 7.01754H1.16959V8.65497ZM5.26316 7.01754C5.57505 7.01754 5.86257 6.93713 6.12573 6.77632C6.38889 6.6155 6.60331 6.40351 6.76901 6.14035C6.82749 6.05263 6.90058 5.98197 6.9883 5.92836C7.07602 5.87476 7.17349 5.84795 7.2807 5.84795H9.35672V1.87135C9.35672 1.48378 9.04254 1.16959 8.65497 1.16959H1.87135C1.48378 1.16959 1.16959 1.48378 1.16959 1.87134V5.84795H3.24561C3.35283 5.84795 3.45029 5.87476 3.53801 5.92836C3.62573 5.98197 3.69883 6.05263 3.75731 6.14035C3.923 6.40351 4.13743 6.6155 4.40058 6.77632C4.66374 6.93713 4.95127 7.01754 5.26316 7.01754Z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 16,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] !== className) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 11 11",
            className: className,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 23,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = className;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    return t3;
};
_c = InboxIcon;
const HeaderInboxIcon = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "24d0e2f1dd79634eb78c449221ed5d45d96d9ff47c590a6f41c26128cb53ddae") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "24d0e2f1dd79634eb78c449221ed5d45d96d9ff47c590a6f41c26128cb53ddae";
    }
    const { className: t1 } = t0;
    t1 === undefined ? "" : t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 11 11",
            className: " size-[1.2rem] ",
            strokeWidth: "0",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1.16959 10.5263C0.847953 10.5263 0.572612 10.4118 0.343567 10.1827C0.114522 9.9537 0 9.67836 0 9.35672L0 1.16959C0 0.847953 0.114522 0.572612 0.343567 0.343567C0.572612 0.114522 0.847953 0 1.16959 0L9.35672 0C9.67836 0 9.9537 0.114522 10.1827 0.343567C10.4118 0.572612 10.5263 0.847953 10.5263 1.16959V9.35672C10.5263 9.67836 10.4118 9.9537 10.1827 10.1827C9.9537 10.4118 9.67836 10.5263 9.35672 10.5263H1.16959ZM1.16959 8.65497C1.16959 9.04254 1.48378 9.35672 1.87135 9.35672H8.65497C9.04254 9.35672 9.35672 9.04254 9.35672 8.65497V7.01754H7.60234C7.30994 7.38791 6.9615 7.67544 6.55702 7.88012C6.15253 8.08479 5.72125 8.18713 5.26316 8.18713C4.80507 8.18713 4.37378 8.08479 3.9693 7.88012C3.56481 7.67544 3.21637 7.38791 2.92398 7.01754H1.16959V8.65497ZM5.26316 7.01754C5.57505 7.01754 5.86257 6.93713 6.12573 6.77632C6.38889 6.6155 6.60331 6.40351 6.76901 6.14035C6.82749 6.05263 6.90058 5.98197 6.9883 5.92836C7.07602 5.87476 7.17349 5.84795 7.2807 5.84795H9.35672V1.87135C9.35672 1.48378 9.04254 1.16959 8.65497 1.16959H1.87135C1.48378 1.16959 1.16959 1.48378 1.16959 1.87134V5.84795H3.24561C3.35283 5.84795 3.45029 5.87476 3.53801 5.92836C3.62573 5.98197 3.69883 6.05263 3.75731 6.14035C3.923 6.40351 4.13743 6.6155 4.40058 6.77632C4.66374 6.93713 4.95127 7.01754 5.26316 7.01754Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/icons/icons.tsx",
                lineNumber: 45,
                columnNumber: 126
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    return t2;
};
_c1 = HeaderInboxIcon;
const ContactsIcon = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "24d0e2f1dd79634eb78c449221ed5d45d96d9ff47c590a6f41c26128cb53ddae") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "24d0e2f1dd79634eb78c449221ed5d45d96d9ff47c590a6f41c26128cb53ddae";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "12",
            cy: "7",
            r: "4"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 67,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M5.5 20c1.5-4 4-6 6.5-6s5 2 7 6"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
    } else {
        t2 = $[1];
        t3 = $[2];
    }
    let t4;
    if ($[3] !== className) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            width: "1em",
            height: "1em",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = className;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    return t4;
};
_c2 = ContactsIcon;
const AiEmployeesIcon = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "24d0e2f1dd79634eb78c449221ed5d45d96d9ff47c590a6f41c26128cb53ddae") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "24d0e2f1dd79634eb78c449221ed5d45d96d9ff47c590a6f41c26128cb53ddae";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 3v3M12 18v3M4.2 7.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 16.8l2.1-2.1M17.7 6.3l2.1-2.1"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 100,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "12",
            cy: "12",
            r: "3"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 101,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
    } else {
        t2 = $[1];
        t3 = $[2];
    }
    let t4;
    if ($[3] !== className) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            width: "1em",
            height: "1em",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 110,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = className;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    return t4;
};
_c3 = AiEmployeesIcon;
const WorkflowsIcon = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "24d0e2f1dd79634eb78c449221ed5d45d96d9ff47c590a6f41c26128cb53ddae") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "24d0e2f1dd79634eb78c449221ed5d45d96d9ff47c590a6f41c26128cb53ddae";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    let t2;
    let t3;
    let t4;
    let t5;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "6",
            cy: "6",
            r: "3"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 135,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "18",
            cy: "6",
            r: "3"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 136,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "12",
            cy: "18",
            r: "3"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 137,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M6 9v3c0 1.5 1 3 3 3h6c2 0 3-1.5 3-3V9"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 138,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
        $[3] = t4;
        $[4] = t5;
    } else {
        t2 = $[1];
        t3 = $[2];
        t4 = $[3];
        t5 = $[4];
    }
    let t6;
    if ($[5] !== className) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            width: "1em",
            height: "1em",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                t2,
                t3,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 151,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = className;
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    return t6;
};
_c4 = WorkflowsIcon;
const CampaignsIcon = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "24d0e2f1dd79634eb78c449221ed5d45d96d9ff47c590a6f41c26128cb53ddae") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "24d0e2f1dd79634eb78c449221ed5d45d96d9ff47c590a6f41c26128cb53ddae";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    let t2;
    let t3;
    let t4;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "12",
            cy: "12",
            r: "9"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 175,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "12",
            cy: "12",
            r: "5"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 176,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "12",
            cy: "12",
            r: "2"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 177,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
        $[3] = t4;
    } else {
        t2 = $[1];
        t3 = $[2];
        t4 = $[3];
    }
    let t5;
    if ($[4] !== className) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            width: "1em",
            height: "1em",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 188,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = className;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    return t5;
};
_c5 = CampaignsIcon;
const HomeIcon = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "24d0e2f1dd79634eb78c449221ed5d45d96d9ff47c590a6f41c26128cb53ddae") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "24d0e2f1dd79634eb78c449221ed5d45d96d9ff47c590a6f41c26128cb53ddae";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    let t2;
    let t3;
    let t4;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M3 10.5L12 3l9 7.5"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 212,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M5 10v10h14V10"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 213,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M9 20v-6h6v6"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 214,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
        $[3] = t4;
    } else {
        t2 = $[1];
        t3 = $[2];
        t4 = $[3];
    }
    let t5;
    if ($[4] !== className) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            width: "1em",
            height: "1em",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 225,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = className;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    return t5;
};
_c6 = HomeIcon;
const SingleUserIcon = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "24d0e2f1dd79634eb78c449221ed5d45d96d9ff47c590a6f41c26128cb53ddae") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "24d0e2f1dd79634eb78c449221ed5d45d96d9ff47c590a6f41c26128cb53ddae";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 247,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] !== className) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: [
                t2,
                "  "
            ]
        }, void 0, true, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 254,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = className;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    return t3;
};
_c7 = SingleUserIcon;
const TwoUsersIcon = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "24d0e2f1dd79634eb78c449221ed5d45d96d9ff47c590a6f41c26128cb53ddae") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "24d0e2f1dd79634eb78c449221ed5d45d96d9ff47c590a6f41c26128cb53ddae";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    let t2;
    let t3;
    let t4;
    let t5;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "9",
            cy: "8",
            r: "3"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 279,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4 18c0-3.3 2.7-6 6-6s6 2.7 6 6v1H4v-1z"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 280,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "16",
            cy: "10",
            r: "2.5"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 281,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M13 19c0-2.8 2.2-5 5-5s5 2.2 5 5v0.8H13V19z"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 282,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
        $[3] = t4;
        $[4] = t5;
    } else {
        t2 = $[1];
        t3 = $[2];
        t4 = $[3];
        t5 = $[4];
    }
    let t6;
    if ($[5] !== className) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: [
                t2,
                t3,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 295,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = className;
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    return t6;
};
_c8 = TwoUsersIcon;
const UnassignedUserIcon = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "24d0e2f1dd79634eb78c449221ed5d45d96d9ff47c590a6f41c26128cb53ddae") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "24d0e2f1dd79634eb78c449221ed5d45d96d9ff47c590a6f41c26128cb53ddae";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "12",
            cy: "9",
            r: "3.5"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 322,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M7 6.5c1-.8 2.3-1.3 3.7-1.4v1.8c-1 .1-2 .5-2.7 1.1L7 6.5z"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 323,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M17 6.5l-1.9 1.6c-.7-.6-1.7-1-2.7-1.1V5.1c1.4.1 2.7.6 3.7 1.4z"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 324,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
            x: "5.5",
            y: "10",
            width: "1.5",
            height: "4.5",
            rx: "0.7"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 325,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
            x: "17",
            y: "10",
            width: "1.5",
            height: "4.5",
            rx: "0.7"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 326,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M5 17c2.5-2.3 5.2-3 7-3s4.5.7 7 3v2H5v-2z"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 327,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
        $[3] = t4;
        $[4] = t5;
        $[5] = t6;
        $[6] = t7;
    } else {
        t2 = $[1];
        t3 = $[2];
        t4 = $[3];
        t5 = $[4];
        t6 = $[5];
        t7 = $[6];
    }
    let t8;
    if ($[7] !== className) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            viewBox: "0 0 24 24",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                t2,
                t3,
                t4,
                t5,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 344,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = className;
        $[8] = t8;
    } else {
        t8 = $[8];
    }
    return t8;
};
_c9 = UnassignedUserIcon;
const TickIcon = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "24d0e2f1dd79634eb78c449221ed5d45d96d9ff47c590a6f41c26128cb53ddae") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "24d0e2f1dd79634eb78c449221ed5d45d96d9ff47c590a6f41c26128cb53ddae";
    }
    const { className: t1, size: t2, color: t3 } = t0;
    const className = t1 === undefined ? "" : t1;
    const size = t2 === undefined ? 11 : t2;
    const color = t3 === undefined ? "currentColor" : t3;
    const t4 = size * 7 / 11;
    let t5;
    if ($[1] !== color) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M8.22924 0.659649L7.56959 0L4.60351 2.96608L5.26316 3.62573L8.22924 0.659649ZM10.2129 0L5.26316 4.94971L3.3076 2.99883L2.64795 3.65848L5.26316 6.27368L10.8772 0.659649L10.2129 0ZM0 3.65848L2.61521 6.27368L3.27485 5.61404L0.664328 2.99883L0 3.65848Z",
            fill: color
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 371,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = color;
        $[2] = t5;
    } else {
        t5 = $[2];
    }
    let t6;
    if ($[3] !== className || $[4] !== size || $[5] !== t4 || $[6] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            width: size,
            height: t4,
            viewBox: "0 0 11 7",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 379,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = className;
        $[4] = size;
        $[5] = t4;
        $[6] = t5;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    return t6;
};
_c10 = TickIcon;
const BackArrowIcon = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "24d0e2f1dd79634eb78c449221ed5d45d96d9ff47c590a6f41c26128cb53ddae") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "24d0e2f1dd79634eb78c449221ed5d45d96d9ff47c590a6f41c26128cb53ddae";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M15 18l-6-6 6-6"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 404,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] !== className) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: className,
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 411,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = className;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    return t3;
};
_c11 = BackArrowIcon;
const DetailsIcon = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "24d0e2f1dd79634eb78c449221ed5d45d96d9ff47c590a6f41c26128cb53ddae") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "24d0e2f1dd79634eb78c449221ed5d45d96d9ff47c590a6f41c26128cb53ddae";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-6 h-6" : t1;
    let t2;
    let t3;
    let t4;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "12",
            cy: "12",
            r: "9"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 435,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 16v-4"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 436,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "12",
            cy: "8",
            r: "1.25"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 437,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
        $[3] = t4;
    } else {
        t2 = $[1];
        t3 = $[2];
        t4 = $[3];
    }
    let t5;
    if ($[4] !== className) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            stroke: "currentColor",
            className: className,
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 448,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = className;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    return t5;
};
_c12 = DetailsIcon;
const MoreVerticalIcon = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "24d0e2f1dd79634eb78c449221ed5d45d96d9ff47c590a6f41c26128cb53ddae") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "24d0e2f1dd79634eb78c449221ed5d45d96d9ff47c590a6f41c26128cb53ddae";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-6 h-6" : t1;
    let t2;
    let t3;
    let t4;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "12",
            cy: "5",
            r: "2"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 472,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "12",
            cy: "12",
            r: "2"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 473,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "12",
            cy: "19",
            r: "2"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 474,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
        $[3] = t4;
    } else {
        t2 = $[1];
        t3 = $[2];
        t4 = $[3];
    }
    let t5;
    if ($[4] !== className) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "currentColor",
            viewBox: "0 0 24 24",
            className: className,
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 485,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = className;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    return t5;
};
_c13 = MoreVerticalIcon;
const MenuIcon = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "24d0e2f1dd79634eb78c449221ed5d45d96d9ff47c590a6f41c26128cb53ddae") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "24d0e2f1dd79634eb78c449221ed5d45d96d9ff47c590a6f41c26128cb53ddae";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    let t2;
    let t3;
    let t4;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "3",
            y1: "6",
            x2: "21",
            y2: "6"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 509,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "3",
            y1: "12",
            x2: "21",
            y2: "12"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 510,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "3",
            y1: "18",
            x2: "21",
            y2: "18"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 511,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
        $[3] = t4;
    } else {
        t2 = $[1];
        t3 = $[2];
        t4 = $[3];
    }
    let t5;
    if ($[4] !== className) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: className,
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 522,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = className;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    return t5;
};
_c14 = MenuIcon;
const CloseIcon = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "24d0e2f1dd79634eb78c449221ed5d45d96d9ff47c590a6f41c26128cb53ddae") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "24d0e2f1dd79634eb78c449221ed5d45d96d9ff47c590a6f41c26128cb53ddae";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "18",
            y1: "6",
            x2: "6",
            y2: "18"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 545,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "6",
            y1: "6",
            x2: "18",
            y2: "18"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 546,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
    } else {
        t2 = $[1];
        t3 = $[2];
    }
    let t4;
    if ($[3] !== className) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: className,
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 555,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = className;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    return t4;
};
_c15 = CloseIcon;
function AIIcon(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "24d0e2f1dd79634eb78c449221ed5d45d96d9ff47c590a6f41c26128cb53ddae") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "24d0e2f1dd79634eb78c449221ed5d45d96d9ff47c590a6f41c26128cb53ddae";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fill: "currentColor",
            d: "M19.894 15.963a1.025 1.025 0 0 0 .001-1.927l-1.858-.67a6.51 6.51 0 0 1-3.93-3.93l-.67-1.858a1.03 1.03 0 0 0-.961-.677c-.43 0-.818.272-.965.677l-.669 1.859a6.5 6.5 0 0 1-3.93 3.929l-1.857.67a1.03 1.03 0 0 0-.678.963c0 .431.272.818.677.964l1.858.67a6.5 6.5 0 0 1 3.93 3.929l.67 1.86c.145.404.533.675.963.675s.818-.272.963-.676l.67-1.859a6.51 6.51 0 0 1 3.929-3.929zm-2.86-8.079.94.34a2.89 2.89 0 0 1 1.742 1.741l.339.94a.93.93 0 0 0 .875.616c.39 0 .743-.247.875-.615l.34-.94a2.88 2.88 0 0 1 1.741-1.743l.942-.339a.93.93 0 0 0 .614-.873.93.93 0 0 0-.614-.876l-.942-.34a2.89 2.89 0 0 1-1.742-1.742l-.34-.94a.931.931 0 0 0-1.748 0l-.34.94a2.89 2.89 0 0 1-1.742 1.742l-.943.34a.93.93 0 0 0-.613.876c.001.39.249.741.615.873m7.793 14.23-.94-.338a2.89 2.89 0 0 1-1.743-1.742l-.34-.941a.932.932 0 0 0-1.75 0l-.339.94a2.88 2.88 0 0 1-1.742 1.743l-.94.338a.93.93 0 0 0-.616.873c0 .39.245.743.615.877l.941.34a2.88 2.88 0 0 1 1.742 1.741l.339.94a.932.932 0 0 0 1.752.001l.339-.94a2.89 2.89 0 0 1 1.742-1.743l.945-.34a.93.93 0 0 0 .611-.876c0-.39-.25-.74-.616-.872"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 583,
            columnNumber: 10
        }, this);
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== props) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            fill: "none",
            viewBox: "0 0 30 30",
            xmlns: "http://www.w3.org/2000/svg",
            ...props,
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 590,
            columnNumber: 10
        }, this);
        $[4] = props;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    return t2;
}
_c16 = AIIcon;
function WorkflowIcon(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "24d0e2f1dd79634eb78c449221ed5d45d96d9ff47c590a6f41c26128cb53ddae") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "24d0e2f1dd79634eb78c449221ed5d45d96d9ff47c590a6f41c26128cb53ddae";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            fill: "currentColor",
            d: "M11.2485 6.25C11.2485 4.86929 12.3678 3.75 13.7485 3.75H16.2485C17.6292 3.75 18.7485 4.86929 18.7485 6.25V8.75C18.7485 9.87346 18.0075 10.8238 16.9875 11.139C16.5918 11.2613 16.2485 11.5858 16.2485 12V13C16.2485 13.4142 16.5843 13.75 16.9985 13.75H21.2485C22.6292 13.75 23.7485 14.8693 23.7485 16.25V18.75C25.1292 18.75 26.2485 19.8693 26.2485 21.25V23.75C26.2485 25.1307 25.1292 26.25 23.7485 26.25H21.2485C19.8678 26.25 18.7485 25.1307 18.7485 23.75V21.25C18.7485 19.8693 19.8678 18.75 21.2485 18.75V17C21.2485 16.5858 20.9127 16.25 20.4985 16.25H9.49854C9.08432 16.25 8.74854 16.5858 8.74854 17V18.75C10.1292 18.75 11.2485 19.8693 11.2485 21.25V23.75C11.2485 25.1307 10.1292 26.25 8.74854 26.25H6.24854C4.86782 26.25 3.74854 25.1307 3.74854 23.75V21.25C3.74854 19.8693 4.86782 18.75 6.24854 18.75V16.25C6.24854 14.8693 7.36782 13.75 8.74854 13.75H12.9985C13.4127 13.75 13.7485 13.4142 13.7485 13V12C13.7485 11.5858 13.4053 11.2613 13.0095 11.139C11.9896 10.8238 11.2485 9.87346 11.2485 8.75V6.25ZM16.2485 7C16.2485 6.58579 15.9127 6.25 15.4985 6.25H14.4985C14.0843 6.25 13.7485 6.58579 13.7485 7V8C13.7485 8.41421 14.0843 8.75 14.4985 8.75H15.4985C15.9127 8.75 16.2485 8.41421 16.2485 8V7ZM6.99854 21.25C6.58432 21.25 6.24854 21.5858 6.24854 22V23C6.24854 23.4142 6.58432 23.75 6.99854 23.75H7.99854C8.41275 23.75 8.74854 23.4142 8.74854 23V22C8.74854 21.5858 8.41275 21.25 7.99854 21.25H6.99854ZM21.9985 21.25C21.5843 21.25 21.2485 21.5858 21.2485 22V23C21.2485 23.4142 21.5843 23.75 21.9985 23.75H22.9985C23.4127 23.75 23.7485 23.4142 23.7485 23V22C23.7485 21.5858 23.4127 21.25 22.9985 21.25H21.9985Z"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 608,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 30 30",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...props,
            children: t0
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 615,
            columnNumber: 10
        }, this);
        $[2] = props;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    return t1;
}
_c17 = WorkflowIcon;
function UserGroupFilledIcon(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "24d0e2f1dd79634eb78c449221ed5d45d96d9ff47c590a6f41c26128cb53ddae") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "24d0e2f1dd79634eb78c449221ed5d45d96d9ff47c590a6f41c26128cb53ddae";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M8.77193 3.50877C9.74269 3.50877 10.5205 2.72515 10.5205 1.75439C10.5205 0.783626 9.74269 0 8.77193 0C7.80117 0 7.01754 0.783626 7.01754 1.75439C7.01754 2.72515 7.80117 3.50877 8.77193 3.50877ZM4.09357 3.50877C5.06433 3.50877 5.84211 2.72515 5.84211 1.75439C5.84211 0.783626 5.06433 0 4.09357 0C3.12281 0 2.33918 0.783626 2.33918 1.75439C2.33918 2.72515 3.12281 3.50877 4.09357 3.50877ZM4.09357 4.67836C2.73099 4.67836 0 5.36257 0 6.72515V8.18713H8.18713V6.72515C8.18713 5.36257 5.45614 4.67836 4.09357 4.67836ZM8.77193 4.67836C8.60234 4.67836 8.40936 4.69006 8.20468 4.7076C8.88304 5.19883 9.35673 5.85965 9.35673 6.72515V8.18713H12.8655V6.72515C12.8655 5.36257 10.1345 4.67836 8.77193 4.67836Z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 633,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 13 9",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...props,
            children: t0
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 640,
            columnNumber: 10
        }, this);
        $[2] = props;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    return t1;
}
_c18 = UserGroupFilledIcon;
function CampaignIcon(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "24d0e2f1dd79634eb78c449221ed5d45d96d9ff47c590a6f41c26128cb53ddae") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "24d0e2f1dd79634eb78c449221ed5d45d96d9ff47c590a6f41c26128cb53ddae";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fill: "currentColor",
            d: "M10.0002 1.66678C10.4604 1.66678 10.8335 2.03987 10.8335 2.50011C10.8335 2.96035 10.4604 3.33345 10.0002 3.33345C8.68162 3.33345 7.39287 3.72476 6.29655 4.45731C5.20028 5.18982 4.3459 6.23075 3.84131 7.44884C3.33675 8.66695 3.20408 10.0074 3.46126 11.3006C3.7185 12.5938 4.35346 13.7821 5.28581 14.7145C6.21816 15.6468 7.4065 16.2818 8.69971 16.539C9.99285 16.7962 11.3333 16.6635 12.5514 16.159C13.7695 15.6544 14.8105 14.8 15.543 13.7037C16.2755 12.6074 16.6668 11.3187 16.6668 10.0001C16.6668 9.53988 17.0399 9.16678 17.5002 9.16678C17.9604 9.16678 18.3335 9.53988 18.3335 10.0001C18.3335 11.6483 17.8446 13.2594 16.9289 14.6298C16.0132 16.0002 14.7121 17.0688 13.1895 17.6995C11.6667 18.3302 9.99069 18.4947 8.37419 18.1731C6.75778 17.8516 5.2728 17.0582 4.10742 15.8929C2.94204 14.7275 2.14872 13.2425 1.82715 11.6261C1.5056 10.0096 1.67005 8.33354 2.30078 6.81082C2.9315 5.28817 4.00009 3.98706 5.37044 3.0714C6.74085 2.15572 8.35199 1.66678 10.0002 1.66678ZM8.62158 5.1938C9.06396 5.06695 9.52578 5.32273 9.65267 5.76509C9.77953 6.20749 9.52379 6.66931 9.08138 6.79617L8.87793 6.86128C8.40985 7.02863 7.98406 7.29881 7.63281 7.65311C7.23136 8.05807 6.94052 8.55953 6.78808 9.109C6.63567 9.65859 6.62648 10.2388 6.76204 10.7928C6.89759 11.3465 7.17328 11.8561 7.56201 12.2731C7.95093 12.6901 8.44062 13.0009 8.98372 13.1748C9.52691 13.3486 10.1062 13.3804 10.665 13.2667C11.2238 13.153 11.7443 12.8976 12.1763 12.5253C12.6083 12.1531 12.9374 11.6761 13.1325 11.1402C13.2899 10.7079 13.7678 10.485 14.2002 10.6422C14.6326 10.7996 14.8555 11.2775 14.6982 11.7099C14.4057 12.5137 13.9122 13.2292 13.2643 13.7875C12.6162 14.346 11.8354 14.7295 10.9971 14.9C10.1588 15.0706 9.29063 15.0232 8.47591 14.7625C7.66118 14.5017 6.92718 14.0356 6.34375 13.4099C5.7603 12.7843 5.34673 12.0192 5.14339 11.1883C4.94012 10.3574 4.95305 9.48813 5.18164 8.66385C5.41026 7.83948 5.84728 7.08797 6.44954 6.48042C7.05174 5.87295 7.79937 5.42963 8.62158 5.1938ZM13.5353 2.33979C13.7476 2.1275 14.0582 2.04562 14.3475 2.12576C14.6368 2.20591 14.8606 2.43591 14.9334 2.72716L15.4014 4.59891L17.2731 5.06684C17.5644 5.13966 17.7944 5.36347 17.8745 5.65278C17.9547 5.94211 17.8728 6.25266 17.6605 6.46496L15.0091 9.11632C14.8302 9.29523 14.5794 9.38339 14.328 9.35558L12.0729 9.10493L10.5894 10.5893C10.2639 10.9147 9.73641 10.9147 9.41097 10.5893C9.08553 10.2639 9.08553 9.73636 9.41097 9.41092L10.8945 7.92654L10.6447 5.67313C10.6167 5.42152 10.7049 5.17017 10.884 4.99116L13.5353 2.33979ZM12.3455 5.88553L12.5221 7.47733L14.1139 7.65392L15.4404 6.32661L14.5119 6.09468C14.2134 6.02 13.9803 5.78683 13.9056 5.48839L13.6729 4.55903L12.3455 5.88553Z"
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 658,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...props,
            children: t0
        }, void 0, false, {
            fileName: "[project]/src/icons/icons.tsx",
            lineNumber: 665,
            columnNumber: 10
        }, this);
        $[2] = props;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    return t1;
}
_c19 = CampaignIcon;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19;
__turbopack_context__.k.register(_c, "InboxIcon");
__turbopack_context__.k.register(_c1, "HeaderInboxIcon");
__turbopack_context__.k.register(_c2, "ContactsIcon");
__turbopack_context__.k.register(_c3, "AiEmployeesIcon");
__turbopack_context__.k.register(_c4, "WorkflowsIcon");
__turbopack_context__.k.register(_c5, "CampaignsIcon");
__turbopack_context__.k.register(_c6, "HomeIcon");
__turbopack_context__.k.register(_c7, "SingleUserIcon");
__turbopack_context__.k.register(_c8, "TwoUsersIcon");
__turbopack_context__.k.register(_c9, "UnassignedUserIcon");
__turbopack_context__.k.register(_c10, "TickIcon");
__turbopack_context__.k.register(_c11, "BackArrowIcon");
__turbopack_context__.k.register(_c12, "DetailsIcon");
__turbopack_context__.k.register(_c13, "MoreVerticalIcon");
__turbopack_context__.k.register(_c14, "MenuIcon");
__turbopack_context__.k.register(_c15, "CloseIcon");
__turbopack_context__.k.register(_c16, "AIIcon");
__turbopack_context__.k.register(_c17, "WorkflowIcon");
__turbopack_context__.k.register(_c18, "UserGroupFilledIcon");
__turbopack_context__.k.register(_c19, "CampaignIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/icons/icons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "polygonIconsData",
    ()=>polygonIconsData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/icons/icons.tsx [app-client] (ecmascript)");
;
;
const polygonIconsData = [
    {
        id: "inbox",
        label: "Inbox",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InboxIcon"], {
            className: "size-4 xl:size-4"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/icons.tsx",
            lineNumber: 23,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        position: "top-[25%] left-[5%] lg:top-[25%] lg:left-[15%]",
        size: "size-[6rem] md:size-[7rem] xl:size-[5vw] 2xl:size-20",
        href: "/inbox"
    },
    {
        id: "ai",
        label: "AI",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AIIcon"], {
            className: "size-6 xl:size-6"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/icons.tsx",
            lineNumber: 31,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        position: "top-[10%] left-0 lg:top-[10%] lg:left-[25%]",
        size: "size-[6rem] md:size-[7rem] xl:size-[6vw] 2xl:size-20",
        href: "#"
    },
    {
        id: "contacts",
        label: "Contact Us",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserGroupFilledIcon"], {
            className: "size-4 xl:size-6"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/icons.tsx",
            lineNumber: 39,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        position: "top-[30%] left-[10%] lg:top-[30%] lg:left-[29%]",
        size: "size-[6rem] md:size-[7rem] xl:size-[5vw] 2xl:size-20",
        href: "#"
    },
    {
        id: "campaigns",
        label: "Compaigns",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CampaignIcon"], {
            className: "size-4 xl:size-6"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/icons.tsx",
            lineNumber: 47,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        position: "top-[10%] right-[5%] lg:top-[10%] lg:right-[14%]",
        size: "size-[6rem] md:size-[7rem] xl:size-[5vw] 2xl:size-20",
        href: "#"
    },
    {
        id: "workflows",
        label: "Workflows",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkflowIcon"], {
            className: "size-4 xl:size-5 "
        }, void 0, false, {
            fileName: "[project]/src/components/icons/icons.tsx",
            lineNumber: 55,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        position: "top-[20%] right-[10%] lg:top-[20%] lg:right-[25%]",
        size: "size-[6rem] md:size-[7rem] xl:size-[5vw] 2xl:size-20",
        href: "#"
    },
    {
        id: "Campaigns",
        label: "Campaigns",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserGroupFilledIcon"], {
            className: "size-4 xl:size-6"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/icons.tsx",
            lineNumber: 63,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        position: "top-[30%] right-[5%] lg:top-[30%] lg:right-[10%]",
        size: "size-[6rem] md:size-[7rem] xl:size-[4vw] 2xl:size-20",
        href: "#"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/common/DesktopModuleNavigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$usePolygonStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/global/usePolygonStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const DesktopModuleNavigation = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "099ac9fcc26aae3b5b3704ffc6eacef6c308cf00646193d4d30bcad3028b0445") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "099ac9fcc26aae3b5b3704ffc6eacef6c308cf00646193d4d30bcad3028b0445";
    }
    const { activeModuleKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$usePolygonStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspaceStore"])();
    let t0;
    if ($[1] !== activeModuleKey) {
        t0 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polygonIconsData"]?.map((item, index)=>{
            const isActive = activeModuleKey === item.label;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("flex items-center gap-x-[10%] transition-all lg:rounded-[0.5vw]", isActive ? "px-[3%] py-[1.5%] bg-[#EFF2F2]" : "px-[2%] py-[0.5%] bg-white"),
                children: [
                    item.icon,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                        className: "font-bold",
                        children: item.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/DesktopModuleNavigation.tsx",
                        lineNumber: 22,
                        columnNumber: 205
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, index, true, {
                fileName: "[project]/src/components/common/DesktopModuleNavigation.tsx",
                lineNumber: 22,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        });
        $[1] = activeModuleKey;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== t0) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden lg:flex items-center gap-x-[2%]",
            children: t0
        }, void 0, false, {
            fileName: "[project]/src/components/common/DesktopModuleNavigation.tsx",
            lineNumber: 31,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t0;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
};
_s(DesktopModuleNavigation, "pDHhiqi58lwef6ZKXM2OZyhNFfk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$usePolygonStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspaceStore"]
    ];
});
_c = DesktopModuleNavigation;
const __TURBOPACK__default__export__ = DesktopModuleNavigation;
var _c;
__turbopack_context__.k.register(_c, "DesktopModuleNavigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_48231b67._.js.map