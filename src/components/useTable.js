import {reactive} from '@vue/composition-api'

/**
 * Hàm reactive theo dõi và trả về sự thay đổi của dữ liệu
 * ref và reactive cũng có cùng khả năng
 * Khuyến khích dùng ref với dữ liệu nguyên thủy Boolean, String, Number,...
 * Khuyến khích dùng reactive với Object
 */
export default function () {
    const cols = reactive([
        {
            id: 1,
            prop: 'id',
            label: 'ID',
            width: 200
        },
        {
            id: 2,
            prop: 'name',
            label: 'Tên',
            width: 200
        }
    ])

    return {
        cols
    }
}
