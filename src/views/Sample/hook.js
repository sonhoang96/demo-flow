/** onMounted cũng giống như lifecycle của component */
import { onMounted, ref } from '@vue/composition-api'
import { useSample } from '../../store/sampleStore'
import { storeToRefs } from "pinia";

export default function () {
    const sampleStore = useSample();
    const {getItems, deleteItem, selectItem} = sampleStore;
    const loading = ref(false);
    const {listItems} = storeToRefs(sampleStore);


    const handleGetItem = async () => {
        try {
            loading.value = true;
            await getItems();
        } catch (e) {
            console.log(e)
        } finally {
            loading.value = false
        }
    }

    const handleDeleteITem = async (id) => {
        try {
            loading.value = true;
            await deleteItem(id);
        } catch (e) {
            console.log(e)
        } finally {
            loading.value = false
        }
    }

    const handleSelectItem = (item) => selectItem(item)

    /** Khi component gọi tới file này thì onMounted sẽ bắt sự kiện mounted của component đó và thực thi hành động */
    onMounted(async () => await handleGetItem())

    return {
        listItems, loading, handleDeleteITem, handleSelectItem
    }
}
