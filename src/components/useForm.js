import {
    ref,
    watch,
} from '@vue/composition-api'
import {useSample} from '../store/sampleStore'
import {storeToRefs} from "pinia";

export default function () {
    const sampleStore = useSample();
    const { addItem, updateItem } = sampleStore;
    const {selected} = storeToRefs(sampleStore);
    const name = ref('');
    const loading = ref(false);
    const clean = () => {
        sampleStore.selected = {id: null}
        name.value = ''
    }

    const handleAddItem = async (name) => {
        try {
            loading.value = true;
            await addItem(name);
        } catch (e) {
            console.log(e)
        } finally {
            loading.value = false
        }
    }

    const handleUpdateItem = async (item) => {
        try {
            loading.value = true;
            await updateItem(item);
        } catch (e) {
            console.log(e)
        } finally {
            loading.value = false
        }
    }




    watch(selected, () => {
        if (selected.id !== null) {
            name.value = selected.value.name
        }
    })

    return {
        selected, sampleStore, name, clean, handleAddItem, handleUpdateItem
    }
}
