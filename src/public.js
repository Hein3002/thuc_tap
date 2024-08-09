function getFetch(url, jsonCondition, token) {
    let urlOpen = url;
    if (jsonCondition !== undefined) {
        urlOpen += '?' + Object.entries(jsonCondition).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join('&');
    }

    return fetch(urlOpen, {
        headers: {
            'Content-Type': 'application/json',
            'Token': token
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching content:', error);
            throw error; // Ném lại lỗi để có thể được xử lý bởi hàm gọi
        });
}
function addFetch(url, jsonValue, token) {
    return fetch(url, {
        method: 'POST', // Phương thức POST
        headers: {
            'Content-Type': 'application/json',
            'Token': token
        },
        body: jsonValue // Chuyển đổi đối tượng JSON thành chuỗi JSON
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // Giả sử phản hồi là JSON
        })
        .then(content => {
            return content;
        })
        .catch(error => {
            console.error('Error posting content:', error);
            throw error; // Ném lại lỗi để có thể xử lý bởi người gọi hàm
        });
}
function updateFetch(url, jsonValue, id, token) {
    return fetch(url + '/' + id, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Token': token
        },
        body: jsonValue
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // Giả sử phản hồi là JSON
        })
        .then(content => {
            return content;
        })
        .catch(error => {
            console.error('Error posting content:', error);
            throw error; // Ném lại lỗi để có thể xử lý bởi người gọi hàm
        });
}
function deleteFetch(url, id, token) {
    return fetch(url + '/' + id, {
        headers: {
            'Content-Type': 'application/json',
            'Token': token
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // Giả sử phản hồi là JSON
        })
        .then(content => {
            return content;
        })
        .catch(error => {
            console.error('Error posting content:', error);
            throw error; // Ném lại lỗi để có thể xử lý bởi người gọi hàm
        });
}
