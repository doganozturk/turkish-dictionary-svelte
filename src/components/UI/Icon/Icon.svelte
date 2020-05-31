<script>
    export let name;
    export let size = 24;
    export let width = null;
    export let height = null;
    export let color = 'var(--text-paragraph-2)';
</script>

<style>
    .icon {
        position: relative;
        overflow: hidden;
        vertical-align: middle;
        -o-object-fit: contain;
        object-fit: contain;
        -webkit-transform-origin: center center;
        transform-origin: center center;
        /*stroke: currentColor;*/
        /*stroke-width: 2;*/
        stroke-linecap: round;
        stroke-linejoin: round;
        fill: none;
    }
</style>

<svg
    class="icon"
    width={width ? width : size}
    height={height ? height : size}
    style={`color: ${color};`}>
    <use xlink:href="#{name}" />
</svg>
