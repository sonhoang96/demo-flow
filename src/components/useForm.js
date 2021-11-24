import {
    ref,
    watch,
} from '@vue/composition-api'
import {useSample} from '../store/sampleStore'
import {storeToRefs} from "pinia";

export default function () {
    const sampleStore = useSample()
    const {selected} = storeToRefs(sampleStore)
    const name = ref('')
    const clean = () => {
        sampleStore.selected = {id: null}
        name.value = ''
    }

    watch(selected, () => {
        if (selected.id !== null) {
            name.value = selected.value.name
        }
    })

    return {
        selected, sampleStore, name, clean
    }
}
