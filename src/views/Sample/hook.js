/** onMounted cũng giống như lifecycle của component */
import { onMounted } from '@vue/composition-api'
import { useSample } from '../../store/sampleStore'
import { storeToRefs } from "pinia";

export default function () {
    const sampleStore = useSample();
    const {listItems} = storeToRefs(sampleStore)
    const {getItems} = sampleStore

    /** Khi component gọi tới file này thì onMounted sẽ bắt sự kiện mounted của component đó và thực thi hành động */
    onMounted(() => {
        getItems()
    })

    return {
        listItems, sampleStore
    }
}
