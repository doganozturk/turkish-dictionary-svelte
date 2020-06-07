export function longpress(node, threshold = 500) {
    // note — a complete answer would also consider touch events

    const handleMousedown = () => {
        const timeout = setTimeout(() => {
            node.dispatchEvent(new CustomEvent('longpress'));
        }, threshold);

        const cancel = () => {
            clearTimeout(timeout);
            node.removeEventListener('touchmove', cancel);
            node.removeEventListener('touchend', cancel);
            node.removeEventListener('touchcancel', cancel);
        };

        node.addEventListener('touchmove', cancel);
        node.addEventListener('touchend', cancel);
        node.addEventListener('touchcancel', cancel);
    };

    node.addEventListener('touchstart', handleMousedown);

    return {
        destroy() {
            node.removeEventListener('touchstart', handleMousedown);
        },
    };
}
