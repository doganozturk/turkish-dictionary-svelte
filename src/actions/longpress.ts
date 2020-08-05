export function longpress(
    node: HTMLElement,
    threshold = 300,
): { destroy: () => void } {
    const handleMousedown = () => {
        const timeout = setTimeout(() => {
            node.dispatchEvent(new CustomEvent('longpress'));
        }, threshold);

        const handleContextmenu = (e: TouchEvent) => e.preventDefault();

        const cancel = () => {
            clearTimeout(timeout);
            node.removeEventListener('touchmove', cancel);
            node.removeEventListener('touchend', cancel);
            node.removeEventListener('touchcancel', cancel);
            node.removeEventListener('contextmenu', handleContextmenu);
        };

        node.addEventListener('touchmove', cancel);
        node.addEventListener('touchend', cancel);
        node.addEventListener('touchcancel', cancel);
        node.addEventListener('contextmenu', handleContextmenu);
    };

    node.addEventListener('touchstart', handleMousedown);

    return {
        destroy() {
            node.removeEventListener('touchstart', handleMousedown);
        },
    };
}
