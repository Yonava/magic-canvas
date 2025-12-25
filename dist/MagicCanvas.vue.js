import { twMerge } from "tailwind-merge";
import { onBeforeUnmount, onMounted, ref } from "vue";
const props = defineProps();
const canvas = ref();
onMounted(() => {
    if (!canvas.value)
        throw new Error("Canvas not found in DOM. Check ref link.");
    props.canvasRef(canvas.value);
});
onBeforeUnmount(() => {
    if (!canvas.value)
        throw new Error("Canvas not found in DOM. Check ref link.");
    props.cleanup(canvas.value);
});
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.canvas, __VLS_intrinsics.canvas)({
    ...({
        ...__VLS_ctx.$attrs,
        class: __VLS_ctx.twMerge(__VLS_ctx.$attrs.class, ['w-full', 'h-full']),
    }),
    ref: "canvas",
});
// @ts-ignore
[$attrs, $attrs, twMerge,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
