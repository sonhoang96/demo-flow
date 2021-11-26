import {defineStore} from 'pinia'
import * as APIs from '../api/sampleApi'

export const useSample = defineStore('sample', {
    state() {
        return {
            isLoading: false,
            listItems: [],
            selected: {id: null},
            error: null
        }
    },
    actions: {
        async getItems() {
            try {
                const res = await APIs.fetchItems()
                this.listItems = res.data
            } catch (error) {
                this.error = error
            }
        },
        async addItem(name) {
            try {
                await APIs.insertItem(name)
                await this.getItems()
            } catch (error) {
                this.error = error
            }
        },
        async deleteItem(id) {
            try {
                await APIs.removeItem(id)
                await this.getItems()
            } catch (error) {
                this.error = error
            }
        },
        async updateItem(item) {
            // console.log('item', item)
            try {
                await APIs.setItem(item)
                await this.getItems()
            } catch (error) {
                this.error = error
            }
        },
        selectItem(item) {
            this.$patch({selected: item})
        },
    }
})
