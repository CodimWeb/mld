<template>
    <div class="perfect-scrollbar">
        <slot></slot>
    </div>
</template>

<script>
    // import baron from 'baron';
    import PerfectScrollbar from 'perfect-scrollbar';

    export default {
        name: 'CustomScrollbar',
        props: {
            clipperCls: {
                type: String
            },
            scrollerCls: {
                type: String
            },
            trackCls: {
                type: String
            },
            freeCls: {
                type: String
            },
            barCls: {
                type: String
            },
            scrollDirection: {
                type: String
            }
        },
        data() {
            return {
                ps: null,
            }
        },
        methods: {
            handleResize: function() {
                this.ps.destroy();
                this.ps = new PerfectScrollbar(this.$el, {
                    wheelSpeed: 0.5,
                    wheelPropagation: true,
                    minScrollbarLength: 20
                });
            }
        },
        mounted() {
            this.ps = new PerfectScrollbar(this.$el, {
                wheelSpeed: 0.5,
                wheelPropagation: true,
                minScrollbarLength: 20
            });
            window.addEventListener('resize', this.handleResize)
        },
        updated() {
            this.ps.update();
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.handleResize)
            if(this.ps) {
                this.ps.destroy();
            }
        }
    }

</script>