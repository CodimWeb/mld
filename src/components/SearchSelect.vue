<template>
    <div class="search-select" :list="list">
        <div class="search-select__header">
            <input v-on:input="filterValue" type="text" class="form-control search-select__field" :value="searchValue" placeholder="Выберите справку">
            <button v-if="searchValue" v-on:click="resetList" class="btn btn-unstyled search-select__reset">
                <icon-close/>
            </button>
            <button v-else class="btn btn-unstyled search-select__reset">
                <icon-search/>
            </button>
        </div>
        <div class="search-select__scroll-container">
            <div class="search-select__list" >
                <div v-for="(item, i) in menuList" :key="i" :ref="i" v-on:click="selectItem(i)" :class="{'selected': item == searchValue}"  class="search-select__item">{{item}}</div>
            </div>
        </div>    
    </div>
</template>
<script>
    import PerfectScrollbar from 'perfect-scrollbar';
    import IconSearch from '../components/icons/IconSearch'
    import IconClose from '../components/icons/IconClose'

    export default {
        name: "search-select",
        components: {
            IconSearch,
            IconClose,
        },
        props: {
            list: {
                type: Array,
            }
        },
        
        data() {
            return {
                searchValue: '',
                menuList: this.list,
                ps: null,
                menu: null,
                selectIndex: undefined,
            }
        },
        mounted() {
            this.menu = this.$el.querySelector('.search-select__scroll-container');
            this.ps = new PerfectScrollbar(this.menu, {
                wheelSpeed: 0.5,
                wheelPropagation: true,
                minScrollbarLength: 20
            });
        },
        updated() {
            this.ps.update();
        },
        beforeDestroy() {
            if(this.ps) {
                this.ps.destroy();
            }
        },
        methods: {
            filterValue: function(e) {
                this.searchValue = e.target.value.toLowerCase();
                let searchResult = this.list.filter(item => {
                    let itemValue = item.toLowerCase();
                    return itemValue.indexOf(this.searchValue) !== -1;
                });
                this.menuList = this.searchValue == '' ? this.list : searchResult;
                //reinit scroll
                this.ps.destroy();
                this.ps = new PerfectScrollbar(this.menu, {
                    wheelSpeed: 0.5,
                    wheelPropagation: true,
                    minScrollbarLength: 20
                });
            },
            resetList: function() {
                this.searchValue = '';
                this.menuList = this.list;
            },
            selectItem: function(i) {
                this.searchValue = this.$refs[i][0].textContent;
                this.menuList = this.list;
                this.selectIndex = i;
            }
        }
    }
</script>
