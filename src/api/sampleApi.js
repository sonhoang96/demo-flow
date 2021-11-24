import axios from "axios";

export function fetchItems() {
    return axios({
        url: 'http://localhost:3001/items'
    })
}

/**
 * @param {string} name
 * Dữ liệu người dùng muốn thêm
 */
export function insertItem(name) {
    return axios({
        url: 'http://localhost:3001/items',
        method: 'POST',
        data: {
            name
        }
    })
}

/**
 * @param {id} id
 * ID của phần tử muốn xóa
 */

export function removeItem(id) {
    return axios({
        url: 'http://localhost:3001/items/' + id,
        method: 'DELETE'
    })
}

/**
 * @param {Object} item
 * Id và name của đối tượng muốn update
 */
export function setItem(item) {
    return axios({
        url: 'http://localhost:3001/items/' + item.id,
        method: 'PUT',
        data: {
            name: item.name
        }
    })
}
